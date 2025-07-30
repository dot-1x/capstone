import DataTableWalisantriAdmin from '@/components/admin/walisantri/data-table-walisantri-admin';
import WalisantriFormAddAdmin from '@/components/admin/walisantri/walisantri-form-add-admin';
import { Heading } from '@/components/ui/heading';
import { Separator } from '@/components/ui/separator';
import AppLayout from '@/layouts/app-layout';
import { type BreadcrumbItem } from '@/types';
import { AdminWaliSantriResponse } from '@/types/admin/walisantri';
import { Head } from '@inertiajs/react';

const breadcrumbs: BreadcrumbItem[] = [
    {
        title: 'Wali Santri',
        href: '/admin/walisantri',
    },
];

export default function Page({ prop }: { prop: AdminWaliSantriResponse }) {
    return (
        <AppLayout breadcrumbs={breadcrumbs}>
            <Head title="Data Wali Santri" />
            <div className="flex h-full flex-1 flex-col gap-4 rounded-xl p-4">
                <div className="flex items-start justify-between">
                    <Heading
                        title="Data Wali Santri"
                        description="Memuat informasi wali santri sebagai kontak utama untuk keperluan komunikasi, perizinan, dan administrasi pondok."
                    />

                    <WalisantriFormAddAdmin />
                </div>
                <Separator />
                <DataTableWalisantriAdmin santriData={prop} filters={{ search: '', page: 1 }} />
            </div>
        </AppLayout>
    );
}
