import { Injectable } from '@angular/core';
import {
  Observable,
  catchError,
  delay,
  filter,
  finalize,
  from,
  interval,
  map,
  take,
  throwError,
} from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class PromotingService {
  Ads: string[];

  constructor() {
    this.Ads = [
      'Unleash the Power of PS5 Console - Elevate Your Experience!',
      'Discover Innovation at Its Finest with Tech-Store - Redefine Your Lifestyle!',
      'Revolutionize Your Experience Newest Xbox Series X Console Be a Trendsetter!',
      'Transform the Ordinary into Extraordinary Tech-Store Delivers Excellence!',
      'Elevate Your Everyday with Tech-Store Where Quality Meets Style!',
      'Experience the Future Now - Introducing Techs Cutting-Edge Samsung S24 Ultra!',
      'Unlock a World of Possibilities - Choose Mobile for Iphone 15 Pro Excellence!',
      'Seamless Performance, Exceptional Style - MacBook Pro Defines Perfection!',
      'Join the Tech-Store Movement - Where Innovation Meets Inspiration!',
      'Upgrade Your Life / Work / Style with Your Product/Service - Elevate Every Moment!',
    ];
  }

  ///creating observable form scratch
  toPushAds() {
    return new Observable<string>((Subscriber) => {
      let I = 0;
      let theInterval = setInterval(() => {
        if (I == this.Ads.length) {
          Subscriber.complete();
        }
        if (this.Ads[I] == '') {
          Subscriber.error();
        }

        Subscriber.next(this.Ads[I]);
        I++;
      }, 4000);

      return {
        unsubscribe: () => {
          clearInterval(theInterval);
        },
      };
    });
  }

  newPromotionNoScratch() {
    return interval(3000).pipe(
      take(this.Ads.length),
      map((index) => this.Ads[index]),
      delay(4000), // You might want to remove this line to maintain a consistent interval
      filter((ad) => ad !== ''),
      catchError((Error) => {
        console.error('Error From Filtration');
        return Error('any');
      }),
      finalize(() => console.log('Mission Completed'))
    );
  }
}
