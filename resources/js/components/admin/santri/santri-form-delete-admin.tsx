import { Button } from '@/components/ui/button';
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { fetchApi } from '@/lib/utils';
import { Santri } from '@/types/admin/santri';
import { Link } from '@inertiajs/react';
import { AlertCircle } from 'lucide-react';
import { useState } from 'react';

type SantriFormDeleteAdminProps = {
    open: boolean;
    onOpenChange: (open: boolean) => void;
    id: number;
};

export default function SantriFormDeleteAdmin({ id, open, onOpenChange }: SantriFormDeleteAdminProps) {
    const [data, setData] = useState<Santri | undefined>(undefined);
    console.log(data);
    const studentData = {
        nis: '2023001',
        nik: '1234567890123456',
        namaLengkap: 'Fathimah Zahra',
        waliSantri: 'Nur Aini Fadillah',
        ustadz: 'Ust. Ahmad Zaki Mubarak',
        nilai: [
            { mataPelajaran: "Tafsir Al-Qur'an", semester: 'Ganjil', nilai: 82 },
            { mataPelajaran: "Kitab Ta'limul Muta'allim", semester: 'Ganjil', nilai: 82 },
            { mataPelajaran: 'Hadis dan Mustholah', semester: 'Ganjil', nilai: 82 },
            { mataPelajaran: 'Ilmu Nahwu (Jurumiyah)', semester: 'Ganjil', nilai: 82 },
        ],
    };

    return (
        <Dialog open={open} onOpenChange={onOpenChange}>
            <DialogContent
                className="max-h-screen overflow-y-auto sm:max-w-2xl"
                onOpenAutoFocus={(ev) => fetchApi<Santri>(route('detail.santri', id)).then((value) => setData(value))}
            >
                <DialogHeader className="text-center">
                    <DialogTitle className="mx-auto max-w-lg text-center text-xl font-bold">
                        Apakah Anda yakin ingin menghapus data santri "{studentData.namaLengkap}"?
                    </DialogTitle>
                    <DialogDescription className="text-center">
                        Tindakan ini akan menghapus semua data yang terkait dengan santri tersebut.
                    </DialogDescription>
                </DialogHeader>

                <div className="grid grid-cols-2 gap-4 border-t py-4">
                    <div>
                        <p className="text-sm">NIS</p>
                        <p className="font-medium">{data?.nis}</p>
                    </div>
                    <div>
                        <p className="text-sm">NIK</p>
                        <p className="font-medium">{data?.nik}</p>
                    </div>
                    <div>
                        <p className="text-sm">Nama Lengkap</p>
                        <p className="font-medium">{data?.name}</p>
                    </div>
                    <div>
                        <p className="text-sm">Wali Santri</p>
                        <p className="font-medium">{data?.ortu.name}</p>
                    </div>
                    <div className="col-span-2">
                        <p className="text-sm">Ustadz</p>
                        <p className="font-medium">{data?.ustadz.name}</p>
                    </div>
                </div>

                <div className="py-2">
                    <p className="text-sm">Transkrip Nilai</p>
                    <div className="mt-2 overflow-hidden rounded-md border">
                        <table className="w-full">
                            <thead className="bg-muted">
                                <tr>
                                    <th className="px-4 py-2 text-left text-sm font-medium">Mata Pelajaran</th>
                                    <th className="px-4 py-2 text-left text-sm font-medium">Semester</th>
                                    <th className="px-4 py-2 text-right text-sm font-medium">Nilai</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y">
                                {studentData.nilai.map((item, index) => (
                                    <tr key={index}>
                                        <td className="px-4 py-3 text-sm">{item.mataPelajaran}</td>
                                        <td className="px-4 py-3 text-sm">{item.semester}</td>
                                        <td className="px-4 py-3 text-right text-sm">{item.nilai}</td>
                                    </tr>
                                ))}
                                <tr className="bg-muted">
                                    <td colSpan={2} className="px-4 py-3 text-sm font-medium">
                                        Rata rata
                                    </td>
                                    <td className="px-4 py-3 text-right text-sm font-medium">82</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>

                <div className="mt-2 flex items-center gap-2 text-sm">
                    <AlertCircle size={16} />
                    <span>Data yang dihapus tidak dapat dikembalikan.</span>
                </div>

                <DialogFooter className="mt-4 flex w-full justify-end space-x-2">
                    <Button variant="outline" onClick={() => onOpenChange(false)}>
                        Batal
                    </Button>
                    <Button variant="destructive" asChild>
                        <Link href={route('admin.santri.destroy', id)} method="delete">
                            Hapus data
                        </Link>
                    </Button>
                </DialogFooter>
            </DialogContent>
        </Dialog>
    );
}
