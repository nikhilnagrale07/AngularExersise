import { Component } from '@angular/core';

@Component({
  selector: 'app-for-loop',
  templateUrl: './for-loop.component.html',
  styleUrls: ['./for-loop.component.css']
})
export class ForLoopComponent {
  bdays: BDay[] =[  
    {name:'rahul jam',bDate:'July 14, 1990'},  
    {name:'subodh kam',bDate:'April 18, 1999'},  
    {name:'sunil wiz',bDate:'March 25, 1991'},  
]
}
class BDay {  
  name : string;  
  bDate : string;  
  constructor(name:string,bDate:string)
  {
    this.name=name;
    this.bDate=bDate;

  }
}
