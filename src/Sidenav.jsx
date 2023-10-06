import React, { useEffect } from 'react'
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import './App.css'
// logos below
import { AiOutlineClose, AiOutlineMenu} from "react-icons/ai";
import { TbLogout, TbLogout2, TbLogicAnd } from "react-icons/tb";
// import { IoPricetagsOutline } from "react-icons/io5";




const toggleSideNav = (id) => {
    document.getElementById(`sideNav${id}`).classList.toggle("d-none")
    document.getElementById(`toggleBtn`).classList.toggle("d-block")
}

const SideNavTitle = ({title}) => {
    let nav,id
    useEffect(() => {
        nav = document.querySelector('.sideNav')
        {console.log(nav.id)}
        id = nav.id.toString()
    })
    return (
        <div className='title' key={'SideNavTitle'}>
            <span>{title}</span>
            {/* exit btn */}
            <span className="OCtoggle" onClick={() => toggleSideNav(id)}> <AiOutlineClose/> </span>
        </div>
    )
}
SideNavTitle.defaultProps = {
    title : 'TITLE',
    
}
SideNavTitle.propTypes = {
    title : PropTypes.string
}

const SideNavNavigation = ({children}) => {
    return (
        <div className="navigation">
            <ul className='navigation-list'>
               {children}
            </ul>
        </div>
    )
}
// SideNavNavigation.defaultProps = {
//     // title : 'TITLE'
// }
// SideNavNavigation.propTypes = {
//     // title : PropTypes.string
// }

const NavigationItem = ({iconType, icon, slug, link}) => {
    console.log("ICONTYPE:", iconType, "ICON", icon)
    // let reactIco = null 
    // if (iconType === 'react-icons'){
    //     reactIco = ( < {icon} className='item-link-icon' />)
    //     console.log(reactIco);
    // }
    return (
        <li className='nav-list-item'>
            <Link className='item-link' to={link}>
                {console.log(iconType)}
                {iconType === 'react-icons'? ( icon ) : null}
                {iconType === 'image'? ( <img className='item-link-icon' src={icon} alt="SideNav Navigation Icon" /> ) : null}
                {iconType === 'faIcons'? ( <i className={'item-link-icon ' + icon}></i> ): null}
                {/* <AiOutlineHome/> */}
                <span>{slug}</span>
            </Link>
        </li>
    )
}
NavigationItem.defaultProps = {
    iconType : 'react-icons',
    icon: <TbLogout/>,
    slug: 'Home',
    link: '/'
}
NavigationItem.propTypes = {
    iconType: PropTypes.oneOf(['react-icons', 'image', 'faIcons']), // supports images react-icons and fontawsome icons
    icon: PropTypes.element,
    slug: PropTypes.string,
    link: PropTypes.string
}

const SideNav = ({children, position, width, id}) => {
  return (
    <nav 
        id={"sideNav"+id}
        className='sideNav'
        style={{
            width: width,
            left: position === 'left' ? '0' : '',
            right: position === 'right' ? '0' : '',
        }}
    >
        <button className='toggleBtn' onClick={(() => toggleSideNav(id))}><AiOutlineMenu/></button>
        {children}
        {console.log(children)}
        {/* <img src="" alt="" /> */}
        {/* <div className="navigation">
            <ul className='navigation-list'>
                <li className='nav-list-item'>
                    <Link className='item-link' to=''>
                        <AiOutlineHome />
                        <span>Home</span>
                    </Link>
                </li>
                <li className='nav-list-item'>
                    <Link className='item-link' to=''>
                        <AiOutlineInfoCircle/>
                        <span>About</span>
                    </Link>
                </li>
                <li className='nav-list-item'>
                    <Link className='item-link' to=''>
                        <IoPricetagsOutline/>
                        <span>Pricing</span>
                    </Link>
                </li>
                <li className='nav-list-item'>
                    <Link className='item-link' to=''>
                        <TbLogicAnd/>
                        <span>Blog</span>
                    </Link>
                </li>
                <li className='nav-list-item'>
                    <Link className='item-link' to=''>
                        <AiOutlineContacts/>
                        <span>Contact</span>
                    </Link>
                </li>
                <li className='nav-list-item'>
                    <Link className='item-link' to=''>
                        <AiOutlineQuestionCircle/>
                        <span>FAQ</span>
                    </Link>
                </li>
            </ul>
        </div> */}
        <div className="end">
            <div 
                className="user-content"
                style={{
                    flexDirection: position === 'right' ? 'row-reverse' : ''
                }}
            >
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
    position: 'left' // left or right
}
SideNav.propTypes = {
    id : PropTypes.string,
    width : PropTypes.string,
    position: PropTypes.string
}

SideNav.Title = SideNavTitle
SideNav.Navigation = SideNavNavigation
SideNav.NavItem = NavigationItem

export default SideNav