import { Component } from '@angular/core';
import { CafeFinderComponent } from './components/cafe-finder/cafe-finder';

@Component({
  selector: 'app-root',
  imports: [CafeFinderComponent],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {}
