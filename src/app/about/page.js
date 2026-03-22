"use client";

import { Info, Target, Grid } from "lucide-react";

export default function AboutPage() {
  return (
    <div style={styles.page}>

      {/* Header Banner */}
      {/*       
      <div style={styles.header}>
        <div style={styles.container}>
          <h1 style={styles.title} className="about-title-res">Welcome to Bharat Bhuvan Book of Records</h1>
          <p style={styles.subtitle}>
            The premier authority chronicling extraordinary achievements across the Indian subcontinent.
          </p>
        </div>
      </div>
     */}

      <div style={styles.container} className="container-fluid">
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
                Our platform provides opportunities for artists, institutions, and cultural communities to showcase their talent and promote Indian culture globally.<br />
                <br />
                <strong>At BBBR, every record is not just an achievement - it is a legacy.</strong>
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

              <div className="cat-grid-res" style={styles.catGrid}>

                <div style={styles.catCard} className="card-hover-effect">
                  <div style={styles.catCardIconWrap} className="cat-card-icon-wrap">
                    <span style={styles.catCardIcon}>🎭</span>
                  </div>
                  <h4 style={styles.catCardTitle}>Performing Arts</h4>
                  <p style={styles.catCardDesc}>Dance, music and theatre traditions that express emotions, stories and devotion through movement, rhythm and performance.</p>
                </div>

                <div style={styles.catCard} className="card-hover-effect">
                  <div style={styles.catCardIconWrap} className="cat-card-icon-wrap">
                    <span style={styles.catCardIcon}>🎨</span>
                  </div>
                  <h4 style={styles.catCardTitle}>Visual Arts</h4>
                  <p style={styles.catCardDesc}>Paintings, sculpture and architectural creations that reflect India&apos;s aesthetic excellence, symbolism and craftsmanship.</p>
                </div>

                <div style={styles.catCard} className="card-hover-effect">
                  <div style={styles.catCardIconWrap} className="cat-card-icon-wrap">
                    <span style={styles.catCardIcon}>📜</span>
                  </div>
                  <h4 style={styles.catCardTitle}>Literary Arts</h4>
                  <p style={styles.catCardDesc}>Sacred texts, poetry, epics and writings that preserve knowledge, philosophy and cultural narratives across generations.</p>
                </div>

                <div style={styles.catCard} className="card-hover-effect">
                  <div style={styles.catCardIconWrap} className="cat-card-icon-wrap">
                    <span style={styles.catCardIcon}>🌺</span>
                  </div>
                  <h4 style={styles.catCardTitle}>Folk &amp; Tribal Arts</h4>
                  <p style={styles.catCardDesc}>Indigenous art forms rooted in local traditions, festivals and daily life, reflecting the cultural diversity of communities.</p>
                </div>

                <div style={styles.catCard} className="card-hover-effect">
                  <div style={styles.catCardIconWrap} className="cat-card-icon-wrap">
                    <span style={styles.catCardIcon}>🏺</span>
                  </div>
                  <h4 style={styles.catCardTitle}>Crafts (Applied Arts)</h4>
                  <p style={styles.catCardDesc}>Handcrafted creations including textiles, jewellery and artisan works that combine skill, tradition and functional beauty.</p>
                </div>

                <div style={styles.catCard} className="card-hover-effect">
                  <div style={styles.catCardIconWrap} className="cat-card-icon-wrap">
                    <span style={styles.catCardIcon}>🪔</span>
                  </div>
                  <h4 style={styles.catCardTitle}>Ritual &amp; Spiritual Arts</h4>
                  <p style={styles.catCardDesc}>Temple arts, devotional practices and sacred expressions performed as offerings, connecting art with spirituality and faith.</p>
                </div>

                <div style={styles.catCard} className="card-hover-effect">
                  <div style={styles.catCardIconWrap} className="cat-card-icon-wrap">
                    <span style={styles.catCardIcon}>📚</span>
                  </div>
                  <h4 style={styles.catCardTitle}>Knowledge Systems (Shastra-based)</h4>
                  <p style={styles.catCardDesc}>Structured artistic principles and ancient treatises that define the science, techniques and discipline behind Indian arts.</p>
                </div>

                <div style={styles.catCard} className="card-hover-effect">
                  <div style={styles.catCardIconWrap} className="cat-card-icon-wrap">
                    <span style={styles.catCardIcon}>⚔️</span>
                  </div>
                  <h4 style={styles.catCardTitle}>Martial Arts</h4>
                  <p style={styles.catCardDesc}>Traditional systems of physical discipline that integrate movement, control and energy, rooted in cultural and spiritual practices.</p>
                </div>

                <div style={styles.catCard} className="card-hover-effect">
                  <div style={styles.catCardIconWrap} className="cat-card-icon-wrap">
                    <span style={styles.catCardIcon}>🗣️</span>
                  </div>
                  <h4 style={styles.catCardTitle}>Communication &amp; Narrative Arts</h4>
                  <p style={styles.catCardDesc}>Storytelling traditions that convey epics, values and philosophy through narration, dialogue and expressive presentation.</p>
                </div>

                {/* <div style={{ ...styles.catCard, borderTop: '3px solid var(--color-green)' }}>
                  <div style={{ ...styles.catCardIconWrap, borderColor: 'rgba(19,136,8,0.25)', background: 'linear-gradient(135deg, rgba(19,136,8,0.1), rgba(255,153,51,0.06))' }}>
                    <span style={styles.catCardIcon}>🌐</span>
                  </div>
                  <h4 style={styles.catCardTitle}>Global Participation</h4>
                  <p style={styles.catCardDesc}><strong>Indian Artists</strong> · <strong>NRI Artists</strong> · <strong>International Artists</strong></p>
                </div> */}

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

                <div style={styles.whoCard} className="card-hover-effect">
                  <div style={styles.whoIconWrap} className="who-icon-wrap">
                    <span style={styles.whoIcon}>🧑‍🎤</span>
                  </div>
                  <h4 style={styles.whoTitle}>Individual Artists</h4>
                  <p style={styles.whoDesc}>Singers, dancers, painters, sculptors, and performers in any Indian art form.</p>
                </div>

                <div style={styles.whoCard} className="card-hover-effect">
                  <div style={styles.whoIconWrap} className="who-icon-wrap">
                    <span style={styles.whoIcon}>🏫</span>
                  </div>
                  <h4 style={styles.whoTitle}>Schools &amp; Academies</h4>
                  <p style={styles.whoDesc}>Cultural schools, gurukuls, arts academies and educational institutions.</p>
                </div>

                <div style={styles.whoCard} className="card-hover-effect">
                  <div style={styles.whoIconWrap} className="who-icon-wrap">
                    <span style={styles.whoIcon}>🏢</span>
                  </div>
                  <h4 style={styles.whoTitle}>Organizations &amp; NGOs</h4>
                  <p style={styles.whoDesc}>Registered trusts, cultural societies, and non-profit organizations.</p>
                </div>

                <div style={styles.whoCard} className="card-hover-effect">
                  <div style={styles.whoIconWrap} className="who-icon-wrap">
                    <span style={styles.whoIcon}>🏛️</span>
                  </div>
                  <h4 style={styles.whoTitle}>Government Bodies</h4>
                  <p style={styles.whoDesc}>State and central government departments running cultural programs and mass events.</p>
                </div>

                <div style={styles.whoCard} className="card-hover-effect">
                  <div style={styles.whoIconWrap} className="who-icon-wrap">
                    <span style={styles.whoIcon}>🌏</span>
                  </div>
                  <h4 style={styles.whoTitle}>NRI &amp; Global Indians</h4>
                  <p style={styles.whoDesc}>Indians living abroad who are promoting Bharatiya arts on an international stage.</p>
                </div>

                <div style={styles.whoCard} className="card-hover-effect">
                  <div style={styles.whoIconWrap} className="who-icon-wrap">
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
  container: {
    width: 'var(--container-width)',
    margin: '0 auto',
    padding: '0 1.25rem',
  },
  title: {
    fontSize: 'clamp(1.8rem, 5vw, 2.5rem)',
    fontWeight: '800',
    color: 'var(--color-navy)',
    marginBottom: '1rem'
  },
  subtitle: {
    fontSize: '1.125rem',
    color: 'var(--text-muted)',
    maxWidth: '700px',
    lineHeight: '1.5'
  },
  contentLayout: {
    display: 'flex',
    flexDirection: 'column',
    gap: 'var(--gap-fluid)',
    // padding: 'var(--section-padding) 0',
  },
  sectionCard: {
    backgroundColor: '#fff',
    padding: 'var(--gap-fluid)',
    borderRadius: '8px',
    margin: '1.25rem 0',
    border: '1px solid var(--border-color)',
    boxShadow: '0 4px 15px rgba(0,0,0,0.02)',
    position: 'relative',
    overflow: 'hidden',
  },
  sectionHeader: {
    display: 'flex',
    alignItems: 'center',
    gap: '1rem',
    marginBottom: '1.5rem',
    borderBottom: '1px solid var(--border-color)',
    paddingBottom: '1rem',
  },
  iconBoxSaffron: {
    backgroundColor: 'var(--color-saffron)',
    width: '2.8125rem', height: '2.8125rem',
    borderRadius: '8px',
    display: 'flex', alignItems: 'center', justifyContent: 'center',
    flexShrink: 0,
  },
  iconBoxNavy: {
    backgroundColor: 'var(--color-navy)',
    width: '2.8125rem', height: '2.8125rem',
    borderRadius: '8px',
    display: 'flex', alignItems: 'center', justifyContent: 'center',
    flexShrink: 0,
  },
  iconBoxGreen: {
    backgroundColor: 'var(--color-green)',
    width: '2.8125rem', height: '2.8125rem',
    borderRadius: '8px',
    display: 'flex', alignItems: 'center', justifyContent: 'center',
    flexShrink: 0,
  },
  sectionTitle: {
    fontSize: 'clamp(1.375rem, 3vw, 1.625rem)',
    color: 'var(--color-navy)',
    fontWeight: '700',
  },
  text: {
    textAlign: 'justify',
    fontSize: '1rem',
    color: 'var(--text-main)',
    lineHeight: '1.8',
  },
  whyList: {
    listStyle: 'none',
    padding: 0,
    margin: 0,
    display: 'grid',
    gridTemplateColumns: '1fr',
    gap: '1.125rem',
  },
  whyItem: {
    display: 'flex',
    alignItems: 'center',
    gap: '1rem',
    fontSize: '1rem',
    fontWeight: '600',
    color: 'var(--color-navy)',
    padding: '1rem 1.25rem',
    backgroundColor: 'rgba(255,153,51,0.04)',
    border: '1px solid rgba(255,153,51,0.15)',
    borderLeft: '4px solid var(--color-saffron)',
    borderRadius: '6px',
  },
  whyBullet: {
    color: 'var(--color-saffron)',
    fontSize: '1.2rem',
    fontWeight: '900',
    flexShrink: 0,
  },
  categoryGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))',
    gap: '1rem',
    marginTop: '1.5rem',
  },
  catGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
    gap: 'var(--gap-fluid)',
  },
  catCard: {
    backgroundColor: 'var(--color-white)',
    border: '1px solid var(--border-color)',
    borderRadius: '12px',
    padding: '1rem 1.25rem',
    textAlign: 'center',
    boxShadow: '0 4px 15px rgba(0,0,0,0.04)',
    display: 'flex',
    flexDirection: 'column',
    gap: '16px',
  },
  catCardIconWrap: {
    width: '4rem',
    height: '4rem',
    borderRadius: '50%',
    background: 'linear-gradient(135deg, rgba(255,153,51,0.12), rgba(19,136,8,0.08))',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    margin: '0 auto 1rem',
    border: '2px solid rgba(255,153,51,0.2)',
  },
  catCardIcon: {
    fontSize: '1.8rem',
  },
  catCardTitle: {
    fontSize: '1rem',
    fontWeight: '700',
    color: 'var(--color-navy)',
    marginBottom: '0.5rem',
  },
  catCardDesc: {
    fontSize: '0.875rem',
    color: 'var(--text-muted)',
    lineHeight: '1.6',
    margin: 0,
  },
  whoGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
    gap: 'var(--gap-fluid)',
    marginTop: '1.5rem',
    marginBottom: '2rem',
  },
  whoCard: {
    backgroundColor: 'var(--color-white)',
    border: '1px solid var(--border-color)',
    borderRadius: '12px',
    padding: '1.5rem 1.25rem',
    textAlign: 'center',
    boxShadow: '0 4px 15px rgba(0,0,0,0.04)',
    display: 'flex',
    flexDirection: 'column',
    gap: '16px',
  },
  whoIconWrap: {
    width: '4rem',
    height: '4rem',
    borderRadius: '50%',
    background: 'linear-gradient(135deg, rgba(255,153,51,0.12), rgba(19,136,8,0.08))',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    margin: '0 auto 1rem',
    border: '2px solid rgba(255,153,51,0.2)',
  },
  whoIcon: {
    fontSize: '1.75rem',
  },
  whoTitle: {
    fontSize: '1rem',
    fontWeight: '700',
    color: 'var(--color-navy)',
    marginBottom: '0.5rem',
  },
  whoDesc: {
    fontSize: '0.875rem',
    color: 'var(--text-muted)',
    lineHeight: '1.6',
    margin: 0,
  },
  whoNote: {
    backgroundColor: 'var(--color-navy-light)',
    borderLeft: '4px solid var(--color-navy)',
    borderRadius: '6px',
    padding: '1rem 1.25rem',
    fontSize: '0.9rem',
    color: 'var(--color-navy)',
    lineHeight: '1.6',
  },
  catCardDesc: {
    fontSize: '13px',
    color: 'var(--text-muted)',
    lineHeight: '1.6',
    margin: 0,
  },
};
