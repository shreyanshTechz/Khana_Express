import React, { Component } from 'react'
import { BrowserRouter,Route,Routes } from 'react-router-dom'
import SignIN from './components/auth/SignIN'
import SignUp from './components/auth/SignUp'
import Dashboard from './components/dashboard/Dashboard'
import Navbar from './components/layout/Navbar'
import SignedLinks from './components/layout/SignedLinks'
import ProjectDetails from './components/projects/ProjectDetails'
import CreateProject from './components/projects/CreateProject'
import Project from './components/projects/Project'
export default class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Navbar />
          <Routes>
            <Route exact path='/' element={<Dashboard/>}/>
            <Route path='/project/:id' element={<ProjectDetails/>}/>
            <Route path='/Signin' element={<SignIN/>}/>
            <Route path='/Signup' element={<SignUp/>}/>
            <Route path='/Signup' element={<try/>}/>
            <Route path='/details' element={<Project/>}/>
            <Route path='/create' element={<CreateProject/>}/>
          </Routes>
        </div>
      </BrowserRouter>

    )
  }
}


