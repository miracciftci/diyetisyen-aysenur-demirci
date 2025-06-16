import React, { useState } from 'react';
import './Certificates.css';

interface Certificate {
  id: string;
  title: string;
  image: string;
}

const Certificates: React.FC = () => {
  const [selectedCertificate, setSelectedCertificate] = useState<string | null>(null);

  const certificates: Certificate[] = [
    {
      id: '1',
      title: 'Temel-Orta-İleri Düzeyde Karbonhidrat sayımı ve Diyabet',
      image: '/images/certifica/KATILIM BELGESİ.png'
    },
    {
      id: '2',
      title: 'Mikrobiyota ve Beslenme',
      image: '/images/certifica/Mikrobiyota ve beslenme.png'
    },
    {
      id: '3',
      title: 'Fonksiyonel Tıp Diyetisyenliği',
      image: '/images/certifica/Fonksiyonel tığ Diyetisyenliği.png'
    },
    {
      id: '4',
      title: 'Gastrointestinal Sistem Kanserlerinde Beslenme',
      image: '/images/certifica/Gastrointestinal.png'
    },
    {
      id: '5',
      title: 'Sporcu beslenmesinde Supplement ve Gıda Takviyelerinin Rolü',
      image: '/images/certifica/Suplement ve gıda takviyeleri.png'
    },
    {
      id: '6',
      title: 'Egzersiz Öncesi, Sırası ve Sonrası Beslenme',
      image: '/images/certifica/Egzersiz öncesi ve sonrası beslenme.png'
    },
    {
      id: '7',
      title: 'Polikistik Over Sendromu ve Beslenme',
      image: '/images/certifica/Polikistik Over Sendromu ve Beslenme.png'
    },
    {
      id: '8',
      title: 'Sporcu Beslenmesinde Uygulanan Diyetlere Bilimsel Yaklaşım',
      image: '/images/certifica/Sporcu Beslenmesi Bilimsel Yaklasım.png'
    },
    {
      id: '9',
      title: 'Performans için Beslenmede Gıda Takviyeleri',
      image: '/images/certifica/Performans için Beslenmede Gıda Takviyeleri.png'
    },
    {
      id: '10',
      title: 'Sirkadiyen Ritim ve Beslenme',
      image: '/images/certifica/Sirkadiyen Ritim ve Beslenme.png'
    },
    {
      id: '11',
      title: 'Olimpiyatlara ve Yarışmalara Hazırlık Süreci',
      image: '/images/certifica/Olimpiyatlara ve Yarışmalara Hazırlık Süreci.png'
    },
    {
      id: '12',
      title: 'Beslenme ve Biyotikler',
      image: '/images/certifica/Beslenme ve Biyotikler.png'
    },
    {
      id: '13',
      title: 'Gastrointestinal Sistem Hastalıklarında Beslenme',
      image: '/images/certifica/sistem hastalıkları.png'
    }
  ];

  const handleCertificateClick = (certificateId: string) => {
    setSelectedCertificate(selectedCertificate === certificateId ? null : certificateId);
  };

  const closeModal = () => {
    setSelectedCertificate(null);
  };

  return (
    <section id="certificates" className="certificates">
      <div className="certificates-container">
        <div className="certificates-header">
          <h2>Sertifikalarım</h2>
          <p>Sürekli gelişim ve güncel bilgilerle donanımlı hizmet sunuyorum</p>
        </div>

        <div className="certificates-grid">
          {certificates.map((certificate) => (
            <div 
              key={certificate.id}
              className="certificate-card"
              onClick={() => handleCertificateClick(certificate.id)}
            >
              <div className="certificate-title-top">
                {certificate.title}
              </div>
              <div className="certificate-image-container">
                <img 
                  src={certificate.image} 
                  alt={certificate.title}
                  className="certificate-image"
                  loading="lazy"
                />
                <div className="certificate-overlay">
                  <div className="view-button">👁️ Görüntüle</div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {selectedCertificate && (
          <div className="certificate-modal" onClick={closeModal}>
            <div className="modal-content" onClick={(e) => e.stopPropagation()}>
              <button className="modal-close" onClick={closeModal}>×</button>
              <img 
                src={certificates.find(c => c.id === selectedCertificate)?.image} 
                alt={certificates.find(c => c.id === selectedCertificate)?.title}
                className="modal-image"
              />
              <h3 className="modal-title">
                {certificates.find(c => c.id === selectedCertificate)?.title}
              </h3>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default Certificates; 