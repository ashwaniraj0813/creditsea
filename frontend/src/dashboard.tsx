import React from 'react';
import './dashboard.css';
import RecentLoansTable from "./components/loantable.tsx"


const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="profile-section">
        <div className="profile-img"></div>
        <h4>John Doe</h4>
      </div>
      <ul className="sidebar-menu">
        <li><span className="material-icons">dashboard</span> Dashboard</li>
        <li><span className="material-icons">people</span> Borrowers</li>
        <li><span className="material-icons">account_balance_wallet</span> Loans</li>
        <li><span className="material-icons">payment</span> Repayments</li>
        <li><span className="material-icons">tune</span> Loan Parameters</li>
        <li><span className="material-icons">account_balance</span> Accounting</li>
        <li><span className="material-icons">report</span> Reports</li>
        <li><span className="material-icons">account_box</span> Collateral</li>
        <li><span className="material-icons">settings</span> Access Configuration</li>
        <li><span className="material-icons">savings</span> Savings</li>
        <li><span className="material-icons">account_balance</span> Other Incomes</li>
        <li><span className="material-icons">payments</span> Payroll</li>
        <li><span className="material-icons">money</span> Expenses</li>
        <li><span className="material-icons">edit</span> E-signature</li>
        <li><span className="material-icons">calendar_today</span> Calendar</li>
        <li><span className="material-icons">settings</span> Settings</li>
        <li><span className="material-icons">logout</span> Sign Out</li>
      </ul>
    </div>
  );
};


const DashboardCards = () => {
  return (
    <div ><p className='heading'>Dashboard</p>
    <div className="dashboard-cards">
        
      <div className="card">
        <span className="material-icons">group</span>
        <div>200</div>
        <div>ACTIVE USERS</div>
      </div>
      <div className="card">
        <span className="material-icons">people</span>
        <div>100</div>
        <div>BORROWERS</div>
      </div>
      <div className="card">
        <span className="material-icons">savings</span>
        <div>450,000</div>
        <div>SAVINGS</div>
      </div>
      <div className="card">
        <span className="material-icons">done</span>
        <div>30</div>
        <div>REPAID LOANS</div>
      </div>
      <div className="card">
        <span className="material-icons">account_balance_wallet</span>
        <div>550,000</div>
        <div>CASH DISBURSED</div>
      </div>
      <div className="card">
        <span className="material-icons">account_balance</span>
        <div>10</div>
        <div>OTHER ACCOUNTS</div>
      </div>
      <div className="card">
        <span className="material-icons">payments</span>
        <div>1,000,000</div>
        <div>CASH RECEIVED</div>
      </div>
      <div className="card">
        <span className="material-icons">attach_money</span>
        <div>50</div>
        <div>LOANS</div>
      </div>
    </div>
    </div>
  );
};




const Dashboard = () => {
  return (
    <div className="dashboard">
      <Sidebar />
      <div className="main-content">
        <DashboardCards />
        <RecentLoansTable />
      </div>
    </div>
  );
};

export default Dashboard;
