import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/observable';

@Injectable({
  providedIn: 'root'
})

export class LibraryService {

  constructor(private httpClient: HttpClient) { }

  validateUser(user: any) {
    return this.httpClient.get<any[]>('http://localhost:3000/users?UserName=' + user.UserName + '&password=' + user.passwd);
  }

  getUserInfo(UserName: string): Observable<any[]> {
    return this.httpClient.get<any[]>('http://localhost:3000/users?UserName=' + UserName);
  }

  registerUser(UserName, Password, Role, FullName, UserMobile, UserEmail) {
    const obj = {
      UserName,
      Password,
      Role,
      FullName,
      UserMobile,
      UserEmail
    };
    this.httpClient.post("http://localhost:3000/users/", obj).subscribe(res =>
      alert("User Registration Successful!"));
  }

  getAllBooks() {
    return this.httpClient.get("http://localhost:3000/books");
  }

  addBook(BookID, BookName, BookAuthor, BookCost) {
    const obj = {
      BookID,
      BookName,
      BookAuthor,
      BookCost
    };
    console.log(obj);
    this.httpClient.post("http://localhost:3000/books/", obj).subscribe(res =>
      alert("Book Added Successfully!"));
  }

  deleteBook(id: any) {
    return this.httpClient.delete("http://localhost:3000/books/" + id);
  }

  getAllNewRequests() {
    return this.httpClient.get("http://localhost:3000/newrequests");
  }

  getNewRequestById(id) {
    return this.httpClient.get("http://localhost:3000/newrequests" + id);
  }

  // approveBookRequest(book: Book) {
  //   book.issued = true;
  //   this.httpClient.put("http://localhost:3000/books/" + id, obj).subscribe(res => {
  //     console.log("---res---", +JSON.stringify(res));
  //   });
  // }

  // rejectBookRequest(BookID, BookName, BookAuthor, BookCost, issued) {
  //   const obj = {
  //     BookID,
  //     BookName,
  //     BookAuthor,
  //     BookCost,
  //     issued
  //   };
  //   this.httpClient.put("http://localhost:3000/books/" + id, obj).subscribe(res => {
  //     console.log("---res---", +JSON.stringify(res));
  //   });
  // }

  createBookRequest() {
    const obj = {

    };
    console.log(obj);
    this.httpClient.post("http://localhost:3000/books/", obj).subscribe(res =>
      console.log(res));
  }

  // updateBookRequest(BookID,BookName,BookAuthor,BookCost){
  //   const obj = {
  //     BookID,
  //     BookName,
  //     BookAuthor,
  //     BookCost
  //   };
  //   console.log(obj);
  //   this.httpClient.put("http://localhost:3000/books/"+id, obj).subscribe(res =>
  //     console.log(res));
  // }

  deleteBookRequest(id: any) {
    return this.httpClient.delete("http://localhost:3000/newrequests/" + id);
  }
}

