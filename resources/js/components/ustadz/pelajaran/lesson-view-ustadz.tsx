import { Button } from '@/components/ui/button';
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { Input } from '@/components/ui/input';
import { ArrowDownUp, BookOpenText, PenBox, Save, Search } from 'lucide-react';
import { useEffect, useState } from 'react';

// Define TypeScript interfaces for our data
interface Student {
    nis: string;
    name: string;
    nilai: number;
}

export default function LessonViewUstadz() {
    const [editingIndex, setEditingIndex] = useState<number | null>(null);
    const [editedValue, setEditedValue] = useState<string>('');
    const [searchQuery, setSearchQuery] = useState<string>('');
    const [sortByHighest, setSortByHighest] = useState<boolean>(false);

    // Original student data
    const originalStudentsData: Student[] = [
        { nis: '2023001', name: 'Ava Davis', nilai: 98 },
        { nis: '2023002', name: 'Emily Johnson', nilai: 74 },
        { nis: '2023003', name: 'John Taylor', nilai: 80 },
        { nis: '2023004', name: 'David Harris', nilai: 90 },
        { nis: '2023005', name: 'Jane Martin', nilai: 50 },
    ];

    const [studentsData, setStudentsData] = useState<Student[]>(originalStudentsData);
    const [displayedData, setDisplayedData] = useState<Student[]>(originalStudentsData);

    // Apply filtering and sorting when dependencies change
    useEffect(() => {
        let filteredData = [...studentsData];

        // Apply search filter
        if (searchQuery) {
            filteredData = filteredData.filter((student) => student.name.toLowerCase().includes(searchQuery.toLowerCase()));
        }

        // Apply sorting if needed
        if (sortByHighest) {
            filteredData.sort((a, b) => b.nilai - a.nilai);
        } else {
            // Default to original order
            filteredData.sort((a, b) => {
                const indexA = studentsData.findIndex((s) => s.nis === a.nis);
                const indexB = studentsData.findIndex((s) => s.nis === b.nis);
                return indexA - indexB;
            });
        }

        setDisplayedData(filteredData);
    }, [searchQuery, sortByHighest, studentsData]);

    const handleEditValue = (index: number): void => {
        setEditingIndex(index);
        setEditedValue(displayedData[index].nilai.toString());
    };

    const handleSaveValue = (index: number): void => {
        const studentToUpdate = displayedData[index];
        const updatedStudents = studentsData.map((student) =>
            student.nis === studentToUpdate.nis ? { ...student, nilai: parseInt(editedValue, 10) } : student,
        );

        setStudentsData(updatedStudents);
        setEditingIndex(null);
    };

    const toggleSortByHighest = (): void => {
        setSortByHighest(!sortByHighest);
    };

    return (
        <Dialog>
            <DialogTrigger asChild>
                <Button variant="default" size="sm">
                    <BookOpenText className="mr-2 h-4 w-4" /> Daftar Nilai
                </Button>
            </DialogTrigger>
            <DialogContent className="max-h-screen overflow-y-auto sm:max-w-[625px]">
                <DialogHeader className="border-b pb-4">
                    <DialogTitle className="text-center">Daftar Santri Yang Diasuh</DialogTitle>
                    <DialogDescription className="mx-auto max-w-sm text-center">
                        Menampilkan daftar santri yang berada dalam bimbingan atau pengawasan ustadz tertentu.
                    </DialogDescription>
                </DialogHeader>

                <div className="space-y-6">
                    <div className="flex items-center justify-between">
                        <div className="space-y-1">
                            <div className="text-sm font-medium">Nama Pelajaran</div>
                            <div className="font-semibold">Tafsir Al-Qur'an</div>
                        </div>

                        <div className="flex space-x-2">
                            <Button variant="outline" size="sm" onClick={toggleSortByHighest} className={sortByHighest ? 'bg-muted' : ''}>
                                <ArrowDownUp className="mr-2 h-4 w-4" />
                                {sortByHighest ? 'Nilai Tertinggi' : 'Filter'}
                            </Button>
                        </div>
                    </div>

                    <div className="relative">
                        <Search className="text-muted-foreground absolute top-3 left-3 h-4 w-4" />
                        <Input
                            placeholder="Cari nama santri..."
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                            className="pl-10"
                        />
                    </div>

                    <div className="overflow-hidden rounded-md border">
                        <table className="w-full text-sm">
                            <thead className="bg-muted">
                                <tr>
                                    <th className="px-4 py-3 text-left text-sm font-medium">NIS</th>
                                    <th className="px-4 py-3 text-left text-sm font-medium">Nama Santri</th>
                                    <th className="px-4 py-3 text-left text-sm font-medium">Nilai</th>
                                    <th className="px-4 py-3 text-right text-sm font-medium"></th>
                                </tr>
                            </thead>
                            <tbody>
                                {displayedData.length > 0 ? (
                                    displayedData.map((student, index) => (
                                        <tr key={student.nis + '-' + index} className="border-t">
                                            <td className="px-4 py-4">{student.nis}</td>
                                            <td className="px-4 py-4">{student.name}</td>
                                            <td className="px-4 py-4">
                                                {editingIndex === index ? (
                                                    <input
                                                        type="text"
                                                        value={editedValue}
                                                        onChange={(e) => setEditedValue(e.target.value)}
                                                        className="h-8 w-10 rounded border px-2 text-center"
                                                    />
                                                ) : (
                                                    <div
                                                        className="flex cursor-pointer items-center space-x-2"
                                                        onClick={() => handleEditValue(index)}
                                                    >
                                                        <p>{student.nilai}</p>
                                                        <PenBox size={12} />
                                                    </div>
                                                )}
                                            </td>
                                            <td className="px-4 py-4 text-right">
                                                <Button
                                                    variant="default"
                                                    size="sm"
                                                    className="bg-green-600 hover:bg-green-700"
                                                    onClick={() => (editingIndex === index ? handleSaveValue(index) : handleEditValue(index))}
                                                    disabled={
                                                        editingIndex !== index || (editingIndex === index && editedValue === student.nilai.toString())
                                                    }
                                                >
                                                    <Save />
                                                    Simpan
                                                </Button>
                                            </td>
                                        </tr>
                                    ))
                                ) : (
                                    <tr>
                                        <td colSpan={4} className="text-muted-foreground px-4 py-4 text-center">
                                            Tidak ada santri yang ditemukan
                                        </td>
                                    </tr>
                                )}
                            </tbody>
                        </table>
                    </div>

                    <div className="flex items-center justify-between">
                        <div className="text-muted-foreground text-sm">
                            {displayedData.length} dari {studentsData.length} santri
                        </div>
                    </div>
                </div>
            </DialogContent>
        </Dialog>
    );
}
