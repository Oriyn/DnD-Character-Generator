import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-adnd2nd-ed',
  templateUrl: './adnd2nd-ed.component.html',
  styleUrls: ['./adnd2nd-ed.component.css']
})
export class ADND2ndEdComponent implements OnInit {

  strength :number = 0
  dexeterity :number = 0
  constitution :number = 0
  intellegence :number = 0
  wisdom :number = 0
  charisma :number = 0
  clicks :number =0

  constructor() { }

  dwarfAdj(){
    if(this.clicks <= 0 )
    {
    this.constitution  += 1
    this.charisma -= 1
    this.clicks += 1
    }
    else{ return }
  }
  elfAdj(){
    if(this.clicks <= 0)
    {
    this.dexeterity  += 1
    this.constitution -= 1
    this.clicks += 1
    }
    else{ return }
  }
  gnomeAdj(){
    if(this.clicks <= 0)
    {
    this.intellegence  += 1
    this.wisdom -= 1
    this.clicks += 1
    }
    else{ return }
  }
  halfAdj(){
    if(this.clicks <=0)
    {
    this.dexeterity  += 1
    this.strength -= 1
    this.clicks += 1
    }
    else{ return }
  }
  
  ngOnInit() {
    this.strength = Math.floor(Math.random() * 18) + 3
    this.dexeterity = Math.floor(Math.random() * 18) + 3
    this.constitution = Math.floor(Math.random() * 18) + 3
    this.intellegence = Math.floor(Math.random() * 18) + 3
    this.wisdom = Math.floor(Math.random() * 18) + 3
    this.charisma = Math.floor(Math.random() * 18) + 3
  }

}
