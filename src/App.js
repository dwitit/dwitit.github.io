import logo from './images/logo.svg';
import back from './images/online-community-building.png';
import card2 from './images/card2.png';
import card3 from './images/card3.png';
import card4 from './images/card4.png';
import card5 from './images/card5.png';

import './App.css';

function App() {
  return (
    <>
      <div class='bg-black space-y-1'>
        <nav class='static flex flex-row-reverse justify-between pt-2 pb-2 pr-2 pl-2'>
          <button class='bg-white text-black font-bold py-2 px-4 rounded'> Join WatchList</button>
          <div class='flex space-x-4'>
            <img alt='logo' class='w-10 h-10' src={logo} />
            <div class='text-3xl text-white'>dwit</div>
          </div>
        </nav>
        <div class='text-white text-4xl'>NFT LIQUIDITY MADE FASTER</div>
        <div class='flex flex-col' style={{ height: 530, backgroundImage: `url(${back})` }}>
          <div class='flex h-60 justify-center items-center text-6xl text-white font-bold'>Community Votes & Filters</div>
          <div class='flex flex-grow justify-center text-3xl text-white font-medium text-center'>Discovery Of NFT deals made reliable as Community <br />helps to discover good deals</div>
        </div>
        <div class='flex h-40 justify-center items-center text-2xl text-white font-medium'>
          How can we have faster NFT liquidity ?
        </div>
        <div class='flex flex-row p-4 justify-between'>
          <div class='flex flex-col bg-[#334EBE] w-60 p-4 rounded-md'>
            <div class='flex justify-center items-center text-xl text-white font-bold pb-2 text-center'>
              NFT Past Experience Quantified
            </div>
            <div class='flex justify-center items-center text-sm text-white font-medium pb-2 text-center'>
              Your experience of investing in NFT is quantified into dwit score
            </div>
          </div>
          <div class='icon-arrow' style={{width:'160px',height:'4px',backgroundColor:'white',
          position:'relative',top:'50px',borderRadius:'4px'}} after={{
            content:"",display:'inline-block',width:'40px',
            height:'4px',backgroundColor:'white',transform:'rotate(45deg)',position:'absolute',bottom:'13px',right:'-6px'}}
          before={{
            content:"",display:'inline-block',width:'40px',
            height:'4px',backgroundColor:'white',transform:'rotate(-45deg)',position:'absolute',bottom:'-13px',right:'-6px'
          }}></div>
          <div class='flex flex-col bg-[#D81A4F] w-60 p-4 rounded-md'>
            <div class='flex justify-center items-center text-xl text-white font-bold pb-2 text-center'>
              Vote Backed By Experience
            </div>
            <div class='flex justify-center items-center text-sm text-white font-medium pb-2 text-center'>
              Impact of your vote is proportional to your dwit score
            </div>
          </div>
          <div class='icon-arrow' style={{width:'160px',height:'4px',backgroundColor:'white',
          position:'relative',top:'50px',borderRadius:'4px'}} after={{
            content:"",display:'inline-block',width:'40px',
            height:'4px',backgroundColor:'white',transform:'rotate(45deg)',position:'absolute',bottom:'13px',right:'-6px'}}
          before={{
            content:"",display:'inline-block',width:'40px',
            height:'4px',backgroundColor:'white',transform:'rotate(-45deg)',position:'absolute',bottom:'-13px',right:'-6px'
          }}></div>


          <div class='flex flex-col bg-[#26CCD7] w-60 p-4 rounded-md'>
            <div class='flex justify-center items-center text-xl text-white font-bold pb-2 text-center'>
              Visibility  Based  On Community  Response
            </div>
            <div class='flex justify-center items-center text-sm text-white font-medium pb-2 text-center'>
              Positively responded deals reach to more people
            </div>
          </div>
          <div class='icon-arrow' style={{width:'160px',height:'4px',backgroundColor:'white',
          position:'relative',top:'50px',borderRadius:'4px'}} after={{
            content:"",display:'inline-block',width:'40px',
            height:'4px',backgroundColor:'white',transform:'rotate(45deg)',position:'absolute',bottom:'13px',right:'-6px'}}
          before={{
            content:"",display:'inline-block',width:'40px',
            height:'4px',backgroundColor:'white',transform:'rotate(-45deg)',position:'absolute',bottom:'-13px',right:'-6px'
          }}></div>
          <div class='flex flex-col bg-[#704BBF] w-60 p-4 rounded-md'>
            <div class='flex justify-center items-center text-xl text-white font-bold pb-2 text-center'>
              Correctly Priced Deals Stand Out
            </div>
            <div class='flex justify-center items-center text-sm text-white font-medium pb-2 text-center'>
              Good deals come on top leading to better liquidity
            </div>
          </div>
        </div>
        <div class='pb-8 space-y-4' >
          <div class='space-x-0 p-4 rounded-md bg-no-repeat ' style={{ position: 'relative', left: '100px', top: '25px', height: '118px', width: '500px', backgroundSize: 'contain', backgroundImage: `url(${card2})` }}>
            <div class='pl-30 items-center text-2xl text-white font-bold pb-2 text-center stroke-white '>
              Fairground to all deals
            </div>
            <div class='items-center text-xl text-white font-medium pb-2 text-center stroke-white'>
              All deals are given fair ground and their performance reflects their reach
            </div>
          </div>
          <div class='p-4 rounded-md' style={{ position: 'relative', left: '600px', top: '25px', height: '118px', width: '500px', backgroundSize: 'contain', backgroundImage: `url(${card3})` }}>
            <div class='pl-30 items-center text-2xl text-white font-bold pb-2 text-center stroke-white'>
              Faster liquidity
            </div>
            <div class='items-center text-xl text-white font-medium pb-2 text-center stroke-white'>
              Good deals get large reach in short time
            </div>
          </div>
          <div class='p-4 rounded-md' style={{ height: '118px', width: '500px', position: 'relative', left: '100px', top: '25px', backgroundSize: 'contain', backgroundImage: `url(${card4})` }}>
            <div class='pl-30 items-center text-2xl text-white font-bold pb-2 text-center stroke-white'>
              Dwit score reflects success
            </div>
            <div class='items-center text-xl text-white font-medium pb-2 text-center stroke-white'>
              A number is enough to communicate your understanding
            </div>
          </div>
          <div class='p-4 rounded-md' style={{ height: '118px', width: '500px', position: 'relative', left: '600px', top: '25px', backgroundSize: 'contain', backgroundImage: `url(${card5})` }}>
            <div class='pl-30 items-center text-2xl text-white font-bold pb-2 text-center stroke-white'>
              Positive & neutral impressions differ
            </div>
            <div class='items-center text-xl text-white font-medium pb-2 text-center stroke-white'>
              Impressions are now distinguishable
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
