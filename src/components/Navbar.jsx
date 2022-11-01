import React from 'react'

const Navbar = () => {
  return (
    <div className='navbar'>
      <span className="logo">Mayank Chat</span>
      <div className="user">
        <img src="https://images.pexels.com/photos/3748221/pexels-photo-3748221.jpeg?auto=compress&cs=tinysrgb&w=400" alt="" />
        <span>Mayank</span>
        <button>logout</button>
      </div>
    </div>
  )
}

export default Navbar