import { Component, OnInit } from '@angular/core';
import { Book } from '../book';
import { BookService } from '../book-service.service'; 

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.css']
})
export class BookListComponent implements OnInit {

  books: Book[] = [];

  constructor(private userService: BookService) {
  }

  ngOnInit() {
    this.userService.findAll().subscribe(data => {
      this.books = data;
    });
  }
}
