import { NavMain } from '@/components/nav-main';
import { NavUser } from '@/components/nav-user';
import { Sidebar, SidebarContent, SidebarFooter, SidebarHeader, SidebarMenu, SidebarMenuButton, SidebarMenuItem } from '@/components/ui/sidebar';
import { type NavItem } from '@/types';
import { Link } from '@inertiajs/react';
// import { NavFooter } from '@/components/nav-footer';
import {  BookOpenTextIcon, FileText, GraduationCap, HeartHandshake, LayoutGrid, Users2 } from 'lucide-react';
import AppLogo from './app-logo';

const mainNavItems: NavItem[] = [
    {
        title: 'Dashboard',
        href: '/dashboard',
        icon: LayoutGrid,
    },

    // admin
    {
        title: 'Data Santri',
        href: '/admin/santri ',
        icon: Users2,
    },
    {
        title: 'Data Ustadz',
        href: '/admin/ustadz ',
        icon: GraduationCap,
    },
    {
        title: 'Data Wali Santri',
        href: '/admin/santri ',
        icon: HeartHandshake,
    },
    {
        title: 'Data Pelajaran',
        href: '/admin/pelajaran ',
        icon: BookOpenTextIcon,
    },
    {
        title: 'Laporan Izin Santri',
        href: '/admin/laporan ',
        icon: FileText,
    },

    // ustadz
    {
        title: 'Data Santri Didik',
        href: '/ustadz/santri-didik',
        icon: Users2,
    },
    {
        title: 'Data Pelajaran',
        href: '/ustadz/pelajaran',
        icon: BookOpenTextIcon,
    },
    {
        title: 'Laporan Izin Santri',
        href: '/ustadz/izin ',
        icon: FileText,
    },

    // wali santri
    {
        title: 'Data Anak',
        href: '/wali/anak',
        icon: Users2,
    },
    {
        title: 'Surat Izin Anak',
        href: '/wali/izin',
        icon: BookOpenTextIcon,
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
