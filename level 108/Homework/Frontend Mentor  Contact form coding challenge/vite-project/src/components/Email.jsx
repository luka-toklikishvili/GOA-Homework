import React, { useState, useEffect } from 'react';

const RegEx = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const Email = ({ onValidate, formSubmitted }) => {
  const [email, setEmail] = useState('');
  const [errorEmail, setErrorEmail] = useState('');

  const handleEmail = (e) => {
    const newEmail = e.target.value;
    setEmail(newEmail);
    if (formSubmitted) {
      validateEmail(newEmail);
    }
  };

  const validateEmail = (email) => {
    const isValid = RegEx.test(email);
    onValidate(isValid);
    setErrorEmail(isValid ? '' : 'Please enter a valid email address');
  };

  useEffect(() => {
    if (formSubmitted) {
      validateEmail(email);
    }
  }, [email, onValidate, formSubmitted]);

  return (
    <div className="pb-3 flex flex-col cursor-pointer">
      <label className="pb-2 text-Dark-grey">
        Email Address <span className="text-Medium-green">*</span>
      </label>
      <input
        className={`border ${
          errorEmail ? 'border-Red' : 'border-Medium-grey'
        } hover:border-Medium-green p-3 rounded-md outline-none`}
        type="text"
        name="Email"
        value={email}
        onChange={handleEmail}
        id="Email"
      />
      <span className="text-Red">{errorEmail}</span>
    </div>
  );
};

export default Email;