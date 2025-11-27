import React, { useState, useEffect } from "react";
import Navbar from "../routes/navbar";

export default function Settings() {
  const [theme, setTheme] = useState("LIGHT");
  const [notifications, setNotifications] = useState(true);
  const [twoFactor, setTwoFactor] = useState(false);
  const [language, setLanguage] = useState("ENGLISH");
  const [autoSave, setAutoSave] = useState(true);

  // Apply theme to entire document
  useEffect(() => {
    document.body.style.backgroundColor = theme === "DARK" ? "#0f172a" : "#f8fafc";
    document.body.style.color = theme === "DARK" ? "#e2e8f0" : "#334155";
    document.body.style.transition = "all 0.3s ease";
  }, [theme]);

  const handleSave = () => {
    const btn = document.getElementById('save-btn');
    if (btn) {
      const originalText = btn.textContent;
      const originalBg = btn.style.background;
      
      btn.textContent = '✓ Settings Saved!';
      btn.style.background = '#10b981';
      
      setTimeout(() => {
        btn.textContent = originalText;
        btn.style.background = originalBg;
      }, 2000);
    }
  };

  const handleReset = () => {
    setTheme("LIGHT");
    setNotifications(true);
    setTwoFactor(false);
    setLanguage("ENGLISH");
    setAutoSave(true);
  };

  return (
    <>
      <Navbar />
      <div style={{
        ...styles.container,
        background: theme === "DARK" ? "#0f172a" : "#f8fafc",
      }}>
        
        {/* Header */}
        <div style={styles.header}>
          <div style={styles.titleSection}>
            <div style={styles.iconWrapper}>⚙️</div>
            <h1 style={{
              ...styles.title,
              color: theme === "DARK" ? "#f1f5f9" : "#1e293b",
            }}>
              Settings
            </h1>
            <p style={{
              ...styles.subtitle,
              color: theme === "DARK" ? "#94a3b8" : "#64748b"
            }}>
              Manage your preferences and account settings
            </p>
          </div>
        </div>

        {/* Settings Grid */}
        <div style={styles.grid}>
          {/* Theme Settings */}
          <div style={{
            ...styles.card,
            background: theme === "DARK" ? "#1e293b" : "#ffffff",
            border: theme === "DARK" ? "1px solid #334155" : "1px solid #e2e8f0",
          }}>
            <h3 style={{
              ...styles.cardTitle,
              color: theme === "DARK" ? "#f1f5f9" : "#1e293b",
            }}>
              🎨 Appearance
            </h3>
            
            <div style={styles.settingItem}>
              <label style={styles.label}>Theme</label>
              <div style={styles.themeButtons}>
                <button
                  onClick={() => setTheme("LIGHT")}
                  style={{
                    ...styles.themeButton,
                    ...(theme === "LIGHT" ? styles.activeTheme : {}),
                    background: theme === "LIGHT" ? "#3b82f6" : "transparent",
                    color: theme === "LIGHT" ? "white" : (theme === "DARK" ? "#cbd5e1" : "#64748b"),
                    border: theme === "LIGHT" ? "1px solid #3b82f6" : (theme === "DARK" ? "1px solid #475569" : "1px solid #cbd5e1")
                  }}
                >
                  ☀️ Light
                </button>
                <button
                  onClick={() => setTheme("DARK")}
                  style={{
                    ...styles.themeButton,
                    ...(theme === "DARK" ? styles.activeTheme : {}),
                    background: theme === "DARK" ? "#6366f1" : "transparent",
                    color: theme === "DARK" ? "white" : (theme === "DARK" ? "#cbd5e1" : "#64748b"),
                    border: theme === "DARK" ? "1px solid #6366f1" : (theme === "DARK" ? "1px solid #475569" : "1px solid #cbd5e1")
                  }}
                >
                  🌙 Dark
                </button>
              </div>
            </div>

            <div style={styles.settingItem}>
              <label style={styles.label}>Language</label>
              <select
                value={language}
                onChange={(e) => setLanguage(e.target.value)}
                style={{
                  ...styles.select,
                  background: theme === "DARK" ? "#1e293b" : "#ffffff",
                  color: theme === "DARK" ? "#e2e8f0" : "#334155",
                  border: theme === "DARK" ? "1px solid #475569" : "1px solid #cbd5e1"
                }}
              >
                <option value="ENGLISH">English</option>
                <option value="NEPALI">Nepali</option>
                <option value="HINDI">Hindi</option>
                <option value="SPANISH">Spanish</option>
              </select>
            </div>
          </div>

          {/* Notifications */}
          <div style={{
            ...styles.card,
            background: theme === "DARK" ? "#1e293b" : "#ffffff",
            border: theme === "DARK" ? "1px solid #334155" : "1px solid #e2e8f0",
          }}>
            <h3 style={{
              ...styles.cardTitle,
              color: theme === "DARK" ? "#f1f5f9" : "#1e293b",
            }}>
              🔔 Notifications
            </h3>
            
            <div style={styles.toggleItem}>
              <div style={styles.toggleContent}>
                <span style={styles.toggleLabel}>Push Notifications</span>
                <span style={styles.toggleDescription}>
                  Receive app notifications and updates
                </span>
              </div>
              <label style={styles.switch}>
                <input
                  type="checkbox"
                  checked={notifications}
                  onChange={() => setNotifications(!notifications)}
                  style={styles.checkbox}
                />
                <span style={{
                  ...styles.slider,
                  background: notifications ? "#10b981" : (theme === "DARK" ? "#475569" : "#cbd5e1")
                }}></span>
              </label>
            </div>

            <div style={styles.toggleItem}>
              <div style={styles.toggleContent}>
                <span style={styles.toggleLabel}>Auto-save</span>
                <span style={styles.toggleDescription}>
                  Automatically save your progress
                </span>
              </div>
              <label style={styles.switch}>
                <input
                  type="checkbox"
                  checked={autoSave}
                  onChange={() => setAutoSave(!autoSave)}
                  style={styles.checkbox}
                />
                <span style={{
                  ...styles.slider,
                  background: autoSave ? "#10b981" : (theme === "DARK" ? "#475569" : "#cbd5e1")
                }}></span>
              </label>
            </div>
          </div>

          {/* Security */}
          <div style={{
            ...styles.card,
            background: theme === "DARK" ? "#1e293b" : "#ffffff",
            border: theme === "DARK" ? "1px solid #334155" : "1px solid #e2e8f0",
          }}>
            <h3 style={{
              ...styles.cardTitle,
              color: theme === "DARK" ? "#f1f5f9" : "#1e293b",
            }}>
              🔒 Security
            </h3>
            
            <div style={styles.toggleItem}>
              <div style={styles.toggleContent}>
                <span style={styles.toggleLabel}>Two-Factor Authentication</span>
                <span style={styles.toggleDescription}>
                  Extra security for your account
                </span>
              </div>
              <label style={styles.switch}>
                <input
                  type="checkbox"
                  checked={twoFactor}
                  onChange={() => setTwoFactor(!twoFactor)}
                  style={styles.checkbox}
                />
                <span style={{
                  ...styles.slider,
                  background: twoFactor ? "#10b981" : (theme === "DARK" ? "#475569" : "#cbd5e1")
                }}></span>
              </label>
            </div>
          </div>
        </div>

        {/* Action Buttons */}
        <div style={styles.actions}>
          <button 
            onClick={handleReset}
            style={{
              ...styles.button,
              ...styles.secondaryButton,
              background: theme === "DARK" ? "#334155" : "#f1f5f9",
              color: theme === "DARK" ? "#e2e8f0" : "#475569",
              border: theme === "DARK" ? "1px solid #475569" : "1px solid #cbd5e1"
            }}
          >
            Reset to Defaults
          </button>
          <button 
            id="save-btn"
            onClick={handleSave}
            style={{
              ...styles.button,
              ...styles.primaryButton,
              background: theme === "DARK" 
                ? "linear-gradient(135deg, #6366f1, #8b5cf6)" 
                : "linear-gradient(135deg, #3b82f6, #06b6d4)"
            }}
          >
            Save Changes
          </button>
        </div>
      </div>
    </>
  );
}

