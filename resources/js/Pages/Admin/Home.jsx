import { Head, Link, usePage } from "@inertiajs/react";

const Home = () => {
    const { auth } = usePage().props;

    console.log(auth);

    return (
        <div>
            <Head title="Admin Home" />
            <h1>Admin Home</h1>

            <p>Welcome back, {JSON.stringify(auth)}</p>

            <Link href="/admin/login">Login</Link>
        </div>
    );
};

export default Home;
