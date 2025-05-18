import { Button } from '@/components/ui/button';
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { fetchApi } from '@/lib/utils';
import { Ustadz } from '@/types/admin/ustadz';
import { BookOpen } from 'lucide-react';
import { useState } from 'react';

export default function LessonViewUstadzAdmin({ id }: { id: number }) {
    const [semester, setSemester] = useState('Ganjil');
    const [dataUstadz, setDataUstadz] = useState<Ustadz | undefined>();

    return (
        <Dialog>
            <DialogTrigger asChild>
                <Button variant="default" size={'sm'}>
                    <BookOpen /> Lihat Pelajaran
                </Button>
            </DialogTrigger>
            <DialogContent
                className="max-h-screen overflow-y-auto sm:max-w-[625px]"
                onOpenAutoFocus={(ev) => fetchApi<Ustadz>(route('detail.ustadz', id)).then((resp) => setDataUstadz(resp))}
            >
                <DialogHeader className="border-b pb-4">
                    <DialogTitle className="text-center">Daftar Mata Pelajaran yang Diampu</DialogTitle>
                    <DialogDescription className="mx-auto max-w-sm text-center">
                        Informasi lengkap mengenai mata pelajaran yang diajarkan oleh seorang ustadz.
                    </DialogDescription>
                </DialogHeader>

                <div className="space-y-6 border-b">
                    <div className="flex items-end justify-between">
                        <div className="space-y-4">
                            <div className="space-y-1">
                                <div className="text-sm">Nama Ustadz</div>
                                <div className="font-semibold">{dataUstadz?.name}</div>
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
                        <table className="w-full text-sm">
                            <thead className="bg-muted">
                                <tr>
                                    <th className="px-4 py-3 text-left text-sm font-medium">Mata Pelajaran</th>
                                    <th className="px-4 py-3 text-left text-sm font-medium">Semester</th>
                                </tr>
                            </thead>
                            <tbody>
                                {dataUstadz?.pelajaran?.map((grade, index) => (
                                    <tr key={index} className="border-t">
                                        <td className="px-4 py-4">{grade.nama_pelajaran}</td>
                                        <td className="px-4 py-4">{grade.semester}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </DialogContent>
        </Dialog>
    );
}
