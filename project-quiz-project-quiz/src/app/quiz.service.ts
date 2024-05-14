import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class QuizService {
  selectedCategory: string = '';

  private questionsByCategoryAndLevel: { [key: string]: { [key: number]: any[] } } = {
    'Mathematics': {
      1: [
        {
          question: 'What is 2 + 2?',
          options: ['3', '4', '5'],
          correctAnswer: '4'
        },
        // Add more questions for level 1
      ],
      // Add more levels for Mathematics
    },
    // Add more categories
  };

  constructor() {}

  getQuestionsByCategoryAndLevel(category: string, level: number): any[] {
    return this.questionsByCategoryAndLevel[category]?.[level] || [];
  }
}
