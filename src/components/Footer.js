import Link from "next/link";
import { Instagram, Youtube, Facebook } from "lucide-react";

export default function Footer() {
  return (
    <footer style={styles.footer}>
      <div style={styles.tricolorBorder}></div>
      <div style={styles.container}>
        <div style={styles.grid} className="footer-grid">
          <div style={styles.column} className="footer-column">
            <h3 style={styles.heading} className="footer-heading">Bharat Bhuvan Book of Records</h3>
            <p style={styles.text}>
              An Eminent Institution Dedicated to Recognizing and Preserving the Bharatiya Arts and Cultural Heritage of India.
            </p>
          </div>
          <div style={styles.column} className="footer-column">
            <h3 style={styles.heading} className="footer-heading">Quick Links</h3>
            <ul style={styles.list}>
              {/* <li><Link href="/records" style={styles.link}>Record Database</Link></li> */}
              <li><Link href="/apply" style={styles.link}>Apply for a Record</Link></li>
              <li><Link href="/upcoming" style={styles.link}>Upcoming Events</Link></li>
              {/* <li><Link href="/verify" style={styles.link}>Verify Certificate</Link></li> */}
              {/* <li><Link href="/guidelines" style={styles.link}>Official Guidelines</Link></li> */}
            </ul>
          </div>
          <div style={styles.column} className="footer-column">
            <h3 style={styles.heading} className="footer-heading">Follow Us</h3>
            <div style={styles.socialLinks}>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" style={styles.socialIcon} className="social-hover">
                <Instagram size={20} />
              </a>
              <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" style={styles.socialIcon} className="social-hover">
                <Youtube size={20} />
              </a>
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" style={styles.socialIcon} className="social-hover">
                <Facebook size={20} />
              </a>
            </div>
          </div>
          <div style={styles.column} className="footer-column">
            <h3 style={styles.heading} className="footer-heading">Contact</h3>
            <p style={styles.text}>
              <strong>Email:</strong> s.dineshbabu2003@gmail.com<br />
              <strong>Phone:</strong> +91 9944757082<br />
              <strong>Address:</strong> BBR Bhavan, Tamil Nadu, India
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
    padding: '20px 20px',
  },
  grid: {
    display: 'grid',
    gridTemplateColumns: '1.5fr 1fr 1fr 1.2fr',
    gap: '30px',
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
  socialLinks: {
    display: 'flex',
    gap: '15px',
    marginTop: '5px',
  },
  socialIcon: {
    color: 'rgba(255,255,255,0.8)',
    backgroundColor: 'rgba(255,255,255,0.05)',
    width: '40px',
    height: '40px',
    borderRadius: '50%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    transition: 'all 0.3s ease',
    border: '1px solid rgba(255,255,255,0.1)',
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
