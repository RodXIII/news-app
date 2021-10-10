import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-news-list',
  templateUrl: './news-list.component.html',
  styleUrls: ['./news-list.component.scss'],
})
export class NewsListComponent implements OnInit {
  public documents: any = [
    {
      title: "title 1",
      description: "description 1",
      date: "date 1",
      content: "content 1",
      author: "author 1",
      archiveDate: "archiveDate 1",
    },
    {
      title: "title 2",
      description: "description 2",
      date: "date 2",
      content: "content 2",
      author: "author 2",
      archiveDate: "archiveDate 2",
    },
    {
      title: "title 3",
      description: "description 3",
      date: "date 3",
      content: "content 3",
      author: "author 3",
      archiveDate: "archiveDate 3",
    },
  ];

  constructor() {}

  ngOnInit(): void {}
}
