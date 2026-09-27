import { Component, inject } from '@angular/core';
import { ToasterService } from '../../../services/toaster.service';

@Component({
  imports: [],
  selector: 'app-toaster',
  styleUrl: './toaster.css',
  templateUrl: './toaster.html',
})
export class Toaster {
  readonly toaster = inject(ToasterService);
}
