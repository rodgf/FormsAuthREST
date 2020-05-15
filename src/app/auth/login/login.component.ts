import { Injectable, Component, OnInit, NgZone } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
//
@Component({
	selector: 'app-login',
	templateUrl: './login.component.html',
	styleUrls: ['./login.component.css']
})

//
export class LoginComponent implements OnInit {
	private SERVER_URL = "http://localhost:3000";

	constructor(
		private nz: NgZone,
		private router: Router,
		private hc: HttpClient
	) { }

	ngOnInit(): void {
	}

	//
	login(form) {
		this.hc
			.post(`${this.SERVER_URL}/login`, form.value)
			.subscribe(
				data => this.redirs(data),
				error => this.redirs(error)
			);
	}

	redirs(data){
		if (data.error != undefined) {
			if (data.status == 404 || data.status == 401)
				this.nz.run(() => this.router.navigate(['/auth/entrada'], { queryParams: { result: 'erroLogin', msg: data.error} }));
			else
				this.nz.run(() => this.router.navigate(['/auth/entrada'], { queryParams: { result: 'erroLogin', msg: data.message} }));
		} else {
			if (data.access_token > '')
				this.nz.run(() => this.router.navigateByUrl('/auth/entrada?login=ok'))
			else
				this.nz.run(() => this.router.navigateByUrl('/auth/entrada?result=erroLogin'))
		}
	}	
}
