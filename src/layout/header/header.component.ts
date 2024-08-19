import { Component } from '@angular/core';


@Component({
  selector: 'app-header',
  standalone: true,
  imports: [],
  template: `
<div class="main-header">
    <div class="container">
      <div class="header-content">
        <div class="inner-header-left">
        <div class="menu-toggle">
          <button class="btn btn-primary" (click)="toggleSideNavbar()">
            <i class="fa fa-bars"></i>
          </button>
        </div>
        <!-- search bar -->
        <div class="search-bar">
          <form class="form-group">
            <input class="form-control" type="search" placeholder="Search" aria-label="Search">
            <button class="btn btn-primary" type="submit">
              <i class="fa fa-search"></i>
            </button>
          </form>
        </div>
        </div>
        
        <div class="inner-header-right">
          <div class="notification">
            <i class="notification-icon fa fa-bell"></i>
            <span class="badge">3</span>
          </div>
          <div class="user-info">
            <img src="/assets/images/user-avatar.png" alt="user"
            class="user-image">
            <span class="user-name">John Doe</span>
            <ul class="dropdown-menu">
              <li><a href="#">Profile</a></li>
              <li><a href="#">Settings</a></li>
              <li><a href="#">Logout</a></li>
            </ul>
          </div>
        </div>
        
        
        
      </div>
</div>
  
  `,
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
toggleSideNavbar() {
throw new Error('Method not implemented.');
}

}
