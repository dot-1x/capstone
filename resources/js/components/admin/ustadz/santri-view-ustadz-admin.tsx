import { Button } from '@/components/ui/button';
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { Input } from '@/components/ui/input';
import { fetchApi } from '@/lib/utils';
import { Santri } from '@/types/admin/santri';
import { Ustadz } from '@/types/admin/ustadz';
import { Users2 } from 'lucide-react';
import { useState } from 'react';

export default function SantriViewUstadzAdmin({ id }: { id: number }) {
    const [santri, setSantri] = useState<Santri[]>([]);
    const [dataUstadz, setDataUstadz] = useState<Ustadz | undefined>();

    return (
        <Dialog>
            <DialogTrigger asChild>
                <Button variant="default" size={'sm'}>
                    <Users2 /> Lihat Santri
                </Button>
            </DialogTrigger>
            <DialogContent
                className="max-h-screen overflow-y-auto sm:max-w-[625px]"
                onOpenAutoFocus={(_) => fetchApi<Ustadz>(route('api.detail.ustadz', id)).then((resp) => setDataUstadz(resp))}
            >
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
                                <div className="font-semibold">{dataUstadz?.name}</div>
                            </div>
                        </div>

                        <div className="w-48">
                            <Input
                                id="input-angkatan"
                                minLength={4}
                                maxLength={4}
                                onChange={(ev) => {
                                    if (ev.target.value.length != 4 || dataUstadz?.anak == undefined) return;
                                    setSantri(dataUstadz.anak.filter((v) => v.angkatan === parseInt(ev.target.value)));
                                }}
                            />
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
                                {santri.map((santri, index) => (
                                    <tr key={index} className="border-t">
                                        <td className="px-4 py-4">{santri.nis}</td>
                                        <td className="px-4 py-4">{santri.name}</td>
                                        <td className="px-4 py-4">{santri.angkatan}</td>
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
