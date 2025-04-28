import { Heading } from '@/components/ui/heading';
import { Separator } from '@/components/ui/separator';
import AppLayout from '@/layouts/app-layout';
import { type BreadcrumbItem } from '@/types';
import { UstadzSantri } from '@/types/ustadz/santri';
import { Head } from '@inertiajs/react';
import DataTableSantriUstadz from './data-table-santri-ustadz';

const breadcrumbs: BreadcrumbItem[] = [
    {
        title: 'Data Santri yang Diasuh',
        href: '/ustadz/santri-didik',
    },
];


export default function Page({ prop }: { prop: UstadzSantri }) {
    console.log(prop);
    return (
        <AppLayout breadcrumbs={breadcrumbs}>
            <Head title="Data Santri yang Diasuh" />
            <div className="flex h-full flex-1 flex-col gap-4 rounded-xl p-4">
                <div className="flex items-start justify-between">
                    <Heading
                        title="Data Santri yang Diasuh"
                        description="Menampilkan daftar santri yang berada dalam bimbingan atau pengawasan ustadz. "
                    />

                </div>
                <Separator />
                <DataTableSantriUstadz santriData={prop} filters={{ search: '', page: 1 }} />
            </div>
        </AppLayout>
    );
}
