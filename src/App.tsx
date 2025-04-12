import React from 'react';

const App: React.FC = () => {
  return (
    <div style={styles.container}>
      <header style={styles.header}>
        <h1>Privacy Policy</h1>
      </header>
      <main style={styles.main}>
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
      </main>
      <footer style={styles.footer}>
        <p>&copy; {new Date().getFullYear()} JokeIo. All rights reserved.</p>
      </footer>
    </div>
  );
};

const styles = {
  container: {
    fontFamily: 'Arial, sans-serif',
    lineHeight: 1.8,
    margin: 0,
    padding: 0,
    color: '#333',
    backgroundColor: '#f9f9f9', // Light background color
    minHeight: '100vh', // Full height of the viewport
    display: 'flex',
    flexDirection: 'column',
  },
  header: {
    backgroundColor: '#4CAF50', // Light green header
    padding: '20px',
    color: 'white',
    textAlign: 'center',
    boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)', // Subtle shadow for depth
  },
  main: {
    flex: 1, // Allow the main content to expand
    padding: '40px 20px',
    maxWidth: '800px', // Limit the width for better readability
    margin: '0 auto', // Center the content
    backgroundColor: 'white', // White background for the content
    borderRadius: '8px', // Rounded corners
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)', // Subtle shadow for depth
  },
  section: {
    marginBottom: '20px',
  },
  footer: {
    textAlign: 'center',
    padding: '10px',
    backgroundColor: '#e0e0e0', // Light gray footer
    color: '#333',
    borderTop: '1px solid #ccc', // Subtle border for separation
  },
};

export default App;