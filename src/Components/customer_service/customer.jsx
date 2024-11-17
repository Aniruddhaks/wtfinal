import React from 'react';
import { Phone, Mail, Clock, Car, MessageSquare, Calendar, Settings } from 'lucide-react';
import './customer.css'

const CustomerService = () => {
  const services = [
    {
      icon: <Car size={24} />,
      title: "Vehicle Purchase Inquiries",
      description: "Get expert guidance on our vehicle selection and detailed recommendations based on your needs.",
      phone: "+91 98123 45678"
    },
    {
      icon: <Settings size={24} />,
      title: "Service & Maintenance",
      description: "Schedule maintenance, repairs, and regular servicing for your vehicle.",
      phone: "+91 98123 45678"
    },
    {
      icon: <MessageSquare size={24} />,
      title: "General Support",
      description: "Questions about our dealership, financing options, or other inquiries.",
      phone: "+91 98123 45678"
    }
  ];

  const hours = [
    { day: "Monday - Friday", time: "8:00 AM - 7:00 PM" },
    { day: "Saturday", time: "9:00 AM - 5:00 PM" },
    { day: "Sunday", time: "Closed" }
  ];

  return (
    <div className="page">
      <div className="hero">
        <div className="container">
          <h1 className="title">Customer Service</h1>
          <p className="subtitle">We're here to help with all your automotive needs</p>
        </div>
      </div>

      <div className="container">
        {/* Contact Cards */}
        <div className="services">
          {services.map((service, index) => (
            <div key={index} className="service-card">
              <div className="icon">{service.icon}</div>
              <h3 className="card-title">{service.title}</h3>
              <p className="text">{service.description}</p>
              <div className="phone">
                <Phone size={16} />
                <span>{service.phone}</span>
              </div>
            </div>
          ))}
        </div>

        {/* Business Hours & Email */}
        <div className="info-section">
          <div className="hours-card">
            <div className="card-header">
              <Clock size={24} />
              <h2 className="card-title">Business Hours</h2>
            </div>
            <div className="hours-list">
              {hours.map((item, index) => (
                <div key={index} className="hours-item">
                  <span className="day">{item.day}</span>
                  <span className="time">{item.time}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="contact-card">
            <div className="card-header">
              <Mail size={24} />
              <h2 className="card-title">Email Us</h2>
            </div>
            <p className="text">For non-urgent inquiries, email us at:</p>
            <a href="mailto:support@ignitionx.com" className="email">
              support@ignitionx.com
            </a>
          </div>
        </div>

        {/* Service Booking */}
        <div className="booking-section">
          <div className="card-header">
            <Calendar size={24} />
            <h2 className="card-title">Schedule a Service</h2>
          </div>
          <p className="text">
            call our service department to schedule an appointment.
            Our certified technicians are ready to help maintain your vehicle in top condition.
          </p>
        </div>
      </div>
    </div>
  );
};

export default CustomerService;