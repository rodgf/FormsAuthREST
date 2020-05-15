import { Component, OnInit, NgZone } from '@angular/core';
import { Router } from '@angular/router';
import { ActivatedRoute } from "@angular/router";

@Component({
	selector: 'app-entrada',
	templateUrl: './entrada.component.html',
	styleUrls: ['./entrada.component.css']
})
export class EntradaComponent implements OnInit {
	msg: string;

	constructor(
		private nz: NgZone,
		private router: Router,
		private route: ActivatedRoute
	) { }

	ngOnInit(): void {
		var login = this.route.snapshot.queryParamMap.get("login")
		var result = this.route.snapshot.queryParamMap.get("result")
		var msg = this.route.snapshot.queryParamMap.get("msg")
		if (result == "ok") {
			this.msg = "Registro efetuado com êxito.";
		}
		if (login == "ok") {
			this.msg = "Usuário autenticado.";
		} else {
			if (result == "erroLogin") {
				if (msg > "")
					this.msg = "Erro: " + msg;
				else
					this.msg = "Usuário ou senha inválidos.";
			}
		}
	}

	//
	logout() {
		this.nz.run(() => this.router.navigateByUrl('/'))
	}
}
