// https://css-tricks.com/image-upload-manipulation-react/

import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

// Add other module
import Post from './Post';

class App extends Component {
  render() {
    return (
      <div className="App">
          <header id="top" className = "container-fluid">
            <div className="logo col-xs-12 col-sm-1">
              <h1><a className="logo" href="#">.GIFfy</a></h1>
            </div>
            <div className="col-xs-12 col-sm-11">
              <ul className="top">
                <li><a href="#">Home</a></li>
                <li><a href="#">New</a></li>
                <li><a href="#">Top</a></li>
                <li><a href="#">About</a></li>
                <li className ="last"> <a href="upload.php" type="submit" className="submit button">Submit</a></li>
              </ul>
            </div>
          </header>

          <main className ="container-fluid">
            <section className="main-area">

               <Post />
               <Post />
               <Post />
               <Post />
               <Post />
               <Post />
               <Post />
               <Post />
       
            </section>

            
         
          </main>

          <footer className ="container-fluid">
            <p>GIFfy - A React App by Adrian Alonzo <br/>
              <a href="#">Contact</a> | <a href="#">About</a>
            </p>
          </footer>


      </div>
    );
  }
}

export default App;
