import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, NgForm, Validators } from '@angular/forms';

import { Router } from '@angular/router';
import { TicketsService } from 'src/app/shared/service/tickets.service';

@Component({
  selector: 'app-add-ticket',
  templateUrl: './add-ticket.component.html',
  styleUrls: ['./add-ticket.component.css']
})
export class AddTicketComponent implements OnInit {
  ticketForm:FormGroup;
  constructor(private ticketService:TicketsService, private formBuilder:FormBuilder, private router:Router) { }

  ngOnInit(): void {
    this.ticketForm=this.formBuilder.group({
      ticketid:['',Validators.required],
      department:['',Validators.required],
      category:['',Validators.required],
      subCategory:['',Validators.required],
      customer:['',Validators.required],
      issueTime:['',Validators.required],
      subject:['',Validators.required],
      issueDescription:['',Validators.required],
      emailId:['',Validators.required],
      escEmail:['',Validators.required],
      teamLink:['',Validators.required],
      status:['open'],
      lastModifiedDate:[''],
      ticketage:['']  
    })
  }

  OnFormSubmit(form: NgForm)
  {
    // this.isDataLoading=true;
     this.ticketService.addTicket(form).subscribe(response=>{
      const id=response['ticketid'];
      this.router.navigate(['/landingpage']);   
     },error=>{
      console.log(error);
     })
  }


}
