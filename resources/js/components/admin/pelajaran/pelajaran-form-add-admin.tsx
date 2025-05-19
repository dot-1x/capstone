import { Button } from '@/components/ui/button';
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { fetchApi } from '@/lib/utils';
import { Santri } from '@/types/admin/santri';
import { APIPaginateResponse } from '@/types/response';
import { Ustadz } from '@/types/walisantri/anak';
import { Plus } from 'lucide-react';
import { useState } from 'react';

export default function PelajaranFormAddAdmin() {
    const [dataUstadz, setDataUstadz] = useState<Ustadz[]>([]);
    const [dataSantri, setDataSantri] = useState<Santri[]>([]);
    return (
        <Dialog>
            <DialogTrigger asChild>
                <Button variant="default">
                    <Plus /> Tambah Mata Pelajaran
                </Button>
            </DialogTrigger>
            <DialogContent className="max-h-screen overflow-y-auto sm:max-w-[625px]">
                <DialogHeader>
                    <DialogTitle>Tambah Data Mata Pelajaran Baru</DialogTitle>
                    <DialogDescription>
                        Silakan isi formulir di bawah ini untuk menambahkan mata pelajaran baru ke dalam sistem pondok pesantren. Pastikan seluruh
                        data diisi dengan benar dan lengkap untuk keperluan administrasi dan pendataan.
                    </DialogDescription>
                </DialogHeader>
                <form>
                    <div className="space-y-4 py-4">
                        <div className="flex flex-col space-y-2">
                            <label htmlFor="nama-pelajaran" className="text-sm font-medium">
                                Nama Mata Pelajaran
                            </label>
                            <Input id="nama-pelajaran" />
                        </div>

                        <div className="grid grid-cols-2 gap-4">
                            <div className="flex flex-col space-y-2">
                                <label htmlFor="pengampu" className="text-sm font-medium">
                                    Pengampu
                                </label>
                                <Select>
                                    <SelectTrigger
                                        onClick={(ev) =>
                                            fetchApi<APIPaginateResponse<Ustadz>>('/api/ustadz').then((resp) => setDataUstadz(resp.data))
                                        }
                                    >
                                        <SelectValue placeholder="Pilih Pengampu" />
                                    </SelectTrigger>
                                    <SelectContent>
                                        {dataUstadz.map((v) => (
                                            <SelectItem key={`${v.name}-${v.id}`} value={`${v.id}`}>
                                                {v.name}
                                            </SelectItem>
                                        ))}
                                    </SelectContent>
                                </Select>
                            </div>

                            <div className="flex flex-col space-y-2">
                                <label htmlFor="semester" className="text-sm font-medium">
                                    Semester
                                </label>
                                <Select>
                                    <SelectTrigger>
                                        <SelectValue placeholder="Pilih Semester" />
                                    </SelectTrigger>
                                    <SelectContent>
                                        <SelectItem value="Ganjil">Ganjil</SelectItem>
                                        <SelectItem value="Genap">Genap</SelectItem>
                                    </SelectContent>
                                </Select>
                            </div>
                        </div>

                        <div className="flex flex-col space-y-2">
                            <label className="text-sm font-medium">Pilih Santri</label>
                            <div className="grid grid-cols-2 gap-4">
                                <Input
                                    id="angkatan-santri"
                                    placeholder="Ketik Angkatan (cth: 2022)"
                                    maxLength={4}
                                    minLength={4}
                                    type="number"
                                    onChange={(ev) => {
                                        if (ev.target.value.length != 4) return;
                                        fetchApi<{ data: Santri[] }>(route('api.santri.angkatan', ev.target.value)).then((resp) =>
                                            setDataSantri(resp.data),
                                        );
                                    }}
                                />

                                <Select>
                                    <SelectTrigger>
                                        <SelectValue placeholder="Pilih" />
                                    </SelectTrigger>
                                    <SelectContent>
                                        {dataSantri.map((v) => (
                                            <SelectItem key={`${v.name}-${v.id}`} value={`${v.id}`}>
                                                {v.name}
                                            </SelectItem>
                                        ))}
                                    </SelectContent>
                                </Select>
                            </div>
                        </div>
                    </div>

                    <DialogFooter>
                        <Button type="submit" variant={'default'}>
                            Simpan
                        </Button>
                    </DialogFooter>
                </form>
            </DialogContent>
        </Dialog>
    );
}
