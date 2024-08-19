import { Component } from '@angular/core';
import { HeaderComponent } from "../../../../layout/header/header.component";
import { SideNavbarComponent } from "../../../../layout/side-navbar/side-navbar.component";

@Component({
  selector: 'app-dashboards',
  standalone: true,
  imports: [HeaderComponent, SideNavbarComponent],
  templateUrl: './dashboards.component.html',
  styleUrl: './dashboards.component.scss'
})
export class DashboardsComponent {

}
