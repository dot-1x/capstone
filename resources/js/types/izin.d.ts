import { Santri, Ustadz, WaliSantri } from './users';

export interface Izin {
    id: number;
    message: string;
    tanggal_pulang: string;
    tanggal_kembali: string;
    created_by?: WaliSantri;
    target_santri_id: number;
    target_santri?: Santri;
    opened_by: number;
    opened_by?: Ustadz;
    status: 'rejected' | 'accepted' | null;
    closed_at: string;
}
