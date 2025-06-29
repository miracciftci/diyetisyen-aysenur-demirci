import React from 'react';
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
  {
    icon: '📱',
    title: 'Kolay ve Hızlı İletişim',
    desc: 'WhatsApp, telefon veya e-posta ile hızlı geri dönüş garantisi.'
  },
  {
    icon: '🧠',
    title: ' Psikolojik Destek Yaklaşımı',
    desc: 'Yeme alışkanlıklarını anlamaya yönelik danışmanlık.'
  },
  {
    icon: '📅',
    title: 'Kısa Vadeli Değil, Kalıcı Sonuçlar',
    desc: 'Hızlı çözümler değil, uzun vadeli başarı odaklıyım.'
  },
];

const VideoSection: React.FC = () => {
  return (
    <section className="video-section" id="nedenben" style={{ scrollMarginTop: '40px' }}>
      <h2 className="nedenben-title">Neden Beni Tercih Etmelisiniz?</h2>
      <div className="nedenben-cards">
        {advantages.map((item, idx) => (
          <div key={idx} className="nedenben-card">
            <span className="nedenben-card-icon">{item.icon}</span>
            <div className="nedenben-card-content">
              <div className="nedenben-card-title">{item.title}</div>
              <div className="nedenben-card-desc">{item.desc}</div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default VideoSection; 