import { HttpClient } from '@angular/common/http';
import { FuncionarioModel } from './../models/funcionario.model';
import { Funcionarios } from './../funcionarios';
import { FuncionarioService } from './../services/funcionario.service';
import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, Validators } from '@angular/forms';


@Component({
  selector: 'app-consulta-cpf',
  templateUrl: './consulta-cpf.component.html',
  styleUrls: ['./consulta-cpf.component.css'],
  providers: [ { provide: HttpClient}]
})
export class ConsultaCpfComponent implements OnInit {

  isValid = false;
  cpfInvalido = false;
  isDisabled = false;
  funcionarios: Funcionarios[] = [];
  respFuncionario: any[] = [];
  resultPesquisa: any[] = [];

  constructor(
    private _formBuilder: FormBuilder,
    private _funcionarioService: FuncionarioService
    ) {}

  ngOnInit(){
    this.consultaFuncionarios();
  }

  cpfForm = this._formBuilder.group({
    cpf: ['', Validators.required],
  });

  getFormulario(){
    let model: any = new FuncionarioModel();

    var cpfForm = this.cpfForm.value;
    model.cpf = cpfForm.cpf;

    this.pesquisa(model);

  }

  consultaFuncionarios(){
    this._funcionarioService.getFuncionarios().subscribe((r: any) => {
      this.respFuncionario = r
    })
  }

  pesquisa(data: any) {
    let resultado = data.cpf;
      let resp =  this.respFuncionario.filter((r: any) => {
         return r?.cpf?.indexOf(resultado) > -1
      })
      this.isValid = true;
      this.resultPesquisa = resp;
  }

  validaCpf ($event: any){
    let value = $event.target.value
    if(value != '') this.cpfValido(value)
    this.isValid = false;

  }

  cpfValido(controle: AbstractControl) {
    const cpf = controle.value;

    let soma: number = 0;
    let resto: number;
    let valido: boolean;

    const regex = new RegExp('[0-9]{11}');

    if (
      cpf == '00000000000' ||
      cpf == '11111111111' ||
      cpf == '22222222222' ||
      cpf == '33333333333' ||
      cpf == '44444444444' ||
      cpf == '55555555555' ||
      cpf == '66666666666' ||
      cpf == '77777777777' ||
      cpf == '88888888888' ||
      cpf == '99999999999' ||
      !regex.test(cpf)
    )
      valido = false;
    else {
      for (let i = 1; i <= 9; i++)
        soma = soma + parseInt(cpf.substring(i - 1, i)) * (11 - i);
      resto = (soma * 10) % 11;

      if (resto == 10 || resto == 11) resto = 0;
      if (resto != parseInt(cpf.substring(9, 10))) valido = false;

      soma = 0;
      for (let i = 1; i <= 10; i++)
        soma = soma + parseInt(cpf.substring(i - 1, i)) * (12 - i);
      resto = (soma * 10) % 11;

      if (resto == 10 || resto == 11) resto = 0;
      if (resto != parseInt(cpf.substring(10, 11))) valido = false;
      valido = true;
    }

    if (valido) {
      this.isDisabled = false;
      return null;
    }

    return  alert('Insira um cpf válido')

  }


}
