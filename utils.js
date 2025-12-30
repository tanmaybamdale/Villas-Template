// Utility Functions for Earthcon Villas Website

// WhatsApp Message Sender
function sendWhatsapp() {
    const name = document.getElementById('contact-name').value;
    const phone = document.getElementById('contact-phone').value;
    const date = document.getElementById('contact-date').value;
    const villa = document.getElementById('contact-villa').value;
    
    // Get optional fields if they exist
    const email = document.getElementById('contact-email')?.value || '';
    const checkout = document.getElementById('contact-checkout')?.value || '';
    const guests = document.getElementById('contact-guests')?.value || '';
    const message = document.getElementById('contact-message')?.value || '';

    // Validation
    if (!name || !phone || !date) {
        alert("Please fill in your Name, Phone Number, and Check-in Date.");
        return;
    }

    if (!villa) {
        alert("Please select a villa.");
        return;
    }

    // Build WhatsApp message
    let whatsappMessage = `Hello Earthcon Villas,%0A%0AI would like to request availability for a stay.%0A%0A*Name:* ${name}%0A*Phone:* ${phone}`;
    
    if (email) {
        whatsappMessage += `%0A*Email:* ${email}`;
    }
    
    if (guests) {
        whatsappMessage += `%0A*Number of Guests:* ${guests}`;
    }
    
    whatsappMessage += `%0A*Check-in Date:* ${date}`;
    
    if (checkout) {
        whatsappMessage += `%0A*Check-out Date:* ${checkout}`;
    }
    
    whatsappMessage += `%0A*Interested Villa:* ${villa}`;
    
    if (message) {
        whatsappMessage += `%0A*Special Requests:* ${message}`;
    }
    
    whatsappMessage += `%0A%0APlease let me know the details.`;

    const whatsappUrl = `https://wa.me/${contactInfo.whatsapp}?text=${whatsappMessage}`;
    window.open(whatsappUrl, '_blank');
}

// Modal Functions
function openModal(villaId) {
    const data = villaData[villaId];
    if (!data) return;

    // Populate Text
    document.getElementById('modal-title').innerText = data.title;
    document.getElementById('modal-price').innerHTML = `${data.price}<span class="text-sm font-normal text-gray-500">/night</span>`;
    document.getElementById('modal-desc').innerText = data.desc;
    document.getElementById('modal-tag').innerText = data.tag;
    document.getElementById('modal-beds').innerText = data.beds;
    document.getElementById('modal-baths').innerText = data.baths;
    document.getElementById('modal-guests').innerText = data.guests;
    
    // Set contact dropdown if on booking page
    const villaDropdown = document.getElementById('contact-villa');
    if (villaDropdown) {
        // Store the villa title for later use
        window.selectedVillaTitle = data.title;
    }

    // Populate Images
    const mainImg = document.getElementById('modal-main-img');
    const thumbContainer = document.getElementById('modal-thumbnails');
    
    mainImg.src = data.images[0];
    thumbContainer.innerHTML = ''; // Clear previous thumbnails

    data.images.forEach((imgSrc, index) => {
        const thumb = document.createElement('img');
        thumb.src = imgSrc;
        thumb.className = `w-20 h-20 md:w-24 md:h-24 object-cover rounded cursor-pointer border-2 hover:border-brand-gold transition-all ${index === 0 ? 'border-brand-gold' : 'border-transparent'}`;
        thumb.onclick = () => {
            mainImg.style.opacity = '0';
            setTimeout(() => {
                mainImg.src = imgSrc;
                mainImg.style.opacity = '1';
            }, 300);
            // Update borders
            Array.from(thumbContainer.children).forEach(child => {
                child.classList.remove('border-brand-gold');
                child.classList.add('border-transparent');
            });
            thumb.classList.remove('border-transparent');
            thumb.classList.add('border-brand-gold');
        };
        thumbContainer.appendChild(thumb);
    });

    const modal = document.getElementById('villa-modal');
    modal.classList.remove('hidden');
    gsap.fromTo(".modal-content", 
        { y: 50, opacity: 0 }, 
        { y: 0, opacity: 1, duration: 0.4, ease: "power2.out" }
    );
    document.body.style.overflow = 'hidden'; // Stop background scroll
}

function closeModal() {
    const modal = document.getElementById('villa-modal');
    gsap.to(".modal-content", { 
        y: 50, 
        opacity: 0, 
        duration: 0.3, 
        ease: "power2.in", 
        onComplete: () => {
            modal.classList.add('hidden');
            document.body.style.overflow = 'auto';
        }
    });
}

// Set selected villa in booking form when coming from modal
function setSelectedVilla() {
    if (window.selectedVillaTitle) {
        // This will be called when user clicks "Book This Villa" in modal
        setTimeout(() => {
            const villaDropdown = document.getElementById('contact-villa');
            if (villaDropdown) {
                const options = villaDropdown.options;
                for (let i = 0; i < options.length; i++) {
                    if (options[i].text.includes(window.selectedVillaTitle)) {
                        villaDropdown.selectedIndex = i;
                        break;
                    }
                }
            }
        }, 100);
    }
}

// Lonavala Slider Scroll Function
function scrollLonavala(direction) {
    const slider = document.getElementById('lonavala-slider');
    if (!slider) return;
    
    const scrollAmount = 300;
    if (direction === 'left') {
        slider.scrollBy({ left: -scrollAmount, behavior: 'smooth' });
    } else {
        slider.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
}

// Mobile Menu Toggle
function toggleMobileMenu() {
    const mobileMenu = document.getElementById('mobile-menu');
    if (mobileMenu) {
        mobileMenu.classList.toggle('hidden');
    }
}

// Scroll to section with offset for fixed navbar
function scrollToSection(sectionId) {
    const section = document.getElementById(sectionId);
    if (section) {
        const offset = 100; // Navbar height
        const sectionPosition = section.offsetTop - offset;
        window.scrollTo({
            top: sectionPosition,
            behavior: 'smooth'
        });
    }
}