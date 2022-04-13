import logo from './images/logonew.svg';
import back from './images/online-community-building.png';
import card2 from './images/card2.png';
import card3 from './images/card3.png';
import card4 from './images/card4.png';
import card5 from './images/card5.png';
import discord from './images/discord.svg';
import Popup from './Popup';
import './App.css';
import React, { useEffect, useRef, useState } from 'react';
import axios from 'axios';

function App() {
  const [isOpen, setIsOpen] = useState(false);
  const emailref =useRef(null);
  //function submit(){ alert(emailref.current);}
  useEffect(()=>{
    
  },[emailref]);
  const togglePopup = () => {
    setIsOpen(!isOpen);
  }
  function handleclick() {
    //alert(emailref.current.value);
    axios.post('https://vdh39hxot1.execute-api.ap-south-1.amazonaws.com/dev/putObject', {body:JSON.stringify({'email':emailref.current.value})})
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
                <input ref={emailref} class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="email" type="text" placeholder="Email"/>
              </div>
              <div class="flex items-center justify-between">
                <button onClick={handleclick}id="submitemail" class="bg-white hover:bg-blue-700 text-black font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="button">
                Submit
                </button>
              </div>             
      </>}
      handleClose={togglePopup}
      />}
      <div class='bg-black space-y-1'>
        <nav class='static flex flex-row-reverse justify-between pt-2 pb-2 pr-2 pl-2'>
          <button onClick={togglePopup}  class='bg-white text-black font-bold py-2 px-4 rounded'> Join WaitList</button>
          <div class='flex space-x-4'>
            <img alt='logo' class='w-10 h-10' src={logo} />
            <div class='text-3xl text-white'>dwit</div>
          </div>
        </nav>
        <div class='text-white lg:text-4xl sm:text-2xl'>NFT LIQUIDITY MADE FASTER</div>
        <div class='flex flex-col' style={{ height: 530, backgroundImage: `url(${back})` }}>
          <div class='flex h-60 justify-center items-center lg:text-6xl text-3xl text-white font-bold'>Community Votes & Filters</div>
          <div class='flex flex-grow justify-center lg:text-3xl text-2xl text-white font-medium text-center'>Discovery Of NFT deals made reliable as Community <br />helps to discover good deals</div>
        </div>
        <div class='flex h-40 justify-center items-center lg:text-2xl text-xl text-white font-medium'>
          How can we have faster NFT liquidity ?
        </div>
        <div class='flex flex-wrap lg:flex-row flex-col space-y-4 p-4 items-center lg:justify-between'>
          <div class='flex flex-col bg-[#334EBE] w-60 p-4 rounded-md justify-center'>
            <div class='flex justify-center items-center lg:text-xl text-sm text-white font-bold pb-2 text-center'>
              NFT Past Experience Quantified
            </div>
            <div class='flex justify-center items-center lg:text-sm text-xs text-white font-medium pb-2 text-center'>
              Your experience of investing in NFT is quantified into dwit score
            </div>
          </div>
          {/* <div class='icon-arrow' style={{width:'160px',height:'4px',backgroundColor:'white',
          position:'relative',top:'50px',borderRadius:'4px'}} after={{
            content:"",display:'inline-block',width:'40px',
            height:'4px',backgroundColor:'white',transform:'rotate(45deg)',position:'absolute',bottom:'13px',right:'-6px'}}
          before={{
            content:"",display:'inline-block',width:'40px',
            height:'4px',backgroundColor:'white',transform:'rotate(-45deg)',position:'absolute',bottom:'-13px',right:'-6px'
          }}></div> */}
          <div class='flex flex-col bg-[#D81A4F] w-60 p-4 rounded-md'>
            <div class='flex justify-center items-center lg:text-xl text-sm  text-white font-bold pb-2 text-center'>
              Vote Backed By Experience
            </div>
            <div class='flex justify-center items-center lg:text-sm text-xs text-white font-medium pb-2 text-center'>
              Impact of your vote is proportional to your dwit score
            </div>
          </div>
          {/* <div class='icon-arrow' style={{width:'160px',height:'4px',backgroundColor:'white',
          position:'relative',top:'50px',borderRadius:'4px'}} after={{
            content:"",display:'inline-block',width:'40px',
            height:'4px',backgroundColor:'white',transform:'rotate(45deg)',position:'absolute',bottom:'13px',right:'-6px'}}
          before={{
            content:"",display:'inline-block',width:'40px',
            height:'4px',backgroundColor:'white',transform:'rotate(-45deg)',position:'absolute',bottom:'-13px',right:'-6px'
          }}></div> */}


          <div class='flex flex-col bg-[#26CCD7] w-60 p-4 rounded-md'>
            <div class='flex justify-center items-center lg:text-xl text-sm text-white font-bold pb-2 text-center'>
              Visibility  Based  On Community  Response
            </div>
            <div class='flex justify-center items-center lg:text-sm text-xs text-white font-medium pb-2 text-center'>
              Positively responded deals reach to more people
            </div>
          </div>
          {/* <div class='icon-arrow' style={{width:'160px',height:'4px',backgroundColor:'white',
          position:'relative',top:'50px',borderRadius:'4px'}} after={{
            content:"",display:'inline-block',width:'40px',
            height:'4px',backgroundColor:'white',transform:'rotate(45deg)',position:'absolute',bottom:'13px',right:'-6px'}}
          before={{
            content:"",display:'inline-block',width:'40px',
            height:'4px',backgroundColor:'white',transform:'rotate(-45deg)',position:'absolute',bottom:'-13px',right:'-6px'
          }}></div> */}
          <div class='flex flex-col bg-[#704BBF] w-60 p-4 rounded-md'>
            <div class='flex justify-center items-center lg:text-xl text-sm text-white font-bold pb-2 text-center'>
              Correctly Priced Deals Stand Out
            </div>
            <div class='flex justify-center items-center lg:text-sm text-xs text-white font-medium pb-2 text-center'>
              Good deals come on top leading to better liquidity
            </div>
          </div>
        </div>
        <div class='flex flex-col pb-8 space-y-4' >
          <div class='bg-[#334EBE] p-4 rounded-md flex-wrap w-screen'>
            <div class='items-center lg:text-2xl text-xl text-white flex-wrap font-bold pb-2 text-center stroke-white' >
              Fairground to all deals
            </div>
            <div class='items-center  lg:text-xl text:sm text-white font-medium pb-2 text-center stroke-white'>
              All deals are given fair ground and their performance reflects their reach
            </div>
          </div>
          <div class='bg-[#D81A4F] p-4 rounded-md w-screen'>
            <div class='pl-30 items-center lg:text-2xl text-xl text-white font-bold pb-2 text-center stroke-white'>
              Faster liquidity
            </div>
            <div class='items-center lg:text-xl text:sm text-white font-medium pb-2 text-center stroke-white'>
              Good deals get large reach in short time
            </div>
          </div>
          <div class=' bg-[#26CCD7] p-4 rounded-md w-screen'>
            <div class='pl-30 items-center lg:text-2xl text-xl text-white font-bold pb-2 text-center stroke-white'> 
              Dwit score reflects success
            </div>
            <div class='items-center lg:text-xl text:sm text-white font-medium pb-2 text-center stroke-white' >
              A number is enough to communicate your understanding
            </div>
          </div>
          <div class='bg-[#704BBF] p-4 rounded-md w-screen' >
            <div class='pl-30 items-center lg:text-2xl text-xl text-white font-bold pb-2 text-center stroke-white'>
              Positive & neutral impressions differ
            </div>
            <div class='items-center lg:text-xl text:sm text-white font-medium pb-2 text-center stroke-white'>
              Impressions are now distinguishable
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
