import NavBar from "./NavBar";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { getAuth, sendPasswordResetEmail } from "firebase/auth";

function ForgotPassword()
{
	
	const nav = useNavigate();

	const [un, setUn] = useState("");
	const [msg, setMsg] = useState("");

	const hUn = (event) => {
		setUn(event.target.value);
	}

	const pre = (event) => {
		event.preventDefault();
			const auth = getAuth();
			sendPasswordResetEmail(auth, un)
			.then(res => {
				alert("A password reset email has been sent to your registered email. Please check");
				nav("/login");
			})
			.catch( err =>  { 
				alert(err.message); 
			})
	}

	return(
		<>
			<center>
				<NavBar/>
				<h1> Forgot Password Page </h1>
				<form onSubmit={pre}>
				<input type="email" placeholder="enter registered email" onChange={hUn}/>
				<br/><br/>
				<input type="submit" value="Reset"/>
				<br/><br/>
				</form>
				<h1> { msg } </h1>
			</center>
		</>
	);
}

export default ForgotPassword;
