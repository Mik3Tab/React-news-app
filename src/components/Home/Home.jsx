import React, {Component} from 'react';
import './Home.scss';
export const Home = () => {
    return (
        <div classNaame="middle">
          <p className="parrafo">Welcome to my NYT Tech news app</p>
          <div className="info">
              <p>Here you can check latest news from IT, and fill a form which will be stored in Local Storage</p>
          </div>
        </div>
    )
}
export default Home;