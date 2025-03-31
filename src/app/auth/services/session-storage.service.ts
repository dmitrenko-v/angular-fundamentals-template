import {Inject, Injectable} from '@angular/core';

const TOKEN = 'SESSION_TOKEN'; // Use this constant for the session storage entry key

@Injectable({
  providedIn: 'root'
})
export class SessionStorageService {
  constructor(private _window: Window) {
  }
  
  setToken(token: string){
    this._window.sessionStorage.setItem(TOKEN, token);
  }

  getToken(){
    return this._window.sessionStorage.getItem(TOKEN);
  }

  deleteToken(){
    this._window.sessionStorage.removeItem(TOKEN);
  }
}
