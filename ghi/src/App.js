import { BrowserRouter, Routes, Route} from 'react-router-dom'
import SignupPage from './signup'
import LoginForm from './LoginForm';
import { AuthProvider } from './auth';



function App() {
  return (
    <BrowserRouter>
    <AuthProvider>
      <div className="container">
        <Routes>
          <Route path="SignUp">
            <Route path="new" element={<SignupPage/>}/>
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

