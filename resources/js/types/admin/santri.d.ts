import { SantriRequest } from '../requests/santri.request';
import { APIPaginateResponse } from '../response';
import { Santri as SantriUser } from '../users';

export type Santri = SantriUser;

export type AdminSantriPaginationResponse = APIPaginateResponse<Santri>;

export type SantriRequestType = SantriRequest;
