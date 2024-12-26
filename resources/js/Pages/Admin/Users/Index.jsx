import { usePage } from "@inertiajs/react";

function Index() {
    let { users } = usePage().props;

    users = users.data;

    const renderUsers = users?.map((user, index) => (
        <tr key={user.id}>
            <th scope="row">{index + 1}</th>
            <td>{user.name}</td>
            <td>{user.email}</td>
            <td>Action</td>
        </tr>
    ));

    return (
        <div>
            <table className="table">
                <thead>
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">Name</th>
                        <th scope="col">Email</th>
                        <th scope="col">Action</th>
                    </tr>
                </thead>
                <tbody>{renderUsers}</tbody>
            </table>
        </div>
    );
}

export default Index;
