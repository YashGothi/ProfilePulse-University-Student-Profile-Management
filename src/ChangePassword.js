import NavBar from './NavBar';
import { useState } from "react";
import { getAuth, updatePassword } from "firebase/auth";
import { useNavigate } from "react-router-dom";

function ChangePassword() {
    const nav = useNavigate();
    const auth = getAuth();
    
    const [pw1, setPw1] = useState("");
    const [pw2, setPw2] = useState("");
    const [msg, setMsg] = useState("");
    
    const hPw1 = (event) => {
        setPw1(event.target.value);
    }

    const hPw2 = (event) => {
        setPw2(event.target.value);
    }

    const changePassword = (event) => {
        event.preventDefault();
        // Check if either password field is blank
        if (!pw1 || !pw2) {
            alert("Both password fields must be filled out.");
            setPw1("");
            setPw2("");
            return;
        }
        if (pw1 === pw2) {
            const user = auth.currentUser;
            if (user) {
                updatePassword(user, pw1)
                .then(() => {
                    alert("Password has been changed successfully.");
                    nav("/");
                })
                .catch(err => {
           
                    setMsg(err.message);
                    // Clear the password fields if there is an error
                    setPw1("");
                    setPw2("");
                });
            } else {
                alert("No user is signed in.");
                // Clear the password fields if no user is signed in
                setPw1("");
                setPw2("");
            }
        } else {
            
            alert("Passwords did not match. Please try again.");

            // Clear the password fields if the passwords do not match
            setPw1("");
            setPw2("");
        }
    }

    return(
        <>
            <center>
                <NavBar/>
                <h1> Change Password </h1>
                <form onSubmit={changePassword}>
                    <input type="password" placeholder="enter new password"
                    value={pw1} onChange={hPw1}/> <br/><br/>
                    <input type="password" placeholder="confirm new password"
                    value={pw2} onChange={hPw2} />  <br/><br/>
                    <input type="submit" value="Change" /> <br/><br/>
                </form>
                <h1> { msg } </h1>
            </center>
        </>
    );
}

export default ChangePassword;
