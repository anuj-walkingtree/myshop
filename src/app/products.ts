export interface Product {
  id: number;
  name: string;
  price: number;
  description: string;
  image: string;
}

export const products = [
  {
    id: 1,
    name: 'Phone XL',
    price: 1200,
    description: 'A large phone with one of the best screens',
    image:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTU9NSEW3NpBn47Kvu7WMOGEaL0AdarSikTxPfxy1WfrL1om4mwPtz73M6zXp8PSatqg18'},
  {
    id: 2,
    name: 'Samsung S24 Ultra',
    price: 1500,
    description: 'A great phone with one of the best cameras',
    image:'https://akm-img-a-in.tosshub.com/indiatoday/images/device/1705987832Galaxy-s24-ultra-specs--800x800_one_to_one.jpg?VersionId=9C.lUSIETGMmAOpaNM0dv3O.rq0iX.Rh'
  },
  {
    id: 3,
    name: 'Phone Standard',
    price: 100,
    description: 'A normal keypad phone for standard use',
    image:'https://5.imimg.com/data5/KK/CK/MY-11124544/nokia-105-keypad-mobile.jpg'
  }
];


/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at https://angular.io/license
*/