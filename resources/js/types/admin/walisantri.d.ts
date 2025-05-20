import { WaliSantriRequest } from '../requests/walisantri.request';
import { APIPaginateResponse } from '../response';
import { WaliSantri } from '../users';

export type AdminWaliSantriResponse = APIPaginateResponse<WaliSantri>;

export type WaliSantriRequestType = WaliSantriRequest;
