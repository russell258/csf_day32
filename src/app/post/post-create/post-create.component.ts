import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { PostService } from 'src/app/posts/post.service';

@Component({
  selector: 'app-post-create',
  templateUrl: './post-create.component.html',
  styleUrls: ['./post-create.component.css']
})
export class PostCreateComponent {

  postForm: FormGroup; //***step 1

  // ***step 2: FormBuilder
  constructor(private postService: PostService, private router: Router, private fb: FormBuilder){}

  ngOnInit(): void{
    this.initializeForm();
  }

  // *** step 3: initialize FormGroup object using Form Builder
  initializeForm(){
    this.postForm=this.fb.group({
      title: new FormControl('',[Validators.required]),
      body: new FormControl('',[Validators.required])
    });
  }

  createPost(){
    console.log('createPost: '+JSON.stringify(this.postForm.value));
    this.postService.create(this.postForm.value).subscribe((response:any) => {
      this.router.navigateByUrl('/posts/home');
    })
  }

}
