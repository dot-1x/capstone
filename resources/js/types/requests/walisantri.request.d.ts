export type WaliSantriRequest = {
    email?: string | null;
    phone?: string | null;
    name: string;

    alamat: string;
    jenis_kelamin: string;
    anak: number[] | null;
};
