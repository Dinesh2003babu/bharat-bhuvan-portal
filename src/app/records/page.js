"use client";

import { useState } from "react";
import { Search, Filter, Download } from "lucide-react";

// Mock Data
const recordsData = [
  { id: "BBR-2025-YG982", title: "Largest Yoga Gathering", holder: "State Government of Gujarat", category: "Mass Events", state: "Gujarat", date: "21 Jun 2025", status: "Verified" },
  { id: "BBR-2025-MM431", title: "Fastest Mental Math Calculation", holder: "Rohan Sharma", category: "Education & Skills", state: "Delhi", date: "15 Aug 2025", status: "Verified" },
  { id: "BBR-2026-RR105", title: "Longest Continuous Relay Run", holder: "Indian Armed Forces", category: "Sports & Endurance", state: "Multiple", date: "26 Jan 2026", status: "Verified" },
  { id: "BBR-2024-AC012", title: "Most Trees Planted in 24 Hours", holder: "Green Earth NGO", category: "Environment", state: "Maharashtra", date: "05 Jun 2024", status: "Verified" },
  { id: "BBR-2024-FS556", title: "Largest Rangoli Pattern", holder: "Kala Academy", category: "Art & Culture", state: "Karnataka", date: "14 Nov 2024", status: "Verified" },
  { id: "BBR-2023-TE881", title: "Fastest App Development by a Minor", holder: "Aarav Tech", category: "Technology", state: "Tamil Nadu", date: "02 Feb 2023", status: "Verified" },
];

