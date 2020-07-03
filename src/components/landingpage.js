import React, {Component} from 'react';
import {Grid,Cell} from 'react-mdl';
import {Button} from 'react-bootstrap';
import { Link} from 'react-router-dom';
import AOS from 'aos';
import 'aos/dist/aos.css';

import {Translation} from 'react-i18next';

AOS.init();


class Landingpage extends Component{
    render(){
        return(
            <div style={{width:'100%', margin:'auto'}} >
                <Grid className="landing-grid">
                    <Cell col={1}></Cell>
                    <Cell col={4}>
                        <img data-aos="fade-right" data-aos-duration="1500"  src={require('./images/11.png')} alt="portofolio" className="avatar-img"/>
                    </Cell>
                    <Cell col={7}><div className="banner-text">
                        <Translation>
                            {
                                (t, { i18n }) => <h1>{t('landingpage')} <span role="img" aria-label="cheetah">🐆</span></h1>
                            }
                        </Translation>
                        
                        <Translation>
                            {
                                (t, { i18n }) => <h4>{t('langdingpage_body')} 
                                <hr/>
                        <div className="icon">
                        <a href="https://github.com/nanowangshikai"><img src={require('./images/github1.png')} alt="Github"/></a>
                        <a href="mailto:henrywangkaikai@gmail.com"><img src={require('./images/gmail.png')} alt="gmail"/></a>
                        <a href="https://www.instagram.com/nanoismynickname/"><img src={require('./images/ins.png')} alt="Instagram"/></a>
                        <a href="https://www.facebook.com/"><img src={require('./images/facebook.png')} alt="Facebook"/></a>
                        </div>

                        <div style={{marginBottom:"20px"}}></div>
                        <div className="contact">

                            <Link to="/contact"><Button variant="outline-success" size='lg'>{t('landingpage_button1')}</Button></Link>

                        <Button variant="outline-success" style={{marginLeft:"10px"}} size='lg'>{t('landingpage_button2')}</Button>
                        </div>
                                </h4>
                            }
                        </Translation>
                        
                        
                        
                         

                         </div>
                    </Cell>
                </Grid>
                <div></div>
            </div>
        )
    }
}

export default Landingpage;