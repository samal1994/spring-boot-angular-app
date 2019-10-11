import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { APICallService } from '../service/data/apicall.service';
import { Details } from "../model/details";
import { from } from 'rxjs';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent implements OnInit {
  name = '';
  data :Details;
  pathData :Details;
  apiresponse : String;
  username : string;
  constructor(private route : ActivatedRoute,private dataService : APICallService) { }

  ngOnInit() {
    this.name=this.route.snapshot.params['name']
    this.username=sessionStorage.getItem('authenticateuser');
  }
  getValue(){
    this.dataService.get_products().subscribe(item=>{
       this.data= item},
       error =>{ this.handleErrorResponse(error);
    })
  }
  getPathValue(){
    this.dataService.get_productsWithPathVariable(this.name).subscribe(item=>{
       this.pathData= item},
       error =>{ this.handleErrorResponse(error);
    })
  }


  handleErrorResponse(error){
    //console.log(error);
    this.apiresponse=error.error.message;
  }

}
