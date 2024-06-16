import React from 'react'
import './Footer.css'
import { assets } from '../../assets/assets'

const Footer = () => {
  return (
    <div className='footer' id='footer'>
        <div className='footer-content'>
            <div className='footer-content-left'>
                <img src={assets.logo}/>
                <p>By continuing past this page, you agree to our Terms of Service, Cookie Policy, Privacy Policy and Content Policies. All trademarks are properties of their respective owners.</p>
                <div className='footer-social-icons'>
                    <a href='https://www.facebook.com/' target='_blank'><img src={assets.facebook_icon}/></a>
                    <a href='https://x.com/i/flow/login/' target='_blank'><img src={assets.twitter_icon}/></a>
                    <a href='https://www.linkedin.com/' target='_blank'><img src={assets.linkedin_icon}/></a>
                    
                    
                    
                </div>
            </div>

            <div className='footer-content-center'>
                <h2>COMPANY</h2>
                <ul>
                    <li>Home</li>
                    <li>About Us</li>
                    <li>Delivery</li>
                    <li>Privacy policy</li>
                </ul>
            </div>

            <div className='footer-content-right'>
                <h2>GET IN TOUCH</h2>
                <ul>
                    <li><a href="tel:+1-212-256-7890">+1-212-256-7890</a></li>
                    <li><a href="mailto:contact@hungrydove.com">contact@hungrydove.com</a></li>
                </ul>
            </div>
        </div>

        <hr/>

        <p className='footer-copyright'>Copyright 2024 © hungrydove.com - All Right Reserved</p>

    </div>
  )
}

export default Footer