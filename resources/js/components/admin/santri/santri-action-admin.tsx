'use client';

import type React from 'react';

import {  EllipsisVertical,  PenBox, Trash2 } from 'lucide-react';
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import SantriFormEditAdmin from './santri-form-edit-admin';
import SantriFormDeleteAdmin from './santri-form-delete-admin';


export const SantriActionAdmin: React.FC = () => {

    const [editDialogOpen, setEditDialogOpen] = useState(false);
    const [deleteDialogOpen, setDeleteDialogOpen] = useState(false);
 

    return (
        <>
            <DropdownMenu modal={false}>
                <DropdownMenuTrigger asChild>
                    <Button variant="ghost" size={'icon'} className="h-8 w-8 p-0">
                        <span className="sr-only">Open menu</span>
                        <EllipsisVertical className="h-4 w-4" />
                    </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end">
                    <DropdownMenuLabel>Aksi</DropdownMenuLabel>
                    <DropdownMenuSeparator />

                    <DropdownMenuItem onClick={() => setEditDialogOpen(true)}>
                        <PenBox className="mr-1 h-4 w-4" /> Edit Profil
                    </DropdownMenuItem>
                    <DropdownMenuItem onClick={() => setDeleteDialogOpen(true)}>
                        <Trash2 className="mr-1 h-4 w-4" /> Hapus Profil
                    </DropdownMenuItem>
                </DropdownMenuContent>
            </DropdownMenu>

            <SantriFormEditAdmin open={editDialogOpen} onOpenChange={setEditDialogOpen} />
            <SantriFormDeleteAdmin open={deleteDialogOpen} onOpenChange={setDeleteDialogOpen} />
        </>
    );
};
