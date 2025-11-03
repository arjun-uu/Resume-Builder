import React from 'react'
import { Link, useNavigate } from 'react-router-dom'

const Navbar = () => {
  const navigate = useNavigate()
  const user = { name: 'Arjun' }

  const logoutUser = () => {
    navigate('/')
  }

  return (
    <div className="shadow bg-white">
      <nav className="flex items-center justify-between max-w-6xl mx-auto px-4 py-3.5 text-slate-800 transition-all">
        
        {/* Left: Logo */}
        <Link to='/'>
          <img 
            src="/logo.png" 
            alt="logo" 
            className="h-11 w-auto hover:scale-105 transition-transform" 
          />
        </Link>

        {/* Right: User greeting + Logout */}
        <div className="flex items-center gap-4">
          <p className="font-medium text-slate-700">Hi, {user?.name}</p>
          <button
            onClick={logoutUser}
            className="bg-white hover:bg-blue-50 border border-gray-300 px-6 py-1.5 rounded-full active:scale-95 transition-all shadow-sm hover:shadow-[0_0_15px_rgba(37,99,235,0.3)]"
          >
            Logout
          </button>
        </div>
      </nav>
    </div>
  )
}

export default Navbar
