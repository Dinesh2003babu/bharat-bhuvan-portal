"use client";

import { useState } from "react";
import { Send, CheckCircle2, AlertCircle, ShieldCheck, X } from "lucide-react";
import { supabase } from "../../lib/supabaseClient";

const CATEGORIES = ["Performing Arts",
  "Art, Craft & Handicrafts",
  "Cultural Heritage",
  "Education & Skill Development",
  "Literature & Language Arts",
  "Mass Participation & Gatherings",
  "Social & Cultural Initiatives",
  "Innovation in Arts & Culture",
  "Global Participation "
];

const TERMS_AND_CONDITIONS = [
  "This submission is intended only for initial contact and preliminary review of your record proposal.",
  "Submitting this form does not confirm approval, registration, or recognition of any record.",
  "Our team will carefully review your details, and only shortlisted applicants will be contacted via WhatsApp.",
  "The official application form and complete guidelines will be shared only with selected applicants.",
  "Submission of this form does not guarantee selection, and each application is evaluated based on set criteria.",
  "All decisions made by Bharath Bhuvan Book of Records are final and respectfully binding.",
  "We request all applicants to provide true, accurate, and complete information.",
  "Any incorrect or misleading information may lead to rejection or disqualification.",
  "Applicants should be prepared to provide valid supporting evidence such as photos, videos, or documents.",
  "Applications without sufficient proof or clarity may not be considered for further processing.",
  "Our team may reach out for additional details or clarification during the review process.",
  "The organization reserves the right to accept, reject, or discontinue any application if required.",
  "All communication will be carried out through the contact details provided (WhatsApp, phone, or email).",
  "Submitted content may be used responsibly for documentation and promotional purposes.",
  "All record attempts should follow safety guidelines, ethical practices, and applicable regulations.",
  "Participants are responsible for ensuring safety during their record attempt.",
  "Any applicable fees, once paid, are non-refundable under any circumstances.",
  "Bharath Bhuvan Book of Records may update rules or processes when necessary for better administration.",
  "By submitting this form, you confirm that you have read, understood, and agreed to these terms.",
  "This submission is not an official approval of a world record and does not guarantee recognition."
];

