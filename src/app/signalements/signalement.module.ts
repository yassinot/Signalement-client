import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SignalementListComponent } from './signalement-list/signalement-list.component';
import { SignalemenhRoutingModule } from './Signalement.routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [SignalementListComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    SignalemenhRoutingModule
  ]
})
export class SignalementModule { }
