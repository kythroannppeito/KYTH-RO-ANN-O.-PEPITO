import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-tech-level',
  templateUrl: './tech-level.page.html',
  styleUrls: ['./tech-level.page.scss'],
})
export class TechLevelPage {
  constructor(private navCtrl: NavController, private router: Router) {}

  startQuiz() {
    this.router.navigate(['']);
  }
  startQuiz2() {
    this.router.navigate(['']);
  }
  startQuiz3() {
    this.router.navigate(['']);
  }
}


