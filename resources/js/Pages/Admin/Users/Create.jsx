import { Link, router, usePage } from "@inertiajs/react";
import { useState } from "react";
import toast from "react-hot-toast";
import { route } from "ziggy-js";

function Create() {
    const { csrf_token } = usePage().props;
    const [values, setValues] = useState({
        name: "",
        email: "",
        password: "",
    });

    function handleSubmit(e) {
        e.preventDefault();
        values._token = csrf_token;
        router.post(route("admin.user.save"), values, {
            onError: function (rest) {
                Object.values(rest).map((error) => toast.error(error));
            },
            onSuccess: (success) => {
                console.log(success);
            },
        });
    }

    function handleChange(e) {
        const key = e.target.name;
        const value = e.target.value;

        setValues((values) => ({
            ...values,
            [key]: value,
        }));
    }

    return (
        <div>
            <div className="d-flex align-items-center justify-content-between mb-3">
                <h3>Add New User</h3>
                <Link
                    href={route("admin.user.index")}
                    className="btn btn-primary"
                >
                    User List
                </Link>
            </div>

            <div className="card">
                <div className="card-body">
                    <form onSubmit={handleSubmit}>
                        <div className="row">
                            <div className="col-lg-4">
                                <div className="form-group">
                                    <label
                                        htmlFor="name"
                                        className="form-label"
                                    >
                                        Name
                                    </label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        id="name"
                                        name="name"
                                        onChange={handleChange}
                                    />
                                </div>
                            </div>
                            <div className="col-lg-4">
                                <div className="form-group">
                                    <label
                                        htmlFor="email"
                                        className="form-label"
                                    >
                                        Email
                                    </label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        id="email"
                                        name="email"
                                        onChange={handleChange}
                                    />
                                </div>
                            </div>
                            <div className="col-lg-4">
                                <div className="form-group">
                                    <label
                                        htmlFor="password"
                                        className="form-label"
                                    >
                                        Password
                                    </label>
                                    <input
                                        type="password"
                                        className="form-control"
                                        id="password"
                                        name="password"
                                        onChange={handleChange}
                                    />
                                </div>
                            </div>
                        </div>

                        <div className="d-flex justify-content-end mt-3">
                            <button type="submit" className="btn">
                                Submit
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default Create;
