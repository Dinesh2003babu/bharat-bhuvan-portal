import Link from "next/link";

export default function Header() {
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
            <h1 style={styles.hindiTitle}>भारत भुवन बुक ऑफ रिकॉर्ड्स</h1>
            <h2 style={styles.englishTitle}>BHARAT BHUVAN BOOK OF RECORDS</h2>
            <p style={styles.subtitle}>Recognizing Extraordinary Indian Excellence</p>
          </div>
        </div>
        
        <nav style={styles.nav}>
          <Link href="/" style={styles.navLink}>Home</Link>
          <Link href="/records" style={styles.navLink}>Search Records</Link>
          <Link href="/apply" style={styles.navLinkApply}>Apply Now</Link>
          <Link href="/verify" style={styles.navLink}>Verify Certificate</Link>
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
  },
  navLink: {
    padding: '10px 15px',
    fontSize: '14px',
    fontWeight: '600',
    color: 'var(--color-navy)',
    borderRadius: '4px',
    transition: 'all 0.2s ease',
  },
  navLinkApply: {
    padding: '10px 20px',
    fontSize: '14px',
    fontWeight: '700',
    backgroundColor: 'var(--color-saffron)',
    color: 'var(--color-white)',
    borderRadius: '4px',
    boxShadow: '0 2px 4px rgba(255,153,51,0.3)',
    marginLeft: '5px',
    transition: 'all 0.2s ease',
  }
};
