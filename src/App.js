import React, { Component } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import SignIN from './components/auth/SignIN'
import SignUp from './components/auth/SignUp'
import Dashboard from './components/dashboard/Dashboard'
import Navbar from './components/layout/Navbar'
// import SignedLinks from './components/layout/SignedLinks'
// import ProjectDetails from './components/projects/ProjectDetails'
import CreateProject from './components/projects/CreateProject'
// import Project from './components/projects/Project'
// import Api from './components/Apidata/Api'
// import axios from 'axios';
import FrontDash from './components/Apidata/FrontDash'
// import $http from '@/services/HttpClient';
// import { getDatabase } from "firebase/database";
// import Google from './components/auth/Google'
export default class App extends Component {
  // db = getDatabase();
  // async getUsers() {
  //   const options = {
  //     method: 'GET',
  //     url: 'https://edamam-food-and-grocery-database.p.rapidapi.com/parser',
  //     params: {ingr: 'apple'},
  //     headers: {
  //       'X-RapidAPI-Key': '7914dc87e2msh63c6ef9c498e562p12e7afjsn53bb0e865ab4',
  //       'X-RapidAPI-Host': 'edamam-food-and-grocery-database.p.rapidapi.com'
  //     }
  //   };
    
  //       try {
  //       const res = await axios.get(options);
  //       this.setState({
  //       users: res.data,
  //       isLoading: false,
  //   })
  //   } catch(err) {
  //       this.setState({
  //       err,
  //       isLoading: false
  //   })
  //   }
  //   console.log(this.users);
  //   }
  render() {
    // console.log(this.props.db);
    return (
      <BrowserRouter>
      <Navbar />
        <div className="App">
          {/* <Navbar /> */}
          <Routes>
            <Route exact path='/cart' element={<Dashboard />} />
            {/* <Route path='/project/:id' element={<ProjectDetails />} /> */}
            <Route path='/Signin' element={<SignIN />} />
            <Route path='/Signup' element={<SignUp />} />
            <Route path='/' element={<FrontDash item={['pizza','burger','chocolate','fruits','cake','biscuits','milk','butter','oil','namkeen','candy','jeera','Nuts','Haldi','sweets','honey','noodles','suji','sugar','popcorn','chips']}/>} />
            {/* <Route path='/details' element={<Project />} /> */}
            <Route path='/create' element={<CreateProject />} />
            {/* <Route path='/google' element={<Google/>}/> */}
          </Routes>
        </div>
      </BrowserRouter>

    )
  }
}


