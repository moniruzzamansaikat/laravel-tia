import { Link } from "@inertiajs/react";
import { IoHomeOutline } from "react-icons/io5";
import { MdContactPage } from "react-icons/md";
import { PiUserList } from "react-icons/pi";
import { route} from "ziggy-js";

export default function Sidebar() {
    const activeRoute = (routeName) => route().current(routeName) ? 'active' : '';
    
    return (
        <div className="sidebar">
            <div className="brand-logo">
                <h4>Brand Logo</h4>
            </div>
            <ul className="list-group">
                <Link href={route('admin.home')} className={`list-group-item ${activeRoute('admin.home')}`}>
                    <span className="icon"><IoHomeOutline /></span>
                    <span className="text">Dashboard</span>
                </Link>
                <Link href={route('admin.user.index')} className={`list-group-item ${activeRoute('admin.user.*')}`}>
                    <span className="icon"><PiUserList /></span>
                    <span className="text">Users</span>
                </Link>
                <Link href="/contact" className="list-group-item">
                    <span className="icon"><MdContactPage /></span>
                    <span className="text">Contact</span>
                </Link>
            </ul>
        </div>
    );
}
