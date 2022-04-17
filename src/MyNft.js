import { Component, useEffect } from "react";
import GlassCard from './components/GlassCard';
import { useState } from "react";
import { createAlchemyWeb3 } from "@alch/alchemy-web3";
import { useRef } from "react";
import useMetaMask from './hooks/metaMask';

const axios = require('axios').default;
function MyNft()
{
  const { connect, disconnect, isActive, account } = useMetaMask()
  const nft=useRef([]);
  const [nftshow,setnftshow]=useState([]);
  const count= useRef(0);
  async function getnftdata(i)
  {
    console.log("i: " +i.current);
    console.log(nft.current);
    var address=nft.current[i.current].contract.address;
    var token= nft.current[i.current].id.tokenId;
    const web3 = createAlchemyWeb3("https://eth-mainnet.alchemyapi.io/v2/UnYlUUny-t-xVTR9C7gL7pWq7sl8XAsP");
    console.timeStamp('start');
    const response = await web3.alchemy.getNftMetadata({
      contractAddress: address,
      tokenId: token,
    })
    console.timeStamp('end');
    //console.time('end');
    console.log('get data ', address, ' ',token);
    console.log('response: '+ response.metadata);
    //setnftshow([...nftshow,response]);
    console.time('done')
    return response;

  }
  function updatenft()
  {
    console.log("length ",  nft.current.length);
      const d= async _ => {
        if(count>=nft.current.length)
        {   console.log("ut");
            return;}  
        console.log("count is ",count);
        console.time('doSomething')
        var nftdata=await getnftdata(count);
        console.timeEnd('doSomething')
        // let updatedarray=[...nftshow,nftdata];
        console.log("hello "+nftdata.metadata);
        setnftshow(nftshow=>[...nftshow,nftdata]);
        count.current+=1; 
    }
    d();
  }
  async function takedata()
  {
    const url='https://vdh39hxot1.execute-api.ap-south-1.amazonaws.com/dev/getSignedUrl';
    const dataInfo = {
			data: {'ownerAddr':account},
		};
    axios.post(url, JSON.stringify(dataInfo))
			.then((r) => {
				console.log(r);
        console.log(r.data);
        let updatedarray=[...nft.current,...r.data.nfts.ownedNfts]
        nft.current=updatedarray;
        console.log('checklength: ', updatedarray);
        console.log("nft.current: "+nft.current.length);
        updatenft();
			})
			.catch((err) => {
				console.error(err);
			});
  }
  useEffect(()=>{updatenft();console.log("nft: "+nft.length)},[nftshow]);
  useEffect(()=>{takedata()},[]);
  

      return(
        <>
        {isActive&nftshow.map((nft, index) => {
          console.log("for glasss card: "+ index+ " "+nft.metadata);
          return <GlassCard key={index} data={{'url':nft.media[0].gateway,'title':nft.title}}/>
        })}
        </>
      );
  
}


export default MyNft;