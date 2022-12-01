import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Enquiry } from './Enquiry';

@Component({
  selector: 'app-landing-page-component-first',
  templateUrl: './landing-page-component-first.component.html',
  styleUrls: ['./landing-page-component-first.component.scss'],
})
export class LandingPageComponentFirstComponent implements OnInit {
  searchUniversity: String = '';
  options: string[] = [];
  emailId: String = '';

  constructor(private http: HttpClient) {}

  enquiryForm(e: Enquiry): any {
    console.log(e);
    //Enter your logic to post the data to a database
  }

  ngOnInit() {
    this.resolveUniversityNames().subscribe((university: any[]) => {
      university.forEach((uni) => {
        this.options.push(uni.name);
      });
    });
  }

  resolveUniversityNames(): Observable<any> {
    return this.http.get(
      'http://universities.hipolabs.com/search?country=turkey'
    );
  }
}
