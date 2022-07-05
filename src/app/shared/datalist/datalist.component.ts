import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';

import {MatPaginator} from '@angular/material/paginator';
import {MatTableDataSource} from '@angular/material/table';
import { Ticket } from './../ticket.model';
import { TicketsService } from './../service/tickets.service';

@Component({
  selector: 'app-datalist',
  templateUrl: './datalist.component.html',
  styleUrls: ['./datalist.component.css']
})
export class DatalistComponent implements OnInit {
  @ViewChild(MatPaginator)
  paginator!: MatPaginator;
  displayedColumns: string[] = ['id', 
  'department',
  'category',
  'subCategory',
  'status',
  'customer',
  'issueTime',
  'ticketage',
  'lastModifiedDate'];
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

}