import { CrudService } from '../core/crud/crud.service';
import { InjectRepository } from '@nestjs/typeorm';
import { SaleTeam } from './sale-team.entity';
import { Injectable } from '@angular/core';
import { Repository } from 'typeorm';

@Injectable()
export class SaleTeamService extends CrudService<SaleTeam> {
	public constructor(
		@InjectRepository(SaleTeam)
		private readonly saleTeamRepository: Repository<SaleTeam>
	) {
		super(saleTeamRepository);
	}
}
