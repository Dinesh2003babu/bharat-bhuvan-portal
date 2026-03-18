import Link from "next/link";

export default function Footer() {
  return (
    <footer style={styles.footer}>
      <div style={styles.tricolorBorder}></div>
      <div style={styles.container}>
        <div style={styles.grid}>
          <div style={styles.column}>
            <h3 style={styles.heading}>Bharat Bhuvan Book of Records</h3>
            <p style={styles.text}>
              The premier authority on validating and chronicling extraordinary achievements across the Indian subcontinent.
            </p>
          </div>
          <div style={styles.column}>
            <h3 style={styles.heading}>Quick Links</h3>
            <ul style={styles.list}>
              <li><Link href="/records" style={styles.link}>Record Database</Link></li>
              <li><Link href="/apply" style={styles.link}>Apply for a Record</Link></li>
              <li><Link href="/verify" style={styles.link}>Verify Certificate</Link></li>
              <li><Link href="/guidelines" style={styles.link}>Official Guidelines</Link></li>
            </ul>
          </div>
          <div style={styles.column}>
            <h3 style={styles.heading}>Contact Secretariat</h3>
            <p style={styles.text}>
              <strong>Email:</strong> official@bharatbhuvanrecords.in<br />
              <strong>Phone:</strong> +91 (11) 2345-6789<br />
              <strong>Address:</strong> BBR Bhavan, New Delhi, India 110001
            </p>
          </div>
        </div>
      </div>
      <div style={styles.bottomBar}>
        <div style={styles.container}>
          <p style={styles.copyright}>
            © {new Date().getFullYear()} Bharat Bhuvan Book of Records. All Rights Reserved.
          </p>
          <div style={styles.policyLinks}>
            <Link href="/privacy" style={styles.smallLink}>Privacy Policy</Link>
            <span style={styles.dot}>•</span>
            <Link href="/terms" style={styles.smallLink}>Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

const styles = {
  footer: {
    backgroundColor: 'var(--color-navy)',
    color: 'var(--color-white)',
    marginTop: '60px',
  },
  tricolorBorder: {
    height: '6px',
    background: 'var(--gradient-tricolor)',
    width: '100%',
  },
  container: {
    maxWidth: '1200px',
    margin: '0 auto',
    padding: '40px 20px',
  },
  grid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
    gap: '40px',
  },
  column: {
    display: 'flex',
    flexDirection: 'column',
  },
  heading: {
    color: 'var(--color-saffron)',
    fontSize: '18px',
    marginBottom: '20px',
    paddingBottom: '10px',
    borderBottom: '1px solid rgba(255,255,255,0.1)',
  },
  text: {
    color: 'rgba(255,255,255,0.8)',
    lineHeight: '1.6',
    fontSize: '14px',
  },
  list: {
    listStyle: 'none',
    padding: 0,
    margin: 0,
    display: 'flex',
    flexDirection: 'column',
    gap: '10px',
  },
  link: {
    color: 'rgba(255,255,255,0.8)',
    textDecoration: 'none',
    fontSize: '14px',
    transition: 'color 0.2s ease',
  },
  bottomBar: {
    backgroundColor: 'rgba(0,0,0,0.2)',
    padding: '15px 0',
  },
  copyright: {
    fontSize: '12px',
    color: 'rgba(255,255,255,0.6)',
    textAlign: 'center',
    marginBottom: '10px',
  },
  policyLinks: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    gap: '10px',
  },
  smallLink: {
    fontSize: '12px',
    color: 'rgba(255,255,255,0.6)',
  },
  dot: {
    color: 'rgba(255,255,255,0.3)',
    fontSize: '10px',
  }
};
