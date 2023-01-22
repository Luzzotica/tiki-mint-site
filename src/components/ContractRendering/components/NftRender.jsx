import { CollectionShape } from "../../../assets";
import FlexColumn from "../../Layout/FlexColumn";

function NftRender(props) {
  const { nft, uri } = props;
  console.log(uri);

  // If reservation, show the super bod
  if (!nft.revealed) {
    return (
      <div className='relative group w-64 h-64'>
        <CollectionShape width='100%' height='100%'/>
        <FlexColumn className='absolute inset-0 h-auto w-64 text-white justify-center'>
          <h1 className="font-bold text-3xl text-center">Minting and Revealing</h1>
        </FlexColumn>
      </div>
    )
  }
  else { // Otherwise, use the bod and uri to load in the actual bod
    // console.log('dadbod render uri', uri); // <a href={`${uri}.png`}>
    return (
      <div className='relative group w-64 h-64'>
        <CollectionShape className='w-64 h-64' width='70%' height='100%'/>
        <FlexColumn className='absolute inset-0 text-white justify-center rounded-3xl overflow-clip'>
          <img
            src={`${uri}`}
          />
        </FlexColumn>
      </div>
      
    )
  }

  return (
    <FlexColumn className='flex-1'>
        
    </FlexColumn>
  )
}

export default NftRender
