import React, { useState } from 'react';

const App: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'jokeio' | 'finance' | 'tippy' | 'vpn'>('jokeio');


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
          <button
            onClick={() => setActiveTab('vpn')}
            style={{
              ...styles.tabButton,
              backgroundColor: activeTab === 'vpn' ? '#388e3c' : '#4CAF50',
            }}
          >
            VPN Core
          </button>
        </div>
      </header>

      <main style={styles.main}>
        {activeTab === 'jokeio' ? <JokeIoPolicy /> :
          activeTab === 'finance' ? <FinancePolicy /> :
            activeTab === 'tippy' ? <TippyPolicy /> :
              <VpnPolicy />}
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

// 4. THE VPN POLICY COMPONENT
const VpnPolicy = () => (
  <>
    <section style={styles.section}>
      <h2>Introduction</h2>
      <p>
        The VPN Core app is built with a "Privacy-First" architecture. This policy outlines our commitment to your digital anonymity and the technical measures we take to protect your data.
      </p>
    </section>

    <section style={styles.section}>
      <h2>Strict No-Logs Policy</h2>
      <p>
        <strong>We do not collect, store, or log any of the following:</strong>
      </p>
      <ul style={{ paddingLeft: '20px' }}>
        <li>Your original IP address or the VPN IP address you use.</li>
        <li>Your browsing history, destination URLs, or DNS queries.</li>
        <li>Connection timestamps or session durations.</li>
        <li>Metadata regarding your data usage or traffic patterns.</li>
      </ul>
    </section>

    <section style={styles.section}>
      <h2>Information Handling</h2>
      <p>
        The app operates as a stateless tunneling engine. While a connection is active, the app processes network packets entirely in-memory using <strong>high-performance C++ core logic</strong>. No data is written to persistent storage or intercepted by our servers.
      </p>
    </section>

    <section style={styles.section}>
      <h2>Encryption and Security</h2>
      <p>
        We utilize industry-standard <strong>Diffie-Hellman Key Exchange</strong> for secure session establishment and custom XOR-based stream ciphers for data encapsulation. This ensures that even if encrypted packets are intercepted, the underlying traffic remains opaque.
      </p>
    </section>

    <section style={styles.section}>
      <h2>Third-Party Services</h2>
      <p>
        VPN Core does not use third-party analytics, advertising SDKs, or tracking cookies. We believe that a security tool should not contain tracking code.
      </p>
    </section>

    <section style={styles.section}>
      <h2>Permissions</h2>
      <p>
        The app requires the <code>BIND_VPN_SERVICE</code> permission to create a local virtual network interface (TUN). This is used solely to route your device traffic through the encrypted tunnel.
      </p>
    </section>

    <section style={styles.section}>
      <h2>Contact</h2>
      <p>
        For technical inquiries regarding our encryption implementation or privacy standards, please contact <a href="mailto:bvenom87@gmail.com">bvenom87@gmail.com</a>.
      </p>
    </section>
  </>
);
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
