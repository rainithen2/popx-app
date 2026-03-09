import React from 'react';
import './Account.css';

const Account = () => {
  return (
    <div className="account-container">
      <h2 className="account-title">Account Settings</h2>

      <div className="account-profile">
        <div className="account-avatar">
          <div className="account-avatar-inner" />
        </div>
        <div className="account-info">
          <h3 className="account-name">Marry Doe</h3>
          <p className="account-email">Marry@Gmail.Com</p>
        </div>
      </div>

      <p className="account-bio">
        Lorem Ipsum Dolor Sit Amet, Consetetur Sadipscing Elitr, Sed Diam Nonumy 
        Eirmod Tempor Invidunt Ut Labore Et Dolore Magna Aliquyam Erat, Sed Diam
      </p>
    </div>
  );
};

export default Account;