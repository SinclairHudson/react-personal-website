import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import {BrowserRouter as Router, Switch, Route, Link} from 'react-router-dom';

import SideNav, {Toggle, Nav, NavItem, NavIcon, NavText} from '@trendmicro/react-sidenav';
import './Navbar.css';

import Home from "./components/Home";
import Projects from "./components/Projects";
import Experiences from "./components/Experiences";
import Contact from "./components/Contact";

class App extends Component {
    render() {
        return (
            <div>
                <Router>
                    <Route render={({location, history}) => (
                        <React.Fragment>
                            <SideNav
                                onSelect={(selected) => {
                                    const to = '/' + selected;
                                    if (location.pathname !== to) {
                                        history.push(to);
                                    }
                                }}
                            >
                                <SideNav.Toggle/>
                                <SideNav.Nav defaultSelected="home">
                                    <NavItem eventKey="home">
                                        <NavIcon>
                                            <i className="fa fa-fw fa-home" style={{fontSize: '1.75em'}}/>
                                        </NavIcon>
                                        <NavText>
                                            Home
                                        </NavText>
                                    </NavItem>
                                    <NavItem eventKey="Projects">
                                        <NavIcon>
                                            <i className="fa fa-fw fa-device" style={{fontSize: '1.75em'}}/>
                                        </NavIcon>
                                        <NavText>
                                            Projects
                                        </NavText>
                                    </NavItem>
                                    <NavItem eventKey="Experiences">
                                        <NavIcon>
                                            <i className="fa fa-fw fa-device" style={{fontSize: '1.75em'}}/>
                                        </NavIcon>
                                        <NavText>
                                            Experiences
                                        </NavText>
                                    </NavItem>
                                    <NavItem eventKey="Contact">
                                        <NavIcon>
                                            <i className="fa fa-fw fa-device" style={{fontSize: '1.75em'}}/>
                                        </NavIcon>
                                        <NavText>
                                            Contact
                                        </NavText>
                                    </NavItem>
                                </SideNav.Nav>
                            </SideNav>
                            <main>
                                <Route path="/" exact component={Home}/>
                                <Route path="/experiences" component={Experiences}/>
                                <Route path="/contact" component={Contact}/>
                                <Route path="/projects" component={Projects}/>
                            </main>
                        </React.Fragment>
                    )}
                    />
                </Router>
            </div>
        );
    }
}

export default App;
