import { Component, ElementRef, ViewChild } from '@angular/core';
import { ToDividePipe } from '../../pipe/to-divide.pipe';
import { DatePipe } from '@angular/common';
import { CreditCardPipe } from '../../pipe/credit-card.pipe';

@Component({
  selector: 'app-natunality-input',
  standalone: true,
  imports: [ToDividePipe, DatePipe, CreditCardPipe],
  templateUrl: './natunality-input.component.html',
  styleUrl: './natunality-input.component.css',
})
export class NationalityInputComponent {
  @ViewChild('nationalityID') nationalityID!: ElementRef;
  myDate: Date = new Date();
  myNationality: string = '29906122602778';

  myCredit: string = '0000000000000000';

 
  
  ngAfterViewInit(): void {
   console.log(this.nationalityID.nativeElement.value)
    
  }
}
