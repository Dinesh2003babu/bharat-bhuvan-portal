export default function TopUtilityBar() {
  return (
    <div style={styles.utilityBar} className="utility-bar">
      <div style={styles.container} className="utility-bar-container">
        <div style={styles.left} className="mobile-hide">
          <span>An ISO Certified Institution | An Official Record Affirming Entity</span>
        </div>
        <div style={styles.right}>
          <button style={styles.btn} className="mobile-hide">Skip to Main Content</button>
          <div style={styles.divider} className="mobile-hide">|</div>
          <button style={styles.btn}>A-</button>
          <button style={styles.btn}>A</button>
          <button style={styles.btn}>A+</button>
          <div style={styles.divider}>|</div>
          <select style={styles.langSelect}>
            <option style={styles.option}>English</option>
            <option style={styles.option}>தமிழ்</option>
          </select>
        </div>
      </div>
    </div>
  );
}

const styles = {
  utilityBar: {
    backgroundColor: 'var(--color-saffron)',
    color: 'var(--color-white)',
    fontSize: '0.65rem',
    padding: '2px 0',
  },
  container: {
    maxWidth: '75rem',
    margin: '0 auto',
    padding: '0 10px',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    flexWrap: 'wrap',
  },
  left: {
    fontWeight: '500',
  },
  right: {
    display: 'flex',
    alignItems: 'center',
    gap: '0.5rem',
  },
  btn: {
    background: 'none',
    border: 'none',
    color: 'var(--color-white)',
    fontSize: '0.65rem',
    fontWeight: '600',
    padding: '2px 4px',
  },
  divider: {
    opacity: 0.5,
  },
  langSelect: {
    background: 'transparent',
    color: 'var(--color-white)',
    border: '1px solid rgba(255, 255, 255, 0.8)',
    padding: '1px 4px',
    fontSize: '0.65rem',
    borderRadius: '2px',
    outline: 'none',
  },
  option: {
    color: 'var(--text-main)',
    backgroundColor: 'var(--color-white)',
  }
};
