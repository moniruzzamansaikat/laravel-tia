import { Head, Link, router, usePage } from "@inertiajs/react";
import toast from "react-hot-toast";

const Home = () => {
    const { auth } = usePage().props;

    const handleLogout = () => {
        router.post('/admin/logout', {}, {
            onSuccess: () => {
                toast.success('You are logged out');
            },
            onError: () => {
                toast.error('Logout failed. Please try again.');
            }
        });
    };  

    return (
        <div>
            <Head title="Admin Home" />
            <h1>Admin Home</h1>

            <p>Welcome back, {auth?.admin?.username}</p>

            {!auth?.admin && <Link href="/admin/login">Login</Link>}
            {auth?.admin && <button onClick={handleLogout}>Logout</button>}
        </div>
    );
};

export default Home;
