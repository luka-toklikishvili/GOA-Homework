import logo from '.assets/react.svg';
import './App.css';
import { useState, useEffect } from "react";

function App() {

  // manage the state when input element is focused 
  const [isFocused1, setIsFocused1] = useState(false);
  const [isFocused2, setIsFocused2] = useState(false);
  const [isFocused3, setIsFocused3] = useState(false);

  // manage a state for the errors
  const [isError, setIsError] = useState(false);

  // manage the state for the radio buttons
  const [isSelected1, setIsSelected1] = useState(false);
  const [isSelected2, setIsSelected2] = useState(false);

  // manage the values for the input fields
  const [amount, setAmount] = useState('');
  const [term, setTerm] = useState('');
  const [percent, setPercent] = useState('');

  // manage the answers
  const [mp, setMP] = useState(0);
  const [overallp, setOverallP] = useState(0);

  // check when the form is submitted or not
  const [formSubmitted, setFormSubmitted] = useState(false);

  const handleFocus1 = () => {
    setIsFocused1(true);
  };
  const handleFocus2 = () => {
    setIsFocused2(true);
  };
  const handleFocus3 = () => {
    setIsFocused3(true);
  };

  const handleBlur1 = () => {
    setIsFocused1(false);
  };
  const handleBlur2 = () => {
    setIsFocused2(false);
  };
  const handleBlur3 = () => {
    setIsFocused3(false);
  };

  const handleSelected1 = () =>{
    setIsSelected1(true);
  }
  const handleSelected2 = () =>{
    setIsSelected2(true);
  }
  const handleUnselected1 = () =>{
    setIsSelected1(false);
  }
  const handleUnselected2 = () =>{
    setIsSelected2(false);
  }

  const handleRadio = (e) => {
    //console.log(e.target.value);
    if(e.target.value==='opt-1'){
      setIsSelected1(true);
      setIsSelected2(false);
    } else if (e.target.value==='opt-2'){
      setIsSelected2(true);
      setIsSelected1(false);
    }
  }

  // handle the data when the form is submitted
  const handleSubmit = (e) =>{

    e.preventDefault();
    console.log(amount);
    console.log(term);
    console.log(percent);

    // check for empty fields
    if ( (amount==='') || (term==='') || (percent==='') || (!isSelected1 && !isSelected2)  ){
      setIsError(true);
      return;
    }

    setFormSubmitted(true);

    let monthlyPayment = 0;
    const monthlyInterest = (percent/100)/12;
    const numMonthlyPayments = term * 12;

    if(isSelected1){

      monthlyPayment = (monthlyInterest) * ( (1+monthlyInterest)**numMonthlyPayments);
      monthlyPayment = (monthlyPayment) /  ( ( (1+monthlyInterest)**numMonthlyPayments ) -1 );
      monthlyPayment = monthlyPayment * amount;
      //console.log(monthlyPayment);
      setMP(monthlyPayment);

      let totalRepayment = monthlyPayment * numMonthlyPayments;
      //console.log(totalRepayment);
      setOverallP(totalRepayment);

    } else if (isSelected2){

      let monthlyInterestPayment = amount * monthlyInterest;
      let totalInterestPaid = monthlyInterestPayment * numMonthlyPayments;
      setMP(monthlyInterestPayment);
      //console.log("total interest "+totalInterestPaid);
      totalInterestPaid += Number(amount);
      setOverallP(totalInterestPaid);
      //console.log(totalInterestPaid);
      //console.log(monthlyInterestPayment);

    }
    

  }

  // when the form is cleared
  const handleClear = () => {
    setIsSelected1(false);
    setIsSelected2(false);
    setAmount('');
    setPercent('');
    setTerm('');
    setFormSubmitted(false);
    setIsError(false);
  }


 
  return (
    <div className="App">
      { /* <p style={isAnswered ? { backgroundColor: 'green', fontWeight: 'bold', color:'white' } : {}}>{q1}</p>
      <button onClick={answerQ1}>Reveal answer</button> */ }
      <div className='outer-container'>

        <div className="main-container">

          <div className="left-half">

            <div className='title'>
              <h3>Mortgage Calculator</h3>
              <p onClick={handleClear}>Clear all</p>
            </div>

            <form onSubmit={handleSubmit}>

              <label className='amount-label'>Mortagage Amount</label>
              <div className='input-1-container'>
                <div className={`currency-sign ${isFocused1 ? 'focused-input' : 'not-focused-input'} 
                  ${ (isError && !isFocused1 && amount==='') ? 'error-input' : '' }`}>£</div>
                <input type="number" min='0' className={`input-1 ${ (isError && !isFocused1 && amount==='') ? 'error-bg' : 'no-err' }`} 
                  onFocus={handleFocus1} onBlur={handleBlur1}
                  value = {amount} onChange={ (e) => setAmount(e.target.value) }
                />
              </div>
              {/*<span style={{fontSize : '0.7rem',
                position: 'relative',
                bottom: '49px',
                left: '290px',
                fontWeight : 'lighter'
              }}>{Number(amount).toLocaleString()}</span>*/}
              { (isError && (amount==='')) ? <p style={{marginBottom: '10px'}} className='error'>This field is required</p> : '' }


              <div className='term-outer-container'>

                <div className='term-container'>
                  <label className='amount-label'>Mortagage Term</label>
                  <div className='input-2-container'>
                    <input type="number" min='0' className={`input-2 ${ (isError && !isFocused2 && term==='') ? 'error-bg' : 'no-err' }`} 
                      onFocus={handleFocus2} onBlur={handleBlur2}
                      value = {term} onChange={ (e) => setTerm(e.target.value) }
                    />
                    <div className={ `years-sign ${isFocused2 ? 'focused-input' : 'not-focused-input'}
                      ${ (isError && !isFocused2 && term==='') ? 'error-input' : '' }` }>years</div>
                  </div>
                  { (isError && (term==='')) ? <p className='error'>This field is required</p> : '' }
                </div>

                <div className='term-container'>
                  <label className='amount-label'>Interest Rate</label>
                  <div className='input-2-container'>
                    <input type="number" className={`input-2 ${ (isError && !isFocused3 && percent==='') ? 'error-bg' : 'no-err' }`} 
                      onFocus={handleFocus3} onBlur={handleBlur3}
                      value = {percent} onChange={ (e) => setPercent(e.target.value) }
                    />
                    <div style={{width:'30px'}} className={ `years-sign ${isFocused3 ? 'focused-input' : 'not-focused-input'}
                    ${ (isError && !isFocused3 && percent==='') ? 'error-input' : '' }` }>%</div>
                  </div>
                  { (isError && (percent==='')) ? <p className='error'>This field is required</p> : '' }
                </div>

              </div>
              

              <p className='type-para'>Mortgage Type</p>
              <div className={ `opt-buttons ${isSelected1 ? 'opt-buttons-selected' : ''}` } >
                <input type="radio" id="opt-1" value='opt-1' onChange={handleRadio} checked={isSelected1===true} />
                <label htmlFor="opt-1">Repayment</label>
              </div>
              <div className={ `opt-buttons ${isSelected2 ? 'opt-buttons-selected' : ''}` } >
                <input type="radio" id="opt-2" value='opt-2' onChange={handleRadio} checked={isSelected2===true}/>
                <label htmlFor="opt-2">Interest Only</label>
              </div>
              {/* check if not submitted */}
              { (!isSelected1 && !isSelected2 && isError) ? <p className='error'>This field is required</p> : '' }

              <button className='submit-button' style={{ backgroundImage: `url(${process.env.PUBLIC_URL + '/icon-calculator.svg'})`,
                backgroundRepeat: 'no-repeat',
                backgroundPosition: 'left',
                backgroundPositionX: '15px'
                }}>Calculate Repayments</button>
              {/*<img src="/icon-calculator.svg" alt="example" />*/}

            </form>

          </div>

          {!formSubmitted ? (
             <div className='right-half show'>
              <div className='rh-outer-container'>
                <div>
                  <img className='empty-img' src={`${process.env.PUBLIC_URL}/illustration-empty.svg`} alt="illustration-image" />
                </div>
                <h3 className='empty-result-heading'>Results Shown Here</h3>
                <p className='empty-result-para'>
                  Complete the form and click “calculate repayments” to see what 
                  your monthly repayments would be.
                </p>
              </div>
            </div>
          ) : (
            <div className='right-half-completed show-2'>
              <h3>Your results</h3>
              <p>
                Your results are shown below based on the information your provided. To adjust the results,
                edit the form and click "calculate repayments" again.
              </p>
              <div className='results-container'>
                <p>Your monthly repayments</p>
                <h1>£{ Number(mp.toFixed(2)).toLocaleString() }</h1>
                <div className='dividing-line'></div>
                <p>Total you'll pay over the term</p>
                <h3>£{Number(overallp.toFixed(2)).toLocaleString()}</h3>
              </div>
            </div>
          )}

        </div>

      </div>

    </div>
  );
}

export default App;
