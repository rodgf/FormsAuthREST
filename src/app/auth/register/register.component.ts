import { Injectable, Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

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
	private hc: HttpClient;

	constructor(private httpClient: HttpClient) {
		this.hc = httpClient;
	}

	ngOnInit(): void {
		console.log("Início");
	}

	register(form) {
		console.log(form.value);
		this.hc.post(`${this.SERVER_URL}/register`, form.value);
	}
}
