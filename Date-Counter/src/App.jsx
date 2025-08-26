import { useState } from 'react'
import './App.css'



export default function App() {
  return (
    <>
    <div className='App'>
      <h1>Hello this is the Date-Counter App</h1>
      <h2>Start counting now!</h2>

      <Counter />
    </div>
    </>
  )
}





// COMPONENTS

function Counter()
{
  const [count, setCount] = useState(0);
  const [step, setStep] = useState(1);

  // const date = new Date('June 21 2027');
  const date = new Date();
  date.setDate(date.getDate() + count);

  return (
    <div>
      <div>
        <button onClick={() => setStep(c => c-1)}>-</button>
        <span>Step: {step}</span>
        <button onClick={() => setStep(c => c+1)}>+</button>
      </div>

      <div>
        <button onClick={() => setCount(c => c-step)}>-</button>
        <span>Count: {count}</span>
        <button onClick={() => setCount(c => c+step)}>+</button>
      </div>

      <p>
        <span>
          {
            count === 0
            ? "Today is "
            : count > 0
            ? `${count} days from today will be `
            : `${Math.abs(count)} days ago was `
          }
        </span>

        <span>{ date.toDateString() }</span>
      </p>
    </div>
  )
}


function Step()
{

}