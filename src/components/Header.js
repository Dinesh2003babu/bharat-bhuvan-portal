"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import { useState } from "react";

export default function Header() {
  const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const getLinkClass = (path) => {
    return pathname === path ? "nav-link active" : "nav-link";
  };

  return (
    <header style={styles.header}>
      <div style={styles.topOrnament}></div>
      <div style={styles.container} className="header-container">
        <div style={styles.logoArea} className="logo-section">
          {/* Official Logo Emblem */}
          <div style={styles.logoWrapper}>
            <img src="/BBBR_Logo.png" alt="BBBR Logo" style={styles.logoImage} />
          </div>
          <div style={styles.titleArea}>
            <h1 style={styles.englishTitle}>BHARAT BHUVAN BOOK OF RECORDS</h1>
            <p style={styles.subtitle}>Recognizing Indian Arts & Cultural Heritage</p>
          </div>
        </div>

        <nav style={styles.nav} className="mobile-hide">
          <Link href="/" className={getLinkClass("/")}>Home</Link>
          <Link href="/about" className={getLinkClass("/about")}>About Us</Link>
          {/* <Link href="/records" className={getLinkClass("/records")}>Search Records</Link> */}
          <Link href="/upcoming" className={getLinkClass("/upcoming")}>Upcoming</Link>
          {/* <Link href="/verify" className={getLinkClass("/verify")}>Verify Certificate</Link> */}
          <Link href="/apply" className="nav-link-apply">Apply Now</Link>
          <Link href="/contact" className={getLinkClass("/contact")}>Contact Us</Link>
        </nav>

        {/* Mobile Menu Button */}
        <button
          style={styles.mobileMenuBtn}
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle menu"
          className="mobile-menu-btn"
        >
          {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>

        {/* Mobile Menu Overlay */}
        {isMenuOpen && (
          <div style={styles.mobileOverlay}>
            <div style={styles.mobileMenu}>
              <Link href="/" onClick={() => setIsMenuOpen(false)} style={styles.mobileNavLink}>Home</Link>
              <Link href="/about" onClick={() => setIsMenuOpen(false)} style={styles.mobileNavLink}>About us</Link>
              <Link href="/records" onClick={() => setIsMenuOpen(false)} style={styles.mobileNavLink}>Search Records</Link>
              <Link href="/upcoming" onClick={() => setIsMenuOpen(false)} style={styles.mobileNavLink}>Upcoming</Link>
              <Link href="/verify" onClick={() => setIsMenuOpen(false)} style={styles.mobileNavLink}>Verify Certificate</Link>
              <Link href="/apply" onClick={() => setIsMenuOpen(false)} style={styles.mobileApplyBtn}>Apply Now</Link>
              <Link href="/contact" onClick={() => setIsMenuOpen(false)} style={styles.mobileNavLink}>Contact Us</Link>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}

const styles = {
  header: {
    backgroundColor: 'var(--color-white)',
    boxShadow: '0 4px 6px rgba(0,0,0,0.05)',
    borderBottom: '4px solid var(--color-navy)',
    position: 'sticky',
    top: 0,
    zIndex: 100,
  },
  topOrnament: {
    height: '4px',
    background: 'var(--gradient-tricolor)',
    width: '100%',
  },
  container: {
    maxWidth: '1200px',
    margin: '0 auto',
    padding: '15px 20px',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    flexWrap: 'wrap',
    gap: '20px',
  },
  logoArea: {
    display: 'flex',
    alignItems: 'center',
    gap: '10px',
  },
  logoWrapper: {
    width: '70px',
    height: '70px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  logoImage: {
    width: '100%',
    height: '100%',
    objectFit: 'contain',
  },
  titleArea: {
    display: 'flex',
    flexDirection: 'column',
  },
  hindiTitle: {
    fontSize: '20px',
    color: 'var(--color-saffron)',
    fontWeight: '700',
    marginBottom: '2px',
  },
  englishTitle: {
    fontSize: '18px',
    color: 'var(--color-navy)',
    fontWeight: '900',
    letterSpacing: '0.5px',
    margin: 0,
  },
  subtitle: {
    fontSize: '12px',
    color: 'var(--color-green)',
    fontWeight: '600',
    // textTransform: 'uppercase',
    letterSpacing: '1px',
    marginTop: '2px',
  },
  nav: {
    display: 'flex',
    gap: '5px',
    alignItems: 'center',
  },
  mobileMenuBtn: {
    display: 'none',
    background: 'none',
    border: 'none',
    color: 'var(--color-navy)',
    cursor: 'pointer',
    padding: '5px',
  },
  mobileOverlay: {
    position: 'fixed',
    top: '110px', // Below the header height approx
    left: 0,
    width: '100%',
    height: 'calc(100vh - 110px)',
    backgroundColor: 'rgba(0,0,0,0.5)',
    zIndex: 99,
  },
  mobileMenu: {
    backgroundColor: 'var(--color-white)',
    display: 'flex',
    flexDirection: 'column',
    padding: '20px',
    gap: '15px',
    boxShadow: '0 10px 20px rgba(0,0,0,0.1)',
    animation: 'fadeInScale 0.2s ease-out',
  },
  mobileNavLink: {
    fontSize: '18px',
    fontWeight: '600',
    color: 'var(--color-navy)',
    padding: '10px 0',
    borderBottom: '1px solid var(--border-color)',
  },
  mobileApplyBtn: {
    backgroundColor: 'var(--color-saffron)',
    color: 'var(--color-white)',
    padding: '15px',
    borderRadius: '4px',
    textAlign: 'center',
    fontWeight: '700',
    fontSize: '18px',
    marginTop: '10px',
  }
};

