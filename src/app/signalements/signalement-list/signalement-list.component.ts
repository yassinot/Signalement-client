import { Component, OnInit } from '@angular/core';
import { AuthService } from "../../services/auth.service";
import {SignalementService  } from "../../services/signalement.service";
import {Signalement  } from "../../model/signalement";
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';
@Component({
  selector: 'app-signalement-list',
  templateUrl: './signalement-list.component.html',
  styleUrls: ['./signalement-list.component.css']
})
export class SignalementListComponent implements OnInit {
  signalements: Signalement[] = [];
  isModalOpen = false;
  selectedItem!: Signalement|null;
  constructor(private authService:AuthService,private signalementService:SignalementService,private modalService: BsModalService) { }
 public modalRef!: BsModalRef;
  ngOnInit(): void {

    
    this.signalementService.getSignalements().subscribe((data) => {
      console.log(data)
      this.signalements = data;
    });
  }
  
 
 
  logOut(){
this.authService.signOut()
  }
 
}
