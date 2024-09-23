import './App.css';

import React, { Component } from 'react'
import Navbar from './Components/Navbar';
import News from './Components/News';

import {
  BrowserRouter as Router,
  Routes,
  Route,
} from 'react-router-dom';

export default class App extends Component {

  render() {
    return (
    <Router>
    <Navbar/>
    <Routes>
    <Route exact path='/'element = {<News key="general" cat="general" pageSize={12}/>}>
   
</Route>
{/* <Route exact path='/home'element = {<News key="home" cat="general" pageSize={6}/>}>
   
</Route> */}
<Route exact path='/business' element = {<News key="bussiness" cat="business" pageSize={12}/>}/>
<Route exact path='/entertainment'element = {<News key="entertainment" cat="entertainment" pageSize={12}/>}/>/
    
<Route exact path='/health' element={<News key="health" cat="health" pageSize={12}/>}/>
    
<Route exact path='/science' element = {<News key="science" cat="science" pageSize={12}/>}/>
    
<Route exact path='/sports' element = {<News key="sports" cat="sports" pageSize={12}/>}/>
    
<Route exact path='/technology' element = {<News key="technology" cat="technology" pageSize={12}/>}/>
    
 </Routes>
</Router>
    )
  }
}

