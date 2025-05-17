'use client';

import { Button } from '@/components/ui/button';
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { EllipsisVertical, PenBox, Trash2 } from 'lucide-react';
import { useState } from 'react';
import SantriFormDeleteAdmin from './santri-form-delete-admin';
import SantriFormEditAdmin from './santri-form-edit-admin';

export function SantriActionAdmin({ id }: { id: number }) {
    const [editDialogOpen, setEditDialogOpen] = useState(false);
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

                    <DropdownMenuItem onClick={() => setEditDialogOpen(true)}>
                        <PenBox className="mr-1 h-4 w-4" /> Edit Santri
                    </DropdownMenuItem>
                    <DropdownMenuItem onClick={() => setDeleteDialogOpen(true)}>
                        <Trash2 className="mr-1 h-4 w-4" /> Hapus Santri
                    </DropdownMenuItem>
                </DropdownMenuContent>
            </DropdownMenu>

            <SantriFormEditAdmin open={editDialogOpen} onOpenChange={setEditDialogOpen} />
            <SantriFormDeleteAdmin id={id} open={deleteDialogOpen} onOpenChange={setDeleteDialogOpen} />
        </>
    );
}
