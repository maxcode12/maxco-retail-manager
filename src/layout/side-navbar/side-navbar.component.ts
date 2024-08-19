import { Component } from '@angular/core';

@Component({
  selector: 'app-side-navbar',
  standalone: true,
  imports: [],
  template: `
    <div>
      <div class="logo">
        <img src="assets/images/maxco-logo.png" class="img-logo" alt="Logo" aria-hidden="false">
        <h3>MaxCo Retail</h3>
      </div>
    
        <a href="#">Dashboard</a>
        <a href="#"></a>
        <a href="#">Link 3</a>    
      
      </div>
  `,
  styleUrl: './side-navbar.component.scss'
})
export class SideNavbarComponent {

}
