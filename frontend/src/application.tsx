import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';  
import Navbar from './components/navbar.tsx';
import './application.css';

const Application = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    loanAmount: '',
    loanTenure: '',
    reason: '',
    employmentStatus: '',
    employmentAddress: '',
    consent1: false,
    consent2: false,
  });

  const [error, setError] = useState('');  
  const navigate = useNavigate();


  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === 'checkbox' ? checked : value,
    });
  };

 
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      
      const response = await axios.post('http://localhost:5000/api/apply', formData); 


    
      if (response.status === 201) {
        navigate('/dashboard');
      } else {
        setError('Something went wrong, please try again.');
      }
    } catch (err) {
      console.error(err);
      setError('Failed to submit the form. Please try again later.');
    }
  };

  return (
    <div className="loan-app">
      <Navbar />
      <div className="loan-form-container">
        <form onSubmit={handleSubmit} className="loan-form">
          <h2>APPLY FOR A LOAN</h2>

          {error && <p className="error-message">{error}</p>}
          <div className="form-row">
            <div className="form-group">
              <label>Full name as it appears on bank account</label>
              <input
                type="text"
                name="fullName"
                value={formData.fullName}
                onChange={handleChange}
                placeholder="Full name as it appears on bank account"
                required
              />
            </div>

            <div className="form-group">
              <label>How much do you need?</label>
              <input
                type="text"
                name="loanAmount"
                value={formData.loanAmount}
                onChange={handleChange}
                placeholder="How much do you need?"
                required
              />
            </div>
          </div>

          <div className="form-row">
            <div className="form-group">
              <label>Loan tenure (in months)</label>
              <input
                type="text"
                name="loanTenure"
                value={formData.loanTenure}
                onChange={handleChange}
                placeholder="Loan tenure (in months)"
                required
              />
            </div>

            <div className="form-group">
              <label>Employment status</label>
              <input
                type="text"
                name="employmentStatus"
                value={formData.employmentStatus}
                onChange={handleChange}
                placeholder="Employment status"
                required
              />
            </div>
          </div>

          <div className="form-row">
            <div className="form-group">
              <label>Reason for loan</label>
              <textarea
                name="reason"
                value={formData.reason}
                onChange={handleChange}
                placeholder="Reason for loan"
                required
              />
            </div>

            <div className="form-group">
              <label>Employment address</label>
              <input
                type="text"
                name="employmentAddress"
                value={formData.employmentAddress}
                onChange={handleChange}
                placeholder="Employment address"
                required
              />
            </div>
          </div>

          <div className="consent-group">
            <div className="consent">
              <input
                type="checkbox"
                name="consent1"
                checked={formData.consent1}
                onChange={handleChange}
                required
              />
              <label>
                I have read the important information and accept that by completing the application I will be bound by the terms.
              </label>
            </div>

            <div className="consent">
              <input
                type="checkbox"
                name="consent2"
                checked={formData.consent2}
                onChange={handleChange}
                required
              />
              <label>
                Any personal and credit information obtained may be disclosed from time to time to other lenders, credit bureaus, or other credit reporting agencies.
              </label>
            </div>
          </div>

          <button type="submit" className="submit-btn">Submit</button>
        </form>
      </div>
    </div>
  );
};

export default Application;

