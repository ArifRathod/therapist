import { Component, OnInit } from '@angular/core';
import { httpservice } from 'src/app/_services/apicall.service';
import { Routes, RouterModule, Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {

  therapist :any = [];

  constructor( 
    private route: ActivatedRoute,
    private router: Router,
    private httpservice: httpservice) { }

  ngOnInit(): void {
    console.log(this.route.snapshot.queryParams)
    let stateName = this.route.snapshot.queryParams;
    this.fetchDetailsTherapist(stateName);
  }

  fetchDetailsTherapist(obj){
    this.httpservice.getTherapist(obj)
    .subscribe((res: any) => {
      console.log("res===",res)
      this.therapist = res.data && res.data.length ? res.data : [];
      console.log(this.therapist)
    }, (err) => {
        console.log("Error : ",err);
        this.therapist = [];
    });
  }
}
