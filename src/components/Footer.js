import Link from "next/link";
import { Instagram, Youtube, Facebook } from "lucide-react";

export default function Footer() {
  return (
    <footer style={styles.footer}>
      <div style={styles.tricolorBorder}></div>
      <div style={styles.container} className="container-fluid">
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
              <strong>Email:</strong> bbrecords.india@gmail.com<br />
              <strong>Phone:</strong> +91 76038 39116<br />
            </p>
          </div>
        </div>
      </div>
      <div style={styles.bottomBar}>
        <div style={styles.bottomContainer}>
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
    width: 'var(--container-width)',
    margin: '0 auto',
    padding: 'clamp(1rem, 5vw, 1rem) 0',
  },
  bottomContainer: {
    width: 'var(--container-width)',
    margin: '0 auto',
    // padding: 'clamp(1rem, 5vw, 1rem) 0',
  },
  grid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
    gap: 'var(--gap-fluid)',
  },
  column: {
    // justifyContent: 'center',
    alignItems: 'center',
    display: 'flex',
    flexDirection: 'column',
  },
  heading: {
    textAlign: 'center',
    color: 'var(--color-saffron)',
    fontSize: '1.125rem',
    marginBottom: '1.25rem',
    paddingBottom: '0.625rem',
    borderBottom: '1px solid rgba(255,255,255,0.1)',
  },
  text: {
    textAlign: 'justify',
    color: 'rgba(255,255,255,0.8)',
    lineHeight: '1.6',
    fontSize: '0.9rem',
  },
  list: {
    listStyle: 'none',
    padding: 0,
    margin: 0,
    display: 'flex',
    flexDirection: 'column',
    gap: '0.75rem',
  },
  link: {
    color: 'rgba(255,255,255,0.8)',
    textDecoration: 'none',
    fontSize: '0.9rem',
    transition: 'color 0.2s ease',
  },
  socialLinks: {
    display: 'flex',
    gap: '1rem',
    marginTop: '0.5rem',
  },
  socialIcon: {
    color: 'rgba(255,255,255,0.8)',
    backgroundColor: 'rgba(255,255,255,0.05)',
    width: '2.5rem',
    height: '2.5rem',
    borderRadius: '50%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    transition: 'all 0.3s ease',
    border: '1px solid rgba(255,255,255,0.1)',
  },
  bottomBar: {
    backgroundColor: 'rgba(0,0,0,0.2)',
    padding: '1rem 0',
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
