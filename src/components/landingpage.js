import React, {Component} from 'react';
import {Grid,Cell} from 'react-mdl';
import {Button} from 'react-bootstrap';
import { Link} from 'react-router-dom';

class Landingpage extends Component{
    render(){
        return(
            <div style={{width:'100%', margin:'auto'}}>
                <Grid className="landing-grid">
                    <Cell col={1}></Cell>
                    <Cell col={4}>
                        <img src={require('./images/2.png')} alt="portofolio" className="avatar-img"/>
                    </Cell>
                    <Cell col={7}><div className="banner-text"><h1>Hi, I'm Henry! <span role="img" aria-label="cheetah">🐆</span></h1><h4>I majored in computer science and data science at University of Western Australia(UWA).
                        I believe that a good product design is always inspired by real life. My dream is design personalised applications in accordance with customer demands. If people ask me that if you
                        are turned into an animal, what do you what to be? I would say cheetah without a doubt beacuse its fast, resolute, and accurate. Hunting requires a very concentrated mind. Likewise, company needs efficiency, determination, and over-standard completion.
                        <hr/>
                        <div className="icon">
                        <a href="https://github.com/nanowangshikai"><img src={require('./images/github1.png')} alt="Github"/></a>
                        <a href="mailto:henrywangkaikai@gmail.com"><img src={require('./images/gmail.png')} alt="gmail"/></a>
                        <a href="https://www.instagram.com/nanoismynickname/"><img src={require('./images/ins.png')} alt="Instagram"/></a>
                        <a href="https://www.facebook.com/"><img src={require('./images/facebook.png')} alt="Facebook"/></a>
                        </div>

                        <div style={{marginBottom:"20px"}}></div>
                        <div className="contact">
                        <Link to="./contact"><Button variant="outline-success" size='lg'>Contact Me</Button></Link>
                        <Button variant="outline-success" style={{marginLeft:"10px"}} size='lg'>Resume</Button>
                        </div>
                         </h4>
                         

                         </div>
                    </Cell>
                </Grid>
                <div></div>
            </div>
        )
    }
}

export default Landingpage;