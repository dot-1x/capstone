import DataTableSantriAdmin from '@/components/admin/santri/data-table-santri-admin';
import SantriFormAddAdmin from '@/components/admin/santri/santri-form-add-admin';
import { Heading } from '@/components/ui/heading';
import { Separator } from '@/components/ui/separator';
import AppLayout from '@/layouts/app-layout';
import { type BreadcrumbItem } from '@/types';
import { AdminSantriPaginationResponse } from '@/types/admin/santri';
import { Head } from '@inertiajs/react';

const breadcrumbs: BreadcrumbItem[] = [
    {
        title: 'Data Santri',
        href: '/admin/santri',
    },
];


export default function Page({ prop }: { prop: AdminSantriPaginationResponse }) {
    console.log(prop);
    return (
        <AppLayout breadcrumbs={breadcrumbs}>
            <Head title="Data Santri" />
            <div className="flex h-full flex-1 flex-col gap-4 rounded-xl p-4">
                <div className="flex items-start justify-between">
                    <Heading
                        title="Data Santri"
                        description="Menampilkan informasi lengkap santri pondok pesantren secara terstruktur untuk memudahkan pencarian, pengelolaan, dan pemantauan perkembangan santri."
                    />

                    <SantriFormAddAdmin />
                </div>
                <Separator />
                <DataTableSantriAdmin santriData={prop} filters={{ search: '', page: 1 }} />
            </div>
        </AppLayout>
    );
}
