"use client";

import { useEffect, useState } from "react";
import { supabase } from "../../lib/supabaseClient";
import { Search, Loader2, RefreshCcw, LogOut, Download } from "lucide-react";

export default function AdminDashboard() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [password, setPassword] = useState("");
  const [applications, setApplications] = useState([]);
  const [enquiries, setEnquiries] = useState([]);
  const [activeTab, setActiveTab] = useState("applications");
  const [isLoading, setIsLoading] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();
    // Simple password protection for demonstration
    if (password === "bbbradmin2026") {
      setIsAuthenticated(true);
      fetchApplications();
      fetchEnquiries();
    } else {
      alert("Incorrect admin password.");
    }
  };

  const fetchApplications = async () => {
    setIsLoading(true);
    try {
      const { data, error } = await supabase
        .from('applications')
        .select('*')
        .order('created_at', { ascending: false });

      if (error) throw error;
      setApplications(data || []);
    } catch (error) {
      console.error("Error fetching applications:", error);
      alert("Failed to load applications. Check your database connection.");
    } finally {
      setIsLoading(false);
    }
  };

  const fetchEnquiries = async () => {
    setIsLoading(true);
    try {
      const { data, error } = await supabase
        .from('contact_enquiries')
        .select('*')
        .order('created_at', { ascending: false });

      if (error) throw error;
      setEnquiries(data || []);
    } catch (error) {
      console.error("Error fetching enquiries:", error);
    } finally {
      setIsLoading(false);
    }
  };

  const handleRefresh = () => {
    fetchApplications();
    fetchEnquiries();
  };

  // Filter based on search term
  const filteredApps = applications.filter(app => 
    app.name?.toLowerCase().includes(searchTerm.toLowerCase()) ||
    app.category?.toLowerCase().includes(searchTerm.toLowerCase()) ||
    app.phone?.includes(searchTerm) ||
    app.whatsapp?.includes(searchTerm)
  );

  const filteredEnquiries = enquiries.filter(enq => 
    enq.name?.toLowerCase().includes(searchTerm.toLowerCase()) ||
    enq.email?.toLowerCase().includes(searchTerm.toLowerCase()) ||
    enq.subject?.toLowerCase().includes(searchTerm.toLowerCase()) ||
    enq.phone?.includes(searchTerm)
  );

  const exportToCSV = () => {
    let csvContent = "";
    let filename = "";

    if (activeTab === "applications") {
      if (filteredApps.length === 0) return;
      
      const headers = [
        "Date", "Participant Name", "Parent's Name", "Age", "Phone", "WhatsApp", 
        "Address", "Category", "Record Title", "Brief Description", 
        "Academy", "Guru Name", "Instagram ID", "YouTube Link", "Status"
      ];
      
      const rows = filteredApps.map(app => [
        new Date(app.created_at).toLocaleString('en-IN', { day: '2-digit', month: 'short', year: 'numeric', hour: '2-digit', minute: '2-digit', hour12: true }),
        `"${app.name || ''}"`,
        `"${app.parent_name || ''}"`,
        app.age || '',
        `"${app.phone || ''}"`,
        `"${app.whatsapp || ''}"`,
        `"${(app.address || '').replace(/"/g, '""')}"`,
        `"${app.category || ''}"`,
        `"${(app.title || '').replace(/"/g, '""')}"`,
        `"${(app.description || '').replace(/"/g, '""')}"`,
        `"${app.academy || ''}"`,
        `"${app.guru || ''}"`,
        `"${app.instagram || ''}"`,
        `"${app.youtube || ''}"`,
        app.status || 'Pending'
      ]);

      csvContent = [headers.join(","), ...rows.map(r => r.join(","))].join("\n");
      filename = `BBBR_Records_Export_${new Date().toISOString().split('T')[0]}.csv`;

    } else {
      if (filteredEnquiries.length === 0) return;
      
      const headers = ["Date", "Name", "Phone", "Email", "Subject", "Message"];
      const rows = filteredEnquiries.map(enq => [
        new Date(enq.created_at).toLocaleString('en-IN', { day: '2-digit', month: 'short', year: 'numeric', hour: '2-digit', minute: '2-digit', hour12: true }),
        `"${enq.name || ''}"`,
        `"${enq.phone || ''}"`,
        `"${enq.email || ''}"`,
        `"${enq.subject || ''}"`,
        `"${(enq.message || '').replace(/"/g, '""')}"`
      ]);

      csvContent = [headers.join(","), ...rows.map(r => r.join(","))].join("\n");
      filename = `BBBR_Enquiries_Export_${new Date().toISOString().split('T')[0]}.csv`;
    }

    const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });
    const link = document.createElement("a");
    const url = URL.createObjectURL(blob);
    link.setAttribute("href", url);
    link.setAttribute("download", filename);
    link.style.visibility = 'hidden';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  if (!isAuthenticated) {
    return (
      <div style={styles.loginPage}>
        <form onSubmit={handleLogin} style={styles.loginForm}>
          <div style={styles.logoWrap}>
            <img src="/BBBR_Logo.png" alt="BBBR Logo" style={styles.loginLogo} />
          </div>
          <h2 style={styles.loginTitle}>Admin Portal</h2>
          <p style={styles.loginSubtitle}>Enter the admin password to view official applications.</p>
          <input 
            type="password" 
            placeholder="Admin Password" 
            value={password} 
            onChange={(e) => setPassword(e.target.value)} 
            style={styles.input}
            required
          />
          <button type="submit" style={styles.loginBtn}>Access Dashboard</button>
        </form>
      </div>
    );
  }

  return (
    <div style={styles.dashboardPage}>
      <div style={styles.headerBar}>
        <div style={styles.headerLeft}>
          <img src="/BBBR_Logo.png" alt="BBBR Logo" style={styles.dashLogo} />
          <div>
            <h1 style={styles.dashTitle}>BBBR Official Admin Portal</h1>
            <p style={styles.dashSubtitle}>Secure Application Management System</p>
          </div>
        </div>
        <button onClick={() => setIsAuthenticated(false)} style={styles.logoutBtn}>
          <LogOut size={16} style={{ marginRight: '6px' }} />
          Log Out
        </button>
      </div>

      <div style={styles.container}>
        <div style={styles.tabContainer}>
          <button 
            style={activeTab === 'applications' ? styles.activeTab : styles.tab} 
            onClick={() => setActiveTab('applications')}
          >
            Record Applications ({applications.length})
          </button>
          <button 
            style={activeTab === 'enquiries' ? styles.activeTab : styles.tab} 
            onClick={() => setActiveTab('enquiries')}
          >
            Contact Enquiries ({enquiries.length})
          </button>
        </div>

        <div style={styles.controlsBar}>
          <div style={styles.searchBox}>
            <Search size={18} color="#718096" style={styles.searchIcon} />
            <input 
              type="text" 
              placeholder="Search by name, category, or phone..." 
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              style={styles.searchInput}
            />
          </div>
          <div style={styles.actionButtons}>
            <button onClick={exportToCSV} style={styles.downloadBtn} disabled={(activeTab === 'applications' && filteredApps.length === 0) || (activeTab === 'enquiries' && filteredEnquiries.length === 0)}>
              <Download size={16} />
              Export to Spreadsheet
            </button>
            <button onClick={handleRefresh} style={styles.refreshBtn}>
              <RefreshCcw size={16} />
              Refresh Data
            </button>
          </div>
        </div>

        <div style={styles.tableCard}>
          {isLoading ? (
            <div style={styles.loadingState}>
              <Loader2 className="spinner" size={40} color="var(--color-navy)" />
              <p>Fetching official records from secure database...</p>
              <style>{`.spinner { animation: spin 1s linear infinite; } @keyframes spin { 100% { transform: rotate(360deg); } }`}</style>
            </div>
          ) : activeTab === "applications" ? (
            filteredApps.length === 0 ? (
              <div style={styles.emptyState}>
                <p>No applications found.</p>
              </div>
            ) : (
              <div style={styles.tableWrapper}>
                <table style={styles.table}>
                  <thead>
                    <tr>
                      <th style={styles.th}>Date</th>
                      <th style={styles.th}>Participant Name</th>
                      <th style={styles.th}>Parent Name</th>
                      <th style={styles.th}>Age</th>
                      <th style={styles.th}>Phone</th>
                      <th style={styles.th}>WhatsApp</th>
                      <th style={styles.th}>Address</th>
                      <th style={styles.th}>Category</th>
                      <th style={styles.th}>Record Title</th>
                      <th style={styles.th}>Description</th>
                      <th style={styles.th}>Academy</th>
                      <th style={styles.th}>Guru</th>
                      <th style={styles.th}>Instagram</th>
                      <th style={styles.th}>YouTube</th>
                      <th style={styles.th}>Status</th>
                    </tr>
                  </thead>
                  <tbody>
                    {filteredApps.map((app) => (
                      <tr key={app.id} style={styles.tr}>
                        <td style={styles.td}>
                          <div style={{ whiteSpace: 'nowrap' }}>
                            {new Date(app.created_at).toLocaleString('en-IN', { day: '2-digit', month: 'short', year: 'numeric', hour: '2-digit', minute: '2-digit', hour12: true })}
                          </div>
                        </td>
                        <td style={styles.td}><strong>{app.name}</strong></td>
                        <td style={styles.td}>{app.parent_name || '-'}</td>
                        <td style={styles.td}><strong>{app.age}</strong></td>
                        <td style={styles.td}>{app.phone}</td>
                        <td style={styles.td}>
                          <a href={`https://wa.me/91${app.whatsapp}`} target="_blank" rel="noreferrer" style={styles.waLink}>
                            {app.whatsapp}
                          </a>
                        </td>
                        <td style={styles.td}>
                          <div style={styles.truncateText} title={app.address}>{app.address || '-'}</div>
                        </td>
                        <td style={styles.td}><span style={styles.badge}>{app.category}</span></td>
                        <td style={styles.td}>
                          <div style={styles.truncateText} title={app.title}>{app.title}</div>
                        </td>
                        <td style={styles.td}>
                          <div style={styles.truncateText} title={app.description}>{app.description}</div>
                        </td>
                        <td style={styles.td}>{app.academy || '-'}</td>
                        <td style={styles.td}>{app.guru || '-'}</td>
                        <td style={styles.td}>{app.instagram || '-'}</td>
                        <td style={styles.td}>
                          {app.youtube ? (
                            <a href={app.youtube.startsWith('http') ? app.youtube : `https://${app.youtube}`} target="_blank" rel="noreferrer" style={styles.waLink}>
                              Video Link
                            </a>
                          ) : '-'}
                        </td>
                        <td style={styles.td}>
                          <span style={styles.statusBadge}>{app.status || 'Pending'}</span>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            )
          ) : (
            filteredEnquiries.length === 0 ? (
              <div style={styles.emptyState}>
                <p>No enquiries found.</p>
              </div>
            ) : (
              <div style={styles.tableWrapper}>
                <table style={styles.table}>
                  <thead>
                    <tr>
                      <th style={styles.th}>Date & Time</th>
                      <th style={styles.th}>Name</th>
                      <th style={styles.th}>Phone</th>
                      <th style={styles.th}>Email</th>
                      <th style={styles.th}>Subject</th>
                      <th style={styles.th}>Message Details</th>
                    </tr>
                  </thead>
                  <tbody>
                    {filteredEnquiries.map((enq) => (
                      <tr key={enq.id} style={styles.tr}>
                        <td style={styles.td}>
                          <div style={{ whiteSpace: 'nowrap' }}>
                            {new Date(enq.created_at).toLocaleString('en-IN', { day: '2-digit', month: 'short', year: 'numeric', hour: '2-digit', minute: '2-digit', hour12: true })}
                          </div>
                        </td>
                        <td style={styles.td}><strong>{enq.name}</strong></td>
                        <td style={styles.td}>
                          <a href={`https://wa.me/91${enq.phone}`} target="_blank" rel="noreferrer" style={styles.waLink}>
                            {enq.phone}
                          </a>
                        </td>
                        <td style={styles.td}>
                           <a href={`mailto:${enq.email}`} style={styles.waLink}>{enq.email}</a>
                        </td>
                        <td style={styles.td}><span style={styles.badge}>{enq.subject}</span></td>
                        <td style={styles.td}>
                          <div style={{ maxWidth: '400px', whiteSpace: 'normal', color: 'var(--text-main)', lineHeight: '1.6' }}>{enq.message}</div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            )
          )}
        </div>
      </div>
    </div>
  );
}

const styles = {
  loginPage: {
    minHeight: '100vh',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'var(--color-navy-light)',
  },
  loginForm: {
    backgroundColor: '#fff',
    padding: '40px',
    borderRadius: '12px',
    boxShadow: '0 10px 30px rgba(0,0,0,0.1)',
    width: '100%',
    maxWidth: '400px',
    textAlign: 'center',
    borderTop: '6px solid var(--color-navy)'
  },
  logoWrap: {
    marginBottom: '20px',
  },
  loginLogo: {
    height: '80px',
  },
  loginTitle: {
    fontSize: '24px',
    color: 'var(--color-navy)',
    fontWeight: '800',
    marginBottom: '10px',
  },
  loginSubtitle: {
    fontSize: '14px',
    color: 'var(--text-muted)',
    marginBottom: '30px',
  },
  input: {
    width: '100%',
    padding: '15px',
    border: '1px solid #e2e8f0',
    borderRadius: '8px',
    marginBottom: '20px',
    fontSize: '16px',
    outline: 'none',
  },
  loginBtn: {
    width: '100%',
    backgroundColor: 'var(--color-green)',
    color: '#fff',
    border: 'none',
    padding: '16px',
    borderRadius: '8px',
    fontSize: '16px',
    fontWeight: '700',
    cursor: 'pointer',
    transition: 'background-color 0.2s',
  },
  dashboardPage: {
    minHeight: '100vh',
    backgroundColor: '#f8fafc',
  },
  headerBar: {
    backgroundColor: '#fff',
    borderBottom: '4px solid var(--color-saffron)',
    padding: '15px 40px',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    boxShadow: '0 2px 10px rgba(0,0,0,0.05)',
  },
  headerLeft: {
    display: 'flex',
    alignItems: 'center',
    gap: '20px',
  },
  dashLogo: {
    height: '50px',
  },
  dashTitle: {
    margin: 0,
    fontSize: '20px',
    color: 'var(--color-navy)',
    fontWeight: '800',
  },
  dashSubtitle: {
    margin: 0,
    fontSize: '13px',
    color: 'var(--text-muted)',
  },
  logoutBtn: {
    display: 'flex',
    alignItems: 'center',
    backgroundColor: '#fff',
    border: '1px solid #e2e8f0',
    padding: '8px 15px',
    borderRadius: '6px',
    color: '#4a5568',
    cursor: 'pointer',
    fontWeight: '600',
    fontSize: '14px',
    transition: 'all 0.2s',
  },
  container: {
    padding: '40px',
    maxWidth: '1400px',
    margin: '0 auto',
  },
  controlsBar: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: '20px',
    flexWrap: 'wrap',
    gap: '15px',
  },
  searchBox: {
    display: 'flex',
    alignItems: 'center',
    backgroundColor: '#fff',
    border: '1px solid #e2e8f0',
    borderRadius: '8px',
    padding: '0 15px',
    width: '400px',
    maxWidth: '100%',
  },
  searchIcon: {
    marginRight: '10px',
  },
  searchInput: {
    border: 'none',
    outline: 'none',
    padding: '12px 0',
    width: '100%',
    fontSize: '14px',
  },
  actionButtons: {
    display: 'flex',
    gap: '12px',
    flexWrap: 'wrap',
  },
  downloadBtn: {
    display: 'flex',
    alignItems: 'center',
    gap: '8px',
    backgroundColor: 'var(--color-green)',
    color: '#fff',
    border: 'none',
    padding: '12px 20px',
    borderRadius: '8px',
    cursor: 'pointer',
    fontWeight: '600',
    transition: 'opacity 0.2s',
  },
  refreshBtn: {
    display: 'flex',
    alignItems: 'center',
    gap: '8px',
    backgroundColor: 'var(--color-navy)',
    color: '#fff',
    border: 'none',
    padding: '12px 20px',
    borderRadius: '8px',
    cursor: 'pointer',
    fontWeight: '600',
  },
  tableCard: {
    backgroundColor: '#fff',
    borderRadius: '12px',
    border: '1px solid #e2e8f0',
    boxShadow: '0 4px 15px rgba(0,0,0,0.03)',
    overflow: 'hidden',
  },
  tableWrapper: {
    width: '100%',
    overflowX: 'auto',
  },
  table: {
    width: '100%',
    borderCollapse: 'collapse',
    textAlign: 'left',
  },
  th: {
    padding: '16px 20px',
    backgroundColor: '#f8fafc',
    color: '#4a5568',
    fontWeight: '700',
    fontSize: '14px',
    borderBottom: '2px solid #e2e8f0',
    whiteSpace: 'nowrap',
  },
  tr: {
    borderBottom: '1px solid #edf2f7',
    transition: 'background-color 0.2s',
  },
  td: {
    padding: '16px 20px',
    fontSize: '15px',
    color: 'var(--text-main)',
  },
  badge: {
    backgroundColor: 'rgba(255,153,51,0.1)',
    color: '#c05621',
    padding: '4px 10px',
    borderRadius: '20px',
    fontSize: '13px',
    fontWeight: '700',
  },
  statusBadge: {
    backgroundColor: '#edf2f7',
    color: '#4a5568',
    padding: '4px 12px',
    borderRadius: '20px',
    fontSize: '13px',
    fontWeight: '600',
    textTransform: 'uppercase',
  },
  waLink: {
    color: 'var(--color-green)',
    textDecoration: 'none',
    fontWeight: '600',
  },
  waLinkHover: {
    textDecoration: 'underline',
  },
  loadingState: {
    padding: '100px 20px',
    textAlign: 'center',
    color: 'var(--text-muted)',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    gap: '15px',
  },
  emptyState: {
    padding: '100px 20px',
    textAlign: 'center',
    color: 'var(--text-muted)',
    fontSize: '16px',
    fontWeight: '500',
  },
  truncateText: {
    maxWidth: '220px',
    whiteSpace: 'nowrap',
    overflow: 'hidden',
    textOverflow: 'ellipsis',
  },
  tabContainer: {
    display: 'flex',
    gap: '15px',
    marginBottom: '20px',
    borderBottom: '2px solid #e2e8f0',
    paddingBottom: '10px',
  },
  tab: {
    padding: '12px 25px',
    backgroundColor: 'transparent',
    border: 'none',
    fontSize: '16px',
    fontWeight: '700',
    color: '#718096',
    cursor: 'pointer',
    position: 'relative',
    transition: 'color 0.2s',
  },
  activeTab: {
    padding: '12px 25px',
    backgroundColor: 'var(--color-navy)',
    border: 'none',
    fontSize: '16px',
    fontWeight: '700',
    color: '#fff',
    cursor: 'pointer',
    borderRadius: '8px',
    boxShadow: '0 4px 10px rgba(0,0,80,0.2)',
  }
};
