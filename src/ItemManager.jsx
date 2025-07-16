import { useState } from 'react'
import toast, { Toaster } from 'react-hot-toast';


function ItemManager({title,items,setItems}){ 
//const [items, setItems] = useState([]);
const [input, setInput] = useState('');

const handleAddItem= () => {
    if (input.trim()==='') {
        toast("Invalid input");
        return;
    }
    const alreadyExists = (
        items.some((i) => i.name.toLowerCase() === input.trim().toLowerCase())
    )
    if (alreadyExists) {
        toast("Already exists");
        return;
    }
    
    const newItem ={
        id: Date.now(),
        name: input,
        number:0,
        category: null,
        toggled: false
    }
    setItems([...items, newItem]);
    setInput('')
};
const handleDeleteItem=(idd) =>{
    setItems(items.filter((item) => item.id !== idd))

};

return(
   <section>
  <h2>{title}</h2>
  <input value={input} onChange={(e) => setInput(e.target.value)} placeholder="Type in an item"/>
  <button onClick={handleAddItem}>Add</button>
  <ul>
    {items.map(item => (
      <li key={item.id}>{item.name}<button onClick={()=>handleDeleteItem(item.id)}>❌</button></li>
    ))}
  </ul>
</section>

);
}
export default ItemManager;