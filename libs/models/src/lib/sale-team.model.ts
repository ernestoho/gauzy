import { BaseEntityModel } from './base-entity.model';
import { Organization, OrganizationFindInput } from './organization.model';

export interface SaleTeam extends BaseEntityModel, SaleTeamCreateInput {
	organization?: Organization;
}

export interface SaleTeamCreateInput {
	organizationId?: string;
	name: string;
}

export interface SaleTeamFindInput {
	organization?: OrganizationFindInput;
	organizationId?: string;
	name?: string;
}
