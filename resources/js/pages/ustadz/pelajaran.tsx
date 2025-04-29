import { Heading } from '@/components/ui/heading';
import { Separator } from '@/components/ui/separator';
import DataTablePelajaranUstadz from '@/components/ustadz/pelajaran/data-table-pelajaran-ustadz';
import AppLayout from '@/layouts/app-layout';
import { type BreadcrumbItem } from '@/types';
import { UstadzPelajaranList } from '@/types/ustadz/pelajaran';
import { Head } from '@inertiajs/react';

const breadcrumbs: BreadcrumbItem[] = [
    {
        title: 'Data Pelajaran',
        href: '/ustadz/pelajaran',
    },
];


export default function Page({ prop }: { prop: UstadzPelajaranList }) {
    console.log(prop);
    return (
        <AppLayout breadcrumbs={breadcrumbs}>
            <Head title="Data Pelajaran" />
            <div className="flex h-full flex-1 flex-col gap-4 rounded-xl p-4">
                <div className="flex items-start justify-between">
                    <Heading
                        title="Daftar Mata Pelajaran yang Diampu"
                        description="Informasi lengkap mengenai mata pelajaran yang diajarkan oleh seorang ustadz. "
                    />
                </div>
                <Separator />
                <DataTablePelajaranUstadz santriData={prop} filters={{ search: '', page: 1 }} />
            </div>
        </AppLayout>
    );
}
