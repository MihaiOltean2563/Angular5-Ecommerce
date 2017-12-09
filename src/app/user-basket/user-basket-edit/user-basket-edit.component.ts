import { Component, OnInit } from '@angular/core';
import { UserBasketService } from 'app/user-basket/user-basket.service';

@Component({
  selector: 'app-user-basket-edit',
  templateUrl: './user-basket-edit.component.html',
  styleUrls: ['./user-basket-edit.component.css']
})
export class UserBasketEditComponent implements OnInit {

  constructor(private userBasketService: UserBasketService) { }

  ngOnInit() {
  }

  onDeleteItem(){
    
  }

}
