import { HttpClient} from "@angular/common/http";
import {  Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { Funcionarios } from "../funcionarios";

@Injectable({
  providedIn: 'root',

})


export class FuncionarioService{
  constructor(
    private http: HttpClient,
  ){ }

  private url = " http://localhost:3000/funcionarios";

  getFuncionarios(): Observable<Funcionarios[]>{
    return this.http.get<Funcionarios[]>(this.url);
  }

}
