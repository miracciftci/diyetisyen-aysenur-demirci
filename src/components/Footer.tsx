import React from 'react';
import './Footer.css';

const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-content">
          <div className="footer-section">
            <h3>Dyt. Ayşenur Demirci</h3>
            <p>
              Sağlıklı yaşam yolculuğunuzda yanınızdayım. 
              Size özel beslenme programları ile hedeflerinize ulaşmanıza yardımcı oluyorum.
            </p>
          </div>
          
          <div className="footer-section">
            <h4>Hızlı Bağlantılar</h4>
            <ul>
              <li><button onClick={() => document.getElementById('home')?.scrollIntoView({ behavior: 'smooth' })}>Ana Sayfa</button></li>
              <li><button onClick={() => document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' })}>Hizmetlerim</button></li>
              <li><button onClick={() => document.getElementById('certificates')?.scrollIntoView({ behavior: 'smooth' })}>Sertifikalarım</button></li>
            </ul>
          </div>

          <div className="footer-section">
            <h4>İletişim</h4>
            <div className="contact-info">
              <p>📍 Online Danışmanlık Hizmeti</p>
              <p>📧 ayse.nur.demirci@outlook.com</p>
              <p>📱 +90 543 122 55 32</p>
            </div>
          </div>

          <div className="footer-section">
            <h4>Sosyal Medya</h4>
            <div className="social-links">
              <a 
                href="https://www.instagram.com/dyt.aysenurdemirci/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="social-button instagram"
              >
                <span className="social-icon">
                  <img src="/images/Instagram_logo.png" alt="Instagram" style={{width: 20, height: 20, objectFit: 'contain'}} />
                </span>
                Instagram
              </a>
              <a 
                href="https://wa.me/905431225532" 
                target="_blank" 
                rel="noopener noreferrer"
                className="social-button whatsapp"
              >
                <span className="social-icon">
                  <img src="/images/WhatsApp_logo.png" alt="WhatsApp" style={{width: 20, height: 20, objectFit: 'contain'}} />
                </span>
                WhatsApp
              </a>
              <a 
                href="https://www.youtube.com/@aise.demirci" 
                target="_blank" 
                rel="noopener noreferrer"
                className="social-button youtube"
              >
                <span className="social-icon">
                  <img src="/images/Youtube_logo.png" alt="YouTube" style={{width: 20, height: 20, objectFit: 'contain'}} />
                </span>
                YouTube
              </a>
            </div>
          </div>
        </div>
        
        <div className="footer-bottom">
          <div className="footer-bottom-content">
            <p>&copy; 2024 Dyt. Ayşenur Demirci. Tüm hakları saklıdır.</p>
            <button onClick={scrollToTop} className="scroll-to-top">
              ↑ Yukarı Çık
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 