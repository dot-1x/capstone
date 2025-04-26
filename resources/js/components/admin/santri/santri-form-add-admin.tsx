import { Button } from '@/components/ui/button';
import { Calendar } from '@/components/ui/calendar';
import { Input } from '@/components/ui/input';
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { cn } from '@/lib/utils';
import { format } from 'date-fns';
import { id } from 'date-fns/locale';
import { CalendarIcon, Plus} from 'lucide-react';
import { useState } from 'react';
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';

export default function SantriFormAddAdmin() {
    const [date, setDate] = useState<Date | undefined>(undefined);

    return (
        <Dialog>
            <DialogTrigger asChild>
                <Button variant="default"><Plus/> Tambah Santri</Button>
            </DialogTrigger>
            <DialogContent className="h-screen overflow-y-auto sm:max-w-[625px]">
                <DialogHeader>
                    <DialogTitle>Tambah Data Santri Baru</DialogTitle>
                    <DialogDescription>
                        Silakan isi formulir di bawah ini untuk menambahkan santri baru ke dalam sistem pondok pesantren. Pastikan seluruh data diisi
                        dengan benar dan lengkap untuk keperluan administrasi dan pendataan.
                    </DialogDescription>
                </DialogHeader>
                <div className="space-y-6">
                    <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                        <div className="space-y-2 flex flex-col">
                            <label htmlFor="nis" className="font-medium">
                                NIS
                            </label>
                            <Input id="nis" placeholder="Masukan NIS" />
                        </div>

                        <div className="space-y-2 flex flex-col">
                            <label htmlFor="nik" className="font-medium">
                                NIK
                            </label>
                            <Input id="nik" placeholder="Masukan NIK" />
                        </div>
                    </div>

                    <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                        <div className="space-y-2 flex flex-col">
                            <label htmlFor="nama" className="font-medium">
                                Nama Lengkap
                            </label>
                            <Input id="nama" placeholder="Masukan nama lengkap" />
                        </div>

                        <div className="space-y-2 flex flex-col">
                            <label htmlFor="jenisKelamin" className="font-medium">
                                Jenis Kelamin
                            </label>
                            <Select>
                                <SelectTrigger>
                                    <SelectValue placeholder="Pilih" />
                                </SelectTrigger>
                                <SelectContent>
                                    <SelectItem value="laki-laki">Laki-laki</SelectItem>
                                    <SelectItem value="perempuan">Perempuan</SelectItem>
                                </SelectContent>
                            </Select>
                        </div>
                    </div>

                    <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                        <div className="space-y-2 flex flex-col">
                            <label htmlFor="tempatLahir" className="font-medium">
                                Tempat Lahir
                            </label>
                            <Input id="tempatLahir" placeholder="Masukan Tempat Lahir" />
                        </div>

                        <div className="space-y-2 flex flex-col">
                            <label htmlFor="tanggalLahir" className="font-medium">
                                Tanggal Lahir
                            </label>
                            <Popover>
                                <PopoverTrigger asChild>
                                    <Button variant="outline" className={cn('w-full justify-start text-left font-normal', !date && 'text-gray-400')}>
                                        <CalendarIcon className="mr-2 h-4 w-4" />
                                        {date ? format(date, 'PPP', { locale: id }) : 'Pilih tanggal'}
                                    </Button>
                                </PopoverTrigger>
                                <PopoverContent className="w-auto p-0">
                                    <Calendar mode="single" selected={date} onSelect={setDate} initialFocus />
                                </PopoverContent>
                            </Popover>
                        </div>
                    </div>

                    <div className="space-y-2 flex flex-col">
                        <label htmlFor="alamat" className="font-medium">
                            Alamat
                        </label>
                        <Input id="alamat" placeholder="Masukan alamat lengkap" className="h-24" />
                    </div>

                    <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                        <div className="space-y-2 flex flex-col">
                            <label htmlFor="angkatan" className="font-medium">
                                Angkatan
                            </label>
                            <Input id="angkatan" placeholder="contoh: 2025" />
                        </div>

                        <div className="space-y-2 flex flex-col">
                            <label htmlFor="peran" className="font-medium">
                                Peran
                            </label>
                            <Select>
                                <SelectTrigger>
                                    <SelectValue placeholder="Regular" />
                                </SelectTrigger>
                                <SelectContent>
                                    <SelectItem value="regular">Regular</SelectItem>
                                    <SelectItem value="khusus">Khusus</SelectItem>
                                    <SelectItem value="beasiswa">Beasiswa</SelectItem>
                                </SelectContent>
                            </Select>
                        </div>
                    </div>

                    <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                        <div className="space-y-2 flex flex-col">
                            <label htmlFor="ustadz" className="font-medium">
                                Ustadz Pembimbing
                            </label>
                            <Select>
                                <SelectTrigger>
                                    <SelectValue placeholder="Pilih" />
                                </SelectTrigger>
                                <SelectContent>
                                    <SelectItem value="ustadz1">Ustadz Ahmad</SelectItem>
                                    <SelectItem value="ustadz2">Ustadz Mahmud</SelectItem>
                                    <SelectItem value="ustadz3">Ustadz Hasan</SelectItem>
                                </SelectContent>
                            </Select>
                        </div>

                        <div className="space-y-2 flex flex-col">
                            <label htmlFor="wali" className="font-medium">
                                Nama Orang Tua / Wali
                            </label>
                            <Select>
                                <SelectTrigger>
                                    <SelectValue placeholder="Masukan nama orang tua" />
                                </SelectTrigger>
                                <SelectContent>
                                    <SelectItem value="wali1">Ahmad Ridwan Hakim</SelectItem>
                                    <SelectItem value="wali2">Nur Aini Fadillah</SelectItem>
                                    <SelectItem value="wali3">H. Muhammad Zainal Abidin</SelectItem>
                                </SelectContent>
                            </Select>
                        </div>
                    </div>

                </div>

                <DialogFooter>
                    <Button type="submit">Save changes</Button>
                </DialogFooter>
            </DialogContent>
        </Dialog>
    );
}
