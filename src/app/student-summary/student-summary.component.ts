import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-student-summary',
  templateUrl: './student-summary.component.html',
  styleUrls: ['./student-summary.component.css']
})
export class StudentSummaryComponent {
  @Input() totalCount: number = 0;  
  @Input() maleCount: number = 0;   
  @Input() femaleCount: number = 0; 
}