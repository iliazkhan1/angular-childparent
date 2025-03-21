import { CommonModule } from '@angular/common';
import { Component} from '@angular/core';
import { StudentSummaryComponent } from '../student-summary/student-summary.component';

@Component({
  selector: 'app-student-dashboard',
  imports: [CommonModule,StudentSummaryComponent],
  templateUrl: './student-dashboard.component.html',
  styleUrl: './student-dashboard.component.css'
})
export class StudentDashboardComponent {
  students = [
    { id: 1, name: 'Iliaz Khan', gender: 'Male', dob: '1-08-2003', courseFee: 1200 },
    { id: 2, name: 'Jhon', gender: 'Male', dob: '30-02-2004', courseFee: 1000 },
    { id: 3, name: 'priya', gender: 'Female', dob: '17-04-2004', courseFee: 1500 },
  ];


  get totalCount(): number {
    return this.students.length;
  }
  get maleCount(): number {
    return this.students.filter(student => student.gender === 'Male').length;
  }
  get femaleCount(): number {
    return this.students.filter(student => student.gender === 'Female').length;
  }
}