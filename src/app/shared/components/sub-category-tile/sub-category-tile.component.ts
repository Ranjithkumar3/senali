import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-sub-category-tile',
  templateUrl: './sub-category-tile.component.html',
  styleUrls: ['./sub-category-tile.component.scss']
})
export class SubCategoryTileComponent {
  @Input() tiles: any;
}
