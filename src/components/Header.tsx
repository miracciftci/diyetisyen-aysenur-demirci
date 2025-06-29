import React, { useState } from 'react';
import './Header.css';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const headerHeight = 40; // Header yüksekliği
      const elementPosition = element.offsetTop - headerHeight - 20; // 20px ekstra boşluk
      window.scrollTo({
        top: elementPosition,
        behavior: 'smooth'
      });
    }
    setIsMenuOpen(false);
  };

  const scrollToContactForm = () => {
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      const headerHeight = 40; // Header yüksekliği
      const elementPosition = contactSection.offsetTop - headerHeight - 20; // 20px ekstra boşluk
      window.scrollTo({
        top: elementPosition,
        behavior: 'smooth'
      });
    }
    setIsMenuOpen(false);
  };

  const scrollToNedenBen = () => {
    const section = document.getElementById('nedenben');
    if (section) {
      const headerHeight = 40; // Header yüksekliği - hizmetlerim kısmının görünmemesi için artırıldı
      const elementPosition = section.offsetTop - headerHeight - 20; // 20px ekstra boşluk
      window.scrollTo({
        top: elementPosition,
        behavior: 'smooth'
      });
    }
    setIsMenuOpen(false);
  };

  return (
    <header className="header">
      <div className="header-container">
        <div className="logo">
          <h2>Diyetisyen Ayşenur Demirci</h2>
        </div>
        
        <nav className={`nav-menu ${isMenuOpen ? 'active' : ''}`}>
          <ul>
            <li><button onClick={() => scrollToSection('home')}>Ana Sayfa</button></li>
            <li><button onClick={() => scrollToSection('services')}>Hizmetlerim</button></li>
            <li><button onClick={scrollToNedenBen}>Neden Ben ?</button></li>
            <li><button onClick={scrollToContactForm} className="contact-button">İletişim</button></li>
          </ul>
        </nav>

        <div className="hamburger" onClick={toggleMenu}>
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
    </header>
  );
};

export default Header; 