export default function Records() {
  const [searchTerm, setSearchTerm] = useState("");
  const [filterCategory, setFilterCategory] = useState("All");

  const filteredRecords = recordsData.filter(record => {
    const matchesSearch = record.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
                          record.holder.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          record.id.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = filterCategory === "All" || record.category === filterCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <div style={styles.page}>
      
      <div style={styles.header}>
        <div style={styles.container}>
          <h1 style={styles.title}>Official Record Directory</h1>
          <p style={styles.subtitle}>
            Search and verify officially authenticated records by the Bharat Bhuvan Book of Records.
          </p>
        </div>
      </div>

      <div style={styles.container}>
        {/* Controls */}
        <div style={styles.controls}>
          <div style={styles.searchBox}>
            <Search size={20} color="var(--text-muted)" style={styles.searchIcon} />
            <input 
              type="text" 
              placeholder="Search by ID, Title, or Holder Name..." 
              style={styles.searchInput}
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
          <div style={styles.filters}>
            <div style={styles.filterBox}>
              <Filter size={18} color="var(--color-navy)" />
              <select 
                style={styles.select}
                value={filterCategory}
                onChange={(e) => setFilterCategory(e.target.value)}
              >
                <option value="All">All Categories</option>
                <option value="Mass Events">Mass Events</option>
                <option value="Education & Skills">Education & Skills</option>
                <option value="Sports & Endurance">Sports & Endurance</option>
                <option value="Environment">Environment</option>
                <option value="Art & Culture">Art & Culture</option>
                <option value="Technology">Technology</option>
              </select>
            </div>
            <button style={styles.downloadBtn}>
              <Download size={18} /> Export PDF
            </button>
          </div>
        </div>

        {/* Table View */}
        <div style={styles.tableCard}>
          <div style={styles.tableHeader}>
            <h2 style={styles.tableTitle}>Search Results ({filteredRecords.length})</h2>
          </div>
          <div style={styles.tableResponsive}>
            <table style={styles.table}>
              <thead>
                <tr>
                  <th style={styles.th}>Record ID</th>
                  <th style={styles.th}>Record Title</th>
                  <th style={styles.th}>Record Holder</th>
                  <th style={styles.th}>Category</th>
                  <th style={styles.th}>State</th>
                  <th style={styles.th}>Date Recognized</th>
                  <th style={styles.th}>Status</th>
                </tr>
              </thead>
              <tbody>
                {filteredRecords.length > 0 ? (
                  filteredRecords.map((record, index) => (
                    <tr key={index} style={styles.tr}>
                      <td style={styles.tdId}>{record.id}</td>
                      <td style={styles.tdTitle}>{record.title}</td>
                      <td style={styles.td}>{record.holder}</td>
                      <td style={styles.td}>{record.category}</td>
                      <td style={styles.td}>{record.state}</td>
                      <td style={styles.td}>{record.date}</td>
                      <td style={styles.td}>
                        <span style={styles.badge}>{record.status}</span>
                      </td>
                    </tr>
                  ))
                ) : (
                  <tr>
                    <td colSpan="7" style={styles.emptyState}>
                      No records found matching your criteria.
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
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
    borderBottom: '1px solid var(--border-color)',
    padding: '40px 0',
    marginBottom: '40px',
  },
  container: {
    maxWidth: '1200px',
    margin: '0 auto',
    padding: '0 20px',
  },
  title: {
    fontSize: '32px',
    fontWeight: '700',
    color: 'var(--color-navy)',
    marginBottom: '10px',
  },
  subtitle: {
    fontSize: '16px',
    color: 'var(--text-muted)',
    maxWidth: '600px',
  },
  controls: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    flexWrap: 'wrap',
    gap: '20px',
    marginBottom: '30px',
  },
  searchBox: {
    position: 'relative',
    flex: '1 1 400px',
    maxWidth: '600px',
  },
  searchIcon: {
    position: 'absolute',
    left: '15px',
    top: '50%',
    transform: 'translateY(-50%)',
  },
  searchInput: {
    width: '100%',
    padding: '12px 15px 12px 45px',
    fontSize: '15px',
    border: '1px solid var(--border-color)',
    borderRadius: '4px',
    boxShadow: '0 2px 5px rgba(0,0,0,0.02)',
    outline: 'none',
  },
  filters: {
    display: 'flex',
    gap: '15px',
    alignItems: 'center',
  },
  filterBox: {
    display: 'flex',
    alignItems: 'center',
    gap: '10px',
    backgroundColor: '#fff',
    border: '1px solid var(--border-color)',
    padding: '8px 15px',
    borderRadius: '4px',
    boxShadow: '0 2px 5px rgba(0,0,0,0.02)',
  },
  select: {
    border: 'none',
    outline: 'none',
    fontSize: '14px',
    color: 'var(--text-main)',
    background: 'transparent',
    cursor: 'pointer',
  },
  downloadBtn: {
    display: 'flex',
    alignItems: 'center',
    gap: '8px',
    backgroundColor: 'var(--color-white)',
    color: 'var(--color-navy)',
    border: '1px solid var(--color-navy)',
    padding: '10px 20px',
    borderRadius: '4px',
    fontSize: '14px',
    fontWeight: '600',
    transition: 'all 0.2s',
  },
  tableCard: {
    backgroundColor: 'var(--color-white)',
    borderRadius: '8px',
    border: '1px solid var(--border-color)',
    boxShadow: '0 4px 15px rgba(0,0,0,0.03)',
    overflow: 'hidden',
  },
  tableHeader: {
    padding: '20px 25px',
    borderBottom: '2px solid var(--color-saffron)',
    backgroundColor: '#f8fafc',
  },
  tableTitle: {
    fontSize: '18px',
    color: 'var(--color-navy)',
    fontFamily: 'Inter, sans-serif',
    fontWeight: '700',
  },
  tableResponsive: {
    overflowX: 'auto',
  },
  table: {
    width: '100%',
    borderCollapse: 'collapse',
    textAlign: 'left',
  },
  th: {
    padding: '15px 25px',
    fontSize: '13px',
    fontWeight: '700',
    color: 'var(--text-muted)',
    textTransform: 'uppercase',
    letterSpacing: '0.5px',
    borderBottom: '1px solid var(--border-color)',
    backgroundColor: '#fff',
  },
  tr: {
    borderBottom: '1px solid var(--border-color)',
    transition: 'background-color 0.2s',
  },
  td: {
    padding: '16px 25px',
    fontSize: '14px',
    color: 'var(--text-main)',
    verticalAlign: 'middle',
  },
  tdId: {
    padding: '16px 25px',
    fontSize: '14px',
    fontWeight: '600',
    color: 'var(--color-navy)',
    whiteSpace: 'nowrap',
  },
  tdTitle: {
    padding: '16px 25px',
    fontSize: '15px',
    fontWeight: '600',
    color: 'var(--text-main)',
  },
  badge: {
    display: 'inline-block',
    padding: '4px 10px',
    backgroundColor: 'var(--color-green-light)',
    color: 'var(--color-green)',
    fontSize: '12px',
    fontWeight: '700',
    borderRadius: '20px',
  },
  emptyState: {
    padding: '50px',
    textAlign: 'center',
    color: 'var(--text-muted)',
    fontSize: '15px',
  }
};
