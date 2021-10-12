import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Document } from '../models/document';

@Injectable({
  providedIn: 'root',
})
export class DocumentsService {
  private baseUrl: string = 'http://localhost:3000/news';

  constructor(private _httpClient: HttpClient) {}

  getDocuments() {
    return this._httpClient.get(this.baseUrl);
  }

  saveDocument(document: Document) {
    return this._httpClient.post(this.baseUrl, document);
  }

  deleteDocument(id: String) {
    return this._httpClient.delete(`${this.baseUrl}/${id}`);
  }

  archiveDocument(document: Document) {
    
    return this._httpClient.put(`${this.baseUrl}/${document._id}`,{archiveDate: document.archiveDate});
  }
}
