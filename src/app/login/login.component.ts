import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LibraryService } from '../providers/library.service'; 

@Component({
   selector: 'app-login',
   templateUrl: './login.component.html',
   styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

   formdata;
   constructor(private router: Router, private ls: LibraryService) { }

   ngOnInit() {
      this.formdata = new FormGroup({
         UserName: new FormControl("", Validators.compose([
            Validators.required,
            Validators.minLength(5)
         ])),
         passwd: new FormControl("", Validators.required)
      });
   }

   onClickSubmit(data) {
      this.ls.validateUser(data).subscribe(logindata => {
         if (logindata.length > 0) {
            this.ls.getUserInfo(logindata[0].UserName).subscribe(data => {
               console.log(data[0]['Role']);
               if (data[0]['Role'] == "Admin") {
                  this.router.navigate(['/dashboard/newRequests']);
               }
               else if (data[0]['Role'] == "Member") {
                  this.router.navigate(['/dashboard/getAllBooks']);
               }
            })
         }
         else {
            alert("Invalid Login");
            return false;
         }
      });
   }
}


