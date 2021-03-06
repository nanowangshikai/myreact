import React, {Component} from 'react';
import {Grid, Cell, List, ListItem, ListItemContent} from 'react-mdl';
import AOS from 'aos';
import 'aos/dist/aos.css'
import {Translation} from 'react-i18next';

import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faHtml5,faJs,faReact,faNode,faNpm,faPython,faJava,faGithub } from '@fortawesome/free-brands-svg-icons';

AOS.init();

class Contact extends Component{
    render(){
        return(
            <div className="contact-body" style={{display:"block"}}>
                <Grid className="contact-grid">
                    
                    <Cell col={6} >
                    <Translation>
                            {
                                (t, { i18n }) => <h4>{t('contact_header')}</h4>}
                    </Translation>
                        <img data-aos="zoom-in" data-aos-duration="1500"  className="contact_img" src={require('./images/1.svg')} alt="working man" style={{height:"250px" }} ></img>
                        <ul className="tool_list" data-aos="zoom-out" data-aos-duration="1500">
                        <li className="contact_icon"><FontAwesomeIcon icon={faHtml5}/><p>html-5</p></li> 
                        <li className="contact_icon"><FontAwesomeIcon icon={faJs}/><p>js</p></li> 
                        <li className="contact_icon"><FontAwesomeIcon icon={faReact}/><p>reactjs</p></li>
                        <li className="contact_icon"><FontAwesomeIcon icon={faNode}/><p>nodejs</p></li>
                        <li className="contact_icon"><FontAwesomeIcon icon={faNpm}/><p>npm</p></li>
                        <li className="contact_icon"><FontAwesomeIcon icon={faPython}/><p>python</p></li>
                        <li className="contact_icon"><FontAwesomeIcon icon={faJava}/><p>java</p></li>
                        <li className="contact_icon"><FontAwesomeIcon icon={faGithub}/><p>github</p></li>

                        
                        </ul>
                    </Cell>
                    <Cell col={6} >
                    {/* <div className="contact2">
                        <p><span img>🖊</span> Develop highly responsive Front-end and Back-end for business web and mobile application </p>
                        <p><span img>🖊</span> Experienced of various DBMS technology like MySQL, MySQLite3 with python-flask</p>
                       <p><span img>🖊</span> Familiar with application network protocols between clients and servers.</p>
                    </div> */}

                    <Translation>
                            {
                                (t, { i18n }) => <h4>{t('contact')}</h4>}
                    </Translation>
                                 
                            
                        
                    <hr/>

                    <div className="contact-list" >
                    <List>
                    <ListItem>
                        <ListItemContent style={{fontSize:'25px', fontFamily:'Pangolin'}}>
                            <i className="fa fa-phone-square" aria-hidden="true" />
                            (+61) 0478847708
                        </ListItemContent>
                    </ListItem>

                    <ListItem>
                        <ListItemContent style={{fontSize:'25px', fontFamily:'Pangolin'}}>
                            <i className="fa fa-envelope" aria-hidden="true"/>
                            516921959@qq.com
                        </ListItemContent>
                    </ListItem>

                    <ListItem>
                        <ListItemContent style={{fontSize:'25px', fontFamily:'Pangolin'}}>
                            <i className="fa fa-wechat" aria-hidden="true"/>
                            wsk516921959
                        </ListItemContent>
                    </ListItem>

                    <ListItem>
                        <ListItemContent style={{fontSize:'25px', fontFamily:'Pangolin'}}>
                            <i className="fa fa-home" aria-hidden="true"/>
                            Perth, Australia 6009
                        </ListItemContent>
                    </ListItem>
                    

                    </List>
                    </div>

                    </Cell>
                    
                

                    
                </Grid>
            </div>
        )
    }
}

export default Contact;