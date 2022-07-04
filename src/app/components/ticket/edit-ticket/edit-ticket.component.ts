import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { Ticket } from 'src/app/shared/ticket.model';
import { TicketsService } from 'src/app/shared/service/tickets.service';

@Component({
  selector: 'app-edit-ticket',
  templateUrl: './edit-ticket.component.html',
  styleUrls: ['./edit-ticket.component.css']
})
export class EditTicketComponent implements OnInit {
  ticket = new Ticket();
  ticketForm:FormGroup;
  constructor(private ticketService:TicketsService, private router:Router,private formBuilder:FormBuilder, private route:ActivatedRoute) { }

  ngOnInit(): void {
    this.ticketForm=this.formBuilder.group({
      ticketId:['',Validators.required ],
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
      lastModifiedDate:['',Validators.required]
    });
    this.getTicket(this.route.snapshot.params['id']);
  }

  public getTicket(id:any)
  {
    this.ticketService.getTicketById(id).subscribe(response=>{
      this.ticket=response;
      console.log(this.ticket);
    })
    
  }
  
  OnFormSubmit(ticketForm:any){
    this.ticketService.EditTicket(this.route.snapshot.params['id'],this.ticketForm.value).subscribe(response=>{
     const id=response['id'];
     this.router.navigate(['/viewticket']);
    },error=>{
     console.log(error);
    })
  }
}