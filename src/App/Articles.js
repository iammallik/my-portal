import React, { Component } from 'react';
import '../App.css';

class Articles extends Component{
  render(){
    return(
      <div>
          <div className="jumbotron">

              <h1 class="display-4">Welcome to My homepage!</h1>
              <p class="lead">This is a simple hero unit, a simple jumbotron-style component for calling extra attention to featured content or information.</p>
              <hr class="my-4"></hr>
              <p>It uses utility classes for typography and spacing to space content out within the larger container.</p>
              <p class="lead">
                      <a class="btn btn-primary btn-lg" href="#" role="button">Learn more</a>
              </p>
          </div>
      </div>
    )
  }
}

export default Articles;
