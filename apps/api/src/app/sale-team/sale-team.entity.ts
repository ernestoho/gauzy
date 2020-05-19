import { Column, Entity, JoinColumn, ManyToOne, RelationId } from 'typeorm';
import { Organization } from '../organization/organization.entity';
import { SaleTeam as ISaleTeam } from '@gauzy/models';
import { ApiProperty } from '@nestjs/swagger';
import { Base } from '../core/entities/base';
import { IsString } from 'class-validator';

@Entity('sale_teams')
export class SaleTeam extends Base implements ISaleTeam {
	@ApiProperty({ type: String })
	@Column()
	public name: string;

	@RelationId(({ organization }: SaleTeam) => organization)
	@ApiProperty({ type: String })
	@IsString()
	@Column()
	public organizationId: string;

	@ManyToOne((type) => Organization, { onDelete: 'CASCADE' })
	@ApiProperty({ type: Organization })
	@JoinColumn()
	public organization: Organization;
}
