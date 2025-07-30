import DataTableUstadzAdmin from '@/components/admin/ustadz/data-table-ustadz-admin';
import UstadzFormAddAdmin from '@/components/admin/ustadz/ustadz-form-add-admin';
import { Heading } from '@/components/ui/heading';
import { Separator } from '@/components/ui/separator';
import AppLayout from '@/layouts/app-layout';
import { type BreadcrumbItem } from '@/types';
import { AdminUstadzResponse } from '@/types/admin/ustadz';
import { Head } from '@inertiajs/react';

const breadcrumbs: BreadcrumbItem[] = [
    {
        title: 'Data Ustadz',
        href: '/admin/ustadz',
    },
];

export default function Page({ prop }: { prop: AdminUstadzResponse }) {
    return (
        <AppLayout breadcrumbs={breadcrumbs}>
            <Head title="Data Ustadz" />
            <div className="flex h-full flex-1 flex-col gap-4 rounded-xl p-4">
                <div className="flex items-start justify-between">
                    <Heading
                        title="Data Ustadz"
                        description="Berisi informasi lengkap tentang ustadz yang mengajar di pondok, termasuk jumlah santri, list pelajaran, dan list santri didik."
                    />

                    <UstadzFormAddAdmin />
                </div>
                <Separator />
                <DataTableUstadzAdmin santriData={prop} filters={{ search: '', page: 1 }} />
            </div>
        </AppLayout>
    );
}
