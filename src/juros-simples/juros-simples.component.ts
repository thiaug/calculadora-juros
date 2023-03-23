import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-juros-simples',
  standalone: true,
  templateUrl: './juros-simples.component.html',
  styleUrls: ['./juros-simples.component.css'],
  imports: [FormsModule, CommonModule],
})
export class JurosSimplesComponent implements OnInit {
  value: number;
  rate: number;
  months: number;

  constructor() {}

  calcular() {
    return this.value * (1 + this.rate * this.months);
  }

  ngOnInit() {}
}
