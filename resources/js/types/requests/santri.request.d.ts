export type SantriRequest = {
    email?: string | null;
    phone?: string | null;
    name: string;

    // Santri-specific fields
    nik: string; // string to handle large numbers safely
    alamat: string;
    tempat_lahir: string;
    tanggal_lahir: string; // ISO date string
    angkatan: number;
    jenis_kelamin: string;
    santri_role: string;
    ustadz_id: number;
    ortu_id: number;

    // Note: nis is not included as it's auto-generated
};
