import { useState } from 'react'
import toast, { Toaster } from 'react-hot-toast';
import './App.css'
import ItemManager from './ItemManager';



function App() {
  const [fridgeItems, setFridgeItems] = useState([]);
  const [shoppingItems, setShoppingItems] = useState([]);
//  const [inputFridge, setFridgeInput] = useState('');
//  const [inputShopping, setShoppingInput] = useState('');





  return (
    
    <div style={{ padding: '20px' }}>
      <Toaster />
      <h1>Fridge Manager</h1>

      <ItemManager title="In the fridge" items={fridgeItems} setItems={setFridgeItems} />
      <ItemManager title="Shopping List" items={shoppingItems} setItems={setShoppingItems} />


      

      <section>
        <h2>Combos (to be added) </h2>
        {/* Add new item (input + button)*/}
        {/* List of items added */}
      </section>

    </div>
  );
}

export default App;
