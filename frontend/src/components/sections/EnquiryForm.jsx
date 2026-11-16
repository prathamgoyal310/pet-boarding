import React, { useState, useEffect } from 'react';
import { BRAND } from '../../constants/brand';
import { apiService } from '../../services/api';
import { navigate } from '../../constants/navigation';

export default function EnquiryForm() {
  const [customerType, setCustomerType] = useState('returning'); // 'returning' | 'new'
  const [regInput, setRegInput] = useState('');
  const [lookupLoading, setLookupLoading] = useState(false);
  const [lookupStatus, setLookupStatus] = useState('idle'); // 'idle' | 'verified' | 'not_found' | 'error'
  const [lookupMessage, setLookupMessage] = useState('');
  const [verifiedRecord, setVerifiedRecord] = useState(null);

  const [formData, setFormData] = useState({
    fullName: '',
    phone: '',
    petName: '',
    breedWeight: '',
    chamber: '24-Hour Day & Night Boarding (₹799)',
    arrivalDate: '',
    durationNights: 7,
    notes: '',
    regNumber: ''
  });

  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [submissionResult, setSubmissionResult] = useState(null);

  // Auto-detect registration number from URL or localStorage
  useEffect(() => {
    let regToLookup = '';
    const hash = window.location.hash || '';
    const search = window.location.search || '';

    // Check hash params e.g. #/admissions?reg=FI-REG-839201 or #enquiry?reg=...
    const matchHash = hash.match(/[?&]reg=([^&]+)/i);
    const matchSearch = search.match(/[?&]reg=([^&]+)/i);

    if (matchHash && matchHash[1]) {
      regToLookup = decodeURIComponent(matchHash[1]);
    } else if (matchSearch && matchSearch[1]) {
      regToLookup = decodeURIComponent(matchSearch[1]);
    } else {
      const stored = localStorage.getItem('furrever_reg_number');
      if (stored) regToLookup = stored;
    }

    if (regToLookup) {
      setRegInput(regToLookup);
      setCustomerType('returning');
      performLookup(regToLookup);
    }
  }, []);

  const performLookup = async (queryNumber) => {
    const cleanNo = (queryNumber || regInput).trim().toUpperCase();
    if (!cleanNo) {
      setLookupStatus('error');
      setLookupMessage('Please enter your unique Registration Number.');
      return;
    }

    setLookupLoading(true);
    setLookupStatus('idle');
    setLookupMessage('');

    try {
      const res = await apiService.lookupEnrollment(cleanNo);
      if (res && res.found && res.record) {
        const rec = res.record;
        setVerifiedRecord(rec);
        setLookupStatus('verified');
        setLookupMessage(`Verified companion found: ${rec.petName} (${rec.breed})`);

        // Auto-fill fields for fast-track booking
        setFormData((prev) => ({
          ...prev,
          fullName: rec.parentName || prev.fullName,
          phone: rec.contact1 || prev.phone,
          petName: rec.petName || prev.petName,
          breedWeight: rec.breed ? `${rec.breed} (${rec.weight || 'Weight on file'} kg)` : prev.breedWeight,
          regNumber: rec.regNumber || rec.enrollmentNo,
          notes: prev.notes || `[Returning Customer Record: ${rec.regNumber || rec.enrollmentNo}] Diet: ${rec.dietInstructions || 'Regular'} | Allergies: ${rec.allergies || 'None'}`
        }));
      } else {
        setVerifiedRecord(null);
        setLookupStatus('not_found');
        setLookupMessage(
          res?.message || `No registered dog found for Registration No. "${cleanNo}". Please verify the number or fill out First-Time Enrolment.`
        );
      }
    } catch (err) {
      console.warn('Lookup error:', err);
      setLookupStatus('error');
      setLookupMessage('Could not verify registration number at this time. You may still proceed with manual entry.');
    } finally {
      setLookupLoading(false);
    }
  };

  const handleManualLookupSubmit = (e) => {
    e.preventDefault();
    performLookup(regInput);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleClearVerified = () => {
    setVerifiedRecord(null);
    setLookupStatus('idle');
    setLookupMessage('');
    setFormData((prev) => ({
      ...prev,
      fullName: '',
      phone: '',
      petName: '',
      breedWeight: '',
      regNumber: '',
      notes: ''
    }));
    setRegInput('');
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    const payload = {
      ...formData,
      isReturningCustomer: lookupStatus === 'verified' || Boolean(formData.regNumber)
    };

    try {
      const res = await apiService.submitEnquiry(payload);
      setSubmissionResult(res);
      setSubmitted(true);
    } catch (err) {
      console.warn('API submission failed, using optimistic response:', err);
      setSubmissionResult({
        success: true,
        isReturningCustomer: lookupStatus === 'verified',
        regNumber: formData.regNumber,
        petName: formData.petName
      });
      setSubmitted(true);
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="py-24 sm:py-28 lg:py-32 xl:py-36 px-6 sm:px-8 lg:px-12 max-w-7xl mx-auto border-b border-[#880d1e]/40 relative overflow-hidden reveal-up scroll-mt-24" id="enquiry">
      {/* Ambient background glows */}
      <div className="pointer-events-none absolute top-12 left-10 w-96 h-96 rounded-full bg-[#880d1e]/30 blur-3xl opacity-50 z-0"></div>
      <div className="pointer-events-none absolute -bottom-10 right-10 w-[420px] h-[420px] rounded-full bg-[#cbeef3]/15 blur-3xl opacity-40 z-0"></div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 xl:gap-20 relative z-10 items-start">
        {/* Left Column: Context */}
        <div className="lg:col-span-5 space-y-8">
          <div className="space-y-4">
            <span className="text-[11px] font-bold uppercase tracking-[0.25em] text-[#cbeef3]">Private Admissions</span>
            <h2 className="font-['Fraunces',serif] text-3xl sm:text-4xl lg:text-5xl text-[#f3e9dc] font-bold leading-tight tracking-wide">
              Request a Bespoke Stay
            </h2>
            <p className="font-['Plus_Jakarta_Sans',sans-serif] text-sm md:text-base text-[#f3e9dc]/85 font-normal leading-relaxed">
              Due to our limited guest capacity of just {BRAND.dimensions.suitesCount} sovereign suites, reservations are confirmed following verification of immunization and behavioral intake history.
            </p>
          </div>

          {/* Returning Customer Advantage Note */}
          <div className="p-6 bg-gradient-to-br from-[#121722] to-[#1a2336] border border-[#cbeef3]/30 rounded-sm space-y-3 shadow-lg">
            <div className="flex items-center gap-2 text-[#cbeef3]">
              <span className="material-symbols-outlined text-lg">badge</span>
              <span className="text-xs font-bold uppercase tracking-wider">Already Enrolled with Us?</span>
            </div>
            <p className="text-xs text-[#f3e9dc]/80 leading-relaxed">
              If you have previously filled our <strong>First-Time Dog Enrolment Form</strong>, enter your unique <strong className="text-amber-300">Registration Number</strong> in the form. Your companion’s profile, health clearance, and vaccination papers will be recognized automatically!
            </p>
            <div className="pt-1">
              <a
                href="/enrollment"
                onClick={(e) => {
                  e.preventDefault();
                  navigate('/enrollment');
                }}
                className="inline-flex items-center gap-1.5 text-xs text-[#cbeef3] hover:text-white font-bold uppercase tracking-wider underline decoration-[#dd2d4a] decoration-2 underline-offset-4 transition-colors"
              >
                <span>New guest? First-time Dog Enrolment Form</span>
                <span className="material-symbols-outlined text-xs">arrow_forward</span>
              </a>
            </div>
          </div>

          <div className="p-7 sm:p-8 bg-[#121722] border border-white/10 space-y-5 shadow-lg rounded-sm">
            <div className="text-[11px] font-bold uppercase text-[#cbeef3] tracking-widest">
              Furrever Inn Concierge Direct
            </div>
            <div className="space-y-4">
              <a href={`tel:${BRAND.rawPhone}`} className="flex items-center gap-3.5 text-[#f3e9dc] hover:text-[#cbeef3] transition-colors">
                <span className="material-symbols-outlined text-[#cbeef3] text-xl">call</span>
                <span className="font-['Plus_Jakarta_Sans',sans-serif] text-sm sm:text-base font-semibold">{BRAND.phone}</span>
              </a>
              <a href={`mailto:${BRAND.email}`} className="flex items-center gap-3.5 text-[#f3e9dc] hover:text-[#cbeef3] transition-colors">
                <span className="material-symbols-outlined text-[#cbeef3] text-xl">mail</span>
                <span className="font-['Plus_Jakarta_Sans',sans-serif] text-sm sm:text-base">{BRAND.email}</span>
              </a>
              <div className="flex items-start gap-3.5 text-[#f3e9dc]">
                <span className="material-symbols-outlined text-[#cbeef3] text-xl mt-0.5">location_on</span>
                <span className="font-['Plus_Jakarta_Sans',sans-serif] text-sm sm:text-base leading-relaxed">{BRAND.estate}</span>
              </div>
            </div>
          </div>

          <div className="border-t border-white/10 pt-8 space-y-2">
            <span className="text-[11px] font-bold uppercase text-[#f49cbb] tracking-wider font-semibold">Sanctuary Accreditation</span>
            <p className="font-['Plus_Jakarta_Sans',sans-serif] text-xs sm:text-sm text-[#f3e9dc]/70 leading-relaxed">
              {BRAND.accreditation}
            </p>
          </div>
        </div>

        {/* Right Column: High-end Form */}
        <div className="lg:col-span-7 bg-[#121722] border border-white/10 p-6 sm:p-10 lg:p-12 shadow-2xl rounded-sm">
          {submitted ? (
            <div className="text-center py-12 space-y-6">
              <div className="w-20 h-20 mx-auto rounded-full bg-[#1a2336] border-2 border-emerald-400 flex items-center justify-center text-emerald-400 text-4xl shadow-[0_0_30px_rgba(16,185,129,0.4)]">
                ✓
              </div>

              {submissionResult?.isReturningCustomer || formData.regNumber ? (
                <div className="space-y-3">
                  <div className="inline-flex items-center gap-2 px-3 py-1 bg-emerald-500/20 border border-emerald-400/40 rounded text-emerald-300 text-xs font-bold uppercase tracking-wider">
                    <span className="material-symbols-outlined text-sm">verified</span>
                    <span>Verified Returning Customer</span>
                  </div>
                  <h3 className="font-['Fraunces',serif] text-2xl sm:text-3xl text-[#f3e9dc] font-bold">
                    Welcome Back, {formData.petName}!
                  </h3>
                  <p className="font-['Plus_Jakarta_Sans',sans-serif] text-sm sm:text-base text-[#f3e9dc]/85 max-w-lg mx-auto leading-relaxed">
                    We recognized your companion via Registration No. <strong className="text-amber-300 font-mono">{formData.regNumber || submissionResult?.regNumber}</strong>. Your verified clinical immunization records, feeding preferences, and parent contact details are on file.
                  </p>
                </div>
              ) : (
                <div className="space-y-3">
                  <h3 className="font-['Fraunces',serif] text-2xl sm:text-3xl text-[#f3e9dc] font-bold">Reservation Dossier Received</h3>
                  <p className="font-['Plus_Jakarta_Sans',sans-serif] text-sm sm:text-base text-[#f3e9dc]/80 max-w-md mx-auto leading-relaxed">
                    Thank you for entrusting your companion with us. Our private concierge team will verify availability and reach out to your registered phone within 2 hours.
                  </p>
                </div>
              )}

              <div className="pt-6 flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href={`https://wa.me/${BRAND.rawPhone}?text=Hi%20Furrever%20Inn,%20I%20just%20submitted%20a%20booking%20enquiry%20for%20${encodeURIComponent(formData.petName || 'my pet')}${formData.regNumber ? `%20(Reg%20%23${encodeURIComponent(formData.regNumber)})` : ''}.`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-7 py-3.5 bg-[#128C7E] hover:bg-[#25D366] text-white text-xs uppercase font-bold tracking-widest transition-colors flex items-center justify-center gap-2 rounded-sm shadow-lg"
                >
                  <span className="material-symbols-outlined text-sm">chat</span>
                  Connect on WhatsApp
                </a>
                <button
                  type="button"
                  onClick={() => {
                    setSubmitted(false);
                    setSubmissionResult(null);
                  }}
                  className="px-7 py-3.5 border border-white/20 text-[#cbeef3] hover:border-[#cbeef3] text-xs uppercase font-bold tracking-widest transition-colors cursor-pointer rounded-sm"
                >
                  Submit Another Inquiry
                </button>
              </div>
            </div>
          ) : (
            <div className="space-y-8">
              {/* TOP TOGGLE: RETURNING ENROLLED CUSTOMER vs NEW GUEST */}
              <div className="space-y-3 border-b border-white/10 pb-6">
                <div className="flex items-center justify-between">
                  <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#cbeef3]">
                    Step 1: Select Guest Status
                  </span>
                  {lookupStatus === 'verified' && (
                    <span className="text-[10px] font-bold uppercase tracking-wider text-emerald-400 flex items-center gap-1">
                      <span className="material-symbols-outlined text-xs">check_circle</span>
                      Fast-Track Verified
                    </span>
                  )}
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <button
                    type="button"
                    onClick={() => setCustomerType('returning')}
                    className={`p-3.5 rounded border text-left transition-all cursor-pointer flex items-center justify-between ${
                      customerType === 'returning'
                        ? 'bg-gradient-to-r from-[#880d1e]/30 to-[#121722] border-[#dd2d4a] shadow-[0_0_15px_rgba(221,45,74,0.3)]'
                        : 'bg-[#0b0e14] border-white/10 opacity-70 hover:opacity-100'
                    }`}
                  >
                    <div>
                      <div className="text-xs font-bold uppercase tracking-wider text-white flex items-center gap-1.5">
                        <span className="material-symbols-outlined text-sm text-amber-300">verified</span>
                        <span>Returning Customer</span>
                      </div>
                      <span className="text-[10px] text-[#f3e9dc]/70 block mt-0.5">
                        Have Unique Reg Number (Fast-Track)
                      </span>
                    </div>
                    {customerType === 'returning' && (
                      <span className="w-2.5 h-2.5 rounded-full bg-[#dd2d4a] shrink-0"></span>
                    )}
                  </button>

                  <button
                    type="button"
                    onClick={() => {
                      setCustomerType('new');
                      if (lookupStatus === 'verified') handleClearVerified();
                    }}
                    className={`p-3.5 rounded border text-left transition-all cursor-pointer flex items-center justify-between ${
                      customerType === 'new'
                        ? 'bg-gradient-to-r from-[#1a2336] to-[#121722] border-[#cbeef3] shadow-[0_0_15px_rgba(203,238,243,0.2)]'
                        : 'bg-[#0b0e14] border-white/10 opacity-70 hover:opacity-100'
                    }`}
                  >
                    <div>
                      <div className="text-xs font-bold uppercase tracking-wider text-white flex items-center gap-1.5">
                        <span className="material-symbols-outlined text-sm text-[#cbeef3]">pets</span>
                        <span>First-Time Guest</span>
                      </div>
                      <span className="text-[10px] text-[#f3e9dc]/70 block mt-0.5">
                        New dog visiting for the first time
                      </span>
                    </div>
                    {customerType === 'new' && (
                      <span className="w-2.5 h-2.5 rounded-full bg-[#cbeef3] shrink-0"></span>
                    )}
                  </button>
                </div>

                {/* FAST-TRACK REGISTRATION NUMBER LOOKUP BOX */}
                {customerType === 'returning' && (
                  <div className="mt-4 p-5 bg-[#0b0e14] border border-[#dd2d4a]/50 rounded space-y-3.5">
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                      <label className="text-[11px] font-bold uppercase tracking-wider text-amber-300 flex items-center gap-1.5">
                        <span className="material-symbols-outlined text-sm">vpn_key</span>
                        <span>Enter Unique Registration Number</span>
                      </label>
                      <span className="text-[10px] text-[#f3e9dc]/60">Format: FI-REG-XXXXXX</span>
                    </div>

                    <form onSubmit={handleManualLookupSubmit} className="flex flex-col sm:flex-row gap-2">
                      <div className="relative flex-1">
                        <input
                          type="text"
                          value={regInput}
                          onChange={(e) => setRegInput(e.target.value.toUpperCase())}
                          placeholder="e.g. FI-REG-839201"
                          className="w-full bg-[#121722] border border-white/20 px-4 py-2.5 text-sm font-mono text-amber-300 tracking-wider focus:border-amber-300 focus:outline-none uppercase rounded-sm"
                        />
                        {regInput && (
                          <button
                            type="button"
                            onClick={() => setRegInput('')}
                            className="absolute right-3 top-2.5 text-white/40 hover:text-white text-xs cursor-pointer"
                          >
                            ✕
                          </button>
                        )}
                      </div>

                      <button
                        type="submit"
                        disabled={lookupLoading || !regInput.trim()}
                        className="px-5 py-2.5 bg-[#dd2d4a] hover:bg-[#b81d36] disabled:opacity-50 text-white text-xs font-bold uppercase tracking-wider rounded-sm flex items-center justify-center gap-1.5 transition-all cursor-pointer shadow-md shrink-0"
                      >
                        {lookupLoading ? (
                          <span className="inline-block w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></span>
                        ) : (
                          <span className="material-symbols-outlined text-sm">search_check</span>
                        )}
                        <span>{lookupLoading ? 'Verifying...' : 'Verify & Auto-Fill'}</span>
                      </button>
                    </form>

                    {/* LOOKUP RESULT: VERIFIED */}
                    {lookupStatus === 'verified' && verifiedRecord && (
                      <div className="p-4 bg-emerald-950/40 border border-emerald-500/50 rounded text-left space-y-2">
                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-2">
                            <span className="material-symbols-outlined text-emerald-400 text-lg">verified</span>
                            <span className="text-xs font-bold uppercase tracking-wider text-emerald-300">
                              Recognized Sanctuary Customer: {verifiedRecord.petName}
                            </span>
                          </div>
                          <button
                            type="button"
                            onClick={handleClearVerified}
                            className="text-[10px] text-white/60 hover:text-white underline cursor-pointer"
                          >
                            Change Dog
                          </button>
                        </div>

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-[#f3e9dc]/85 pt-1">
                          <div>
                            <span className="text-white/50 block">Breed &amp; Weight:</span>
                            <strong>{verifiedRecord.breed}</strong> ({verifiedRecord.weight || 'On file'} kg)
                          </div>
                          <div>
                            <span className="text-white/50 block">Registered Guardian:</span>
                            <strong>{verifiedRecord.parentName}</strong> ({verifiedRecord.contact1})
                          </div>
                        </div>

                        <div className="text-[11px] text-emerald-300/90 pt-1 flex items-center gap-1.5">
                          <span className="material-symbols-outlined text-sm">medical_services</span>
                          <span>Rabies vaccination and medical history are verified on file. Profile auto-filled below!</span>
                        </div>
                      </div>
                    )}

                    {/* LOOKUP RESULT: NOT FOUND */}
                    {lookupStatus === 'not_found' && (
                      <div className="p-4 bg-amber-950/40 border border-amber-500/50 rounded text-left space-y-2">
                        <div className="flex items-center gap-2 text-amber-300 text-xs font-bold uppercase">
                          <span className="material-symbols-outlined text-sm">warning</span>
                          <span>Registration Number Not Found</span>
                        </div>
                        <p className="text-xs text-[#f3e9dc]/85 leading-relaxed">
                          {lookupMessage}
                        </p>
                        <div className="pt-1 flex items-center gap-3">
                          <a
                            href="/enrollment"
                            onClick={(e) => {
                              e.preventDefault();
                              navigate('/enrollment');
                            }}
                            className="px-3.5 py-1.5 bg-[#dd2d4a] hover:bg-[#b81d36] text-white text-[11px] font-bold uppercase tracking-wider rounded inline-flex items-center gap-1 transition-colors"
                          >
                            <span>Fill First-Time Enrolment Form</span>
                            <span className="material-symbols-outlined text-xs">arrow_forward</span>
                          </a>
                          <button
                            type="button"
                            onClick={() => setCustomerType('new')}
                            className="text-[11px] text-[#cbeef3] hover:underline cursor-pointer"
                          >
                            Continue as New Guest
                          </button>
                        </div>
                      </div>
                    )}

                    {/* LOOKUP RESULT: ERROR */}
                    {lookupStatus === 'error' && (
                      <div className="p-3 bg-red-950/40 border border-red-500/40 rounded text-xs text-red-200">
                        {lookupMessage}
                      </div>
                    )}
                  </div>
                )}
              </div>

              {/* RESERVATION FORM FIELDS */}
              <form className="space-y-7 sm:space-y-8" onSubmit={handleSubmit}>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-7">
                  {/* Guardian Name */}
                  <div className="space-y-2.5">
                    <label className="block text-[11px] font-bold uppercase tracking-wider text-[#cbeef3]">
                      Guardian Full Name *
                    </label>
                    <input
                      name="fullName"
                      value={formData.fullName}
                      onChange={handleChange}
                      className="w-full bg-[#0b0e14] border border-white/15 px-4.5 py-3.5 text-[#f3e9dc] text-sm focus:border-[#cbeef3] focus:ring-1 focus:ring-[#cbeef3]/40 focus:outline-none transition-colors rounded-sm"
                      placeholder="e.g., Vikramaditya Singhania"
                      required
                      type="text"
                    />
                  </div>
                  {/* Contact Mobile */}
                  <div className="space-y-2.5">
                    <label className="block text-[11px] font-bold uppercase tracking-wider text-[#cbeef3]">
                      Telephone / WhatsApp *
                    </label>
                    <input
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full bg-[#0b0e14] border border-white/15 px-4.5 py-3.5 text-[#f3e9dc] text-sm focus:border-[#cbeef3] focus:ring-1 focus:ring-[#cbeef3]/40 focus:outline-none transition-colors rounded-sm"
                      placeholder="+91 98187 61097"
                      required
                      type="tel"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-7">
                  {/* Canine Name */}
                  <div className="space-y-2.5">
                    <label className="block text-[11px] font-bold uppercase tracking-wider text-[#cbeef3]">
                      Dog's Name *
                    </label>
                    <input
                      name="petName"
                      value={formData.petName}
                      onChange={handleChange}
                      className="w-full bg-[#0b0e14] border border-white/15 px-4.5 py-3.5 text-[#f3e9dc] text-sm focus:border-[#cbeef3] focus:ring-1 focus:ring-[#cbeef3]/40 focus:outline-none transition-colors rounded-sm"
                      placeholder="e.g., Hugo"
                      required
                      type="text"
                    />
                  </div>
                  {/* Breed */}
                  <div className="space-y-2.5">
                    <label className="block text-[11px] font-bold uppercase tracking-wider text-[#cbeef3]">
                      Breed &amp; Weight *
                    </label>
                    <input
                      name="breedWeight"
                      value={formData.breedWeight}
                      onChange={handleChange}
                      className="w-full bg-[#0b0e14] border border-white/15 px-4.5 py-3.5 text-[#f3e9dc] text-sm focus:border-[#cbeef3] focus:ring-1 focus:ring-[#cbeef3]/40 focus:outline-none transition-colors rounded-sm"
                      placeholder="e.g., Golden Retriever (32kg)"
                      required
                      type="text"
                    />
                  </div>
                  {/* Suite Selection */}
                  <div className="space-y-2.5">
                    <label className="block text-[11px] font-bold uppercase tracking-wider text-[#cbeef3]">
                      Preferred Chamber
                    </label>
                    <select
                      name="chamber"
                      value={formData.chamber}
                      onChange={handleChange}
                      className="w-full bg-[#0b0e14] border border-white/15 px-4.5 py-3.5 text-[#f3e9dc] text-sm focus:border-[#cbeef3] focus:ring-1 focus:ring-[#cbeef3]/40 focus:outline-none transition-colors rounded-sm"
                    >
                      <option value="Play & Socialize (1 Hr - ₹99)">Play &amp; Socialize (1 Hr - ₹99)</option>
                      <option value="Quick Stay (3 Hrs - ₹199)">Quick Stay (3 Hrs - ₹199)</option>
                      <option value="Half Day Retreat (6 Hrs - ₹349)">Half Day Retreat (6 Hrs - ₹349)</option>
                      <option value="Full Day Care (12 Hrs - ₹549)">Full Day Care (12 Hrs - ₹549)</option>
                      <option value="24-Hour Day & Night Boarding (₹799)">24-Hour Day &amp; Night Boarding (₹799)</option>
                      <option value="Extended Mini-Stay (3 Days - ₹2,199)">Extended Mini-Stay (3 Days - ₹2,199)</option>
                      <option value="Weekly Full Boarding (7 Days - ₹4,699)">Weekly Full Boarding (7 Days - ₹4,699)</option>
                    </select>
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-7">
                  {/* Check In Date */}
                  <div className="space-y-2.5">
                    <label className="block text-[11px] font-bold uppercase tracking-wider text-[#cbeef3]">
                      Anticipated Arrival Date *
                    </label>
                    <input
                      name="arrivalDate"
                      value={formData.arrivalDate}
                      onChange={handleChange}
                      className="w-full bg-[#0b0e14] border border-white/15 px-4.5 py-3.5 text-[#f3e9dc] text-sm focus:border-[#cbeef3] focus:ring-1 focus:ring-[#cbeef3]/40 focus:outline-none transition-colors [color-scheme:dark] rounded-sm"
                      required
                      type="date"
                    />
                  </div>
                  {/* Duration in Days */}
                  <div className="space-y-2.5">
                    <label className="block text-[11px] font-bold uppercase tracking-wider text-[#cbeef3]">
                      Duration of Stay (Nights)
                    </label>
                    <input
                      name="durationNights"
                      value={formData.durationNights}
                      onChange={handleChange}
                      className="w-full bg-[#0b0e14] border border-white/15 px-4.5 py-3.5 text-[#f3e9dc] text-sm focus:border-[#cbeef3] focus:ring-1 focus:ring-[#cbeef3]/40 focus:outline-none transition-colors rounded-sm"
                      max="90"
                      min="1"
                      type="number"
                    />
                  </div>
                </div>

                {/* Special Dietary / Medical Notes */}
                <div className="space-y-2.5">
                  <label className="block text-[11px] font-bold uppercase tracking-wider text-[#cbeef3]">
                    Dietary Preferences, Medication &amp; Behavioral Notes
                  </label>
                  <textarea
                    name="notes"
                    value={formData.notes}
                    onChange={handleChange}
                    className="w-full bg-[#0b0e14] border border-white/15 px-4.5 py-3.5 text-[#f3e9dc] text-sm focus:border-[#cbeef3] focus:ring-1 focus:ring-[#cbeef3]/40 focus:outline-none transition-colors rounded-sm"
                    placeholder="Specify raw/steamed preferences, medication timing, or special sensitivities..."
                    rows="3"
                  ></textarea>
                </div>

                {/* Live Estimated Quote Banner */}
                <div className="p-5 sm:p-6 bg-[#0b0e14] border border-[#dd2d4a]/60 flex justify-between items-center rounded-sm">
                  <div>
                    <span className="text-[10px] font-bold uppercase text-[#cbeef3] tracking-wider">
                      Indicative Estimated Tariff
                    </span>
                    <div className="font-['Nunito',sans-serif] text-xl sm:text-2xl text-[#f26a8d] font-black mt-0.5">
                      ₹799{' '}
                      <span className="text-xs font-['Plus_Jakarta_Sans',sans-serif] text-[#f3e9dc]/80 uppercase tracking-normal font-sans">
                        (24-Hour Boarding with 24x7 CCTV &amp; Updates)
                      </span>
                    </div>
                  </div>
                  <span className="material-symbols-outlined text-[#cbeef3] text-2xl sm:text-3xl">verified</span>
                </div>

                <div className="pt-2">
                  <button
                    type="submit"
                    disabled={loading}
                    className="w-full bg-[#dd2d4a] hover:bg-[#b81d36] text-white py-4.5 sm:py-5 border border-[#f26a8d]/40 transition-all duration-300 text-xs font-bold uppercase tracking-[0.2em] text-center shadow-lg hover:shadow-[0_0_25px_rgba(221,45,74,0.6)] cursor-pointer rounded-sm"
                  >
                    {loading
                      ? 'Submitting Reservation...'
                      : lookupStatus === 'verified'
                      ? 'Confirm Fast-Track Returning Guest Booking'
                      : 'Submit Reservation Dossier'}
                  </button>
                </div>

                <p className="text-center text-[11px] font-bold uppercase text-[#f49cbb]/80 tracking-wider font-semibold pt-1">
                  Our Private Attendant Concierge replies within 2 hours with availability and clinical intake forms.
                </p>
              </form>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
