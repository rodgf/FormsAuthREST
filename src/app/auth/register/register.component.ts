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

export class RegisterComponent implements OnInit {
	private SERVER_URL = "http://localhost:3000";

	constructor(
		private nz: NgZone,
		private router: Router,
		private hc: HttpClient
	) { }

	ngOnInit(): void {
		console.log("Início");
	}

	register(form) {
		console.log(form.value);
		this.hc
			.post(`${this.SERVER_URL}/register`, form.value)
			.subscribe(
				data => this.redirs(data),
				error => console.log('oops', error)
			);
	}

	redirs(data){
		this.nz.run(() => this.router.navigateByUrl('/auth/entrada?result=ok'))
	}
}
