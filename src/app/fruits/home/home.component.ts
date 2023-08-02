import { FruitsService } from './../fruits.service';
import { Component } from '@angular/core';
import { Fruits } from '../fruits';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  //need an array of fruit objects
  allFruits: Fruits[]=[];

  constructor(private fruitService: FruitsService){ }

  //subscribe is an asynchronous callback function, to take the data and populate into allFruits
  ngOnInit() : void{
    this.fruitService.getAll('fruits').subscribe((data) => {
      this.allFruits = data;
    });
  }

  delete(id:number){
    this.fruitService.delete('fruits',id).subscribe((data)=>{
      this.allFruits=this.allFruits.filter(o =>o.id != id);
    })
  }


}
