import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { Plus } from 'lucide-react';

export default function WalisantriFormAddAdmin() {

    return (
        <Dialog>
            <DialogTrigger asChild>
                <Button variant="default">
                    <Plus /> Tambah Wali Santri
                </Button>
            </DialogTrigger>
            <DialogContent className="max-h-screen overflow-y-auto sm:max-w-[625px]">
                <DialogHeader>
                    <DialogTitle>Tambah Data Wali Santri Baru</DialogTitle>
                    <DialogDescription>
                        Lengkapi data berikut untuk menambahkan wali santri baru. Pastikan semua informasi diisi dengan benar untuk keperluan
                        administrasi dan komunikasi dengan wali santri.
                    </DialogDescription>
                </DialogHeader>
                <div className="space-y-6 border-t py-4">
                    <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                        <div className="flex flex-col space-y-2">
                            <label htmlFor="nama" className="font-medium">
                                Nama Lengkap
                            </label>
                            <Input id="nama" placeholder="Masukan nama lengkap" />
                        </div>

                        <div className="flex flex-col space-y-2">
                            <label htmlFor="no" className="font-medium">
                                Nomor Telepon
                            </label>
                            <Input id="no" placeholder="Masukan telepon" />
                        </div>

                    </div>
                </div>

                <DialogFooter>
                    <Button type="submit">Tambah data</Button>
                </DialogFooter>
            </DialogContent>
        </Dialog>
    );
}
