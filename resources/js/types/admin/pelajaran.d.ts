export interface Nilai {
    id: number;
    nilai: number;
    semester: number;
    pelajaran_id: number;
    santri_id: number;
    created_at: string;
    updated_at: string;
}

export interface Pengampu {
    id: number;
    name: string;
    email: string;
    email_verified_at: string | null;
    created_at: string;
    updated_at: string;
    phone: string;
    role: string;
    alamat: string;
    nis: string | null;
    angkatan: string | null;
    jenis_kelamin: string | null;
    santri_role: string | null;
    ortu_id: number | null;
    ustadz_id: number | null;
}

export interface Pelajaran {
    id: number;
    nama_pelajaran: string;
    semester: number;
    pengampu_id: number;
    created_at: string;
    updated_at: string;
    nilai: Nilai[];
    pengampu: Pengampu;
}

export interface AdminPelajaranResponse {
    current_page: number;
    data: Pelajaran[];
}
