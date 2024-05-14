import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { NavController } from '@ionic/angular';


@Component({
  selector: 'app-levels',
  templateUrl: './levels.page.html',
  styleUrls: ['./levels.page.scss'],
})
export class LevelsPage {

  constructor(private navCtrl: NavController, private router: Router) {}

  startQuiz() {
    this.router.navigate(['math-quiz']);
  }
  startQuiz2() {
    this.router.navigate(['math-quiz2']);
  }
  startQuiz3() {
    this.router.navigate(['math-quiz3']);
  }
}
