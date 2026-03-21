"use client";

import { Calendar, MapPin, Clock } from "lucide-react";

export default function UpcomingPage() {
  return (
    <div style={styles.page}>
      {/* 1. Hero Section for Sarvam Shabdam */}
      <section style={styles.heroSection}>
        <div style={styles.heroOverlay}></div>
        <div style={styles.heroContent}>
          {/* <h1 style={styles.heroTitle}>Sarvam Shabdam</h1> */}

          <div style={styles.heroSubtitleWrap}>
            {/* <p style={styles.heroItalic}>Everything is Sound. Everything Dances.</p> */}
            <p style={styles.heroSubText}>
              <br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br />
              {/* The Pulse of Expression<br /> */}
              {/* A Record-Breaking Bharatanatyam Show */}
            </p>
          </div>

          <div style={styles.heroInfoRow}>
            <span>July 4, 2026</span>
            <span style={styles.divider}>|</span>
            <span>Thanjavur</span>
            <span style={styles.divider}>|</span>
            <span>3 PM – 7 PM</span>
          </div>

          <div style={styles.heroActions}>
            <button style={styles.joinBtn}>Join Now</button>
            <button style={styles.exploreBtn}>Explore Concept</button>
          </div>
        </div>
      </section>

      {/* 2. Redesigned Event Details Section */}
      <section style={styles.detailsSection}>
        <div style={styles.container}>
          <h2 style={styles.detailsHeading}>Event Details</h2>
          <div style={styles.detailsGrid}>
            <div style={{ ...styles.detailCard, borderTop: '5px solid var(--color-saffron)' }}>
              <div style={styles.detailIconWrap}>
                <MapPin size={32} color="var(--color-saffron)" />
              </div>
              <h3 style={styles.detailTitle}>Venue</h3>
              <p style={styles.detailText}>AVVM Pushpam College</p>
              <p style={styles.detailSubText}>Poondi, Thanjavur</p>
            </div>

            <div style={{ ...styles.detailCard, borderTop: '5px solid var(--color-navy)' }}>
              <div style={styles.detailIconWrap}>
                <Calendar size={32} color="var(--color-navy)" />
              </div>
              <h3 style={styles.detailTitle}>Date</h3>
              <p style={styles.detailText}>July 4, 2026</p>
              <p style={styles.detailSubText}>Saturday</p>
            </div>

            <div style={{ ...styles.detailCard, borderTop: '5px solid var(--color-green)' }}>
              <div style={styles.detailIconWrap}>
                <Clock size={32} color="var(--color-green)" />
              </div>
              <h3 style={styles.detailTitle}>Time</h3>
              <p style={styles.detailText}>3:00 PM – 7:00 PM</p>
              <p style={styles.detailSubText}>Production Window</p>
            </div>
          </div>
        </div>
      </section>

      <div style={styles.container}>
        <section style={styles.aboutSection}>
          <h2 style={styles.sectionHeading}>What is Sarvam Shabdam?</h2>
          <div style={styles.aboutContent}>
            <p style={styles.aboutText}>
              <strong>Sarvam Shabdam</strong> is a deeply conceptualized artistic creation rooted in the essence of Indian philosophy and psychology.
              It is built on the powerful idea that everything in the universe is sound. Every form, every movement, every existence originates from vibration. This primal vibration - Nādam - is the source of all creation.
              <br /><br />
              Every element in the universe responds to sound, and that response becomes movement. That movement becomes expression. And that expression becomes dance.
              In this vision, every moment is dance, because every moment is born from sound.
              Sarvam Shabdam brings forth this eternal truth - that sound is the origin of everything, and this sound is the pulse of all expression.
              <br /><br />
              For dance, music is not an accompaniment - it is the source. From sound emerges rhythm, from rhythm emerges movement, and from movement emerges art.
              Every human being carries within them a rhythm, a pulse, a subtle connection to the universal sound. Sarvam Shabdam is an attempt to awaken that connection - to remind us that we are all part of this cosmic vibration.
            </p>
          </div>
        </section>

        <section style={styles.visionSection}>
          <h2 style={styles.sectionHeading}>Record-Breaking Vision</h2>
          <div style={styles.visionContent}>
            <p style={styles.aboutText}>
              <strong>Sarvam Shabdam</strong> is envisioned as a record-breaking Bharatanatyam odyssey, bringing together thousands of artists in a powerful expression of unity.
              This is not merely a performance.
              This is not just about creating history.
              It is about reviving a way of experiencing life - a return to the ancient Indian understanding that sound has the power to transform, to heal, and to elevate human consciousness.
              Through this large-scale cultural movement, we aim to reconnect people with a deeper truth - that art is not separate from life, but is a reflection of the universal rhythm that governs existence.
            </p>
            <p style={styles.highlightText}>
              This is not just an event - It is a collective awakening through art.
            </p>
          </div>
        </section>

        <section style={styles.mattersSection}>
          <h2 style={styles.sectionHeading}>Why This Matters</h2>
          <div style={styles.mattersContent}>
            <p style={styles.aboutText}>
              In today’s fast-paced world, we are constantly surrounded by sound - but rarely do we truly experience it.
              Sarvam Shabdam seeks to change that. It is an invitation to pause, to listen, and to reconnect with the spiritual depth of Indian culture, rooted in the sacred concept of Nādam.
              <br /><br />
              Every sound carries the potential to create a moment of bliss, awareness, and transformation.
              Through this initiative, every performer becomes a medium, and every audience member becomes a participant in a shared experience - one that goes beyond performance and enters the realm of the spiritual and the eternal.
              <br /><br />
              Sarvam Shabdam is not just about witnessing art. It is about feeling the source of art itself. It is about returning to the origin.
            </p>
            <div style={styles.quoteCard}>
              <p style={styles.quoteText}>“Where sound becomes expression, and expression becomes life.”</p>
            </div>
          </div>
        </section>

      </div>
    </div>
  );
}

