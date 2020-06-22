import React from 'react';
import './App.css';
import {Layout,Header,Navigation,Content} from 'react-mdl'
import Main from './components/main';
import {Link} from 'react-router-dom';
 


function App() {
  return (
      
<div style={{height: '500px', position: 'relative'}}>
   

    <Layout fixedHeader >
    
        <Header title="ShiKai Wang" style={{backgroundColor:'white' ,color:'black', fontFamily:"Courier New" }} className="header-color">
            <Navigation >
                <Link to="/myreact" style={{color:'black'}}>Home</Link>
                <Link to="/project" style={{color:'black'}}>Project</Link>
                <Link to="/aboutme" style={{color:'black'}}>AboutMe</Link>
                <Link to="/contact" style={{color:'black'}}>Contact</Link>

            </Navigation>
        </Header>
        
        <Content><Main/></Content>
    </Layout>

</div>
  );
}

export default App;
