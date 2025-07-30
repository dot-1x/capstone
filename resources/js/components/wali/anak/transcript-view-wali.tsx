import { Button } from '@/components/ui/button';
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { fetchApi } from '@/lib/utils';
import { APIResponse } from '@/types/response';
import { Santri } from '@/types/users';
import { FileTextIcon, Printer } from 'lucide-react';
import { useState } from 'react';

export default function TranscriptViewAdmin({ id }: { id: number }) {
    const [semester, setSemester] = useState('Ganjil');
    const [santri, setDataSantri] = useState<Santri | null>(null);
    const average = santri?.nilai?.reduce((sum, item) => sum + item.nilai, 0) / (santri?.nilai?.length || 1);
    return (
        <Dialog>
            <DialogTrigger asChild>
                <Button variant="default" size={'sm'}>
                    <FileTextIcon /> Lihat
                </Button>
            </DialogTrigger>
            <DialogContent
                className="max-h-screen overflow-y-auto sm:max-w-[625px]"
                onOpenAutoFocus={(_) => {
                    fetchApi<APIResponse<Santri>>(route('api.nilai.santri', id)).then((resp) => {
                        setDataSantri(resp.data);
                    });
                }}
            >
                <DialogHeader className="border-b pb-4">
                    <DialogTitle className="text-center">Transkip Nilai Santri</DialogTitle>
                    <DialogDescription className="mx-auto max-w-sm text-center">
                        Ringkasan hasil belajar santri selama mengikuti program pendidikan di Pondok Pesantren.
                    </DialogDescription>
                </DialogHeader>

                <div className="space-y-6 border-b">
                    <div className="flex items-end justify-between">
                        <div className="space-y-4">
                            <div className="space-y-1">
                                <div className="text-sm">Nama Santri</div>
                                <div className="font-semibold">{santri?.name}</div>
                            </div>

                            <div className="space-y-1">
                                <div className="text-sm">Angkatan</div>
                                <div className="font-semibold">{santri?.angkatan}</div>
                            </div>
                        </div>

                        <div className="w-48">
                            <Select value={semester} onValueChange={setSemester}>
                                <SelectTrigger className="w-full">
                                    <SelectValue placeholder="Pilih Semester" />
                                </SelectTrigger>
                                <SelectContent>
                                    <SelectItem value="Ganjil">Ganjil</SelectItem>
                                    <SelectItem value="Genap">Genap</SelectItem>
                                </SelectContent>
                            </Select>
                        </div>
                    </div>

                    <div className="overflow-hidden rounded-md border">
                        <table className="w-full">
                            <thead className="bg-muted">
                                <tr>
                                    <th className="px-4 py-3 text-left text-sm font-medium">Mata Pelajaran</th>
                                    <th className="px-4 py-3 text-left text-sm font-medium">Semester</th>
                                    <th className="px-4 py-3 text-right text-sm font-medium">Nilai</th>
                                </tr>
                            </thead>
                            <tbody>
                                {santri?.nilai?.map((nilai, index) => (
                                    <tr key={index} className="border-t">
                                        <td className="px-4 py-4">{nilai.pelajaran.nama_pelajaran}</td>
                                        <td className="px-4 py-4">{nilai.semester}</td>
                                        <td className="px-4 py-4">{nilai.nilai}</td>
                                    </tr>
                                ))}
                                <tr className="bg-muted border-t">
                                    <td colSpan={2} className="px-4 py-4 font-medium">
                                        Rata rata
                                    </td>
                                    <td className="px-4 py-4 text-right font-medium">{average.toFixed(2)}</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>

                <DialogFooter>
                    <div className="flex w-full items-center justify-between">
                        <Button variant="outline">Kembali</Button>
                        <Button asChild>
                            {santri && (
                                <a href={route('nilai.transcript', santri?.nis)} target="_blank">
                                    <Printer className="mr-2 h-4 w-4" />
                                    Cetak transkrip nilai
                                </a>
                            )}
                        </Button>
                    </div>
                </DialogFooter>
            </DialogContent>
        </Dialog>
    );
}
