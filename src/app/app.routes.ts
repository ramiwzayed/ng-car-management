import { HttpClientModule } from '@angular/common/http';
import { Component, NgModule } from '@angular/core';
import { FormsModule, NgModel } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { Routes } from '@angular/router';
// import { AddCar } from '@angular/router';
// import { GetCar } from '@angular/router';
// import { ListCar } from '@angular/router';
import { CarTypesComponent } from './car-types/car-types.component';

//  const appRoutes: Routes = [
//     {path: 'Add' ,component: AddCar},
//     {path: 'Get' ,component: GetCar},
//     {path: 'List' ,component: ListCar},
//  ];

//  @NgModule({
//     // declarations:[
//     //     AddCar,
//     //     GetCar,
//     // //     ListCar
//     // ],
//     imports:[
//         BrowserModule,
//         FormsModule,
//         HttpClientModule
//     ],
//     providers:[CarTypesComponent]
//  })