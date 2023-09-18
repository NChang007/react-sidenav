import React from 'react'
import './App.css'

const SideNav = ({children, position, width}) => {
    const toggleSideNav = () => {

    }
  return (
    <nav 
        className='sideNav'
        style={{
            width: '300px',
            left: position === 'left' ? '0' : '',
            right: position === 'left' ? '0' : '',
        }}
    >
        <div className='title'>
            <span>TITLE</span>
            {/* exit btn */}
            <span className="OCtoggle" onClick={toggleSideNav} >X</span>
        </div>
        <div className="navigation">
            <ul className='navigation-list'>
                <li className='nav-list-item'>
                    <span>About</span>
                </li>
                <li className='nav-list-item'>
                    <span>Contact</span>
                </li>
                <li className='nav-list-item'>
                    <span>Send Email</span>
                </li>
                <li className='nav-list-item'>
                    <span>Another One</span>
                </li>
            </ul>
        </div>
        <div className="end">
            <div className="user-content">
                <img 
                    className='user-avatar'
                    src="https://images.pexels.com/photos/18184356/pexels-photo-18184356/free-photo-of-south-american-coati-in-nature.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" 
                    alt="User Profile Picture" 
                />
                <div className='user-data'>
                    {/* username */}
                    <p>TESTUSER123</p>
                    {/* email asd*/}
                    <p>testUser123@gmail.com</p>
                </div>
            </div>
            <button className='logout-btn'>Logout</button>
        </div>
    </nav>
  )
}

export default SideNav