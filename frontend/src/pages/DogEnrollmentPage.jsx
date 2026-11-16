import React, { useState, useEffect } from 'react';
import { BRAND } from '../constants/brand';
import { apiService } from '../services/api';
import { navigate } from '../constants/navigation';

export default function DogEnrollmentPage({ onNavigateHome }) {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' });
    fetchRegistry();
  }, []);

  const todayStr = new Date().toISOString().split('T')[0];
  const autoEnrollmentNo = `FI-REG-${Date.now().toString().slice(-6)}`;

  const [activeView, setActiveView] = useState('form'); // 'form' | 'database'
  const [registry, setRegistry] = useState([]);
  const [loadingRegistry, setLoadingRegistry] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [filterTemperament, setFilterTemperament] = useState('All');
  const [selectedRecord, setSelectedRecord] = useState(null);
  const [copiedReg, setCopiedReg] = useState(false);
  const [registeredNumber, setRegisteredNumber] = useState('');

  const [formData, setFormData] = useState({
    enrollmentNo: autoEnrollmentNo,
    dateOfEnrollment: todayStr,
    checkInDate: '',
    checkOutDate: '',
    boardingName: BRAND.name,

    // 1. Pet Parent Details
    parentName: '',
    contact1: '',
    contact2: '',
    email: '',
    address: '',
    city: 'Faridabad',
    pincode: '121004',
    addressProofType: 'Aadhaar Card',
    idDocumentNo: '',

    // 2. Pet Details
    petName: '',
    breed: '',
    weight: '',
    ageDob: '',
    gender: 'Male',
    neutered: 'Yes',
    colourMarkings: '',
    petPhoto: null,

    // 3. Vaccination Record
    vaccines: [
      { name: 'Rabies', dateGiven: '', nextDue: '', attached: 'Yes' },
      { name: 'DHPP / DHLPP (combination)', dateGiven: '', nextDue: '', attached: 'Yes' },
      { name: 'Bordetella (kennel cough)', dateGiven: '', nextDue: '', attached: 'Yes' },
      { name: 'Leptospirosis', dateGiven: '', nextDue: '', attached: 'Yes' },
      { name: 'Tick & flea / deworming', dateGiven: '', nextDue: '', attached: 'Yes' },
      { name: 'Other', dateGiven: '', nextDue: '', attached: 'No' },
    ],
    vaccinationPapersAttached: true,

    // 4. Health & Special Care
    disabilityOrDisease: '',
    currentMedication: '',
    allergies: '',
    dietInstructions: '',

    // 5. Nature & Temperament
    temperament: 'Friendly',
    getsAlongWithDogs: 'Yes',
    hasEverBitten: 'No',
    fearsTriggersNotes: '',

    // 6. Veterinarian & Emergency Contact
    vetClinicName: '',
    vetPhone: '',
    emergencyContactName: '',
    emergencyRelationPhone: '',

    // 7. Declaration & Signature
    declarationAgreed: true,
    signatureName: '',
    signatureDate: todayStr,

    // Office use
    receivedBy: '',
    documentsVerified: false,
    kennelRoomNo: ''
  });

  const [photoPreview, setPhotoPreview] = useState(null);
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [rabiesError, setRabiesError] = useState('');

  const fetchRegistry = async () => {
    setLoadingRegistry(true);
    try {
      const res = await apiService.getEnrollments();
      if (res && res.enrollments) {
        setRegistry(res.enrollments);
      }
    } catch (err) {
      console.warn('Could not load online enrollments database:', err);
    } finally {
      setLoadingRegistry(false);
    }
  };

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const handleVaccineChange = (index, field, value) => {
    setRabiesError('');
    setFormData((prev) => {
      const updated = [...prev.vaccines];
      updated[index] = { ...updated[index], [field]: value };
      return { ...prev, vaccines: updated };
    });
  };

  const handlePhotoUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setPhotoPreview(reader.result);
        setFormData((prev) => ({ ...prev, petPhoto: reader.result }));
      };
      reader.readAsDataURL(file);
    }
  };

  const handlePrint = () => {
    window.print();
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Strict Rabies Requirement Verification
    const rabiesVaccine = formData.vaccines.find((v) => v.name.toLowerCase().includes('rabies'));
    if (!rabiesVaccine?.dateGiven) {
      setRabiesError('Rabies vaccination is strictly mandatory. Please enter the date the Rabies vaccine was administered.');
      const sec = document.getElementById('section-vaccination-record');
      if (sec) sec.scrollIntoView({ behavior: 'smooth' });
      return;
    }

    if (rabiesVaccine?.attached === 'No') {
      setRabiesError('Rabies vaccination is strictly mandatory. Without rabies vaccination certificate attached, we will NOT welcome the pet.');
      const sec = document.getElementById('section-vaccination-record');
      if (sec) sec.scrollIntoView({ behavior: 'smooth' });
      return;
    }

    setRabiesError('');
    setSubmitting(true);

    try {
      const res = await apiService.submitEnrollment(formData);
      const uniqueReg = res?.regNumber || res?.record?.regNumber || res?.record?.enrollmentNo || formData.enrollmentNo;
      setRegisteredNumber(uniqueReg);
      try {
        localStorage.setItem('furrever_reg_number', uniqueReg);
        localStorage.setItem('furrever_pet_name', formData.petName);
      } catch (storageErr) {
        // Safe fallback if local storage restricted
      }
      setSubmitted(true);
      if (res?.record) {
        setRegistry((prev) => [res.record, ...prev]);
      } else {
        setRegistry((prev) => [{ ...formData, regNumber: uniqueReg, receivedAt: new Date().toISOString() }, ...prev]);
      }
    } catch (err) {
      console.warn('Submission warning (using optimistic state):', err);
      const uniqueReg = formData.enrollmentNo;
      setRegisteredNumber(uniqueReg);
      try {
        localStorage.setItem('furrever_reg_number', uniqueReg);
        localStorage.setItem('furrever_pet_name', formData.petName);
      } catch (storageErr) {}
      setSubmitted(true);
      setRegistry((prev) => [{ ...formData, regNumber: uniqueReg, receivedAt: new Date().toISOString() }, ...prev]);
    } finally {
      setSubmitting(false);
    }
  };

  const handleShareWhatsApp = (record = formData) => {
    const msg = `*OFFICIAL DOG ENROLMENT RECORD - FURREVER INN*
*Enrolment No:* ${record.enrollmentNo}
*Dates of Stay:* ${record.checkInDate || 'TBD'} to ${record.checkOutDate || 'TBD'}
---------------------------
*1. PET PARENT DETAILS*
Name: ${record.parentName}
Phone: ${record.contact1} ${record.contact2 ? `| Alt: ${record.contact2}` : ''}
Email: ${record.email || 'N/A'}
Address: ${record.address}, ${record.city} (${record.pincode})
ID Proof: ${record.addressProofType} (${record.idDocumentNo || 'Verified'})
---------------------------
*2. PET DETAILS*
Name: ${record.petName}
Breed: ${record.breed}
Weight: ${record.weight} kg | Age/DOB: ${record.ageDob}
Gender: ${record.gender} | Neutered/Spayed: ${record.neutered}
Colour/Markings: ${record.colourMarkings || 'N/A'}
---------------------------
*3. NATURE, TEMPERAMENT & HEALTH*
Temperament: ${record.temperament}
Gets along with other dogs: ${record.getsAlongWithDogs}
Ever bitten/snapped: ${record.hasEverBitten}
Disability/Disease: ${record.disabilityOrDisease || 'None'}
Medications: ${record.currentMedication || 'None'}
Allergies: ${record.allergies || 'None'}
Diet Instructions: ${record.dietInstructions || 'Regular'}
Fears / Triggers: ${record.fearsTriggersNotes || 'None recorded'}
---------------------------
*4. VET & EMERGENCY CONTACT*
Vet: ${record.vetClinicName || 'N/A'} (${record.vetPhone || 'N/A'})
Emergency Contact: ${record.emergencyContactName} (${record.emergencyRelationPhone})
---------------------------
*5. DECLARATION & OFFICE USE*
Parent Signature: ${record.signatureName || record.parentName}
Kennel / Room Assigned: ${record.kennelRoomNo || 'Assigned on arrival'}`;

    const url = `https://wa.me/${BRAND.rawPhone}?text=${encodeURIComponent(msg)}`;
    window.open(url, '_blank');
  };

  const temperamentOptions = [
    { label: 'Very friendly', color: 'bg-emerald-600 border-emerald-500 text-white', bar: '#059669' },
    { label: 'Friendly', color: 'bg-emerald-700 border-emerald-600 text-white', bar: '#10b981' },
    { label: 'Shy / reserved', color: 'bg-amber-600 border-amber-500 text-white', bar: '#f59e0b' },
    { label: 'Reactive', color: 'bg-orange-600 border-orange-500 text-white', bar: '#ea580c' },
    { label: 'Dangerous', color: 'bg-red-700 border-red-600 text-white', bar: '#dc2626' }
  ];

  const addressProofOptions = ['Aadhaar Card', 'Driving License', 'Passport', 'Voter ID', 'Utility bill', 'Other'];

  const filteredRegistry = registry.filter((item) => {
    const matchesSearch =
      (item.petName || '').toLowerCase().includes(searchQuery.toLowerCase()) ||
      (item.breed || '').toLowerCase().includes(searchQuery.toLowerCase()) ||
      (item.parentName || '').toLowerCase().includes(searchQuery.toLowerCase()) ||
      (item.enrollmentNo || '').toLowerCase().includes(searchQuery.toLowerCase()) ||
      (item.contact1 || '').includes(searchQuery);

    const matchesTemp =
      filterTemperament === 'All' || item.temperament === filterTemperament;

    return matchesSearch && matchesTemp;
  });

  return (
    <div className="py-10 sm:py-14 lg:py-16 px-4 sm:px-6 lg:px-10 max-w-5xl mx-auto min-h-screen">
      {/* Top Header Navigation & View Toggle */}
      <div className="flex flex-wrap items-center justify-between gap-4 mb-6 print:hidden">
        <a
          href="/"
          onClick={(e) => {
            e.preventDefault();
            if (onNavigateHome) onNavigateHome();
            else navigate('/');
          }}
          className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-[#cbeef3] hover:text-white px-4 py-2 border border-[#cbeef3]/30 hover:border-[#cbeef3] bg-[#121722] transition-colors rounded shadow-sm"
        >
          <span className="material-symbols-outlined text-sm">arrow_back</span>
          <span>Return to Overview</span>
        </a>

        {/* View Switcher: Form vs Database */}
        <div className="inline-flex p-1 bg-[#121722] border border-white/15 rounded-lg shadow-inner">
          <button
            type="button"
            onClick={() => setActiveView('form')}
            className={`px-4 py-2 rounded-md text-xs font-bold uppercase tracking-wider flex items-center gap-2 transition-all cursor-pointer ${
              activeView === 'form'
                ? 'bg-[#dd2d4a] text-white shadow-md'
                : 'text-[#f3e9dc]/70 hover:text-white'
            }`}
          >
            <span className="material-symbols-outlined text-sm">description</span>
            <span>Enrolment Form</span>
          </button>
          <button
            type="button"
            onClick={() => {
              setActiveView('database');
              fetchRegistry();
            }}
            className={`px-4 py-2 rounded-md text-xs font-bold uppercase tracking-wider flex items-center gap-2 transition-all cursor-pointer ${
              activeView === 'database'
                ? 'bg-[#dd2d4a] text-white shadow-md'
                : 'text-[#f3e9dc]/70 hover:text-white'
            }`}
          >
            <span className="material-symbols-outlined text-sm">database</span>
            <span>Registered Dogs Database</span>
            <span className="ml-1 px-1.5 py-0.5 text-[10px] bg-white/20 rounded-full font-mono">
              {registry.length}
            </span>
          </button>
        </div>

        <div className="flex items-center gap-2.5">
          <button
            type="button"
            onClick={handlePrint}
            className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-white bg-[#1a2336] hover:bg-[#22304a] px-4 py-2 border border-white/20 hover:border-[#cbeef3] rounded transition-all shadow-sm cursor-pointer"
            title="Print or Save official PDF copy"
          >
            <span className="material-symbols-outlined text-sm text-[#cbeef3]">print</span>
            <span>Print Form</span>
          </button>

          <a
            href={`https://wa.me/${BRAND.rawPhone}?text=Hi%20Furrever%20Inn,%20I%20have%20a%20question%20about%20the%20first-time%20Dog%20Enrollment%20Form.`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-white bg-[#128C7E] hover:bg-[#25D366] px-4 py-2 rounded transition-colors shadow-sm"
          >
            <span className="material-symbols-outlined text-sm">chat</span>
            <span>WhatsApp</span>
          </a>
        </div>
      </div>

      {/* ========================================================= */}
      {/* VIEW 1: REGISTERED DOGS DATABASE */}
      {/* ========================================================= */}
      {activeView === 'database' ? (
        <div className="space-y-6 print:hidden">
          {/* Database Banner */}
          <div className="bg-[#121722] border border-white/15 p-6 sm:p-8 rounded-sm shadow-xl flex flex-col md:flex-row md:items-center justify-between gap-6">
            <div>
              <div className="flex items-center gap-2 mb-2">
                <span className="px-2.5 py-0.5 text-[10px] font-bold uppercase tracking-widest bg-[#880d1e]/40 border border-[#dd2d4a]/50 text-[#cbeef3] rounded">
                  Internal Sanctuary Registry
                </span>
                <span className="text-xs text-[#f3e9dc]/60">• Live Records</span>
              </div>
              <h2 className="font-['Fraunces',serif] text-2xl sm:text-3xl font-bold text-[#f3e9dc]">
                Registered Dogs Database
              </h2>
              <p className="text-xs sm:text-sm text-[#f3e9dc]/80 max-w-xl mt-1">
                Centralized registry of companion dogs admitted or registered at Furrever Inn with medical profiles, vaccination verifications, parent contacts, and room allocations.
              </p>
            </div>

            <button
              type="button"
              onClick={() => setActiveView('form')}
              className="px-5 py-3 bg-[#dd2d4a] hover:bg-[#b81d36] text-white text-xs font-bold uppercase tracking-widest rounded shadow-lg transition-all flex items-center justify-center gap-2 self-start md:self-auto shrink-0 cursor-pointer"
            >
              <span className="material-symbols-outlined text-sm">add</span>
              <span>Register New Dog</span>
            </button>
          </div>

          {/* Quick Metrics Bar */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
            <div className="p-4 bg-[#121722] border border-white/10 rounded">
              <span className="text-[10px] uppercase tracking-wider font-bold text-[#f3e9dc]/60 block">Total Enrolled Dogs</span>
              <span className="text-2xl sm:text-3xl font-bold text-[#cbeef3] font-['Fraunces',serif]">{registry.length}</span>
            </div>
            <div className="p-4 bg-[#121722] border border-white/10 rounded">
              <span className="text-[10px] uppercase tracking-wider font-bold text-[#f3e9dc]/60 block">Vaccines Attached</span>
              <span className="text-2xl sm:text-3xl font-bold text-emerald-400 font-['Fraunces',serif]">
                {registry.filter((r) => r.vaccinationPapersAttached).length}
              </span>
            </div>
            <div className="p-4 bg-[#121722] border border-white/10 rounded">
              <span className="text-[10px] uppercase tracking-wider font-bold text-[#f3e9dc]/60 block">Verified Parent IDs</span>
              <span className="text-2xl sm:text-3xl font-bold text-[#f49cbb] font-['Fraunces',serif]">
                {registry.filter((r) => r.documentsVerified || r.idDocumentNo).length}
              </span>
            </div>
            <div className="p-4 bg-[#121722] border border-white/10 rounded">
              <span className="text-[10px] uppercase tracking-wider font-bold text-[#f3e9dc]/60 block">Sociable / Friendly</span>
              <span className="text-2xl sm:text-3xl font-bold text-teal-300 font-['Fraunces',serif]">
                {registry.filter((r) => r.temperament === 'Very friendly' || r.temperament === 'Friendly').length}
              </span>
            </div>
          </div>

          {/* Search & Filter Controls */}
          <div className="bg-[#121722] border border-white/10 p-4 rounded flex flex-col sm:flex-row gap-3 items-center justify-between">
            <div className="relative w-full sm:w-80">
              <span className="material-symbols-outlined absolute left-3 top-2.5 text-sm text-[#cbeef3]/60">search</span>
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search dog, breed, parent, ID..."
                className="w-full bg-[#0b0e14] border border-white/15 pl-9 pr-3 py-2 text-xs text-[#f3e9dc] rounded focus:border-[#cbeef3] focus:outline-none"
              />
              {searchQuery && (
                <button
                  type="button"
                  onClick={() => setSearchQuery('')}
                  className="absolute right-2.5 top-2.5 text-xs text-white/50 hover:text-white"
                >
                  ✕
                </button>
              )}
            </div>

            {/* Temperament Filters */}
            <div className="flex flex-wrap gap-1.5 w-full sm:w-auto items-center">
              <span className="text-[10px] uppercase tracking-wider text-white/50 font-bold mr-1">Temperament:</span>
              {['All', 'Very friendly', 'Friendly', 'Shy / reserved', 'Reactive'].map((t) => (
                <button
                  key={t}
                  type="button"
                  onClick={() => setFilterTemperament(t)}
                  className={`px-2.5 py-1 text-[11px] font-semibold rounded transition-colors cursor-pointer ${
                    filterTemperament === t
                      ? 'bg-[#cbeef3] text-[#0b0e14] font-bold'
                      : 'bg-[#1a2336] text-[#f3e9dc]/80 hover:text-white'
                  }`}
                >
                  {t}
                </button>
              ))}
            </div>
          </div>

          {/* Dog Registry Cards Grid */}
          {loadingRegistry ? (
            <div className="p-12 text-center text-sm text-[#f3e9dc]/70 bg-[#121722] rounded border border-white/10">
              Loading enrolled dogs database...
            </div>
          ) : filteredRegistry.length === 0 ? (
            <div className="p-12 text-center bg-[#121722] rounded border border-white/10 space-y-3">
              <span className="material-symbols-outlined text-4xl text-[#cbeef3]/50">pets</span>
              <p className="text-sm text-[#f3e9dc]">No registered dogs found matching your criteria.</p>
              <button
                type="button"
                onClick={() => { setSearchQuery(''); setFilterTemperament('All'); }}
                className="text-xs text-[#cbeef3] underline cursor-pointer"
              >
                Reset filters
              </button>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {filteredRegistry.map((item, idx) => (
                <div
                  key={item.enrollmentNo || idx}
                  className="bg-[#121722] border border-white/15 p-5 rounded-sm hover:border-[#cbeef3]/50 transition-all shadow-md flex flex-col justify-between space-y-4"
                >
                  <div className="flex items-start justify-between gap-3">
                    <div className="flex items-center gap-3">
                      <div className="w-12 h-12 rounded-full bg-[#1a2336] border border-[#cbeef3]/40 flex items-center justify-center text-xl shrink-0 overflow-hidden">
                        {item.petPhoto ? (
                          <img src={item.petPhoto} alt={item.petName} className="w-full h-full object-cover" />
                        ) : (
                          <span>🐕</span>
                        )}
                      </div>
                      <div>
                        <div className="flex items-center gap-2">
                          <h3 className="font-['Fraunces',serif] text-lg font-bold text-[#f3e9dc]">
                            {item.petName}
                          </h3>
                          <span className="text-[10px] font-mono px-2 py-0.5 bg-[#0b0e14] border border-white/10 text-[#cbeef3] rounded">
                            {item.enrollmentNo}
                          </span>
                        </div>
                        <p className="text-xs text-[#cbeef3]">
                          {item.breed} • {item.weight ? `${item.weight} kg` : ''} • {item.gender}
                        </p>
                      </div>
                    </div>

                    <span
                      className={`text-[10px] uppercase font-bold tracking-wider px-2.5 py-1 rounded-sm border shrink-0 ${
                        item.temperament === 'Very friendly'
                          ? 'bg-emerald-900/40 border-emerald-500 text-emerald-300'
                          : item.temperament === 'Friendly'
                          ? 'bg-teal-900/40 border-teal-500 text-teal-300'
                          : item.temperament === 'Shy / reserved'
                          ? 'bg-amber-900/40 border-amber-500 text-amber-300'
                          : 'bg-red-900/40 border-red-500 text-red-300'
                      }`}
                    >
                      {item.temperament}
                    </span>
                  </div>

                  {/* Stay & Room Details */}
                  <div className="grid grid-cols-2 gap-2 text-xs bg-[#0b0e14] p-3 rounded border border-white/5">
                    <div>
                      <span className="text-[10px] uppercase font-semibold text-white/50 block">Parent</span>
                      <span className="text-[#f3e9dc] font-medium truncate block">{item.parentName}</span>
                      <span className="text-white/60 font-mono text-[11px]">{item.contact1}</span>
                    </div>
                    <div>
                      <span className="text-[10px] uppercase font-semibold text-white/50 block">Stay Dates / Room</span>
                      <span className="text-[#f3e9dc] font-medium block">
                        {item.checkInDate || 'TBD'} → {item.checkOutDate || 'TBD'}
                      </span>
                      <span className="text-[#f49cbb] text-[11px]">
                        {item.kennelRoomNo || 'Suite to be assigned'}
                      </span>
                    </div>
                  </div>

                  {/* Medical & Diet Alert Tags */}
                  <div className="flex flex-wrap gap-1.5 text-[11px]">
                    {item.allergies && item.allergies !== 'None' && (
                      <span className="px-2 py-0.5 bg-red-950/60 border border-red-500/40 text-red-300 rounded text-[10px]">
                        ⚠️ Allergy: {item.allergies}
                      </span>
                    )}
                    {item.currentMedication && item.currentMedication !== 'None' && (
                      <span className="px-2 py-0.5 bg-purple-950/60 border border-purple-500/40 text-purple-300 rounded text-[10px]">
                        💊 Meds: {item.currentMedication}
                      </span>
                    )}
                    {item.vaccinationPapersAttached && (
                      <span className="px-2 py-0.5 bg-emerald-950/60 border border-emerald-500/40 text-emerald-300 rounded text-[10px]">
                        ✓ Vaccine Papers Verified
                      </span>
                    )}
                  </div>

                  {/* Action Buttons */}
                  <div className="pt-2 border-t border-white/10 flex items-center justify-between gap-2">
                    <button
                      type="button"
                      onClick={() => setSelectedRecord(item)}
                      className="text-xs font-bold uppercase tracking-wider text-[#cbeef3] hover:text-white flex items-center gap-1 cursor-pointer"
                    >
                      <span className="material-symbols-outlined text-sm">visibility</span>
                      <span>View Full Dossier</span>
                    </button>

                    <div className="flex items-center gap-2">
                      <a
                        href={`tel:${item.contact1}`}
                        className="p-1.5 rounded bg-[#1a2336] text-[#cbeef3] hover:text-white border border-white/10"
                        title="Call Parent"
                      >
                        <span className="material-symbols-outlined text-sm">call</span>
                      </a>
                      <button
                        type="button"
                        onClick={() => handleShareWhatsApp(item)}
                        className="px-2.5 py-1 bg-[#128C7E] hover:bg-[#25D366] text-white text-[11px] font-bold uppercase rounded flex items-center gap-1 cursor-pointer"
                        title="Share on WhatsApp"
                      >
                        <span className="material-symbols-outlined text-xs">send</span>
                        <span>WhatsApp</span>
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* Record Details Modal */}
          {selectedRecord && (
            <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4">
              <div className="bg-[#121722] border border-white/20 rounded-lg max-w-2xl w-full max-h-[90vh] overflow-y-auto p-6 sm:p-8 space-y-6 shadow-2xl">
                <div className="flex items-start justify-between border-b border-white/15 pb-4">
                  <div>
                    <span className="text-[10px] font-mono uppercase tracking-widest text-[#cbeef3] block">
                      Enrolment #{selectedRecord.enrollmentNo}
                    </span>
                    <h3 className="font-['Fraunces',serif] text-2xl font-bold text-[#f3e9dc]">
                      {selectedRecord.petName} ({selectedRecord.breed})
                    </h3>
                  </div>
                  <button
                    type="button"
                    onClick={() => setSelectedRecord(null)}
                    className="p-1.5 text-white/60 hover:text-white rounded-full bg-white/5"
                  >
                    ✕
                  </button>
                </div>

                <div className="space-y-4 text-xs text-[#f3e9dc]">
                  <div className="grid grid-cols-2 gap-3 bg-[#0b0e14] p-3 rounded">
                    <div>
                      <strong className="text-[#cbeef3] block">Pet Parent:</strong>
                      {selectedRecord.parentName} ({selectedRecord.contact1})
                      <div className="text-white/60">{selectedRecord.address}, {selectedRecord.city}</div>
                    </div>
                    <div>
                      <strong className="text-[#cbeef3] block">Dates &amp; Room:</strong>
                      {selectedRecord.checkInDate} to {selectedRecord.checkOutDate}
                      <div className="text-[#f49cbb]">{selectedRecord.kennelRoomNo || 'No room assigned yet'}</div>
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-3">
                    <div>
                      <strong className="text-[#cbeef3] block">Age / DOB &amp; Weight:</strong>
                      {selectedRecord.ageDob} • {selectedRecord.weight} kg
                    </div>
                    <div>
                      <strong className="text-[#cbeef3] block">Gender &amp; Neutered:</strong>
                      {selectedRecord.gender} • Neutered: {selectedRecord.neutered}
                    </div>
                  </div>

                  <div>
                    <strong className="text-[#cbeef3] block">Colour &amp; Markings:</strong>
                    {selectedRecord.colourMarkings || 'None specified'}
                  </div>

                  <div className="p-3 bg-[#0b0e14] rounded space-y-1">
                    <strong className="text-[#cbeef3] block">Dietary &amp; Feeding Instructions:</strong>
                    <p>{selectedRecord.dietInstructions || 'Regular dietary meal.'}</p>
                  </div>

                  <div className="p-3 bg-[#0b0e14] rounded space-y-1">
                    <strong className="text-[#cbeef3] block">Medical &amp; Allergy History:</strong>
                    <p>Allergies: {selectedRecord.allergies || 'None'}</p>
                    <p>Medications: {selectedRecord.currentMedication || 'None'}</p>
                    <p>Disability / Chronic Disease: {selectedRecord.disabilityOrDisease || 'None'}</p>
                  </div>

                  <div className="p-3 bg-[#0b0e14] rounded space-y-1">
                    <strong className="text-[#cbeef3] block">Temperament &amp; Behavioral Notes:</strong>
                    <p>Sociability: {selectedRecord.temperament} (Gets along with dogs: {selectedRecord.getsAlongWithDogs})</p>
                    <p>Bite history: {selectedRecord.hasEverBitten}</p>
                    <p>Fears / Triggers: {selectedRecord.fearsTriggersNotes || 'None'}</p>
                  </div>

                  <div className="grid grid-cols-2 gap-3">
                    <div>
                      <strong className="text-[#cbeef3] block">Primary Vet:</strong>
                      {selectedRecord.vetClinicName} ({selectedRecord.vetPhone})
                    </div>
                    <div>
                      <strong className="text-[#cbeef3] block">Emergency Contact:</strong>
                      {selectedRecord.emergencyContactName} ({selectedRecord.emergencyRelationPhone})
                    </div>
                  </div>
                </div>

                <div className="flex items-center justify-end gap-3 pt-4 border-t border-white/10">
                  <button
                    type="button"
                    onClick={() => handleShareWhatsApp(selectedRecord)}
                    className="px-4 py-2 bg-[#128C7E] text-white text-xs font-bold uppercase rounded"
                  >
                    Send to WhatsApp
                  </button>
                  <button
                    type="button"
                    onClick={() => setSelectedRecord(null)}
                    className="px-4 py-2 bg-[#1a2336] text-white text-xs font-bold uppercase rounded"
                  >
                    Close
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>
      ) : submitted ? (
        /* ========================================================= */
        /* POST-SUBMISSION CONFIRMATION */
        /* ========================================================= */
        <div className="bg-[#121722] border border-[#dd2d4a]/50 p-8 sm:p-12 lg:p-14 text-center rounded-sm shadow-2xl space-y-8">
          <div className="w-20 h-20 mx-auto rounded-full bg-[#1a2336] border-2 border-emerald-400 flex items-center justify-center text-emerald-400 text-4xl shadow-[0_0_25px_rgba(16,185,129,0.4)]">
            ✓
          </div>

          <div className="space-y-2">
            <span className="text-[10px] font-bold uppercase tracking-[0.25em] text-[#cbeef3] block">
              Official Enrolment Registered • Sanctuary Records Created
            </span>
            <h2 className="font-['Fraunces',serif] text-3xl sm:text-4xl lg:text-5xl text-[#f3e9dc] font-bold">
              Welcome to Furrever Inn, {formData.petName}!
            </h2>
            <p className="font-['Plus_Jakarta_Sans',sans-serif] text-sm sm:text-base text-[#f3e9dc]/85 max-w-xl mx-auto leading-relaxed">
              Your first-time enrolment dossier has been saved into our permanent sanctuary registry.
            </p>
          </div>

          {/* Golden Unique Registration Number Card */}
          <div className="bg-gradient-to-br from-[#190509] via-[#0f141f] to-[#190509] border-2 border-[#dd2d4a] p-6 sm:p-8 rounded-lg max-w-2xl mx-auto shadow-[0_0_35px_rgba(221,45,74,0.35)] text-left space-y-4">
            <div className="flex flex-wrap items-center justify-between gap-2 border-b border-white/10 pb-3">
              <div className="flex items-center gap-2">
                <span className="material-symbols-outlined text-[#cbeef3]">verified</span>
                <span className="text-xs font-bold uppercase tracking-widest text-[#cbeef3]">
                  Permanent Pet Registration Key
                </span>
              </div>
              <span className="text-[10px] uppercase font-bold tracking-wider px-2.5 py-0.5 bg-emerald-500/20 text-emerald-300 border border-emerald-500/30 rounded">
                Rabies Verified &amp; Saved
              </span>
            </div>

            <p className="text-xs sm:text-sm text-[#f3e9dc]/80 leading-relaxed">
              Whenever you want to book a slot for <strong className="text-white">{formData.petName}</strong> again in the future, simply enter this unique Registration Number in our Slot Booking or Admission form. We will automatically recognize that your dog is already our customer!
            </p>

            <div className="p-4 sm:p-5 bg-[#0b0e14] border border-white/20 rounded flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div>
                <span className="text-[10px] uppercase font-bold tracking-wider text-[#f49cbb] block">
                  Unique Registration Number:
                </span>
                <span className="font-mono text-2xl sm:text-3xl font-black text-amber-300 tracking-wider">
                  {registeredNumber || formData.enrollmentNo}
                </span>
              </div>

              <div className="flex flex-wrap items-center gap-2">
                <button
                  type="button"
                  onClick={() => {
                    navigator.clipboard.writeText(registeredNumber || formData.enrollmentNo);
                    setCopiedReg(true);
                    setTimeout(() => setCopiedReg(false), 3000);
                  }}
                  className="px-4 py-2.5 bg-[#1a2336] hover:bg-[#22304a] border border-[#cbeef3]/40 text-[#cbeef3] hover:text-white rounded text-xs font-bold uppercase tracking-wider inline-flex items-center gap-1.5 transition-all cursor-pointer shadow-sm"
                >
                  <span className="material-symbols-outlined text-sm">{copiedReg ? 'check' : 'content_copy'}</span>
                  <span>{copiedReg ? 'Copied to Clipboard!' : 'Copy Reg #'}</span>
                </button>

                <a
                  href={`/admissions?reg=${encodeURIComponent(registeredNumber || formData.enrollmentNo)}`}
                  onClick={(e) => {
                    e.preventDefault();
                    navigate(`/admissions?reg=${encodeURIComponent(registeredNumber || formData.enrollmentNo)}`);
                  }}
                  className="px-5 py-2.5 bg-[#dd2d4a] hover:bg-[#b81d36] text-white rounded text-xs font-bold uppercase tracking-widest inline-flex items-center gap-1.5 shadow-lg transition-all"
                >
                  <span className="material-symbols-outlined text-sm">calendar_month</span>
                  <span>Book Slot With This Reg #</span>
                </a>
              </div>
            </div>

            <div className="p-3 bg-white/5 border border-white/10 rounded flex items-start gap-2.5">
              <span className="material-symbols-outlined text-amber-300 text-lg shrink-0 mt-0.5">info</span>
              <p className="text-xs text-[#f3e9dc]/85 leading-relaxed">
                <strong className="text-amber-200">How Returning Bookings Work:</strong> You will not need to re-upload medical history or re-enter parent details every time. Just paste <span className="font-mono text-amber-300 font-bold">{registeredNumber || formData.enrollmentNo}</span> into the reservation form and your companion's profile will be pre-filled with priority booking!
              </p>
            </div>
          </div>

          <div className="pt-4 flex flex-wrap gap-4 justify-center">
            <button
              type="button"
              onClick={handlePrint}
              className="px-6 py-3 bg-[#1a2336] hover:bg-[#22304a] text-white border border-[#cbeef3]/40 rounded text-xs font-bold uppercase tracking-wider inline-flex items-center gap-2 cursor-pointer"
            >
              <span className="material-symbols-outlined text-sm text-[#cbeef3]">print</span>
              <span>Download / Print Submitted Form</span>
            </button>
            <button
              type="button"
              onClick={() => handleShareWhatsApp({ ...formData, enrollmentNo: registeredNumber || formData.enrollmentNo })}
              className="px-6 py-3 bg-[#128C7E] hover:bg-[#25D366] text-white rounded text-xs font-bold uppercase tracking-wider inline-flex items-center gap-2 cursor-pointer shadow-lg"
            >
              <span className="material-symbols-outlined text-sm">send</span>
              <span>Forward Record to Furrever Inn WhatsApp</span>
            </button>
            <button
              type="button"
              onClick={() => {
                setActiveView('database');
                setSubmitted(false);
              }}
              className="px-6 py-3 bg-[#dd2d4a] hover:bg-[#b81d36] text-white rounded text-xs font-bold uppercase tracking-wider inline-flex items-center gap-2 cursor-pointer"
            >
              <span className="material-symbols-outlined text-sm">database</span>
              <span>View in Registered Dogs Database</span>
            </button>
          </div>
        </div>
      ) : (
        /* ========================================================= */
        /* VIEW 2: OFFICIAL DOG ENROLMENT FORM (Matching User Image) */
        /* ========================================================= */
        <form
          onSubmit={handleSubmit}
          className="bg-[#121722] border border-white/15 p-6 sm:p-10 lg:p-12 shadow-2xl rounded-sm print:bg-white print:text-black print:border-black print:p-6 print:shadow-none space-y-10"
        >
          {/* Form Official Header: Exact replica of image header */}
          <div className="border-b-2 border-[#880d1e] pb-6 space-y-4">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div className="flex items-center gap-3.5">
                <img
                  src={BRAND.crestLogo}
                  alt="Furrever Inn Crest"
                  className="h-12 w-auto object-contain shrink-0 drop-shadow-[0_2px_8px_rgba(203,238,243,0.35)]"
                />
                <div>
                  <h1 className="font-['Fraunces',serif] text-2xl sm:text-3xl font-bold tracking-wide text-[#f3e9dc] print:text-black leading-tight">
                    Furrever Inn
                  </h1>
                  <p className="font-['Quicksand',sans-serif] text-xs text-[#cbeef3] tracking-wider italic print:text-gray-700">
                    A home away from home
                  </p>
                </div>
              </div>

              <div className="text-left sm:text-right">
                <h2 className="font-['Fraunces',serif] text-xl sm:text-2xl font-bold uppercase tracking-wider text-white print:text-black">
                  DOG ENROLMENT FORM
                </h2>
                <span className="text-[10px] uppercase font-bold tracking-widest text-[#f49cbb] block print:text-gray-600">
                  First-Time Guest Admission Record
                </span>
              </div>
            </div>

            {/* Top metadata strip: Enrollment No, Dates */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 pt-4 border-t border-white/10 print:border-gray-300">
              <div>
                <label className="text-[10px] uppercase tracking-wider font-bold text-[#f3e9dc]/75 block mb-1 print:text-gray-700">
                  Unique Reg No. / Enrollment No.:
                </label>
                <input
                  type="text"
                  name="enrollmentNo"
                  value={formData.enrollmentNo}
                  onChange={handleInputChange}
                  className="w-full bg-[#0b0e14] border border-white/15 px-3 py-1.5 text-xs text-[#cbeef3] font-mono rounded print:bg-white print:text-black print:border-gray-400"
                />
              </div>
              <div>
                <label className="text-[10px] uppercase tracking-wider font-bold text-[#f3e9dc]/75 block mb-1 print:text-gray-700">
                  Date of enrollment:
                </label>
                <input
                  type="date"
                  name="dateOfEnrollment"
                  value={formData.dateOfEnrollment}
                  onChange={handleInputChange}
                  className="w-full bg-[#0b0e14] border border-white/15 px-3 py-1.5 text-xs text-[#f3e9dc] rounded print:bg-white print:text-black print:border-gray-400"
                />
              </div>
              <div>
                <label className="text-[10px] uppercase tracking-wider font-bold text-[#f3e9dc]/75 block mb-1 print:text-gray-700">
                  Check-in date:
                </label>
                <input
                  type="date"
                  name="checkInDate"
                  value={formData.checkInDate}
                  onChange={handleInputChange}
                  required
                  className="w-full bg-[#0b0e14] border border-white/15 px-3 py-1.5 text-xs text-[#f3e9dc] rounded print:bg-white print:text-black print:border-gray-400"
                />
              </div>
              <div>
                <label className="text-[10px] uppercase tracking-wider font-bold text-[#f3e9dc]/75 block mb-1 print:text-gray-700">
                  Check-out date:
                </label>
                <input
                  type="date"
                  name="checkOutDate"
                  value={formData.checkOutDate}
                  onChange={handleInputChange}
                  required
                  className="w-full bg-[#0b0e14] border border-white/15 px-3 py-1.5 text-xs text-[#f3e9dc] rounded print:bg-white print:text-black print:border-gray-400"
                />
              </div>
            </div>
          </div>

          {/* SECTION 1: PET PARENT DETAILS */}
          <div className="space-y-4">
            <div className="flex items-center gap-2.5 bg-[#1a2336] px-4 py-2 rounded-sm border-l-4 border-[#cbeef3] print:bg-gray-100 print:border-black">
              <span className="w-5 h-5 rounded-full bg-[#cbeef3] text-[#0b0e14] font-bold text-xs flex items-center justify-center print:bg-black print:text-white">1</span>
              <h2 className="text-xs sm:text-sm font-bold uppercase tracking-wider text-[#f3e9dc] print:text-black">
                PET PARENT DETAILS
              </h2>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              <div className="sm:col-span-2 lg:col-span-3">
                <label className="text-xs uppercase tracking-wider font-semibold text-[#f3e9dc]/80 block mb-1 print:text-black">
                  Pet parent's full name: *
                </label>
                <input
                  type="text"
                  name="parentName"
                  value={formData.parentName}
                  onChange={handleInputChange}
                  required
                  placeholder="e.g. Vikramaditya Singhania"
                  className="w-full bg-[#0b0e14] border border-white/15 px-4 py-2.5 text-sm text-[#f3e9dc] uppercase focus:border-[#cbeef3] rounded print:bg-white print:text-black print:border-gray-400"
                />
              </div>

              <div>
                <label className="text-xs uppercase tracking-wider font-semibold text-[#f3e9dc]/80 block mb-1 print:text-black">
                  Contact number 1: *
                </label>
                <input
                  type="tel"
                  name="contact1"
                  value={formData.contact1}
                  onChange={handleInputChange}
                  required
                  placeholder="+91 98765 43210"
                  className="w-full bg-[#0b0e14] border border-white/15 px-4 py-2.5 text-sm text-[#f3e9dc] focus:border-[#cbeef3] rounded print:bg-white print:text-black print:border-gray-400"
                />
              </div>

              <div>
                <label className="text-xs uppercase tracking-wider font-semibold text-[#f3e9dc]/80 block mb-1 print:text-black">
                  Contact number 2:
                </label>
                <input
                  type="tel"
                  name="contact2"
                  value={formData.contact2}
                  onChange={handleInputChange}
                  placeholder="+91 98111 22334"
                  className="w-full bg-[#0b0e14] border border-white/15 px-4 py-2.5 text-sm text-[#f3e9dc] focus:border-[#cbeef3] rounded print:bg-white print:text-black print:border-gray-400"
                />
              </div>

              <div>
                <label className="text-xs uppercase tracking-wider font-semibold text-[#f3e9dc]/80 block mb-1 print:text-black">
                  E-mail (optional):
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  placeholder="parent@example.com"
                  className="w-full bg-[#0b0e14] border border-white/15 px-4 py-2.5 text-sm text-[#f3e9dc] focus:border-[#cbeef3] rounded print:bg-white print:text-black print:border-gray-400"
                />
              </div>

              <div className="sm:col-span-2">
                <label className="text-xs uppercase tracking-wider font-semibold text-[#f3e9dc]/80 block mb-1 print:text-black">
                  Residential Address: *
                </label>
                <input
                  type="text"
                  name="address"
                  value={formData.address}
                  onChange={handleInputChange}
                  required
                  placeholder="Apartment / Villa, Street, Sector / Area"
                  className="w-full bg-[#0b0e14] border border-white/15 px-4 py-2.5 text-sm text-[#f3e9dc] uppercase focus:border-[#cbeef3] rounded print:bg-white print:text-black print:border-gray-400"
                />
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="text-xs uppercase tracking-wider font-semibold text-[#f3e9dc]/80 block mb-1 print:text-black">
                    City: *
                  </label>
                  <input
                    type="text"
                    name="city"
                    value={formData.city}
                    onChange={handleInputChange}
                    required
                    className="w-full bg-[#0b0e14] border border-white/15 px-3 py-2.5 text-sm text-[#f3e9dc] uppercase rounded print:bg-white print:text-black print:border-gray-400"
                  />
                </div>
                <div>
                  <label className="text-xs uppercase tracking-wider font-semibold text-[#f3e9dc]/80 block mb-1 print:text-black">
                    PIN code: *
                  </label>
                  <input
                    type="text"
                    name="pincode"
                    value={formData.pincode}
                    onChange={handleInputChange}
                    required
                    className="w-full bg-[#0b0e14] border border-white/15 px-3 py-2.5 text-sm text-[#f3e9dc] rounded print:bg-white print:text-black print:border-gray-400"
                  />
                </div>
              </div>

              {/* Address Proof Submitted */}
              <div className="sm:col-span-2 lg:col-span-3 pt-2">
                <label className="text-xs uppercase tracking-wider font-semibold text-[#f3e9dc]/80 block mb-2 print:text-black">
                  Address proof submitted (attach a copy):
                </label>
                <div className="flex flex-wrap gap-4 sm:gap-6 items-center text-xs text-[#f3e9dc] print:text-black">
                  {addressProofOptions.map((type) => (
                    <label key={type} className="inline-flex items-center gap-2 cursor-pointer">
                      <input
                        type="radio"
                        name="addressProofType"
                        value={type}
                        checked={formData.addressProofType === type}
                        onChange={handleInputChange}
                        className="accent-[#cbeef3]"
                      />
                      <span>{type}</span>
                    </label>
                  ))}
                </div>
                <div className="mt-3">
                  <input
                    type="text"
                    name="idDocumentNo"
                    value={formData.idDocumentNo}
                    onChange={handleInputChange}
                    placeholder="ID / document no.: (e.g. XXXX-XXXX-XXXX)"
                    className="w-full sm:w-80 bg-[#0b0e14] border border-white/15 px-4 py-2 text-xs text-[#f3e9dc] rounded print:bg-white print:text-black print:border-gray-400"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* SECTION 2: PET DETAILS */}
          <div className="space-y-4">
            <div className="flex items-center gap-2.5 bg-[#1a2336] px-4 py-2 rounded-sm border-l-4 border-[#cbeef3] print:bg-gray-100 print:border-black">
              <span className="w-5 h-5 rounded-full bg-[#cbeef3] text-[#0b0e14] font-bold text-xs flex items-center justify-center print:bg-black print:text-white">2</span>
              <h2 className="text-xs sm:text-sm font-bold uppercase tracking-wider text-[#f3e9dc] print:text-black">
                PET DETAILS
              </h2>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
              {/* Pet Info Fields */}
              <div className="lg:col-span-8 grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="text-xs uppercase tracking-wider font-semibold text-[#f3e9dc]/80 block mb-1 print:text-black">
                    Pet's name: *
                  </label>
                  <input
                    type="text"
                    name="petName"
                    value={formData.petName}
                    onChange={handleInputChange}
                    required
                    placeholder="e.g. BRUNO"
                    className="w-full bg-[#0b0e14] border border-white/15 px-4 py-2.5 text-sm text-[#f3e9dc] uppercase focus:border-[#cbeef3] rounded print:bg-white print:text-black print:border-gray-400"
                  />
                </div>

                <div>
                  <label className="text-xs uppercase tracking-wider font-semibold text-[#f3e9dc]/80 block mb-1 print:text-black">
                    Breed: *
                  </label>
                  <input
                    type="text"
                    name="breed"
                    value={formData.breed}
                    onChange={handleInputChange}
                    required
                    placeholder="e.g. GOLDEN RETRIEVER"
                    className="w-full bg-[#0b0e14] border border-white/15 px-4 py-2.5 text-sm text-[#f3e9dc] uppercase focus:border-[#cbeef3] rounded print:bg-white print:text-black print:border-gray-400"
                  />
                </div>

                <div>
                  <label className="text-xs uppercase tracking-wider font-semibold text-[#f3e9dc]/80 block mb-1 print:text-black">
                    Weight (kg): *
                  </label>
                  <input
                    type="text"
                    name="weight"
                    value={formData.weight}
                    onChange={handleInputChange}
                    required
                    placeholder="e.g. 28"
                    className="w-full bg-[#0b0e14] border border-white/15 px-4 py-2.5 text-sm text-[#f3e9dc] rounded print:bg-white print:text-black print:border-gray-400"
                  />
                </div>

                <div>
                  <label className="text-xs uppercase tracking-wider font-semibold text-[#f3e9dc]/80 block mb-1 print:text-black">
                    Age / DOB: *
                  </label>
                  <input
                    type="text"
                    name="ageDob"
                    value={formData.ageDob}
                    onChange={handleInputChange}
                    required
                    placeholder="e.g. 2 Years / 15-Mar-2024"
                    className="w-full bg-[#0b0e14] border border-white/15 px-4 py-2.5 text-sm text-[#f3e9dc] rounded print:bg-white print:text-black print:border-gray-400"
                  />
                </div>

                <div>
                  <label className="text-xs uppercase tracking-wider font-semibold text-[#f3e9dc]/80 block mb-2 print:text-black">
                    Gender: *
                  </label>
                  <div className="flex items-center gap-6 text-sm text-[#f3e9dc] print:text-black">
                    {['Male', 'Female'].map((g) => (
                      <label key={g} className="inline-flex items-center gap-2 cursor-pointer">
                        <input
                          type="radio"
                          name="gender"
                          value={g}
                          checked={formData.gender === g}
                          onChange={handleInputChange}
                          className="accent-[#cbeef3]"
                        />
                        <span>{g}</span>
                      </label>
                    ))}
                  </div>
                </div>

                <div>
                  <label className="text-xs uppercase tracking-wider font-semibold text-[#f3e9dc]/80 block mb-2 print:text-black">
                    Neutered / Spayed: *
                  </label>
                  <div className="flex items-center gap-6 text-sm text-[#f3e9dc] print:text-black">
                    {['Yes', 'No'].map((ans) => (
                      <label key={ans} className="inline-flex items-center gap-2 cursor-pointer">
                        <input
                          type="radio"
                          name="neutered"
                          value={ans}
                          checked={formData.neutered === ans}
                          onChange={handleInputChange}
                          className="accent-[#cbeef3]"
                        />
                        <span>{ans}</span>
                      </label>
                    ))}
                  </div>
                </div>

                <div className="sm:col-span-2">
                  <label className="text-xs uppercase tracking-wider font-semibold text-[#f3e9dc]/80 block mb-1 print:text-black">
                    Colour / markings / microchip no.:
                  </label>
                  <input
                    type="text"
                    name="colourMarkings"
                    value={formData.colourMarkings}
                    onChange={handleInputChange}
                    placeholder="e.g. Golden Honey, white chest blaze, Microchip #982000341829"
                    className="w-full bg-[#0b0e14] border border-white/15 px-4 py-2.5 text-sm text-[#f3e9dc] rounded print:bg-white print:text-black print:border-gray-400"
                  />
                </div>
              </div>

              {/* Photo Box Matching PDF "Paste pet's photo here" */}
              <div className="lg:col-span-4 flex flex-col items-center justify-center p-6 border-2 border-dashed border-[#cbeef3]/40 rounded-sm bg-[#0b0e14]/50 min-h-[220px] print:bg-white print:border-black">
                {photoPreview ? (
                  <div className="relative w-full h-44 rounded overflow-hidden">
                    <img src={photoPreview} alt="Pet Preview" className="w-full h-full object-cover" />
                    <button
                      type="button"
                      onClick={() => { setPhotoPreview(null); setFormData((p) => ({ ...p, petPhoto: null })); }}
                      className="absolute top-2 right-2 bg-black/70 text-white rounded-full p-1 text-xs print:hidden cursor-pointer"
                    >
                      ✕
                    </button>
                  </div>
                ) : (
                  <div className="text-center space-y-2">
                    <span className="material-symbols-outlined text-4xl text-[#cbeef3]/60 print:text-gray-400">add_a_photo</span>
                    <span className="text-xs uppercase tracking-widest font-bold text-[#f3e9dc]/80 block print:text-black">
                      Paste pet's photo here
                    </span>
                    <label className="inline-block mt-2 px-3 py-1.5 text-[10px] font-bold uppercase tracking-wider bg-[#1a2336] text-[#cbeef3] border border-[#cbeef3]/40 rounded cursor-pointer hover:bg-[#cbeef3] hover:text-[#0b0e14] transition-colors print:hidden">
                      Upload Pet Photo
                      <input type="file" accept="image/*" onChange={handlePhotoUpload} className="hidden" />
                    </label>
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* SECTION 3: VACCINATION RECORD (Official Table) */}
          <div id="section-vaccination-record" className="space-y-4 scroll-mt-24">
            <div className="flex items-center gap-2.5 bg-[#1a2336] px-4 py-2 rounded-sm border-l-4 border-[#cbeef3] print:bg-gray-100 print:border-black">
              <span className="w-5 h-5 rounded-full bg-[#cbeef3] text-[#0b0e14] font-bold text-xs flex items-center justify-center print:bg-black print:text-white">3</span>
              <h2 className="text-xs sm:text-sm font-bold uppercase tracking-wider text-[#f3e9dc] print:text-black">
                VACCINATION RECORD
              </h2>
            </div>

            {/* Strict Rabies Mandatory Policy Alert Banner */}
            <div className="p-4 sm:p-5 bg-gradient-to-r from-red-950/70 via-[#1a0509] to-red-950/70 border-2 border-[#dd2d4a] rounded-sm text-xs leading-relaxed space-y-2 shadow-xl print:bg-gray-100 print:border-black print:p-3">
              <div className="flex items-center gap-2 text-[#dd2d4a] font-bold text-xs sm:text-sm uppercase tracking-wider print:text-black">
                <span className="material-symbols-outlined text-lg">warning</span>
                <span>STRICT POLICY NOTICE: ANTI-RABIES VACCINATION IS MANDATORY</span>
              </div>
              <p className="text-[#f3e9dc] text-xs sm:text-[13px] print:text-black">
                <strong className="text-white underline uppercase tracking-wide print:text-black">Rabies vaccination is strictly mandatory.</strong> Without up-to-date proof of Rabies vaccination, we will <strong className="text-[#dd2d4a] uppercase underline font-extrabold print:text-black">NOT WELCOME OR ADMIT THE PET</strong> under any circumstances. This policy is non-negotiable to safeguard all guest pets and team members.
              </p>
            </div>

            <div className="overflow-x-auto">
              <table className="w-full text-left text-xs border border-white/15 print:border-black">
                <thead>
                  <tr className="bg-[#0b0e14] text-[#cbeef3] border-b border-white/20 print:bg-gray-200 print:text-black">
                    <th className="py-2.5 px-3 font-bold uppercase tracking-wider">Vaccine</th>
                    <th className="py-2.5 px-3 font-bold uppercase tracking-wider">Date given</th>
                    <th className="py-2.5 px-3 font-bold uppercase tracking-wider">Next due</th>
                    <th className="py-2.5 px-3 font-bold uppercase tracking-wider text-center">Certificate attached</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-white/10 print:divide-gray-300">
                  {formData.vaccines.map((v, idx) => (
                    <tr
                      key={v.name}
                      className={`hover:bg-white/5 print:hover:bg-transparent ${
                        v.name.includes('Rabies') ? 'bg-red-950/20 border-l-2 border-l-[#dd2d4a]' : ''
                      }`}
                    >
                      <td className="py-2.5 px-3 font-semibold text-[#f3e9dc] print:text-black">
                        <div className="flex flex-wrap items-center gap-2">
                          <span>{v.name}</span>
                          {v.name.includes('Rabies') && (
                            <span className="px-1.5 py-0.5 bg-[#dd2d4a] text-white text-[9px] font-bold uppercase tracking-wider rounded">
                              MANDATORY • REQUIRED
                            </span>
                          )}
                        </div>
                      </td>
                      <td className="py-2 px-3">
                        <input
                          type="date"
                          value={v.dateGiven}
                          onChange={(e) => handleVaccineChange(idx, 'dateGiven', e.target.value)}
                          className="bg-[#0b0e14] border border-white/15 px-2 py-1 text-xs text-[#f3e9dc] rounded w-full print:bg-white print:text-black print:border-gray-400"
                        />
                      </td>
                      <td className="py-2 px-3">
                        <input
                          type="date"
                          value={v.nextDue}
                          onChange={(e) => handleVaccineChange(idx, 'nextDue', e.target.value)}
                          className="bg-[#0b0e14] border border-white/15 px-2 py-1 text-xs text-[#f3e9dc] rounded w-full print:bg-white print:text-black print:border-gray-400"
                        />
                      </td>
                      <td className="py-2 px-3 text-center">
                        <div className="inline-flex items-center gap-4 text-xs">
                          <label className="inline-flex items-center gap-1 cursor-pointer">
                            <input
                              type="radio"
                              name={`cert_${idx}`}
                              value="Yes"
                              checked={v.attached === 'Yes'}
                              onChange={() => handleVaccineChange(idx, 'attached', 'Yes')}
                              className="accent-[#cbeef3]"
                            />
                            <span>Yes</span>
                          </label>
                          <label className="inline-flex items-center gap-1 cursor-pointer">
                            <input
                              type="radio"
                              name={`cert_${idx}`}
                              value="No"
                              checked={v.attached === 'No'}
                              onChange={() => handleVaccineChange(idx, 'attached', 'No')}
                              className="accent-[#cbeef3]"
                            />
                            <span>No</span>
                          </label>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <div className="pt-2">
              <label className="inline-flex items-center gap-2 text-xs text-[#f3e9dc] print:text-black cursor-pointer">
                <input
                  type="checkbox"
                  name="vaccinationPapersAttached"
                  checked={formData.vaccinationPapersAttached}
                  onChange={handleInputChange}
                  className="w-4 h-4 accent-[#cbeef3] rounded"
                />
                <span className="font-semibold">Vaccination papers and vet prescription attached (photocopy)</span>
              </label>
            </div>
          </div>

          {/* SECTION 4: HEALTH & SPECIAL CARE */}
          <div className="space-y-4 pt-2">
            <div className="flex items-center gap-2.5 bg-[#1a2336] px-4 py-2 rounded-sm border-l-4 border-[#cbeef3] print:bg-gray-100 print:border-black">
              <span className="w-5 h-5 rounded-full bg-[#cbeef3] text-[#0b0e14] font-bold text-xs flex items-center justify-center print:bg-black print:text-white">4</span>
              <h2 className="text-xs sm:text-sm font-bold uppercase tracking-wider text-[#f3e9dc] print:text-black">
                HEALTH &amp; SPECIAL CARE
              </h2>
            </div>

            <div className="space-y-3.5">
              <div>
                <label className="text-xs uppercase tracking-wider font-semibold text-[#f3e9dc]/80 block mb-1 print:text-black">
                  Any disability or disease:
                </label>
                <input
                  type="text"
                  name="disabilityOrDisease"
                  value={formData.disabilityOrDisease}
                  onChange={handleInputChange}
                  placeholder="None or specify"
                  className="w-full bg-[#0b0e14] border border-white/15 px-4 py-2 text-sm text-[#f3e9dc] rounded print:bg-white print:text-black print:border-gray-400"
                />
              </div>

              <div>
                <label className="text-xs uppercase tracking-wider font-semibold text-[#f3e9dc]/80 block mb-1 print:text-black">
                  Current medication / prescription (dose &amp; timing):
                </label>
                <input
                  type="text"
                  name="currentMedication"
                  value={formData.currentMedication}
                  onChange={handleInputChange}
                  placeholder="e.g. Omega-3 1 capsule with breakfast"
                  className="w-full bg-[#0b0e14] border border-white/15 px-4 py-2 text-sm text-[#f3e9dc] rounded print:bg-white print:text-black print:border-gray-400"
                />
              </div>

              <div>
                <label className="text-xs uppercase tracking-wider font-semibold text-[#f3e9dc]/80 block mb-1 print:text-black">
                  Allergic to anything (food / medicine / other):
                </label>
                <input
                  type="text"
                  name="allergies"
                  value={formData.allergies}
                  onChange={handleInputChange}
                  placeholder="e.g. Chicken allergy, wheat intolerance, or None"
                  className="w-full bg-[#0b0e14] border border-white/15 px-4 py-2 text-sm text-[#f3e9dc] rounded print:bg-white print:text-black print:border-gray-400"
                />
              </div>

              <div>
                <label className="text-xs uppercase tracking-wider font-semibold text-[#f3e9dc]/80 block mb-1 print:text-black">
                  Diet &amp; feeding instructions:
                </label>
                <input
                  type="text"
                  name="dietInstructions"
                  value={formData.dietInstructions}
                  onChange={handleInputChange}
                  placeholder="e.g. 2 Meals daily: 09:00 AM (boiled chicken + rice), 07:00 PM (kibble)"
                  className="w-full bg-[#0b0e14] border border-white/15 px-4 py-2 text-sm text-[#f3e9dc] rounded print:bg-white print:text-black print:border-gray-400"
                />
              </div>
            </div>
          </div>

          {/* SECTION 5: NATURE & TEMPERAMENT */}
          <div className="space-y-4 pt-2">
            <div className="flex items-center gap-2.5 bg-[#1a2336] px-4 py-2 rounded-sm border-l-4 border-[#cbeef3] print:bg-gray-100 print:border-black">
              <span className="w-5 h-5 rounded-full bg-[#cbeef3] text-[#0b0e14] font-bold text-xs flex items-center justify-center print:bg-black print:text-white">5</span>
              <h2 className="text-xs sm:text-sm font-bold uppercase tracking-wider text-[#f3e9dc] print:text-black">
                NATURE &amp; TEMPERAMENT
              </h2>
            </div>

            <div>
              <span className="text-xs uppercase tracking-wider font-semibold text-[#f3e9dc]/80 block mb-3 print:text-black">
                Tick the one that best describes your pet:
              </span>
              <div className="grid grid-cols-2 sm:grid-cols-5 gap-2.5">
                {temperamentOptions.map((opt) => (
                  <button
                    key={opt.label}
                    type="button"
                    onClick={() => setFormData((p) => ({ ...p, temperament: opt.label }))}
                    className={`py-3 px-2 rounded text-center border transition-all cursor-pointer ${
                      formData.temperament === opt.label
                        ? `${opt.color} ring-2 ring-white/60 shadow-lg scale-102 font-bold`
                        : 'bg-[#0b0e14] border-white/15 text-[#f3e9dc]/80 hover:border-white/40 print:bg-white print:text-black print:border-gray-400'
                    }`}
                  >
                    <div className="w-full h-1.5 rounded-full mb-2" style={{ backgroundColor: opt.bar }}></div>
                    <span className="text-xs uppercase tracking-wider block">{opt.label}</span>
                  </button>
                ))}
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-2">
              <div className="p-4 bg-[#0b0e14] border border-white/10 rounded print:bg-white print:border-gray-400">
                <span className="text-xs uppercase tracking-wider font-semibold text-[#f3e9dc]/80 block mb-2 print:text-black">
                  Gets along with other dogs:
                </span>
                <div className="flex items-center gap-6 text-xs text-[#f3e9dc] print:text-black">
                  {['Yes', 'No', 'Not sure'].map((ans) => (
                    <label key={ans} className="inline-flex items-center gap-1.5 cursor-pointer">
                      <input
                        type="radio"
                        name="getsAlongWithDogs"
                        value={ans}
                        checked={formData.getsAlongWithDogs === ans}
                        onChange={handleInputChange}
                        className="accent-[#cbeef3]"
                      />
                      <span>{ans}</span>
                    </label>
                  ))}
                </div>
              </div>

              <div className="p-4 bg-[#0b0e14] border border-white/10 rounded print:bg-white print:border-gray-400">
                <span className="text-xs uppercase tracking-wider font-semibold text-[#f3e9dc]/80 block mb-2 print:text-black">
                  Has ever bitten / snapped:
                </span>
                <div className="flex items-center gap-6 text-xs text-[#f3e9dc] print:text-black">
                  {['Yes', 'No'].map((ans) => (
                    <label key={ans} className="inline-flex items-center gap-1.5 cursor-pointer">
                      <input
                        type="radio"
                        name="hasEverBitten"
                        value={ans}
                        checked={formData.hasEverBitten === ans}
                        onChange={handleInputChange}
                        className="accent-[#cbeef3]"
                      />
                      <span>{ans}</span>
                    </label>
                  ))}
                </div>
              </div>
            </div>

            <div>
              <label className="text-xs uppercase tracking-wider font-semibold text-[#f3e9dc]/80 block mb-1 print:text-black">
                Fears / triggers / behaviour notes:
              </label>
              <textarea
                name="fearsTriggersNotes"
                value={formData.fearsTriggersNotes}
                onChange={handleInputChange}
                rows={2}
                placeholder="e.g. Scared of thunderstorms/firecrackers, loves tummy rubs"
                className="w-full bg-[#0b0e14] border border-white/15 px-4 py-2 text-sm text-[#f3e9dc] rounded print:bg-white print:text-black print:border-gray-400"
              />
            </div>
          </div>

          {/* SECTION 6: VETERINARIAN & EMERGENCY CONTACT */}
          <div className="space-y-4 pt-2">
            <div className="flex items-center gap-2.5 bg-[#1a2336] px-4 py-2 rounded-sm border-l-4 border-[#cbeef3] print:bg-gray-100 print:border-black">
              <span className="w-5 h-5 rounded-full bg-[#cbeef3] text-[#0b0e14] font-bold text-xs flex items-center justify-center print:bg-black print:text-white">6</span>
              <h2 className="text-xs sm:text-sm font-bold uppercase tracking-wider text-[#f3e9dc] print:text-black">
                VETERINARIAN &amp; EMERGENCY CONTACT
              </h2>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="text-xs uppercase tracking-wider font-semibold text-[#f3e9dc]/80 block mb-1 print:text-black">
                  Vet / clinic name: *
                </label>
                <input
                  type="text"
                  name="vetClinicName"
                  value={formData.vetClinicName}
                  onChange={handleInputChange}
                  required
                  placeholder="e.g. Dr. Verma Pet Hospital, Faridabad"
                  className="w-full bg-[#0b0e14] border border-white/15 px-4 py-2 text-sm text-[#f3e9dc] rounded print:bg-white print:text-black print:border-gray-400"
                />
              </div>

              <div>
                <label className="text-xs uppercase tracking-wider font-semibold text-[#f3e9dc]/80 block mb-1 print:text-black">
                  Vet phone: *
                </label>
                <input
                  type="tel"
                  name="vetPhone"
                  value={formData.vetPhone}
                  onChange={handleInputChange}
                  required
                  placeholder="+91 98100 XXXXX"
                  className="w-full bg-[#0b0e14] border border-white/15 px-4 py-2 text-sm text-[#f3e9dc] rounded print:bg-white print:text-black print:border-gray-400"
                />
              </div>

              <div>
                <label className="text-xs uppercase tracking-wider font-semibold text-[#f3e9dc]/80 block mb-1 print:text-black">
                  Emergency contact name: *
                </label>
                <input
                  type="text"
                  name="emergencyContactName"
                  value={formData.emergencyContactName}
                  onChange={handleInputChange}
                  required
                  placeholder="Relative or friend in city"
                  className="w-full bg-[#0b0e14] border border-white/15 px-4 py-2 text-sm text-[#f3e9dc] rounded print:bg-white print:text-black print:border-gray-400"
                />
              </div>

              <div>
                <label className="text-xs uppercase tracking-wider font-semibold text-[#f3e9dc]/80 block mb-1 print:text-black">
                  Relation &amp; phone: *
                </label>
                <input
                  type="text"
                  name="emergencyRelationPhone"
                  value={formData.emergencyRelationPhone}
                  onChange={handleInputChange}
                  required
                  placeholder="Brother (+91 98711 XXXXX)"
                  className="w-full bg-[#0b0e14] border border-white/15 px-4 py-2 text-sm text-[#f3e9dc] rounded print:bg-white print:text-black print:border-gray-400"
                />
              </div>
            </div>
          </div>

          {/* SECTION 7: DECLARATION & SIGNATURE */}
          <div className="space-y-4 pt-2">
            <div className="flex items-center gap-2.5 bg-[#1a2336] px-4 py-2 rounded-sm border-l-4 border-[#cbeef3] print:bg-gray-100 print:border-black">
              <span className="w-5 h-5 rounded-full bg-[#cbeef3] text-[#0b0e14] font-bold text-xs flex items-center justify-center print:bg-black print:text-white">7</span>
              <h2 className="text-xs sm:text-sm font-bold uppercase tracking-wider text-[#f3e9dc] print:text-black">
                DECLARATION &amp; SIGNATURE
              </h2>
            </div>

            <div className="p-4 bg-[#0b0e14] border border-white/10 text-xs sm:text-sm text-[#f3e9dc]/85 leading-relaxed rounded print:bg-white print:text-black print:border-gray-400">
              <label className="flex items-start gap-3 cursor-pointer">
                <input
                  type="checkbox"
                  name="declarationAgreed"
                  checked={formData.declarationAgreed}
                  onChange={handleInputChange}
                  required
                  className="mt-1 w-4 h-4 accent-[#cbeef3] shrink-0 rounded"
                />
                <span>
                  I confirm that the information above is true and correct. My pet is up to date on the vaccinations listed, and I will inform the boarding of any change in health or behaviour. <strong>I acknowledge and agree that Anti-Rabies vaccination is strictly mandatory, and without valid proof of rabies vaccination, Furrever Inn will not welcome or admit my pet.</strong> In an emergency, I authorise the boarding to take my pet to a veterinarian and I agree to bear the treatment costs. I understand the boarding's rules and policies.
                </span>
              </label>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              <div>
                <label className="text-xs uppercase tracking-wider font-semibold text-[#f3e9dc]/80 block mb-1 print:text-black">
                  Signature of pet parent: *
                </label>
                <input
                  type="text"
                  name="signatureName"
                  value={formData.signatureName}
                  onChange={handleInputChange}
                  required
                  placeholder="Type full name to digitally sign"
                  className="w-full bg-[#0b0e14] border border-white/15 px-4 py-2.5 text-sm font-serif italic text-[#cbeef3] focus:border-[#cbeef3] rounded print:bg-white print:text-black print:border-gray-400"
                />
              </div>

              <div>
                <label className="text-xs uppercase tracking-wider font-semibold text-[#f3e9dc]/80 block mb-1 print:text-black">
                  Date: *
                </label>
                <input
                  type="date"
                  name="signatureDate"
                  value={formData.signatureDate}
                  onChange={handleInputChange}
                  required
                  className="w-full bg-[#0b0e14] border border-white/15 px-4 py-2 text-sm text-[#f3e9dc] rounded print:bg-white print:text-black print:border-gray-400"
                />
              </div>
            </div>
          </div>

          {/* FOR OFFICE USE ONLY (Printed / Staff Section) */}
          <div className="p-4 bg-[#0b0e14]/60 border border-white/10 rounded print:bg-white print:border-black print:p-3 space-y-2">
            <span className="text-[10px] font-bold uppercase tracking-widest text-[#f49cbb] block print:text-black">
              FOR OFFICE USE ONLY
            </span>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs text-[#f3e9dc] print:text-black">
              <div className="flex items-center gap-2">
                <span className="text-white/60 print:text-gray-600">Received by:</span>
                <input
                  type="text"
                  name="receivedBy"
                  value={formData.receivedBy}
                  onChange={handleInputChange}
                  placeholder="Staff Name"
                  className="bg-transparent border-b border-white/20 px-2 py-0.5 text-xs text-[#f3e9dc] flex-1 focus:outline-none print:border-gray-400 print:text-black"
                />
              </div>
              <div className="flex items-center gap-2">
                <label className="inline-flex items-center gap-1.5 cursor-pointer">
                  <input
                    type="checkbox"
                    name="documentsVerified"
                    checked={formData.documentsVerified}
                    onChange={handleInputChange}
                    className="accent-[#cbeef3]"
                  />
                  <span>Documents verified</span>
                </label>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-white/60 print:text-gray-600">Kennel/ room no.:</span>
                <input
                  type="text"
                  name="kennelRoomNo"
                  value={formData.kennelRoomNo}
                  onChange={handleInputChange}
                  placeholder="Suite / Room #"
                  className="bg-transparent border-b border-white/20 px-2 py-0.5 text-xs text-[#f3e9dc] flex-1 focus:outline-none print:border-gray-400 print:text-black"
                />
              </div>
            </div>
            <p className="text-[10px] text-white/50 print:text-gray-500 pt-1">
              Information provided is kept confidential and used only for the care and safety of your pet.
            </p>
          </div>

          {/* Form Submit & Print Buttons */}
          <div className="space-y-4 pt-6 border-t border-white/10 print:hidden">
            {rabiesError && (
              <div className="p-4 bg-red-950/80 border-2 border-[#dd2d4a] rounded text-white text-xs sm:text-sm font-semibold flex items-center gap-3 animate-shake">
                <span className="material-symbols-outlined text-red-400 text-xl">error</span>
                <span>{rabiesError}</span>
              </div>
            )}

            <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <button
              type="button"
              onClick={handlePrint}
              className="w-full sm:w-auto px-6 py-3.5 bg-[#1a2336] hover:bg-[#22304a] text-[#f3e9dc] border border-white/20 rounded text-xs font-bold uppercase tracking-wider inline-flex items-center justify-center gap-2 transition-colors cursor-pointer"
            >
              <span className="material-symbols-outlined text-sm text-[#cbeef3]">print</span>
              <span>Print Form</span>
            </button>

            <div className="flex flex-col sm:flex-row items-center gap-3 w-full sm:w-auto">
              <button
                type="button"
                onClick={() => handleShareWhatsApp(formData)}
                className="w-full sm:w-auto px-6 py-3.5 bg-[#128C7E] hover:bg-[#25D366] text-white rounded text-xs font-bold uppercase tracking-wider inline-flex items-center justify-center gap-2 transition-colors cursor-pointer shadow-md"
              >
                <span className="material-symbols-outlined text-sm">chat</span>
                <span>Send via WhatsApp</span>
              </button>

              <button
                type="submit"
                disabled={submitting}
                className="w-full sm:w-auto px-8 py-3.5 bg-[#dd2d4a] hover:bg-[#b81d36] text-white rounded text-xs font-bold uppercase tracking-widest transition-all shadow-xl hover:shadow-[0_0_20px_rgba(221,45,74,0.6)] cursor-pointer disabled:opacity-50"
              >
                {submitting ? 'Registering Dossier...' : 'Submit Official Enrollment'}
              </button>
            </div>
          </div>
          </div>
        </form>
      )}
    </div>
  );
}
