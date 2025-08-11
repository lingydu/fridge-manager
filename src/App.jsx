import { useState } from 'react'
import toast, { Toaster } from 'react-hot-toast';
import './App.css'
import ItemManager from './ItemManager';



function App() {
  const [fridgeItems, setFridgeItems] = useState([]);
  const [shoppingItems, setShoppingItems] = useState([]);
  const [mode, setMode] = useState("normal");





  return (
    
    <div style={{ padding: '20px' }}>
      <Toaster />
      <h1>Fridge Manager</h1>

      {/* 🔽 模式切换按钮 */}
    <div style={{ marginBottom: '10px' }}>
      <button onClick={() => setMode(mode === 'normal' ? 'select' : 'normal')}>
       {mode === 'normal' ? 'Enter Select Mode' : 'Exit Select Mode'}
      </button>
      <span style={{ marginLeft: '10px' }}>Current Mode: {mode}</span>
   </div>

  {/* 把 mode 传进去 👇 */}
    <ItemManager title="In the fridge" items={fridgeItems} setItems={setFridgeItems} mode={mode} />
  <ItemManager title="Shopping List" items={shoppingItems} setItems={setShoppingItems} mode={mode} />

    


      

      <section>
        <h2>Combos (to be added) </h2>
        {/* Add new item (input + button)*/}
        {/* List of items added */}
      </section>

    </div>
  );
}

export default App;
