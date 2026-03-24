"use client";

import { useState } from "react";
import { Phone, Mail, MapPin, MessageCircle, Send, CheckCircle2 } from "lucide-react";
import { supabase } from "../../lib/supabaseClient";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    subject: "General Inquiry",
    message: ""
  });

  const [submitted, setSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setErrorMsg("");

    try {
      const { data, error } = await supabase
        .from('contact_enquiries')
        .insert([{
          name: formData.name,
          phone: formData.phone,
          email: formData.email,
          subject: formData.subject,
          message: formData.message
        }]);

      if (error) throw error;
      setSubmitted(true);
    } catch (error) {
      console.error('Error submitting enquiry:', error);
      setErrorMsg("Failed to send message. Please check your connection and try again.");
    } finally {
      setIsLoading(false);
    }
  };

  const handleGeneralWhatsApp = () => {
    const message = encodeURIComponent("Hello, I would like to know more about Bharath Bhuvan Book of Records.");
    window.open(`https://wa.me/917604809797?text=${message}`, "_blank");
  };

  return (
    <div style={styles.page}>
      {/* Hero Header */}
      <div style={styles.header}>
        <div style={styles.container} className="container-fluid">
          <h1 style={styles.headerTitle} className="header-title-mobile">CONTACT US</h1>
          <p style={styles.headerSubtitle}>Get in touch with us for queries, record applications, and support</p>
        </div>
      </div>

      <div style={styles.container} className="container-fluid">
        <div className="layout-res" style={styles.layout}>

          {/* Left: Contact Info */}
          <div style={styles.infoColumn}>
            <div className="form-card-res" style={styles.infoCard}>
              <h2 style={styles.sectionTitle}>Official Channels</h2>

              <div style={{ ...styles.contactItem, borderLeft: '4px solid var(--color-saffron)' }}>
                <div style={styles.iconBoxSaffron}>
                  <Phone size={24} color="#fff" />
                </div>
                <div>
                  <p style={{ ...styles.contactLabel, color: 'var(--color-saffron)' }}>Phone Number</p>
                  <p style={styles.contactValue}>+91 76048 09797</p>
                </div>
              </div>

              <div style={{ ...styles.contactItem, borderLeft: '4px solid var(--color-green)' }}>
                <div style={styles.iconBoxGreen}>
                  <MessageCircle size={24} color="#fff" />
                </div>
                <div onClick={handleGeneralWhatsApp} style={{ cursor: 'pointer', flex: 1, minWidth: 0 }}>
                  <p style={{ ...styles.contactLabel, color: 'var(--color-green)' }}>WhatsApp</p>
                  <p style={styles.contactValue}>+91 76048 09797</p>
                </div>
              </div>

              <div style={{ ...styles.contactItem, borderLeft: '4px solid var(--color-navy)' }}>
                <div style={styles.iconBoxNavy}>
                  <Mail size={24} color="#fff" />
                </div>
                <div style={{ flex: 1, minWidth: 0 }}>
                  <p style={{ ...styles.contactLabel, color: 'var(--color-navy)' }}>Email Address</p>
                  <p style={styles.contactValue}>bbrecords.india@gmail.com</p>
                </div>
              </div>

              {/* <div style={styles.contactItem}>
                <div style={styles.iconBoxSaffron}>
                  <MapPin size={24} color="#fff" />
                </div>
                <div>
                  <p style={styles.contactLabel}>Office Address</p>
                  <p style={styles.contactValue}>Thanjavur, Tamil Nadu, India</p>
                </div>
              </div> */}

              <p style={styles.note}>Our Team will respond to your queries as soon as possible.</p>

              <button
                onClick={handleGeneralWhatsApp}
                style={styles.whatsappBtn}
                suppressHydrationWarning
              >
                <MessageCircle size={20} style={{ marginRight: 10 }} />
                CHAT WITH US ON WHATSAPP
              </button>
            </div>

            <div style={styles.importantNoteBox}>
              <h3 style={styles.noteTitle}>Please Note:</h3>
              <ul style={styles.noteList}>
                <li>For record applications, please use the <strong>&quot;Apply Now&quot;</strong> page.</li>
                <li>Only shortlisted applicants will be contacted for record verification.</li>
                <li>Avoid sending duplicate messages on multiple platforms for faster response.</li>
              </ul>
            </div>
          </div>

          {/* Right: Contact Form */}
          <div style={styles.formColumn}>
            <div className="form-card-res" style={styles.formCard}>
              <h2 style={styles.sectionTitle}>Submit Enquiry</h2>

              {submitted ? (
                <div style={styles.successMessage}>
                  <CheckCircle2 size={48} color="var(--color-green)" style={{ marginBottom: 15 }} />
                  <h3 style={{ color: 'var(--color-green)', marginBottom: 10 }}>Message Sent Successfully!</h3>
                  <p style={{ color: '#4a5568', marginBottom: 25, maxWidth: '400px', margin: '0 auto 25px', lineHeight: '1.6' }}>
                    Thank you, <strong>{formData.name}</strong>. We have securely received your enquiry regarding <strong>{formData.subject}</strong>. Our team will review your message and contact you at <strong>{formData.email}</strong> shortly.
                  </p>

                  <button onClick={() => {
                    setSubmitted(false);
                    setFormData({ name: "", phone: "", email: "", subject: "General Inquiry", message: "" });
                  }} style={styles.resetBtn}>Send Another Message</button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} style={styles.form}>
                  {errorMsg && (
                    <div style={{ backgroundColor: '#fff5f5', color: '#c53030', padding: '15px', borderRadius: '8px', borderLeft: '4px solid #c53030', fontWeight: '600' }}>
                      {errorMsg}
                    </div>
                  )}
                  <div style={styles.field}>
                    <label style={styles.label}>Full Name</label>
                    <input
                      required
                      style={styles.input}
                      value={formData.name}
                      onChange={e => setFormData({ ...formData, name: e.target.value })}
                      suppressHydrationWarning
                    />
                  </div>

                  <div className="form-grid-res" style={styles.row}>
                    <div style={styles.field}>
                      <label style={styles.label}>Phone Number</label>
                      <input
                        required
                        type="tel"
                        style={styles.input}
                        value={formData.phone}
                        onChange={e => setFormData({ ...formData, phone: e.target.value })}
                        suppressHydrationWarning
                      />
                    </div>
                    <div style={styles.field}>
                      <label style={styles.label}>Email ID</label>
                      <input
                        required
                        type="email"
                        style={styles.input}
                        value={formData.email}
                        onChange={e => setFormData({ ...formData, email: e.target.value })}
                        suppressHydrationWarning
                      />
                    </div>
                  </div>

                  <div style={styles.field}>
                    <label style={styles.label}>Subject</label>
                    <select
                      style={styles.select}
                      value={formData.subject}
                      onChange={e => setFormData({ ...formData, subject: e.target.value })}
                      suppressHydrationWarning
                    >
                      <option>General Inquiry</option>
                      <option>Record Application</option>
                      <option>Verification</option>
                      <option>Others</option>
                    </select>
                  </div>

                  <div style={styles.field}>
                    <label style={styles.label}>Message</label>
                    <textarea
                      required
                      rows={5}
                      style={styles.textarea}
                      value={formData.message}
                      onChange={e => setFormData({ ...formData, message: e.target.value })}
                    />
                  </div>

                  <button type="submit" disabled={isLoading} style={isLoading ? styles.submitBtnLoading : styles.submitBtn} suppressHydrationWarning>
                    {isLoading ? "SENDING..." : "SUBMIT ENQUIRY"}
                    {!isLoading && <Send size={18} style={{ marginLeft: 10 }} />}
                  </button>
                </form>
              )}
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}

