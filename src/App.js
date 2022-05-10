import logo from './images/logonew.svg';

import metamasklogo from './images/Metamask.svg'
import Popup from './Popup';
import './App.css';
import React, { useEffect, useRef, useState } from 'react';
import axios from 'axios';
import useMetaMask from './hooks/metaMask';
import { NavLink } from 'react-router-dom';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './Home';
import MyNft from './MyNft';
function App() {
  const [isOpen, setIsOpen] = useState(false);
  const emailref = useRef(null);
  const { connect, disconnect, isActive, account } = useMetaMask()
  //function submit(){ alert(emailref.current);}
  useEffect(() => {

  }, [emailref]);
  const togglePopup = () => {
    setIsOpen(!isOpen);
  }
  function handleclick() {
    //alert(emailref.current.value);
    axios.post('https://vdh39hxot1.execute-api.ap-south-1.amazonaws.com/dev/putObject', { body: JSON.stringify({ 'email': emailref.current.value }) })
      .then((response) => {
        console.log(response);
      })
      .catch((error) => {
        console.log(error);
      });
    //return confirm('clicked');
    setIsOpen(!isOpen);
    alert('mail submitted successfully');
  }

  return (
    <>
      {isOpen && <Popup
        content={<>
          <div class='mb-4'>
            <div class='flex justify-center items-center text-white text-2xl md:text-base font-bold'>Get Notified</div>
            <label class="block text-gray-700 text-sm font-bold mb-2" for="abc@exammple.com">
              Email
            </label>
            <input ref={emailref} class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="email" type="text" placeholder="Email" />
          </div>
          <div class="flex items-center justify-between">
            <button onClick={handleclick} id="submitemail" class="bg-white hover:bg-blue-700 text-black font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="button">
              Submit
            </button>
          </div>
        </>}
        handleClose={togglePopup}
      />}
      
        <Router>
          <div class='bg-black space-y-1'>
          <nav class='static flex flex-row-reverse justify-between pt-2 pb-2 pr-2 pl-2'>
            <div class='flex space-x-4'>
              {/* <NavLink exact to="/Mynft" className='bg-white text-black font-bold py-2 px-4 rounded'>My Nft</NavLink> */}
              <button onClick={togglePopup} class='bg-white text-black font-bold py-2 px-4 rounded'> Join WaitList</button>
              <button onClick={connect} title='Connect to Metamask' class='bg-blue-800 text-white font-bold py-2 px-4 rounded'> <img src={metamasklogo} alt="Metamask" width="25" height="25" /></button>
              <div class='text-white'> {isActive ? `Account is:` + account : ``}</div>
            </div>
            <div class='flex space-x-4'>
              <img alt='logo' class='w-10 h-10' src={logo} />
              <div class='text-3xl text-white'>dwit</div>
            </div>
          </nav>
          <div class='text-white lg:text-4xl sm:text-2xl'>NFT LIQUIDITY MADE FASTER</div>
          </div>
          <Routes>
            <Route exact path='/' element={<Home />} />
            <Route exact path='/MyNft' element={<MyNft />} />
          </Routes>
        </Router>
      
    </>
  );
}

export default App;
