import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html'
})
export class NavBarComponent implements OnInit {

  constructor() { 

  }

  ngOnInit(): void {
    
  }

  cameraClick() {
    alert("Camera Clicked!");
  }
}
