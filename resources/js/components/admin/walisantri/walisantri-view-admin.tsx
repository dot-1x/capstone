import { Button } from '@/components/ui/button';
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { Search } from 'lucide-react';

export default function WalisantriViewAdmin() {
    const waliSantriData = {
        namaLengkap: 'Ahmad Ridwan Hakim',
        nomorTelpon: '0812 3456 7890',
        jumlahAnak: 2,
        anakList: ['Laila Mardhiyah', 'Akbar Syahputra'],
    };

    return (
        <Dialog>
            <DialogTrigger asChild>
                <Button variant="default" size="sm">
                    <Search className="mr-2 h-4 w-4" /> Detail Wali Santri
                </Button>
            </DialogTrigger>
            <DialogContent className="max-h-screen overflow-y-auto sm:max-w-[625px]">
                <DialogHeader className="border-b pb-4">
                    <DialogTitle className="text-center">Detail Wali Santri</DialogTitle>
                    <DialogDescription className="mx-auto max-w-sm text-center">
                        Detail data wali santri untuk keperluan administrasi dan komunikasi dengan wali santri.
                    </DialogDescription>
                </DialogHeader>

                <div className="space-y-6 py-6">
                    <div className="grid grid-cols-2 gap-y-4">
                        <div>
                            <h3 className="text-sm text-gray-500">Nama Lengkap</h3>
                            <p className="font-medium">{waliSantriData.namaLengkap}</p>
                        </div>

                        <div>
                            <h3 className="text-sm text-gray-500">Nomor Telpon</h3>
                            <p className="font-medium">{waliSantriData.nomorTelpon}</p>
                        </div>

                        <div className="col-span-2">
                            <h3 className="text-sm text-gray-500">Jumlah Anak</h3>
                            <p className="font-medium">{waliSantriData.jumlahAnak}</p>
                        </div>
                    </div>

                    <div>
                        <h3 className="mb-2 text-sm text-gray-500">Santri yang Diwalikan</h3>
                        <div className="space-y-1">
                            {waliSantriData.anakList.map((anak, index) => (
                                <p key={index} className="font-medium">
                                    {index + 1}. {anak}
                                </p>
                            ))}
                        </div>
                    </div>
                </div>

                
            </DialogContent>
        </Dialog>
    );
}
