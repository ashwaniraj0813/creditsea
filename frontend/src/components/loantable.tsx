import React, { useState, useEffect } from 'react';
import axios from 'axios';  

const RecentLoansTable = () => {
  const [loans, setLoans] = useState([]);  
  const [error, setError] = useState('');  


  useEffect(() => {
    const fetchLoans = async () => {
      try {
        const response = await axios.get('http://localhost:5000/api/loans');
        console.log(response.data); 
        setLoans(response.data);  
      } catch (err) {
        console.error(err);
        setError('Failed to fetch loans. Please try again later.');
      }
    };

    fetchLoans();
  }, []);

 
  const handleStatusClick = async (id) => {
    try {
      const updatedLoan = loans.find((loan) => loan._id === id); 
      const newStatus = updatedLoan.status === 'PENDING' ? 'APPROVED' : 'PENDING';

      
      const response = await axios.put(`http://localhost:5000/api/loans/${id}`, { status: newStatus });

      
      setLoans((prevLoans) =>
        prevLoans.map((loan) =>
          loan._id === id ? { ...loan, status: newStatus } : loan
        )
      );
    } catch (err) {
      console.error(err);
      setError('Failed to update loan status. Please try again later.');
    }
  };

  
  const parseDate = (dateString) => {
    const date = new Date(dateString);
    return isNaN(date) ? 'Invalid date' : date.toLocaleDateString();
  };

  return (
    <div className="recent-loans-table">
      <h3>Recent Loans</h3>

      {error && <p className="error-message">{error}</p>} 

      <table>
        <thead>
          <tr>
            <th>User details</th>
            <th>Customer name</th>
            <th>Date</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {loans.length > 0 ? (
            loans.map((loan) => (
              <tr key={loan._id}>
                <td>{loan.reason}</td>  
                <td>{loan.fullName}</td>
                <td>{parseDate(loan.createdAt)}</td> 
                <td>
                  <button
                    className={`status-button ${loan.status.toLowerCase()}`}
                    onClick={() => handleStatusClick(loan._id)} 
                  >
                    {loan.status}
                  </button>
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="4">No loans available</td>
            </tr>
          )}
        </tbody>
      </table>
      
    </div>
  );
};

export default RecentLoansTable;




