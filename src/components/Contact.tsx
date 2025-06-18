import React, { useState } from 'react';
import emailjs from '@emailjs/browser';
import './Contact.css';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showSuccessModal, setShowSuccessModal] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // EmailJS template parametreleri
      const templateParams = {
        to_email: 'ayse.nur.demirci@outlook.com',
        from_name: formData.name,
        from_email: formData.email,
        subject: formData.subject,
        message: formData.message,
        reply_to: formData.email
      };

      // EmailJS ile email gönder
      const result = await emailjs.send(
        'service_9y266cz', // EmailJS Service ID
        'template_l6exn6m', // EmailJS Template ID
        templateParams,
        '0k1NFRot7VzbPXnFU' // EmailJS Public Key
      );

      if (result.status === 200) {
        setShowSuccessModal(true);
        setFormData({ name: '', email: '', subject: '', message: '' });
      }
    } catch (error) {
      console.error('Email gönderimi başarısız:', error);
      alert('Mesaj gönderilirken bir hata oluştu. Lütfen tekrar deneyin.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const closeSuccessModal = () => {
    setShowSuccessModal(false);
  };

  return (
    <section id="contact" className="contact">
      <div className="contact-container">
        <br/>
        <div className="contact-content">
          <div className="contact-info">
            <h2>İletişim ve Sosyal Medya</h2>
            <p>Sağlıklı yaşam yolculuğunuzda size yardımcı olmak için buradayım</p>
            
            <div className="contact-details">
              <div className="contact-item">
                <div className="contact-icon">
                  <img src="/images/Instagram_logo.png" alt="Instagram" style={{width: 24, height: 24, objectFit: 'contain'}} />
                </div>
                <div>
                  <h4>Instagram</h4>
                  <a 
                    href="https://www.instagram.com/dyt.aysenurdemirci/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="contact-link instagram-link"
                  >
                    @dyt.aysenurdemirci
                  </a>
                </div>
              </div>
              <div className="contact-item">
                <div className="contact-icon">
                  <img src="/images/Youtube_logo.png" alt="YouTube" style={{width: 24, height: 24, objectFit: 'contain'}} />
                </div>
                <div>
                  <h4>YouTube</h4>
                  <a 
                    href="https://www.youtube.com/@aise.demirci" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="contact-link youtube-link"
                  >
                    @aise.demirci
                  </a>
                </div>
              </div>
              <div className="contact-item">
                <div className="contact-icon">📧</div>
                <div>
                  <h4>E-Posta</h4>
                  <a href="mailto:ayse.nur.demirci@outlook.com" className="contact-link">
                    ayse.nur.demirci@outlook.com
                  </a>
                </div>
              </div>
              <div className="contact-item">
                <div className="contact-icon">📞</div>
                <div>
                  <h4>Telefon</h4>
                  <a href="tel:+905551234567" className="contact-link">
                    +90 543 122 55 32
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="contact-form-section">
            <h3>Randevu Formu</h3>
            <form className="contact-form" onSubmit={handleSubmit}>
              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="name">İsminiz Soyisim *</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    placeholder="Adınız ve soyadınız"
                    disabled={isSubmitting}
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="email">E-Posta Adresiniz *</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    placeholder="ornek@email.com"
                    disabled={isSubmitting}
                  />
                </div>
              </div>

              <div className="form-group">
                <label htmlFor="subject">Konu *</label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleInputChange}
                  required
                  placeholder="Mesajınızın konusu"
                  disabled={isSubmitting}
                />
              </div>

              <div className="form-group">
                <label htmlFor="message">Mesajınız *</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  required
                  rows={4}
                  placeholder="Mesajınızı buraya yazın..."
                  disabled={isSubmitting}
                />
              </div>

              <button 
                type="submit" 
                className={`submit-button ${isSubmitting ? 'submitting' : ''}`}
                disabled={isSubmitting}
              >
                {isSubmitting ? 'Gönderiliyor...' : 'Mesaj Gönder'}
              </button>
            </form>
          </div>
        </div>
      </div>

      {/* Başarı Modal */}
      {showSuccessModal && (
        <div className="success-modal-overlay" onClick={closeSuccessModal}>
          <div className="success-modal" onClick={(e) => e.stopPropagation()}>
            <div className="success-modal-content">
              <div className="success-icon">✅</div>
              <h3>Mesajınız Başarıyla Gönderildi!</h3>
              <p>En kısa sürede size dönüş yapacağım.</p>
              <button className="success-modal-button" onClick={closeSuccessModal}>
                Tamam
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Contact;
