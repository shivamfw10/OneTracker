import { Component, OnInit } from '@angular/core';

import { Router } from '@angular/router';
import { Ticket } from 'src/app/shared/ticket.model';
import { TicketsService } from 'src/app/shared/service/tickets.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  data:Ticket[]=[];
  constructor(private ticketService:TicketsService){}
  ngOnInit(): void {
    this.ticketService.getTickets().subscribe(response=>{
      this.data=response;
      console.log(this.data);
      console.log(this.data.length)
    },err=>{
      console.log(err);
    })
  }
  public countOpenTicket(data:any){
    let count:number=0;
    for(let i=0;i<data.length;i++){
      if(data[i].status=='open'){
        count++;
      }
    }
    return count;
  }
  
  public countCrossFour(data:any){
    let count:number =0;
    for(let i=0;i<data.length;i++){
      let time = this.timetoNumber(data[i].ticketage)
      if(time>4){
        count++;
      }
    }
    return count;
  }

  public countCloseFour(data:any){
    let count:number=0;
    for(let i=0;i<data.length;i++){
      let time = this.timetoNumber(data[i].ticketage)
      if(time<4 && data[i].status==='close'){
        count++;
      }
    }
    return count;
    
  }
  public timetoNumber(data:any){
    data = data.split(":");
    return Number(data[0]);
  }
}
