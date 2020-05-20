import { SalesTeamController } from './sales-team.controller';
import { SalesTeamService } from './sales-team.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Module } from '@nestjs/common';
import { SalesTeam } from './sale-team.entity';

@Module({
	imports: [TypeOrmModule.forFeature([SalesTeam])],
	controllers: [SalesTeamController],
	providers: [SalesTeamService],
	exports: [SalesTeamService]
})
export class SalesTeamModule {}
