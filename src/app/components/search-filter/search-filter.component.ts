import { Component, OnInit } from '@angular/core';
import {
  AbstractControl,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';

import db from '../../data/db.json';

@Component({
  selector: 'app-search-filter',
  templateUrl: './search-filter.component.html',
  styleUrls: ['./search-filter.component.css'],
})
export class SearchFilterComponent implements OnInit {
  constructor() {}

  searchForm = new FormGroup({
    title: new FormControl('', [
      Validators.required,
      Validators.minLength(2),
      Validators.maxLength(20),
    ]),
    location: new FormControl('', [
      Validators.required,
      Validators.minLength(3),
      Validators.maxLength(20),
    ]),
  });
  submitted = false;
  filterJobs: any = [];
  ngOnInit(): void {}

  get f(): { [key: string]: AbstractControl } {
    return this.searchForm.controls;
  }

  handleSearch() {
    this.submitted = true;
    this.filterJobs = [];

    if (this.searchForm.invalid) {
      return;
    }
    this.getFilterCentersSuggestions(this.searchForm.value);
  }

  getFilterCentersSuggestions(termsString: any) {
    this.filterJobs = db.jobs.filter(
      (job) =>
        job.title.toLowerCase().includes(termsString.title.toLowerCase()) &&
        job.location.toLowerCase().includes(termsString.location.toLowerCase())
    );
  }
}
