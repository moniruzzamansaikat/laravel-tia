import { Link, router, usePage } from "@inertiajs/react";
import Table from "../../../Components/Table";
import { route } from "ziggy-js";
import { BiSearch } from "react-icons/bi";
import { useState, useEffect } from "react";

function Index() {
    const { users } = usePage().props;

    const queryParams = new URLSearchParams(window.location.search);
    const initialSearch = queryParams.get("search") || "";

    const [search, setSearch] = useState(initialSearch);

    const columns = [
        { key: "name", label: "Name" },
        { key: "email", label: "Email" },
    ];

    const handlePageChange = (page) => {
        router.get(route("admin.user.index", { page, search }));
    };

    const handleSearch = (e) => {
        e.preventDefault();
        router.get(route("admin.user.index", { search }));
    };

    return (
        <div>
            <div className="d-flex align-items-center justify-content-between mb-3">
                <h3>Users</h3>

                <div className="d-flex">
                    <form className="d-flex flex-grow-1" onSubmit={handleSearch}>
                        <div className="input-group">
                            <input
                                type="search"
                                className="form-control form-control-sm"
                                name="search"
                                id="search"
                                value={search}
                                onChange={(e) => setSearch(e.target.value)}
                                placeholder="Search..."
                            />
                            <button type="submit" className="btn btn-sm btn-outline-secondary">
                                <BiSearch />
                            </button>
                        </div>
                    </form>
                    <Link href={route("admin.user.create")} className="btn btn-primary ms-2">
                        Add New
                    </Link>
                </div>
            </div>

            <Table
                resource={users}
                columns={columns}
                onPageChange={handlePageChange}
            />
        </div>
    );
}

export default Index;
