import { DatePipe } from '@angular/common';
import { Component } from '@angular/core';



@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [DatePipe],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.css',
})
export class FooterComponent {
  toDoDate: Date = new Date();

  constructor() {}
}