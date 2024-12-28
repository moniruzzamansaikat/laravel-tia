import { Head, router, usePage } from "@inertiajs/react";
import { useState } from "react";
import toast from "react-hot-toast";
import AuthLayout from "../../../Layout/AuthLayout";

const Login = () => {
    const { csrf_token, errors } = usePage().props;
    const [values, setValues] = useState({
        username: "",
        password: "",
    });

    function handleChange(e) {
        const key = e.target.name;
        const value = e.target.value;

        setValues((values) => ({
            ...values,
            [key]: value,
        }));
    }

    function handleSubmit(e) {
        e.preventDefault();
        values._token = csrf_token;
        router.post("/admin/login", values, {
            onError: function (rest) {
                Object.values(rest).map((error) => toast.error(error));
            },
            onSuccess: () => {
                toast.success("You are logged in");
            },
        });
    }

    return (
        <div className="row">
            <div className="offset-md-4 col-lg-4">
                <div className="card">
                    <div className="card-body">
                        <Head title="Admin Login" />
                        <h1>Admin Login</h1>

                        <form onSubmit={handleSubmit}>
                            <div className="form-group mb-3">
                                <label
                                    htmlFor="username"
                                    className="form-label"
                                >
                                    Username
                                </label>
                                <input
                                    autoFocus
                                    value={values.username}
                                    onChange={handleChange}
                                    id="username"
                                    className="form-control"
                                    name="username"
                                />
                            </div>

                            <div className="form-group mb-3">
                                <label
                                    htmlFor="password"
                                    className="form-label"
                                >
                                    Password
                                </label>
                                <input
                                    value={values.password}
                                    type="password"
                                    id="password"
                                    onChange={handleChange}
                                    className="form-control"
                                    name="password"
                                />
                            </div>

                            <div className="d-flex justify-content-end">
                                <button
                                    className="btn btn-sm btn-primary"
                                    type="submit"
                                >
                                    Login
                                </button>
                            </div>


                            <table className="table">
                                <thead>
                                    <tr>
                                        <th>Username</th>
                                        <th>Password</th>
                                    </tr>
                                </thead>

                                <tbody>
                                    <tr title="Click to fillup" onClick={() => setValues({
                                        username: "admin",
                                        password: "admin",
                                    })}>
                                        <td>admin</td>
                                        <td>admin</td>
                                    </tr>
                                </tbody>
                            </table>


                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

Login.layout = (page) => <AuthLayout children={page} title="Welcome" />;

export default Login;
