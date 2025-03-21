import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { StudentDashboardComponent } from './student-dashboard/student-dashboard.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet,StudentDashboardComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'childparent';
}
