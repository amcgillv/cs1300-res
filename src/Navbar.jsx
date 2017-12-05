import React, { Component } from 'react';

class MyNavbar extends Component {
  render() {
    return (

      <div class="pos-f-t">
        <div class="collapse" id="navbarToggleExternalContent">
          <div class="bg-inverse p-4">
            <h4 class="text-white">Collapsed content</h4>
              <span class="text-muted">Toggleable via the navbar brand.</span>
          </div>
        </div>
        <nav class="navbar navbar-inverse bg-inverse">
        <button id="menu-button" class="btn" onclick="openNav()">
            <span>
              <div class="menu-icon"></div>
              <div class="menu-icon"></div>
              <div class="menu-icon"></div>
            </span>
        </button>
        </nav>
        <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/latest/css/bootstrap.min.css"/>
        <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/latest/css/bootstrap-theme.min.css"/>

      </div>

    );
  }
}

export default MyNavbar;
