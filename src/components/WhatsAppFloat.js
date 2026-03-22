"use client";

export default function WhatsAppFloat() {
  const whatsappNumber = "7603839116";
  const message = "Hello! I am interested in applying for a record at Bharat Bhuvan Book of Records.";

  const handleWhatsAppClick = () => {
    const url = `https://wa.me/91${whatsappNumber}?text=${encodeURIComponent(message)}`;
    window.open(url, '_blank');
  };

  return (
    <div
      className="whatsapp-float-container"
      onClick={handleWhatsAppClick}
      title="Contact us on WhatsApp"
    >
      <div className="whatsapp-pulse"></div>
      <div className="whatsapp-icon-btn">
        <img
          src="/WhatsApp_Icon.png"
          alt="WhatsApp"
          style={{ width: '30px', height: '30px', objectFit: 'contain' }}
        />
      </div>
    </div>
  );
}
