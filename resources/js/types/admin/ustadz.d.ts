export interface Ustadz {
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

export interface PaginationLink {
    url: string | null;
    label: string;
    active: boolean;
}

export interface AdminUstadzResponse {
    current_page: number;
    data: Ustadz[];
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
