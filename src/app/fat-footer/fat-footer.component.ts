import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-fat-footer',
  templateUrl: './fat-footer.component.html',
  styleUrls: ['./fat-footer.component.css']
})
export class FatFooterComponent implements OnInit {
  year: number;
  constructor() {
    let date: Date = new Date();
    this.year = date.getFullYear();
  }

  ngOnInit(): void {
  }

}
