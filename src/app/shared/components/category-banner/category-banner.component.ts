import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-category-banner',
  templateUrl: './category-banner.component.html',
  styleUrls: ['./category-banner.component.scss']
})
export class CategoryBannerComponent {
  @Input() imgSrc!: string;
}
