import React from 'react';
import { Home, Globe, Bell } from 'lucide-react';

const ContactForm = () => {
  const [formData, setFormData] = React.useState({
    name: '',
    email: '',
    company: '',
    phone: '',
    industry: 'healthcare',
    message: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    alert("Thanks for your message! We'll be in touch soon.");
    setFormData({
      name: '',
      email: '',
      company: '',
      phone: '',
      industry: 'healthcare',
      message: ''
    });
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevData => ({
      ...prevData,
      [name]: value
    }));
  };

  return (
    <div className="contact-form">
      <h2>Contact Form</h2>
      {/* Add your contact form content here */}
    </div>
  );
};

export default ContactForm;