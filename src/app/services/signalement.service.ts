import { Injectable } from '@angular/core';
import { Signalement } from "../model/signalement";
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

const AUTH_API = environment.api_url;
@Injectable({
  providedIn: 'root'
})
export class SignalementService {
 

  constructor(private http: HttpClient) { }

  getSignalements(): Observable<Signalement[]> {
    return this.http.get<Signalement[]>(`${AUTH_API}/signalement`);
  }

  createSignalement(signalement: Signalement): Observable<Signalement> {
    return this.http.post<Signalement>(`${AUTH_API}/signalement`, signalement);
  }

  updateSignalement(signalement: Signalement): Observable<Signalement> {
    const url = `${AUTH_API}/signalement/${signalement.id}`;
    return this.http.put<Signalement>(url, signalement);
  }

  deleteSignalement(signalementId: number): Observable<any> {
    const url = `${AUTH_API}/signalement/${signalementId}`;
    return this.http.delete(url);
  }
}
