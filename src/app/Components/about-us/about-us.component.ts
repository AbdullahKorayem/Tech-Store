import { Component, OnInit, OnDestroy } from '@angular/core';
import { PromotingService as PromotionsService } from '../../Services/promothins.service';
import { Subscription, timer } from 'rxjs';
import { delay } from 'rxjs/operators';

@Component({
  selector: 'app-about-us',
  standalone: true,
  templateUrl: './about-us.component.html',
  styleUrls: ['./about-us.component.css'],
})
export class AboutUsComponent implements OnInit, OnDestroy {
  ObservableData: any
  AdSubscription!: Subscription;

  constructor(private promotionAdsService: PromotionsService) { }

  ngOnInit() {

    this.AdSubscription = this.promotionAdsService
      .newPromotionNoScratch().subscribe({
        next: (Data) => { this.ObservableData = Data; },
        error: (Error) => console.log(Error),
        complete: () => {
          console.log('Completed');
        },
      });
 

  }

 
  ngOnDestroy(): void {
    if (this.AdSubscription) {
      this.AdSubscription.unsubscribe();
    }
  }
}
