import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { login } from "../Store/AuthSlice";
import { useDispatch } from "react-redux";

export default function Loginpage(){
    const [Username, setUsername] = useState('');
  const [Password, setPassword] = useState('');
 
  const navigate= useNavigate()
  const dispatch = useDispatch()

 
  async function handleSubmit(e){
    e.preventDefault();  

    try {
     
      const response = await fetch('http://localhost:8080/api/v1/users/login', {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
        },
      
        body: JSON.stringify({         
          password: Password,
          username: Username
        })
      });

      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }else{

      const data = await response.json();
        dispatch(login(data))
      console.log('Success:');
      navigate('/')
      }
    } catch (error) {
      console.log('Failed to fetch data:', error);  
    }
  }
    return(
      <>
        <div className="min-h-screen grid grid-cols-2 gap-0 m-2 w-full col">
        <div className="w-full flex justify-center items-center bg-slate-600">
          <b>TODO: Cart Picture</b>
        </div>
        
        <div>
          <div className="flex justify-center">
            <div className="m-20 h-auto">
              <div className="text-4xl mb-7">Login to QuickCart</div>
              <p>Enter your details below</p>
              
              <form onSubmit={handleSubmit}>
                <div className="text-2xl my-4">
                  <input
                    className="p-2 rounded-md shadow-md"
                    type="text"
                    placeholder="Username"
                    value={Username}
                    onChange={(e) => setUsername(e.target.value)}
                    autoComplete="username"  // Added autocomplete for username
                  />
                </div>
                
                
                
                <div className="my-4">
                  <input
                    className="p-2 text-2xl rounded-md shadow-md"
                    type="password"
                    placeholder="Password"
                    value={Password}
                    onChange={(e) => setPassword(e.target.value)}
                    autoComplete="current-password"  // Added autocomplete for password
                  />
                </div>
                
                <button
                  type="submit"
                  className="p-2 rounded-md shadow-md bg-red-600"
                >
                 Login
                </button>
              </form>
            </div>
          </div>
        </div>
       
      </div>
     
       </>
    )
}