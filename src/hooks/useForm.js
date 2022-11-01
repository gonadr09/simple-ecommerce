import { useContext } from "react";
import { useNavigate } from 'react-router-dom'
import { TYPES } from '../reducers/authReducer'

const useForm = (context) => {
    const { userForm, setUserForm, dispatch } = useContext(context);

    let navigate = useNavigate();
    
    const handleChange = (e) => {
      const { name, value } = e.target;
      setUserForm({ ...userForm, [name]: value });
    };
    
    const handleSubmit = (e) => {
      e.preventDefault();
      const userLogged = {
        user: userForm.username,
        token: Date.now(),
        isAuth: true
      }

      dispatch({type: TYPES.LOGIN, payload: userLogged})
      // setUserAuth(userLogged)
      
      navigate("/", {replace: true}); 
    };

    return {userForm, handleChange, handleSubmit}
}

export default useForm