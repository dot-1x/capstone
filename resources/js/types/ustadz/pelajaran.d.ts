export type Nilai = {
    id: number;
    nilai: number;
    semester: number;
    pelajaran_id: number;
    santri_id: number;
    created_at: string;
    updated_at: string;
};

export type Pelajaran = {
    id: number;
    nama_pelajaran: string;
    semester: number;
    pengampu_id: number;
    created_at: string;
    updated_at: string;
    nilai: Nilai[];
};

// Kalau mau buat tipe untuk array pelajaran sekalian:
export type UstadzPelajaranList = Pelajaran[];
