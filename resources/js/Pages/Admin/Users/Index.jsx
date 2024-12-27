import { router, usePage } from "@inertiajs/react";
import Table from "../../../Components/Table";

function Index() {
    const { users } = usePage().props;

    const columns = [
        { key: "name", label: "Name" },
        { key: "email", label: "Email" },
    ];

    const handlePageChange = (page) => {
        router.get("/admin/users?page=" + page);
    };

    return (
        <div>
            <Table
                resource={users}
                columns={columns}
                onPageChange={handlePageChange}
            />
        </div>
    );
}

export default Index;
