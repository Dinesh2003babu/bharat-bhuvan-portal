"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Header() {
  const pathname = usePathname();

  const getLinkClass = (path) => {
    return pathname === path ? "nav-link active" : "nav-link";
  };

  return (
    <header style={styles.header}>
      <div style={styles.topOrnament}></div>
      <div style={styles.container}>
        <div style={styles.logoArea}>
          {/* Placeholder for standard emblem */}
          <div style={styles.emblemPlaceholder}>
            <div style={styles.innerCircle}></div>
          </div>
          <div style={styles.titleArea}>
            <h1 style={styles.englishTitle}>BHARAT BHUVAN BOOK OF RECORDS</h1>
            <p style={styles.subtitle}>Recognizing Extraordinary Indian Excellence</p>
          </div>
        </div>

        <nav style={styles.nav}>
          <Link href="/" className={getLinkClass("/")}>Home</Link>
          <Link href="/about" className={getLinkClass("/about")}>About us</Link>
          <Link href="/records" className={getLinkClass("/records")}>Search Records</Link>
          <Link href="/upcoming" className={getLinkClass("/upcoming")}>Upcoming</Link>
          <Link href="/verify" className={getLinkClass("/verify")}>Verify Certificate</Link>
          <Link href="/apply" className="nav-link-apply">Apply Now</Link>
        </nav>
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
    gap: '15px',
  },
  emblemPlaceholder: {
    width: '60px',
    height: '80px',
    backgroundColor: 'var(--color-navy-light)',
    border: '2px solid var(--color-navy)',
    borderRadius: '4px 4px 30px 30px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    padding: '5px',
  },
  innerCircle: {
    width: '24px',
    height: '24px',
    borderRadius: '50%',
    border: '3px solid var(--color-navy)',
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
    textTransform: 'uppercase',
    letterSpacing: '1px',
    marginTop: '2px',
  },
  nav: {
    display: 'flex',
    gap: '5px',
    alignItems: 'center',
  }
};
