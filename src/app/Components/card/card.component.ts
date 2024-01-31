import { Component, EventEmitter, Input, Output } from '@angular/core';
import { IProduct } from '../../Model/iproduct';
import { ToChangeDirective } from '../../Directive/to-change.directive';
import { CurrencyPipe } from '@angular/common';
import { elementAt } from 'rxjs';
import { StaticProductService } from '../../Services/StaticProduct.service';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-card',
  standalone: true,
  imports: [ToChangeDirective, CurrencyPipe,RouterLink],
  templateUrl: './card.component.html',
  styleUrl: './card.component.css',
})
export class CardComponent {
  TotalPrice: number = 0;
  Quantity: number = 0;

  filterProduct: IProduct[];

  FirstProduct: IProduct[];

  @Output() ShowProduct: IProduct[] = [];

  @Input() SelectedSelect: number = 0;

  @Output() ChangePrice: EventEmitter<number>;

  constructor(
    private ProductService: StaticProductService,
    private router: Router
  ) {
    this.FirstProduct = this.ProductService.Products;
    this.ChangePrice = new EventEmitter<number>();

    this.filterProduct = this.FirstProduct;
  }

  toBuy(product: IProduct) {
    if (product.Quantity > 0) {
      this.TotalPrice += product.Price * 1;
      product.Quantity--;
      this.ChangePrice.emit(this.TotalPrice);

      const existingProduct = this.ShowProduct.find(
        (element) => element.ID === product.ID
      );

      if (existingProduct) {
        existingProduct.Quantity += 1;
      } else {
        this.ShowProduct.push({
          ID: product.ID,
          Name: product.Name,
          Quantity: 1,
          Price: product.Price,
          Img: '',
          CategoryID: product.CategoryID,
        });
      }
    }
  }
  toTrackProduct(index: number, product: IProduct): number {
    return product.ID;
  }

  ngOnChanges(): void {
    this.toFilter();
  }

  toFilter() {
    if (this.SelectedSelect == 0) {
      this.filterProduct = this.ProductService.Products;
    } else {
      this.filterProduct = this.ProductService.toGetCategoryID(
        this.SelectedSelect
      );
    }
  }

  // toDetails(Id: number) {
  //   // this.router.navigateByUrl(`/Details/${Id}`);

  //   this.router.navigate(['/Details', Id]);
  // }
}
