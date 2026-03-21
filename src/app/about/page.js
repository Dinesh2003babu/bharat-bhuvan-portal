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

              <div style={styles.catGrid}>

                <div style={styles.catCard}>
                  <div style={styles.catCardIconWrap}>
                    <span style={styles.catCardIcon}>🎭</span>
                  </div>
                  <h4 style={styles.catCardTitle}>Performing Arts</h4>
                  <p style={styles.catCardDesc}>Dance, music and theatre traditions that express emotions, stories and devotion through movement, rhythm and performance.</p>
                </div>

                <div style={styles.catCard}>
                  <div style={styles.catCardIconWrap}>
                    <span style={styles.catCardIcon}>🎨</span>
                  </div>
                  <h4 style={styles.catCardTitle}>Visual Arts</h4>
                  <p style={styles.catCardDesc}>Paintings, sculpture and architectural creations that reflect India's aesthetic excellence, symbolism and craftsmanship.</p>
                </div>

                <div style={styles.catCard}>
                  <div style={styles.catCardIconWrap}>
                    <span style={styles.catCardIcon}>📜</span>
                  </div>
                  <h4 style={styles.catCardTitle}>Literary Arts</h4>
                  <p style={styles.catCardDesc}>Sacred texts, poetry, epics and writings that preserve knowledge, philosophy and cultural narratives across generations.</p>
                </div>

                <div style={styles.catCard}>
                  <div style={styles.catCardIconWrap}>
                    <span style={styles.catCardIcon}>🌺</span>
                  </div>
                  <h4 style={styles.catCardTitle}>Folk &amp; Tribal Arts</h4>
                  <p style={styles.catCardDesc}>Indigenous art forms rooted in local traditions, festivals and daily life, reflecting the cultural diversity of communities.</p>
                </div>

                <div style={styles.catCard}>
                  <div style={styles.catCardIconWrap}>
                    <span style={styles.catCardIcon}>🏺</span>
                  </div>
                  <h4 style={styles.catCardTitle}>Crafts (Applied Arts)</h4>
                  <p style={styles.catCardDesc}>Handcrafted creations including textiles, jewellery and artisan works that combine skill, tradition and functional beauty.</p>
                </div>

                <div style={styles.catCard}>
                  <div style={styles.catCardIconWrap}>
                    <span style={styles.catCardIcon}>🪔</span>
                  </div>
                  <h4 style={styles.catCardTitle}>Ritual &amp; Spiritual Arts</h4>
                  <p style={styles.catCardDesc}>Temple arts, devotional practices and sacred expressions performed as offerings, connecting art with spirituality and faith.</p>
                </div>

                <div style={styles.catCard}>
                  <div style={styles.catCardIconWrap}>
                    <span style={styles.catCardIcon}>📚</span>
                  </div>
                  <h4 style={styles.catCardTitle}>Knowledge Systems (Shastra-based)</h4>
                  <p style={styles.catCardDesc}>Structured artistic principles and ancient treatises that define the science, techniques and discipline behind Indian arts.</p>
                </div>

                <div style={styles.catCard}>
                  <div style={styles.catCardIconWrap}>
                    <span style={styles.catCardIcon}>⚔️</span>
                  </div>
                  <h4 style={styles.catCardTitle}>Martial Arts</h4>
                  <p style={styles.catCardDesc}>Traditional systems of physical discipline that integrate movement, control and energy, rooted in cultural and spiritual practices.</p>
                </div>

                <div style={styles.catCard}>
                  <div style={styles.catCardIconWrap}>
                    <span style={styles.catCardIcon}>🗣️</span>
                  </div>
                  <h4 style={styles.catCardTitle}>Communication &amp; Narrative Arts</h4>
                  <p style={styles.catCardDesc}>Storytelling traditions that convey epics, values and philosophy through narration, dialogue and expressive presentation.</p>
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
    marginTop: '30px',
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
    textAlign: 'justify',
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
  /* ── Record Categories – own keys, same values as who* for now ── */
  catGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fill, minmax(260px, 1fr))',
    gap: '20px',
    marginBottom: '30px',
  },
  catCard: {
    backgroundColor: 'var(--color-white)',
    borderWidth: '1px',
    borderStyle: 'solid',
    borderColor: 'var(--border-color)',
    borderRadius: '12px',
    padding: '24px 20px',
    textAlign: 'center',
    boxShadow: '0 4px 15px rgba(0,0,0,0.04)',
    transition: 'transform 0.2s ease, box-shadow 0.2s ease',
  },
  catCardIconWrap: {
    width: '64px',
    height: '64px',
    borderRadius: '50%',
    background: 'linear-gradient(135deg, rgba(255,153,51,0.12), rgba(19,136,8,0.08))',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    margin: '0 auto 16px',
    borderWidth: '2px',
    borderStyle: 'solid',
    borderColor: 'rgba(255,153,51,0.2)',
  },
  catCardIcon: {
    fontSize: '28px',
  },
  catCardTitle: {
    fontSize: '16px',
    fontWeight: '700',
    color: 'var(--color-navy)',
    marginBottom: '8px',
  },
  catCardDesc: {
    fontSize: '13px',
    color: 'var(--text-muted)',
    lineHeight: '1.6',
    margin: 0,
  },
};
