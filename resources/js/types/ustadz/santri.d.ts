export type Santri = {
    id: number;
    name: string;
    email: string;
    email_verified_at: string | null;
    created_at: string;
    updated_at: string;
    phone: string;
    role: 'santri';
    alamat: string;
    nis: string;
    angkatan: number;
    jenis_kelamin: 'laki' | 'perempuan';
    santri_role: 'regular';
    ortu_id: number;
    ustadz_id: number;
    ortu: Ortu;
};

export type Ortu = {
    id: number;
    name: string;
    email: string;
    email_verified_at: string | null;
    created_at: string;
    updated_at: string;
    phone: string;
    role: 'walisantri';
    alamat: string;
    nis: string | null;
    angkatan: number | null;
    jenis_kelamin: string | null;
    santri_role: string | null;
    ortu_id: number | null;
    ustadz_id: number | null;
};

export type UstadzSantri = Santri[];