// Clean and minimal styles
const styles = {
  container: {
    minHeight: "100vh",
    padding: "40px 20px",
    fontFamily: "'Inter', 'Segoe UI', sans-serif",
    transition: "all 0.3s ease",
    maxWidth: "1200px",
    margin: "0 auto",
  },
  header: {
    textAlign: "center",
    marginBottom: "50px",
  },
  titleSection: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    gap: "12px",
  },
  iconWrapper: {
    fontSize: "48px",
    marginBottom: "8px",
  },
  title: {
    fontSize: "36px",
    fontWeight: "700",
    margin: "0",
    background: "linear-gradient(135deg, #3b82f6, #06b6d4)",
    backgroundClip: "text",
    WebkitBackgroundClip: "text",
    WebkitTextFillColor: "transparent",
  },
  subtitle: {
    fontSize: "16px",
    fontWeight: "400",
    margin: "0",
  },
  grid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(380px, 1fr))",
    gap: "24px",
    marginBottom: "40px",
  },
  card: {
    padding: "28px",
    borderRadius: "16px",
    boxShadow: "0 4px 20px rgba(0,0,0,0.08)",
    transition: "all 0.3s ease",
  },
  cardTitle: {
    fontSize: "20px",
    fontWeight: "600",
    margin: "0 0 24px 0",
    display: "flex",
    alignItems: "center",
    gap: "8px",
  },
  settingItem: {
    marginBottom: "24px",
  },
  label: {
    display: "block",
    fontSize: "14px",
    fontWeight: "600",
    marginBottom: "8px",
    color: "inherit",
  },
  themeButtons: {
    display: "flex",
    gap: "12px",
  },
  themeButton: {
    flex: 1,
    padding: "12px 16px",
    borderRadius: "10px",
    border: "1px solid",
    fontSize: "14px",
    fontWeight: "500",
    cursor: "pointer",
    transition: "all 0.2s ease",
  },
  activeTheme: {
    transform: "translateY(-1px)",
    boxShadow: "0 4px 12px rgba(59, 130, 246, 0.3)",
  },
  select: {
    width: "100%",
    padding: "12px 16px",
    borderRadius: "10px",
    border: "1px solid",
    fontSize: "14px",
    fontWeight: "500",
    transition: "all 0.2s ease",
  },
  toggleItem: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    padding: "16px 0",
    borderBottom: "1px solid rgba(148, 163, 184, 0.2)",
  },
  toggleContent: {
    display: "flex",
    flexDirection: "column",
    gap: "4px",
    flex: 1,
  },
  toggleLabel: {
    fontSize: "15px",
    fontWeight: "500",
    color: "inherit",
  },
  toggleDescription: {
    fontSize: "13px",
    color: "#94a3b8",
  },
  switch: {
    position: "relative",
    display: "inline-block",
    width: "52px",
    height: "28px",
  },
  checkbox: {
    opacity: 0,
    width: 0,
    height: 0,
  },
  slider: {
    position: "absolute",
    cursor: "pointer",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    transition: "0.3s",
    borderRadius: "34px",
  },
  slider: {
    position: "absolute",
    cursor: "pointer",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    transition: "0.3s",
    borderRadius: "34px",
  },
  slider: {
    position: "absolute",
    cursor: "pointer",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    transition: "0.3s",
    borderRadius: "34px",
  },
  actions: {
    display: "flex",
    gap: "16px",
    justifyContent: "center",
    alignItems: "center",
  },
  button: {
    padding: "14px 32px",
    borderRadius: "12px",
    border: "none",
    fontSize: "15px",
    fontWeight: "600",
    cursor: "pointer",
    transition: "all 0.3s ease",
    minWidth: "160px",
  },
  primaryButton: {
    color: "white",
    boxShadow: "0 4px 15px rgba(59, 130, 246, 0.3)",
  },
  secondaryButton: {
    background: "#f1f5f9",
    color: "#475569",
  },
};

// Add slider pseudo-element styling
const sliderStyle = document.createElement('style');
sliderStyle.textContent = `
  input:checked + span:before {
    transform: translateX(24px);
  }
  
  @media (max-width: 768px) {
    .settings-grid {
      grid-template-columns: 1fr;
    }
    
    .theme-buttons {
      flex-direction: column;
    }
    
    .action-buttons {
      flex-direction: column;
    }
    
    .action-buttons button {
      width: 100%;
    }
  }
  
  @media (max-width: 480px) {
    .settings-container {
      padding: 20px 16px;
    }
    
    .settings-card {
      padding: 20px;
    }
  }
`;
document.head.appendChild(sliderStyle);