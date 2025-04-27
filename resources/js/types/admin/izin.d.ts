export type User = {
    id: number;
    name: string;
    email: string;
    email_verified_at: string | null;
    created_at: string;
    updated_at: string;
    phone: string;
    role: 'walisantri' | 'santri';
    alamat: string;
    nis: string | null;
    angkatan: number | null;
    jenis_kelamin: 'laki' | 'perempuan' | null;
    santri_role: 'regular' | null;
    ortu_id: number | null;
    ustadz_id: number | null;
};

export type IzinPulang = {
    id: number;
    message: string;
    tanggal_pulang: string;
    tanggal_kembali: string;
    created_by: User;
    target_santri_id: number;
    opened_by: number | null;
    status: 'accepted' | null;
    closed_at: string | null;
    created_at: string;
    updated_at: string;
    target_santri: User;
};

export type AdminIzinPulangResponse = {
    current_page: number;
    data: IzinPulang[];
};
