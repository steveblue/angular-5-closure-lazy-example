import { NgModule }      from '@angular/core';
import { CommonModule }  from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent }  from './app.component';
import { routing }       from './app.routes';
import { HomeModule } from './shared/components/home/home.module';

@NgModule({

    imports: [ BrowserModule,
               CommonModule,
               HomeModule,
               routing],
    declarations: [ AppComponent ],
    bootstrap:    [ AppComponent ]
})

export class AppModule {}
