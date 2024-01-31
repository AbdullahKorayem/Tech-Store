import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { StaticProductService } from '../../Services/StaticProduct.service';
import { IProduct } from '../../Model/iproduct';
import { Location } from '@angular/common';

@Component({
  selector: 'app-product-details',
  standalone: true,
  imports: [],
  templateUrl: './product-details.component.html',
  styleUrl: './product-details.component.css',
})
export class ProductDetailsComponent {
  IDProduct: number = 0;
  theProduct: IProduct | null = null;
  constructor(
    private ActiveRoute: ActivatedRoute,
    private productService: StaticProductService,
    private Location: Location,
    private router: Router
  ) {}

  ngOnInit(): void {
    // this.IDProduct = Number(this.ActiveRoute.snapshot.paramMap.get('ID'));
    this.ActiveRoute.paramMap.subscribe((parameter) => {
      this.IDProduct = Number(parameter.get('ID'));
      this.theProduct = this.productService.toGetProduct(this.IDProduct);
      console.log(this.theProduct);
    });
  }

  toGoBack() {
    this.router.navigateByUrl(`/Home`);
  }

  toGoPrevious() {
    let prod = this.productService.toGetHoleIDs();
    let index = prod.indexOf(this.IDProduct);

    if (index > 0) {
      this.router.navigateByUrl(`/Details/${prod[--index]}`);
    }
  }

  toGoNext() {
    let prod = this.productService.toGetHoleIDs();
    let index = prod.indexOf(this.IDProduct);

    if (index < prod.length) {
      this.router.navigateByUrl(`/Details/${prod[++index]}`);
    } else if (index == null) {
      index = 0;
      this.router.navigateByUrl(`/Details/${prod[index]}`);
    }
  }
}
