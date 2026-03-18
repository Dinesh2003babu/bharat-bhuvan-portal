"use client";

import { Info, Target, Grid } from "lucide-react";

export default function AboutPage() {
  return (
    <div style={styles.page}>

      {/* Header Banner */}
      <div style={styles.header}>
        <div style={styles.container}>
          <h1 style={styles.title} className="about-title-res">Welcome to Bharat Bhuvan Book of Records</h1>
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
            <section style={styles.sectionCard} className="about-card-res">
              <div style={styles.sectionHeader}>
                <div style={styles.iconBoxSaffron}><Info size={24} color="#fff" /></div>
                <h2 style={styles.sectionTitle}>About Us</h2>
              </div>
              <p style={styles.text}>
                <strong>Bharat Bhuvan Book of Records (BBBR)</strong> is an independent national recognition platform dedicated to promoting Indian arts and cultural heritage through meaningful achievements.
                Our focus is rooted in Bharatiya Vidya, ensuring that traditional art forms and cultural values are preserved and recognized.
                Unlike general record organizations, BBBR focuses exclusively on Indian arts and cultural excellence, maintaining authenticity and integrity in every recognition.
                Our platfor provides opportunities for artists, institutions, and cultural communities to showcase their talent and promote Indian culture globally.<br />
                <br />
                <strong>At BBBR, every record is not just an achievement — it is a legacy.</strong>
              </p>

            </section>

            {/* 2. Why This Section */}
            <section style={styles.sectionCard} className="about-card-res">
              <div style={styles.sectionHeader}>
                <div style={styles.iconBoxNavy}><Target size={24} color="#fff" /></div>
                <h2 style={styles.sectionTitle}>Why Choose Us?</h2>
              </div>
              <ul style={styles.whyList}>
                <li style={styles.whyItem}>
                  <span style={styles.whyBullet}>✦</span>
                  <span>Exclusive focus on Indian arts and culture</span>
                </li>
                <li style={styles.whyItem}>
                  <span style={styles.whyBullet}>✦</span>
                  <span>Authentic and culturally rooted recognition</span>
                </li>
                <li style={styles.whyItem}>
                  <span style={styles.whyBullet}>✦</span>
                  <span>Platform for artists, academies, and institutions</span>
                </li>
                <li style={styles.whyItem}>
                  <span style={styles.whyBullet}>✦</span>
                  <span>Recognition for mass cultural events and gatherings</span>
                </li>
                <li style={styles.whyItem}>
                  <span style={styles.whyBullet}>✦</span>
                  <span>Global promotion of Bharatiya traditions</span>
                </li>
              </ul>
            </section>

            {/* 3. Record Categories Section */}
            <section style={styles.sectionCard} className="about-card-res">
              <div style={styles.sectionHeader}>
                <div style={styles.iconBoxGreen}><Grid size={24} color="#fff" /></div>
                <h2 style={styles.sectionTitle}>Record Categories</h2>
              </div>

              <div style={styles.catList}>

                <div style={styles.catItem}>
                  <div style={styles.catTop}>
                    <span style={styles.catIcon}>🎭</span>
                    <strong style={styles.catTitle}>Performing Arts</strong>
                  </div>
                  <p style={styles.catDesc}>Dance, music, theatre, classical and folk performances rooted in Indian traditions.</p>
                </div>

                <div style={styles.catItem}>
                  <div style={styles.catTop}>
                    <span style={styles.catIcon}>🎨</span>
                    <strong style={styles.catTitle}>Art, Craft &amp; Handicrafts</strong>
                  </div>
                  <p style={styles.catDesc}>Traditional crafts, handmade creations, artisan skills and cultural art forms.</p>
                </div>

                <div style={styles.catItem}>
                  <div style={styles.catTop}>
                    <span style={styles.catIcon}>🏛️</span>
                    <strong style={styles.catTitle}>Cultural Heritage &amp; Traditions</strong>
                  </div>
                  <p style={styles.catDesc}>Temple arts, rituals, folk traditions and heritage preservation.</p>
                </div>

                <div style={styles.catItem}>
                  <div style={styles.catTop}>
                    <span style={styles.catIcon}>📚</span>
                    <strong style={styles.catTitle}>Education &amp; Skill Development</strong>
                  </div>
                  <p style={styles.catDesc}>Workshops, training programs and cultural education initiatives.</p>
                </div>

                <div style={styles.catItem}>
                  <div style={styles.catTop}>
                    <span style={styles.catIcon}>👥</span>
                    <strong style={styles.catTitle}>Mass Participation &amp; Gatherings</strong>
                  </div>
                  <p style={styles.catDesc}>Large-scale cultural events, group performances and mass gatherings.</p>
                </div>

                <div style={styles.catItem}>
                  <div style={styles.catTop}>
                    <span style={styles.catIcon}>🌏</span>
                    <strong style={styles.catTitle}>Social &amp; Cultural Initiatives</strong>
                  </div>
                  <p style={styles.catDesc}>Cultural awareness programs and preservation activities.</p>
                </div>

                <div style={styles.catItem}>
                  <div style={styles.catTop}>
                    <span style={styles.catIcon}>💡</span>
                    <strong style={styles.catTitle}>Innovation in Arts &amp; Culture</strong>
                  </div>
                  <p style={styles.catDesc}>Creative modern interpretations of traditional Indian art forms.</p>
                </div>

                <div style={{...styles.catItem, borderLeft: '4px solid var(--color-green)'}}>
                  <div style={styles.catTop}>
                    <span style={styles.catIcon}>🌐</span>
                    <strong style={styles.catTitle}>Global Participation</strong>
                  </div>
                  <div style={styles.globalSubList}>
                    <p style={styles.catDesc}><strong>Indian Artists:</strong> Artists within India performing Bharatiya arts.</p>
                    <p style={styles.catDesc}><strong>NRI Artists:</strong> Indians abroad promoting Indian art forms.</p>
                    <p style={styles.catDesc}><strong>International Artists:</strong> Non-Indians practicing Indian arts globally.</p>
                  </div>
                </div>

              </div>
            </section>

            {/* 4. Who Can Apply Section */}
            <section style={styles.sectionCard} className="about-card-res">
              <div style={styles.sectionHeader}>
                <div style={styles.iconBoxSaffron}><Info size={24} color="#fff" /></div>
                <h2 style={styles.sectionTitle}>Who Can Apply?</h2>
              </div>

              <p style={styles.text}>
                Bharat Bhuvan Book of Records welcomes applications from a wide range of individuals, groups, and institutions who are passionate about preserving and promoting Indian arts and culture.
              </p>

              <div style={styles.whoGrid}>

                <div style={styles.whoCard}>
                  <div style={styles.whoIconWrap}>
                    <span style={styles.whoIcon}>🧑‍🎤</span>
                  </div>
                  <h4 style={styles.whoTitle}>Individual Artists</h4>
                  <p style={styles.whoDesc}>Singers, dancers, painters, sculptors, and performers in any Indian art form.</p>
                </div>

                <div style={styles.whoCard}>
                  <div style={styles.whoIconWrap}>
                    <span style={styles.whoIcon}>🏫</span>
                  </div>
                  <h4 style={styles.whoTitle}>Schools &amp; Academies</h4>
                  <p style={styles.whoDesc}>Cultural schools, gurukuls, arts academies and educational institutions.</p>
                </div>

                <div style={styles.whoCard}>
                  <div style={styles.whoIconWrap}>
                    <span style={styles.whoIcon}>🏢</span>
                  </div>
                  <h4 style={styles.whoTitle}>Organizations &amp; NGOs</h4>
                  <p style={styles.whoDesc}>Registered trusts, cultural societies, and non-profit organizations.</p>
                </div>

                <div style={styles.whoCard}>
                  <div style={styles.whoIconWrap}>
                    <span style={styles.whoIcon}>🏛️</span>
                  </div>
                  <h4 style={styles.whoTitle}>Government Bodies</h4>
                  <p style={styles.whoDesc}>State and central government departments running cultural programs and mass events.</p>
                </div>

                <div style={styles.whoCard}>
                  <div style={styles.whoIconWrap}>
                    <span style={styles.whoIcon}>🌏</span>
                  </div>
                  <h4 style={styles.whoTitle}>NRI &amp; Global Indians</h4>
                  <p style={styles.whoDesc}>Indians living abroad who are promoting Bharatiya arts on an international stage.</p>
                </div>

                <div style={styles.whoCard}>
                  <div style={styles.whoIconWrap}>
                    <span style={styles.whoIcon}>🌐</span>
                  </div>
                  <h4 style={styles.whoTitle}>International Artists</h4>
                  <p style={styles.whoDesc}>Non-Indian individuals or institutions practicing and promoting Indian arts globally.</p>
                </div>

              </div>

              <div style={styles.whoNote}>
                <strong>Minimum Age:</strong> Applicants must be 5 years or above. Applications for minors must be submitted by a parent or legal guardian.
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
  whyList: {
    listStyle: 'none',
    padding: 0,
    margin: 0,
    display: 'flex',
    flexDirection: 'column',
    gap: '18px',
  },
  whyItem: {
    display: 'flex',
    alignItems: 'center',
    gap: '16px',
    fontSize: '17px',
    fontWeight: '600',
    color: 'var(--color-navy)',
    padding: '14px 20px',
    backgroundColor: 'rgba(255,153,51,0.04)',
    border: '1px solid rgba(255,153,51,0.15)',
    borderLeft: '4px solid var(--color-saffron)',
    borderRadius: '6px',
    transition: 'all 0.2s ease',
  },
  whyBullet: {
    color: 'var(--color-saffron)',
    fontSize: '18px',
    fontWeight: '900',
    flexShrink: 0,
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
  },
  catList: {
    display: 'flex',
    flexDirection: 'column',
    gap: '16px',
  },
  catItem: {
    padding: '20px 24px',
    borderRadius: '8px',
    borderLeft: '4px solid var(--color-saffron)',
    backgroundColor: 'rgba(255,153,51,0.03)',
    border: '1px solid var(--border-color)',
    borderLeftWidth: '4px',
    borderLeftColor: 'var(--color-saffron)',
    transition: 'box-shadow 0.2s ease',
  },
  catTop: {
    display: 'flex',
    alignItems: 'center',
    gap: '12px',
    marginBottom: '8px',
  },
  catIcon: {
    fontSize: '22px',
    lineHeight: 1,
  },
  catTitle: {
    fontSize: '17px',
    fontWeight: '700',
    color: 'var(--color-navy)',
  },
  catDesc: {
    fontSize: '14px',
    color: 'var(--text-muted)',
    lineHeight: '1.6',
    margin: 0,
    marginBottom: '5px',
  },
  globalSubList: {
    display: 'flex',
    flexDirection: 'column',
    gap: '4px',
  },
  whoGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fill, minmax(260px, 1fr))',
    gap: '20px',
    marginBottom: '30px',
  },
  whoCard: {
    backgroundColor: 'var(--color-white)',
    border: '1px solid var(--border-color)',
    borderRadius: '12px',
    padding: '24px 20px',
    textAlign: 'center',
    boxShadow: '0 4px 15px rgba(0,0,0,0.04)',
    transition: 'transform 0.2s ease, box-shadow 0.2s ease',
  },
  whoIconWrap: {
    width: '64px',
    height: '64px',
    borderRadius: '50%',
    background: 'linear-gradient(135deg, rgba(255,153,51,0.12), rgba(19,136,8,0.08))',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    margin: '0 auto 16px',
    border: '2px solid rgba(255,153,51,0.2)',
  },
  whoIcon: {
    fontSize: '28px',
  },
  whoTitle: {
    fontSize: '16px',
    fontWeight: '700',
    color: 'var(--color-navy)',
    marginBottom: '8px',
  },
  whoDesc: {
    fontSize: '13px',
    color: 'var(--text-muted)',
    lineHeight: '1.6',
    margin: 0,
  },
  whoNote: {
    backgroundColor: 'var(--color-navy-light)',
    borderLeft: '4px solid var(--color-navy)',
    borderRadius: '6px',
    padding: '15px 20px',
    fontSize: '14px',
    color: 'var(--color-navy)',
    lineHeight: '1.6',
  },
};
