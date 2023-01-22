import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import FlexColumn from '../../Layout/FlexColumn';
import FlexRow from '../../Layout/FlexRow';
import NftRender from './NftRender';

function NftList(props) {
  const uriRoot = useSelector(state => state.mintInfo.uriRoot);
  const userNfts = useSelector(state => state.mintInfo.nfts);

  const [nftRenders, setNftRenders] = useState([]);

  useEffect(() => {
    var l = [];
    for (var i = 0; i < userNfts.length; i++) {
      console.log(userNfts[i]);
      l.push(<NftRender
        key={`nft-${userNfts[i]['token-id']['int']}`} 
        nft={userNfts[i]} 
        uri={`${uriRoot}${userNfts[i]['token-id']['int']}.gif`}/>);
    }

    setNftRenders(l);
    
  }, [uriRoot, userNfts]);

  if (nftRenders.length > 0) {
    return (
      <FlexColumn className={`gap-2 text-white place-items-center ${props.className}`}>
        <span className='text-7xl font-bold text-center'>Your Tikis</span>
        <FlexRow className='w-full flex-1 gap-2 justify-around place-items-center '>
          {nftRenders}
        </FlexRow>
      </FlexColumn>
    );
  }
  else {
    return (
      <span className='text-xl font-bold text-center text-white'>You don't own any Tikis! Mint one! They will show up here!</span>
    );
  }
}

export default NftList
