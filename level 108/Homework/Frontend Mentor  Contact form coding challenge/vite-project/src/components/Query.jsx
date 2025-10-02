import React, { useState, useEffect } from 'react';

const Query = ({ onValidate, formSubmitted }) => {
    const [selectedOption, setSelectedOption] = useState('');
    const [errorQuery, setErrorQuery] = useState('');

    const handleClick = (option) => {
        setSelectedOption(option);
    }

    useEffect(() => {
        if (formSubmitted) {
            const isValid = selectedOption !== '';
            onValidate(isValid);

            if (!isValid) {
                setErrorQuery('Please select a query type');
            } else {
                setErrorQuery('');
            }
        } else {
            // Reset error message when form is not submitted
            setErrorQuery('');
        }
    }, [selectedOption, onValidate, formSubmitted]);

    return (
        <div className='py-2'>
            <label className="text-Dark-grey">Query Type <span className="text-Medium-green">*</span></label>
            <div className="pt-3 sm:flex sm:justify-between">
                <div onClick={() => handleClick('option1')} className="mb-3 border border-Medium-grey hover:border-Medium-green p-3 rounded-md outline-none flex justify-start items-center sm:w-half cursor-pointer">
                    <input className="ml-3" type="radio" checked={selectedOption === 'option1'} value="option1" name="query" id="FirstName" />
                    <p className="pl-3">General Enquiry</p>
                </div>
                <div onClick={() => handleClick('option2')} className="mb-3 border border-Medium-grey hover:border-Medium-green p-3 rounded-md outline-none flex justify-start items-center sm:w-half cursor-pointer">
                    <input className="ml-3" type="radio" checked={selectedOption === 'option2'} value="option2" name="query" id="LastName" />
                    <p className="pl-3">Support Request</p>
                </div>
            </div>
            <span className="text-Red">{errorQuery}</span>
        </div>
    );
}

export default Query;