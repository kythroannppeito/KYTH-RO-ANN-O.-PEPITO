import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-math-quiz3',
  templateUrl: './math-quiz3.page.html',
  styleUrls: ['./math-quiz3.page.scss'],
})
export class MathQuiz3Page {
  currentQuestion: number = 1; // Track the current question number

  constructor(private route: ActivatedRoute, private router: Router) {}

  checkAnswer(selectedOption: string, questionNumber: number) {
    const correctAnswers = ['4', '21', '45'];

    if (selectedOption === correctAnswers[questionNumber - 1]) {
      if (this.currentQuestion < 3) {
        this.currentQuestion++; // Move to the next question
      } else {
        // Navigate to the levels page if all questions are answered correctly
        this.router.navigate(['/levels']);
      }
    } else {
      console.log('Incorrect answer! Try again.');
    }
  }
}