export default function ApplyPage() {
  const [formData, setFormData] = useState({
    name: "",
    parentName: "",
    age: "",
    address: "",
    phone: "",
    whatsapp: "",
    instagram: "",
    youtube: "",
    category: "",
    title: "",
    description: "",
    academy: "",
    guru: "",
    agreed: false
  });

  const [isLoading, setIsLoading] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");
  const [showTermsModal, setShowTermsModal] = useState(false);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setErrorMsg("");

    try {
      const { data, error } = await supabase
        .from('applications')
        .insert([{
          name: formData.name,
          parent_name: formData.parentName,
          age: parseInt(formData.age),
          phone: formData.phone,
          whatsapp: formData.whatsapp,
          address: formData.address,
          category: formData.category,
          title: formData.title,
          description: formData.description,
          academy: formData.academy,
          guru: formData.guru,
          instagram: formData.instagram,
          youtube: formData.youtube
        }]);

      if (error) throw error;

      setIsSuccess(true);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } catch (error) {
      console.error('Error submitting application:', error);
      setErrorMsg("Failed to submit application. Please check your connection and try again.");
    } finally {
      setIsLoading(false);
    }
  };

  if (isSuccess) {
    return (
      <div style={styles.page}>
        <div style={styles.header}>
          <div style={styles.container}>
            <h1 style={styles.headerTitle}>Application Received</h1>
            <p style={styles.headerSubtitle}>Your record-breaking journey has officially begun.</p>
          </div>
        </div>
        <div style={styles.container}>
          <div style={{ ...styles.formCard, textAlign: 'center', marginTop: '40px', padding: '60px 40px' }}>
            <CheckCircle2 size={80} color="var(--color-green)" style={{ margin: '0 auto 20px' }} />
            <h2 style={{ fontSize: '28px', color: 'var(--color-navy)', marginBottom: '15px' }}>Thank You, {formData.name}!</h2>
            <p style={{ fontSize: '18px', color: 'var(--text-main)', lineHeight: '1.6', maxWidth: '600px', margin: '0 auto 30px' }}>
              We have successfully received your preliminary application for the <strong>{formData.category}</strong> category.
              Our evaluation team will review your details carefully. If shortlisted, you will be contacted via WhatsApp at <strong>{formData.whatsapp}</strong> with the official guidelines.
            </p>
            <button
              onClick={() => window.location.reload()}
              style={{ ...styles.submitBtn, width: 'auto', padding: '15px 40px', display: 'inline-block', margin: '0 auto' }}
            >
              Return to Website
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div style={styles.page}>
      {/* Header */}
      <div style={styles.header}>
        <div style={styles.container}>
          <h1 style={styles.headerTitle}>Application for Pre-Screening</h1>
          <p style={styles.headerSubtitle}>Initiate your record-breaking odyssey.</p>
        </div>
      </div>

      <div style={styles.container}>
        <div style={styles.layout}>

          {/* Form Side */}
          <div style={styles.formSection}>
            <form onSubmit={handleSubmit} style={styles.formCard}>

              {errorMsg && (
                <div style={{ backgroundColor: '#fff5f5', color: '#c53030', padding: '15px', borderRadius: '8px', marginBottom: '25px', borderLeft: '4px solid #c53030', fontWeight: '600' }}>
                  <AlertCircle size={18} style={{ display: 'inline', verticalAlign: 'middle', marginRight: '8px' }} />
                  {errorMsg}
                </div>
              )}

              {/* Personal Details */}
              <div style={styles.formGroup}>
                <h3 style={styles.groupTitle}>Personal Details</h3>
                <div style={styles.grid}>
                  <div style={styles.field}>
                    <label style={styles.label}>Individual Participant Name <span style={styles.req}>*</span></label>
                    <input name="name" required style={styles.input} value={formData.name} onChange={handleChange} />
                  </div>
                  <div style={styles.field}>
                    <label style={styles.label}>Parent’s Name <span style={styles.req}>*</span></label>
                    <input name="parentName" required style={styles.input} value={formData.parentName} onChange={handleChange} />
                  </div>
                  <div style={styles.field}>
                    <label style={styles.label}>Age <span style={styles.req}>*</span></label>
                    <input name="age" type="number" required style={styles.input} value={formData.age} onChange={handleChange} />
                  </div>
                  <div style={styles.field}>
                    <label style={styles.label}>Phone Number <span style={styles.req}>*</span></label>
                    <input name="phone" type="tel" required style={styles.input} value={formData.phone} onChange={handleChange} />
                  </div>
                  <div style={styles.field}>
                    <label style={styles.label}>WhatsApp Number <span style={styles.req}>*</span></label>
                    <input name="whatsapp" type="tel" required style={styles.input} value={formData.whatsapp} onChange={handleChange} />
                  </div>
                  <div style={styles.fieldFull}>
                    <label style={styles.label}>Address <span style={styles.req}>*</span></label>
                    <textarea name="address" style={styles.textarea} rows={2} value={formData.address} onChange={handleChange} />
                  </div>
                </div>
              </div>

              {/* Academy Details */}
              <div style={styles.formGroup}>
                <h3 style={styles.groupTitle}>Academy Details</h3>
                <div style={styles.grid}>
                  <div style={styles.field}>
                    <label style={styles.label}>Academy Name <span style={styles.req}>*</span></label>
                    <input name="academy" style={styles.input} value={formData.academy} onChange={handleChange} />
                  </div>
                  <div style={styles.field}>
                    <label style={styles.label}>Guru Name <span style={styles.req}>*</span></label>
                    <input name="guru" style={styles.input} value={formData.guru} onChange={handleChange} />
                  </div>
                </div>
              </div>

              {/* Social Details */}
              <div style={styles.formGroup}>
                <h3 style={styles.groupTitle}>Social Details</h3>
                <div style={styles.grid}>
                  <div style={styles.field}>
                    <label style={styles.label}>Instagram ID <span style={styles.req}>*</span></label>
                    <input name="instagram" style={styles.input} placeholder="@username" value={formData.instagram} onChange={handleChange} />
                  </div>
                  <div style={styles.field}>
                    <label style={styles.label}>YouTube Link <span style={styles.req}>*</span></label>
                    <input name="youtube" style={styles.input} placeholder="https://youtube.com/..." value={formData.youtube} onChange={handleChange} />
                  </div>
                </div>
              </div>

              {/* Record Details */}
              <div style={styles.formGroup}>
                <h3 style={styles.groupTitle}>Record Details</h3>
                <div style={styles.grid}>
                  <div style={styles.field}>
                    <label style={styles.label}>Category <span style={styles.req}>*</span></label>
                    <select name="category" required style={styles.input} value={formData.category} onChange={handleChange}>
                      <option value="">Select Category</option>
                      {CATEGORIES.map(c => <option key={c} value={c}>{c}</option>)}
                    </select>
                  </div>
                  <div style={styles.field}>
                    <label style={styles.label}>Title of Record Attempt <span style={styles.req}>*</span></label>
                    <input name="title" required style={styles.input} value={formData.title} onChange={handleChange} />
                  </div>
                  <div style={styles.fieldFull}>
                    <label style={styles.label}>Brief Description <span style={styles.req}>*</span></label>
                    <textarea name="description" required style={styles.textarea} rows={3} placeholder="Explain your record attempt in minimum 3 lines." value={formData.description} onChange={handleChange} />
                  </div>
                </div>
              </div>

              {/* Declaration */}
              <div style={styles.declarationSection}>
                <label style={styles.checkboxLabel}>
                  <input type="checkbox" name="agreed" required checked={formData.agreed} onChange={handleChange} style={styles.checkbox} />
                  <span>I agree to the <span style={styles.termsLink} onClick={(e) => { e.preventDefault(); setShowTermsModal(true); }}>terms and conditions</span> and confirm that all information provided is true. I understand that this is only a preliminary submission and not an approval.</span>
                </label>
                <button type="submit" disabled={!formData.agreed || isLoading} style={isLoading ? styles.submitBtnLoading : styles.submitBtn}>
                  {isLoading ? "PROCCESSING..." : "SUBMIT PRELIMINARY APPLICATION"}
                  {!isLoading && <Send size={18} style={{ marginLeft: 10 }} />}
                </button>
              </div>

            </form>
          </div>

          {/* Sidebar / Legal */}
          <div style={styles.sidebar}>

            <div style={styles.disclaimerBox}>
              <div style={styles.disclaimerHeader}>
                <AlertCircle size={20} color="var(--color-saffron)" />
                <h4 style={styles.disclaimerTitle}>IMPORTANT DISCLAIMER</h4>
              </div>
              <ul style={styles.disclaimerList}>
                <li>This submission is only for initial contact and preliminary review.</li>
                <li>This application is only for individual record attempts.</li>
                <li>All mass attempts hosted by BBBR will have a separate application link which will shared via WhatsApp.</li>
                <li>This is <strong>not</strong> an official application or approval of a world record.</li>
                <li>Submission does not guarantee selection or recognition.</li>
                <li>Valid supporting evidence (photos/videos) will be required during the official process.</li>
                <li>Final decision rests with Bharath Bhuvan Book of Records.</li>
              </ul>
            </div>

            <div style={styles.termsBox}>
              <div style={styles.termsHeader}>
                <ShieldCheck size={20} color="var(--color-navy)" />
                <h4 style={styles.termsTitle}>Terms & Conditions</h4>
              </div>
              <div style={styles.termsScroll}>
                {TERMS_AND_CONDITIONS.map((t, i) => (
                  <p key={i} style={styles.termItem}>
                    <span style={styles.termNum}>{i + 1}.</span> {t}
                  </p>
                ))}
              </div>
            </div>

            <div style={styles.trustBox}>
              <CheckCircle2 size={32} color="var(--color-green)" />
              <p style={styles.trustText}>Your data is securely handled for preliminary screening purposes only.</p>
            </div>

          </div>

        </div>
      </div>

      {/* Terms Modal */}
      {showTermsModal && (
        <div style={styles.modalOverlay} onClick={() => setShowTermsModal(false)}>
          <div style={styles.modalContent} onClick={e => e.stopPropagation()}>
            <div style={styles.modalHeader}>
              <h3 style={styles.modalTitle}>Terms & Conditions</h3>
              <button style={styles.closeBtn} onClick={() => setShowTermsModal(false)}>
                <X size={24} />
              </button>
            </div>
            <div style={styles.modalBody}>
              {TERMS_AND_CONDITIONS.map((t, i) => (
                <p key={i} style={styles.termItem}>
                  <span style={styles.termNum}>{i + 1}.</span> {t}
                </p>
              ))}
            </div>
          </div>
        </div>
      )}

    </div>
  );
}

