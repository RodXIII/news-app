import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { NewsListComponent } from './components/news-list/news-list.component';
import { CreateDocumentComponent } from './components/create-document/create-document.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { ArchivedListComponent } from './components/archived-list/archived-list.component';

const routes: Routes = [
  {
    path: 'news',
    component: NewsListComponent,
  },
  {
    path: 'create',
    component: CreateDocumentComponent,
  },
  {
    path: 'archive',
    component: ArchivedListComponent,
  },
  {
    path: '',
    redirectTo: 'news',
    pathMatch: 'full',
  },
  {
    path: '**',
    component: PageNotFoundComponent,
  },
];

@NgModule({
  declarations: [
    AppComponent,
    NewsListComponent,
    CreateDocumentComponent,
    PageNotFoundComponent,
    ArchivedListComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot(routes),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
