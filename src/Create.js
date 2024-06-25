import NavBar from "./NavBar";
import { useState } from "react";
import db from "./fb";
import { get, child, set, ref } from "firebase/database";

function Create()
{
	const [rno, setRno] = useState("");
	const [name, setName] = useState("");
	const [marks, setMarks] = useState("");
	
	const hRno = (event) => { setRno(event.target.value); }
	const hName = (event) => { setName(event.target.value); }
	const hMarks = (event) => { setMarks(event.target.value); }
	
	const save = (event) => {
		event.preventDefault();
		let msg = "rno = " + rno + " name = " + name + " marks = " + marks;
		const r1 = ref(db);

		get( child(r1, "student/" + rno))
		.then((snapshot) => {
			if (snapshot.exists() )
			{
				if(rno == "")
				{
					alert("input rno");
				}
				else{

				alert(rno + " already exists ");
				setRno("");
				setName("");
				setMarks("");
			}}
			else
			{
				const r2 = ref(db, "/student/" +rno);
				let data = {rno, name, marks};
				set(r2, data)
				alert(rno + " created ");
				setRno("");
				setName("");
				setMarks("");
			}
		})
		.catch( err => console.log(err))
	}

	return(
		<>
			<NavBar/>
			<center>
				
				<h1> Enter Student Info </h1>
				<form onSubmit={save}>
				<input type="number" placeholder="enter rno"
				onChange={hRno} value={rno} />
				<br/><br/>
				<input type="text" placeholder="enter name"
				onChange={hName} value={name} />
				<br/><br/>  
				<input type="number" placeholder="enter marks"
				onChange={hMarks} value={marks} />
				<br/><br/>
				<input type="submit" value="Save" />
				</form>
			</center>
		</>
	);
}

export default Create;
                                                                                  
