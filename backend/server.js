const express = require('express');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

// In-memory reservations log
const reservations = [];

// Health Check API
app.get('/api/health', (req, res) => {
  res.json({
    status: 'online',
    sanctuary: 'Furrever Inn Pvt. Ltd.',
    address: 'Shop No. 5, Opposite side of Green Power Residency, Sector 76, Faridabad, Haryana',
    location: 'Sector 76, Faridabad, Haryana',
    phone: '+91 98187 61097',
    email: 'innfurrever@gmail.com',
    timestamp: new Date().toISOString()
  });
});

// Rates & Packages API
app.get('/api/rates', (req, res) => {
  res.json({
    packages: [
      { id: '1h', duration: '1 Hour', rate: 99, label: 'Play & Socialize Session', inclusions: ['8h Parkland Access', 'Fresh Broth & Play', 'Departure Coat Brush'] },
      { id: '3h', duration: '3 Hours', rate: 199, label: 'Quick Stay', inclusions: ['Fresh Water', 'Play Agility Breaks', 'Loving Attention'] },
      { id: '6h', duration: '6 Hours', rate: 349, label: 'Half Day Retreat', inclusions: ['Healthy Treats', 'Sensory Yard Play', 'Photo Update'] },
      { id: '12h', duration: '12 Hours', rate: 549, label: 'Full Day Care', inclusions: ['Unlimited Treats', 'Multiple Trail Runs', 'Video Clips'] },
      { id: '24h', duration: '24 Hours', rate: 799, label: '24-Hour Day & Night Boarding', inclusions: ['24x7 Live CCTV', 'Overnight Suite', '3x Sanitization'] },
      { id: '3d', duration: '3 Days', rate: 2199, label: 'Extended Mini-Stay', inclusions: ['Daily Video Journal', 'Personalized Nutrition', 'Coat Brushing'] },
      { id: '7d', duration: '7 Days', rate: 4699, label: 'Weekly Full Boarding', inclusions: ['24x7 CCTV', 'Unlimited Treats', 'Emergency Protection'] }
    ]
  });
});

// Reservation / Enquiry API
app.post('/api/enquiry', (req, res) => {
  const {
    guardianName,
    fullName,
    phone,
    petName,
    breed,
    breedWeight,
    stayDuration,
    chamber,
    intakeDate,
    arrivalDate,
    durationNights,
    specialNotes,
    notes,
    regNumber
  } = req.body;

  const gName = fullName || guardianName;
  if (!gName || !phone) {
    return res.status(400).json({ success: false, error: 'Guardian name and phone number are required.' });
  }

  // Check if this dog is already an enrolled customer
  let isReturningCustomer = false;
  let verifiedProfile = null;

  if (regNumber) {
    const cleanReg = regNumber.trim().toUpperCase();
    const found = enrollments.find((e) => {
      const eNo = (e.enrollmentNo || '').toUpperCase();
      const rNo = (e.regNumber || '').toUpperCase();
      const altReg = eNo.replace('FI-ENR-', 'FI-REG-');
      const altEnr = eNo.replace('FI-REG-', 'FI-ENR-');
      return eNo === cleanReg || rNo === cleanReg || altReg === cleanReg || altEnr === cleanReg;
    });

    if (found) {
      isReturningCustomer = true;
      verifiedProfile = {
        enrollmentNo: found.enrollmentNo,
        regNumber: found.regNumber || found.enrollmentNo.replace('FI-ENR-', 'FI-REG-'),
        petName: found.petName,
        breed: found.breed,
        weight: found.weight,
        temperament: found.temperament,
        allergies: found.allergies,
        dietInstructions: found.dietInstructions,
        currentMedication: found.currentMedication,
        vetClinicName: found.vetClinicName,
        vetPhone: found.vetPhone,
        emergencyContactName: found.emergencyContactName,
        emergencyRelationPhone: found.emergencyRelationPhone,
        vaccinationPapersAttached: found.vaccinationPapersAttached
      };
    }
  }

  const reservation = {
    id: `RES-${Date.now()}`,
    guardianName: gName,
    phone,
    petName: petName || (verifiedProfile ? verifiedProfile.petName : 'Beloved Companion'),
    breed: breedWeight || breed || (verifiedProfile ? verifiedProfile.breed : 'Unspecified'),
    stayDuration: chamber || stayDuration || '24h',
    intakeDate: arrivalDate || intakeDate || new Date().toISOString().split('T')[0],
    durationNights: durationNights || 1,
    notes: notes || specialNotes || '',
    regNumber: regNumber || (verifiedProfile ? verifiedProfile.regNumber : null),
    isReturningCustomer,
    verifiedProfile,
    receivedAt: new Date().toISOString()
  };

  reservations.push(reservation);
  console.log(
    `[Furrever Inn Backend] New Slot Reservation Received for: ${gName} | Pet: ${reservation.petName} | Returning Customer: ${
      isReturningCustomer ? 'YES (Reg: ' + reservation.regNumber + ')' : 'NO (First Time)'
    }`
  );

  res.json({
    success: true,
    message: isReturningCustomer
      ? `Welcome back! Slot reservation received for ${reservation.petName}. Verified records on file.`
      : 'Reservation inquiry received. Our private concierge will contact your verified phone number shortly.',
    bookingId: reservation.id,
    isReturningCustomer,
    regNumber: reservation.regNumber,
    verifiedProfile
  });
});

