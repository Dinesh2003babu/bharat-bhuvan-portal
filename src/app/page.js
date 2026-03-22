"use client";

import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { Award, ShieldCheck, Users, Palette, Landmark, Globe, Calendar, MapPin, TimerIcon } from "lucide-react";

const AnimatedCounter = ({ end, suffix = "", prefix = "", duration = 2000 }) => {
  const [count, setCount] = useState(0);
  const [hasAnimated, setHasAnimated] = useState(false);
  const countRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !hasAnimated) {
          setHasAnimated(true);
          let startRef = null;
          const step = (timestamp) => {
            if (!startRef) startRef = timestamp;
            const progress = Math.min((timestamp - startRef) / duration, 1);
            // Ease out quad for smoother slow down
            const easeOutProgress = progress * (2 - progress);
            setCount(Math.floor(easeOutProgress * end));
            if (progress < 1) {
              window.requestAnimationFrame(step);
            } else {
              setCount(end);
            }
          };
          window.requestAnimationFrame(step);
        }
      },
      { threshold: 0.1 }
    );

    if (countRef.current) observer.observe(countRef.current);
    return () => observer.disconnect();
  }, [end, duration, hasAnimated]);

  return <span ref={countRef}>{prefix}{count.toLocaleString()}{suffix}</span>;
};

