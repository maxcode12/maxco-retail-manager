import { Component } from '@angular/core';
import { RouterLink, RouterModule } from '@angular/router';

@Component({
  selector: 'app-side-navbar',
  standalone: true,
  imports: [RouterModule, RouterLink],
  template: `
    <div>
      <div class="logo">
        <img src="assets/images/maxco-logo.png" class="img-logo" alt="Logo" aria-hidden="false">
        <h3>MaxCo Retail</h3>
      </div>
    
      <div class="menu">
        <ul>
          <li>
            <a href="#">
              <i class="fa fa-home"></i>
              <span>Dashboard</span>
            </a>
          </li>
          <li>
            <a [routerLink]="['/products']" routerLinkActive="router-link-active" >
              <i class="fa fa-sign-out"></i>
              <span>Products</span>
            </a>
          </li>
          <li>
            <a href="#">
              <i class="fa fa-folder"></i>
              <span>Categories</span>
            </a>
          </li>
          <li>
            <a href="#">
              <i class="fa fa-store-alt"></i>
              <span>Orders</span>
            </a>
          <li>
          <li>
            <a href="#">
              <i class="fas fa-door-open"></i>
              <span>Inventories</span>
            </a>
          </li>
          <li>
            <a href="#">
              <i class="fa fa-user"></i>
              <span>Customers</span>
            </a>
          </li>
          <li>
            <a href="#">
              <i class="fa fa-poll"></i>
              <span>Report</span>
            </a>
          </li>
          <li>
            <a href="#">
              <i class="fa fa-sign-out"></i>
              <span>Settings</span>
            </a>
          </li>
        </ul>  
      
      </div>
  `,
  styleUrl: './side-navbar.component.scss'
})
export class SideNavbarComponent {

}
