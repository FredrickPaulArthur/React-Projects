import './App.css'



export default function App()
{
  return (
    <>
    <div>
      <h1>A Travel List</h1>
      
      <Logo />
      <Form />
      <PackingList />
      <Stats />
    </div>
    </>
  )
}





// COMPONENTS


function Logo()
{
  return(
    <h1>🌴 Far Away 💼</h1>
  )
}


function Form()
{
  return(
    <div className='add-form'>
      <h3>What do you need for the Trip?🤔</h3>
    </div>
  )
}


function PackingList()
{
  return(
    <div className='list'>
      <h3>LIST</h3>
    </div>
  )
}


function Stats()
{
 return(
  <footer>
    <em>💼You have X items on your list, and you alerady packed Y (Y%).</em>
  </footer>
 ) 
}