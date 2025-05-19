/**
 * this types contains STI types of current model
 * all the model type should be inheritance of User
 */

import { User } from '.';
import { Pelajaran } from './pelajaran';

export interface Santri extends User {
    nis: string;
    nik: number;
    alamat: string;
    angkatan: number;
    jenis_kelamin: string;
    santri_role: string;
    tempat_lahir: string;
    tanggal_lahir: Date;
    ortu_id: number;
    ortu?: WaliSantri;
    ustadz_id: number;
    ustadz?: Ustadz;
    nilai?: Nilai[];
}

export interface WaliSantri extends User {
    alamat: string;
    jenis_kelamin: string;
    anak?: Santri[];
}

export interface Ustadz extends User {
    jenis_kelamin: string;
    pelajaran?: Pelajaran[];
    anak?: Santri[];
}
