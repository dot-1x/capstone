import { NavMain } from '@/components/nav-main';
import { NavUser } from '@/components/nav-user';
import { Sidebar, SidebarContent, SidebarFooter, SidebarHeader, SidebarMenu, SidebarMenuButton, SidebarMenuItem } from '@/components/ui/sidebar';
import { type NavItem } from '@/types';
import { Link } from '@inertiajs/react';
// import { NavFooter } from '@/components/nav-footer';
import { BookOpenTextIcon, FileText, GraduationCap, HeartHandshake, LayoutGrid, Users2 } from 'lucide-react';
import AppLogo from './app-logo';

export const mainNavItems: NavItem[] = [
    {
        title: 'Dashboard',
        href: '/dashboard',
        icon: LayoutGrid,
    },

    // admin
    {
        title: 'Data Santri',
        href: '/admin/santri',
        icon: Users2,
        role_access: ['admin'],
    },
    {
        title: 'Data Ustadz',
        href: '/admin/ustadz',
        icon: GraduationCap,
        role_access: ['admin'],
    },
    {
        title: 'Data Wali Santri',
        href: '/admin/walisantri',
        icon: HeartHandshake,
        role_access: ['admin'],
    },
    {
        title: 'Data Mata Pelajaran',
        href: '/admin/pelajaran',
        icon: BookOpenTextIcon,
        role_access: ['admin'],
    },
    {
        title: 'Laporan Izin Santri',
        href: '/admin/izin',
        icon: FileText,
        role_access: ['admin'],
    },

    // ustadz
    {
        title: 'Data Santri Didik',
        href: '/ustadz/santri-didik',
        icon: Users2,
        role_access: ['ustadz'],
    },
    {
        title: 'Data Mata Pelajaran',
        href: '/ustadz/pelajaran',
        icon: BookOpenTextIcon,
        role_access: ['ustadz'],
    },
    {
        title: 'Laporan Izin Santri',
        href: '/ustadz/izin',
        icon: FileText,
        role_access: ['ustadz'],
    },

    // wali santri
    {
        title: 'Data Anak',
        href: '/wali/anak',
        icon: Users2,
        role_access: ['walisantri'],
    },
    {
        title: 'Surat Izin Anak',
        href: '/wali/izin',
        icon: BookOpenTextIcon,
        role_access: ['walisantri'],
    },
];

// const footerNavItems: NavItem[] = [
//     {
//         title: 'Repository',
//         href: 'https://github.com/laravel/react-starter-kit',
//         icon: Folder,
//     },
//     {
//         title: 'Documentation',
//         href: 'https://laravel.com/docs/starter-kits',
//         icon: BookOpen,
//     },
// ];

export function AppSidebar() {
    return (
        <Sidebar collapsible="icon" variant="inset">
            <SidebarHeader>
                <SidebarMenu>
                    <SidebarMenuItem>
                        <SidebarMenuButton size="lg" asChild>
                            <Link href="/dashboard" prefetch>
                                <AppLogo />
                            </Link>
                        </SidebarMenuButton>
                    </SidebarMenuItem>
                </SidebarMenu>
            </SidebarHeader>

            <SidebarContent>
                <NavMain items={mainNavItems} />
            </SidebarContent>

            <SidebarFooter>
                {/* <NavFooter items={footerNavItems} className="mt-auto" /> */}
                <NavUser />
            </SidebarFooter>
        </Sidebar>
    );
}
