import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { PostService } from 'src/app/posts/post.service';

@Component({
  selector: 'app-post-create',
  templateUrl: './post-create.component.html',
  styleUrls: ['./post-create.component.css']
})
export class PostCreateComponent {

  postForm: FormGroup;

  constructor(private postService: PostService, private router: Router, private fb: FormBuilder){}

  ngOnInit(): void{
    this.initializeForm();
  }

  initializeForm(){
    this.postForm=this.fb.group({
      title: new FormControl(''),
      body: new FormControl('')
    });
  }

  createPost(){
    console.log('createPost: '+this.postForm);
  }

}
