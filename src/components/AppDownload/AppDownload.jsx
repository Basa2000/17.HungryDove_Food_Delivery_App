import React from 'react'
import './AppDownload.css'
import { assets } from '../../assets/assets'

const AppDownload = () => {
  return (
    <div className='app-download' id='app-download'>
        <p>For Better Experience Download <br/> HungryDove App</p>
        <div className='app-download-platforms'>
          <a href='https://play.google.com/store/apps' target='_blank'><img src={assets.play_store}/></a>
          <a href='https://www.apple.com/in/app-store/' target='_blank'><img src={assets.app_store}/></a>
          
        </div>
    </div>
  )
}

export default AppDownload