import { Component } from '@angular/core';
import { Fruits } from '../fruits';
import { Router } from '@angular/router';
import { FruitsService } from '../fruits.service';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent {
  fruitObject: Fruits = {
    id:0,
    name:'',
    quantity:0,
    price:0
  }

  constructor (private fruitService: FruitsService, private router: Router){ }

  create(){
    this.fruitService.create('fruits', this.fruitObject).subscribe({
      next: (data) => {
        this.router.navigate(["/fruits/home"])
      }, error:(err) => {
        console.log(err)
      }
    })
  }

}
