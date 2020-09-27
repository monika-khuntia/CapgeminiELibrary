import { HttpClient } from '@angular/common/http';
import { Component, Inject } from '@angular/core';

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.css']
})
export class BookComponent {
  public books: Book[];

  constructor(http: HttpClient, @Inject('BASE_URL') baseUrl: string) { 
    http.get<Book[]>(baseUrl + 'api/books').subscribe(result => {
      this.books = result;
    }, error => console.error(error));
  }
}
interface Book {
  id: number;
  bookName: string;
}