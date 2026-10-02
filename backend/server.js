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
    location: 'Haryana, India',
    phone: '+91 83074 69390',
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
    notes
  } = req.body;

  const gName = fullName || guardianName;
  if (!gName || !phone) {
    return res.status(400).json({ success: false, error: 'Guardian name and phone number are required.' });
  }

  const reservation = {
    id: `RES-${Date.now()}`,
    guardianName: gName,
    phone,
    petName: petName || 'Beloved Companion',
    breed: breedWeight || breed || 'Unspecified',
    stayDuration: chamber || stayDuration || '24h',
    intakeDate: arrivalDate || intakeDate || new Date().toISOString().split('T')[0],
    durationNights: durationNights || 1,
    notes: notes || specialNotes || '',
    receivedAt: new Date().toISOString()
  };

  reservations.push(reservation);
  console.log('[Furrever Inn Backend] New Enquiry Received:', reservation);

  res.json({
    success: true,
    message: 'Reservation inquiry received. Our private concierge will contact your verified phone number shortly.',
    bookingId: reservation.id
  });
});

app.listen(PORT, () => {
  console.log(`[Furrever Inn Backend] API Server running on port ${PORT}`);
});
