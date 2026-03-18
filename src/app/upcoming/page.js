"use client";

import { Calendar } from "lucide-react";

export default function UpcomingPage() {
  return (
    <div style={styles.page}>
      <div style={styles.header}>
        <div style={styles.container}>
          <h1 style={styles.title}>Upcoming Record Attempts</h1>
          <p style={styles.subtitle}>
            A public schedule of officially registered future record attempts under adjudication.
          </p>
        </div>
      </div>
      <div style={styles.container}>
        <div style={styles.grid}>
          
          <div style={styles.card}>
            <div style={styles.dateBadge}>April 25, 2026</div>
            <h3 style={styles.cardTitle}>Largest Solar Lamp Assembly</h3>
            <p style={styles.cardText}><strong>Location:</strong> Mumbai, Maharashtra</p>
            <p style={styles.cardText}>
              Over 10,000 students aim to assemble functioning solar study lamps simultaneously to promote renewable energy.
            </p>
          </div>

          <div style={styles.card}>
            <div style={styles.dateBadge}>May 10, 2026</div>
            <h3 style={styles.cardTitle}>Longest Handwoven Saree</h3>
            <p style={styles.cardText}><strong>Location:</strong> Varanasi, Uttar Pradesh</p>
            <p style={styles.cardText}>
              A coalition of 50 weavers will showcase a continuously woven silk fabric stretching for exactly 3 kilometers.
            </p>
          </div>

          <div style={styles.card}>
            <div style={styles.dateBadge}>August 15, 2026</div>
            <h3 style={styles.cardTitle}>Mass National Anthem Rendition</h3>
            <p style={styles.cardText}><strong>Location:</strong> New Delhi & Virtual</p>
            <p style={styles.cardText}>
              An attempt to gather 5 million concurrent online and offline participants singing the National Anthem precisely at 8:00 AM.
            </p>
          </div>

        </div>
      </div>
    </div>
  );
}

const styles = {
  page: { paddingBottom: '80px', backgroundColor: 'var(--bg-color)', minHeight: '100%' },
  header: { backgroundColor: 'var(--color-navy)', color: '#fff', padding: '40px 0', borderBottom: '6px solid var(--color-saffron)', marginBottom: '40px' },
  container: { maxWidth: '1000px', margin: '0 auto', padding: '0 20px' },
  title: { fontSize: '32px', fontWeight: '700', marginBottom: '10px' },
  subtitle: { fontSize: '16px', color: 'rgba(255,255,255,0.8)' },
  grid: { display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))', gap: '30px' },
  card: { backgroundColor: '#fff', padding: '30px', borderRadius: '4px', border: '1px solid var(--border-color)', boxShadow: '0 4px 15px rgba(0,0,0,0.03)', position: 'relative' },
  dateBadge: { position: 'absolute', top: 0, right: 0, backgroundColor: 'var(--color-saffron)', color: '#fff', padding: '5px 15px', fontSize: '12px', fontWeight: 'bold', borderBottomLeftRadius: '4px' },
  cardTitle: { fontSize: '20px', color: 'var(--color-navy)', marginBottom: '15px', marginTop: '10px' },
  cardText: { fontSize: '14px', color: 'var(--text-main)', lineHeight: '1.6', marginBottom: '10px' }
};
