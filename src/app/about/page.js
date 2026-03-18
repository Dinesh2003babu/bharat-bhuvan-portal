"use client";

import { Info, Target, Grid } from "lucide-react";

export default function AboutPage() {
  return (
    <div style={styles.page}>

      {/* Header Banner */}
      <div style={styles.header}>
        <div style={styles.container}>
          <h1 style={styles.title}>Welcome to Bharat Bhuvan Book of Records</h1>
          <p style={styles.subtitle}>
            The premier authority chronicling extraordinary achievements across the Indian subcontinent.
          </p>
        </div>
      </div>

      <div style={styles.container}>
        <div style={styles.contentLayout}>

          {/* Main Content Area */}
          <div style={styles.mainContent}>

            {/* 1. About Us Section */}
            <section style={styles.sectionCard}>
              <div style={styles.sectionHeader}>
                <div style={styles.iconBoxSaffron}><Info size={24} color="#fff" /></div>
                <h2 style={styles.sectionTitle}>About Us</h2>
              </div>
              <p style={styles.text}>
                The <strong>Bharat Bhuvan Book of Records (BBBR)</strong> is the official national registry
                dedicated to discovering, authenticating, and archiving extraordinary human achievements,
                unique natural phenomena, and monumental events occurring within India and by Indians globally.
              </p>
              <p style={styles.text}>
                Managed by a dedicated Secretariat and governed by strict standardized operating procedures,
                our institution ensures that every record listed in our database has undergone rigorous,
                impartial adjudication. We serve as the ultimate benchmark for excellence and human endeavor
                in the nation.
              </p>
            </section>

            {/* 2. Why This Section */}
            <section style={styles.sectionCard}>
              <div style={styles.sectionHeader}>
                <div style={styles.iconBoxNavy}><Target size={24} color="#fff" /></div>
                <h2 style={styles.sectionTitle}>Why We Exist (Our Purpose)</h2>
              </div>
              <p style={styles.text}>
                India is a land of unparalleled diversity, immense talent, and unyielding ambition.
                However, historically, countless monumental achievements by everyday citizens, grassroots
                organizations, and local innovators have gone undocumented.
              </p>
              <ul style={styles.list}>
                <li style={styles.listItem}><strong>To Preserve Heritage:</strong> We document milestones that define our era for future generations.</li>
                <li style={styles.listItem}><strong>To Inspire the Nation:</strong> By showcasing the limits of human capability, we motivate others to dream bigger and push further.</li>
                <li style={styles.listItem}><strong>To Provide Official Authentication:</strong> In an era of misinformation, our verified certificates serve as undeniable proof of accomplishment.</li>
                <li style={styles.listItem}><strong>To Elevate Local Talent:</strong> We provide a national platform for unsung heroes across all states and territories.</li>
              </ul>
            </section>

            {/* 3. Record Categories Section */}
            <section style={styles.sectionCard}>
              <div style={styles.sectionHeader}>
                <div style={styles.iconBoxGreen}><Grid size={24} color="#fff" /></div>
                <h2 style={styles.sectionTitle}>Official Record Categories</h2>
              </div>
              <p style={styles.text}>
                Our adjudication board currently accepts official record applications across the following major verticals.
                Each category possesses unique, stringent measurement criteria.
              </p>

              <div style={styles.categoryGrid}>
                <div style={styles.categoryBadge}>Mass Events & Gatherings</div>
                <div style={styles.categoryBadge}>Education, Memory & Skills</div>
                <div style={styles.categoryBadge}>Sports, Strength & Endurance</div>
                <div style={styles.categoryBadge}>Art, Crafts & Culture</div>
                <div style={styles.categoryBadge}>Science & Technology Innovation</div>
                <div style={styles.categoryBadge}>Business & Entrepreneurship</div>
                <div style={styles.categoryBadge}>Environment & Conservation</div>
                <div style={styles.categoryBadge}>Medical & Humanitarian Efforts</div>
                <div style={styles.categoryBadge}>Agriculture & Flora</div>
                <div style={styles.categoryBadge}>Mega Structures & Engineering</div>
              </div>
            </section>

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
    backgroundColor: 'var(--color-white)',
    padding: '50px 0',
    borderBottom: '4px solid var(--color-navy)',
    marginBottom: '40px',
    backgroundImage: 'linear-gradient(to right, rgba(255,153,51,0.05), rgba(255,255,255,0), rgba(19,136,8,0.05))',
  },
  container: {
    maxWidth: '1000px',
    margin: '0 auto',
    padding: '0 20px',
  },
  title: {
    fontSize: '36px',
    fontWeight: '800',
    color: 'var(--color-navy)',
    marginBottom: '15px'
  },
  subtitle: {
    fontSize: '18px',
    color: 'var(--text-muted)',
    maxWidth: '700px',
    lineHeight: '1.5'
  },
  contentLayout: {
    display: 'flex',
    flexDirection: 'column',
    gap: '30px',
  },
  sectionCard: {
    backgroundColor: '#fff',
    padding: '40px',
    borderRadius: '8px',
    border: '1px solid var(--border-color)',
    boxShadow: '0 4px 15px rgba(0,0,0,0.02)',
    marginBottom: '30px',
    position: 'relative',
    overflow: 'hidden',
  },
  sectionHeader: {
    display: 'flex',
    alignItems: 'center',
    gap: '15px',
    marginBottom: '25px',
    borderBottom: '1px solid var(--border-color)',
    paddingBottom: '15px',
  },
  iconBoxSaffron: {
    backgroundColor: 'var(--color-saffron)',
    width: '45px', height: '45px',
    borderRadius: '8px',
    display: 'flex', alignItems: 'center', justifyContent: 'center',
  },
  iconBoxNavy: {
    backgroundColor: 'var(--color-navy)',
    width: '45px', height: '45px',
    borderRadius: '8px',
    display: 'flex', alignItems: 'center', justifyContent: 'center',
  },
  iconBoxGreen: {
    backgroundColor: 'var(--color-green)',
    width: '45px', height: '45px',
    borderRadius: '8px',
    display: 'flex', alignItems: 'center', justifyContent: 'center',
  },
  sectionTitle: {
    fontSize: '26px',
    color: 'var(--color-navy)',
    fontWeight: '700',
  },
  text: {
    fontSize: '16px',
    color: 'var(--text-main)',
    lineHeight: '1.8',
    marginBottom: '20px'
  },
  list: {
    listStylePosition: 'inside',
    paddingLeft: '10px',
    marginBottom: '20px',
    display: 'flex',
    flexDirection: 'column',
    gap: '12px',
  },
  listItem: {
    fontSize: '16px',
    color: 'var(--text-main)',
    lineHeight: '1.6',
    paddingLeft: '5px',
  },
  categoryGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))',
    gap: '15px',
    marginTop: '20px',
  },
  categoryBadge: {
    backgroundColor: 'var(--bg-color)',
    border: '1px solid var(--border-color)',
    padding: '15px 20px',
    borderRadius: '4px',
    fontSize: '15px',
    fontWeight: '600',
    color: 'var(--color-navy)',
    display: 'flex',
    alignItems: 'center',
    transition: 'all 0.2s ease',
    cursor: 'default',
    borderLeft: '4px solid var(--color-saffron)',
  }
};
