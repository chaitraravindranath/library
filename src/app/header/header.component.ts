import { Component, OnInit } from '@angular/core';
import { LibraryService } from '../providers/library.service'; 

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private ls: LibraryService) { }

  ngOnInit() {
  }

}