const styles = {
  page: {
    backgroundColor: 'var(--bg-color)',
    minHeight: '100vh',
    paddingBottom: '60px'
  },
  heroSection: {
    position: 'relative',
    height: '600px', // Increased height slightly
    backgroundImage: 'url("/S1.png")',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    color: '#fff',
    textAlign: 'center',
  },
  heroOverlay: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'rgba(0, 0, 80, 0.4)', // Subtle navy overlay for readability
    zIndex: 1,
  },
  heroContent: {
    position: 'relative',
    zIndex: 2,
    maxWidth: '800px',
    padding: '0 20px',
  },
  heroTitle: {
    fontSize: '56px',
    fontWeight: '900',
    color: 'var(--color-saffron)',
    marginBottom: '20px',
    textShadow: '0 2px 10px rgba(0,0,0,0.3)',
  },
  heroSubtitleWrap: {
    marginBottom: '20px',
  },
  heroItalic: {
    fontSize: '20px',
    fontStyle: 'italic',
    color: 'rgba(255,255,255,0.9)',
    marginBottom: '10px',
  },
  heroSubText: {
    fontSize: '18px',
    fontWeight: '600',
    letterSpacing: '1px',
    lineHeight: '1.5',
    textTransform: 'uppercase',
  },
  heroInfoRow: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: '15px',
    fontSize: '18px',
    fontWeight: '700',
    marginBottom: '20px',
    backgroundColor: 'rgba(255,255,255,0.1)',
    padding: '10px 20px',
    borderRadius: '50px',
    backdropFilter: 'blur(5px)',
    width: 'fit-content',
    margin: '0 auto 40px',
  },
  divider: {
    color: 'var(--color-saffron)',
    fontWeight: '900',
  },
  heroActions: {
    display: 'flex',
    justifyContent: 'center',
    gap: '20px',
  },
  joinBtn: {
    backgroundColor: 'var(--color-saffron)',
    color: '#fff',
    border: 'none',
    padding: '12px 30px',
    borderRadius: '4px',
    fontSize: '16px',
    fontWeight: '700',
    cursor: 'pointer',
    boxShadow: '0 4px 15px rgba(255,153,51,0.3)',
  },
  exploreBtn: {
    backgroundColor: 'transparent',
    color: '#fff',
    border: '2px solid #fff',
    padding: '10px 28px',
    borderRadius: '4px',
    fontSize: '16px',
    fontWeight: '700',
    cursor: 'pointer',
    transition: 'all 0.2s ease',
  },
  detailsSection: {
    backgroundColor: '#f8f9fa',
    padding: '80px 0',
    borderBottom: '1px solid var(--border-color)',
  },
  detailsHeading: {
    fontSize: '32px',
    fontWeight: '800',
    color: 'var(--color-navy)',
    textAlign: 'center',
    marginBottom: '50px',
    position: 'relative',
  },
  detailsGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
    gap: '30px',
    maxWidth: '1200px',
    margin: '0 auto',
  },
  detailCard: {
    backgroundColor: '#fff',
    padding: '40px 30px',
    textAlign: 'center',
    borderRadius: '12px',
    boxShadow: '0 10px 30px rgba(0,0,0,0.05)',
    transition: 'transform 0.3s ease',
  },
  detailIconWrap: {
    width: '70px',
    height: '70px',
    borderRadius: '50%',
    backgroundColor: '#f8f9fa',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    margin: '0 auto 25px',
  },
  detailTitle: {
    fontSize: '22px',
    fontWeight: '800',
    color: 'var(--color-navy)',
    marginBottom: '15px',
  },
  detailText: {
    fontSize: '18px',
    fontWeight: '700',
    color: 'var(--text-main)',
    margin: '5px 0',
  },
  detailSubText: {
    fontSize: '16px',
    color: 'var(--text-light)',
    margin: '5px 0',
  },
  container: {
    maxWidth: '1000px',
    margin: '0 auto',
    padding: '0 20px'
  },
  sectionHeading: {
    fontSize: '32px',
    fontWeight: '800',
    color: 'var(--color-navy)',
    marginBottom: '30px',
    textAlign: 'center',
    position: 'relative',
    paddingBottom: '15px',
  },
  aboutSection: {
    padding: '60px 0',
    textAlign: 'center',
  },
  aboutContent: {
    textAlign: 'justify',
    maxWidth: '800px',
    margin: '0 auto',
    backgroundColor: 'var(--color-white)',
    padding: '40px',
    borderRadius: '12px',
    boxShadow: '0 4px 20px rgba(0,0,0,0.05)',
    borderLeft: '5px solid var(--color-saffron)',
  },
  aboutText: {
    fontSize: '18px',
    color: 'var(--text-main)',
    lineHeight: '1.8',
    marginBottom: '20px',
    textAlign: 'justify',
  },
  visionSection: {
    padding: '40px 0',
  },
  visionContent: {
    maxWidth: '800px',
    margin: '0 auto',
    backgroundColor: 'var(--color-navy-light)',
    padding: '40px',
    borderRadius: '12px',
    borderLeft: '5px solid var(--color-navy)',
  },
  highlightText: {
    fontSize: '22px',
    fontWeight: '700',
    color: 'var(--color-navy)',
    fontStyle: 'italic',
    textAlign: 'center',
    marginTop: '20px',
  },
  mattersSection: {
    padding: '40px 0',
  },
  mattersContent: {
    maxWidth: '800px',
    margin: '0 auto',
    backgroundColor: 'var(--color-green-light)',
    padding: '40px',
    borderRadius: '12px',
    borderLeft: '5px solid var(--color-green)',
  },
  quoteCard: {
    marginTop: '30px',
    padding: '30px',
    backgroundColor: 'var(--color-white)',
    borderRadius: '8px',
    boxShadow: '0 4px 10px rgba(0,0,0,0.03)',
    textAlign: 'center',
  },
  quoteText: {
    fontSize: '24px',
    fontFamily: 'Merriweather, serif',
    fontWeight: '700',
    color: 'var(--color-saffron)',
    fontStyle: 'italic',
    margin: 0,
  },
  card: {
    backgroundColor: '#fff',
    padding: '30px',
    borderRadius: '12px',
    border: '1px solid var(--border-color)',
    boxShadow: '0 4px 15px rgba(0,0,0,0.05)',
    position: 'relative',
    overflow: 'hidden',
  },
  dateBadge: {
    position: 'absolute',
    top: 0,
    right: 0,
    backgroundColor: 'var(--color-saffron)',
    color: '#fff',
    padding: '8px 20px',
    fontSize: '12px',
    fontWeight: 'bold',
    borderBottomLeftRadius: '12px'
  },
  cardTitle: {
    fontSize: '22px',
    color: 'var(--color-navy)',
    marginBottom: '15px',
    marginTop: '10px',
    fontWeight: '800'
  },
  cardText: {
    fontSize: '15px',
    color: 'var(--text-main)',
    lineHeight: '1.7',
    marginBottom: '10px'
  }
};
