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
  hitProb: string
  damageAdj: string
  weightAllow: number = 0
  maxPress: number = 0
  openDoors: number = 0
  bendLift: string 

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
    this.strengthRolls()
  }

  strengthRolls(){
    switch(this.strength){
      case this.strength = 3:{
        this.hitProb = "-3"
        this.damageAdj = "-1"
        this.weightAllow = 5
        this.maxPress = 10
        this.openDoors = 2
        this.bendLift = "0%"
        break
      }
      case this.strength = 4 | 5:{
        this.hitProb = "-2"
        this.damageAdj = "-1"
        this.weightAllow = 10
        this.maxPress = 25
        this.openDoors = 3
        this.bendLift = "0%"
        break
      }
      case this.strength = 6 | 7:{
        this.hitProb = "-1"
        this.damageAdj = "+0"
        this.weightAllow = 20
        this.maxPress = 55
        this.openDoors = 4
        this.bendLift = "0%"
        break
      }
      case this.strength = 8 | 9:{
        this.hitProb = "+0"
        this.damageAdj = "+0"
        this.weightAllow = 35
        this.maxPress = 90
        this.openDoors = 5
        this.bendLift = "1%"
        break
      }
      case this.strength = 10 | 11:{
        this.hitProb = "+0"
        this.damageAdj = "+0"
        this.weightAllow = 40
        this.maxPress = 115
        this.openDoors = 6
        this.bendLift = "2%"
        break
      }
      case this.strength = 12 | 13:{
        this.hitProb = "+0"
        this.damageAdj = "+0"
        this.weightAllow = 45
        this.maxPress = 140
        this.openDoors = 7
        this.bendLift = "4%"
        break
      }
      case this.strength = 14 | 15:{
        this.hitProb = "+0"
        this.damageAdj = "+0"
        this.weightAllow = 55
        this.maxPress = 195
        this.openDoors = 8
        this.bendLift = "7%"
        break
      }
      case this.strength = 16:{
        this.hitProb = "+0"
        this.damageAdj = "+1"
        this.weightAllow = 70
        this.maxPress = 195
        this.openDoors = 9
        this.bendLift = "10%"
        break
      }
      case this.strength = 17:{
        this.hitProb = "+1"
        this.damageAdj = "+1"
        this.weightAllow = 85
        this.maxPress = 220
        this.openDoors = 10
        this.bendLift = "13%"
        break
      }
      case this.strength = 18:{
        this.hitProb = "+1"
        this.damageAdj = "+2"
        this.weightAllow = 110
        this.maxPress = 280
        this.openDoors = 12
        this.bendLift = "16%"
        break
      }
    }
  }
}
