import React, { useRef, useState } from 'react';
import './VideoSection.css';

const advantages = [
  {
    icon: '✅',
    title: '3000+ Danışan Deneyimi',
    desc: 'Gerçek sonuçlar elde etmiş binlerce bireysel başarı hikayesi.'
  },
  {
    icon: '🥗',
    title: 'Kişiye Özel Beslenme Planları',
    desc: 'Sana özel hazırlanmış sürdürülebilir programlar.'
  },
  {
    icon: '🎓',
    title: 'Uzman Diyetisyen Desteği',
    desc: 'Bilimsel temelli, güncel yaklaşımlarla rehberlik.'
  },
  {
    icon: '💬',
    title: 'Sürekli Takip ve Motivasyon',
    desc: 'Süreç boyunca yalnız değilsin, her adımda yanındayım.'
  },
  {
    icon: '🔄',
    title: 'Alışkanlık Kazandırma Odaklı',
    desc: 'Geçici diyetler değil, sürdürülebilir yaşam tarzı değişimi hedeflenir.'
  },
  {
    icon: '📊',
    title: 'Düzenli Vücut Analizleri',
    desc: 'Gelişimini rakamlarla takip edip süreci analiz ederiz.'
  },
];

const VideoSection: React.FC = () => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const handleVideoClick = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
        setIsPlaying(false);
      } else {
        videoRef.current.play();
        setIsPlaying(true);
      }
    }
  };

  const handleEnded = () => {
    setIsPlaying(false);
  };

  return (
    <section className="video-section" id="nedenben" style={{ scrollMarginTop: '40px' }}>
      <div className="video-section-grid">
        <div className="video-advantages">
          <h2>Neden Beni Tercih Etmelisiniz?</h2>
          <ul>
            {advantages.map((item, idx) => (
              <li key={idx}>
                <span className="adv-icon">{item.icon}</span>
                <span className="adv-title">{item.title}</span>
                <span className="adv-desc">{item.desc}</span>
              </li>
            ))}
          </ul>
        </div>
        <div className="video-side">
          <div className={`video-wrapper${isPlaying ? ' playing' : ''}`} onClick={handleVideoClick}>
            <video
              ref={videoRef}
              src="/videos/tanıtım.mp4"
              poster="/images/tanitim-poster.png"
              onEnded={handleEnded}
              tabIndex={0}
            />
            {!isPlaying && (
              <button className="play-button" aria-label="Videoyu Oynat">
                <svg width="60" height="60" viewBox="0 0 60 60" fill="none">
                  <circle cx="30" cy="30" r="30" fill="rgba(44,85,48,0.85)"/>
                  <polygon points="25,20 45,30 25,40" fill="#fff"/>
                </svg>
              </button>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default VideoSection; 