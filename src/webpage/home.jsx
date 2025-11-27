import React from "react";
import Navbar from "../routes/navbar";
import 'bootstrap/dist/css/bootstrap.min.css';

function Home() {
  return (
    <div style={styles.homeContainer}>
      <Navbar />

      {/* Hero Section */}
      <section style={styles.heroSection}>
        <div style={styles.container}>
          <div style={styles.heroContent}>
            <div style={styles.heroText}>
              <div style={styles.badge}>AI-Powered</div>
              <h1 style={styles.heroTitle}>
                Smart OMR Sheet{" "}
                <span style={styles.gradientText}>Checker</span>
              </h1>
              <p style={styles.heroDescription}>
                Upload your answer sheet image and let our advanced AI automatically 
                detect, extract, and evaluate answers with 99.8% accuracy in seconds.
              </p>
              <div style={styles.heroButtons}>
                <a href="/upload" style={styles.btnPrimary}>
                  <span style={styles.btnIcon}>📤</span>
                  Upload Answer Sheet
                </a>
                <a href="#demo" style={styles.btnSecondary}>
                  <span style={styles.btnIcon}>🎥</span>
                  Watch Demo
                </a>
              </div>
              <div style={styles.heroStats}>
                <div style={styles.stat}>
                  <div style={styles.statNumber}>99.8%</div>
                  <div style={styles.statLabel}>Accuracy</div>
                </div>
                <div style={styles.stat}>
                  <div style={styles.statNumber}>2.3s</div>
                  <div style={styles.statLabel}>Avg. Processing</div>
                </div>
                <div style={styles.stat}>
                  <div style={styles.statNumber}>10K+</div>
                  <div style={styles.statLabel}>Sheets Checked</div>
                </div>
              </div>
            </div>
            <div style={styles.heroVisual}>
              <div style={{...styles.floatingCard, ...styles.card1}}>
                <div style={styles.cardHeader}>
                  <div style={styles.dots}>
                    <span style={{...styles.dot, background: '#ff5f57'}}></span>
                    <span style={{...styles.dot, background: '#ffbd2e'}}></span>
                    <span style={{...styles.dot, background: '#28ca42'}}></span>
                  </div>
                </div>
                <div style={styles.omrPreview}></div>
                <div style={styles.cardFooter}>OMR Sheet Sample</div>
              </div>
              <div style={{...styles.floatingCard, ...styles.card2}}>
                <div style={styles.cardHeader}>
                  <div style={styles.dots}>
                    <span style={{...styles.dot, background: '#ff5f57'}}></span>
                    <span style={{...styles.dot, background: '#ffbd2e'}}></span>
                    <span style={{...styles.dot, background: '#28ca42'}}></span>
                  </div>
                </div>
                <div style={styles.resultPreview}>
                  <div style={styles.scoreCircle}>
                    <span style={styles.scoreText}>85%</span>
                  </div>
                </div>
                <div style={styles.cardFooter}>Instant Results</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section style={styles.featuresSection}>
        <div style={styles.container}>
          <div style={styles.sectionHeader}>
            <h2 style={styles.sectionTitle}>Why Choose Our OMR Checker?</h2>
            <p style={styles.sectionSubtitle}>
              Revolutionizing answer sheet evaluation with cutting-edge technology
            </p>
          </div>
          <div style={styles.featuresGrid}>
            <div style={styles.featureCard}>
              <div style={styles.featureIcon}>🤖</div>
              <h3 style={styles.featureTitle}>AI-Powered Detection</h3>
              <p style={styles.featureDescription}>
                Advanced machine learning algorithms accurately detect and extract OMR bubbles regardless of sheet orientation or quality.
              </p>
            </div>
            <div style={styles.featureCard}>
              <div style={styles.featureIcon}>⚡</div>
              <h3 style={styles.featureTitle}>Lightning Fast</h3>
              <p style={styles.featureDescription}>
                Process hundreds of answer sheets in minutes with our optimized backend infrastructure and parallel processing.
              </p>
            </div>
            <div style={styles.featureCard}>
              <div style={styles.featureIcon}>📊</div>
              <h3 style={styles.featureTitle}>Detailed Analytics</h3>
              <p style={styles.featureDescription}>
                Comprehensive reports with score breakdowns, topic-wise analysis, and performance insights.
              </p>
            </div>
            <div style={styles.featureCard}>
              <div style={styles.featureIcon}>🔒</div>
              <h3 style={styles.featureTitle}>Secure & Private</h3>
              <p style={styles.featureDescription}>
                Your data is encrypted and never stored on our servers. Complete privacy guaranteed.
              </p>
            </div>
            <div style={styles.featureCard}>
              <div style={styles.featureIcon}>📱</div>
              <h3 style={styles.featureTitle}>Mobile Friendly</h3>
              <p style={styles.featureDescription}>
                Upload sheets directly from your smartphone camera. Works perfectly on all devices.
              </p>
            </div>
            <div style={styles.featureCard}>
              <div style={styles.featureIcon}>🌐</div>
              <h3 style={styles.featureTitle}>Cloud Based</h3>
              <p style={styles.featureDescription}>
                Access your results from anywhere, anytime. No software installation required.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section style={styles.workflowSection}>
        <div style={styles.container}>
          <div style={styles.sectionHeader}>
            <h2 style={styles.sectionTitle}>How It Works</h2>
            <p style={styles.sectionSubtitle}>Three simple steps to get your results</p>
          </div>
          <div style={styles.workflowSteps}>
            <div style={styles.step}>
              <div style={styles.stepNumber}>1</div>
              <div style={styles.stepIcon}>📸</div>
              <h3 style={styles.stepTitle}>Upload Sheet</h3>
              <p style={styles.stepDescription}>
                Take a photo or upload an image of your OMR answer sheet
              </p>
            </div>
            <div style={styles.stepConnector}></div>
            <div style={styles.step}>
              <div style={styles.stepNumber}>2</div>
              <div style={styles.stepIcon}>🔍</div>
              <h3 style={styles.stepTitle}>AI Processing</h3>
              <p style={styles.stepDescription}>
                Our AI detects, aligns, and extracts all marked answers
              </p>
            </div>
            <div style={styles.stepConnector}></div>
            <div style={styles.step}>
              <div style={styles.stepNumber}>3</div>
              <div style={styles.stepIcon}>📈</div>
              <h3 style={styles.stepTitle}>Get Results</h3>
              <p style={styles.stepDescription}>
                Receive detailed score report with analytics instantly
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section style={styles.ctaSection}>
        <div style={styles.container}>
          <div style={styles.ctaContent}>
            <h2 style={styles.ctaTitle}>Ready to Revolutionize Your Evaluation Process?</h2>
            <p style={styles.ctaSubtitle}>
              Join thousands of educators and institutions using our platform
            </p>
            <div style={styles.ctaButtons}>
              <a href="/upload" style={{...styles.btnPrimary, ...styles.btnLarge}}>
                Start Checking Now
              </a>
              <a href="/contact" style={{...styles.btnSecondary, ...styles.btnLarge}}>
                Contact Sales
              </a>
            </div>
          </div>
        </div>
      </section>

      <footer style={styles.footer}>
        <div style={styles.container}>
          <div style={styles.footerContent}>
            <div style={styles.footerBrand}>
              <h3 style={styles.footerTitle}>OMR Checker</h3>
              <p style={styles.footerDescription}>
                AI-powered answer sheet evaluation for the modern world.
              </p>
            </div>
            <div style={styles.footerLinks}>
              <a href="/privacy" style={styles.footerLink}>Privacy</a>
              <a href="/terms" style={styles.footerLink}>Terms</a>
              <a href="/contact" style={styles.footerLink}>Contact</a>
              <a href="/about" style={styles.footerLink}>About</a>
            </div>
          </div>
          <div style={styles.footerBottom}>
            <p style={styles.footerBottomText}>
              © {new Date().getFullYear()} OMR Checker • All Rights Reserved
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}

// Styles object
const styles = {
  homeContainer: {
    overflowX: 'hidden',
    fontFamily: "'Inter', 'Segoe UI', sans-serif",
  },
  container: {
    maxWidth: '1200px',
    margin: '0 auto',
    padding: '0 20px',
  },
  
  // Hero Section
  heroSection: {
    background: 'linear-gradient(135deg, #f8fafc 0%, #e2e8f0 100%)',
    padding: '100px 0 80px',
    position: 'relative',
    overflow: 'hidden',
  },
  heroContent: {
    display: 'grid',
    gridTemplateColumns: '1fr 1fr',
    gap: '60px',
    alignItems: 'center',
    position: 'relative',
    zIndex: 2,
  },
  heroText: {
    maxWidth: '600px',
  },
  badge: {
    display: 'inline-block',
    background: 'linear-gradient(135deg, #3b82f6, #8b5cf6)',
    color: 'white',
    padding: '8px 16px',
    borderRadius: '20px',
    fontSize: '14px',
    fontWeight: '600',
    marginBottom: '20px',
  },
  heroTitle: {
    fontSize: '3.5rem',
    fontWeight: '800',
    lineHeight: '1.1',
    marginBottom: '20px',
    color: '#1e293b',
  },
  gradientText: {
    background: 'linear-gradient(135deg, #3b82f6, #8b5cf6)',
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
    backgroundClip: 'text',
  },
  heroDescription: {
    fontSize: '1.25rem',
    color: '#64748b',
    marginBottom: '40px',
    lineHeight: '1.6',
  },
  heroButtons: {
    display: 'flex',
    gap: '16px',
    marginBottom: '50px',
    flexWrap: 'wrap',
  },
  btnPrimary: {
    display: 'inline-flex',
    alignItems: 'center',
    gap: '8px',
    padding: '16px 32px',
    borderRadius: '12px',
    fontWeight: '600',
    textDecoration: 'none',
    transition: 'all 0.3s ease',
    border: 'none',
    cursor: 'pointer',
    fontSize: '16px',
    background: 'linear-gradient(135deg, #3b82f6, #2563eb)',
    color: 'white',
    boxShadow: '0 10px 25px -5px rgba(0, 0, 0, 0.1)',
  },
  btnSecondary: {
    display: 'inline-flex',
    alignItems: 'center',
    gap: '8px',
    padding: '16px 32px',
    borderRadius: '12px',
    fontWeight: '600',
    textDecoration: 'none',
    transition: 'all 0.3s ease',
    border: '2px solid #e2e8f0',
    cursor: 'pointer',
    fontSize: '16px',
    background: 'white',
    color: '#1e293b',
  },
  btnIcon: {
    fontSize: '18px',
  },
  heroStats: {
    display: 'flex',
    gap: '40px',
  },
  stat: {
    textAlign: 'center',
  },
  statNumber: {
    fontSize: '2rem',
    fontWeight: '700',
    color: '#3b82f6',
    marginBottom: '4px',
  },
  statLabel: {
    fontSize: '14px',
    color: '#64748b',
    fontWeight: '500',
  },
  heroVisual: {
    position: 'relative',
    height: '400px',
  },
  floatingCard: {
    position: 'absolute',
    background: 'white',
    borderRadius: '16px',
    padding: '20px',
    boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.25)',
    border: '1px solid #e2e8f0',
  },
  card1: {
    top: '0',
    left: '0',
    width: '280px',
    animation: 'float 3s ease-in-out infinite',
  },
  card2: {
    bottom: '0',
    right: '0',
    width: '200px',
    animation: 'float 3s ease-in-out infinite 1.5s',
  },
  cardHeader: {
    display: 'flex',
    justifyContent: 'flex-start',
    marginBottom: '15px',
  },
  dots: {
    display: 'flex',
    gap: '6px',
  },
  dot: {
    width: '8px',
    height: '8px',
    borderRadius: '50%',
  },
  omrPreview: {
    height: '180px',
    background: `linear-gradient(45deg, #f1f5f9 25%, transparent 25%), 
                linear-gradient(-45deg, #f1f5f9 25%, transparent 25%), 
                linear-gradient(45deg, transparent 75%, #f1f5f9 75%), 
                linear-gradient(-45deg, transparent 75%, #f1f5f9 75%)`,
    backgroundSize: '20px 20px',
    backgroundPosition: '0 0, 0 10px, 10px -10px, -10px 0px',
    borderRadius: '8px',
    marginBottom: '10px',
  },
  resultPreview: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '120px',
  },
  scoreCircle: {
    width: '80px',
    height: '80px',
    borderRadius: '50%',
    background: 'conic-gradient(#3b82f6 85%, #e2e8f0 0)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    position: 'relative',
  },
  scoreText: {
    position: 'relative',
    fontWeight: '700',
    color: '#3b82f6',
    zIndex: 2,
  },
  cardFooter: {
    textAlign: 'center',
    fontSize: '12px',
    color: '#64748b',
    fontWeight: '500',
  },
  
  // Features Section
  featuresSection: {
    padding: '100px 0',
    background: '#ffffff',
  },
  sectionHeader: {
    textAlign: 'center',
    marginBottom: '60px',
  },
  sectionTitle: {
    fontSize: '2.5rem',
    fontWeight: '700',
    marginBottom: '16px',
    color: '#1e293b',
  },
  sectionSubtitle: {
    fontSize: '1.125rem',
    color: '#64748b',
    maxWidth: '600px',
    margin: '0 auto',
  },
  featuresGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))',
    gap: '30px',
  },
  featureCard: {
    background: 'white',
    padding: '40px 30px',
    borderRadius: '16px',
    textAlign: 'center',
    boxShadow: '0 10px 25px -5px rgba(0, 0, 0, 0.1)',
    border: '1px solid #e2e8f0',
    transition: 'all 0.3s ease',
  },
  featureIcon: {
    fontSize: '3rem',
    marginBottom: '20px',
  },
  featureTitle: {
    fontSize: '1.5rem',
    fontWeight: '600',
    marginBottom: '16px',
    color: '#1e293b',
  },
  featureDescription: {
    color: '#64748b',
    lineHeight: '1.6',
  },
  
  // Workflow Section
  workflowSection: {
    padding: '100px 0',
    background: '#f8fafc',
  },
  workflowSteps: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'flex-start',
    gap: '40px',
    position: 'relative',
  },
  step: {
    textAlign: 'center',
    flex: '1',
    maxWidth: '250px',
    position: 'relative',
  },
  stepNumber: {
    width: '40px',
    height: '40px',
    background: 'linear-gradient(135deg, #3b82f6, #8b5cf6)',
    color: 'white',
    borderRadius: '50%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontWeight: '700',
    margin: '0 auto 20px',
  },
  stepIcon: {
    fontSize: '3rem',
    marginBottom: '20px',
  },
  stepTitle: {
    fontSize: '1.25rem',
    fontWeight: '600',
    marginBottom: '12px',
    color: '#1e293b',
  },
  stepDescription: {
    color: '#64748b',
    lineHeight: '1.5',
  },
  stepConnector: {
    flex: '1',
    height: '2px',
    background: 'linear-gradient(90deg, #3b82f6, #8b5cf6)',
    marginTop: '20px',
    maxWidth: '100px',
  },
  
  // CTA Section
  ctaSection: {
    padding: '100px 0',
    background: 'linear-gradient(135deg, #3b82f6, #8b5cf6)',
    color: 'white',
    textAlign: 'center',
  },
  ctaContent: {
    maxWidth: '800px',
    margin: '0 auto',
  },
  ctaTitle: {
    fontSize: '2.5rem',
    fontWeight: '700',
    marginBottom: '16px',
  },
  ctaSubtitle: {
    fontSize: '1.25rem',
    marginBottom: '40px',
    opacity: '0.9',
  },
  ctaButtons: {
    display: 'flex',
    gap: '20px',
    justifyContent: 'center',
    flexWrap: 'wrap',
  },
  btnLarge: {
    padding: '18px 40px',
    fontSize: '18px',
  },
  
  // Footer
  footer: {
    background: '#1e293b',
    color: 'white',
    padding: '60px 0 30px',
  },
  footerContent: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    marginBottom: '40px',
    flexWrap: 'wrap',
    gap: '40px',
  },
  footerBrand: {
    flex: '1',
    minWidth: '300px',
  },
  footerTitle: {
    fontSize: '1.5rem',
    marginBottom: '12px',
  },
  footerDescription: {
    color: '#94a3b8',
    maxWidth: '300px',
  },
  footerLinks: {
    display: 'flex',
    gap: '30px',
    flexWrap: 'wrap',
  },
  footerLink: {
    color: '#94a3b8',
    textDecoration: 'none',
    transition: 'color 0.3s ease',
  },
  footerBottom: {
    textAlign: 'center',
    paddingTop: '30px',
    borderTop: '1px solid #334155',
  },
  footerBottomText: {
    color: '#94a3b8',
  },
};

// Add CSS animations
const styleSheet = document.styleSheets[0];
const keyframes = `
@keyframes float {
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(-10px); }
}
`;
styleSheet.insertRule(keyframes, styleSheet.cssRules.length);

// Add hover effects
const hoverStyles = `
  .btn-primary:hover {
    transform: translateY(-2px);
    box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.25);
  }
  .btn-secondary:hover {
    border-color: #3b82f6;
    transform: translateY(-2px);
  }
  .feature-card:hover {
    transform: translateY(-5px);
    box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.25);
  }
  .footer-link:hover {
    color: white;
  }
`;

const styleElement = document.createElement('style');
styleElement.textContent = hoverStyles;
document.head.appendChild(styleElement);

export default Home;