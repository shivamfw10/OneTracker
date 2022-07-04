import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, catchError, throwError } from 'rxjs';

import { Injectable } from '@angular/core';
import { Ticket } from './../ticket.model';
import { environment } from 'src/environments/environment';

const apiUrl=environment.baseUrl;
@Injectable({
  providedIn: 'root'
})
export class TicketsService {

  private handleError(errorResponse:HttpErrorResponse)
  {
    if(errorResponse.error instanceof ErrorEvent)
    {
      console.log('Client Side Error',errorResponse.error);
    }

    else
    {
      console.log('Server Side Error',errorResponse.error)
    }
    return throwError('Their is a problem in ur code');
  }
  constructor(private http:HttpClient) { }
  public getTickets():Observable<Ticket[]>{

    return this.http.get<Ticket[]>(apiUrl).pipe(catchError(this.handleError));
  }

  public getTicketById(id:number):Observable<Ticket>{
    const url=`${apiUrl}/${id}`;
    return this.http.get<Ticket>(url).pipe(catchError(this.handleError));
  }

  public addTicket(emp:any):Observable<Ticket>{
    return this.http.post<Ticket>(apiUrl,emp);
  }
  public deleteTicket(id:any):Observable<Ticket>{
    const url=`${apiUrl}/${id}`;
    return this.http.delete<Ticket>(url).pipe(catchError(this.handleError));
  }
  public EditTicket(id:number,emp:any):Observable<Ticket>{
    const url=`${apiUrl}/${id}`;
    return this.http.patch<Ticket>(url,emp).pipe(catchError(this.handleError));
  }
}
