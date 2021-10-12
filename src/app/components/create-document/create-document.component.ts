import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DocumentsService } from 'src/app/services/documents.service';
import { Document } from '../../models/document';

@Component({
  selector: 'app-create-document',
  templateUrl: './create-document.component.html',
  styleUrls: ['./create-document.component.scss'],
})
export class CreateDocumentComponent implements OnInit {
  public document = new Document();

  constructor(
    private _documentService: DocumentsService,
    private _router: Router
  ) {}

  ngOnInit(): void {}

  saveDocument() {
    console.log('document ->', this.document);
    this._documentService.saveDocument(this.document).subscribe((document) => {
      if(document) {
        this._router.navigateByUrl('/');
      }
    });
  }
   back() {
    this._router.navigateByUrl('/');
   }
}
