import { useState } from "react";

export default function SignUp() {
  
  const [Username, setUsername] = useState('');
  const [Password, setPassword] = useState('');
  const [email, setEmail] = useState('');

 
  async function handleSubmit(e){
    e.preventDefault();  

    try {
     
      const response = await fetch('http://localhost:8080/api/v1/users/register', {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
        },
      
        body: JSON.stringify({
          email: email,          
          password: Password,
          role: "ADMIN",
          username: Username
        })
      });

      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }else{

      const data = await response.json();
      console.log('Success:', data);
      }
    } catch (error) {
      console.log('Failed to fetch data:', error);  
    }
  }

  return (
    <div className="min-h-screen grid grid-cols-2 gap-0 m-2 w-full col">
      <div className="w-full flex justify-center items-center bg-slate-600">
        <b>TODO: Cart Picture</b>
      </div>
      
      <div>
        <div className="flex justify-center">
          <div className="m-20 h-auto">
            <div className="text-4xl mb-7">Create an account</div>
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
              
              <div className="text-2xl my-4">
                <input
                  className="p-2 rounded-md shadow-md"
                  type="email"
                  placeholder="Email "
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  autoComplete="email"   
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
                Create Account
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
