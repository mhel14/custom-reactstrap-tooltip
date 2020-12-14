import React, { useState } from 'react';
import SidebarNavItem from './components/SidebarNavItem';

import logo from './assets/images/playback_logo.png';
import logoutIcon from './assets/images/logout_icon.PNG';
import {ReactComponent as CardIcon} from './assets/images/card.svg';
import {ReactComponent as CargoIcon} from './assets/images/cargo.svg';
import {ReactComponent as HomeIcon} from './assets/images/home.svg';
import './App.css';

function App() {
  const [ navList ] = useState([
    {
      id: 1,
      component: <CardIcon />
    },
    {
      id: 2,
      component: <HomeIcon />
    },
    {
      id: 3,
      component: <CargoIcon />
    },
  ])

  return (
    <div className="App">
      <header className="header">
        <div className="logoWrapper">
          <img src={logo} alt="Playback Logo"/>
        </div>
        <div className="profileWrapper">
          <p className="emailAddress">Kannan@gmail.com</p>
          <div className="avatar">K</div>
          <img className="logout" src={logoutIcon} alt="logout icon" />
        </div>
      </header>
      <main>
        <aside>
          <ul className="sidebarNav">
            {
              navList.map(({id, component}) => (
                <SidebarNavItem id={id} component={component} key={id} />
              ))
            }
          </ul>
        </aside>
      </main>
    </div>
  );
}

export default App;
