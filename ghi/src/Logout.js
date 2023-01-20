import { useToken } from './auth';
import { useNavigate } from 'react-router-dom';

function Logout(){
    const [token, setToken ,logout] = useToken();
    const navigate = useNavigate();
    logout(token);
    navigate('/');
}

export default Logout;
