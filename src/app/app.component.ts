import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  cardImgeData: any = [];
  footerData: any = [];

  constructor() {
    this.footerData = [
      {
        heading: 'Jobseekers',
        subHeading: [
          'Register & Upload CV',
          'Browse Jobs by location',
          'Newest Jobs',
          'Blog',
          'Help',
        ],
      },
      {
        heading: 'Recruiters',
        subHeading: [
          'Advertise',
          'Login',
          'Associations',
          'Recruiteng? <span>Call us on 01772639605</span>',
        ],
      },
      {
        heading: 'Stay in touch',
        subHeading: [
          'Contact Details',
          'Sitemap',
          'GDPR',
          'Privacy Policy',
          `Terms & Conditions`,
        ],
      },
    ];

    this.cardImgeData = [
      'https://cdn.testbook.com/resources/productionimages/Varinder%20Grover_All_1658412204.png',
      'https://cdn.testbook.com/resources/productionimages/Varinder%20Grover_All_1658412204.png',
      'https://cdn.testbook.com/resources/productionimages/Varinder%20Grover_All_1658412204.png',
      'https://cdn.testbook.com/resources/productionimages/Varinder%20Grover_All_1658412204.png',
      'https://cdn.testbook.com/resources/productionimages/Varinder%20Grover_All_1658412204.png',
    ];
  }

  title = 'test-practice';
}
