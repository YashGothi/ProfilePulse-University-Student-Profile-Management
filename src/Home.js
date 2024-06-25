import NavBar from "./NavBar";
import { useNavigate } from "react-router-dom";
import {useEffect, useState } from "react";
import { getAuth, signOut } from "firebase/auth";
import db from "./fb";
import { get, ref, child, remove } from "firebase/database";


function Home()
{
	const nav = useNavigate();
	const [user, setUser] = useState("");
	useEffect(() => {
		let u = localStorage.getItem("un");
		if (u == null)
		{
			nav("/login");
		}
		else
		{
			setUser(u);
		}
	});

	const lo = (event) => {
		event.preventDefault();
		const auth = getAuth();
		localStorage.clear();
		signOut(auth)
		.then(res => {
			nav("/login")
		})
		.catch(err => console.log(err.message))
	}

	const [info, setInfo] = useState([]);
	
useEffect(()=>{
	const dbref = ref(db);
	get(child(dbref, "student/"))
	.then((snapshot) => {
		if (snapshot.exists() ){
			setInfo([]);
			console.log(snapshot.val());
			const data = snapshot.val()
      			if (data !== null) {
        	Object.values(data).map((da) => {
          			setInfo((oldArray) => [...oldArray, da]);
        	});
      			}
  
	}
	else
	{
		console.log("no data");
	}
	})

},[])

	const delStu = (rno) => {
		remove(ref(db, "student/" + rno))
		.then(() => {
			alert(rno + "removed");
			window.location.reload();
		})
		.catch( (err) => console.log(err))
	}


	return(
	<>
	<NavBar/>
	<center>
		<h1> Home Page </h1>
		<h2> Welcome {user} </h2>
		<table border="4" style={{ width:'70%'}}>
		<tr>
			<th> Rno </th>
			<th> Name </th>
			<th> Marks </th>
			<th> Delete </th>
		</tr>
		{
			info.map( (e =>
				<tr style={{"text-align":"center"}}>
					<td> { e.rno } </td>
					<td> { e.name } </td>
					<td> { e.marks} </td>
					<td> <button onClick = {() => { if 					(window.confirm('are you sure')) delStu(e.rno)}}> Delete </button> </td>
				</tr>
		))}
			
		</table>
		<br/>
		<input type="submit" value="Logout" onClick={lo}/>	
	</center>
	</>
);
}

export default Home;