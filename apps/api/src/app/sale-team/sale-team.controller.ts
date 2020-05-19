import { CrudController } from '../core/crud/crud.controller';
import { Controller, UseGuards } from '@nestjs/common';
import { SaleTeamService } from './sale-team.service';
import { SaleTeam } from './sale-team.entity';
import { AuthGuard } from '@nestjs/passport';
import { ApiTags } from '@nestjs/swagger';

@Controller()
@ApiTags('Pipeline')
@UseGuards(AuthGuard('jwt'))
export class SaleTeamController extends CrudController<SaleTeam> {
	constructor(readonly saleTeamService: SaleTeamService) {
		super(saleTeamService);
	}
}
