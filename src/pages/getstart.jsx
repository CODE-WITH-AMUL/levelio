// GetStarted.jsx — Updated Version
import React, { useState } from "react";

export default function GetStarted() {
  const [dark, setDark] = useState(false);

  const features = [
    { icon: "📸", title: "Snap & Upload", desc: "Take a photo or upload your Written Answer Sheet" },
    { icon: "🤖", title: "AI Checking", desc: "AI instantly reads all answers and detects mistakes" },
    { icon: "📊", title: "Instant Result", desc: "Get detailed marks, mistakes & improvement tips" }
  ];

  const stats = [
    { number: "5K+", label: "Answer Sheets Checked" },
    { number: "98.5%", label: "Accuracy Rate" },
    { number: "24/7", label: "AI Service" },
    { number: "Free", label: "For Students" }
  ];

  return (
    <div className={dark ? "app dark" : "app"}>

      {/* HEADER */}
      <header className="header">
        <div className="logo">levelio</div>

        {/* UPDATED BUTTON → Goes to login page */}
        <button 
          className="get-started-btn"
          onClick={() => (window.location.href = "/login")}
        >
          Get Started →
        </button>
      </header>

      {/* HERO SECTION */}
      <section className="hero">
        <div className="hero-content">
          <h1 className="hero-title">
            Check Written Answer Sheets in  
            <span className="highlight"> Seconds</span>
          </h1>

          <p className="hero-desc">
            Upload your answer sheet and get instant marks with AI feedback.  
            Fast, accurate & built for teachers and students.
          </p>

          <div className="hero-buttons">
            <button 
              className="primary-btn"
              onClick={() => (window.location.href = "/login")}
            >
              Start Checking Now
            </button>

            <button className="secondary-btn">
              Watch Demo
            </button>
          </div>

          <div className="stats">
            {stats.map((s, i) => (
              <div key={i} className="stat-item">
                <div className="stat-number">{s.number}</div>
                <div className="stat-label">{s.label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* PHONE PREVIEW */}
        <div className="hero-visual">
          <div className="mockup-phone">
            <div className="phone-screen">
              <div className="screen-content">
                <div className="upload-area">
                  <div className="upload-icon">📄</div>
                  <p>Upload Answer Sheet</p>
                </div>

                <div className="processing-bar">
                  <div className="progress"></div>
                </div>

                <div className="result-preview">
                  <div className="score">Marks: 42/50</div>
                  <div className="correct">Correct Answers: 18</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FEATURES */}
      <section className="features">
        <h2 className="section-title">How It Works</h2>

        <div className="features-grid">
          {features.map((f, i) => (
            <div key={i} className="feature-card">
              <div className="feature-icon">{f.icon}</div>
              <h3 className="feature-title">{f.title}</h3>
              <p className="feature-desc">{f.desc}</p>
              <div className="step-number">Step {i + 1}</div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="cta-section">
        <div className="cta-content">
          <h2>Ready to Start?</h2>
          <p>AI that checks written sheets in seconds.</p>
          
          <button 
            className="cta-btn"
            onClick={() => (window.location.href = "/login")}
          >
            Create Your Account
          </button>

          <div className="cta-note">🎓 Free for students — No credit card</div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="footer">
        <div className="footer-content">
          <div className="footer-brand">
            <h3>levelio</h3>
            <p>AI Answer Sheet Checker</p>
          </div>

          <div className="footer-links">
            <div className="footer-column">
              <h4>Product</h4>
              <a>Features</a><a>Pricing</a><a>Examples</a>
            </div>

            <div className="footer-column">
              <h4>Support</h4>
              <a>Help Center</a><a>Contact</a><a>FAQ</a>
            </div>

            <div className="footer-column">
              <h4>Legal</h4>
              <a>Privacy</a><a>Terms</a><a>Security</a>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <p>© {new Date().getFullYear()} levelio — All rights reserved.</p>

          <button className="theme-toggle" onClick={() => setDark(!dark)}>
            {dark ? "☀️ Light" : "🌙 Dark"}
          </button>
        </div>
      </footer>

      {/* STYLES — (unchanged except minor fixes) */}
      <style>{`
        *{margin:0;padding:0;box-sizing:border-box}
        .app{font-family:'Inter',sans-serif;background:#fff;color:#1a1a1a;transition:.3s}
        .app.dark{background:#0f172a;color:#f1f5f9}

        .header{display:flex;justify-content:space-between;padding:1.5rem 2rem;backdrop-filter:blur(10px);position:sticky;top:0;z-index:10;border-bottom:1px solid #e2e8f0}
        .logo{font-weight:bold;font-size:1.6rem;background:linear-gradient(135deg,#3b82f6,#8b5cf6);-webkit-background-clip:text;-webkit-text-fill-color:transparent}
        .get-started-btn{background:#3b82f6;color:#fff;padding:.7rem 1.4rem;border:none;border-radius:8px;font-weight:600;cursor:pointer}

        .hero{display:grid;grid-template-columns:1fr 1fr;max-width:1200px;margin:auto;padding:4rem 2rem;gap:3rem}
        .hero-title{font-size:3rem;font-weight:800}
        .highlight{background:linear-gradient(135deg,#3b82f6,#8b5cf6);-webkit-background-clip:text;-webkit-text-fill-color:transparent}
        .hero-desc{color:#64748b;margin:1rem 0 2rem;font-size:1.2rem}
        .primary-btn,.secondary-btn{padding:1rem 2rem;font-size:1.1rem;border-radius:10px;font-weight:600;cursor:pointer}
        .primary-btn{background:#3b82f6;color:white;border:none}
        .secondary-btn{border:2px solid #3b82f6;color:#3b82f6;background:transparent}

        .stats{display:grid;grid-template-columns:repeat(4,1fr);margin-top:2rem;gap:1.5rem}
        .stat-number{font-size:1.5rem;font-weight:700;color:#3b82f6}

        .mockup-phone{width:300px;height:600px;background:#1e293b;border-radius:40px;padding:20px}
        .phone-screen{background:white;border-radius:30px;height:100%;padding:2rem}
        .upload-area{border:2px dashed #cbd5e1;padding:2rem;border-radius:15px;margin-bottom:2rem}
        .processing-bar{background:#e2e8f0;height:8px;border-radius:10px;margin:1.5rem 0}
        .progress{background:#10b981;height:100%;width:70%;animation:processing 2s infinite}

        .features{padding:5rem 2rem;background:#f8fafc}
        .feature-card{background:white;padding:2rem;border-radius:20px;border:1px solid #e2e8f0;position:relative}

        .cta-section{padding:5rem 2rem;text-align:center;background:linear-gradient(135deg,#3b82f6,#8b5cf6);color:white}
        .cta-btn{background:white;color:#3b82f6;padding:1.2rem 3rem;border-radius:12px;font-size:1.2rem;font-weight:700;border:none}

        .footer{background:#1e293b;color:white;padding:3rem 2rem}
      `}</style>
    </div>
  );
}
