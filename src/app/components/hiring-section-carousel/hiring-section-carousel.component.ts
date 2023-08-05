import {
  Component,
  Input,
  OnInit,
  ElementRef,
  QueryList,
  ViewChild,
  ViewChildren,
} from '@angular/core';

@Component({
  selector: 'app-hiring-section-carousel',
  templateUrl: './hiring-section-carousel.component.html',
  styleUrls: ['./hiring-section-carousel.component.css'],
})
export class HiringSectionCarouselComponent {
  @Input() cardImgeData: any;
  @ViewChildren('scrollGrid')
  @ViewChild('scrollContainer')
  scrollingGrids!: QueryList<ElementRef>;
  scrollingContainer!: ElementRef;
  groupedFeatures: any = [];
  noOfCardInRow: any = 2;
  ShowArrows: boolean = true;
  totalGrids: any;
  currentGrid: number = 0;

  showCard: boolean = true;

  constructor() {}

  ngOnInit(): void {
    this.groupCards(this.cardImgeData);
  }

  ArrayGroupsOfN(arrayToGroup: any, n: any) {
    var groupsOfN = (total: any, item: any, index: any, array: any) => {
      if (index % n === 0) {
        total.push(array.slice(index, index + n));
      }
      return total;
    };
    return (arrayToGroup || []).reduce(groupsOfN, []);
  }

  groupCards(carImg: any) {
    if (carImg.length > 0) {
      this.groupedFeatures = this.ArrayGroupsOfN(carImg, this.noOfCardInRow);
    }

    this.ShowArrows = this.groupedFeatures.length > this.noOfCardInRow - 1;
    this.totalGrids = this.groupedFeatures.length;
    this.currentGrid = 0;
    if (this.scrollingContainer?.nativeElement) {
      this.scrollingContainer.nativeElement.scrollLeft = 0;
    }
  }

  scrollLeft() {
    if (this.scrollingGrids) {
      let refArray = this.scrollingGrids.toArray();
      this.currentGrid = this.currentGrid - 1;
      if (refArray[this.currentGrid]?.nativeElement) {
        refArray[this.currentGrid].nativeElement.scrollIntoView({
          behavior: 'smooth',
          block: 'nearest',
          inline: 'start',
        });
      }
    }
  }

  scrollRight() {
    if (this.scrollingGrids) {
      let refArray = this.scrollingGrids.toArray();
      this.currentGrid = this.currentGrid + 1;
      if (refArray[this.currentGrid]?.nativeElement) {
        refArray[this.currentGrid].nativeElement.scrollIntoView({
          behavior: 'smooth',
          block: 'nearest',
          inline: 'start',
        });
      }
    }
  }

  onScroll(e: any) {
    if (this.scrollingContainer?.nativeElement) {
      this.currentGrid = Math.floor(
        this.scrollingContainer.nativeElement.scrollLeft /
          this.scrollingContainer.nativeElement.clientWidth
      );
    }
  }
}
