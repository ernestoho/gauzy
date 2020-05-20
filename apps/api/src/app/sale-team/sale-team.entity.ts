import { Column, Entity, JoinColumn, ManyToOne, RelationId } from 'typeorm';
import { Organization } from '../organization/organization.entity';
import { SalesTeam as ISaleTeam } from '@gauzy/models';
import { ApiProperty } from '@nestjs/swagger';
import { Base } from '../core/entities/base';
import { IsString } from 'class-validator';

@Entity('sales_teams')
export class SalesTeam extends Base implements ISaleTeam {
	@ApiProperty({ type: String })
	@Column()
	public name: string;

	@RelationId(({ organization }: SalesTeam) => organization)
	@ApiProperty({ type: String })
	@IsString()
	@Column()
	public organizationId: string;

	@ManyToOne((type) => Organization, { onDelete: 'CASCADE' })
	@ApiProperty({ type: Organization })
	@JoinColumn()
	public organization: Organization;
}
