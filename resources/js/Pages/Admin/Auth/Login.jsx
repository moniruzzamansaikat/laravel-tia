import { Head, router, usePage } from "@inertiajs/react";
import { useState } from "react";

const Login = () => {
    const props = usePage().props;
    const [values, setValues] = useState({
        username: "",
        password: "",
    });

    function handleChange(e) {
        const key   = e.target.name;
        const value = e.target.value;
        
        setValues((values) => ({
            ...values,
            [key]: value,
        }));
    }

    function handleSubmit(e) {
        e.preventDefault();
        values._token = props.csrf_token;
        router.post('/admin/login', values)
      }
    
    return (
        <div>
            <Head title="Admin Login" />
            <h1>Admin Login</h1>

            <form onSubmit={handleSubmit}>
                <input value={values.username} onChange={handleChange} className="form-control" name="username" />
                <input value={values.password} type="password" onChange={handleChange} className="form-control" name="password" />
                <button className="btn btn-sm btn-primary" type="submit">Submit</button>
            </form>
        </div>
    );
};

export default Login;
