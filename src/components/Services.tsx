import React, { useState } from 'react';
import './Services.css';

interface Service {
  id: string;
  title: string;
  description: string;
  icon: string;
  details: string[];
}

const Services: React.FC = () => {
  const [selectedService, setSelectedService] = useState<string | null>(null);

  const services: Service[] = [
    {
      id: 'kilo-verme',
      title: 'Kilo Verme için Beslenme',
      description: 'Sağlıklı ve sürdürülebilir kilo kaybı için kişiye özel beslenme programları.',
      icon: '⚖️',
      details: [
        'Metabolizma hızlandırıcı beslenme',
        'Aç kalmadan yağ yakımı',
        'Uzun vadeli kilo koruma',
        'Psikolojik destekli beslenme',
      ]
    },
    {
      id: 'kilo-alma',
      title: 'Kilo Alma için Beslenme',
      description: 'Sağlıklı şekilde kilo almak isteyenlere özel beslenme planları.',
      icon: '🍽️',
      details: [
        'Kas kütlesi artırıcı beslenme',
        'Yüksek kalorili sağlıklı menüler',
        'İştah açıcı öneriler',
        'Dengeli makro ve mikro besinler',
      ]
    },
    {
      id: 'diyabet',
      title: 'Diyabette Beslenme',
      description: 'Diyabet hastalarına özel kan şekeri dengesi sağlayan beslenme.',
      icon: '🩸',
      details: [
        'Glisemik indeks kontrolü',
        'Karbonhidrat sayımı',
        'İnsülin direnci yönetimi',
        'Diyabetik menü planlama',
      ]
    },
    {
      id: 'tiroid',
      title: 'Tiroid Hastalarında Beslenme',
      description: 'Tiroid fonksiyonlarını destekleyen ve dengeleyen beslenme.',
      icon: '🦋',
      details: [
        'İyot, selenyum ve çinko desteği',
        'Hashimoto ve hipotiroidide beslenme',
        'Tiroid ilaçları ile uyumlu menüler',
        'Metabolizma dostu tarifler',
      ]
    },
    {
      id: 'anne-bebek',
      title: 'Anne-Bebek Beslenmesi',
      description: 'Anne ve bebek sağlığı için özel beslenme danışmanlığı.',
      icon: '👩‍🍼',
      details: [
        'Emziren anneler için beslenme',
        'Bebek ek gıdaya geçiş',
        'Anne sütü artırıcı öneriler',
        'Bebeklerde alerji ve intolerans yönetimi',
      ]
    },
    {
      id: 'fonksiyonel',
      title: 'Fonksiyonel Beslenme',
      description: 'Vücudun doğal işleyişini destekleyen fonksiyonel beslenme.',
      icon: '🌱',
      details: [
        'Bağırsak sağlığı odaklı beslenme',
        'Enflamasyon azaltıcı menüler',
        'Bireysel intolerans ve hassasiyetler',
        'Hormon dengesi için öneriler',
      ]
    },
    {
      id: 'sporcu',
      title: 'Sporcu Beslenmesi',
      description: 'Sporculara özel performans artırıcı ve toparlanmayı hızlandırıcı beslenme.',
      icon: '🏋️‍♂️',
      details: [
        'Antrenman öncesi/sonrası beslenme',
        'Protein ve karbonhidrat dengesi',
        'Kas gelişimi için öneriler',
        'Yarışma dönemi beslenme',
      ]
    },
    {
      id: 'gebelik',
      title: 'Gebelik ve Gebelik Öncesi Beslenme',
      description: 'Gebelik planlayan ve gebelikte sağlıklı beslenmek isteyenlere özel danışmanlık.',
      icon: '🤰',
      details: [
        'Gebelikte kilo takibi',
        'Bebek gelişimi için gerekli besinler',
        'Gebelik öncesi hazırlık',
        'Doğum sonrası beslenme',
      ]
    },
    {
      id: 'kilo-kontrol',
      title: 'Kilo Kontrolü',
      description: 'Kilo alıp vermeden, sağlıklı kiloyu korumak için sürdürülebilir beslenme.',
      icon: '🔄',
      details: [
        'Dengeli beslenme alışkanlıkları',
        'Uzun vadeli motivasyon',
        'Kilo dalgalanmasını önleme',
        'Yaşam boyu sağlıklı rutinler',
      ]
    },
  ];

  const handleServiceClick = (serviceId: string) => {
    setSelectedService(selectedService === serviceId ? null : serviceId);
  };

  return (
    <section id="services" className="services">
      <div className="services-container">
        <div className="services-header">
          <h2>Hizmetlerim</h2>
          <p>Size özel hazırlanan beslenme programları ile sağlıklı yaşam yolculuğunuzda yanınızdayım</p>
        </div>

        <div className="services-grid">
          {services.map((service) => (
            <div 
              key={service.id}
              className={`service-card ${selectedService === service.id ? 'active' : ''}`}
              onClick={() => handleServiceClick(service.id)}
            >
              <div className="service-icon">{service.icon}</div>
              <h3>{service.title}</h3>
              <p className="service-description">{service.description}</p>
              
              {selectedService === service.id && (
                <div className="service-details">
                  <ul>
                    {service.details.map((detail, index) => (
                      <li key={index}>{detail}</li>
                    ))}
                  </ul>
                </div>
              )}
              
              <div className="service-arrow">
                {selectedService === service.id ? '▲' : '▼'}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services; 