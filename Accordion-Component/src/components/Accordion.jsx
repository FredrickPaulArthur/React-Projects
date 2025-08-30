import AccordionItem from './AccordionItem';




export default function Accordion({ data }) {
  return(
    <div className='accordion'>
      {
        data
        .map((el, ind) =>
          <AccordionItem key={ind} num={ind+1} title={el.title} text={el.text} />
        )
      }
    </div>
  )
}