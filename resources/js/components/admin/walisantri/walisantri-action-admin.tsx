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
import WalisantriFormEditAdmin from './walisantri-form-edit-admin';
import WalisantriFormDeleteAdmin from './walisantri-form-delete-admin';



export const WalisantriActionAdmin: React.FC = () => {

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
                        <PenBox className="mr-1 h-4 w-4" /> Edit Wali Santri
                    </DropdownMenuItem>
                    <DropdownMenuItem onClick={() => setDeleteDialogOpen(true)}>
                        <Trash2 className="mr-1 h-4 w-4" /> Hapus Wali Santri
                    </DropdownMenuItem>
                </DropdownMenuContent>
            </DropdownMenu>

            <WalisantriFormEditAdmin open={editDialogOpen} onOpenChange={setEditDialogOpen} />
            <WalisantriFormDeleteAdmin open={deleteDialogOpen} onOpenChange={setDeleteDialogOpen} />
        </>
    );
};
