import React, {Component} from 'react';
import {Tabs, Tab, Grid, Cell, Card, CardTitle, CardActions, Button, CardMenu, IconButton, CardText} from 'react-mdl';
import AOS from 'aos';
import 'aos/dist/aos.css'
AOS.init();


class Project extends Component{
    constructor(props){
        super(props);
            this.state={activeTab:0};
        }
    
   toggleCategories(){
    if(this.state.activeTab === 0){
        return(
            <div className="projects-grid">
                 {/* Web project 1  */}
                <Card shadow={5} style={{minWidth:'450', margin:'auto'}} data-aos="fade-right" data-aos-duration="1500">
                <CardTitle style={{color:'#fff', height:'175px',background: 'url(https://objects.ruanbekker.com/assets/images/python-flask.png) center / cover'  }}>Car Racing voting system</CardTitle>
                <CardText>
                A web application designed to rank the results of the worlds most popular cars.This website uses Python, Flask, and SQLite3 as back-end stores all votes for users and displayed as a bar chart in the front-end by HTML+CSS+Javascript.
                </CardText>
                <CardActions border style={{}}>
                <span role='img' aria-label="finger" style={{fontSize:"30px"}}>👉🏻</span><a href="https://github.com/nanowangshikai/JavascriptProject"><Button colored>GitHub</Button></a>
                </CardActions>
                <CardMenu style={{color:'#fff'}}>
                    <IconButton name="share"/>
                </CardMenu>
                </Card>

                <div style={{marginBottom:'50px'}}></div>

                {/* Web Project 2 */}
                <Card shadow={5} style={{minWidth:'450', margin:'auto'}} data-aos="fade-right" data-aos-duration="1500">
                <CardTitle style={{color:'#fff', height:'175px',background: 'url(https://cdn.educba.com/academy/wp-content/uploads/2018/10/Top-Uses-Of-reactjs.jpg) center / cover'  }}>Personal Profolio</CardTitle>
                <CardText>Mainly used javascript library React and the package manager "npm". In order to display the website gh-pages used to build and delopy. For React Components, React-MDL, React-Bootstrap and antd is used. </CardText>
                <CardActions border>
                <span role='img' aria-label="finger" style={{fontSize:"30px"}}>👉🏻</span><a href="https://github.com/nanowangshikai/myreact"><Button colored>GitHub</Button></a>
                </CardActions>
                <CardMenu style={{color:'#fff'}}>
                    <IconButton name="share"/>
                </CardMenu>
                </Card>
            </div>
            
        )
    }else if(this.state.activeTab ===1){
        return(<div >
             <Card shadow={5} style={{minWidth:'450', margin:'auto'}} >
                <CardTitle style={{color:'#fff', height:'175px', background : 'url(https://en.pimg.jp/043/985/684/1/43985684.jpg)  center/ cover'}}>Transportation communication</CardTitle>
                <CardText>User use this website to check train time-table and destination. This project is about communication between web-browser and station server. Client sending its traffic info using HTTP protocol. TCP communicate with browser and server. Different stations use UDP to communicate  </CardText>
                <CardActions border>
                <span role='img' aria-label="finger" style={{fontSize:"30px"}}>👉🏻</span><a href="https://github.com/nanowangshikai/NetworkProject"><Button colored>GitHub</Button></a>
                </CardActions>
                <CardMenu style={{color:'#fff'}}>
                    <IconButton name="share"/>
                </CardMenu>
                </Card>
        </div>)
    }else if(this.state.activeTab === 2){
        return(<div><Card shadow={5} style={{minWidth:'450', margin:'auto'}}>
        <CardTitle style={{color:'#fff', height:'175px', background : 'url(https://profi-user.ru/wp-content/uploads/2017/08/opengl_demo.png)  center/ cover'}}>Graphics and Animation</CardTitle>
        <CardText>In the simple scene editor allows a collection of objects to be arranged in a scene and various properties of them to be changed, such as colour, shininess and texture. </CardText>
        <CardActions border>
        <span role='img' aria-label="finger" style={{fontSize:"30px"}}>👉🏻</span><a href="https://github.com/nanowangshikai/Graphics-and-Animation"><Button colored>GitHub</Button></a>
        </CardActions>
        <CardMenu style={{color:'#fff'}}>
            <IconButton name="share"/>
        </CardMenu>
        </Card>
        </div>)
    }else if(this.state.activeTab ===3){
        return(<div><Card shadow={5} style={{minWidth:'450', margin:'auto'}}>
        <CardTitle style={{color:'#fff', height:'175px', background : 'url(https://process.fs.teachablecdn.com/ADNupMnWyR7kCWRvm76Laz/resize=width:705/https://www.filepicker.io/api/file/FjpqrSFwSvGCTL3cCqPt)  center/ cover'}}>Data structure and AI</CardTitle>
        <CardText>Array, Linked List, Stack, and Queue has learned so it can be effectively organzing data in a computer. I have also learned Data alogorithm such as Dijstra, A*, dynamic programming. </CardText>
        <CardActions border>

        </CardActions>
        <CardMenu style={{color:'#fff'}}>
            <IconButton name="share"/>
        </CardMenu>
        </Card></div>)
    }
   }



    render(){
        return(
            <div className="category-tabs">
                <Tabs activeTab={this.state.activeTab} onChange={(tabId)=>this.setState({activeTab:tabId})} ripple>
                    <Tab>Web</Tab>
                    <Tab>Python/C++</Tab>
                    <Tab>OpenGL</Tab>
                    <Tab>Java</Tab>
                </Tabs>

                <section>
                    <Grid>
                        <Cell col={12}>
                            <div className="content">{this.toggleCategories()}</div>
                        </Cell>
                    </Grid>
                </section>
            </div>
        )
    }
}

export default Project;