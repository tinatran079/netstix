import { BrowserRouter, Routes, Route} from 'react-router-dom'
import SignUpForm from './SignUpForm';
import LoginForm from './LoginForm';
import { AuthProvider, useToken } from './auth';
import MainPage from './MainPage';
import Nav from './Nav';
import Logout from './Logout';


function App() {
  return (
    <BrowserRouter>
    <Nav />
    <AuthProvider>
      <div className="container">
        <Routes>
            <Route path="/" element={<MainPage/>}/>
            <Route path="/signup" element={<SignUpForm/>}/>
            <Route path="/login" element={<LoginForm/>}/>
            <Route path="/logout" element={<Logout/>}/>
        </Routes>
      </div>
      </AuthProvider>
    </BrowserRouter>
  );
}

export default App;
