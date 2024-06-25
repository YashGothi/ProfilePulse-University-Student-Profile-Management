import NavBar from "./NavBar";
import { useState, useEffect } from "react";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { useNavigate } from "react-router-dom";

function SignUp() {
    const nav = useNavigate();
    useEffect(() => {
        if (localStorage.getItem("un") != null)
            nav("/");
    })

    const [un, setUn] = useState("");
    const [pw1, setPw1] = useState("");
    const [pw2, setPw2] = useState("");
    const [msg, setMsg] = useState("");

    const hUn = (event) => {
        setUn(event.target.value);
    }

    const hPw1 = (event) => {
        setPw1(event.target.value);
    }

    const hPw2 = (event) => {
        setPw2(event.target.value);
    }

    const reg = (event) => {
        event.preventDefault();
        // Check if any of the fields are blank
        if (!un || !pw1 || !pw2) {
            alert("All fields must be filled out.");
            return;
        }
        if (pw1 === pw2) {
            const auth = getAuth();
            createUserWithEmailAndPassword(auth, un, pw1)
                .then(res => {
                    nav("/login");
                })
                .catch(err => {
                    // Check if the error code is for an existing user
                    if (err.code === "auth/email-already-in-use") {
                        setMsg("User already exists. Please log in.");
                    } else {
                        // Handle other errors
                        setMsg(err.message);
                    }
                });
        } else {
            alert("Passwords did not match.");
       
            // Clear the password fields if the passwords do not match
            setPw1("");
            setPw2("");
        }
    }

    return (
        <>
            <center>
                <NavBar />
                <h1> Sign Up Page </h1>
                <form onSubmit={reg}>
                    <input type="email" placeholder="enter email" value={un} onChange={hUn} />
                    <br /><br />
                    <input type="password" placeholder="enter password" value={pw1} onChange={hPw1} />
                    <br /><br />
                    <input type="password" placeholder="confirm password" value={pw2} onChange={hPw2} />
                    <br /><br />
                    <input type="submit" value="Register" />
                    <br /><br />
                </form>
                <h1> {msg} </h1>
            </center>
        </>
    );
}

export default SignUp;
