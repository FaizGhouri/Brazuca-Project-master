import React from 'react'
import './Header.css';
import Logo from '../../../Assets/Images/Logo/Logo1-removebg-preview.png'
import NestedModal from '../Modal/Modal';
import SearchModal from '../Search Modal/Modal';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import PersistentDrawerLeft from '../Sidebar/Drawer/Drawer'
import NestedModal2 from '../Modal/Modal2';

const Header = () => {
    return (
        <div className='Main-Container'>
            <div className='Main-Header-Continer'>

                <div className='Logo-div'>

                    <img src={Logo} alt="img" />

                </div>

                <div className='LSS-div'>




                    <div className='leftBtnDiv'>

                        <NestedModal />
                        <NestedModal2 />
                        {/* <button className="Sign-btn">Sign Up</button> */}
                        <SearchModal />
                        <i class="fa-solid fa-bars-staggered"></i>

                        {/* <i class="fa-solid fa-magnifying-glass"></i> */}


                    </div>

                </div>

            </div>




        </div>
    )
}

export default Header