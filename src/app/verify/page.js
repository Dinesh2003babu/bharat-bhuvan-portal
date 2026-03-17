"use client";

import { useState } from "react";
import { Search, ShieldAlert, ShieldCheck } from "lucide-react";

export default function VerifyPage() {
  const [certId, setCertId] = useState("");
  const [verificationResult, setVerificationResult] = useState(null); // 'success', 'error', or null
  const [loading, setLoading] = useState(false);

  const handleVerify = (e) => {
    e.preventDefault();
    if (!certId.trim()) return;

    setLoading(true);
    // Simulate API call
    setTimeout(() => {
      if (certId.toUpperCase().startsWith("BBR-")) {
        setVerificationResult("success");
      } else {
        setVerificationResult("error");
      }
      setLoading(false);
    }, 1500);
  };

  return (
    <div style={styles.page}>
      
      {/* Header Banner */}
      <div style={styles.header}>
        <div style={styles.container}>
          <h1 style={styles.title}>Certificate Verification Portal</h1>
          <p style={styles.subtitle}>
            Authenticity check for all Bharat Bhuvan Book of Records certificates. Enter your Certificate Number to verify.
          </p>
        </div>
      </div>

      <div style={styles.container}>
        <div style={styles.layout}>
          
          <div style={styles.mainBox}>
            <div style={styles.verifyCard}>
              <h2 style={styles.cardTitle}>Verify Document Authenticity</h2>
              <p style={styles.cardDesc}>
                The system checks real-time databanks to ensure the certificate in question was officially issued by the Secretariat and has not been revoked.
              </p>
              
              <form onSubmit={handleVerify} style={styles.form}>
                <div style={styles.inputWrapper}>
                  <label style={styles.label}>Certificate Number / ID</label>
                  <div style={styles.inputGroup}>
                    <input 
                      type="text" 
                      placeholder="e.g., BBR-2025-XXXXX" 
                      style={styles.input}
                      value={certId}
                      onChange={(e) => setCertId(e.target.value)}
                    />
                    <button type="submit" style={styles.submitBtn} disabled={loading}>
                      {loading ? 'Verifying...' : <><Search size={18} /> Verify</>}
                    </button>
                  </div>
                </div>
              </form>

              {/* SUCCESS STATE */}
              {verificationResult === 'success' && (
                <div style={styles.resultSuccess}>
                  <div style={styles.resultHeaderSuccess}>
                    <ShieldCheck size={32} color="var(--color-green)" />
                    <h3 style={{color: 'var(--color-green)'}}>CERTIFICATE VERIFIED</h3>
                  </div>
                  <div style={styles.dataGrid}>
                    <div style={styles.dataItem}>
                      <span style={styles.dataLabel}>Record Status</span>
                      <span style={styles.dataValue}>Active & Authorized</span>
                    </div>
                    <div style={styles.dataItem}>
                      <span style={styles.dataLabel}>Certificate Number</span>
                      <span style={styles.dataValue}>{certId.toUpperCase()}</span>
                    </div>
                    <div style={styles.dataItem}>
                      <span style={styles.dataLabel}>Holder</span>
                      <span style={styles.dataValue}>Registered Entity</span>
                    </div>
                    <div style={styles.dataItem}>
                      <span style={styles.dataLabel}>Date Issued</span>
                      <span style={styles.dataValue}>January 14, 2025</span>
                    </div>
                  </div>
                  <div style={styles.watermark}>AUTHENTIC DOCUMENT</div>
                </div>
              )}

              {/* ERROR STATE */}
              {verificationResult === 'error' && (
                <div style={styles.resultError}>
                  <div style={styles.resultHeaderError}>
                    <ShieldAlert size={32} color="red" />
                    <h3 style={{color: 'red'}}>VERIFICATION FAILED</h3>
                  </div>
                  <p style={{color: '#666', fontSize: '14px', lineHeight: 1.5}}>
                    The certificate number <strong>{certId}</strong> could not be found in our official registry. 
                    Ensure the number is typed correctly including the exact prefixes. If you believe this is an error, contact the Secretariat immediately.
                  </p>
                </div>
              )}
            </div>
          </div>

          <div style={styles.sideBox}>
            <div style={styles.guidelineCard}>
              <h3 style={styles.guidelineTitle}>How to Verify</h3>
              <ul style={styles.list}>
                <li style={styles.listItem}>1. Locate the Certificate ID on the bottom left corner of your physical or digital certificate.</li>
                <li style={styles.listItem}>2. Ensure you include the 'BBR-' prefix.</li>
                <li style={styles.listItem}>3. The system is case-insensitive, but hyphens must be included.</li>
                <li style={styles.listItem}>4. If verified, the system will display the exact record details as they appear on the original issuance.</li>
              </ul>
            </div>
            <div style={styles.warningCard}>
              <h3 style={styles.warningTitle}>Warning against Forgery</h3>
              <p style={{fontSize: 13, lineHeight: 1.5}}>
                Generating, possessing, or distributing counterfeit Bharat Bhuvan Book of Records certificates is a punishable offense under forgery laws. All genuine certificates feature a holographic seal and a distinct entry in this public database.
              </p>
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
    backgroundColor: 'var(--color-green)',
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
    color: 'rgba(255,255,255,0.9)',
    maxWidth: '600px',
  },
  layout: {
    display: 'flex',
    gap: '30px',
    alignItems: 'flex-start',
    flexWrap: 'wrap',
  },
  mainBox: {
    flex: '2 1 500px',
  },
  sideBox: {
    flex: '1 1 300px',
    display: 'flex',
    flexDirection: 'column',
    gap: '20px',
  },
  verifyCard: {
    backgroundColor: '#fff',
    border: '1px solid var(--border-color)',
    borderRadius: '4px',
    padding: '30px',
    boxShadow: '0 4px 15px rgba(0,0,0,0.03)',
  },
  cardTitle: {
    fontSize: '22px',
    color: 'var(--color-navy)',
    marginBottom: '10px',
  },
  cardDesc: {
    fontSize: '14px',
    color: 'var(--text-muted)',
    lineHeight: '1.6',
    marginBottom: '30px',
  },
  form: {
    backgroundColor: '#f8fafc',
    padding: '25px',
    borderRadius: '4px',
    border: '1px solid var(--border-color)',
    marginBottom: '30px',
  },
  inputWrapper: {
    display: 'flex',
    flexDirection: 'column',
    gap: '10px',
  },
  label: {
    fontSize: '15px',
    fontWeight: '600',
    color: 'var(--color-navy)',
  },
  inputGroup: {
    display: 'flex',
    gap: '10px',
  },
  input: {
    flex: 1,
    padding: '12px 15px',
    border: '1px solid var(--border-color)',
    borderRadius: '4px',
    fontSize: '16px',
    outline: 'none',
    fontFamily: 'monospace',
    textTransform: 'uppercase',
  },
  submitBtn: {
    backgroundColor: 'var(--color-navy)',
    color: '#fff',
    border: 'none',
    padding: '0 24px',
    borderRadius: '4px',
    fontWeight: '600',
    display: 'flex',
    alignItems: 'center',
    gap: '8px',
    cursor: 'pointer',
    transition: 'background-color 0.2s',
  },
  resultSuccess: {
    border: '2px solid var(--color-green)',
    borderRadius: '4px',
    padding: '25px',
    backgroundColor: 'var(--color-green-light)',
    position: 'relative',
    overflow: 'hidden',
  },
  resultHeaderSuccess: {
    display: 'flex',
    alignItems: 'center',
    gap: '10px',
    marginBottom: '20px',
    borderBottom: '1px solid rgba(19,136,8,0.2)',
    paddingBottom: '15px',
  },
  dataGrid: {
    display: 'grid',
    gridTemplateColumns: '1fr 1fr',
    gap: '15px',
    position: 'relative',
    zIndex: 2,
  },
  dataItem: {
    display: 'flex',
    flexDirection: 'column',
    gap: '5px',
  },
  dataLabel: {
    fontSize: '12px',
    color: 'var(--text-muted)',
    textTransform: 'uppercase',
    letterSpacing: '0.5px',
  },
  dataValue: {
    fontSize: '15px',
    fontWeight: '600',
    color: 'var(--text-main)',
  },
  watermark: {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%) rotate(-30deg)',
    fontSize: '36px',
    fontWeight: '900',
    color: 'rgba(19,136,8,0.05)',
    whiteSpace: 'nowrap',
    zIndex: 1,
    pointerEvents: 'none',
  },
  resultError: {
    border: '1px solid red',
    borderRadius: '4px',
    padding: '25px',
    backgroundColor: '#fff5f5',
  },
  resultHeaderError: {
    display: 'flex',
    alignItems: 'center',
    gap: '10px',
    marginBottom: '15px',
  },
  guidelineCard: {
    backgroundColor: '#fff',
    border: '1px solid var(--border-color)',
    borderRadius: '4px',
    padding: '20px',
    boxShadow: '0 2px 10px rgba(0,0,0,0.02)',
  },
  guidelineTitle: {
    fontSize: '16px',
    color: 'var(--color-navy)',
    marginBottom: '15px',
    borderBottom: '1px solid var(--border-color)',
    paddingBottom: '10px',
  },
  list: {
    listStyle: 'none',
    display: 'flex',
    flexDirection: 'column',
    gap: '10px',
  },
  listItem: {
    fontSize: '13px',
    lineHeight: '1.6',
    color: 'var(--text-main)',
  },
  warningCard: {
    backgroundColor: 'var(--color-navy)',
    color: '#fff',
    borderRadius: '4px',
    padding: '20px',
  },
  warningTitle: {
    fontSize: '15px',
    color: 'var(--color-saffron)',
    marginBottom: '10px',
  }
};
