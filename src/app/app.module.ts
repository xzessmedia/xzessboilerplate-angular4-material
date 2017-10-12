/*
 * @Author: Tim Koepsel 
 * @Date: 2017-07-08 00:19:55 
 * @Last Modified by: Tim Koepsel
 * @Last Modified time: 2017-07-08 00:24:16
 */
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MaterialModule } from '@angular/material';
import { Routes,RouterModule } from '@angular/router';

import 'hammerjs';

import { AppComponent } from './app.component';

// Custom Components
import { TestComponent } from './components/testcomponent/test.component';
import { Page1Component } from './page1/page1.component';
import { ChatComponent } from './chat/chat.component';

// Routes
export const ROUTES: Routes = [
  { path: 'page1', component: Page1Component }
];

@NgModule({
  declarations: [
    AppComponent,
    TestComponent,
    Page1Component,
    ChatComponent
  ],
  imports: [
    MaterialModule,
    RouterModule.forRoot(ROUTES),
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