const styles = {
  page: {
    backgroundColor: '#f8fafc',
    minHeight: '100vh',
    paddingBottom: '80px',
  },
  header: {
    backgroundColor: 'var(--color-navy)',
    color: '#fff',
    padding: '20px 0 20px 0',
    // marginBottom: '60px',
    textAlign: 'center',
    borderBottom: '6px solid var(--color-saffron)',
  },
  headerTitle: {
    color: 'var(--color-saffron)',
    fontSize: '42px',
    fontWeight: '900',
    marginBottom: '10px',
    letterSpacing: '2px',
  },
  headerSubtitle: {
    fontSize: '18px',
    color: 'rgba(255,255,255,0.8)',
    maxWidth: '600px',
    margin: '0 auto',
  },
  container: {
    width: 'var(--container-width)',
    margin: '0 auto',
    padding: '0 1.25rem',
  },
  layout: {
    display: 'flex',
    gap: 'var(--gap-fluid)',
    flexWrap: 'wrap',
    padding: 'var(--section-padding) 0',
  },
  infoColumn: {
    flex: '1 1 350px',
    display: 'flex',
    flexDirection: 'column',
    gap: 'var(--gap-fluid)',
  },
  formColumn: {
    flex: '1.5 1 500px',
  },
  infoCard: {
    backgroundColor: '#fff',
    padding: 'var(--gap-fluid)',
    borderRadius: '12px',
    boxShadow: '0 10px 30px rgba(0,0,0,0.05)',
    borderTop: '4px solid var(--color-saffron)',
  },
  sectionTitle: {
    fontSize: '1.5rem',
    fontWeight: '800',
    color: 'var(--color-navy)',
    marginBottom: '1.875rem',
    borderBottom: '2px solid #edf2f7',
    paddingBottom: '1rem',
  },
  contactItem: {
    display: 'flex',
    alignItems: 'center',
    gap: '1.25rem',
    marginBottom: '1.5rem',
    padding: '1rem',
    borderRadius: '8px',
    backgroundColor: '#f8fafc',
  },
  iconBoxSaffron: {
    width: '3rem',
    height: '3rem',
    borderRadius: '10px',
    backgroundColor: 'var(--color-saffron)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexShrink: 0,
    boxShadow: '0 4px 10px rgba(255,153,51,0.3)',
  },
  iconBoxGreen: {
    width: '3rem',
    height: '3rem',
    borderRadius: '10px',
    backgroundColor: 'var(--color-green)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexShrink: 0,
    boxShadow: '0 4px 10px rgba(19,136,8,0.3)',
  },
  iconBoxNavy: {
    width: '3rem',
    height: '3rem',
    borderRadius: '10px',
    backgroundColor: 'var(--color-navy)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexShrink: 0,
    boxShadow: '0 4px 10px rgba(0,0,128,0.3)',
  },
  contactLabel: {
    fontSize: '0.875rem',
    fontWeight: '700',
    color: '#718096',
    marginBottom: '0.25rem',
    textTransform: 'uppercase',
  },
  contactValue: {
    fontSize: '1.1rem',
    fontWeight: '800',
    color: '#2d3748',
    wordBreak: 'break-word',
  },
  note: {
    fontSize: '0.9rem',
    fontStyle: 'italic',
    color: '#718096',
    marginTop: '1.25rem',
    marginBottom: '1.875rem',
  },
  whatsappBtn: {
    width: '100%',
    backgroundColor: 'var(--color-green)',
    color: '#fff',
    border: 'none',
    padding: '1rem',
    borderRadius: '8px',
    fontSize: '1rem',
    fontWeight: '800',
    cursor: 'pointer',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    transition: 'all 0.3s ease',
  },
  importantNoteBox: {
    backgroundColor: '#fff',
    padding: '2rem',
    borderRadius: '12px',
    borderLeft: '5px solid var(--color-saffron)',
    boxShadow: '0 4px 15px rgba(0,0,0,0.05)',
  },
  noteTitle: {
    fontSize: '1.1rem',
    fontWeight: '800',
    color: '#c05621',
    marginBottom: '1rem',
  },
  noteList: {
    paddingLeft: '1.25rem',
    fontSize: '0.9rem',
    color: '#4a5568',
    lineHeight: '1.8',
  },
  formCard: {
    backgroundColor: '#fff',
    padding: 'var(--gap-fluid)',
    borderRadius: '12px',
    boxShadow: '0 10px 30px rgba(0,0,0,0.05)',
    borderTop: '4px solid var(--color-green)',
  },
  form: {
    display: 'flex',
    flexDirection: 'column',
    gap: '1.25rem',
  },
  field: {
    display: 'flex',
    flexDirection: 'column',
    gap: '0.5rem',
  },
  row: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
    gap: '1.25rem',
  },
  label: {
    fontSize: '0.85rem',
    fontWeight: '700',
    color: '#4a5568',
  },
  input: {
    padding: '0.75rem 1rem',
    border: '1px solid #e2e8f0',
    borderRadius: '8px',
    fontSize: '0.95rem',
    outline: 'none',
    backgroundColor: '#f8fafc',
    transition: 'border-color 0.2s',
  },
  select: {
    padding: '0.75rem 1rem',
    border: '1px solid #e2e8f0',
    borderRadius: '8px',
    fontSize: '0.95rem',
    outline: 'none',
    backgroundColor: '#f8fafc',
  },
  textarea: {
    padding: '0.75rem 1rem',
    border: '1px solid #e2e8f0',
    borderRadius: '8px',
    fontSize: '0.95rem',
    outline: 'none',
    backgroundColor: '#f8fafc',
    resize: 'none',
    fontFamily: 'inherit',
  },
  submitBtn: {
    backgroundColor: 'var(--color-saffron)',
    color: '#fff',
    border: 'none',
    padding: '1rem',
    borderRadius: '8px',
    fontSize: '1rem',
    fontWeight: '800',
    cursor: 'pointer',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: '0.5rem',
    boxShadow: '0 4px 15px rgba(234, 138, 64, 0.3)',
    transition: 'all 0.3s ease',
  },
  submitBtnLoading: {
    backgroundColor: '#718096',
    color: '#fff',
    border: 'none',
    padding: '18px',
    borderRadius: '8px',
    fontSize: '16px',
    fontWeight: '800',
    cursor: 'not-allowed',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: '10px',
  },
  successMessage: {
    textAlign: 'center',
    padding: '40px 0',
  },
  resetBtn: {
    backgroundColor: 'var(--color-navy)',
    color: '#fff',
    border: 'none',
    padding: '15px 30px',
    borderRadius: '8px',
    marginTop: '10px',
    fontWeight: '800',
    cursor: 'pointer',
    fontSize: '15px',
    transition: 'transform 0.2s',
  }
};
