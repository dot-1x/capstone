import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import {  Plus} from 'lucide-react';
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';

export default function PelajaranFormAddAdmin() {

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
                        <div className="space-y-2 flex flex-col">
                            <label htmlFor="nama-pelajaran" className="text-sm font-medium">
                                Nama Mata Pelajaran
                            </label>
                            <Input id="nama-pelajaran" />
                        </div>

                        <div className="grid grid-cols-2 gap-4">
                            <div className="space-y-2 flex flex-col">
                                <label htmlFor="pengampu" className="text-sm font-medium">
                                    Pengampu
                                </label>
                                <Select >
                                    <SelectTrigger>
                                        <SelectValue placeholder="Pilih Pengampu" />
                                    </SelectTrigger>
                                    <SelectContent>
                                        <SelectItem value="Ust. Ahmad Zaki Mubarak">Ust. Ahmad Zaki Mubarak</SelectItem>
                                        <SelectItem value="Ust. Abdul Malik">Ust. Abdul Malik</SelectItem>
                                        <SelectItem value="Ust. Muhammad Faisal">Ust. Muhammad Faisal</SelectItem>
                                    </SelectContent>
                                </Select>
                            </div>

                            <div className="space-y-2 flex flex-col">
                                <label htmlFor="semester" className="text-sm font-medium">
                                    Semester
                                </label>
                                <Select >
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

                        <div className="space-y-2 flex flex-col">
                            <label className="text-sm font-medium">Pilih Santri</label>
                            <div className="grid grid-cols-2 gap-4">
                                <Select >
                                    <SelectTrigger>
                                        <SelectValue placeholder="Angkatan" />
                                    </SelectTrigger>
                                    <SelectContent>
                                        <SelectItem value="2024">2024</SelectItem>
                                        <SelectItem value="2023">2023</SelectItem>
                                        <SelectItem value="2022">2022</SelectItem>
                                    </SelectContent>
                                </Select>

                                <Select >
                                    <SelectTrigger>
                                        <SelectValue placeholder="Pilih" />
                                    </SelectTrigger>
                                    <SelectContent>
                                        <SelectItem value="semua">Semua Santri</SelectItem>
                                        <SelectItem value="pilihan">Santri Pilihan</SelectItem>
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
