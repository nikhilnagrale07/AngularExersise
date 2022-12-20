import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { Test1Component } from './test1/test1.component';
import { Test2Component } from './test2/test2.component';
import { ForLoopComponent } from './for-loop/for-loop.component';
import { ClassExampleComponent } from './class-example/class-example.component';
import { SwitchExampleComponent } from './switch-example/switch-example.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    Test1Component,
    Test2Component,
    ForLoopComponent,
    ClassExampleComponent,
    SwitchExampleComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
