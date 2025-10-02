import React from 'react'
import { useState, useEffect } from 'react'
import '../../src/index.css'
const Check = ({ onValidate,formSubmitted }) => {
  const [Selected, setSelected] = useState(false);
  const [errorCheck, setErrorCheck] = useState('');
  const handleClick = () => {
    if (Selected == false) {
      setSelected(true);
    }
    else {
      setSelected(false);
    }
  }
  useEffect(() => {
    if (formSubmitted) {
      const isValid = Selected;
      onValidate(isValid);

      if (!Selected) {
        setErrorCheck('To submit this form, please consent to being contacted.');
      } else {
        setErrorCheck('');
      }
    }
  }, [Selected, formSubmitted, onValidate]);

  return (
    <div onClick={handleClick} className="py-7 flex flex-col">
      <div className="flex justify-start content-center cursor-pointer">
        <input className="cursor-pointer" type="checkbox" checked={Selected} onClick={handleClick}></input>
        <p className="pl-4 text-Dark-grey">I consent to being contacted by the team <span className="text-Medium-green">*</span></p>
      </div>
      {formSubmitted && <span className="text-Red">{errorCheck}</span>}
    </div>
  )
}

export default Check