import { Santri, Ustadz } from './users';

export type Nilai = {
    id: number;
    nilai: number;
    semester: number;
    pelajaran_id: number;
    pelajaran?: Pelajaran;
    santri_id: number;
    santri?: Santri;
    created_at: string;
    updated_at: string;
};

export type Pelajaran = {
    id: number;
    nama_pelajaran: string;
    semester: number;
    waktu: string;
    pengampu_id: number;
    created_at: string;
    updated_at: string;
    nilai: Nilai[];
    pengampu?: Ustadz;
};
