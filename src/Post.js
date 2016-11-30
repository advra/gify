// https://css-tricks.com/image-upload-manipulation-react/

import React, { Component } from 'react';
import './App.css';

import img_jackolantern from './images/jackolantern.gif';
import img_book from './images/book.gif';
import img_walking from './images/walk.gif';
import img_moon from './images/moon.gif';

//database structure will contain 2 different tables as below (used for now)
const TestDB = {
	users:[
		{
			id: 0,
			username: "Potion"
		},
		{
			id: 1,
			username: "Kitty"
		},
		{
			id: 2,
			username: "Moon"
		},
		{
			id: 3,
			username: "Draccula"
		},
		{
			id: 4,
			username: "Adrian"
		}

	],
	images:[
		{
			id: 0,
			user: 2, //we will match the user to the username
			name: "Jack-O-Lantern",
			src: img_jackolantern,
			description: "A tribute halloween, ooo spooky",
			likes: 12,
			comments: 1
		},
		{
			id: 1,
			user: 3,
			name: "Awesome Book",
			src: img_book,
			description: "I made this cool book thats animated!",
			likes: 4,
			comments: 0
		},
		{
			id: 2,
			user: 0,
			name: "Walking",
			src: img_walking,
			description: "Some guy just walking around",
			likes: 4,
			comments: 0
		},
		{
			id: 3,
			user: 3,
			name: "Pixel Moon",
			src: img_moon,
			description: "I watched this sci-fi movie and grew inspired to draw this Red Moon",
			likes: 4,
			comments: 0
		}

	]
}

//each page will contain 20 - 50 elements
class Post extends Component {
  render() {
    return (

       	<div className ="col-xs-12">
        	{this.getPost(3)}
        	{this.getPost(1)}
        	{this.getPost(1)}
        	{this.getPost(3)}
        	{this.getPost(0)}
        	{this.getPost(1)}
        	{this.getPost(2)}
        	{this.getPost(3)}
        	{this.getPost(1)}
        	{this.getPost(0)}
        	{this.getPost(2)}
        	{this.getPost(3)}
        	{this.getPost(3)}
        	{this.getPost(1)}
        	{this.getPost(2)}
        	{this.getPost(1)}
        	{this.getPost(0)}
        	{this.getPost(1)}
        	{this.getPost(3)}
        	{this.getPost(1)}
        	{this.getPost(0)}
        	{this.getPost(1)}
        	{this.getPost(0)}
        	{this.getPost(2)}
        	{this.getPost(2)}
        	{this.getPost(0)}
        	{this.getPost(2)}
        	{this.getPost(3)}
        	{this.getPost(1)}
        	{this.getPost(1)}
        	{this.getPost(3)}
        	{this.getPost(2)}
        	{this.getPost(0)}
        	{this.getPost(1)}
        	{this.getPost(2)}
        	{this.getPost(3)}
        </div>

    );
  }

//need to limit the size via function to prevent stretch ie. pumpkin
  getPost(id){
  	return (
  		<div className = "post-container col-xs-4 col-sm-3 col-md-3 col-lg-2 col-xl-2">
	  		<p>
	  			{TestDB.images[id].name} by {this.matchUserToPost(TestDB.images[id].user)} <br/>
	  			<img src={TestDB.images[id].src} className="images gallery" alt="An Image" />
	  		</p>
	  	</div>
  	);
  }

  matchUserToPost(id){
  	return TestDB.users[id].username;
  }

  populateImages(type){
  	if(type==="New"){
  		return "New Btn Clicked";
  	}

  	if(type==="Top"){
  		return "Top Btn Clicked";
  	}

  	if(type==="About"){
  		return "About BTN Clicked";
  	}
  }



}; //End of Post Component Class

export default Post;
