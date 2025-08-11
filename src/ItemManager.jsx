import { useState } from 'react'
import toast, { Toaster } from 'react-hot-toast';


function ItemManager({title,items,setItems, mode}){ 
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
        checked: false,
        selected: false
    }
    setItems([...items, newItem]);
    setInput('')
};
const handleDeleteItem=(idd) =>{
    setItems(items.filter((item) => item.id !== idd))

};
const handleCheckItem=(idd) =>{

};
const handleToggleChecked = (idd) => {
  setItems(items.map(item =>
    item.id === idd ? { ...item, checked: !item.checked } : item
  ));
};
const handleToggleSelected = (idd) => {
  setItems(items.map(item =>
    item.id === idd ? { ...item, selected: !item.selected } : item
  ));
};



//const handleToggle = (id) => {
//  setItems(items.map(item =>
//    item.id === id ? { ...item, toggled: !item.toggled } : item
//  ));
//};


return(
   <section>
  <h2>{title}</h2>
  <input value={input} onChange={(e) => setInput(e.target.value)} placeholder="Type in an item"/>
  <button onClick={handleAddItem}>Add</button>
<ul>
  {items.map(item => (
    <li key={item.id}>
      <input
        type="checkbox"
        checked={mode === 'normal' ? item.checked : item.selected}
        onChange={() => {
          if (mode === 'normal') {
            handleToggleChecked(item.id);
          } else {
            handleToggleSelected(item.id);
          }
        }}
      />
      <span
        style={{
          textDecoration: item.checked ? 'line-through' : 'none',
          backgroundColor: item.selected ? 'lightgreen' : 'transparent',
          marginLeft: '8px',
          marginRight: '8px'
        }}
      >
        {item.name}
      </span>
      <button onClick={() => handleDeleteItem(item.id)}>❌</button>
    </li>
  ))}
</ul>

</section>

);
}
export default ItemManager;