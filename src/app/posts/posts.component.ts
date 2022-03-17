import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {
postName='';
postNameinit='Displaying the content with one way binding'
postCreation="No Post Created yet"
allowCreation=true;

val="Njoud";
people: any[] = [
  {
    "name": "Sara"
  },
  {
    "name": "Odai"
  },
  {
    "name": "Murad"
  }
];

  onUpdatePostName(event:any){
this.postName=(<HTMLInputElement>event.target).value;

  }
  onCreatePost(){

    this.allowCreation=this.allowCreation ? false : true ;
    this.postCreation='Post created successful'+'  '+this.postName
  }
  onCreatePostone(){
    alert ('Post created successful'+'   '+this.postName);
  }
  constructor() { }

  ngOnInit(): void {
  }

}
