import React, { useState, useEffect } from 'react';

const Message = ({ onValidate, formSubmitted }) => {
  const [message, setMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleMessage = (e) => {
    setMessage(e.target.value);
  };

  useEffect(() => {
    if (formSubmitted) {
      const isValid = message.trim() !== '';
      onValidate(isValid);
      setErrorMessage(isValid ? '' : 'This field is required');
    } else {
      // Reset error message when form is not submitted
      setErrorMessage('');
    }
  }, [message, onValidate, formSubmitted]);

  return (
    <div className="flex flex-col cursor-pointer">
      <label className="pb-2 text-Dark-grey">
        Message <span className="text-Medium-green">*</span>
      </label>
      <textarea
        rows="8"
        className={`border ${errorMessage ? 'border-Red' : 'border-Medium-grey'} hover:border-Medium-green p-3 rounded-md outline-none`}
        value={message}
        onChange={handleMessage}
      ></textarea>
      <span className="text-Red">{errorMessage}</span>
    </div>
  );
};

export default Message;