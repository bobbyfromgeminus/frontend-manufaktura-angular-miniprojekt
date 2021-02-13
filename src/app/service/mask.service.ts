import { Injectable } from '@angular/core';
import { Mask } from '../model/mask';

@Injectable({
  providedIn: 'root'
})
export class MaskService {

  list: Mask[] = [
    {
      "id": 1, 
      "name": "CIAO maszk", 
      "description": "Hidd el nekem, ennyiért ez nem pénzrablás.", 
      "image":"/assets/images/masks/ciao.jpg", 
      "price": 3990
    },
    {
      "id": 2, 
      "name": "SPIDER maszk", 
      "description": "Ezzel a maszkkal mindenkit behálózol.", 
      "image":"/assets/images/masks/spider.jpg", 
      "price": 4990
    },
    {
      "id": 3, 
      "name": "LECTER maszk", 
      "description": "Viselése igazán lebilincselő élmény.", 
      "image":"/assets/images/masks/lecter.jpg", 
      "price": 3990
    },
    {
      "id": 4, 
      "name": "HULK maszk", 
      "description": "Habár zöld, ezzel az arcodon, garantáltan nem tűnsz majd éretlennek.", 
      "image":"/assets/images/masks/hulk.jpg", 
      "price": 3990
    }               
  ];


  constructor() { }
}
