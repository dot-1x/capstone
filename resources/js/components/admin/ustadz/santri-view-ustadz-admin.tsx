import { Button } from '@/components/ui/button';
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import {   Users2 } from 'lucide-react';
import { useState } from 'react';


export default function SantriViewUstadzAdmin() {
    const [angkatan, setAngkatan] = useState('2022');

    const studentData = {
        name: 'Fathimah Zahra',
        grades: [
            { nis:'434345', subject: "Tafsir Al-Qur'an", angkatan: '2022' },
            { nis:'434345', subject: "Kitab Ta'limul Muta'allim", angkatan: '2023' },
            { nis:'434345', subject: 'Hadis dan Mustholah', angkatan: '2023' },
            { nis:'434345', subject: 'Ilmu Nahwu (Jurumiyah)', angkatan: '2023' },
        ],
    };


    return (
        <Dialog>
            <DialogTrigger asChild>
                <Button variant="default" size={'sm'}>
                    <Users2 /> Lihat Santri
                </Button>
            </DialogTrigger>
            <DialogContent className="max-h-screen overflow-y-auto sm:max-w-[625px]">
                <DialogHeader className="border-b pb-4">
                    <DialogTitle className="text-center">Daftar Santri yang Diasuh</DialogTitle>
                    <DialogDescription className="mx-auto max-w-sm text-center">
                        Menampilkan daftar santri yang berada dalam bimbingan atau pengawasan ustadz tertentu.
                    </DialogDescription>
                </DialogHeader>

                <div className="space-y-6 border-b">
                    <div className="flex items-end justify-between">
                        <div className="space-y-4">
                            <div className="space-y-1">
                                <div className="text-sm">Nama Ustadz</div>
                                <div className="font-semibold">{studentData.name}</div>
                            </div>
                        </div>

                        <div className="w-48">
                            <Select value={angkatan} onValueChange={setAngkatan}>
                                <SelectTrigger className="w-full">
                                    <SelectValue placeholder="Pilih angkatan" />
                                </SelectTrigger>
                                <SelectContent>
                                    <SelectItem value="2022">2022</SelectItem>
                                    <SelectItem value="2023">2023</SelectItem>
                                </SelectContent>
                            </Select>
                        </div>
                    </div>

                    <div className="overflow-hidden rounded-md border">
                        <table className="w-full text-sm">
                            <thead className="bg-muted">
                                <tr>
                                    <th className="px-4 py-3 text-left text-sm font-medium">NIS</th>
                                    <th className="px-4 py-3 text-left text-sm font-medium">Nama santri</th>
                                    <th className="px-4 py-3 text-left text-sm font-medium">Angkatan</th>
                                </tr>
                            </thead>
                            <tbody>
                                {studentData.grades.map((grade, index) => (
                                    <tr key={index} className="border-t">
                                        <td className="px-4 py-4">{grade.nis}</td>
                                        <td className="px-4 py-4">{grade.subject}</td>
                                        <td className="px-4 py-4">{grade.angkatan}</td>
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
