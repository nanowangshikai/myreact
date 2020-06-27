import React from 'react';
import './App.css';
import {Layout,Header,Navigation,Content, Drawer} from 'react-mdl'
import Main from './components/main';
import {Link} from 'react-router-dom';


 


function App() {
  return ( 
      
<div className="demo-big-content">
   

    <Layout fixedHeader >
    
        <Header title="ShiKai Wang" style={{backgroundColor:'white' ,color:'black', fontFamily:"Courier New" }} className="header-color">
            <Navigation >
                <Link to="/myreact" >Home</Link>
                <Link to="/project" >Project</Link>
                {/* <Link to="/aboutme" >AboutMe</Link> */}
                <Link to="/contact" >Contact</Link>

            </Navigation>
        </Header>
        
        <Drawer title="Menu_Bar">
          <Navigation>
                <Link to="/myreact" >Home</Link>
                <Link to="/project" >Project</Link>
                {/* <Link to="/aboutme" >AboutMe</Link> */}
                <Link to="/contact" >Contact</Link>
          </Navigation>
        </Drawer>

        <Content><Main/></Content>
    </Layout>

</div>
  );
}

export default App;
