import React, { Component } from 'react';

import { bindActionCreators } from 'redux'; 
import { connect } from 'react-redux';

import { setPreferences } from '../actions/index'

import { Link } from 'react-router-dom';



class Survey extends Component {
  constructor(){
    super()

    this.state={
        feeling:'',
        topic:'',
        product:''
    }
  }


  feelClick(feeling){
    this.setState({feeling:feeling})
    console.log(this.state)
  }

  topicClick(topic){
    this.setState({topic:topic})
    console.log(this.state)
  }

  productClick(product){
    this.setState({product:product})
    console.log(this.state)
  }

  personalizeSite(){
    this.props.setPreferences(this.state)
  }




  render() {
    return (
      <div className='container'>
        <br/>

        <h4>How do you feel today? <strong style={{color:'red'}}>{this.state.feeling}</strong></h4>
        <button onClick={() => this.feelClick('happy')} className='btn btn-default'>Happy</button>
        <button onClick={() => this.feelClick('sad')} className='btn btn-default'>Sad</button>
        <button onClick={() => this.feelClick('bored')} className='btn btn-default'>Bored</button>

        <br/>
        <br/>

        <h4>What topics are you interested in today? <strong style={{color:'red'}} >{this.state.topic}</strong></h4>
        <button onClick={() => this.topicClick('sports')} className='btn btn-default'>Sports</button>
        <button onClick={() => this.topicClick('politics')} className='btn btn-default'>Politics</button>
        <button onClick={() => this.topicClick('technology')} className='btn btn-default'>Technology</button>

        <br/>
        <br/>

        <h4>What products are you interested in today? <strong style={{color:'red'}} >{this.state.product}</strong></h4>
        <button onClick={() => this.productClick('shoes')} className='btn btn-default'>Shoes</button>
        <button onClick={() => this.productClick('books')} className='btn btn-default'>Books</button>
        <button onClick={() => this.productClick('appliances')} className='btn btn-default'>Appliances</button>


        <br/>
        <br/>
        <br/>

        <Link to="/personalize">
        <button onClick={this.personalizeSite.bind(this)} className='btn btn-lg btn-danger'>Personalize</button>
        </Link>
        
      </div>
    );
  }
}



function mapStateToProps(state){
  return { 
  }
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({
    setPreferences:setPreferences

  }, dispatch);
};



Survey = connect(mapStateToProps, mapDispatchToProps)(Survey);

export default Survey
