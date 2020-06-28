import React, {Component} from 'react';
import {Tabs, Tab, Grid, Cell, Card, CardTitle, CardActions, Button, CardMenu, IconButton, CardText} from 'react-mdl';
import AOS from 'aos';
import 'aos/dist/aos.css'
import {Translation} from 'react-i18next';

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
                 <Translation>
                    {
                        (t, { i18n }) => <Card shadow={5} style={{minWidth:'450', margin:'auto'}} data-aos="fade-right" data-aos-duration="1500">
                        <CardTitle style={{color:'#fff', height:'175px',background: 'url(https://objects.ruanbekker.com/assets/images/python-flask.png) center / cover'  }}>{t('project_web')}</CardTitle>
                        <CardText>
                        {t('project_web_info')}
                        </CardText>
                        <CardActions border style={{}}>
                        <span role='img' aria-label="finger" style={{fontSize:"30px"}}>👉🏻</span><a href="https://github.com/nanowangshikai/JavascriptProject"><Button colored>GitHub</Button></a>
                        </CardActions>
                        <CardMenu style={{color:'#fff'}}>
                            <IconButton name="share"/>
                        </CardMenu>
                        </Card>
                
                
                    }
                </Translation>

                <div style={{marginBottom:'50px'}}></div>
                
                
                {/* Web Project 2 */}
                <Translation>
                    {
                        (t, { i18n }) =>
                <Card shadow={5} style={{minWidth:'450', margin:'auto'}} data-aos="fade-right" data-aos-duration="1500">
                <CardTitle style={{color:'#fff', height:'175px',background: 'url(https://cdn.educba.com/academy/wp-content/uploads/2018/10/Top-Uses-Of-reactjs.jpg) center / cover'  }}>{t('project_web2')}</CardTitle>
                    <CardText>{t('project_web2_info')}</CardText>
                <CardActions border>
                <span role='img' aria-label="finger" style={{fontSize:"30px"}}>👉🏻</span><a href="https://github.com/nanowangshikai/myreact"><Button colored>GitHub</Button></a>
                </CardActions>
                <CardMenu style={{color:'#fff'}}>
                    <IconButton name="share"/>
                </CardMenu>
                </Card>
                    }
                </Translation>

            </div>
            
        )
    }else if(this.state.activeTab ===1){
        return(<div >
            <Translation>
                    {
                        (t, { i18n }) =>
             <Card shadow={5} style={{minWidth:'450', margin:'auto'}} >
                <CardTitle style={{color:'#fff', height:'175px', background : 'url(https://en.pimg.jp/043/985/684/1/43985684.jpg)  center/ cover'}}>{t('project_python')}</CardTitle>
                <CardText>{t('project_python_info')}</CardText>
                <CardActions border>
                <span role='img' aria-label="finger" style={{fontSize:"30px"}}>👉🏻</span><a href="https://github.com/nanowangshikai/NetworkProject"><Button colored>GitHub</Button></a>
                </CardActions>
                <CardMenu style={{color:'#fff'}}>
                    <IconButton name="share"/>
                </CardMenu>
                </Card>
                }
                </Translation>
        </div>)
    }else if(this.state.activeTab === 2){
        return(<div>
        <Translation>
                    {
                        (t, { i18n }) =>
        <Card shadow={5} style={{minWidth:'450', margin:'auto'}}>
        <CardTitle style={{color:'#fff', height:'175px', background : 'url(https://profi-user.ru/wp-content/uploads/2017/08/opengl_demo.png)  center/ cover'}}>{t('project_opengl')}</CardTitle>
        <CardText>{t('project_opengl_info')} </CardText>
        <CardActions border>
        <span role='img' aria-label="finger" style={{fontSize:"30px"}}>👉🏻</span><a href="https://github.com/nanowangshikai/Graphics-and-Animation"><Button colored>GitHub</Button></a>
        </CardActions>
        <CardMenu style={{color:'#fff'}}>
            <IconButton name="share"/>
        </CardMenu>
        </Card>
        }
        </Translation>
        </div>)
    }else if(this.state.activeTab ===3){
        return(<div><Translation>
            {
                (t, { i18n }) =><Card shadow={5} style={{minWidth:'450', margin:'auto'}}>
        <CardTitle style={{color:'#fff', height:'175px', background : 'url(https://process.fs.teachablecdn.com/ADNupMnWyR7kCWRvm76Laz/resize=width:705/https://www.filepicker.io/api/file/FjpqrSFwSvGCTL3cCqPt)  center/ cover'}}>{t('project_java')}</CardTitle>
        <CardText>{t('project_java_info')}</CardText>
        <CardActions border>

        </CardActions>
        <CardMenu style={{color:'#fff'}}>
            <IconButton name="share"/>
        </CardMenu>
        </Card>}
        </Translation></div>)
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