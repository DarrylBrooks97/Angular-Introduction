import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: '../HTML/portfolio-header.component.html',
  styleUrls: ['../CSS/portfolio-header.component.css'],
})
export class PortfolioHeader {
  avatar = '../../assets/img/me.jpg';
  name = 'Darryl Brooks';
  userName = 'DarrylBrooks97';
  location = 'Tallahassee, FL';
  bio = 'Problem solving skills are valuable';
  email = 'darrylbrooks13@gmail.com';
  business = 'Quicken Loans';
}
