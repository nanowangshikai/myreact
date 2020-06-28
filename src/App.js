import React from 'react';
import './App.css';
import {Layout,Header,Navigation,Content, Drawer, IconButton, Menu, MenuItem} from 'react-mdl'
import Main from './components/main';
import {Link} from 'react-router-dom';

import {useTranslation} from 'react-i18next';


function App() {

  const {t, i18n } = useTranslation();
  function handleClick(lang){
    i18n.changeLanguage(lang);
  }

  return ( 
      
<div className="demo-big-content">
   
    <Layout fixedHeader >
        
        <Header title="ShiKai Wang" style={{backgroundColor:'white' ,color:'black', fontFamily:"Courier New" }} className="header-color">
        <img src={require('./components/images/settings-icon.png')} className="rotate" alt="setting"/>
            <Navigation >
                <Link to="/myreact" >{t('header1')}</Link>
                <Link to="/project" >{t('header2')}</Link>
                {/* <Link to="/aboutme" >AboutMe</Link> */}
                <Link to="/contact" >{t('header3')}</Link>

                <span style={{fontSize:'30px'}} role="img" aria-label="finger">👉🏻</span>
                <IconButton name="more_vert" id="demo-menu-lower-right" style={{color:'black'}}/>
                <Menu target="demo-menu-lower-right" align="right">
                    <MenuItem onClick={()=>handleClick('chi')}>English</MenuItem>
                    <MenuItem onClick={()=>handleClick('en')}>简体中文</MenuItem>
                    
                </Menu>

            </Navigation>
        </Header>
        
        <Drawer title={t('title')}>
          <Navigation>
                <Link to="/myreact" >{t('header1')}</Link>
                <Link to="/project" >{t('header2')}</Link>
                {/* <Link to="/aboutme" >AboutMe</Link> */}
                <Link to="/contact" >{t('header3')}</Link>
          </Navigation>
        </Drawer>

        <Content><Main/></Content>
    </Layout>

</div>
  );
}

export default App;
