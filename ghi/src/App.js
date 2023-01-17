import { BrowserRouter, Routes, Route } from 'react-router-dom'
import SignupPage from './signup'


function App() {
  return (
    <BrowserRouter>
      <div className="container">
        <Routes>
          <Route path="SignUp">
            <Route path="new" element={<SignupPage/>}/>
          </Route>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;

