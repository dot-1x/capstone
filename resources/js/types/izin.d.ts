import { Santri, Ustadz, WaliSantri } from './users';

export interface Izin {
    message: string;
    tanggal_pulang: Date;
    tanggal_kembali: Date;
    created_by: number;
    createdBy?: WaliSantri;
    target_santri_id: number;
    targetSantri?: Santri;
    opened_by: number;
    openedBy?: Ustadz;
    status: 'rejected' | 'accepted';
    closed_at: Date;
}
