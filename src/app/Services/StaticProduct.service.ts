import { Injectable, numberAttribute } from '@angular/core';
import { IProduct } from '../Model/iproduct';

@Injectable({
  providedIn: 'root',
})
export class StaticProductService {
  Products: IProduct[];

  constructor() {
    this.Products = [
      {
        ID: 1,
        Name: 'Pixel 7 Pro',
        Quantity: 70,
        Price: 50000,
        Img: 'https://fdn2.gsmarena.com/vv/bigpic/google-pixel7-pro-new.jpg',
        CategoryID: 1,
      },
      {
        ID: 2,
        Name: 'Pixel 8 Pro Plus',
        Quantity: 0,
        Price: 5000,
        Img: 'https://fdn2.gsmarena.com/vv/pics/google/google-pixel-8-pro-1.jpg',
        CategoryID: 1,
      },
      {
        ID: 3,
        Name: 'Apple iPhone 15',
        Quantity: 22,
        Price: 5000,
        Img: 'https://fdn2.gsmarena.com/vv/bigpic/apple-iphone-15.jpg',
        CategoryID: 1,
      },
      {
        ID: 4,
        Name: 'Apple iPhone 15 Pro',
        Quantity: 43,
        Price: 5000,
        Img: 'https://fdn2.gsmarena.com/vv/bigpic/apple-iphone-15-pro.jpg',
        CategoryID: 1,
      },
      {
        ID: 5,
        Name: 'Nothing Phone (2)',
        Quantity: 2,
        Price: 5000,
        Img: 'https://fdn2.gsmarena.com/vv/bigpic/nothing-phone2_.jpg',
        CategoryID: 1,
      },
      {
        ID: 6,
        Name: 'MacBook Pro M3 14 inch',
        Quantity: 2,
        Price: 5000,
        Img: 'https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/mbp14-spacegray-select-202310?wid=452&hei=420&fmt=jpeg&qlt=95&.v=1697230830200',
        CategoryID: 2,
      },
      {
        ID: 7,
        Name: 'Legion 7 Gen 7 AMD (16") with Radeon RX 6850M XT',
        Quantity: 15,
        Price: 4000,
        Img: 'https://p1-ofp.static.pub/medias/24337148403_LenovoLegion716ARHA7IMG_202203210152361656097514653.png',
        CategoryID: 2,
      },
      {
        ID: 8,
        Name: 'ASUS Rog Strix RTX 4090 laptop',
        Quantity: 0,
        Price: 5500,
        Img: 'https://www.compumarts.com/cdn/shop/files/ASUS-ROG-Strix-Scar-18-Intel-Core-i9-13980HX_02.jpg?v=1688548031',
        CategoryID: 2,
      },
      {
        ID: 9,
        Name: 'MSI Raider GE78HX Core i9-13980HX, NVIDIA GeForce RTX 4090 16GB, RAM 32GB, SSD 2TB NVMe, 17″',
        Quantity: 18,
        Price: 4800,
        Img: 'https://shuttershopegypt.com/wp-content/uploads/2023/05/MSI-Raider-GE78-HX.jpg0_.jpg',
        CategoryID: 2,
      },
      {
        ID: 10,
        Name: 'Apple MacBook Air 15” M2, SSD 256GB, RAM 8GB',
        Quantity: 25,
        Price: 6000,
        Img: 'https://shuttershopegypt.com/wp-content/uploads/2023/08/Apple-MacBook-Air-15-M2.jpg',
        CategoryID: 2,
      },
      {
        ID: 11,
        Name: 'Apple MacBook Air 13.6″ M2, GPU 8c, SSD 512GB, RAM 8GB',
        Quantity: 12,
        Price: 7000,
        Img: 'https://shuttershopegypt.com/wp-content/uploads/2023/07/Apple-13.6-MacBook-Air-M2-Silver.jpg',
        CategoryID: 2,
      },
      {
        ID: 12,
        Name: 'Canon EOS 5D Mark IV DSLR Camera with 24-105mm f/4L II Lens',
        Quantity: 20,
        Price: 7500,
        Img: 'https://www.bhphotovideo.com/cdn-cgi/image/format=auto,fit=scale-down,width=500,quality=95/https://www.bhphotovideo.com/images/images500x500/canon_eos_5d_mark_iv_1561852319_1274706.jpg',
        CategoryID: 4,
      },
      {
        ID: 13,
        Name: 'Canon EOS R7 BODY + R Mount',
        Quantity: 1,
        Price: 4800,
        Img: 'https://i0.wp.com/www.shams-stores.com/wp-content/uploads/2023/08/Canon-EOS-R7-with-R-mount-Shams-Stores.png?w=500&ssl=1',
        CategoryID: 4,
      },
      {
        ID: 14,
        Name: 'Canon XF605 UHD 4K HDR Pro Camcorder',
        Quantity: 1,
        Price: 6000,
        Img: 'https://i0.wp.com/www.shams-stores.com/wp-content/uploads/2022/09/1629233149_1659385.jpg?w=500&ssl=1',
        CategoryID: 4,
      },
      {
        ID: 15,
        Name: 'Canon EOS R3 Mirrorless Camera (Body Only)',
        Quantity: 24,
        Price: 7000,
        Img: 'https://i0.wp.com/www.shams-stores.com/wp-content/uploads/2022/03/1631606739_1634981.jpg?w=500&ssl=1',
        CategoryID: 4,
      },
      {
        ID: 16,
        Name: 'iPad Air 64GB WiFi',
        Quantity: 15,
        Price: 4500,
        Img: 'https://tradelinestores.s3.amazonaws.com/media/product_images/57c7580c-75b8-46a4-9d0f-d7346a442b03.png',
        CategoryID: 3,
      },
      {
        ID: 17,
        Name: 'Apple iPad Pro 2022, Wi-Fi, 11 inch, 128GB, Space Grey',
        Quantity: 21,
        Price: 8000,
        Img: 'https://fdn2.gsmarena.com/vv/bigpic/apple-ipad-pro-129-2022.jpg',
        CategoryID: 3,
      },
      {
        ID: 18,
        Name: 'Samsung Galaxy S24 Ultra',
        Quantity: 18,
        Price: 9000,
        Img: 'https://fdn2.gsmarena.com/vv/bigpic/samsung-galaxy-s24-ultra-5g-sm-s928-stylus.jpg',
        CategoryID: 1,
      },
      {
        ID: 19,
        Name: 'Sony playstation 5 console with wireless controller cd version, white and black',
        Quantity: 22,
        Price: 4800,
        Img: 'https://m.media-amazon.com/images/I/31Pnn6VuXpL._AC_.jpg',
        CategoryID: 5,
      },
      {
        ID: 20,
        Name: 'Microsoft XBOX SERIES X 1TB Video Game Console',
        Quantity: 26,
        Price: 6500,
        Img: 'https://i.ebayimg.com/images/g/HnIAAOSwrqVlfFK3/s-l960.jpg',
        CategoryID: 5,
      },
    ];
  }

  toGetAllProducts(): IProduct[] {
    return this.Products;
  }

  toGetProduct(Id: number): IProduct | null {
    let theItem = this.Products.find((item) => item.ID == Id);
    return theItem ? theItem : null;
  }

  toGetCategoryID(CatID: number): IProduct[] {
    return this.Products.filter((item) => item.CategoryID == CatID);
  }

  toGetHoleIDs(): number[] {
    return this.Products.map((item) => item.ID);
  }
}
