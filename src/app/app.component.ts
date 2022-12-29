
import { FormBuilder } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators} from '@angular/forms';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
emailFormControl: any;

constructor(private formBuilder:FormBuilder){}

Registation =this.formBuilder.group({
  
  fname:['',Validators.required,Validators.pattern(/\s/)],
  lname:['',Validators.required,Validators.pattern(/\s/)],
  email:['',Validators.required, Validators.email],
  number:['',Validators.required,Validators],
  address:['',Validators.required,Validators.maxLength(100)],
  gender:['',Validators.required,],

})
saveForm(){
  console.log('From dat is ',this.Registation.value)
  
}

  title = 'test';
}


