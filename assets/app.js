/* ==========================================================================
   FURREVER INN PET BOARDING - INTERACTIVE APP ENGINE
   ========================================================================== */

document.addEventListener('DOMContentLoaded', () => {
  // 1. Sticky Navbar Scroll Effect
  const navbar = document.querySelector('.navbar');
  window.addEventListener('scroll', () => {
    if (window.scrollY > 40) {
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }
  });

  // 2. Interactive Stay Calculator
  const stayTypeButtons = document.querySelectorAll('.calc-stay-type');
  const petSizeButtons = document.querySelectorAll('.calc-pet-size');
  const durationSlider = document.getElementById('calcDurationSlider');
  const durationBadge = document.getElementById('calcDurationBadge');
  const durationUnitLabel = document.getElementById('calcDurationUnit');
  const addonCheckboxes = document.querySelectorAll('.calc-addon');
  
  // Breakdown & Output Elements
  const summaryStayType = document.getElementById('summaryStayType');
  const summaryBaseRate = document.getElementById('summaryBaseRate');
  const summaryDuration = document.getElementById('summaryDuration');
  const summaryAddons = document.getElementById('summaryAddons');
  const summaryTotal = document.getElementById('summaryTotal');

  // Rates State
  let currentStayType = 'daily'; // hourly, daily, weekly
  let currentPetSize = 'medium'; // small, medium, large
  let durationValue = 3; // default 3 days

  const rates = {
    hourly: { small: 150, medium: 200, large: 250, unit: 'Hours' },
    daily:  { small: 700, medium: 900, large: 1200, unit: 'Days' },
    weekly: { small: 4200, medium: 5500, large: 7500, unit: 'Weeks' }
  };

  const addonPrices = {
    gourmet: 149, // per day/unit (was 200 - 51)
    spa: 449,     // flat (was 500 - 51)
    video: 99,    // per day (was 150 - 51)
    playtime: 99  // per day (was 150 - 51)
  };

  function calculateTimeBasedTariff(hours) {
    let price = 0;
    let foodIncluded = false;
    let note = "";

    if (hours === 1) {
      price = 48;
      foodIncluded = false;
      note = "1 Hour Play (Happy Treats Included)";
    } else if (hours === 2) {
      price = 96;
      foodIncluded = false;
      note = "2 Hours Play (Happy Treats Included)";
    } else if (hours === 3) {
      price = 148;
      foodIncluded = false;
      note = "3 Hours Package (Happy Treats Included)";
    } else if (hours <= 6) {
      price = 348;
      foodIncluded = true;
      note = "6 Hours Package (🍱 Full Meal Included!)";
    } else if (hours <= 12) {
      price = 548;
      foodIncluded = true;
      note = "12 Hours Package (🍱 Full Meal Included!)";
    } else if (hours <= 24) {
      price = 748;
      foodIncluded = true;
      note = "24 Hours Full Stay (🍱 Full Meal Included!)";
    } else {
      const days = Math.ceil(hours / 24);
      price = days * 748;
      foodIncluded = true;
      note = `${days} Days Full Stay (🍱 All Meals Included!)`;
    }

    return { price, foodIncluded, note };
  }

  function updateCalculator() {
    durationSlider.min = 1;
    durationSlider.max = 24;
    durationUnitLabel.innerText = 'Hours';

    durationValue = parseInt(durationSlider.value, 10);
    durationBadge.innerText = `${durationValue} ${durationValue === 1 ? 'Hour' : 'Hours'}`;

    const tariffInfo = calculateTimeBasedTariff(durationValue);
    const baseTotal = tariffInfo.price;

    // Calculate Addons
    let addonsTotal = 0;
    let selectedAddonNames = [];

    addonCheckboxes.forEach(cb => {
      if (cb.checked) {
        const addonKey = cb.dataset.addon;
        let cost = addonPrices[addonKey] || 150;
        addonsTotal += cost;
        selectedAddonNames.push(cb.dataset.name);
      }
    });

    const finalTotal = baseTotal + addonsTotal;

    // Render Breakdown
    summaryStayType.innerText = tariffInfo.note.toUpperCase();
    summaryBaseRate.innerText = `₹${baseTotal}`;
    summaryDuration.innerText = `${durationValue} Hours`;
    summaryAddons.innerText = selectedAddonNames.length > 0 ? `+ ₹${addonsTotal}` : '₹0';
    summaryTotal.innerText = `₹${finalTotal.toLocaleString('en-IN')}`;
  }

  // Stay Type Toggle Listeners
  stayTypeButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      stayTypeButtons.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      currentStayType = btn.dataset.type;
      
      // Reset default slider values per type
      if (currentStayType === 'hourly') durationSlider.value = 4;
      if (currentStayType === 'daily') durationSlider.value = 3;
      if (currentStayType === 'weekly') durationSlider.value = 1;
      
      updateCalculator();
    });
  });

  // Pet Size Toggle Listeners
  petSizeButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      petSizeButtons.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      currentPetSize = btn.dataset.size;
      updateCalculator();
    });
  });

  durationSlider.addEventListener('input', updateCalculator);
  addonCheckboxes.forEach(cb => cb.addEventListener('change', updateCalculator));

  // Initial Calculation Run
  updateCalculator();

  // 3. Reservation Modal & Drawer Logic
  const modalBackdrop = document.getElementById('reservationModal');
  const openModalBtns = document.querySelectorAll('.js-open-modal');
  const closeModalBtn = document.getElementById('closeModalBtn');
  const reservationForm = document.getElementById('reservationForm');
  const bookingSuccessAlert = document.getElementById('bookingSuccessAlert');

  openModalBtns.forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      // Pre-fill fields if triggered from calculator
      if (btn.dataset.preset === 'calculator') {
        const modalStayType = document.getElementById('modalStayType');
        const modalPetSize = document.getElementById('modalPetSize');
        if (modalStayType) modalStayType.value = currentStayType;
        if (modalPetSize) modalPetSize.value = currentPetSize;
      }
      modalBackdrop.classList.add('active');
      document.body.style.overflow = 'hidden';
    });
  });

  function closeModal() {
    modalBackdrop.classList.remove('active');
    document.body.style.overflow = 'auto';
    bookingSuccessAlert.style.display = 'none';
    reservationForm.style.display = 'block';
  }

  if (closeModalBtn) closeModalBtn.addEventListener('click', closeModal);
  if (modalBackdrop) {
    modalBackdrop.addEventListener('click', (e) => {
      if (e.target === modalBackdrop) closeModal();
    });
  }

  // Handle Modal Booking Form Submit
  if (reservationForm) {
    reservationForm.addEventListener('submit', (e) => {
      e.preventDefault();
      
      const parentName = document.getElementById('parentName').value;
      const petName = document.getElementById('petName').value;
      const petAge = document.getElementById('petAge').value;
      const petBreed = document.getElementById('petBreed').value;
      const phone = document.getElementById('phoneNum').value;
      const email = document.getElementById('parentEmail').value;
      const address = document.getElementById('parentAddress').value;
      const vaccination = document.getElementById('vaccinationStatus').value;
      const checkin = document.getElementById('checkinDate').value;
      const checkout = document.getElementById('checkoutDate').value;
      
      // Show success screen inside modal
      reservationForm.style.display = 'none';
      bookingSuccessAlert.style.display = 'block';
      
      // Generate direct WhatsApp link
      const whatsappBtn = document.getElementById('whatsappConfirmBtn');
      if (whatsappBtn) {
        const textMsg = `Hello Furrever Inn! I want to book a slot for my furry baby ${petName}.\n\n📋 Details:\n- Parent Name: ${parentName}\n- Furry Baby: ${petName} (${petBreed}, Age: ${petAge})\n- Contact: ${phone} (${email})\n- Address: ${address}\n- Vaccinations: ${vaccination}\n- Slot: From ${checkin} To ${checkout}`;
        whatsappBtn.href = `https://wa.me/?text=${encodeURIComponent(textMsg)}`;
      }
    });
  }

  // Handle On-Page Registration Form Submit
  const pageRegistrationForm = document.getElementById('pageRegistrationForm');
  const pageRegSuccessAlert = document.getElementById('pageRegSuccessAlert');

  if (pageRegistrationForm) {
    pageRegistrationForm.addEventListener('submit', (e) => {
      e.preventDefault();

      const parentName = document.getElementById('regParentName').value;
      const petName = document.getElementById('regPetName').value;
      const petAge = document.getElementById('regPetAge').value;
      const petBreed = document.getElementById('regPetBreed').value;
      const phone = document.getElementById('regParentPhone').value;
      const email = document.getElementById('regParentEmail').value;
      const address = document.getElementById('regParentAddress').value;
      const vaccination = document.getElementById('regVaccinationStatus').value;
      const checkin = document.getElementById('regCheckinDate').value;
      const checkout = document.getElementById('regCheckoutDate').value;
      const pickupDrop = document.getElementById('regPickupDrop') ? document.getElementById('regPickupDrop').value : 'Self Drop-off';

      pageRegistrationForm.style.display = 'none';
      pageRegSuccessAlert.style.display = 'block';

      const pageWhatsappBtn = document.getElementById('pageWhatsappConfirmBtn');
      if (pageWhatsappBtn) {
        const textMsg = `Hello Furrever Inn! I have submitted a boarding slot registration for my furry baby ${petName}.\n\n📋 Registration Details:\n- Parent Name: ${parentName}\n- Furry Baby: ${petName} (${petBreed}, Age: ${petAge})\n- Contact: ${phone} | ${email}\n- Address: ${address}\n- Vaccinations: ${vaccination}\n- Shuttle Service: ${pickupDrop}\n- Slot Requested: From ${checkin} To ${checkout}`;
        pageWhatsappBtn.href = `https://wa.me/?text=${encodeURIComponent(textMsg)}`;
      }
    });
  }

  // 4. FAQ Accordion Toggle
  const faqItems = document.querySelectorAll('.faq-item');
  faqItems.forEach(item => {
    const question = item.querySelector('.faq-question');
    question.addEventListener('click', () => {
      const isOpen = item.classList.contains('open');
      faqItems.forEach(f => f.classList.remove('open'));
      if (!isOpen) {
        item.classList.add('open');
      }
    });
  });

  // 5. Gallery Filter Logic
  const filterBtns = document.querySelectorAll('.gallery-filter-btn');
  const galleryItems = document.querySelectorAll('.gallery-item');

  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      filterBtns.forEach(b => b.classList.remove('btn-primary'));
      filterBtns.forEach(b => b.classList.add('btn-outline'));
      btn.classList.remove('btn-outline');
      btn.classList.add('btn-primary');

      const filterCategory = btn.dataset.filter;

      galleryItems.forEach(item => {
        if (filterCategory === 'all' || item.dataset.category === filterCategory) {
          item.style.display = 'block';
        } else {
          item.style.display = 'none';
        }
      });
    });
  });

  // ==========================================================================
  // 6. COSCO TENNIS BALL CUSTOM CURSOR ENGINE
  // ==========================================================================
  if (window.matchMedia('(pointer: fine)').matches) {
    const ballCursor = document.createElement('div');
    ballCursor.className = 'cosco-ball-cursor';
    
    const ballTrail = document.createElement('div');
    ballTrail.className = 'cosco-ball-trail';

    document.body.appendChild(ballCursor);
    document.body.appendChild(ballTrail);

    let mouseX = window.innerWidth / 2;
    let mouseY = window.innerHeight / 2;
    let trailX = mouseX;
    let trailY = mouseY;

    window.addEventListener('mousemove', (e) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
      ballCursor.style.left = `${mouseX}px`;
      ballCursor.style.top = `${mouseY}px`;
    });

    function renderTrail() {
      trailX += (mouseX - trailX) * 0.25;
      trailY += (mouseY - trailY) * 0.25;
      ballTrail.style.left = `${trailX}px`;
      ballTrail.style.top = `${trailY}px`;
      requestAnimationFrame(renderTrail);
    }
    renderTrail();

    // Constant Cosco Ball Cursor (no hover expansion)

    // Click Sparks (Cosco play ball bounce particles)
    const sparks = ['🎾', '🐾', '✨', '🐶', '🦴'];
    window.addEventListener('click', (e) => {
      const spark = document.createElement('div');
      spark.className = 'click-spark';
      spark.innerText = sparks[Math.floor(Math.random() * sparks.length)];
      spark.style.left = `${e.clientX}px`;
      spark.style.top = `${e.clientY}px`;

      const angle = Math.random() * Math.PI * 2;
      const dist = 40 + Math.random() * 50;
      spark.style.setProperty('--dx', `${Math.cos(angle) * dist}px`);
      spark.style.setProperty('--dy', `${Math.sin(angle) * dist}px`);

      document.body.appendChild(spark);
      setTimeout(() => spark.remove(), 600);
    });
  }

  // ==========================================================================
  // 7. VOLDOG-STYLE SCROLL REVEAL & 3D CARD TILT ENGINE
  // ==========================================================================
  const revealCards = document.querySelectorAll('.advantage-card, .product-card, .service-card, .review-card, .gallery-item, .section-title, .hygiene-highlight-banner');
  revealCards.forEach(card => card.classList.add('reveal-on-scroll'));

  const observerOptions = { threshold: 0.12 };
  const scrollObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('revealed');
      }
    });
  }, observerOptions);

  revealCards.forEach(card => scrollObserver.observe(card));

  // 3D Card Tilt on Mouse Move
  const tiltCards = document.querySelectorAll('.advantage-card, .product-card, .service-card');
  tiltCards.forEach(card => {
    card.addEventListener('mousemove', (e) => {
      const rect = card.getBoundingClientRect();
      const x = e.clientX - rect.left - rect.width / 2;
      const y = e.clientY - rect.top - rect.height / 2;
      const tiltX = (y / rect.height) * -10;
      const tiltY = (x / rect.width) * 10;
      card.style.transform = `perspective(1000px) rotateX(${tiltX}deg) rotateY(${tiltY}deg) translateY(-6px)`;
    });

    card.addEventListener('mouseleave', () => {
      card.style.transform = 'perspective(1000px) rotateX(0deg) rotateY(0deg) translateY(0px)';
    });
  });


});
