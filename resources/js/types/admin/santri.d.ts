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
    ortu_id: number;
    ortu: Ortu;
    ustadz_id: number;
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
