import { HELP_DESK_API_TICKET, HELP_DESK_API_SUMMARY } from './helpdesk.api';
import { Ticket } from './../model/ticket.model';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TicketService {

  constructor(private http: HttpClient) { }

  createOrUpdate(ticket: Ticket){
    if(ticket.id != null && ticket.id.trim() != ''){
      return this.http.put(`${HELP_DESK_API_TICKET}`, ticket);
    }
    else{
      ticket.id = null;
      ticket.statusEnum = 'NOVO';
      return this.http.post(`${HELP_DESK_API_TICKET}`, ticket);
    }
  }

  findAll(page: number, count: number){
    return this.http.get(`${HELP_DESK_API_TICKET}/${page}/${count}`);
  }

  findById(id: string) {
    return this.http.get(`${HELP_DESK_API_TICKET}/${id}`);
  }

  delete(id: string) {
    return this.http.delete(`${HELP_DESK_API_TICKET}/${id}`);
  }

  changeStatus(status: string, ticket: Ticket){
    return this.http.put(`${HELP_DESK_API_TICKET}/${ticket.id}/${status}`,ticket);
  }

  findByParams(page: number, count: number, assigned: boolean, ticket: Ticket){
    var naoInformado: string = 'uninformed';
    ticket.numero = ticket == null ? 0 : ticket.numero;
    ticket.titulo = ticket.titulo == '' ? naoInformado : ticket.titulo;
    ticket.statusEnum = ticket.statusEnum == '' ? naoInformado : ticket.statusEnum;
    ticket.prioridadeEnum = ticket.prioridadeEnum == '' ? naoInformado : ticket.prioridadeEnum;
    return this.http.get(`${HELP_DESK_API_TICKET}/${page}/${count}/${ticket.numero}/${ticket.titulo}/${ticket.statusEnum}/${ticket.prioridadeEnum}/${assigned}`);
  }

  summary(){
    return this.http.get(`${HELP_DESK_API_SUMMARY}`);
  }
}
