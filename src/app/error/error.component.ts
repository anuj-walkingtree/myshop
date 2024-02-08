import { Component } from '@angular/core';

@Component({
  selector: 'app-error',
  template: `
    <div class="error-container">
      <h1>404 Not Found</h1>
      <p>The page you are looking for does not exist.</p>
    </div>
  `,
  styles: [`
     h1 {
      color: #f00;
      font-size: 2.5rem;
      margin-bottom: 20px;
    }
    p {
      font-size: 1.2rem;
    }
  `]
})
export class ErrorComponent {}
