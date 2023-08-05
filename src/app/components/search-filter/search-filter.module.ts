import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SearchFilterComponent } from './search-filter.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [SearchFilterComponent],
  imports: [CommonModule, ReactiveFormsModule],
  exports: [SearchFilterComponent],
})
export class SearchFilterModule {}
