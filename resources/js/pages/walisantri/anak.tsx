import { Heading } from '@/components/ui/heading';
import { Separator } from '@/components/ui/separator';
import DataTableSantriWali from '@/components/wali/anak/data-table-santri-wali';
import AppLayout from '@/layouts/app-layout';
import { type BreadcrumbItem } from '@/types';
import { WaliSantriAnak } from '@/types/walisantri/anak';
import { Head } from '@inertiajs/react';

const breadcrumbs: BreadcrumbItem[] = [
    {
        title: 'Data Anak',
        href: '/wali/anak',
    },
];

export default function Page({ prop }: { prop: WaliSantriAnak[] }) {
    return (
        <AppLayout breadcrumbs={breadcrumbs}>
            <Head title="Data Anak" />
            <div className="flex h-full flex-1 flex-col gap-4 rounded-xl p-4">
                <div className="flex items-start justify-between">
                    <Heading title="Data Anak" description="Menampilkan daftar anak yang berada dalam bimbingan atau pengawasan orang tua wali. " />
                </div>
                <Separator />
                <DataTableSantriWali santriData={prop} filters={{ search: '', page: 1 }} />
            </div>
        </AppLayout>
    );
}
