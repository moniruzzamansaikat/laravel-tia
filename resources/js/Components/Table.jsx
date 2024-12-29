import { Link } from "@inertiajs/react";

function Table({ resource, columns, onPageChange }) {
    const currentPage = resource.current_page;
    const lastPage = resource.last_page;
    const from = resource.from;
    const to = resource.to;
    const total = resource.total;

    const data = resource.data;

    const handlePageChange = (page) => {
        if (page !== currentPage) {
            onPageChange(page);
        }
    };

    const renderPageLinks = () => {
        const pages = [];

        // Return null if there's only one page or if all data fits on one page
        if (lastPage <= 1 || resource?.per_page === resource?.total)
            return null;

        const maxVisiblePages = 5; // Number of visible pages around the current page

        const addPage = (page) => {
            pages.push(
                <li
                    className={`page-item ${
                        page === currentPage ? "active" : ""
                    }`}
                    key={page}
                >
                    <button
                        className="page-link"
                        onClick={() => handlePageChange(page)}
                    >
                        {page}
                    </button>
                </li>
            );
        };

        // Add "Previous" button
        if (currentPage > 1) {
            pages.push(
                <li className="page-item" key="prev">
                    <button
                        className="page-link"
                        onClick={() => handlePageChange(currentPage - 1)}
                    >
                        Previous
                    </button>
                </li>
            );
        }

        // Add first page
        if (currentPage > Math.floor(maxVisiblePages / 2) + 1) {
            addPage(1);
            if (currentPage > Math.floor(maxVisiblePages / 2) + 2) {
                pages.push(
                    <li className="page-item disabled" key="ellipsis-start">
                        <span className="page-link">...</span>
                    </li>
                );
            }
        }

        // Add visible pages around the current page
        const startPage = Math.max(
            1,
            currentPage - Math.floor(maxVisiblePages / 2)
        );
        const endPage = Math.min(
            lastPage,
            currentPage + Math.floor(maxVisiblePages / 2)
        );

        for (let i = startPage; i <= endPage; i++) {
            addPage(i);
        }

        // Add last page
        if (currentPage < lastPage - Math.floor(maxVisiblePages / 2)) {
            if (currentPage < lastPage - Math.floor(maxVisiblePages / 2) - 1) {
                pages.push(
                    <li className="page-item disabled" key="ellipsis-end">
                        <span className="page-link">...</span>
                    </li>
                );
            }
            addPage(lastPage);
        }

        // Add "Next" button
        if (currentPage < lastPage) {
            pages.push(
                <li className="page-item" key="next">
                    <button
                        className="page-link"
                        onClick={() => handlePageChange(currentPage + 1)}
                    >
                        Next
                    </button>
                </li>
            );
        }

        return pages;
    };

    const renderTableRows = () => {
        return data.map((row, index) => (
            <tr key={row.id}>
                <th scope="row">{index + 1}</th>
                {columns.map((column) => (
                    <td key={column.key}>{row[column.key]}</td>
                ))}

                <td>
                    <Link>Edit</Link>
                </td>
            </tr>
        ));
    };

    return (
        <div className="table-responsive">
            <table className="table admin--table">
                <thead>
                    <tr>
                        <th scope="col">#</th>
                        {columns.map((column) => (
                            <th key={column.key} scope="col">
                                {column.label}
                            </th>
                        ))}
                        <th scope="col">Action</th>
                    </tr>
                </thead>
                <tbody>{renderTableRows()}</tbody>
            </table>

            <nav
                aria-label="Page navigation"
                className="d-flex justify-content-between align-items-center"
            >
                <div className="d-flex justify-content-end">
                    <small>
                        Showing {from} to {to} of {total} items
                    </small>
                </div>
                <ul className="pagination">{renderPageLinks()}</ul>
            </nav>
        </div>
    );
}

export default Table;
