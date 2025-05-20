import { UstadzRequest } from '../requests/ustadz.request';
import { APIPaginateResponse } from '../response';
import { Ustadz } from '../users';

export type AdminUstadzResponse = APIPaginateResponse<Ustadz>;
export type UstadzRequestType = UstadzRequest;
