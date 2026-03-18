"use client";

import { useEffect, useState } from 'react';

export default function NewsTicker() {
  const [dateStr, setDateStr] = useState('');

  useEffect(() => {
    const today = new Date();
    const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    setDateStr(today.toLocaleDateString('en-IN', options));
  }, []);

  return (
    <div style={styles.tickerWrapper}>
      <div style={styles.container}>
        <div style={styles.label} className="ticker-label">
          LATEST UPDATES
        </div>
        <div style={styles.marqueeContainer}>
          <div style={styles.marquee}>
            <span style={styles.item}>🔔 Applications for the year 2026 are now open. Standard processing time is 4-6 weeks.</span>
            <span style={styles.item}>★ New Record: Fastest ascending of Mt. Everest without supplemental oxygen documented this month.</span>
            <span style={styles.item}>🔔 IMPORTANT: Always verify certificates using the official verify portal.</span>
            <span style={styles.item}>★ Read the updated Guidelines V2.1 before applying for state-level records.</span>
          </div>
        </div>
        <div style={styles.date} className="ticker-date">
          {dateStr}
        </div>
      </div>
    </div>
  );
}

const styles = {
  tickerWrapper: {
    backgroundColor: '#fff',
    borderBottom: '1px solid var(--border-color)',
    height: '40px',
    display: 'flex',
    alignItems: 'center',
    overflow: 'hidden',
  },
  container: {
    maxWidth: '1200px',
    margin: '0 auto',
    width: '100%',
    display: 'flex',
    alignItems: 'center',
    height: '100%',
  },
  label: {
    backgroundColor: 'var(--color-navy)',
    color: 'var(--color-white)',
    height: '100%',
    display: 'flex',
    alignItems: 'center',
    padding: '0 20px',
    fontWeight: '700',
    fontSize: '12px',
    letterSpacing: '0.5px',
    whiteSpace: 'nowrap',
    zIndex: 10,
    position: 'relative',
  },
  marqueeContainer: {
    flex: 1,
    overflow: 'hidden',
    position: 'relative',
    height: '100%',
    display: 'flex',
    alignItems: 'center',
    backgroundColor: '#f1f5f9',
  },
  marquee: {
    display: 'flex',
    whiteSpace: 'nowrap',
    animation: 'marquee 30s linear infinite',
  },
  item: {
    fontSize: '13px',
    fontWeight: '500',
    color: 'var(--text-main)',
    marginRight: '50px',
  },
  date: {
    padding: '0 20px',
    fontSize: '12px',
    fontWeight: '600',
    color: 'var(--text-muted)',
    whiteSpace: 'nowrap',
    backgroundColor: '#fff',
    height: '100%',
    display: 'flex',
    alignItems: 'center',
    borderLeft: '1px solid var(--border-color)',
    zIndex: 10,
  }
};
