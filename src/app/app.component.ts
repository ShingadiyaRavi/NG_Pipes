import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Pipes';

  content="lorem"

  studentData=[
    {id:1,name:'Shingadiya Ravi',age:20},
    {id:2,name:'John Cena',age:22},
    {id:3,name:'Nikki Bella',age:10},
    {id:4,name:'The Rock',age:25}
  ]
}
