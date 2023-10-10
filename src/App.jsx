import { useEffect, useState } from 'react'
import SideNav from './sidenav/Sidenav'
import { AiOutlineClose, AiOutlineQuestionCircle, AiOutlineHome, AiOutlineContacts, AiOutlineInfoCircle} from "react-icons/ai";
import { TbLogout, TbLogout2, TbLogicAnd } from "react-icons/tb";
import { IoPricetagsOutline } from "react-icons/io5";

function App() {

  return (
    <div className='app'>
      <SideNav position={'left'} id={'exampleNav'}>
        <SideNav.Title title={'TEMPLATE'}/>
        <SideNav.Navigation>
          <SideNav.NavItem  slug={'Home'} iconType={'react-icons'} icon={<AiOutlineHome/>}/>
          <SideNav.NavItem  slug={'About'} iconType={'react-icons'} icon={<AiOutlineInfoCircle/>}/>
          <SideNav.NavItem  slug={'Contact'} iconType={'react-icons'} icon={<AiOutlineContacts/>}/>
          <SideNav.NavItem  slug={'Store'} iconType={'react-icons'} icon={<IoPricetagsOutline/>}/>
          <SideNav.NavItem  slug={'FAQ'} iconType={'react-icons'} icon={<AiOutlineQuestionCircle/>}/>
        </SideNav.Navigation>
      </SideNav>
    </div>
  )
}

export default App
