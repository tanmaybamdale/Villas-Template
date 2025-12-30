# 🏡 Earthcon Villas - Luxury Villa Website Template

A stunning, modern website template for luxury villa rentals, resorts, or real estate properties. Built with vanilla JavaScript, Tailwind CSS, and GSAP animations.

![Earthcon Villas Preview](images/villa1/v1.jpeg)

## ✨ Features

- 🎨 **Modern & Elegant Design** - Clean, luxury-focused UI with smooth animations
- 📱 **Fully Responsive** - Works seamlessly on desktop, tablet, and mobile
- ⚡ **Fast & Lightweight** - No heavy frameworks, pure vanilla JS
- 🎭 **GSAP Animations** - Smooth scroll-triggered animations and transitions
- 🖼️ **Interactive Gallery** - Modal image viewer with thumbnail navigation
- 📧 **WhatsApp Integration** - Direct booking inquiries via WhatsApp
- 🎯 **SEO Friendly** - Semantic HTML structure
- 🎨 **Customizable** - Easy to modify colors, content, and images

## 🚀 Live Demo

[View Live Demo](#) _(Add your GitHub Pages link here)_

## 📸 Screenshots

### Homepage
![Homepage](screenshots/home.png)

### Villas Gallery
![Villas](screenshots/villas.png)

### Booking Page
![Booking](screenshots/booking.png)

## 🛠️ Technologies Used

- **HTML5** - Semantic markup
- **CSS3** - Custom styles with Tailwind CSS
- **JavaScript (ES6+)** - Vanilla JS for functionality
- **Tailwind CSS** - Utility-first CSS framework
- **GSAP** - Professional-grade animation library
- **Font Awesome** - Icon library
- **Google Fonts** - Playfair Display & Lato

## 📁 Project Structure

```
earthcon-villas/
├── index.html          # Homepage
├── about.html          # About page
├── villas.html         # Villa listings
├── amenities.html      # Amenities page
├── book.html           # Booking page
├── style.css           # Custom CSS styles
├── config.js           # Tailwind configuration
├── data.js             # Villa data and content
├── utils.js            # Utility functions
├── script.js           # Main JavaScript
├── images/             # Image assets
│   ├── villa1/
│   ├── villa2/
│   ├── villa3/
│   └── villa4/
└── README.md
```

## 🚀 Getting Started

### Prerequisites

- A modern web browser
- A text editor (VS Code recommended)
- Basic knowledge of HTML, CSS, and JavaScript

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/yourusername/earthcon-villas.git
   ```

2. **Navigate to project directory**
   ```bash
   cd earthcon-villas
   ```

3. **Open in browser**
   - Simply open `index.html` in your browser
   - Or use a local server (recommended):
   ```bash
   # Using Python
   python -m http.server 8000
   
   # Using Node.js
   npx http-server
   ```

4. **Visit** `http://localhost:8000`

## 🎨 Customization

### Changing Colors

Edit `config.js` to modify the brand colors:

```javascript
tailwind.config = {
    theme: {
        extend: {
            colors: {
                'brand-gold': '#D4AF37',    // Primary accent color
                'brand-dark': '#1a1a1a',    // Dark background
                'brand-cream': '#F9F9F5',   // Light background
            }
        }
    }
}
```

### Adding Villa Data

Edit `data.js` to add or modify villa information:

```javascript
const villaData = {
    'your-villa-id': {
        title: 'Your Villa Name',
        price: '₹20k',
        tag: 'New',
        desc: 'Your villa description...',
        beds: '4 Bedrooms',
        baths: '5 Bathrooms',
        guests: 'Up to 12',
        images: ['path/to/image1.jpg', 'path/to/image2.jpg']
    }
};
```

### Contact Information

Update contact details in `data.js`:

```javascript
const contactInfo = {
    phone: '+919767339333',
    whatsapp: '919767339333',
    email: 'info@earthconvillas.com',
    address: 'Your Address Here'
};
```

## 📱 Features Breakdown

### Homepage
- Hero section with image slider
- Featured villas preview
- Call-to-action sections
- Responsive navigation

### About Page
- Company information
- Values section
- Location/destination slider
- Customer testimonials

### Villas Page
- Villa grid with hover effects
- Modal gallery viewer
- Detailed villa information
- Click-to-view functionality

### Amenities Page
- Comprehensive amenities list
- Icon-based presentation
- Premium services section

### Booking Page
- Contact form with validation
- WhatsApp integration
- Booking information
- FAQ section

## 🎯 WhatsApp Integration

The template includes WhatsApp booking functionality. Messages are pre-formatted with:
- Customer name and contact
- Check-in/check-out dates
- Selected villa
- Number of guests
- Special requests

## 🌐 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Opera (latest)

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

1. Fork the project
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 💡 Usage Ideas

This template is perfect for:
- Luxury villa rentals
- Resort websites
- Real estate property listings
- Vacation home bookings
- Hotel websites
- Airbnb-style properties

## 🐛 Known Issues

- Image paths need to be updated with your own images
- WhatsApp number needs to be configured
- Google Maps integration requires API key (optional)

## 📧 Contact

Your Name - [@yourusername](https://twitter.com/yourusername)

Project Link: [https://github.com/yourusername/earthcon-villas](https://github.com/yourusername/earthcon-villas)

## 🙏 Acknowledgments

- [Tailwind CSS](https://tailwindcss.com/)
- [GSAP](https://greensock.com/gsap/)
- [Font Awesome](https://fontawesome.com/)
- [Google Fonts](https://fonts.google.com/)
- [Unsplash](https://unsplash.com/) for placeholder images

## ⭐ Show your support

Give a ⭐️ if this project helped you!

---

Made with ❤️ by [Your Name](https://github.com/yourusername)S