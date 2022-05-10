
import back from './images/online-community-building.png';

function Home() {
    return (
        <>
        <div class='bg-black space-y-1'>
            <div class='flex flex-col' style={{ height: 530, backgroundImage: `url(${back})` }}>
                <div class='flex h-60 justify-center items-center lg:text-6xl text-3xl text-white font-bold'>Community Votes & Filters</div>
                <div class='flex flex-grow justify-center lg:text-3xl text-2xl text-white font-medium text-center'>Discovery Of NFT deals made reliable as Community <br />helps to discover good deals</div>
            </div>
            <div class='flex h-40 justify-center items-center lg:text-2xl text-xl text-white font-medium'>
                How can we have faster NFT liquidity ?
            </div>
            <div class='flex flex-wrap lg:flex-row flex-col space-y-4 p-4 items-center lg:justify-between'>
                <div class='flex flex-col bg-[#334EBE] w-60 p-4 rounded-md'>
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
                <div class='bg-[#334EBE] p-4 rounded-md h-28 w-screen'>
                    <div class='items-center lg:text-2xl text-xl text-white flex-wrap font-bold pb-2 text-center stroke-white' >
                        Fairground to all deals
                    </div>
                    <div class='items-center  lg:text-xl text:sm text-white font-medium pb-2 text-center stroke-white'>
                        All deals are given fair ground and their performance reflects their reach
                    </div>
                </div>
                <div class='bg-[#D81A4F] p-4 rounded-md h-28 w-screen'>
                    <div class='pl-30 items-center lg:text-2xl text-xl text-white font-bold pb-2 text-center stroke-white'>
                        Faster liquidity
                    </div>
                    <div class='items-center lg:text-xl text:sm text-white font-medium pb-2 text-center stroke-white'>
                        Good deals get large reach in short time
                    </div>
                </div>
                <div class=' bg-[#26CCD7] p-4 rounded-md h-28 w-screen'>
                    <div class='pl-30 items-center lg:text-2xl text-xl text-white font-bold pb-2 text-center stroke-white'>
                        Dwit score reflects success
                    </div>
                    <div class='items-center lg:text-xl text:sm text-white font-medium pb-2 text-center stroke-white' >
                        A number is enough to communicate your understanding
                    </div>
                </div>
                <div class='bg-[#704BBF] p-4 rounded-md  h-28 w-screen' >
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

export default Home;