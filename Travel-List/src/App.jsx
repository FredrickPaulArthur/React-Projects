import { useState } from 'react';
import './App.css'



export default function App()
{
  const [items, setItems] = useState([])    // Lift up this state

  function handleAddItems(item)
  {
    // setItems((items) => items.push(item))   // Can't be done
    setItems((items) => [...items, item])
  }

  function handleDeleteItem(id)
  {
    setItems((items) => items.filter(item => item.id !== id))
  }

  function handleToggleItem(id)
  {
    setItems(items => items.map(
      (item) => item.id === id
      ? {...item, packed: !item.packed}
      : item
    ))
  }

  return (
    <>
    <div>
      <h1>A Travel List</h1>
      
      <Logo />
      <Form onAddItems={ handleAddItems }/>
      <PackingList items={ items } onDeleteItem={ handleDeleteItem } onToggleItem= { handleToggleItem } />
      <Stats items={ items } />
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



function Form({ onAddItems })
{
  const [description, setDescription] = useState("")    // Item Description - set to "value" element of a Tag (html input tag)
  const [quantity, setQuantity] = useState(1)


  function handleSubmit(event)
  {
    event.preventDefault();   // By Default the whole page Reloads. Now it only does POST

    if (!description)
      return

    const newItem = {
      id: Date.now(), 
      description: description,
      quantity: quantity,
      packed: false,
    }
    console.log(newItem)

    onAddItems(newItem)
    // initialItems.push(newItem)    // Doesnt render because its not State

    setDescription("")
    setQuantity(1)
  }


  return(
    <form className='add-form' onSubmit={ handleSubmit }>
      <h3>What do you need for the Trip?🤔</h3>
      
      {/* "value" here comes from the <option> being selected. */}
      <select value={quantity} onChange={(event) => setQuantity(Number(event.target.value))}>
        { 
          Array
          .from({length: 20}, (_, i) => i+1)
          .map((num) =>
            <option value={num} key={num}>
              {num}
            </option>
          )
        }
      </select>

      {/* This Renders the entire <input> tag with a new Value as description changes with onChange event */}
      <input type="text" 
        placeholder="Item..."
        value={description} 
        onChange={(event) => setDescription(event.target.value)}
      />
      <button>Add</button>
    </form>
  )
}



function PackingList({ items, onDeleteItem, onToggleItem })
{
  return(
    <div className='list'>
    {
      items   // initialItems
      .map((item) =>
        <Item item={item} key={item.id} onDeleteItem={ onDeleteItem } onToggleItem={ onToggleItem } />
      )
    }
    </div>
  )
}



function Item({ item, onDeleteItem, onToggleItem })
{
  return(
    <li>
      <input type='checkbox' value={ item.packed } 
        onClick={ () => onToggleItem(item.id) }
      />
      <span style={item.packed ? {textDecoration : "line-through"} : {}}>
        {item.quantity} {item.description}
      </span>
      <button onClick={ () => onDeleteItem(item.id) }>❌</button>
    </li>
  )
}



function Stats({ items })
{
  if (!items.length)
    return(
      <p className='stats'>
        <em>Start adding some items to your packing list📃</em>
      </p>
    )

  const numItems = items.length
  const numPacked = items.filter((item) => item.packed).length
  const percPacked = (numPacked/numItems).toPrecision(2) *100

  return(
    <footer className='stats'>
      <em>
        {
          percPacked === 100
          ? 'You got everything! Ready to go ✈️'
          : `💼You have ${numItems} items on your list, and you alerady packed ${numPacked} (${percPacked}%).`
        }
      </em>
    </footer>
  )
}





// const initialItems = [
//   { id: 1, description: "Passports", quantity: 2, packed: false },
//   { id: 2, description: "Socks", quantity: 12, packed: false },
//   { id: 3, description: "Charger", quantity: 1, packed: true },
// ];