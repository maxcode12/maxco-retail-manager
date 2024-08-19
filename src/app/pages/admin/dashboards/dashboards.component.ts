import { Component } from '@angular/core';
import { HeaderComponent } from "../../../../layout/header/header.component";
import { SideNavbarComponent } from "../../../../layout/side-navbar/side-navbar.component";
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-dashboards',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './dashboards.component.html',
  styleUrl: './dashboards.component.scss'
})
export class DashboardsComponent {

}
