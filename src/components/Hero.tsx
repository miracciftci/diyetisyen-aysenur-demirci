import React, { useState } from "react";
import "./Hero.css";

const Hero: React.FC = () => {
  const [imageLoaded, setImageLoaded] = useState(false);
  const [imageError, setImageError] = useState(false);

  const handleImageLoad = () => {
    setImageLoaded(true);
  };

  const handleImageError = () => {
    setImageError(true);
    setImageLoaded(true);
  };

  const scrollToServices = () => {
    const servicesSection = document.getElementById('services');
    if (servicesSection) {
      servicesSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="hero">
      <div className="hero-container">
        <div className="hero-content">
          <div className="hero-image">
            <div className="profile-image-container">
              {!imageError && (
                <img 
                  src="../images/profil.jpg" 
                  alt="Ayşenur Demirci - Diyetisyen" 
                  className={`profile-image ${imageLoaded ? 'loaded' : ''}`}
                  onLoad={handleImageLoad}
                  onError={handleImageError}
                />
              )}
              {(!imageLoaded || imageError) && (
                <div className="image-placeholder">
                  <div className="placeholder-icon">👩‍⚕️</div>
                  <div className="image-text">Ayşenur Demirci</div>
                  <div className="image-subtitle">Diyetisyen</div>
                  <div className="placeholder-hint">
                    Profil fotoğrafınızı yüklemek için<br/>
                    <code>public/images/profile-photo.jpg</code><br/>
                    dosyasını ekleyin
                  </div>
                </div>
              )}
            </div>
          </div>
          
          <div className="hero-text">
            <h1>Merhabalar, Ben Ayşenur Demirci</h1>
            <p className="hero-subtitle">
              Sağlıklı yaşam yolculuğunuzda yanınızdayım
            </p>
            <p className="hero-description">
              Bugüne kadar 3.000'den fazla danışanımla birebir çalışarak sadece
              kilo vermeyi değil, sağlıklı ve sürdürülebilir bir yaşam biçimi
              kazanmayı hedefledik. Benim için diyet, kısıtlama değil; denge,
              farkındalık ve yaşam kalitesini artırma yoludur. Bilimsel temelli,
              kişiye özel beslenme planlarıyla; daha enerjik, daha mutlu ve daha
              sağlıklı bir hayata birlikte adım atıyoruz. Eğer siz de bu
              yolculukta kendinize iyi bakmak istiyorsanız, doğru yerdesiniz.
            </p>
            
            <div className="hero-stats">
              <div className="stat">
                <h3>3000+</h3>
                <p>Mutlu Danışan</p>
              </div>
              <div className="stat">
                <h3>5+</h3>
                <p>Yıl Deneyim</p>
              </div>
              <div className="stat">
                <h3>%95</h3>
                <p>Başarı Oranı</p>
              </div>
            </div>
            
            <button className="cta-button" onClick={scrollToServices}>
              Hizmetlerimi Keşfet
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
