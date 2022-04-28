import React, { useState } from 'react'

function Delivery() {

  const [count, setCount] = useState(0);
  // useState devuelve un array [state, ()setState]
  // asique usamos destructuring para sacarlos a variables

  const [userData, setUserData] = useState({
    email: '',
    address: '',
    quantity:0
  });

  const handleAddClick = () => {
    setCount(count + 1)
  }

  const handleSubClick = () => {
    setCount(count - 1)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    const email = e.target.email.value;
    const address = e.target.address.value;
    const quantity = count; // cantidad tartas a pedir
    setUserData({email,address,quantity});
  }

  return (
    <div>
      <h1>Delivery</h1>
      <h2>Encarga aquí una buena tarta</h2>
      <button name='add' onClick={handleAddClick} >+</button>
      <button name='sub' onClick={handleSubClick} >-</button>
      <p>Tartas encargadas: {count}</p>

      <form onSubmit={handleSubmit}>
        <label htmlFor="email">Email</label>
        <input name="email" type="email"></input>
        <br/><br/>
        <label htmlFor="address">Address</label>
        <input name="address" type="text"></input>
        <br/><br />
        <button>Login</button>
      </form>

      {userData.email?<p>El usuario {userData.email} ha pedido {userData.quantity} tartas</p>:""}

    </div>
  );
}

export default Delivery