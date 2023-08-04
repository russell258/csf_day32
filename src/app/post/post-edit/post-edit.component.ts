import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Post } from 'src/app/posts/post';
import { PostService } from 'src/app/posts/post.service';

@Component({
  selector: 'app-post-edit',
  templateUrl: './post-edit.component.html',
  styleUrls: ['./post-edit.component.css']
})
export class PostEditComponent {

  postObject: Post = {
    id:0,
    title:'',
    body:''
  }

  constructor(private postService: PostService, private router: Router, private route: ActivatedRoute){}

  // once u click edit for the specific row, extract the id and getById
  ngOnInit() : void{
    this.route.paramMap.subscribe((param) => {
      var id = Number(param.get('id'));

      this.getPostById(id);
    })
  }

getPostById(id:number){
  this.postService.getById(id).subscribe((data)=> {
    this.postObject = data;
  })
}

update(){
return this.postService.update(this.postObject.id, this.postObject).subscribe({
  next:()=> {
    this.router.navigate(['posts/home'])
  },error:(err)=>{
    console.log(err)
  }
});
}

}
