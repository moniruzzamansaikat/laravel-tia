import { Head, Link } from "@inertiajs/react";

const Home = () => {
    return (
        <div>
            <Head title="Home" />
            <h1>Welcome to MyApp</h1>

            <Link href="/admin">Admin Home</Link>
        </div>
    );
};

export default Home;
