import { Component, OnInit } from '@angular/core';
import { CentreService } from '../services/centre.service';
import { CentreModel } from '../Models/centre-model.Model';

@Component({
  selector: 'app-centre',
  templateUrl: './centre.component.html',
  styleUrls: ['./centre.component.css']
})
export class CentreComponent implements OnInit {
  centres:CentreModel =new CentreModel(0,'','','','','','');
  constructor(private centreService:CentreService) { }

  ngOnInit(): void {
    console.log(this.centres);
  }

  enregistre(){
    this.centreService.getAllCentre().subscribe((data:any)=>{
      this.centres=data;
    })
  }

}
