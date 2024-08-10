import { Component } from 'react';
import {BrowserRouter, Routes, Route} from 'react-router-dom'

import SignUp from './components/SignUp'
import DashBoard from './components/DashBoard'
import Login from './components/Login'

import './App.css'





class App extends Component {
  render() {
    return(
<BrowserRouter>
  <Routes>
    <Route exact path='/' Component={SignUp}/>
    <Route exact path='/login' Component={Login}/>
    <Route exact path='/dashboard' Component={DashBoard}/>
  </Routes>
</BrowserRouter>
    )
  }
}



export default App;
