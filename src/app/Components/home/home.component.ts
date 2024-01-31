import { CommonModule } from '@angular/common';
import { Component, ViewChild } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ICategory } from '../../Model/icategory';

import { CardComponent } from '../card/card.component';
import { NationalityInputComponent } from '../natunality-input/natunality-input.component';
import { IProduct } from '../../Model/iproduct';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    CardComponent,
    NationalityInputComponent,
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent {
  SelectedItem: number = 0;
  Category: ICategory[];
  Price: number = 0;
  theFinalQuantity: number = 0;

  @ViewChild(CardComponent) cardComp!: CardComponent;
  @ViewChild(CardComponent) ShowProduct!: CardComponent;

  toShow: IProduct[] = [];
  element: IProduct[] = [];

  constructor() {
    this.Category = [
      {
        ID: 1,
        Name: 'Mobile',
      },
      {
        ID: 2,
        Name: 'Laptop',
      },
      {
        ID: 3,
        Name: 'Tablet',
      },
      {
        ID: 4,
        Name: 'Camera',
      },
      {
        ID: 5,
        Name: 'Console',
      },
    ];
  }

  toFilter() {}

  totalPrice(event: number) {
    this.Price = event;

    this.toShow = this.ShowProduct.ShowProduct;

    console.log(this.toShow);
  }

  ngAfterViewInit(): void {
    console.log(this.toShow);
  }

  toDelete(ID: number, Quantity: number) {
    const existingProductIndex = this.toShow.findIndex(
      (item) => item.ID === ID
    );

    if (existingProductIndex !== -1) {
      if (this.toShow[existingProductIndex].Quantity > 0) {
       this.toShow[existingProductIndex].Quantity--;

        this.Price -= this.toShow[existingProductIndex].Price;
      } else {
        this.toShow.splice(existingProductIndex, 1);
      }
    }
  }

  toCheckOut() {
    this.toShow = [];
    this.Price=0
    
  }
}
