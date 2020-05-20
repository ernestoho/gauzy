import { CrudService } from '../core/crud/crud.service';
import { InjectRepository } from '@nestjs/typeorm';
import { SalesTeam } from './sale-team.entity';
import { Injectable } from '@angular/core';
import { Repository } from 'typeorm';

@Injectable()
export class SalesTeamService extends CrudService<SalesTeam> {
	public constructor(
		@InjectRepository(SalesTeam)
		private readonly saleTeamRepository: Repository<SalesTeam>
	) {
		super(saleTeamRepository);
	}
}
