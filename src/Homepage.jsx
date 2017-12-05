import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './ExpandSidebar.js';

class Homepage extends Component {

  openNav() {
    document.getElementById('sidenav').style.width = "250px";
  };

  closeNav() {
    document.getElementById('sidenav').style.width = "0";
  };

  render() {
    return (
      <div id="nav-div">
      <div id="sidenav" class="sidenav">
        <a href="javascript:void(0)" class="closebtn" onClick={this.closeNav}>&times;</a>
        <a href="javascript:void(0)"> <span class="glyphicon glyphicon-search"> </span></a>
        <a href="#">Weather</a>
        <a href="#">News</a>
        <a href="#">Sports</a>
        <a href="#">Crime</a>
        <a href="#">Meet the Team</a>
        <a href="#" target="_blank">Contact Us</a>
        <ul class="social-list">
        <li><a href="#">
          <img class="icon" src="https://vice-web-statics-cdn.vice.com/icons/facebook.svg" alt="Facebook"
          width="30"/>
          </a>
        </li>
        <li><a href="#"><img class="icon" src="https://vice-web-statics-cdn.vice.com/icons/twitter.svg"
          width="30" alt="Twitter"/></a></li>
        <li><a href="#"><img class="icon" src="https://redkix.com/wp-content/themes/metallixa/ui/assets/images/logos/google_logo.png" alt="Google"
          width="30"/></a></li>
      </ul>
      <ul class="social-list">
        <li><a href="#"><img class="icon" src="https://vice-web-statics-cdn.vice.com/icons/instagram-white.svg"
          width="30" alt="Instagram"/></a></li>
        <li><a href="#"><img class="icon" src="https://www.greenworkscleaners.com/wp-content/themes/ccl-default/img//refresh/icons/pinterest.png"
          width="30" alt="Pinterest"/></a></li>
        <li><a href="#"><img class="icon" src="https://seeklogo.com/images/S/snapchat-ghost-logo-B618EE0704-seeklogo.com.png"
          width="30" alt="Snapchat"/></a></li>
        </ul>
      </div>
    <div id="top-nav" class="navbar">
    <div class="navbar-header">
      <button id="menu-button" class="btn" onClick={this.openNav}>
          <span>
            <div class="menu-icon"></div>
            <div class="menu-icon"></div>
            <div class="menu-icon"></div>
          </span>
      </button>
      <a class="brand" href="/">
        <img src="https://78.media.tumblr.com/5235cf04a61f4a1614f66d896b972d28/tumblr_oyr1v4kNIt1wr9wxio1_250.png" height="55"></img></a>
        </div>
      <div id="user-specific-nav" class="collapse navbar-collapse">
        <ul class="nav pull-right navbar-nav">
        <li id="search-bar">
          <form class="form-inline">
          <input class="form-control mr-sm-2" type="text" placeholder="Search"></input>
          <a class="btn navbar-button someHov" type="submit">Search</a>
          </form>
        </li>
          <li><a href="#" class="fa fa-facebook"></a></li>
          <li><a href="#" class="fa fa-twitter"></a></li>
          <li><a href="#" class="fa fa-google"></a></li>
          <li><a href="#" class="fa fa-instagram"></a></li>
          <li><a href="#" class="fa fa-pinterest"></a></li>
          <li><a href="#" class="fa fa-snapchat-ghost"></a></li>
          <li><span class="glyphicon glyphicon-search"> </span></li>
          </ul>
      </div>
    </div>
  </div>
    );
  }




}

export default Homepage;
