import { HEPL_DESK_API_AUTH, HEPL_DESK_API_USER } from './helpdesk.api';
import { User } from './../model/user.model';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }

  login(user: User){
    return this.http.post(`${HEPL_DESK_API_AUTH}`, user);
  }

  createOrUpdate(user: User){
    if(user.id != null && user.id.trim() != ''){
      return this.http.put(`${HEPL_DESK_API_USER}`, user);
    }
    else{
      user.id = null;
      return this.http.post(`${HEPL_DESK_API_USER}`, user);
    }
  }

  findAll(page: number, count: number){
    return this.http.get(`${HEPL_DESK_API_USER}/${page}/${count}`);
  }
}
