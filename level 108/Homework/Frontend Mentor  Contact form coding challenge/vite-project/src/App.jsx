import { useState } from 'react';
import Name from './components/Name';
import Query from './components/Query';
import Email from './components/Email';
import Message from './components/Message';
import Check from './components/Check';
import Response from './components/Response'

const App = () => {
  const [isFirstAndLastNameValid, setIsFirstAndLastNameValid] = useState(false);
  const [isEmailValid, setIsEmailValid] = useState(false);
  const [isQueryValid, setIsQueryValid] = useState(false);
  const [isMessageValid, setIsMessageValid] = useState(false);
  const [isCheckValid, setIsCheckValid] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [showResponse,setShowResponse]= useState(false);

  const handleNames = (result) => {
    setIsFirstAndLastNameValid(result);
  };

  const handleEmail = (result) => {
    setIsEmailValid(result);
  };

  const handleQuery = (result) => {
    setIsQueryValid(result);
  };

  const handleMessage = (result) => {
    setIsMessageValid(result);
  };

  const handleCheck = (result) => {
    setIsCheckValid(result);
  };

  const handleValidation = (e) => {
    e.preventDefault();
    const isValid =
      isFirstAndLastNameValid &&
      isEmailValid &&
      isQueryValid &&
      isMessageValid &&
      isCheckValid;
      setFormSubmitted(true);
      setShowResponse(isValid ? true : false);
    return isValid;
  }

  return (
    <div>
      {showResponse && <Response />}
      <form
        onSubmit={handleValidation}
        className="font-Karla bg-White w-container mx-auto p-4 rounded-2xl md:w-MoreHalf lg:w-DesktopContainer md:mx-auto max-w-screen-sm md:my-5 lg:mt-5 xl:mt-10 xl:p-7"
      >
        <h1 className="text-Dark-grey font-bold text-2xl pb-5">Contact Us</h1>
        <Name onValidate={handleNames} formSubmitted={formSubmitted} />
        <Email onValidate={handleEmail} formSubmitted={formSubmitted} />
        <Query onValidate={handleQuery} formSubmitted={formSubmitted} />
        <Message onValidate={handleMessage} formSubmitted={formSubmitted} />
        <Check onValidate={handleCheck} formSubmitted={formSubmitted} />
        <input
          className="w-full p-3 rounded-xl bg-Medium-green text-White cursor-pointer"
          type="submit"
          value="Submit"
        />
      </form>
    </div>
  )
}

export default App;
