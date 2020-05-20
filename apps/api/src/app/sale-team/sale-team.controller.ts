import { Controller, Get, HttpStatus, UseGuards } from '@nestjs/common';
import { CrudController, IPagination, PaginationParams } from '../core/crud';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { PermissionGuard } from '../shared/guards/auth/permission.guard';
import { Permissions } from '../shared/decorators/permissions';
import { SaleTeamService } from './sale-team.service';
import { PermissionsEnum } from '@gauzy/models';
import { SaleTeam } from './sale-team.entity';
import { AuthGuard } from '@nestjs/passport';

@Controller()
@ApiTags('Pipeline')
@UseGuards(PermissionGuard)
@UseGuards(AuthGuard('jwt'))
export class SaleTeamController extends CrudController<SaleTeam> {
	constructor(readonly saleTeamService: SaleTeamService) {
		super(saleTeamService);
	}

	@Get()
	@Permissions(PermissionsEnum.SALES_TEAMS_VIEW)
	@ApiResponse({
		isArray: true,
		type: SaleTeam,
		status: HttpStatus.OK,
		description: `Found current user's organization sales teams`
	})
	@ApiOperation({
		summary: `Find all sales teams for current user's organisation.`
	})
	public async findAll(): Promise<IPagination<SaleTeam>> {
		// TODO: Narrow down to user's organization scope
		return super.findAll();
	}
}
