'use client';

import type React from 'react';

import { Button } from '@/components/ui/button';
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { SharedData } from '@/types';
import { usePage } from '@inertiajs/react';
import { Ban, Check, EllipsisVertical, Trash2 } from 'lucide-react';
import { useState } from 'react';
import IzinFormDeleteAdmin from './izin-form-delete-admin';

export const IzinActionAdmin: React.FC = () => {
    const { auth } = usePage<SharedData>().props;
    const [deleteDialogOpen, setDeleteDialogOpen] = useState(false);

    return (
        <>
            <DropdownMenu modal={false}>
                <DropdownMenuTrigger asChild>
                    <Button variant="ghost" size={'icon'} className="h-8 w-8 border p-0">
                        <span className="sr-only">Open menu</span>
                        <EllipsisVertical className="h-4 w-4" />
                    </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end">
                    <DropdownMenuLabel>Aksi</DropdownMenuLabel>
                    <DropdownMenuSeparator />

                    <DropdownMenuItem>
                        <Check className="mr-1 h-4 w-4" /> Beri Izin
                    </DropdownMenuItem>
                    <DropdownMenuItem>
                        <Ban className="mr-1 h-4 w-4" /> Tolak Izin
                    </DropdownMenuItem>

                    {auth.user.role == 'admin' && (
                        <DropdownMenuItem onClick={() => setDeleteDialogOpen(true)}>
                            <Trash2 className="mr-1 h-4 w-4" /> Hapus Izin
                        </DropdownMenuItem>
                    )}
                </DropdownMenuContent>
            </DropdownMenu>

            <IzinFormDeleteAdmin open={deleteDialogOpen} onOpenChange={setDeleteDialogOpen} />
        </>
    );
};
