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
                <td>Action</td>
            </tr>
        ));
    };

    return (
        <div>
            <table className="table">
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

            {/* Pagination Controls */}
            <nav aria-label="Page navigation">
                <ul className="pagination">{renderPageLinks()}</ul>
            </nav>

            <div>
                <small>
                    Showing {from} to {to} of {total} items
                </small>
            </div>
        </div>
    );
}

export default Table;
