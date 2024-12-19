import React from 'react';
import './About.css';  // لا تنسَ ملف التنسيق

const About = () => {
  return (
    <section className="about-section d-flex align-items-center">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-6 col-md-12">
            <img 
              src="https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=600" 
              alt="About us" 
              className="img-fluid rounded shadow-lg"
            />
          </div>
          <div className="col-lg-6 col-md-12 about-text-section">
            <h1 className="about-title mb-4">About Us</h1>
            <p className="about-text">
              Our team is dedicated to innovation and excellence. From humble beginnings, we've grown into a company that leads the industry, always striving for the best results. With every project, we push the boundaries of what’s possible.
            </p>
            <p className="about-text">
              We focus on building relationships with our clients, ensuring that their needs are met at every stage. Our team of experts is always ready to provide solutions tailored to each client's specific requirements.
            </p>
            <p className="about-text">
              As we continue to expand, we remain committed to our core values: integrity, innovation, and quality. We believe that with hard work and a vision for the future, we can continue to make a positive impact on both the industry and the world.
            </p>
            <a href="#!" className="btn btn-primary mt-4">Learn More</a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
