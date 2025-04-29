import { Button } from '@/components/ui/button';
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { AlertCircle } from 'lucide-react';

type PelajaranFormDeleteAdminProps = {
    open: boolean;
    onOpenChange: (open: boolean) => void;
};

export default function PelajaranFormDeleteAdmin({ open, onOpenChange }: PelajaranFormDeleteAdminProps) {
    const pelajaranData = {
        id: 'PLJ002',
        nama: "Kitab Ta'limul Muta'allim",
        pengampu: 'Ust. Ahmad Zaki Mubarak',
        semester: 'Ganjil',
    };

    return (
        <Dialog open={open} onOpenChange={onOpenChange}>
            <DialogContent className="sm:max-w-xl">
                <DialogHeader className="text-center">
                    <DialogTitle className="text-center text-xl font-bold">
                        Apakah Anda yakin ingin menghapus mata pelajaran "{pelajaranData.nama}" dari sistem?
                    </DialogTitle>
                    <DialogDescription className="text-center">
                        Tindakan ini akan menghapus semua data terkait seperti nilai santri dan pengampu untuk pelajaran ini.
                    </DialogDescription>
                </DialogHeader>

                <div className="space-y-4 py-4">
                    <div>
                        <p className="text-sm text-gray-500">ID Pelajaran</p>
                        <p className="font-medium">{pelajaranData.id}</p>
                    </div>

                    <div>
                        <p className="text-sm text-gray-500">Nama Mata Pelajaran</p>
                        <p className="font-medium">{pelajaranData.nama}</p>
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                        <div>
                            <p className="text-sm text-gray-500">Pengampu</p>
                            <p className="font-medium">{pelajaranData.pengampu}</p>
                        </div>

                        <div>
                            <p className="text-sm text-gray-500">Semester</p>
                            <p className="font-medium">{pelajaranData.semester}</p>
                        </div>
                    </div>
                </div>

                <div className="flex items-center gap-2 text-sm text-gray-500">
                    <AlertCircle size={16} />
                    <span>Data yang dihapus tidak dapat dikembalikan.</span>
                </div>

                <DialogFooter className="mt-4 flex w-full justify-end space-x-2">
                    <Button variant="outline" onClick={() => onOpenChange(false)}>
                        Batal
                    </Button>

                    <Button variant="destructive">Hapus Data</Button>
                </DialogFooter>
            </DialogContent>
        </Dialog>
    );
}
