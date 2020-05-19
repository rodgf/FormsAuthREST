import { Injectable, Component, OnInit, NgZone } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Injectable({
	providedIn: 'root'
})

@Component({
	selector: 'app-register',
	templateUrl: './register.component.html',
	styleUrls: ['./register.component.css']
})

// Módulo de Registro
export class RegisterComponent implements OnInit {
	private SERVER_URL = "http://localhost:3000";

	constructor(
		private nz: NgZone,
		private router: Router,
		private hc: HttpClient
	) { }

	ngOnInit(): void { }

	// Salva registro
	register(form) {
		this.hc
			.post(`${this.SERVER_URL}/register`, form.value)
			.subscribe(
				data => this.redirs(data),
				error => console.log('oops', error)
			);
	}

	// Redireciona para tela de entrada
	redirs(data){
		this.nz.run(() => this.router.navigateByUrl('/auth/entrada?result=ok'))
	}
}
