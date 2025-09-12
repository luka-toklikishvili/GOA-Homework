import React from 'react'
import Navbar from './components/navbar'
import Mentorsasistans from './components/mentors-asistans'
import Myinfo from './components/my-info'
import Counter from './components/counter'
import Changetext from './components/changetext'


export default function App() {
  return (
    <div>
      <Navbar/>
      <p className='Title'>Group 48</p>
      <div className='div1'>
        <h1 className='mentor'>Mentor</h1>
        <p>დავით გრძელიშვილი</p>
      </div>
      <div className='div2'>
        <h1>Students</h1>
        <li>ლიზა ღიბრაძე</li>
        <li>გიორგი აბუაშვილი</li>
        <li>ნიკოლოზ პეტრიაშვილი</li>
        <li>თორნიკე ჟუჟნიაშვილი</li>
        <li>გიორგი დათაშვილი</li>
      </div>
      <Mentorsasistans/>
      <Myinfo/>
      <Counter/>
      <Changetext/>

    </div>
  )
}


