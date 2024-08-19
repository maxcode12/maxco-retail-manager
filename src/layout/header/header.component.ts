import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [],
  template: `
    <div class="inner-header">
      <div class="inner-header-left">
        <div class="search-bar">
          <input type="text" placeholder="Search" />
          <button>Search</button>
        </div>
      </div>

      <div class="inner-header-right">
        <div class="user-profile">
          <img src="https://via.placeholder.com/150" alt="User Profile" />
          <span>John Doe</span>
        </div>
      </div>
      
    </div>
  `,
  styleUrl: './header.component.scss'
})
export class HeaderComponent {

}