const fs = require('fs');
const path = require('path');

// Persistent dog enrollments storage
const DATA_DIR = path.join(__dirname, 'data');
const ENROLLMENTS_FILE = path.join(DATA_DIR, 'enrollments.json');

if (!fs.existsSync(DATA_DIR)) {
  fs.mkdirSync(DATA_DIR, { recursive: true });
}

let enrollments = [];
if (fs.existsSync(ENROLLMENTS_FILE)) {
  try {
    const raw = fs.readFileSync(ENROLLMENTS_FILE, 'utf-8');
    enrollments = JSON.parse(raw);
  } catch (err) {
    console.warn('[Furrever Inn Backend] Could not read existing enrollments.json, initializing empty array.');
    enrollments = [];
  }
}

const saveEnrollments = () => {
  try {
    fs.writeFileSync(ENROLLMENTS_FILE, JSON.stringify(enrollments, null, 2), 'utf-8');
  } catch (err) {
    console.error('[Furrever Inn Backend] Failed to write enrollments to file:', err);
  }
};

// GET Dog Enrollments Database
app.get('/api/enrollments', (req, res) => {
  res.json({
    success: true,
    count: enrollments.length,
    enrollments
  });
});

// Lookup Dog Enrollment by Unique Registration Number
app.get('/api/enrollment/lookup/:regNumber', (req, res) => {
  const query = (req.params.regNumber || '').trim().toUpperCase();
  if (!query) {
    return res.status(400).json({ success: false, error: 'Registration number is required.' });
  }

  const found = enrollments.find((e) => {
    const eNo = (e.enrollmentNo || '').toUpperCase();
    const rNo = (e.regNumber || '').toUpperCase();
    const altReg = eNo.replace('FI-ENR-', 'FI-REG-');
    const altEnr = eNo.replace('FI-REG-', 'FI-ENR-');
    return eNo === query || rNo === query || altReg === query || altEnr === query;
  });

  if (!found) {
    return res.json({
      success: true,
      found: false,
      message: `No registered dog found for Registration No. "${req.params.regNumber}". Please verify the number or submit first-time enrollment.`
    });
  }

  res.json({
    success: true,
    found: true,
    record: {
      enrollmentNo: found.enrollmentNo,
      regNumber: found.regNumber || found.enrollmentNo.replace('FI-ENR-', 'FI-REG-'),
      parentName: found.parentName,
      contact1: found.contact1,
      contact2: found.contact2,
      email: found.email,
      address: found.address,
      city: found.city,
      pincode: found.pincode,
      petName: found.petName,
      breed: found.breed,
      weight: found.weight,
      ageDob: found.ageDob,
      gender: found.gender,
      neutered: found.neutered,
      colourMarkings: found.colourMarkings,
      temperament: found.temperament,
      allergies: found.allergies,
      dietInstructions: found.dietInstructions,
      currentMedication: found.currentMedication,
      vetClinicName: found.vetClinicName,
      vetPhone: found.vetPhone,
      emergencyContactName: found.emergencyContactName,
      emergencyRelationPhone: found.emergencyRelationPhone,
      vaccinationPapersAttached: found.vaccinationPapersAttached,
      kennelRoomNo: found.kennelRoomNo
    }
  });
});

// Dog Enrollment Record API (First-Time Boarding)
app.post('/api/enrollment', (req, res) => {
  const enrollmentData = req.body;
  const parentName =
    enrollmentData?.parentName ||
    enrollmentData?.parentDetails?.fullName ||
    enrollmentData?.fullName;
  const petName =
    enrollmentData?.petName ||
    enrollmentData?.petDetails?.petName;

  if (!parentName) {
    return res.status(400).json({ success: false, error: 'Pet parent name is required.' });
  }

  const generatedId = `FI-REG-${Date.now().toString().slice(-6)}`;
  const regNumber = enrollmentData.regNumber || enrollmentData.enrollmentNo || generatedId;

  const enrollmentRecord = {
    enrollmentNo: regNumber,
    regNumber: regNumber,
    ...enrollmentData,
    parentName,
    petName: petName || 'Unnamed Pet',
    receivedAt: new Date().toISOString()
  };

  enrollments.unshift(enrollmentRecord);
  saveEnrollments();
  console.log(
    `[Furrever Inn Backend] New Dog Enrollment Registered: ${enrollmentRecord.petName} by ${parentName} (Reg #: ${regNumber})`
  );

  res.json({
    success: true,
    message: 'Dog enrollment dossier registered successfully.',
    enrollmentNo: regNumber,
    regNumber: regNumber,
    record: enrollmentRecord
  });
});

// Serve static frontend build if present
const frontendDist = path.join(__dirname, '../frontend/dist');
app.use(express.static(frontendDist));

app.get('*', (req, res, next) => {
  if (req.path.startsWith('/api')) return next();
  const indexPath = path.join(frontendDist, 'index.html');
  res.sendFile(indexPath, (err) => {
    if (err) {
      res.status(200).send('Furrever Inn API is online. Run frontend development server via "npm run dev".');
    }
  });
});

app.listen(PORT, () => {
  console.log(`[Furrever Inn Backend] API Server running on port ${PORT}`);
});
