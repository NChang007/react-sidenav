import React from 'react'
import PropTypes from 'prop-types';
import './App.css'
import { AiOutlineClose } from "react-icons/ai";

const toggleSideNav = (id) => {
    document.getElementById(id).classList.toggle(id)
}

const SideNavTitle = ({title}) => {
    return (
        <div className='title' key={'SideNavTitle'}>
            <span>{title}</span>
            {/* exit btn */}
            <span className="OCtoggle" onClick={() => toggleSideNav(id)}> <AiOutlineClose/> </span>
        </div>
    )
}
SideNavTitle.defaultProps = {
    title : 'TITLE'
}
SideNavTitle.propTypes = {
    title : PropTypes.string
}


const SideNav = ({children, position, width, id}) => {
  return (
    <nav 
        id={id}
        className='sideNav'
        style={{
            width: width,
            left: position === 'left' ? '0' : '',
            right: position === 'right' ? '0' : '',
        }}
    >
        {children}
        {/* <SideNav.Title /> */}
        {/* {console.log(children)} */}
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
SideNav.defaultProps = {
    id: 'exampleSideNav',
    width: '300px',
    position: 'left'
}
SideNav.propTypes = {
    id : PropTypes.string,
    width : PropTypes.string,
    position: PropTypes.string
}


SideNav.Title = SideNavTitle

export default SideNav