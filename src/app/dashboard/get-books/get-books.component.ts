import { Component, OnInit } from '@angular/core';
import Books from '../../Library';
import { LibraryService } from '../../providers/library.service'; 

@Component({
  selector: 'app-get-books',
  templateUrl: './get-books.component.html',
  styleUrls: ['./get-books.component.css']
})
export class GetBooksComponent implements OnInit {

  books: Books[]; 

  constructor(private ls: LibraryService) {
   
  }  

  ngOnInit() {  
      this.fetchData();
  }

  fetchData(){
    this.ls.getAllBooks().subscribe((data: Books[]) => {  
      this.books = data;  
  }); 
  }

  deleteBook(id) { 
    this.ls.deleteBook(id).subscribe(res => { 
      alert("Book deleted successfully!"); 
      this.fetchData(); 
    });  
}

}
