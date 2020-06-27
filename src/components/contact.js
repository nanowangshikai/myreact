import React, {Component} from 'react';
import {Grid, Cell, List, ListItem, ListItemContent} from 'react-mdl';

class Contact extends Component{
    render(){
        return(
            <div className="contact-body" style={{display:"block"}}>
                <Grid >
                    <Cell col={6} className="contact-grid">
                        <h4>Full Stack Web Developer</h4>
                        <img className="contact_img" src={require('./images/1.svg')} alt="working man" style={{height:"250px" }} ></img>
                        <ul className="tool_list">
                        <li className="contact_icon"><i class="fab fa-html5"></i><p>html-5</p></li> 
                        <li className="contact_icon"><i class="fab fa-js"></i><p>js</p></li> 
                        <li className="contact_icon"><i class="fab fa-react"></i><p>reactjs</p></li>
                        <li className="contact_icon"><i class="fab fa-node"></i><p>nodejs</p></li>
                        <li className="contact_icon"><i class="fab fa-npm"></i><p>npm</p></li>
                        <li className="contact_icon"><i class="fab fa-python"></i><p>python</p></li>
                        <li className="contact_icon"><i class="fab fa-java"></i><p>java</p></li>
                        <li className="contact_icon"><i class="fab fa-github"></i><p>github</p></li>

                        
                        </ul>
                    </Cell>
                    <Cell col={6} className="contact-grid">
                    {/* <div className="contact2">
                        <p><span img>🖊</span> Develop highly responsive Front-end and Back-end for business web and mobile application </p>
                        <p><span img>🖊</span> Experienced of various DBMS technology like MySQL, MySQLite3 with python-flask</p>
                       <p><span img>🖊</span> Familiar with application network protocols between clients and servers.</p>
                    </div> */}
                    <h4>Contact Me</h4>
                    <hr/>

                    <div className="contact-list">
                    <List>
                    <ListItem>
                        <ListItemContent style={{fontSize:'25px', fontFamily:'Pangolin'}}>
                            <i className="fa fa-phone-square" aria-hidden="true"/>
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