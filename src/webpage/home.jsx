import React from "react";


function Home() {
  return (
    <div className="home-container">

      {/* NAVBAR */}
      <nav className="navbar">
        <h1 className="logo">OMR Checker</h1>
        <div className="nav-links">
          <a href="/">Home</a>
          <a href="/login">Login</a>
          <a href="/register">Register</a>
        </div>
      </nav>

      {/* HERO SECTION */}
      <header className="hero">
        <h2>Smart OMR Sheet Checker</h2>
        <p>
          Upload your answer sheet image and let our AI automatically detect,
          extract, and evaluate the answers with 100% accuracy.
        </p>

        <a href="/upload" className="upload-btn">Upload Answer Sheet</a>
      </header>

      {/* FEATURES */}
      <section className="features">
        <h3>Why Use Our OMR Checker?</h3>

        <div className="feature-grid">
          <div className="card">
            <h4>📸 Auto Extract</h4>
            <p>
              Upload an image and our system automatically extracts answers
              using smart OMR detection.
            </p>
          </div>

          <div className="card">
            <h4>⚡ Fast Processing</h4>
            <p>
              Get results instantly with our optimized backend and AI scoring.
            </p>
          </div>

          <div className="card">
            <h4>📊 Detailed Report</h4>
            <p>
              View mistakes, correct answers, percentages, and final results.
            </p>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="footer">
        <p>© {new Date().getFullYear()} OMR Checker • All Rights Reserved</p>
      </footer>

    </div>
  );
}

export default Home;
