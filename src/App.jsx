import { useEffect, useState } from 'react'
import SideNav from './Sidenav'
import { AiOutlineClose, AiOutlineQuestionCircle, AiOutlineHome, AiOutlineContacts, AiOutlineInfoCircle} from "react-icons/ai";
import { TbLogout, TbLogout2, TbLogicAnd } from "react-icons/tb";
import { IoPricetagsOutline } from "react-icons/io5";

function App() {

  return (
    <div className='app'>
      <SideNav position={'left'} id={'fuck123'}>
        <SideNav.Title title={'test'}/>
        <SideNav.Navigation>
          <SideNav.NavItem  slug={'Home'} iconType={'react-icons'} icon={<AiOutlineHome/>}/>
          <SideNav.NavItem  slug={'About'} iconType={'react-icons'} icon={<AiOutlineInfoCircle/>}/>
        </SideNav.Navigation>
      </SideNav>
    </div>
  )
}

export default App
