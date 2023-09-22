import { useState } from 'react'
import SideNav from './Sidenav'

function App() {

  return (
    <div className='app'>
      <SideNav position={'left'} id={'fuck123'}>
        <SideNav.Title title={'test'}/>
        {/* <SideNav.Navigation></SideNav.Navigation> */}
        {/* <SideNav.Title title={'test2'}/> */}
      </SideNav>
    </div>
  )
}

export default App
