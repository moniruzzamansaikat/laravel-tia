import { Link } from "@inertiajs/react";

export default function Sidebar() {
    return (
        <div className="sidebar bg-light p-3" style={{ width: "250px" }}>
            <h4>Sidebar</h4>
            <ul>
                <li>
                    <Link href="/admin">Admin Dashboard</Link>
                </li>
                <li>
                    <Link href="/admin/users">Users</Link>
                </li>
                <li>
                    <Link href="/contact">Contact</Link>
                </li>
            </ul>
        </div>
    );
}
