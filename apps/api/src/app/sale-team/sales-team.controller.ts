import { PermissionGuard } from '../shared/guards/auth/permission.guard';
import { Controller, Get, HttpStatus, UseGuards } from '@nestjs/common';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { Permissions } from '../shared/decorators/permissions';
import { CrudController, IPagination } from '../core/crud';
import { SalesTeamService } from './sales-team.service';
import { PermissionsEnum } from '@gauzy/models';
import { SalesTeam } from './sale-team.entity';
import { AuthGuard } from '@nestjs/passport';

@Controller()
@ApiTags('Pipeline')
@UseGuards(PermissionGuard)
@UseGuards(AuthGuard('jwt'))
export class SalesTeamController extends CrudController<SalesTeam> {
	constructor(readonly saleTeamService: SalesTeamService) {
		super(saleTeamService);
	}

	@Get()
	@Permissions(PermissionsEnum.SALES_TEAMS_VIEW)
	@ApiResponse({
		isArray: true,
		type: SalesTeam,
		status: HttpStatus.OK,
		description: `Found current user's organization sales teams`
	})
	@ApiOperation({
		summary: `Find all sales teams for current user's organisation.`
	})
	public async findAll(): Promise<IPagination<SalesTeam>> {
		// TODO: Narrow down to user's organization scope
		return super.findAll();
	}
}
