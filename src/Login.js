import NavBar from "./NavBar";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";

function Login() {
    const nav = useNavigate();
    
    useEffect(() => {
        // Redirect if user is already logged in
        if (localStorage.getItem("un") !== null) {
            nav("/");
        }
    }, [nav]);

    const [un, setUn] = useState("");
    const [pw, setPw] = useState("");
    const [msg, setMsg] = useState("");

    const hUn = (event) => {
        setUn(event.target.value);
    }

    const hPw = (event) => {
        setPw(event.target.value);
    }

    const login = (event) => {
        event.preventDefault();
        if (!un || !pw) {
            // Alert the user if email or password is blank
            alert("Email or password cannot be blank.");
            // Reset the username and password fields
            setUn("");
            setPw("");
            return;
        }
        const auth = getAuth();
        signInWithEmailAndPassword(auth, un, pw)
            .then(() => {
                localStorage.setItem("un", un); // Set username in localStorage on successful login
                nav("/"); // Redirect to home page
            })
            .catch((error) => {
                // Handle login errors here
                if (error.code === "auth/user-not-found" || error.code === "auth/wrong-password") {
                    alert("Invalid username or password. Please try again.");
                } else {
                    alert("An error occurred. Please try again later.");
                }
                // Reset the username and password fields after displaying the error message
                setUn("");
                setPw("");
            });
    }

    return (
        <>
            <center>
                <NavBar />
                <h1> Login Page </h1>
                <form onSubmit={login}>
                    <input type="email" placeholder="enter reg email" value={un} onChange={hUn} />
                    <br /><br />
                    <input type="password" placeholder="enter password" value={pw} onChange={hPw} />
                    <br /><br />
                    <input type="submit" value="Login" />
                    <br /><br />
                </form>
                {msg && <h1> {msg} </h1>} 
            </center>
        </>
    );
}

export default Login;
