import { BrowserRouter, Routes, Route} from 'react-router-dom'
import SignUpForm from './SignUpForm';
import LoginForm from './LoginForm';
import { AuthProvider } from './auth';



function App() {
  return (
    <BrowserRouter>
    <AuthProvider>
      <div className="container">
        <Routes>
          <Route path="SignUp">
            <Route path="new" element={<SignUpForm/>}/>
          </Route>
          <Route path="Login">
            <Route path="new" element={<LoginForm/>}/>
          </Route>
        </Routes>
      </div>
      </AuthProvider>
    </BrowserRouter>
  );
}

export default App;

