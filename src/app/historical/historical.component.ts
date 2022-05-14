import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from "@angular/forms";
import { ApixuService } from "../apixu.service";
@Component({
  selector: 'app-historical',
  templateUrl: './historical.component.html',
  styleUrls: ['./historical.component.css']
})
export class HistoricalComponent implements OnInit {
 public weatherSearchForm!: FormGroup;
 public weatherData: any;
  

  constructor(
    private formBuilder: FormBuilder,
    private apixuService: ApixuService
  ) { }

  ngOnInit(): void {
    this.weatherSearchForm = this.formBuilder.group({
      location: ['']
    });
  }

  sendToAPIXU(formValues:any) {
    this.apixuService.getHistory(formValues.location).subscribe(data => {
      this.weatherData = data;
      console.log(this.weatherData);
    });
    
  }


}
