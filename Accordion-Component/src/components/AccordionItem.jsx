import { useState } from 'react'
import '../App.css'



export default function AccordionItem({ num, title, text })
{
  const [isOpen, setIsOpen] = useState(false)

  return(
    <div className={`item ${isOpen ? "open" : ""}`} onClick={() => {setIsOpen(!isOpen)}}>
      <p className='number'>{ num }</p>
      <p className='title'>{ title }</p>
      <p className='icon'>
        { isOpen ? '-' : "+" }
      </p>
      { isOpen && <div className='content-box'>{ text }</div> }
    </div>
  )
}