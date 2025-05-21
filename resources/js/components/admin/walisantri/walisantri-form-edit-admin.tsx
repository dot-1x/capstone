import { Button } from '@/components/ui/button';
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Input } from '@/components/ui/input';
import { WaliSantri } from '@/types/users';

type SantriFormEditAdminProps = {
    open: boolean;
    onOpenChange: (open: boolean) => void;
    walisantri: WaliSantri;
};

export default function WalisantriFormEditAdmin({ open, onOpenChange, walisantri }: SantriFormEditAdminProps) {
    return (
        <Dialog open={open} onOpenChange={onOpenChange}>
            <DialogContent className="max-h-screen overflow-y-auto sm:max-w-[625px]">
                <DialogHeader>
                    <DialogTitle>Edit Data Wali Santri</DialogTitle>
                    <DialogDescription>
                        Ubah informasi terkait wali santri. Pastikan data yang baru sesuai dengan informasi yang valid untuk keperluan administrasi.
                    </DialogDescription>
                </DialogHeader>

                {/* Form */}
                <div className="space-y-6 border-t py-4">
                    <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                        <div className="flex flex-col space-y-2">
                            <label htmlFor="nama" className="font-medium">
                                Nama Lengkap
                            </label>
                            <Input id="nama" placeholder="Masukan nama lengkap" value={walisantri.name} />
                        </div>

                        <div className="flex flex-col space-y-2">
                            <label htmlFor="no" className="font-medium">
                                Nomor Telepon
                            </label>
                            <Input id="no" placeholder="Masukan telepon" value={walisantri.phone} />
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
