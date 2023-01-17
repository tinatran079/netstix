import { BrowserRouter, Routes, Route } from 'react-router-dom'
import SignupPage from './signup'
import LoginPage from './login';


function App() {
  return (
    <BrowserRouter>
      <div className="container">
        <Routes>
          <Route path="SignUp">
            <Route path="new" element={<SignupPage/>}/>
          </Route>
          <Route path="Login">
            <Route path="new" element={<LoginPage/>}/>
          </Route>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;

