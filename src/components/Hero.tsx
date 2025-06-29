import React, { useRef, useState } from "react";
import "./Hero.css";

const Hero: React.FC = () => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const handleVideoClick = () => {
    const video = videoRef.current;
    if (!video) return;
    if (isPlaying) {
      video.pause();
      setIsPlaying(false);
    } else {
      video.play();
      setIsPlaying(true);
    }
  };

  const handleVideoEnded = () => {
    setIsPlaying(false);
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
            <div className="profile-image-container" style={{ position: 'relative' }}>
              <video
                ref={videoRef}
                src="../videos/tanıtım.mp4"
                poster="../images/tanitim-poster.png"
                style={{ width: '100%', height: '100%', borderRadius: '20px', objectFit: 'cover', background: '#000', cursor: 'pointer' }}
                onClick={handleVideoClick}
                onEnded={handleVideoEnded}
              />
              {!isPlaying && (
                <button
                  className="custom-play-button"
                  onClick={handleVideoClick}
                  aria-label="Videoyu Oynat"
                  style={{
                    position: 'absolute',
                    top: '50%',
                    left: '50%',
                    transform: 'translate(-50%, -50%)',
                    background: 'rgba(44,85,48,0.85)',
                    border: 'none',
                    borderRadius: '50%',
                    width: 60,
                    height: 60,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    boxShadow: '0 4px 16px rgba(44,85,48,0.18)',
                    cursor: 'pointer',
                    zIndex: 2
                  }}
                >
                  <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
                    <polygon points="10,7 26,16 10,25" fill="#fff" />
                  </svg>
                </button>
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
