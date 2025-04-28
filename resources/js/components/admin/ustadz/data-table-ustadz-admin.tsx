// resources/js/Pages/Admin/SantriPage.tsx

import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { AdminUstadzResponse } from '@/types/admin/ustadz';
import { router, usePage } from '@inertiajs/react';
import { useState } from 'react';
import LessonViewUstadzAdmin from './lesson-view-ustadz-admin';
import SantriViewUstadzAdmin from './santri-view-ustadz-admin';
import { UstadzActionAdmin } from './ustadz-action-admin';

type Props = {
    santriData: AdminUstadzResponse;
    filters: {
        search: string;
        page: number;
    };
};

export default function DataTableUstadzAdmin({ santriData, filters }: Props) {
    const { url } = usePage();
    const [searchInput, setSearchInput] = useState(filters.search || '');

    const handleSearch = (e: React.FormEvent) => {
        e.preventDefault();
        router.get(url.split('?')[0], { search: searchInput, page: 1 }, { preserveState: true, replace: true });
    };

    const handlePageChange = (pageUrl: string | null) => {
        if (pageUrl) {
            router.visit(pageUrl, { preserveState: true, replace: true });
        }
    };

    return (
        <div className="flex flex-col gap-6 pt-2">
            {/* Search Form */}
            <form onSubmit={handleSearch} className="flex flex-col gap-2 sm:flex-row">
                <Input
                    placeholder="Search santri..."
                    value={searchInput}
                    onChange={(e) => setSearchInput(e.target.value)}
                    className="w-full sm:max-w-xs"
                />
                <Button type="submit" className="w-full sm:w-auto">
                    Search
                </Button>
            </form>

            {/* Table */}
            <div className="w-full overflow-x-auto rounded-lg border">
                <Table className="min-w-[900px]">
                    <TableHeader>
                        <TableRow className="bg-muted">
                            <TableHead>No</TableHead>
                            <TableHead>Nama Lengkap</TableHead>
                            <TableHead>Jumlah Santri Didik</TableHead>
                            <TableHead>List Pelajaran</TableHead>
                            <TableHead>List Santri Didik</TableHead>
                            <TableHead></TableHead>
                            {/* <TableHead>Alamat</TableHead> */}
                            {/* <TableHead>Jenis Kelamin</TableHead>
                            <TableHead>Nomor HP</TableHead>
                            <TableHead>Role</TableHead>
                            <TableHead>Nama Orang Tua</TableHead> */}
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        {santriData.data.length > 0 ? (
                            santriData.data.map((santri, index) => (
                                <TableRow key={santri.id}>
                                    <TableCell>{(santriData.current_page - 1) * santriData.per_page + index + 1}</TableCell>
                                    <TableCell>{santri.name}</TableCell>
                                    <TableCell>32</TableCell>
                                    <TableCell>
                                        <LessonViewUstadzAdmin />
                                    </TableCell>
                                    <TableCell>
                                        <SantriViewUstadzAdmin />
                                    </TableCell>
                                    <TableCell>
                                        <UstadzActionAdmin />
                                    </TableCell>
                                    {/* <TableCell>
                                        <SantriView />
                                    </TableCell>
                                    <TableCell>
                                        <SantriActionAdmin />
                                    </TableCell> */}
                                    {/* <TableCell>{santri.alamat}</TableCell> */}
                                    {/* <TableCell>{santri.jenis_kelamin}</TableCell>
                                    <TableCell>{santri.phone}</TableCell>
                                    <TableCell>{santri.santri_role}</TableCell>
                                    <TableCell>{santri.ortu?.name || '-'}</TableCell> */}
                                </TableRow>
                            ))
                        ) : (
                            <TableRow>
                                <TableCell colSpan={9} className="text-center">
                                    No data found.
                                </TableCell>
                            </TableRow>
                        )}
                    </TableBody>
                </Table>
            </div>

            {/* Pagination */}
            <div className="flex w-full flex-wrap items-center justify-center gap-2">
                {santriData.links.map((link, index) => (
                    <Button
                        key={index}
                        variant={link.active ? 'default' : 'outline'}
                        size="sm"
                        disabled={!link.url}
                        dangerouslySetInnerHTML={{ __html: link.label }}
                        onClick={() => handlePageChange(link.url)}
                        className="min-w-8"
                    />
                ))}
            </div>
        </div>
    );
}
