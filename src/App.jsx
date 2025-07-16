import { useState } from 'react'
import toast, { Toaster } from 'react-hot-toast';
import './App.css'


function App() {
  const [fridgeItems, setFridgeItems] = useState([]);
  const [shoppingItems, setShoppingItems] = useState([]);
  const [inputFridge, setFridgeInput] = useState('');
  const [inputShopping, setShoppingInput] = useState('');

  const handleAddFridgeItem = () => {
        if (inputFridge.trim() === '') {
          toast.error('Invalid input');
        return; 
        }
  const alreadyExists  = fridgeItems.some (
    (item) => item.name.toLowerCase() === inputFridge.trim().toLowerCase() && inputFridge.trim().toLowerCase() !== 'garlic scape'
  );

  if (alreadyExists) {
    toast('Item already exists');
    return;
  }   
    const newFridgeItem = {
      id: Date.now(), 
      name: inputFridge,
       number: 0,
       used: false,
       category: "NA"
        
    };
    setFridgeItems([...fridgeItems, newFridgeItem]);
    setFridgeInput('');
  }

  const handleDeleteFridgeItem = (idd) =>{
    setFridgeItems(fridgeItems.filter((item) => item.id !== idd));

  };

  const handleAddShoppingItem = () => {
    if (inputShopping.trim() = "") {
      toast.error("Invalid input")
    }
    const alreadyExists = shoppingItems.some(
      (item) => item.name.toLowerCase()==inputShopping.trim().toLowerCase()
    );
    if (alreadyExists) {
      toast('Item already exists');
      return;
    }
    const newShoppingItem = {
      id: Date.now(),
      name:inputShopping,
      number:0,
      purchased: false,
      category:"NA"
    };
    setShoppingItems([...shoppingItems,newShoppingItem]);
    setShoppingInput('');
  }

  const handleDeleteShoppingItem = (idd) => {
    
  }



  return (
    <div style={{ padding: '20px' }}>
      <Toaster />
      <h1>Fridge Manager</h1>

      <section>
        <h2>In the fridge</h2>
        {/* Add new item (input + button)*/}
        <input
        value={inputFridge}
        onChange={(e) => setFridgeInput(e.target.value)}
        placeholder="Type in your item"
        />
        <button onClick={handleAddFridgeItem}>Add</button>
        
        {/* List of item added */}
        <ul>
          {fridgeItems.map((item) => (
            <li key={item.id}>{item.name}<button onClick={() => handleDeleteFridgeItem(item.id)}>❌</button></li>
          ))}
          
        </ul>


      </section>

      <section>
        <h2>Shopping list</h2>
        {/* Add new item (input + button)*/}
        <input
        value={inputShopping}
        onChange ={(e)=setShoppingInput(e.target.value)}
        placeholder="Type in your item"
        />
        <button onClick={handleAddShoppingItem}></button>
        {/* List of items added */}
        <ul>
          {shoppingItems.map(
            (item) => (
              <li key={item.id}>{item.name}<button onClick ={()=>handleDeleteShoppingItem(item.id)}>❌</button></li>
            )
          )}
        </ul>
      </section>

      <section>
        <h2>Combos (to be added) </h2>
        {/* Add new item (input + button)*/}
        {/* List of items added */}
      </section>

    </div>
  );
}

export default App;
