import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DocumentsService } from 'src/app/services/documents.service';
import { Document } from '../../models/document';

@Component({
  selector: 'app-news-list',
  templateUrl: './news-list.component.html',
  styleUrls: ['./news-list.component.scss'],
})
export class NewsListComponent implements OnInit {
  public documents: any = [{}];

  constructor(
    private _documentsService: DocumentsService,
    private _router: Router
  ) {}

  ngOnInit(): void {
    this._documentsService.getDocuments().subscribe((documents) => {
      this.documents = documents;
    });
  }

  archiveDocument(document: Document) {
    const today = new Date();
    document.archiveDate =
      today.getFullYear() +
      '-' +
      (today.getMonth() + 1) +
      '-' +
      today.getDate() +
      ' ' +
      today.getHours() +
      ':' +
      today.getMinutes() +
      ':' +
      today.getSeconds();
    this._documentsService.archiveDocument(document).subscribe(() => {
      this.ngOnInit();
    });
  }
}
