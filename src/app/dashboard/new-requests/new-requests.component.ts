import { Component, OnInit } from '@angular/core';
import Books from '../../Library';
import { LibraryService } from '../../providers/library.service';

@Component({
  selector: 'app-new-requests',
  templateUrl: './new-requests.component.html',
  styleUrls: ['./new-requests.component.css']
})

export class NewRequestsComponent implements OnInit {

  books: Books[];

  constructor(private ls: LibraryService) {

  }

  ngOnInit() {
    this.fetchData();
  }

  fetchData() {
    this.ls.getAllNewRequests().subscribe((data: Books[]) => {
      this.books = data;
    });
  }
}

