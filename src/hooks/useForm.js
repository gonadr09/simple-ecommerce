import { useContext } from "react";
import { useNavigate } from 'react-router-dom'

const useForm = (context) => {
    const { userForm, setUserForm, login } = useContext(context);

    let navigate = useNavigate();
    
    const handleChange = (e) => {
      const { name, value } = e.target;
      setUserForm({ ...userForm, [name]: value });
    };
    
    const handleSubmit = (e) => {
      e.preventDefault();
      const userData = {
        user: userForm.username,
        token: Date.now(),
        isAuth: true
      }

      login(userData)      
      navigate("/", {replace: true}); 
    };

    return {userForm, handleChange, handleSubmit}
}

export default useForm