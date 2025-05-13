import { Button } from '@/components/ui/button';
import { Calendar } from '@/components/ui/calendar';
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { Input } from '@/components/ui/input';
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Textarea } from '@/components/ui/textarea';
import { cn, fetchApi } from '@/lib/utils';
import { AdminGenericResponse } from '@/types/admin/response';
import { SantriRequestType } from '@/types/admin/santri';
import { WaliSantri } from '@/types/admin/walisantri';
import { Ustadz } from '@/types/walisantri/anak';
import { useForm } from '@inertiajs/react';
import { format } from 'date-fns';
import { CalendarIcon, Plus } from 'lucide-react';
import { FormEventHandler, useState } from 'react';

export default function SantriFormAddAdmin() {
    const { data, setData, post } = useForm<SantriRequestType>({
        name: '',
        nik: '', // string to handle large numbers safely
        alamat: '',
        tempat_lahir: '',
        tanggal_lahir: new Date().toISOString(), // ISO date string
        angkatan: new Date().getFullYear(),
        jenis_kelamin: 'pria',
        santri_role: 'regular',
        ustadz_id: -1,
        ortu_id: -1,
    });
    const submit: FormEventHandler = (e) => {
        e.preventDefault();
        post(route('admin.santri.store'));
    };
    const [date, setDate] = useState<Date>();
    const [dataWali, setDataWali] = useState<WaliSantri[]>([]);
    const [dataUstadz, setDataUstadz] = useState<Ustadz[]>([]);
    return (
        <Dialog>
            <DialogTrigger asChild>
                <Button variant="default">
                    <Plus /> Tambah Santri
                </Button>
            </DialogTrigger>
            <DialogContent className="max-h-screen overflow-y-auto sm:max-w-[625px]">
                <form onSubmit={submit}>
                    <DialogHeader>
                        <DialogTitle>Tambah Data Santri Baru</DialogTitle>
                        <DialogDescription>
                            Silakan isi formulir di bawah ini untuk menambahkan santri baru ke dalam sistem pondok pesantren. Pastikan seluruh data
                            diisi dengan benar dan lengkap untuk keperluan administrasi dan pendataan.
                        </DialogDescription>
                    </DialogHeader>
                    <div className="space-y-6 border-t py-4">
                        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                            <div className="flex flex-col space-y-2">
                                <label htmlFor="nik" className="font-medium">
                                    NIK
                                </label>
                                <Input
                                    id="nik"
                                    placeholder="Masukan NIK"
                                    onChange={(ev) => setData('nik', ev.target.value)}
                                    maxLength={16}
                                    minLength={16}
                                    required
                                />
                            </div>
                        </div>

                        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                            <div className="flex flex-col space-y-2">
                                <label htmlFor="nama" className="font-medium">
                                    Nama Lengkap
                                </label>
                                <Input id="nama" placeholder="Masukan nama lengkap" onChange={(ev) => setData('name', ev.target.value)} required />
                            </div>

                            <div className="flex flex-col space-y-2">
                                <label htmlFor="jenisKelamin" className="font-medium">
                                    Jenis Kelamin
                                </label>
                                <Select onValueChange={(ev) => setData('jenis_kelamin', ev as 'pria' | 'wanita')} required>
                                    <SelectTrigger>
                                        <SelectValue placeholder="Pilih" />
                                    </SelectTrigger>
                                    <SelectContent>
                                        <SelectItem value="pria">Pria</SelectItem>
                                        <SelectItem value="wanita">Wanita</SelectItem>
                                    </SelectContent>
                                </Select>
                            </div>
                        </div>

                        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                            <div className="flex flex-col space-y-2">
                                <label htmlFor="tempatLahir" className="font-medium">
                                    Tempat Lahir
                                </label>
                                <Input
                                    id="tempatLahir"
                                    placeholder="Masukan Tempat Lahir"
                                    onChange={(ev) => setData('tempat_lahir', ev.target.value)}
                                    required
                                />
                            </div>

                            <div className="flex flex-col space-y-2">
                                <label htmlFor="tanggalLahir" className="font-medium">
                                    Tanggal Lahir
                                </label>
                                <Popover>
                                    <PopoverTrigger asChild>
                                        <Button
                                            variant="outline"
                                            className={cn('w-[240px] justify-start text-left font-normal', !date && 'text-muted-foreground')}
                                        >
                                            <CalendarIcon className="mr-2 h-4 w-4" />
                                            {date ? format(date, 'PPP') : <span>Pick a date</span>}
                                        </Button>
                                    </PopoverTrigger>
                                    <PopoverContent className="w-auto p-0" align="start">
                                        <Calendar mode="single" selected={date} onSelect={setDate} autoFocus />
                                    </PopoverContent>
                                </Popover>
                            </div>
                        </div>

                        <div className="flex flex-col space-y-2">
                            <label htmlFor="alamat" className="font-medium">
                                Alamat
                            </label>
                            <Textarea
                                id="alamat"
                                placeholder="Masukan alamat lengkap"
                                rows={3}
                                onChange={(ev) => setData('alamat', ev.target.value)}
                                required
                            />
                        </div>

                        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                            <div className="flex flex-col space-y-2">
                                <label htmlFor="angkatan" className="font-medium">
                                    Angkatan
                                </label>
                                <Input
                                    name="angkatan"
                                    id="angkatan"
                                    placeholder="contoh: 2025"
                                    type="number"
                                    onChange={(ev) => setData('angkatan', parseInt(ev.target.value) || 2025)}
                                    required
                                />
                            </div>

                            <div className="flex flex-col space-y-2">
                                <label htmlFor="peran" className="font-medium">
                                    Peran
                                </label>
                                <Select onValueChange={(ev) => setData('santri_role', ev as 'regular' | 'pengurus')} required>
                                    <SelectTrigger>
                                        <SelectValue placeholder="Regular" />
                                    </SelectTrigger>
                                    <SelectContent>
                                        <SelectItem value="regular">Regular</SelectItem>
                                        <SelectItem value="pengurus">Pengurus</SelectItem>
                                    </SelectContent>
                                </Select>
                            </div>
                        </div>

                        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                            <div className="flex flex-col space-y-2">
                                <label htmlFor="ustadz" className="font-medium">
                                    Ustadz Pembimbing
                                </label>
                                <Select onValueChange={(ev) => setData('ustadz_id', parseInt(ev))} required>
                                    <SelectTrigger
                                        onClick={(ev) => {
                                            fetchApi<AdminGenericResponse<Ustadz>>('/api/ustadz').then((resp) => setDataUstadz(resp.data));
                                        }}
                                    >
                                        <SelectValue placeholder="Pilih" />
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
                                <label htmlFor="wali" className="font-medium">
                                    Nama Orang Tua / Wali
                                </label>
                                <Select onValueChange={(ev) => setData('ortu_id', parseInt(ev))}>
                                    <SelectTrigger
                                        onClick={(ev) => {
                                            fetchApi<AdminGenericResponse<WaliSantri>>('/api/walisantri').then((resp) => setDataWali(resp.data));
                                        }}
                                    >
                                        <SelectValue placeholder="Masukan nama orang tua" />
                                    </SelectTrigger>
                                    <SelectContent>
                                        {dataWali.map((v) => (
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
                        <Button type="submit" onSubmit={(ev) => {}}>
                            Save changes
                        </Button>
                    </DialogFooter>
                </form>
            </DialogContent>
        </Dialog>
    );
}
