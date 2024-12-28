import { Link } from "@inertiajs/react";

function Table({ resource, columns, onPageChange }) {
    const currentPage = resource.current_page;
    const lastPage    = resource.last_page;
    const from        = resource.from;
    const to          = resource.to;
    const total       = resource.total;

    const data = resource.data;

    const handlePageChange = (page) => {
        if (page !== currentPage) {
            onPageChange(page);
        }
    };

    const renderPageLinks = () => {
        const pages = [];

        // redner null if no more pages
        if(resource?.per_page == resource?.total) return null;

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

        for (let i = 1; i <= lastPage; i++) {
            pages.push(
                <li
                    className={`page-item ${i === currentPage ? "active" : ""}`}
                    key={i}
                >
                    <button
                        className="page-link"
                        onClick={() => handlePageChange(i)}
                    >
                        {i}
                    </button>
                </li>
            );
        }

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

            <nav aria-label="Page navigation" className="d-flex justify-content-between align-items-center">
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
