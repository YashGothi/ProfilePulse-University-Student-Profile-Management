import logo from './logo.svg';
import './App.css';
import NavBar from './NavBar';
import Login from './Login';
import SignUp from './SignUp';
import Home from './Home';
import Create from './Create';
import ChangePassword from './ChangePassword';
import ForgotPassword from './ForgotPassword';
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

function App() {
  return (
    <div className="App">
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<Home/> }/>
				<Route path="/login" element={<Login/> }/>
				<Route path="/signup" element={<SignUp/> }/>
				<Route path="/create" element={<Create/> }/>
				<Route path="*" element={<Navigate to="/"/> }/>
				<Route path="/cp" element={<ChangePassword/>} />
				<Route path="/fp" element={<ForgotPassword/>} />
			</Routes>
		</BrowserRouter>
    </div>
  );
}

export default App;
