import React, { useState } from 'react';

const App: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'jokeio' | 'finance' | 'tippy'>('jokeio');


  return (
    <div style={styles.container}>
      <header style={styles.header}>
        <h1>
          {activeTab === 'jokeio' ? 'Privacy Policy - JokeIo' :
            activeTab === 'finance' ? 'Privacy Policy - Finance App' :
              'Privacy Policy - Tippy'}
        </h1>
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
          {/* Add Tippy Button */}
          <button
            onClick={() => setActiveTab('tippy')}
            style={{
              ...styles.tabButton,
              backgroundColor: activeTab === 'tippy' ? '#388e3c' : '#4CAF50',
            }}
          >
            Tippy
          </button>
        </div>
      </header>

      <main style={styles.main}>
        {/* Update rendering logic */}
        {activeTab === 'jokeio' ? <JokeIoPolicy /> :
          activeTab === 'finance' ? <FinancePolicy /> :
            <TippyPolicy />}
      </main>

      <footer style={styles.footer}>
        {/* Update footer logic */}
        <p>&copy; {new Date().getFullYear()} {
          activeTab === 'jokeio' ? 'JokeIo' :
            activeTab === 'finance' ? 'Finance App' :
              'Tippy'
        }. All rights reserved.</p>
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
const TippyPolicy = () => (
  <>
    <section style={styles.section}>
      <h2>Introduction</h2>
      <p>
        Welcome to the Privacy Policy for the Tippy app. Your privacy is important to us. This policy explains how we handle any information in relation to your use of Tippy.
      </p>
    </section>
    <section style={styles.section}>
      <h2>Information We Collect</h2>
      <p>
        Tippy does not collect, store, transmit, or share any personal information or usage data from its users.
      </p>
      <p>
        The app allows you to input a base bill amount and adjust a tip percentage. These calculations are performed entirely on your device and are not saved, stored, or sent anywhere. Once you close the app, this information is gone.
      </p>
    </section>
    <section style={styles.section}>
      <h2>How We Use Your Information</h2>
      <p>
        Since Tippy does not collect any of your personal information or data, there is no information for us to use, share, or sell. The app's functionality is self-contained on your device.
      </p>
    </section>
    <section style={styles.section}>
      <h2>Data Storage</h2>
      <p>
        Tippy does not store any data persistently on your device or on any external servers. All input and calculations are session-based and are discarded when the app is closed.
      </p>
    </section>
    <section style={styles.section}>
      <h2>Third-Party Services</h2>
      <p>
        Tippy does not integrate with any third-party services, analytics tools, or advertising networks that would collect data from you.
      </p>
    </section>
    <section style={styles.section}>
      <h2>Permissions</h2>
      <p>
        Tippy is designed to require minimal permissions to function. It does not require access to your contacts, location, storage (beyond its own operational needs which are not for user data collection), camera, microphone, or any other sensitive information on your device.
      </p>
    </section>
    <section style={styles.section}>
      <h2>Changes to This Privacy Policy</h2>
      <p>
        We may update our Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page. You are advised to review this Privacy Policy periodically for any changes. Changes to this Privacy Policy are effective when they are posted on this page.
      </p>
    </section>
    <section style={styles.section}>
      <h2>Contact Us</h2>
      <p>
        If you have any questions or concerns about this Privacy Policy or the Tippy app, please contact us at <a href="mailto:bvenom87@gmail.com">bvenom87@gmail.com</a>.
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
