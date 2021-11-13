import { Component, OnInit } from '@angular/core';
import { CentreService } from '../services/centre.service';
import { CentreModel } from '../Models/centre-model.Model';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-centre',
  templateUrl: './centre.component.html',
  styleUrls: ['./centre.component.css']
})
export class CentreComponent implements OnInit {
  centres:CentreModel=new CentreModel(0,'','','','','','');
  form:any;
  dataEmail:any;
  dataTel:any;
  constructor(private centreService:CentreService,private fb:FormBuilder) { }

  ngOnInit(): void {
    this.initForm();
  }
  initForm(){
    this.form=this.fb.group({
      id:[this.centres.id],
      nom:[this.centres.nom,[Validators.required,Validators.minLength(3),Validators.maxLength(20)]],
      adresse:[this.centres.adresse,[Validators.required,Validators.minLength(5),Validators.maxLength(40)]],
      pays:[this.centres.pays,[Validators.required,Validators.minLength(3),Validators.maxLength(20)]],
      ville:[this.centres.ville,[Validators.required,Validators.minLength(3),Validators.maxLength(20)]],
      tel:[this.centres.tel,[Validators.required,Validators.minLength(8),Validators.maxLength(15)]],
      email:[this.centres.email,[Validators.required,Validators.minLength(8),Validators.maxLength(50),Validators.email]],
    });
  }

  Enregistrer(){
    this.centreService.createCentre(this.form.value).subscribe((data:any)=>{
    });
  }
  onblur(){
    this.centreService.verificationUniciteEmail(this.form.value).subscribe((data:any)=>{
      this.dataEmail=data;
      return this.dataEmail;
    });
  }
    onblurTel(){
      this.centreService.verificationUniciteTEl(this.form.value).subscribe((data:any)=>{
        this.dataEmail=data;
        return this.dataTel;
    });
    
  }

}
