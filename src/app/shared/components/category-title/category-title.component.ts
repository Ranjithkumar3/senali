import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-category-title',
  templateUrl: './category-title.component.html',
  styleUrls: ['./category-title.component.scss']
})
export class CategoryTitleComponent {
  @Input() title!: string;
  @Input() tagline!: string;
}
