import { ArchiveConfirmationComponent } from './archive-confirmation/archive-confirmation.component';
import { ThemeModule } from '../../../@theme/theme.module';
import { NgModule } from '@angular/core';
import { BasicInfoFormComponent } from './basic-info/basic-info-form.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import {
	NbInputModule,
	NbCardModule,
	NbDatepickerModule,
	NbButtonModule,
	NbSelectModule,
	NbBadgeModule
} from '@nebular/theme';
import { AuthService } from '../../../@core/services/auth.service';
import { RoleService } from '../../../@core/services/role.service';
import { DeleteConfirmationComponent } from './delete-confirmation/delete-confirmation.component';
import { IncomeService } from '../../../@core/services/income.service';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { HttpClient } from '@angular/common/http';
import { ActionConfirmationComponent } from './action-confirmation/action-confirmation.component';
import { FileUploaderModule } from '../../file-uploader-input/file-uploader-input.module';
import { TagsService } from '../../../@core/services/tags.service';
import { NgSelectModule } from '@ng-select/ng-select';
import { TagsColorInputModule } from '../../tags/tags-color-input/tags-color-input.module';

export function HttpLoaderFactory(http: HttpClient) {
	return new TranslateHttpLoader(http, './assets/i18n/', '.json');
}

@NgModule({
	imports: [
		ThemeModule,
		FormsModule,
		ReactiveFormsModule,
		NbInputModule,
		NbCardModule,
		NbDatepickerModule,
		NbButtonModule,
		FileUploaderModule,
		NbSelectModule,
		NgSelectModule,
		NbBadgeModule,
		TagsColorInputModule,
		TranslateModule.forChild({
			loader: {
				provide: TranslateLoader,
				useFactory: HttpLoaderFactory,
				deps: [HttpClient]
			}
		})
	],
	exports: [
		BasicInfoFormComponent,
		DeleteConfirmationComponent,
		ActionConfirmationComponent,
		ArchiveConfirmationComponent
	],
	declarations: [
		BasicInfoFormComponent,
		DeleteConfirmationComponent,
		ActionConfirmationComponent,
		ArchiveConfirmationComponent
	],
	entryComponents: [
		BasicInfoFormComponent,
		DeleteConfirmationComponent,
		ActionConfirmationComponent,
		ArchiveConfirmationComponent
	],
	providers: [AuthService, RoleService, IncomeService, TagsService]
})
export class UserFormsModule {}
