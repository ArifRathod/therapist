import { Component, OnInit } from '@angular/core';
import { httpservice } from 'src/app/_services/apicall.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor( private httpservice: httpservice,
    private router: Router) { }

  ngOnInit(): void {

  }

  stateClick(e){
    console.log(e.target.text)
    let val = e.target.text.split(',')[1].trim();
    console.log(val)
    this.router.navigate(['./list'],{queryParams:{state:val}});

  }
}