export default function Home() {
  return (
    <div style={styles.pageContainer}>
      {/* HERO SECTION */}
      <section style={styles.hero}>
        <div style={styles.heroOverlay}></div>
        <div style={styles.heroContainer} className="container-fluid hero-container">
          {/* Image Left */}
          <div style={styles.heroLeft} className="hero-left">
            <img src="/BBBR_Logo.png" alt="Bharat Bhuvan Hero" style={styles.heroImage} className="hero-image" />
          </div>

          {/* Text Right */}
          <div style={styles.heroRight} className="hero-right">
            <h3 style={styles.welcomeheroTitle} className="hero-title">
              <p style={styles.welcomeheroTitle} className="welcome-hero-title">WELCOME TO</p>
              <p style={styles.heroTitle} className="main-hero-title">BHARAT BHUVAN</p>
              <p style={styles.subheroTitle} className="sub-hero-title">BOOK OF RECORDS</p>
            </h3>
            <p style={styles.heroSubtitle} className="hero-subtitle-mobile">
              <b>A National Platform for Recognizing Indian Arts and Cultural Heritage</b>
            </p>
            <div style={styles.heroActions}>
              <Link href="/apply" style={styles.primaryBtn} className="hover-saffron-btn">
                Apply for a New Record
              </Link>
              {/* <Link href="/records" style={styles.secondaryBtn}>
                Search the Database
              </Link> */}
            </div>
          </div>
        </div>
      </section>

      {/* MISSION & VISION SECTION */}
      <section style={styles.missionVisionSection}>
        <div style={styles.container} className="container-fluid">
          <div style={styles.mvGrid} className="mv-grid">
            <div style={styles.mvCard} className="mv-card">
              <div style={styles.mvIconSaffron}>
                <Award size={32} color="#fff" />
              </div>
              <h2 style={styles.mvTitle}>Our Mission</h2>
              <p style={styles.mvText}>
                To promote, preserve, and elevate Indian arts and cultural heritage worldwide by creating meaningful platforms for record-setting achievements in the arts. We are committed to recognizing artistic excellence, encouraging large-scale cultural participation, and ensuring that the spirit of Indian traditions reaches a global audience.
              </p>
            </div>
            <div style={styles.mvCard} className="mv-card">
              <div style={styles.mvIconGreen}>
                <ShieldCheck size={32} color="#fff" />
              </div>
              <h2 style={styles.mvTitle}>Our Vision</h2>
              <p style={styles.mvText}>
                To take the richness of Indian arts and cultural heritage to every corner of the world, establishing Bharat as a global symbol of artistic excellence. We strive to build a cultural movement where Indian art forms inspire, unite, and connect people across nations.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* OUR UNIQUENESS SECTION */}
      <section style={styles.uniquenessSection}>
        <div style={styles.container} className="container-fluid">
          <div style={styles.sectionHeaderUniqueness}>
            <h2 style={styles.uniquenessTitle}>Our Uniqueness</h2>
            <p style={styles.uniquenessSubtitle}>
              Bharat Bhuvan Book of Records is uniquely dedicated to Indian arts and cultural heritage. Unlike general record platforms, we focus exclusively on Bharatiya art forms and traditions, ensuring authenticity and global promotion of Indian culture.
            </p>
          </div>
          <div style={styles.uniquenessGrid} className="uniqueness-grid">
            <div style={styles.uniquenessCard}>
              <div style={styles.mvIconSaffron}>
                <Palette size={32} color="#fff" />
              </div>
              <h3 style={styles.uniquenessCardTitle}>Focused on Indian Arts</h3>
            </div>
            <div style={styles.uniquenessCard}>
              <div style={styles.mvIconNavy}>
                <Landmark size={32} color="#fff" />
              </div>
              <h3 style={styles.uniquenessCardTitle}>Rooted in Cultural Heritage</h3>
            </div>
            <div style={styles.uniquenessCard}>
              <div style={styles.mvIconGreen}>
                <Globe size={32} color="#fff" />
              </div>
              <h3 style={styles.uniquenessCardTitle}>Promoting Bharat to the World</h3>
            </div>
          </div>
        </div>
      </section>

      {/* UPCOMING EVENT SECTION */}
      <section style={styles.upcomingSection}>
        <div style={styles.container} className="container-fluid">
          <h2 style={styles.upcomingMainTitle}>Upcoming Event</h2>
          <div style={styles.upcomingFlex} className="upcoming-flex">
            <div style={styles.upcomingImageWrapper} className="upcoming-img-wrap">
              <img src="/Sarvam_Shabdam_3.png" alt="Sarvam Shabdam" style={styles.upcomingImage} className="upcoming-img" />
            </div>
            <div style={styles.upcomingContent} className="upcoming-content">
              <h3 style={styles.upcomingEventTitle}>SARVAM SHABDAM</h3>

              <div style={styles.upcomingDetails}>
                <div style={styles.detailItem}>
                  <Calendar size={20} color="var(--color-saffron)" />
                  <span>July 04, 2026</span>
                </div>
                <div style={styles.detailItem}>
                  <TimerIcon size={20} color="var(--color-navy)" />
                  <span>03:00 PM to 09:00 PM</span>
                </div>
                <div style={styles.detailItem}>
                  <MapPin size={20} color="var(--color-green)" />
                  <span>AVVM Pushpam College, Poondi, Thanjavur</span>
                </div>
              </div>

              <p style={styles.upcomingEventDesc}>
                The Pulse of Expression <br />A Record Breaking Bharathanatyam Odyssey
              </p>
              <Link href="/upcoming" style={styles.upcomingBtn} className="hover-saffron-btn">
                View Details
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* BE A PART OF HISTORY SECTION */}
      <section style={styles.historySection}>
        <div style={styles.container} className="container-fluid">
          <div style={styles.historyCard}>
            <h2 style={styles.historyTitle}>Be a Part of History</h2>
            <p style={styles.historySubtitle}>
              Showcase your talent. Set a record. Represent Bharat globally.
            </p>
            <Link href="/apply" style={styles.historyBtn} className="hover-saffron-btn">
              Apply Now
            </Link>
          </div>
        </div>
      </section>

      {/* STATISTICS SECTION */}
      <section style={styles.statsSection}>
        <div style={styles.container} className="container-fluid">
          <div style={styles.statsGrid} className="stats-grid">
            <div style={styles.statCard}>
              <Users size={40} color="var(--color-saffron)" style={styles.statIcon} />
              <h2 style={{ ...styles.statNumber, fontSize: '26px', letterSpacing: '0px' }}>Professional</h2>
              <p style={styles.statLabel}>Adjudication Process</p>
            </div>
            <div style={styles.statCard}>
              <Award size={40} color="var(--color-navy)" style={styles.statIcon} />
              <h2 style={{ ...styles.statNumber, fontSize: '28px', letterSpacing: '0px' }}>ISO</h2>
              <p style={styles.statLabel}>Certified Organization</p>
            </div>
            <div style={styles.statCard}>
              <ShieldCheck size={40} color="var(--color-green)" style={styles.statIcon} />
              <h2 style={styles.statNumber}><AnimatedCounter end={100} suffix="%" /></h2>
              <p style={styles.statLabel}>Verified Certification</p>
            </div>
          </div>
        </div>
      </section>

      {/* RECENT RECORDS SECTION */}
      {/* 
      <section style={styles.recordsSection}>
        <div style={styles.container}>
          <div style={styles.sectionHeader}>
            <h2 style={styles.sectionTitle}>Recently Authenticated Records</h2>
            <div style={styles.titleUnderline}></div>
          </div>

          <div style={styles.recordsGrid}>
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
      </section> */}

      {/* HOW TO APPLY (MINI BANNER) */}
      {/* 
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
       */}
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
    padding: '60px 20px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    background: 'var(--gradient-tricolor-subtle)',
    borderBottom: '1px solid var(--border-color)',
    overflow: 'hidden',
    minHeight: '500px',
  },
  heroOverlay: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundImage: 'radial-gradient(circle at center, transparent 0%, rgba(0,0,0,0.02) 100%)',
  },
  heroContainer: {
    position: 'relative',
    zIndex: 1,
    maxWidth: '1200px',
    width: '100%',
    display: 'flex',
    alignItems: 'center',
    gap: '50px',
    flexWrap: 'wrap',
  },
  heroLeft: {
    flex: '1 1 400px',
    display: 'flex',
    justifyContent: 'center',
  },
  heroImage: {
    width: '100%',
    maxHeight: '500px',
    maxWidth: '500px',
    borderRadius: '12px',
    // boxShadow: '0 8px 24px rgba(0,0,0,0.1)',
    objectFit: 'cover',
  },
  heroRight: {
    flex: '1 1 500px',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    textAlign: 'center',
  },
  welcomeheroTitle: {
    fontSize: '30px',
    // lineHeight: '1.2',
    color: 'var(--color-navy)',
    fontWeight: '900',
    // marginBottom: '20px',
    letterSpacing: '1px',
    textShadow: '0 2px 4px rgba(0,0,0,0.05)',
  },
  heroTitle: {
    fontSize: '50px',
    lineHeight: '1.2',
    color: 'var(--color-navy)',
    fontWeight: '900',
    // marginBottom: '20px',
    letterSpacing: '1px',
    textShadow: '0 2px 4px rgba(0,0,0,0.05)',
  },
  subheroTitle: {
    fontSize: '30px',
    // lineHeight: '1.2',
    color: 'var(--color-navy)',
    fontWeight: '900',
    marginBottom: '20px',
    letterSpacing: '1px',
    textShadow: '0 2px 4px rgba(0,0,0,0.05)',
  },
  heroSubtitle: {
    fontFamily: 'Serif',
    fontSize: '20px',
    color: 'var(--text-main)',
    marginBottom: '40px',
    fontWeight: '400',
  },
  heroActions: {
    display: 'flex',
    gap: '20px',
    justifyContent: 'center',
    width: '100%',
    flexWrap: 'wrap',
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
  missionVisionSection: {
    padding: '20px 0 20px',
    backgroundColor: 'var(--bg-color)',
  },
  mvGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
    gap: '40px',
  },
  mvCard: {
    backgroundColor: '#fff',
    padding: '40px',
    borderRadius: '8px',
    border: '1px solid var(--border-color)',
    boxShadow: '0 4px 15px rgba(0,0,0,0.03)',
    textAlign: 'center',
    position: 'relative',
    overflow: 'hidden',
  },
  mvIconSaffron: {
    width: '64px',
    height: '64px',
    backgroundColor: 'var(--color-saffron)',
    borderRadius: '50%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    margin: '0 auto 20px',
    boxShadow: '0 4px 10px rgba(255,153,51,0.3)',
  },
  mvIconGreen: {
    width: '64px',
    height: '64px',
    backgroundColor: 'var(--color-green)',
    borderRadius: '50%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    margin: '0 auto 20px',
    boxShadow: '0 4px 10px rgba(19,136,8,0.3)',
  },
  mvIconNavy: {
    width: '64px',
    height: '64px',
    backgroundColor: 'var(--color-navy)',
    borderRadius: '50%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    margin: '0 auto 20px',
    boxShadow: '0 4px 10px rgba(0,0,128,0.2)',
  },
  mvTitle: {
    fontSize: '24px',
    fontWeight: '700',
    color: 'var(--color-navy)',
    marginBottom: '15px',
  },
  mvText: {
    fontSize: '16px',
    color: 'var(--text-muted)',
    lineHeight: '1.6',
  },
  uniquenessSection: {
    padding: '30px 0 30px',
    backgroundColor: 'var(--color-white)',
  },
  sectionHeaderUniqueness: {
    textAlign: 'center',
    marginBottom: '40px',
  },
  uniquenessTitle: {
    fontSize: '30px',
    fontWeight: '800',
    color: 'var(--color-navy)',
    marginBottom: '20px',
  },
  uniquenessSubtitle: {
    fontSize: '16px',
    color: 'var(--text-main)',
    maxWidth: '960px',
    margin: '0 auto',
    lineHeight: '1.6',
  },
  uniquenessGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
    gap: '30px',
  },
  uniquenessCard: {
    backgroundColor: '#fff',
    padding: '40px 20px',
    borderRadius: '12px',
    border: '1px solid var(--border-color)',
    boxShadow: '0 4px 15px rgba(0,0,0,0.05)',
    textAlign: 'center',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    transition: 'transform 0.3s ease',
  },
  uniquenessCardTitle: {
    fontSize: '17px',
    fontWeight: '400',
    color: 'var(--text-main)',
  },
  upcomingSection: {
    padding: '60px 0',
    backgroundColor: 'var(--bg-color)',
  },
  upcomingMainTitle: {
    fontSize: '30px',
    fontWeight: '800',
    color: 'var(--color-navy)',
    textAlign: 'center',
    marginBottom: '50px',
  },
  upcomingFlex: {
    display: 'flex',
    alignItems: 'center',
    gap: '60px',
    flexWrap: 'wrap',
  },
  upcomingImageWrapper: {
    flex: '1 1 450px',
    overflow: 'hidden',
    width: '100%',
    maxHeight: '400px',
    maxWidth: '400px',
    borderRadius: '16px',
    boxShadow: '0 8px 24px rgba(0,0,0,0.1)',
    objectFit: 'cover',
  },
  upcomingImage: {
    width: '100%',
    display: 'block',
    transition: 'transform 0.5s ease',
  },
  upcomingContent: {
    flex: '1 1 500px',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    textAlign: 'center',
  },
  upcomingEventTitle: {
    fontSize: '36px',
    fontWeight: '900',
    color: 'var(--color-navy)',
    marginBottom: '20px',
    letterSpacing: '1px',
    borderLeft: '5px solid var(--color-saffron)',
    paddingLeft: '15px',
  },
  upcomingDetails: {
    display: 'flex',
    flexDirection: 'column',
    gap: '12px',
    marginBottom: '25px',
  },
  detailItem: {
    display: 'flex',
    alignItems: 'center',
    gap: '10px',
    fontSize: '16px',
    fontWeight: '600',
    color: 'var(--text-main)',
  },
  upcomingEventDesc: {
    fontSize: '18px',
    color: '#555',
    lineHeight: '1.6',
    marginBottom: '35px',
    textAlign: 'center',
  },
  upcomingBtn: {
    display: 'inline-block',
    backgroundColor: 'var(--color-saffron)',
    color: '#fff',
    padding: '16px 32px',
    borderRadius: '4px',
    fontSize: '16px',
    fontWeight: '700',
    textDecoration: 'none',
    boxShadow: '0 4px 15px rgba(255,153,51,0.3)',
    transition: 'all 0.3s ease',
  },
  historySection: {
    padding: '40px 0 80px',
    backgroundColor: 'var(--color-white)',
  },
  historyCard: {
    backgroundColor: 'var(--color-white)',
    padding: '60px 40px',
    borderRadius: '16px',
    textAlign: 'center',
    boxShadow: '0 10px 40px rgba(0,0,0,0.05)',
    border: '1px solid var(--border-color)',
    background: 'linear-gradient(to bottom, var(--color-white), #f9fafb)',
  },
  historyTitle: {
    fontSize: '32px',
    fontWeight: '800',
    color: 'var(--color-navy)',
    marginBottom: '15px',
  },
  historySubtitle: {
    fontSize: '18px',
    color: 'var(--text-muted)',
    marginBottom: '35px',
  },
  historyBtn: {
    display: 'inline-block',
    backgroundColor: 'var(--color-saffron)',
    color: 'var(--color-white)',
    padding: '16px 32px',
    borderRadius: '4px',
    fontSize: '16px',
    fontWeight: '700',
    textDecoration: 'none',
    boxShadow: '0 6px 20px rgba(255,153,51,0.3)',
    transition: 'all 0.3s ease',
  },
  statsSection: {
    padding: '60px 0',
    backgroundColor: 'var(--bg-color)',
    boxShadow: '0 4px 20px rgba(0,0,0,0.03)',
    position: 'relative',
    zIndex: 2,
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
    padding: 'var(--section-padding) 0',
    backgroundColor: 'var(--bg-color)',
  },
  sectionHeader: {
    textAlign: 'center',
    marginBottom: '3.125rem',
  },
  sectionTitle: {
    fontSize: 'clamp(1.8rem, 4vw, 2.2rem)',
    fontWeight: '700',
  },
  titleUnderline: {
    height: '4px',
    width: '60px',
    background: 'var(--color-navy)',
    margin: '1rem auto 0',
  },
  recordsGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))',
    gap: 'var(--gap-fluid)',
    marginBottom: '3rem',
  },
  recordCard: {
    backgroundColor: 'var(--color-white)',
    borderRadius: '8px',
    overflow: 'hidden',
    boxShadow: '0 4px 15px rgba(0,0,0,0.02)',
    border: '1px solid var(--border-color)',
    position: 'relative',
    padding: '2rem',
    paddingTop: '2.5rem',
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
