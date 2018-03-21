import React, { Component } from 'react';

import { bindActionCreators } from 'redux'; 
import { connect } from 'react-redux';

import { Link } from 'react-router-dom';



var feelingData = {
	"sad":[
		{"tip":"Dont worry, everything will be alright", "img":"", "color":"midnightblue"}
	],

	"happy":[
		{"tip":"Share your happiness with the world", "img":"", "color":"gold"}
	],

	"bored":[
		{"tip":"Boredom is the path to discovery", "img":"", "color":"orchid"}
	]
}


var topicData = {
	"sports":[
		{"title":"Baseball Team Wins", "img":"https://usatthebiglead.files.wordpress.com/2017/09/gettyimages-845811188.jpg?w=1000&h=600&crop=1"},
		{"title":"Football Team Loses", "img":"https://s.hdnux.com/photos/70/26/55/14773080/5/920x920.jpg"},
		{"title":"Play Soccer Today", "img":"https://i.kinja-img.com/gawker-media/image/upload/t_original/779849287804709034.jpg"},
	],

	"politics":[
		{"title":"Trump Eats Dirt", "img":"https://www.notebookcheck.net/fileadmin/Notebooks/News/_nc3/1514895590.jpg"},
		{"title":"Senator Wins Race", "img":"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSIa2NqgXcKQM3mWImHCm2q07dILNjodBI17meby3kqof9xCLMx"},
		{"title":"Government Helps Homeless", "img":"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTfY_arD8HBUv9WCqEKOteq6mULjmIi8uQlb9MGl5F036un-Pye"},
	],

	"technology":[
		{"title":"Elon Musk Smells", "img":"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR6yMm1TWp0j6r3wpCrZTlrqQZrntkKyhBvW4oCoRgESRaLuz3d"},	
		{"title":"Google Gets Sued", "img":"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQEiY4Rgo1gQyCFh0lqmZ-NhVX359w9q6F3u4nAPMZ854p9vPG2"},	
		{"title":"Facebook Stole Data", "img":"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTar9caEUrMK6DCJxPWEzv9DzEyDd-_6_MAZSDhJwLjSdX3TQx4"},		
	]

}


var productData = {
	"shoes":[
		{"title":"Boots", "img":"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQxo0goJqBJXbORvXkxah_gFvC9WUTOa1LE4pUE-4jgbKakIBNX"},
		{"title":"High Heels", "img":"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR7QHP7o7JIjkde9FigL3rOhtrtQzr7xyVbs8aXR7PelJSBgCuh"},
		{"title":"Sandles", "img":"https://item1.tradesy.com/images/hermes-white-oran-orans-flat-39-sandals-size-us-85-regular-m-b-21753760-0-0.jpg?width=203&height=307"},	
	],

	"books":[
		{"title":"How to Get Rich", "img":"https://www.thesun.co.uk/wp-content/uploads/2017/10/nintchdbpict000002700322.jpg?strip=all&w=960"},
		{"title":"How to Make Bread", "img":"https://images-na.ssl-images-amazon.com/images/I/41o3FMHiXWL.jpg"},
		{"title":"Geography of Space", "img":"https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/3e7a4430835497.560588d14549e.jpg"},	
	],

	"appliances":[
		{"title":"Toaster", "img":"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSB-XUG5SU_g8vp0BlPR8vG8-kaqthYPIQZMwrWiQXJ9GbDaFAD"},
		{"title":"Coffee Maker", "img":"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRPSAZKhmMpWoiV1umtJrC_euJvDiVeToODZy8gExV8X9GyrDNY"},
		{"title":"Washing Machine", "img":"https://images-na.ssl-images-amazon.com/images/I/31aB8qrkHIL._SX355_.jpg"},
	]
}





class Personalize extends Component {
  render() {

  	if(this.props.preferences){

  	var feeling = this.props.preferences.feeling
  	var topic = this.props.preferences.topic
  	var product = this.props.preferences.product




  	var color = feelingData[feeling][0].color
  	var style = {backgroundColor:`${color}`}

  	var feelings = (
	  	<div style={style} className="jumbotron text-center">
		  <h1>{feelingData[feeling][0].tip}</h1>
		</div>
  	)





  	var topics = topicData[topic].map((topic) => {
  		console.log(topic)
  		return(
		  <div className="text-center col-xs-12 col-md-4">
		    <div className="thumbnail">
		      <img style={{height:'150px'}} src={topic.img} alt="..." />
		      <div className="caption">
		        <h4>{topic.title}</h4>
		        <p><a href="#" className="btn btn-default" role="button">Read More</a></p>
		      </div>
		    </div>
		  </div>
	  )
  	})


  	var products = productData[product].map((product) => {
  		return(
		  <div className="text-center col-xs-12 col-md-4">
		    <div className="thumbnail">
		      <img style={{height:'150px'}} src={product.img} alt="..." />
		      <div className="caption">
		        <h4>{product.title}</h4>
		        <p><a href="#" className="btn btn-default" role="button">Buy</a></p>
		      </div>
		    </div>
		  </div>
	  )
  	})



    return (
      <div style={style}>
       

    <nav className="navbar navbar-inverse">
      <div className="container">
        <div className="navbar-header">
          <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar" aria-expanded="false" aria-controls="navbar">
            <span className="sr-only">Toggle navigation</span>
            <span className="icon-bar"></span>
            <span className="icon-bar"></span>
            <span className="icon-bar"></span>
          </button>

          <Link to="/">
          	<button type="button" class="pull-right btn btn-sm btn-default navbar-btn">Personalize More</button>
          </Link>

          <a className="navbar-brand" href="#">{this.props.preferences.feeling}</a>


        </div>
        <div id="navbar" className="navbar-collapse collapse">
          <ul className="nav navbar-nav">

          </ul>
        </div>
      </div>
    </nav>


    {feelings}



	<div className='container'>
	<h5>Your Content</h5>
	<div className="row">

	  {topics}

	</div>
	</div>


	<div className='container'>
	<h5>Your Products</h5>
	<div className="row">

	  {products}

	</div>
	</div>






      </div>
    );



  	} else {
  		return (    
  			<div className='container text-center'> 
  			<br/>
  			<br/>   
  			<Link to="/">
        			<button className='btn btn-lg btn-danger'>Personalize</button>
       		</Link>
       		</div>
       		)
  	}



  }
}


function mapStateToProps(state){
  return { 
  	preferences:state.user.preferences
  }
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({

  }, dispatch);
};



Personalize = connect(mapStateToProps, mapDispatchToProps)(Personalize);

export default Personalize
