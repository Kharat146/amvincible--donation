import React from 'react'
import {FcMenu} from "react-icons/fc";
import DonationButton from '../Components/Donation/DonationButton';
import './Header.scss';

const Header = (Props) => {

 const openMenuModal =()=>{
    Props.setIsMenuModal(true);
 }

  return (
    <div className="container">
     <div className="Header">
        <DonationButton/>
        <div className="hamburger " onClick={openMenuModal}>
          <FcMenu/>
        </div>
     </div>
    </div>
  )
}

export default Header