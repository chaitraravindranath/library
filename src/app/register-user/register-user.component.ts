import { Component, OnInit } from '@angular/core';
import { FormGroup,  FormBuilder,  Validators } from '@angular/forms';
import { LibraryService } from '../providers/library.service'; 
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-register-user',
  templateUrl: './register-user.component.html',
  styleUrls: ['./register-user.component.css']
})
export class RegisterUserComponent implements OnInit {

  registerForm: FormGroup;  
  constructor(private fb: FormBuilder, private ls: LibraryService, private route: ActivatedRoute, private router: Router) {  
    this.createForm();  
  }

  createForm() {  
    this.registerForm = this.fb.group({  
      UserName: ['', Validators.required],
      Password: ['', Validators.required],
      Role:['', Validators.required],
      FullName: ['', Validators.required],
      UserMobile: ['', Validators.required],
      UserEmail:['', Validators.required],
    });  
  }  
  
  ngOnInit() { }

  registerUser(UserName, Password, Role, FullName, UserMobile, UserEmail) { 
    this.route.params.subscribe(params => {
      this.ls.registerUser(UserName, Password, Role, FullName, UserMobile, UserEmail); 
      this.router.navigate(['']);
    });
  }  
}

