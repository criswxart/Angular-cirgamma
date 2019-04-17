import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Usuario} from '../pages/usuario/Usuario';
import {map} from 'rxjs/operators';

@Injectable()

export class UsuarioService {

  private urlEndPoint = "http://localhost:8080/api/usuario";
  constructor(private http: HttpClient){

  }
  getUsuarios(): Observable<Usuario[]>{
    return this.http.get(this.urlEndPoint).pipe(
      map(response => response as Usuario[])
    );
  }
}