import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UpworkComponent } from './components/upwork/upwork.component';
import { UpworkRoutingModule } from './upwork-routing.module';
import {
	NbCardModule,
	NbInputModule,
	NbButtonModule,
	NbIconModule,
	NbTooltipModule,
	NbTabsetModule,
	NbRouteTabsetModule
} from '@nebular/theme';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { HttpClient } from '@angular/common/http';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { UpworkAuthorizeComponent } from './components/upwork-authorize/upwork-authorize.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TransactionsComponent } from './components/transactions/transactions.component';

export function HttpLoaderFactory(http: HttpClient) {
	return new TranslateHttpLoader(http, './assets/i18n/', '.json');
}
@NgModule({
	declarations: [
		UpworkComponent,
		UpworkAuthorizeComponent,
		TransactionsComponent
	],
	imports: [
		CommonModule,
		UpworkRoutingModule,
		NbCardModule,
		NbButtonModule,
		NbInputModule,
		FormsModule,
		ReactiveFormsModule,
		NbTooltipModule,
		NbIconModule,
		NbTabsetModule,
		NbRouteTabsetModule,
		TranslateModule.forChild({
			loader: {
				provide: TranslateLoader,
				useFactory: HttpLoaderFactory,
				deps: [HttpClient]
			}
		})
	]
})
export class UpworkModule {}
