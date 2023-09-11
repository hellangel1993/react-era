import React from 'react';
import Logo from "../download.svg";

function NavBar() {
  return (
    <div className="flex border space-x-8 items-center pl-3 py-4">
    <img src={Logo} className="w-[100px]" />
    <h3 className='text-slate-950'>Online Degrees</h3>
    <h3 className='text-slate-950'>find Your New Carrer</h3>
    </div>
  )
}

export default NavBar;