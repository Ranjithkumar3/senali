import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CategoryTitleComponent } from './components/category-title/category-title.component';
import { CategoryBannerComponent } from './components/category-banner/category-banner.component';
import { SubCategoryTileComponent } from './components/sub-category-tile/sub-category-tile.component';



@NgModule({
  declarations: [
    CategoryTitleComponent,
    CategoryBannerComponent,
    SubCategoryTileComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    CategoryTitleComponent,
    CategoryBannerComponent,
    SubCategoryTileComponent
  ]
})
export class SharedModule { }
