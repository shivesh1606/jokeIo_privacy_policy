import React, { useState } from 'react';

const App: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'jokeio' | 'finance'>('jokeio');

  return (
    <div style={styles.container}>
      <header style={styles.header}>
        <h1>{activeTab === 'jokeio' ? 'Privacy Policy - JokeIo' : 'Privacy Policy - Finance App'}</h1>
        <div style={styles.tabContainer}>
          <button
            onClick={() => setActiveTab('jokeio')}
            style={{
              ...styles.tabButton,
              backgroundColor: activeTab === 'jokeio' ? '#388e3c' : '#4CAF50',
            }}
          >
            JokeIo
          </button>
          <button
            onClick={() => setActiveTab('finance')}
            style={{
              ...styles.tabButton,
              backgroundColor: activeTab === 'finance' ? '#388e3c' : '#4CAF50',
            }}
          >
            Finance App
          </button>
        </div>
      </header>

      <main style={styles.main}>
        {activeTab === 'jokeio' ? <JokeIoPolicy /> : <FinancePolicy />}
      </main>

      <footer style={styles.footer}>
        <p>&copy; {new Date().getFullYear()} {activeTab === 'jokeio' ? 'JokeIo' : 'Finance App'}. All rights reserved.</p>
      </footer>
    </div>
  );
};

const JokeIoPolicy = () => (
  <>
    <section style={styles.section}>
      <h2>Introduction</h2>
      <p>
        Welcome to the Privacy Policy of our app. We value your privacy and are committed to being transparent about how we handle your data.
      </p>
    </section>
    <section style={styles.section}>
      <h2>Information We Collect</h2>
      <p>
        Our app does not collect, store, or process any personal information or usage data. You can use our app without providing any personal details.
      </p>
    </section>
    <section style={styles.section}>
      <h2>Third-Party Services</h2>
      <p>
        Our app does not integrate with any third-party services that collect user data.
      </p>
    </section>
    <section style={styles.section}>
      <h2>Contact Us</h2>
      <p>
        If you have any questions or concerns about this Privacy Policy, please contact us at <a href="mailto:bvenom87@gmail.com">bvenom87@gmail.com</a>.
      </p>
    </section>
  </>
);

const FinancePolicy = () => (
  <>
    <section style={styles.section}>
      <h2>Introduction</h2>
      <p>
        This privacy policy explains how our Finance App handles your personal information. We are committed to keeping your data secure and ensuring transparency in its usage.
      </p>
    </section>
    <section style={styles.section}>
      <h2>Information We Collect</h2>
      <p>
        We collect your email address for authentication purposes. Additionally, we may collect expense-related data you input manually for tracking and analysis.
      </p>
    </section>
    <section style={styles.section}>
      <h2>How We Use Your Information</h2>
      <p>
        The information is used solely to provide you with a personalized experience — including storing your wallet balance, transaction history, and analytics data. We do not share your data with third parties.
      </p>
    </section>
    <section style={styles.section}>
      <h2>Data Security</h2>
      <p>
        All data is securely stored using Firebase. We implement appropriate security measures to protect your information from unauthorized access.
      </p>
    </section>
    <section style={styles.section}>
      <h2>Third-Party Services</h2>
      <p>
        We use Firebase Authentication and Firestore, both of which are governed by Google's privacy policy. No other third-party service collects user data.
      </p>
    </section>
    <section style={styles.section}>
      <h2>Contact Us</h2>
      <p>
        For questions or concerns about this privacy policy, feel free to contact us at <a href="mailto:bvenom87@gmail.com">bvenom87@gmail.com</a>.
      </p>
    </section>
  </>
);

import { CSSProperties } from 'react';

const styles: { [key: string]: CSSProperties } = {
  container: {
    fontFamily: 'Arial, sans-serif',
    lineHeight: 1.8,
    margin: 0,
    padding: 0,
    color: '#333',
    backgroundColor: '#f9f9f9',
    minHeight: '100vh',
    display: 'flex',
    flexDirection: 'column',
  },
  header: {
    backgroundColor: '#4CAF50',
    padding: '20px',
    color: 'white',
    textAlign: 'center',
    boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
  },
  tabContainer: {
    marginTop: '10px',
  },
  tabButton: {
    margin: '0 10px',
    padding: '10px 20px',
    border: 'none',
    color: 'white',
    cursor: 'pointer',
    borderRadius: '5px',
    fontSize: '16px',
  },
  main: {
    flex: 1,
    padding: '40px 20px',
    maxWidth: '800px',
    margin: '0 auto',
    backgroundColor: 'white',
    borderRadius: '8px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
  },
  section: {
    marginBottom: '20px',
  },
  footer: {
    textAlign: 'center',
    padding: '10px',
    backgroundColor: '#e0e0e0',
    color: '#333',
    borderTop: '1px solid #ccc',
  },
};

export default App;