const styles = {
  page: {
    backgroundColor: '#f4f7f9',
    minHeight: '100vh',
    paddingBottom: '80px',
  },
  header: {
    backgroundColor: 'var(--color-navy)',
    color: '#fff',
    padding: '20px 0 20px',
    // marginBottom: '40px',
    textAlign: 'center',
    borderBottom: '6px solid var(--color-saffron)',
  },
  headerTitle: {
    color: 'var(--color-saffron)',
    fontSize: '36px',
    fontWeight: '800',
    marginBottom: '10px',
    textTransform: 'uppercase',
    letterSpacing: '1px',
  },
  headerSubtitle: {
    fontSize: '18px',
    color: 'rgba(255,255,255,0.8)',
  },
  container: {
    maxWidth: '1200px',
    margin: '0 auto',
    padding: '0 20px',
  },
  layout: {
    display: 'flex',
    gap: '30px',
    flexWrap: 'wrap',
  },
  formSection: {
    flex: '2 1 600px',
    marginTop: '20px',
  },
  sidebar: {
    flex: '1 1 350px',
    display: 'flex',
    flexDirection: 'column',
    gap: '30px',
  },
  formCard: {
    backgroundColor: '#fff',
    padding: '40px',
    borderRadius: '12px',
    boxShadow: '0 10px 30px rgba(0,0,0,0.05)',
  },
  formGroup: {
    marginBottom: '40px',
    paddingBottom: '20px',
    borderBottom: '1px solid #edf2f7',
  },
  groupTitle: {
    fontSize: '20px',
    fontWeight: '800',
    color: 'var(--color-navy)',
    marginBottom: '20px',
    paddingLeft: '15px',
    borderLeft: '4px solid var(--color-saffron)',
  },
  grid: {
    display: 'grid',
    gridTemplateColumns: '1fr 1fr',
    gap: '20px',
  },
  field: {
    display: 'flex',
    flexDirection: 'column',
  },
  fieldFull: {
    gridColumn: '1 / span 2',
    display: 'flex',
    flexDirection: 'column',
  },
  label: {
    fontSize: '14px',
    fontWeight: '700',
    marginBottom: '8px',
    color: '#4a5568',
  },
  req: {
    color: '#e53e3e',
  },
  input: {
    padding: '12px 15px',
    border: '1px solid #e2e8f0',
    borderRadius: '8px',
    fontSize: '15px',
    backgroundColor: '#f8fafc',
    outline: 'none',
    transition: 'border-color 0.2s',
  },
  textarea: {
    padding: '12px 15px',
    border: '1px solid #e2e8f0',
    borderRadius: '8px',
    fontSize: '15px',
    backgroundColor: '#f8fafc',
    outline: 'none',
    resize: 'none',
    fontFamily: 'inherit',
  },
  declarationSection: {
    marginTop: '20px',
    backgroundColor: '#f8fafc',
    padding: '30px',
    borderRadius: '12px',
    border: '1px solid #e2e8f0',
  },
  checkboxLabel: {
    display: 'flex',
    gap: '15px',
    fontSize: '14px',
    color: '#4a5568',
    lineHeight: '1.6',
    cursor: 'pointer',
    marginBottom: '30px',
  },
  checkbox: {
    width: '20px',
    height: '20px',
    marginTop: '2px',
    accentColor: 'var(--color-navy)',
  },
  submitBtn: {
    width: '100%',
    backgroundColor: 'var(--color-green)',
    color: '#fff',
    border: 'none',
    padding: '18px',
    borderRadius: '8px',
    fontSize: '16px',
    fontWeight: '800',
    cursor: 'pointer',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    boxShadow: '0 4px 15px rgba(19,136,8,0.3)',
    transition: 'transform 0.2s, background-color 0.2s',
  },
  submitBtnLoading: {
    width: '100%',
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
  },
  disclaimerBox: {
    backgroundColor: '#fffaf0',
    padding: '30px',
    borderRadius: '12px',
    marginTop: '20px',
    border: '1px solid #feebc8',
    borderLeft: '5px solid var(--color-saffron)',
  },
  disclaimerHeader: {
    display: 'flex',
    alignItems: 'center',
    gap: '10px',
    marginBottom: '15px',
  },
  disclaimerTitle: {
    fontSize: '16px',
    fontWeight: '800',
    color: '#c05621',
  },
  disclaimerList: {
    paddingLeft: '20px',
    fontSize: '14px',
    color: '#744210',
    lineHeight: '1.7',
  },
  termsBox: {
    backgroundColor: '#fff',
    padding: '30px',
    borderRadius: '12px',
    boxShadow: '0 4px 15px rgba(0,0,0,0.05)',
    border: '1px solid #e2e8f0',
  },
  termsHeader: {
    display: 'flex',
    alignItems: 'center',
    gap: '10px',
    marginBottom: '20px',
    borderBottom: '1px solid #edf2f7',
    paddingBottom: '10px',
  },
  termsTitle: {
    fontSize: '16px',
    fontWeight: '800',
    color: 'var(--color-navy)',
  },
  termsScroll: {
    maxHeight: '400px',
    overflowY: 'auto',
    paddingRight: '10px',
  },
  termItem: {
    fontSize: '13px',
    color: '#4a5568',
    lineHeight: '1.6',
    marginBottom: '12px',
    display: 'flex',
    gap: '8px',
  },
  termNum: {
    fontWeight: '700',
    color: 'var(--color-navy)',
    minWidth: '20px',
  },
  trustBox: {
    textAlign: 'center',
    padding: '20px',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    gap: '10px',
  },
  trustText: {
    fontSize: '12px',
    color: '#a0aec0',
    fontStyle: 'italic',
  },
  termsLink: {
    color: 'var(--color-navy)',
    fontWeight: '800',
    textDecoration: 'underline',
    cursor: 'pointer',
  },
  modalOverlay: {
    position: 'fixed',
    top: 0, left: 0, right: 0, bottom: 0,
    backgroundColor: 'rgba(0,0,0,0.6)',
    zIndex: 1000,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    padding: '20px',
  },
  modalContent: {
    backgroundColor: '#fff',
    borderRadius: '12px',
    width: '100%',
    maxWidth: '600px',
    maxHeight: '80vh',
    display: 'flex',
    flexDirection: 'column',
    boxShadow: '0 20px 50px rgba(0,0,0,0.2)',
  },
  modalHeader: {
    padding: '20px 30px',
    borderBottom: '1px solid #edf2f7',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  modalTitle: {
    fontSize: '20px',
    fontWeight: '800',
    color: 'var(--color-navy)',
    margin: 0,
  },
  closeBtn: {
    background: 'none',
    border: 'none',
    cursor: 'pointer',
    color: '#a0aec0',
    padding: '5px',
    display: 'flex',
  },
  modalBody: {
    padding: '30px',
    overflowY: 'auto',
  }
};
