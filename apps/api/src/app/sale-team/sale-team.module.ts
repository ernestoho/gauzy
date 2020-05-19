import { SaleTeamController } from './sale-team.controller';
import { SaleTeamService } from './sale-team.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Module } from '@nestjs/common';
import { SaleTeam } from './sale-team.entity';

@Module({
	imports: [TypeOrmModule.forFeature([SaleTeam])],
	controllers: [SaleTeamController],
	providers: [SaleTeamService],
	exports: [SaleTeamService]
})
export class SaleTeamModule {}
