import { Component } from '@angular/core';
import { Book } from '../book';
import { ActivatedRoute, Router } from '@angular/router';
import { BookService } from '../book-service.service';

@Component({
  selector: 'app-book-form',
  templateUrl: './book-form.component.html',
  styleUrls: ['./book-form.component.css']
})
export class BookFormComponent {

  book: Book;
  message:any;

  constructor(
    private route: ActivatedRoute, 
      private router: Router, 
        private bookService: BookService) {
    this.book = new Book();
  }

  onSubmit() {
    this.bookService.save(this.book).subscribe(result => this.message=result);
  }

  gotoUserList() {
    this.router.navigate(['/users']);
  }
}
