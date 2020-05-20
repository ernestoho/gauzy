import { BaseEntityModel } from './base-entity.model';
import { Organization, OrganizationFindInput } from './organization.model';

export interface SalesTeam extends BaseEntityModel, SalesTeamCreateInput {
	organization?: Organization;
}

export interface SalesTeamCreateInput {
	organizationId?: string;
	name: string;
}

export interface SalesTeamFindInput {
	organization?: OrganizationFindInput;
	organizationId?: string;
	name?: string;
}
