import 'zone.js/dist/zone';
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { bootstrapApplication } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { JurosSimplesComponent } from './juros-simples/juros-simples.component';

@Component({
  selector: 'my-app',
  standalone: true,
  imports: [CommonModule, FormsModule, JurosSimplesComponent],
  templateUrl: `./main.html`,
})
export class App {
  
}

bootstrapApplication(App);
