import React from 'react';

const Services = () => {
  return (
    <div style={styles.container}>
      <h1 style={styles.title}>Our Services</h1>
      <p style={styles.description}>
        We offer a wide range of services tailored to your needs. Our team of professionals is ready to assist you in achieving your goals with excellence and dedication.
      </p>
      <div style={styles.servicesWrapper}>
        <div style={styles.serviceCard}>
          <h3 style={styles.serviceTitle}>Web Development</h3>
          <p style={styles.serviceDescription}>
            Building responsive, fast, and user-friendly websites using the latest technologies.
          </p>
        </div>
        <div style={styles.serviceCard}>
          <h3 style={styles.serviceTitle}>Mobile Development</h3>
          <p style={styles.serviceDescription}>
            Creating native and cross-platform mobile apps that provide excellent user experiences.
          </p>
        </div>
        <div style={styles.serviceCard}>
          <h3 style={styles.serviceTitle}>UI/UX Design</h3>
          <p style={styles.serviceDescription}>
            Crafting beautiful, intuitive designs that ensure seamless user interactions.
          </p>
        </div>
      </div>
    </div>
  );
}

const styles = {
  container: {
    padding: '50px 20px',
    backgroundColor: '#f5f5f5',
    textAlign: 'center',
    minHeight: '86vh',
  },
  title: {
    fontSize: '3rem',
    color: '#333',
    marginBottom: '20px',
  },
  description: {
    fontSize: '1.2rem',
    color: '#666',
    marginBottom: '40px',
    maxWidth: '600px',
    margin: '0 auto',
  },
  servicesWrapper: {
    display: 'flex',
    justifyContent: 'center',
    flexWrap: 'wrap',
    gap: '20px',
  },
  serviceCard: {
    backgroundColor: '#fff',
    padding: '20px',
    borderRadius: '10px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
    width: '300px',
    textAlign: 'left',
  },
  serviceTitle: {
    fontSize: '1.5rem',
    color: '#007bff',
    marginBottom: '10px',
  },
  serviceDescription: {
    fontSize: '1rem',
    color: '#555',
  },
};

export default Services;
