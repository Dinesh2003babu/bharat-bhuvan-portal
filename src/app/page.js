import Link from "next/link";
import { Award, ShieldCheck, Users } from "lucide-react";

export default function Home() {
  return (
    <div style={styles.pageContainer}>
      {/* HERO SECTION */}
      <section style={styles.hero}>
        <div style={styles.heroOverlay}></div>
        <div style={styles.heroContent}>
          <h1 style={styles.heroTitle}>
            CHRONICLING INDIA'S<br/>
            GREATEST ACHIEVEMENTS
          </h1>
          <p style={styles.heroSubtitle}>
            The official repository of extraordinary national records and historic milestones.
          </p>
          <div style={styles.heroActions}>
            <Link href="/apply" style={styles.primaryBtn}>
              Apply for a New Record
            </Link>
            <Link href="/records" style={styles.secondaryBtn}>
              Search the Database
            </Link>
          </div>
        </div>
      </section>

      {/* STATISTICS SECTION */}
      <section style={styles.statsSection}>
        <div style={styles.container}>
          <div style={styles.statsGrid}>
            <div style={styles.statCard}>
              <Award size={40} color="var(--color-saffron)" style={styles.statIcon} />
              <h2 style={styles.statNumber}>12,450+</h2>
              <p style={styles.statLabel}>Official Records</p>
            </div>
            <div style={styles.statCard}>
              <Users size={40} color="var(--color-navy)" style={styles.statIcon} />
              <h2 style={styles.statNumber}>8,900+</h2>
              <p style={styles.statLabel}>Record Holders</p>
            </div>
            <div style={styles.statCard}>
              <ShieldCheck size={40} color="var(--color-green)" style={styles.statIcon} />
              <h2 style={styles.statNumber}>100%</h2>
              <p style={styles.statLabel}>Verified Certificates</p>
            </div>
          </div>
        </div>
      </section>

      {/* RECENT RECORDS SECTION */}
      <section style={styles.recordsSection}>
        <div style={styles.container}>
          <div style={styles.sectionHeader}>
            <h2 style={styles.sectionTitle}>Recently Authenticated Records</h2>
            <div style={styles.titleUnderline}></div>
          </div>
          
          <div style={styles.recordsGrid}>
            {/* Record 1 */}
            <div style={styles.recordCard}>
              <div style={styles.cardHeaderSaffron}></div>
              <div style={styles.cardIconWrapper}>
                <Award size={24} color="var(--color-navy)" />
              </div>
              <h3 style={styles.recordTitle}>Largest Yoga Gathering</h3>
              <p style={styles.recordHolder}>State Government of Gujarat</p>
              <p style={styles.recordDesc}>
                Set on International Yoga Day with over 150,000 participants simultaneously performing Surya Namaskar across Surat.
              </p>
              <div style={styles.recordMeta}>
                <span><strong>Date:</strong> 21 Jun 2025</span>
                <span><strong>ID:</strong> BBR-2025-YG982</span>
              </div>
            </div>

            {/* Record 2 */}
            <div style={styles.recordCard}>
              <div style={styles.cardHeaderNavy}></div>
              <div style={styles.cardIconWrapper}>
                <Award size={24} color="var(--color-navy)" />
              </div>
              <h3 style={styles.recordTitle}>Fastest Mental Math Calculation</h3>
              <p style={styles.recordHolder}>Rohan Sharma</p>
              <p style={styles.recordDesc}>
                Successfully computed the 13th root of a 200-digit number in under 12 seconds, breaking the national benchmark.
              </p>
              <div style={styles.recordMeta}>
                <span><strong>Date:</strong> 15 Aug 2025</span>
                <span><strong>ID:</strong> BBR-2025-MM431</span>
              </div>
            </div>

            {/* Record 3 */}
            <div style={styles.recordCard}>
              <div style={styles.cardHeaderGreen}></div>
              <div style={styles.cardIconWrapper}>
                <Award size={24} color="var(--color-navy)" />
              </div>
              <h3 style={styles.recordTitle}>Longest Continuous Relay Run</h3>
              <p style={styles.recordHolder}>Indian Armed Forces</p>
              <p style={styles.recordDesc}>
                A continuous baton relay run spanning 4,000 kilometers from Kashmir to Kanyakumari without interruption.
              </p>
              <div style={styles.recordMeta}>
                <span><strong>Date:</strong> 26 Jan 2026</span>
                <span><strong>ID:</strong> BBR-2026-RR105</span>
              </div>
            </div>
          </div>

          <div style={styles.viewAllWrapper}>
            <Link href="/records" style={styles.viewAllBtn}>
              Explore Full Registry
            </Link>
          </div>
        </div>
      </section>

      {/* HOW TO APPLY (MINI BANNER) */}
      <section style={styles.applyBanner}>
        <div style={styles.container}>
          <div style={styles.applyFlex}>
            <div style={styles.applyText}>
              <h2 style={styles.applyTitle}>Do you have what it takes?</h2>
              <p style={styles.applyDesc}>Follow our strict 3-step adjudication process to enshrine your achievement in history.</p>
            </div>
            <Link href="/apply" style={styles.applyBannerBtn}>
              Read Guidelines & Apply
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

const styles = {
  pageContainer: {
    display: 'flex',
    flexDirection: 'column',
    minHeight: '100vh',
  },
  container: {
    maxWidth: '1200px',
    margin: '0 auto',
    padding: '0 20px',
    width: '100%',
  },
  hero: {
    position: 'relative',
    height: '500px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    background: 'var(--gradient-tricolor-subtle)',
    borderBottom: '1px solid var(--border-color)',
    overflow: 'hidden',
  },
  heroOverlay: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundImage: 'radial-gradient(circle at center, transparent 0%, rgba(0,0,0,0.02) 100%)',
  },
  heroContent: {
    position: 'relative',
    zIndex: 1,
    textAlign: 'center',
    maxWidth: '800px',
    padding: '0 20px',
  },
  heroTitle: {
    fontSize: '52px',
    lineHeight: '1.2',
    color: 'var(--color-navy)',
    fontWeight: '900',
    marginBottom: '20px',
    letterSpacing: '1px',
    textShadow: '0 2px 4px rgba(0,0,0,0.05)',
  },
  heroSubtitle: {
    fontSize: '20px',
    color: 'var(--text-main)',
    marginBottom: '40px',
    fontWeight: '400',
  },
  heroActions: {
    display: 'flex',
    gap: '20px',
    justifyContent: 'center',
  },
  primaryBtn: {
    backgroundColor: 'var(--color-saffron)',
    color: 'var(--color-white)',
    padding: '16px 32px',
    borderRadius: '4px',
    fontSize: '16px',
    fontWeight: '700',
    border: 'none',
    boxShadow: '0 4px 10px rgba(255,153,51,0.3)',
    transition: 'transform 0.2s',
  },
  secondaryBtn: {
    backgroundColor: 'var(--color-white)',
    color: 'var(--color-navy)',
    padding: '16px 32px',
    borderRadius: '4px',
    fontSize: '16px',
    fontWeight: '700',
    border: '2px solid var(--color-navy)',
    transition: 'background-color 0.2s',
  },
  statsSection: {
    padding: '60px 0',
    backgroundColor: 'var(--color-white)',
    boxShadow: '0 4px 20px rgba(0,0,0,0.03)',
    position: 'relative',
    zIndex: 2,
    marginTop: '-40px',
  },
  statsGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
    gap: '30px',
  },
  statCard: {
    textAlign: 'center',
    padding: '30px',
    borderRadius: '8px',
    border: '1px solid var(--border-color)',
    backgroundColor: 'var(--bg-color)',
    transition: 'transform 0.3s ease',
  },
  statIcon: {
    marginBottom: '15px',
  },
  statNumber: {
    fontSize: '36px',
    fontWeight: '900',
    color: 'var(--color-navy)',
    marginBottom: '5px',
    fontFamily: 'Inter, sans-serif',
  },
  statLabel: {
    fontSize: '16px',
    color: 'var(--text-muted)',
    fontWeight: '600',
  },
  recordsSection: {
    padding: '80px 0',
    backgroundColor: 'var(--bg-color)',
  },
  sectionHeader: {
    textAlign: 'center',
    marginBottom: '50px',
  },
  sectionTitle: {
    fontSize: '32px',
    fontWeight: '700',
  },
  titleUnderline: {
    height: '4px',
    width: '60px',
    background: 'var(--color-navy)',
    margin: '15px auto 0',
  },
  recordsGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))',
    gap: '30px',
    marginBottom: '40px',
  },
  recordCard: {
    backgroundColor: 'var(--color-white)',
    borderRadius: '8px',
    overflow: 'hidden',
    boxShadow: '0 4px 15px rgba(0,0,0,0.05)',
    border: '1px solid var(--border-color)',
    position: 'relative',
    padding: '30px',
    paddingTop: '40px',
    transition: 'transform 0.3s ease, box-shadow 0.3s ease',
  },
  cardHeaderSaffron: {
    position: 'absolute',
    top: 0, left: 0, right: 0, height: '6px',
    backgroundColor: 'var(--color-saffron)',
  },
  cardHeaderNavy: {
    position: 'absolute',
    top: 0, left: 0, right: 0, height: '6px',
    backgroundColor: 'var(--color-navy)',
  },
  cardHeaderGreen: {
    position: 'absolute',
    top: 0, left: 0, right: 0, height: '6px',
    backgroundColor: 'var(--color-green)',
  },
  cardIconWrapper: {
    position: 'absolute',
    top: '20px',
    right: '25px',
    opacity: 0.1,
    transform: 'scale(3)',
  },
  recordTitle: {
    fontSize: '18px',
    fontWeight: '700',
    marginBottom: '10px',
    position: 'relative',
    zIndex: 2,
  },
  recordHolder: {
    fontSize: '14px',
    fontWeight: '600',
    color: 'var(--color-saffron)',
    marginBottom: '15px',
  },
  recordDesc: {
    fontSize: '14px',
    color: 'var(--text-muted)',
    lineHeight: '1.6',
    marginBottom: '20px',
  },
  recordMeta: {
    display: 'flex',
    justifyContent: 'space-between',
    fontSize: '12px',
    color: 'var(--text-muted)',
    borderTop: '1px dashed var(--border-color)',
    paddingTop: '15px',
  },
  viewAllWrapper: {
    textAlign: 'center',
  },
  viewAllBtn: {
    display: 'inline-block',
    padding: '12px 30px',
    border: '2px solid var(--color-navy)',
    color: 'var(--color-navy)',
    fontWeight: '600',
    borderRadius: '4px',
    transition: 'all 0.2s',
  },
  applyBanner: {
    backgroundColor: 'var(--color-green-light)',
    padding: '50px 0',
    borderTop: '1px solid var(--color-green)',
    borderBottom: '1px solid var(--color-green)',
  },
  applyFlex: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    flexWrap: 'wrap',
    gap: '20px',
  },
  applyTitle: {
    fontSize: '28px',
    color: 'var(--color-green)',
    marginBottom: '10px',
  },
  applyDesc: {
    fontSize: '16px',
    color: 'var(--text-main)',
  },
  applyBannerBtn: {
    backgroundColor: 'var(--color-green)',
    color: 'var(--color-white)',
    padding: '14px 28px',
    borderRadius: '4px',
    fontWeight: '700',
    boxShadow: '0 4px 10px rgba(19,136,8,0.3)',
  }
};
