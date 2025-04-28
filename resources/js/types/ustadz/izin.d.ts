interface User {
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
    angkatan: number | null;
    jenis_kelamin: string | null;
    santri_role: string | null;
    ortu_id: number | null;
    ustadz_id: number | null;
}

interface TargetSantri {
    id: number;
    name: string;
    email: string;
    email_verified_at: string | null;
    created_at: string;
    updated_at: string;
    phone: string;
    role: string;
    alamat: string;
    nis: string;
    angkatan: number;
    jenis_kelamin: string;
    santri_role: string;
    ortu_id: number;
    ustadz_id: number;
}

export interface LeaveRequest {
    id: number;
    message: string;
    tanggal_pulang: string;
    tanggal_kembali: string;
    created_by: User;
    target_santri_id: number;
    opened_by: number | null;
    status: string | null;
    closed_at: string | null;
    created_at: string;
    updated_at: string;
    target_santri: TargetSantri;
}
