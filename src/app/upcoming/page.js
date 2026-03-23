"use client";

import { Calendar, MapPin, Clock } from "lucide-react";
import Link from "next/link";

export default function UpcomingPage() {
  return (
    <div style={styles.page}>
      {/* 1. Hero Section for Sarvam Shabdam */}
      <section style={styles.heroSection} className="upcoming-hero">
        <div style={styles.heroOverlay}></div>
        <div style={styles.heroContent} className="upcoming-hero-content">
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
            <Link href="/apply">
              <button style={styles.joinBtn} className="btn-join-hover">Join Now</button>
            </Link>
            <button style={styles.exploreBtn} className="btn-explore-hover" onClick={() => {
              const el = document.getElementById('concept');
              if (el) el.scrollIntoView({ behavior: 'smooth' });
            }}>
              Explore Concept
            </button>
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
        <section id="concept" style={styles.aboutSection}>
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
    // paddingBottom: '60px'
  },
  heroSection: {
    position: 'relative',
    height: '37.5rem', // Increased height slightly
    backgroundImage: 'url("/S1.webp")',
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
    // backgroundColor: 'rgba(0, 0, 80, 0.4)', // Subtle navy overlay for readability
    zIndex: 1,
  },
  heroContent: {
    position: 'relative',
    zIndex: 2,
    maxWidth: '50rem',
    padding: '0 1.25rem',
  },
  heroTitle: {
    fontSize: '3.5rem',
    fontWeight: '900',
    color: 'var(--color-saffron)',
    marginBottom: '1.25rem',
    textShadow: '0 2px 10px rgba(0,0,0,0.3)',
  },
  heroSubtitleWrap: {
    marginBottom: '1.25rem',
  },
  heroItalic: {
    fontSize: '1.25rem',
    fontStyle: 'italic',
    color: 'rgba(255,255,255,0.9)',
    marginBottom: '0.625rem',
  },
  heroSubText: {
    fontSize: '1.125rem',
    fontWeight: '600',
    letterSpacing: '1px',
    lineHeight: '1.5',
    textTransform: 'uppercase',
  },
  heroInfoRow: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: '0.9375rem',
    fontSize: '1.125rem',
    fontWeight: '700',
    marginBottom: '1.25rem',
    backgroundColor: 'rgba(255,255,255,0.1)',
    padding: '0.625rem 1.25rem',
    borderRadius: '3.125rem',
    backdropFilter: 'blur(0.3125rem)',
    width: 'fit-content',
    margin: '0 auto 2.5rem',
  },
  divider: {
    color: 'var(--color-saffron)',
    fontWeight: '900',
  },
  heroActions: {
    display: 'flex',
    justifyContent: 'center',
    gap: '1.25rem',
  },
  joinBtn: {
    backgroundColor: 'var(--color-saffron)',
    color: '#fff',
    border: 'none',
    padding: '0.75rem 1.875rem',
    borderRadius: '0.25rem',
    fontSize: '1rem',
    fontWeight: '700',
    cursor: 'pointer',
    boxShadow: '0 0.25rem 0.9375rem rgba(255,153,51,0.3)',
  },
  exploreBtn: {
    backgroundColor: 'transparent',
    color: '#fff',
    border: '0.125rem solid #fff',
    padding: '0.625rem 1.75rem',
    borderRadius: '0.25rem',
    fontSize: '1rem',
    fontWeight: '700',
    cursor: 'pointer',
    transition: 'all 0.2s ease',
  },
  detailsSection: {
    backgroundColor: '#f8f9fa',
    padding: '1.5rem 0',
    borderBottom: '1px solid var(--border-color)',
  },
  detailsHeading: {
    fontSize: '2rem',
    fontWeight: '800',
    color: 'var(--color-navy)',
    textAlign: 'center',
    marginBottom: '3.125rem',
    position: 'relative',
  },
  detailsGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(18.75rem, 1fr))',
    gap: '1.875rem',
    maxWidth: '75rem',
    margin: '0 auto',
  },
  detailCard: {
    backgroundColor: '#fff',
    padding: '2.5rem 1.875rem',
    textAlign: 'center',
    borderRadius: '0.75rem',
    boxShadow: '0 0.625rem 1.875rem rgba(0,0,0,0.05)',
    transition: 'transform 0.3s ease',
  },
  detailIconWrap: {
    width: '4.375rem',
    height: '4.375rem',
    borderRadius: '50%',
    backgroundColor: '#f8f9fa',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    margin: '0 auto 1.5625rem',
  },
  detailTitle: {
    fontSize: '1.375rem',
    fontWeight: '800',
    color: 'var(--color-navy)',
    marginBottom: '1rem',
  },
  detailText: {
    fontSize: '1rem',
    fontWeight: '700',
    color: 'var(--text-main)',
    margin: '0.3125rem 0',
  },
  detailSubText: {
    fontSize: '1rem',
    color: 'var(--text-light)',
    margin: '0.3125rem 0',
  },
  container: {
    maxWidth: '1000px',
    margin: '0 auto',
    padding: '0 1.25rem'
  },
  sectionHeading: {
    fontSize: '2rem',
    fontWeight: '800',
    color: 'var(--color-navy)',
    marginBottom: '1.875rem',
    textAlign: 'center',
    position: 'relative',
    paddingBottom: '0.9375rem',
  },
  aboutSection: {
    padding: '1.5rem 0',
    textAlign: 'center',
  },
  aboutContent: {
    textAlign: 'justify',
    maxWidth: '800px',
    margin: '0 auto',
    backgroundColor: 'var(--color-saffron-light)',
    padding: '2.5rem',
    borderRadius: '0.75rem',
    boxShadow: '0 0.25rem 1.25rem rgba(0,0,0,0.05)',
    borderLeft: '0.3125rem solid var(--color-saffron)',
  },
  aboutText: {
    fontSize: '1rem',
    color: 'var(--text-main)',
    lineHeight: '1.8',
    marginBottom: '1.25rem',
    textAlign: 'justify',
  },
  visionSection: {
    padding: '1.5rem 0',
  },
  visionContent: {
    maxWidth: '50rem',
    margin: '0 auto',
    backgroundColor: 'var(--color-navy-light)',
    padding: '2.5rem',
    borderRadius: '0.75rem',
    borderLeft: '0.3125rem solid var(--color-navy)',
  },
  highlightText: {
    fontSize: '1.375rem',
    fontWeight: '700',
    color: 'var(--color-navy)',
    fontStyle: 'italic',
    textAlign: 'center',
    marginTop: '1.25rem',
  },
  mattersSection: {
    padding: '1.5rem 0',
  },
  mattersContent: {
    maxWidth: '50rem',
    margin: '0 auto',
    backgroundColor: 'var(--color-green-light)',
    padding: '2.5rem',
    borderRadius: '0.75rem',
    borderLeft: '0.3125rem solid var(--color-green)',
  },
  quoteCard: {
    marginTop: '1.875rem',
    padding: '1.875rem',
    backgroundColor: 'var(--color-white)',
    borderRadius: '0.5rem',
    boxShadow: '0 0.25rem 0.625rem rgba(0,0,0,0.03)',
    textAlign: 'center',
  },
  quoteText: {
    fontSize: '1.5rem',
    fontFamily: 'Merriweather, serif',
    fontWeight: '700',
    color: 'var(--color-saffron)',
    fontStyle: 'italic',
    margin: 0,
  },
  card: {
    backgroundColor: '#fff',
    padding: '1.875rem',
    borderRadius: '0.5rem',
    border: '1px solid var(--border-color)',
    boxShadow: '0 0.25rem 0.9375rem rgba(0,0,0,0.05)',
    position: 'relative',
    overflow: 'hidden',
  },
  dateBadge: {
    position: 'absolute',
    top: 0,
    right: 0,
    backgroundColor: 'var(--color-saffron)',
    color: '#fff',
    padding: '0.5rem 1.25rem',
    fontSize: '0.75rem',
    fontWeight: 'bold',
    borderBottomLeftRadius: '0.75rem'
  },
  cardTitle: {
    fontSize: '1.375rem',
    color: 'var(--color-navy)',
    marginBottom: '0.9375rem',
    marginTop: '0.625rem',
    fontWeight: '800'
  },
  cardText: {
    fontSize: '1rem',
    color: 'var(--text-main)',
    lineHeight: '1.7',
    marginBottom: '0.625rem'
  }
};
