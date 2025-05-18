import { Nilai } from '../ustadz/pelajaran';
import { Ustadz } from './ustadz';

export interface Ortu {
    id: number;
    name: string;
    email: string;
    email_verified_at: string | null;
    created_at: string;
    updated_at: string;
}

export interface Santri {
    id: number;
    name: string;
    email: string;
    nik: number;
    email_verified_at: string | null;
    created_at: string;
    updated_at: string;
    alamat: string;
    angkatan: number;
    nis: string;
    jenis_kelamin: string;
    phone: string;
    role: string;
    santri_role: string;
    tempat_lahir: string;
    tanggal_lahir: Date;
    ortu_id: number;
    ortu: Ortu;
    ustadz_id: number;
    ustadz: Ustadz;
    nilai: Nilai[]?;
}

export interface PaginationLink {
    url: string | null;
    label: string;
    active: boolean;
}

export interface AdminSantriPaginationResponse {
    current_page: number;
    data: Santri[];
    first_page_url: string;
    from: number;
    last_page: number;
    last_page_url: string;
    links: PaginationLink[];
    next_page_url: string | null;
    path: string;
    per_page: number;
    prev_page_url: string | null;
    to: number;
    total: number;
}

// types/user.ts

export type Gender = 'pria' | 'wanita';
export type SantriRole = 'regular' | 'pengurus';

export type SantriRequestType = {
    email?: string | null;
    phone?: string | null;
    name: string;

    // Santri-specific fields
    nik: string; // string to handle large numbers safely
    alamat: string;
    tempat_lahir: string;
    tanggal_lahir: string; // ISO date string
    angkatan: number;
    jenis_kelamin: Gender;
    santri_role: SantriRole;
    ustadz_id: number;
    ortu_id: number;

    // Note: nis is not included as it's auto-generated
};
