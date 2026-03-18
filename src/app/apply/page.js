"use client";

import { useState } from "react";
import { CheckCircle2, ChevronRight, FileText, Upload } from "lucide-react";
import { countryCodes } from "../../utils/countryCodes";

export default function ApplyPage() {
  const [step, setStep] = useState(1);
  const [fileName, setFileName] = useState("");
  const [error, setError] = useState("");
  const [formData, setFormData] = useState({
    name: "", email: "", phone: "", address: "",
    title: "", date: "", venue: "", description: "", declaration: false
  });

  const handleNext = () => {
    setError("");
    if (step === 1) {
      if (!formData.name.trim() || !formData.email.trim() || !formData.phone.trim() || !formData.address.trim()) {
        setError("Please fill all required fields in this step.");
        return;
      }
    } else if (step === 2) {
      if (!formData.title.trim() || !formData.date || !formData.venue.trim() || !formData.description.trim()) {
        setError("Please fill all required fields in this step.");
        return;
      }
    } else if (step === 3) {
      if (!fileName || !formData.declaration) {
        setError("Please upload evidence and accept the solemn declaration.");
        return;
      }
    }
    setStep(step + 1);
  };

  return (
    <div style={styles.page}>

      {/* Header Banner */}
      <div style={styles.header}>
        <div style={styles.container}>
          <h1 style={styles.title} className="form-header-title">Official Application for Record Certification</h1>
          <p style={styles.subtitle}>
            Please fill out this formal declaration accurately. Any discrepancies may lead to immediate rejection of the application.
          </p>
        </div>
      </div>

      <div style={styles.container} className="form-container">
        <div style={styles.layout}>

          {/* Sidebar Steps */}
          <div style={styles.sidebar} className="sidebar-hide-mobile">
            <div style={styles.stepsBox}>
              <h3 style={styles.stepsTitle}>Application Process</h3>

              <div style={step >= 1 ? styles.stepActive : styles.stepInactive}>
                <div style={step > 1 ? styles.stepIconSuccess : (step === 1 ? styles.stepIconCurrent : styles.stepIconPending)}>
                  {step > 1 ? <CheckCircle2 size={16} /> : 1}
                </div>
                <div style={styles.stepText}>
                  <strong>Applicant Details</strong>
                  <span>Personal or Organization Info</span>
                </div>
              </div>

              <div style={styles.stepConnector}></div>

              <div style={step >= 2 ? styles.stepActive : styles.stepInactive}>
                <div style={step > 2 ? styles.stepIconSuccess : (step === 2 ? styles.stepIconCurrent : styles.stepIconPending)}>
                  {step > 2 ? <CheckCircle2 size={16} /> : 2}
                </div>
                <div style={styles.stepText}>
                  <strong>Record Particulars</strong>
                  <span>Category and Event Details</span>
                </div>
              </div>

              <div style={styles.stepConnector}></div>

              <div style={step >= 3 ? styles.stepActive : styles.stepInactive}>
                <div style={step > 3 ? styles.stepIconSuccess : (step === 3 ? styles.stepIconCurrent : styles.stepIconPending)}>
                  {step > 3 ? <CheckCircle2 size={16} /> : 3}
                </div>
                <div style={styles.stepText}>
                  <strong>Evidence Upload</strong>
                  <span>Photographs and Videos</span>
                </div>
              </div>
            </div>

            <div style={styles.infoBox}>
              <FileText size={24} color="var(--color-saffron)" style={{ marginBottom: 10 }} />
              <h4 style={{ fontSize: 14, marginBottom: 5 }}>Need Help?</h4>
              <p style={{ fontSize: 12, color: 'var(--text-muted)' }}>
                Read our Standard Operating Procedures (SOP) before applying. Application fees are non-refundable.
              </p>
            </div>
          </div>

          {/* Main Form Area */}
          <div style={styles.formArea}>
            <div style={styles.formCard}>
              {/* Form Step Headers */}
              <div style={styles.formHeader}>
                <h2 style={styles.formTitle}>
                  {step === 1 && "Part 1: Applicant Details"}
                  {step === 2 && "Part 2: Record Particulars"}
                  {step === 3 && "Part 3: Evidence & Declaration"}
                  {step === 4 && "Application Submitted"}
                </h2>
                {step < 4 && <span style={styles.stepBadge}>Step {step} of 3</span>}
              </div>

              {/* Form Fields - Step 1 */}
              {step === 1 && (
                <div style={styles.formBody}>
                  <div style={styles.row}>
                    <div style={styles.fieldGroup}>
                      <label style={styles.label}>Application Type <span style={styles.req}>*</span></label>
                      <select style={styles.input}>
                        <option>Individual</option>
                        <option>Organization / Institution</option>
                        <option>Government Body</option>
                      </select>
                    </div>
                  </div>

                  <div style={styles.row}>
                    <div style={styles.fieldGroup}>
                      <label style={styles.label}>Full Name / Organization Name <span style={styles.req}>*</span></label>
                      <input type="text" style={styles.input} placeholder="As per official documents" value={formData.name} onChange={e => setFormData({ ...formData, name: e.target.value })} />
                    </div>
                  </div>

                  <div style={styles.row}>
                    <div style={styles.fieldGroup}>
                      <label style={styles.label}>Email Address <span style={styles.req}>*</span></label>
                      <input type="email" style={styles.input} placeholder="official@example.com" value={formData.email} onChange={e => setFormData({ ...formData, email: e.target.value })} />
                    </div>
                    <div style={styles.fieldGroup}>
                      <label style={styles.label}>Mobile Number <span style={styles.req}>*</span></label>
                      <div style={styles.phoneInputContainer}>
                        <select style={styles.phonePrefixSelect} defaultValue="+91">
                          {countryCodes.map((c) => (
                            <option key={c.code} value={c.code}>
                              {c.code}
                            </option>
                          ))}
                        </select>
                        <input type="tel" style={styles.phoneInput} placeholder="1234567890" value={formData.phone} onChange={e => setFormData({ ...formData, phone: e.target.value })} />
                      </div>
                    </div>
                  </div>

                  <div style={styles.row}>
                    <div style={styles.fieldGroup}>
                      <label style={styles.label}>Complete Postal Address <span style={styles.req}>*</span></label>
                      <textarea style={styles.textarea} rows={3} placeholder="Include City, State, and PIN Code" value={formData.address} onChange={e => setFormData({ ...formData, address: e.target.value })}></textarea>
                    </div>
                  </div>
                </div>
              )}

              {/* Form Fields - Step 2 */}
              {step === 2 && (
                <div style={styles.formBody}>
                  <div style={styles.row}>
                    <div style={styles.fieldGroup}>
                      <label style={styles.label}>Record Category <span style={styles.req}>*</span></label>
                      <select style={styles.input}>
                        <option>Select a category...</option>
                        <option>Mass Events</option>
                        <option>Education & Skills</option>
                        <option>Sports & Endurance</option>
                        <option>Art & Culture</option>
                      </select>
                    </div>
                  </div>

                  <div style={styles.row}>
                    <div style={styles.fieldGroup}>
                      <label style={styles.label}>Proposed Record Title <span style={styles.req}>*</span></label>
                      <input type="text" style={styles.input} placeholder="e.g. Largest gathering of..." value={formData.title} onChange={e => setFormData({ ...formData, title: e.target.value })} />
                    </div>
                  </div>

                  <div style={styles.row}>
                    <div style={styles.fieldGroup}>
                      <label style={styles.label}>Date of Attempt <span style={styles.req}>*</span></label>
                      <input type="date" style={styles.input} value={formData.date} onChange={e => setFormData({ ...formData, date: e.target.value })} />
                    </div>
                    <div style={styles.fieldGroup}>
                      <label style={styles.label}>Venue / Location <span style={styles.req}>*</span></label>
                      <input type="text" style={styles.input} placeholder="City, State" value={formData.venue} onChange={e => setFormData({ ...formData, venue: e.target.value })} />
                    </div>
                  </div>

                  <div style={styles.row}>
                    <div style={styles.fieldGroup}>
                      <label style={styles.label}>Detailed Description of the Attempt <span style={styles.req}>*</span></label>
                      <textarea style={styles.textarea} rows={4} placeholder="Describe the rules followed, the measurements, and the exact achievement." value={formData.description} onChange={e => setFormData({ ...formData, description: e.target.value })}></textarea>
                    </div>
                  </div>
                </div>
              )}

              {/* Form Fields - Step 3 */}
              {step === 3 && (
                <div style={styles.formBody}>
                  <div style={styles.uploadBox}>
                    <Upload size={32} color="var(--color-navy)" style={{ marginBottom: 10 }} />
                    <h4 style={{ marginBottom: 5 }}>Upload Evidence Package</h4>
                    <p style={{ fontSize: 12, color: 'var(--text-muted)' }}>Upload a single ZIP file containing videos, high-res photos, and logbooks. (Max: 50MB)</p>

                    <label htmlFor="evidence-upload" style={styles.uploadBtn}>
                      {fileName ? "Change File" : "Select File"}
                    </label>
                    <input
                      id="evidence-upload"
                      type="file"
                      accept=".zip,.rar"
                      style={{ display: 'none' }}
                      onChange={(e) => {
                        if (e.target.files && e.target.files.length > 0) {
                          setFileName(e.target.files[0].name);
                        }
                      }}
                    />

                    {fileName && (
                      <div style={styles.fileSuccessBadge}>
                        ✓ Selected: {fileName}
                      </div>
                    )}
                  </div>

                  <div style={styles.declarationBox}>
                    <h4 style={{ color: 'var(--color-saffron)', marginBottom: 10 }}>Solemn Declaration</h4>
                    <p style={{ fontSize: 13, color: 'var(--text-muted)', lineHeight: 1.5, marginBottom: 15 }}>
                      I hereby declare that all information provided in this application is true and correct to the best of my knowledge. I understand that the Bharat Bhuvan Book of Records holds the final authority to reject or adjudicate this claim.
                    </p>
                    <label style={{ display: 'flex', alignItems: 'center', gap: 10, fontSize: 13, fontWeight: 600 }}>
                      <input type="checkbox" style={{ width: 16, height: 16 }} checked={formData.declaration} onChange={e => setFormData({ ...formData, declaration: e.target.checked })} />
                      I accept the terms and conditions and affirm this declaration.
                    </label>
                  </div>
                </div>
              )}

              {/* Success Step 4 */}
              {step === 4 && (
                <div style={styles.successBody}>
                  <CheckCircle2 size={64} color="var(--color-green)" style={{ marginBottom: 20 }} />
                  <h2 style={{ color: 'var(--color-green)', marginBottom: 10 }}>Application Submitted Successfully</h2>
                  <p style={{ color: 'var(--text-muted)', marginBottom: 20 }}>
                    Your Application Reference ID is <strong>BBR-APP-{Math.floor(Math.random() * 90000) + 10000}</strong>.<br />
                    Please save this ID for future correspondence. You will receive an email confirmation shortly.
                  </p>
                  <button onClick={() => setStep(1)} style={styles.primaryBtn}>Submit Another Application</button>
                </div>
              )}

              {/* Form Actions */}
              {step < 4 && (
                <div style={styles.formFooterWrapper}>
                  {error && <div style={styles.errorBanner}>{error}</div>}
                  <div style={styles.formFooter}>
                    {step > 1 ? (
                      <button onClick={() => { setError(""); setStep(step - 1); }} style={styles.secondaryBtn}>Back</button>
                    ) : <div></div>}

                    {step < 3 ? (
                      <button onClick={handleNext} style={styles.primaryBtn}>
                        Save & Continue <ChevronRight size={18} />
                      </button>
                    ) : (
                      <button onClick={handleNext} style={styles.submitBtn}>
                        Submit Official Application
                      </button>
                    )}
                  </div>
                </div>
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
    paddingBottom: '80px',
    backgroundColor: 'var(--bg-color)',
    minHeight: '100%',
  },
  header: {
    backgroundColor: 'var(--color-navy)',
    color: 'var(--color-white)',
    padding: '40px 0',
    marginBottom: '40px',
    borderBottom: '6px solid var(--color-saffron)',
  },
  container: {
    maxWidth: '1000px',
    margin: '0 auto',
    padding: '0 20px',
  },
  title: {
    fontSize: '28px',
    fontWeight: '700',
    marginBottom: '10px',
  },
  subtitle: {
    fontSize: '15px',
    color: 'rgba(255,255,255,0.8)',
    maxWidth: '600px',
  },
  layout: {
    display: 'flex',
    gap: '30px',
    alignItems: 'flex-start',
    flexWrap: 'wrap',
  },
  sidebar: {
    flex: '1 1 250px',
    maxWidth: '300px',
    display: 'flex',
    flexDirection: 'column',
    gap: '20px',
  },
  stepsBox: {
    backgroundColor: '#fff',
    border: '1px solid var(--border-color)',
    borderRadius: '4px',
    padding: '20px',
    boxShadow: '0 2px 10px rgba(0,0,0,0.02)',
  },
  stepsTitle: {
    fontSize: '16px',
    marginBottom: '20px',
    color: 'var(--color-navy)',
    borderBottom: '1px solid var(--border-color)',
    paddingBottom: '10px',
  },
  stepActive: {
    display: 'flex',
    gap: '15px',
    opacity: 1,
  },
  stepInactive: {
    display: 'flex',
    gap: '15px',
    opacity: 0.5,
  },
  stepIconCurrent: {
    width: '24px', height: '24px', borderRadius: '50%',
    backgroundColor: 'var(--color-navy)', color: '#fff',
    display: 'flex', alignItems: 'center', justifyContent: 'center',
    fontSize: '12px', fontWeight: 'bold',
  },
  stepIconPending: {
    width: '24px', height: '24px', borderRadius: '50%',
    backgroundColor: '#e2e8f0', color: 'var(--text-muted)',
    display: 'flex', alignItems: 'center', justifyContent: 'center',
    fontSize: '12px', fontWeight: 'bold',
  },
  stepIconSuccess: {
    width: '24px', height: '24px', borderRadius: '50%',
    backgroundColor: 'var(--color-green)', color: '#fff',
    display: 'flex', alignItems: 'center', justifyContent: 'center',
  },
  stepText: {
    display: 'flex',
    flexDirection: 'column',
  },
  stepTextTitle: {
    fontSize: '14px',
    fontWeight: '600',
    color: 'var(--text-main)',
  },
  stepTextDesc: {
    fontSize: '12px',
    color: 'var(--text-muted)',
  },
  stepConnector: {
    width: '2px',
    height: '25px',
    backgroundColor: 'var(--border-color)',
    marginLeft: '11px',
    margin: '5px 0',
  },
  infoBox: {
    backgroundColor: 'var(--color-saffron-light)',
    border: '1px solid rgba(255,153,51,0.3)',
    borderRadius: '4px',
    padding: '20px',
  },
  formArea: {
    flex: '3 1 500px',
  },
  formCard: {
    backgroundColor: '#fff',
    border: '1px solid var(--border-color)',
    borderTop: '4px solid var(--color-navy)',
    borderRadius: '4px',
    boxShadow: '0 4px 15px rgba(0,0,0,0.03)',
  },
  formHeader: {
    padding: '20px 30px',
    borderBottom: '1px solid var(--border-color)',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#f8fafc',
  },
  formTitle: {
    fontSize: '20px',
    color: 'var(--color-navy)',
  },
  stepBadge: {
    backgroundColor: 'var(--color-navy-light)',
    color: 'var(--color-navy)',
    padding: '4px 10px',
    borderRadius: '20px',
    fontSize: '12px',
    fontWeight: '700',
  },
  formBody: {
    padding: '30px',
    display: 'flex',
    flexDirection: 'column',
    gap: '20px',
  },
  successBody: {
    padding: '60px 30px',
    textAlign: 'center',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  row: {
    display: 'flex',
    gap: '20px',
    flexWrap: 'wrap',
  },
  fieldGroup: {
    flex: 1,
    display: 'flex',
    flexDirection: 'column',
    minWidth: '200px',
  },
  label: {
    fontSize: '14px',
    fontWeight: '600',
    marginBottom: '8px',
    color: 'var(--text-main)',
  },
  req: {
    color: 'red',
  },
  input: {
    padding: '12px 15px',
    border: '1px solid var(--border-color)',
    borderRadius: '4px',
    fontSize: '14px',
    outline: 'none',
    transition: 'border-color 0.2s',
  },
  textarea: {
    padding: '12px 15px',
    border: '1px solid var(--border-color)',
    borderRadius: '4px',
    fontSize: '14px',
    outline: 'none',
    resize: 'vertical',
    fontFamily: 'inherit',
  },
  uploadBox: {
    border: '2px dashed var(--border-color)',
    padding: '40px',
    textAlign: 'center',
    borderRadius: '4px',
    backgroundColor: '#f8fafc',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  uploadBtn: {
    marginTop: '15px',
    padding: '8px 20px',
    border: '1px solid var(--color-navy)',
    backgroundColor: 'transparent',
    color: 'var(--color-navy)',
    fontWeight: '600',
    borderRadius: '4px',
    cursor: 'pointer',
    display: 'inline-block',
  },
  fileSuccessBadge: {
    marginTop: '15px',
    padding: '8px 15px',
    backgroundColor: '#e5f5e5', // Light green
    color: 'var(--color-green)',
    border: '1px solid var(--color-green)',
    borderRadius: '4px',
    fontSize: '13px',
    fontWeight: '600',
  },
  declarationBox: {
    backgroundColor: 'var(--color-saffron-light)',
    padding: '20px',
    borderRadius: '4px',
    borderLeft: '4px solid var(--color-saffron)',
  },
  errorBanner: {
    backgroundColor: '#fff0f0',
    color: '#d32f2f',
    padding: '12px 20px',
    fontSize: '14px',
    fontWeight: '600',
    borderLeft: '4px solid #d32f2f',
    marginBottom: '10px',
    borderRadius: '4px',
  },
  formFooterWrapper: {
    display: 'flex',
    flexDirection: 'column',
    backgroundColor: '#f8fafc',
    padding: '20px 30px',
    borderTop: '1px solid var(--border-color)',
  },
  formFooter: {
    display: 'flex',
    justifyContent: 'space-between',
  },
  primaryBtn: {
    backgroundColor: 'var(--color-navy)',
    color: '#fff',
    border: 'none',
    padding: '12px 24px',
    borderRadius: '4px',
    fontWeight: '600',
    display: 'flex',
    alignItems: 'center',
    gap: '8px',
    transition: 'background-color 0.2s',
  },
  secondaryBtn: {
    backgroundColor: 'transparent',
    color: 'var(--color-navy)',
    border: '1px solid var(--color-navy)',
    padding: '12px 24px',
    borderRadius: '4px',
    fontWeight: '600',
  },
  submitBtn: {
    backgroundColor: 'var(--color-green)',
    color: '#fff',
    border: 'none',
    borderRadius: '4px',
    fontWeight: '700',
    boxShadow: '0 4px 10px rgba(19,136,8,0.3)',
  },
  phoneInputContainer: {
    display: 'flex',
    alignItems: 'center',
    border: '1px solid var(--border-color)',
    borderRadius: '4px',
    overflow: 'hidden',
    backgroundColor: '#fff',
  },
  phonePrefixSelect: {
    padding: '12px 10px',
    backgroundColor: '#f1f5f9',
    color: 'var(--text-main)',
    border: 'none',
    borderRight: '1px solid var(--border-color)',
    fontSize: '14px',
    fontWeight: '600',
    outline: 'none',
    cursor: 'pointer',
    maxWidth: '120px',
  },
  phoneInput: {
    flex: 1,
    padding: '12px 15px',
    border: 'none',
    fontSize: '14px',
    outline: 'none',
    width: '100%',
  }
};
