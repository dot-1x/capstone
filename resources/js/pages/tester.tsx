interface santriData {
    data: santri[];
}
interface santri {
    name: string;
}

export default function Page({ prop }: { prop: santriData }) {
    console.log(prop);
    return (
        <>
            <p>{JSON.stringify(prop)}</p>
        </>
    );
}
