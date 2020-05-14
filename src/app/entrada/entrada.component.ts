import { Component, OnInit } from '@angular/core';
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
		private router: Router,
		private route: ActivatedRoute
	) { }

	ngOnInit(): void {
		var result = this.route.snapshot.queryParamMap.get("result")
		if (result == "ok") {
			this.msg = "Registro efetuado com êxito.";
		}
	}

	//
	logout() {
		// this.authService.logout();
		// this.router.navigateByUrl('/login');
	}
}
