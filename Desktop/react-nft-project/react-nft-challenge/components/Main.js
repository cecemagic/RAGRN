import React, {useEffect, useState} from 'react'
import instagramLogo from '../assets/owner/instagram.png'
import twitterLogo from '../assets/owner/twitter.png'
import MoreLogo from '../assets/owner/more.png'
import './Main.css'

const Main = () => {
const [activePunk, setActivePunk] = useState(punkListData[0])

useEffect(() => {
    setActivePunk(punkListData[selectedPunk])
}, [punkListData, selectedPunk])

    return (
        <div className='main'>
            <div className='mainContent'>
                <div className='punkHighlight'>
                    <div className='punkContainer'>
                        <img className='selectedPunk' src={activePunk.image_original_url} alt='' />
                    </div>
                </div>
            </div>

            <div className='punkDetails' style={{ color: '#fff' }}>
                <div className='title'>{activePunk.name}</div>
                <span className='itemNumber'>•#{activePunk.token_id}</span>
            </div>

            <div className='owner'>
                <div className='ownerImageContainer'>
                    <img
                        src={
                            activePunk.owner.profile_img_url
                        }
                        alt=''
                    />
                </div>
                <div className='ownerDetails'>
                    <div className='ownerNameAndHandle'>
                        <div>0x1351e208397AB8BEA7De30BA2292f39393Adf974</div>
                        <div className='ownerHandle'>@cecemagic</div>
                    </div>
                    <div className=""></div>
                </div>
            </div>
        </div>
    )
}

export default Main
