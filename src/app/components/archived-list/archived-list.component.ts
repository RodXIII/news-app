import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DocumentsService } from 'src/app/services/documents.service';

@Component({
  selector: 'app-archived-list',
  templateUrl: './archived-list.component.html',
  styleUrls: ['./archived-list.component.scss'],
})
export class ArchivedListComponent implements OnInit {
  public documents: any = [{}];

  constructor(
    private _documentsService: DocumentsService,
    private _router: Router
  ) {}

  ngOnInit(): void {
    this._documentsService.getDocuments().subscribe((documents) => {
      this.documents = documents;
      
      this.documents.sort((a: any,b: any)=>new Date(b.archiveDate).getTime()-new Date(a.archiveDate).getTime());
    });
  }
  deleteDocument(id: String) {
    this._documentsService.deleteDocument(id).subscribe(() => {
      this.ngOnInit();
    });
  }
}
