import React, { Component } from 'react';



class App extends Component {
  render() {
    return (
      <div className='container'>
        <br/>
        <h5>Which is your favorite color?</h5>
        <span>Blue Red White Black Green</span>
        <br/>
        <h5>Which is your favorite brand?</h5>
        <span>Nike Adidas Taco Bell Ikea</span>
        <br/>
        <h5>What article interests your most?</h5>
        <span></span>
        <br/>
        <h5>Which is your favorite shape?</h5>
        <br/>
        <h5>What is your favorite food?</h5>
        <br/>
        <h5>What sentence is most appealing?</h5>
        <br/>
        <h5>Which product do you like?</h5>
        <span>Book Shoe Pillow</span>
        <br/>
        <h5>Which song do you like most?</h5>
        <span>Aphex Twin Cold Play The Beatles</span>
        <br/>
        <button className='btn btn-danger'>Personalize My Site</button>
      </div>
    );
  }
}

export default App;
