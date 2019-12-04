import { Component, OnInit } from '@angular/core';
import { FormGroup,  FormBuilder,  Validators } from '@angular/forms';
import { LibraryService } from '../../providers/library.service'; 
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-add-books',
  templateUrl: './add-books.component.html',
  styleUrls: ['./add-books.component.css']
})
export class AddBooksComponent implements OnInit {

  angForm: FormGroup;  
  constructor(private fb: FormBuilder, private ls: LibraryService, private route: ActivatedRoute, private router: Router) {  
    this.createForm();  
  }

  createForm() {  
    this.angForm = this.fb.group({  
      BookID: ['', Validators.required ],  
      BookName: ['', Validators.required ],  
      BookAuthor: ['', Validators.required ],  
      BookCost: ['', Validators.required ]   
    });  
  }  
  
  ngOnInit() { }

  addBook(BookID, BookName, BookAuthor,BookCost) {  
    this.route.params.subscribe(params => {
      this.ls.addBook(BookID, BookName, BookAuthor,BookCost); 
      this.router.navigate(['/getAllBooks']);
    });
  }  
}
