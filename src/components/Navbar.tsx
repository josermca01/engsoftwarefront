import React from 'react'
import {useState} from 'react'

export const Navbar = () => {
  return (
    <nav className='w-full flex py-6 justify-between items-center navbar'>
      <h1 className='text-white text-xl mr-10'>Nome da Marca</h1>
      <ul className='list-none sm:flex hidden justify-start items-center flex-1'>
        <li className={`text-white font-poppins font-normal cursor-pointer text-[16px] mr-7`}>Home <a href="#Home"></a></li>
        <li className={`text-white font-poppins font-normal cursor-pointer text-[16px] mr-7`}>Sobre <a href="#Home"></a></li>
        <li className={`text-white font-poppins font-normal cursor-pointer text-[16px] mr-7`}>Avaliações <a href="#Home"></a></li>
        <li className={`text-white font-poppins font-normal cursor-pointer text-[16px] mr-7`}>Contato <a href="#Home"></a></li>
      </ul>
      <div className='text-white bg-blue-600 font-poppins font-normal cursor-pointer text-[16px] p-4 rounded-md'>Entre agora</div>
    </nav>
  )
}
export default Navbar