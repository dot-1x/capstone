import { Button } from '@/components/ui/button';
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { fetchApi } from '@/lib/utils';
import { Ustadz } from '@/types/admin/ustadz';
import { APIResponse } from '@/types/response';
import { Link } from '@inertiajs/react';
import { AlertCircle } from 'lucide-react';
import { useState } from 'react';

type UstadzFormDeleteAdminProps = {
    open: boolean;
    onOpenChange: (open: boolean) => void;
    id: number;
};

export default function UstadzFormDeleteAdmin({ open, onOpenChange, id }: UstadzFormDeleteAdminProps) {
    const [data, setData] = useState<Ustadz | undefined>(undefined);

    return (
        <Dialog open={open} onOpenChange={onOpenChange}>
            <DialogContent
                className="h-screen overflow-y-auto sm:max-w-2xl"
                onOpenAutoFocus={(ev) => fetchApi<APIResponse<Ustadz>>(route('api.detail.ustadz', id)).then((resp) => setData(resp.data))}
            >
                <DialogHeader className="text-center">
                    <DialogTitle className="mx-auto max-w-lg text-center text-xl font-bold">
                        Apakah Anda yakin ingin menghapus data ustadz "{data?.name}"?
                    </DialogTitle>
                    <DialogDescription className="text-center">
                        Tindakan ini akan menghapus semua data yang terkait dengan ustadz tersebut.
                    </DialogDescription>
                </DialogHeader>

                <div className="grid grid-cols-2 gap-4 border-t py-4">
                    <div>
                        <p className="text-sm">Jumlah Anak</p>
                        <p className="font-medium">{data?.anak?.length}</p>
                    </div>
                    <div>
                        <p className="text-sm">Jumlah Pelajaran</p>
                        <p className="font-medium">{data?.pelajaran?.length}</p>
                    </div>
                </div>

                <div className="mt-2 flex items-center gap-2 text-sm">
                    <AlertCircle size={16} />
                    <span>Data yang dihapus tidak dapat dikembalikan.</span>
                </div>

                <DialogFooter className="mt-4 flex w-full justify-end space-x-2">
                    <Button variant="outline" onClick={() => onOpenChange(false)}>
                        Batal
                    </Button>
                    <Button variant="destructive" asChild>
                        <Link href={route('admin.ustadz.destroy', id)} method="delete">
                            Hapus data
                        </Link>
                    </Button>
                </DialogFooter>
            </DialogContent>
        </Dialog>
    );
}
