import React, { useState, useEffect } from 'react';

const Name = ({ onValidate, formSubmitted }) => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [errorFirstName, setErrorFirstName] = useState('');
  const [errorLastName, setErrorLastName] = useState('');

  const handleFN = (e) => {
    setFirstName(e.target.value);
  };

  const handleLN = (e) => {
    setLastName(e.target.value);
  };

  useEffect(() => {
    const validate = () => {
      const isFirstNameValid = firstName.trim() !== '';
      const isLastNameValid = lastName.trim() !== '';
      const isValid = isFirstNameValid && isLastNameValid;

      onValidate(isValid);

      setErrorFirstName(isFirstNameValid ? '' : 'This field is required');
      setErrorLastName(isLastNameValid ? '' : 'This field is required');
    };

    if (formSubmitted) {
      validate();
    }
  }, [firstName, lastName, onValidate, formSubmitted]);

  return (
    <div className="pb-5 sm:flex sm:justify-between">
      <div className="pb-3 flex flex-col sm:w-half cursor-pointer">
        <label className="pb-2 text-Dark-grey">
          First Name <span className="text-Medium-green">*</span>
        </label>
        <input
          className={`border p-3 rounded-md outline-none ${errorFirstName ? 'border-Red' : 'border-Medium-grey'
            } hover:border-Medium-green`}
          type="text"
          value={firstName}
          onChange={handleFN}
          name="FirstName"
          id="FirstName"
        />
        {formSubmitted && <span className="text-Red">{errorFirstName}</span>}
      </div>
      <div className="flex flex-col sm:w-half cursor-pointer">
        <label className="pb-2 text-Dark-grey">
          Last Name <span className="text-Medium-green">*</span>
        </label>
        <input
          className={`border ${errorLastName ? 'border-Red' : 'border-Medium-grey'
            } hover:border-Medium-green p-3 rounded-md outline-none`}
          type="text"
          value={lastName}
          onChange={handleLN}
          name="LastName"
          id="LastName"
        />
        {formSubmitted && <span className="text-Red">{errorLastName}</span>}
      </div>
    </div>
  );
};

export default Name;