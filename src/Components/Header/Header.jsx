import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";  

export default function Header() {

  const authstatus = useSelector((state) => state.auth.status);
  const navigate = useNavigate();
  
  // Navigation bar list
  const headlist = [
    {
      name: 'Home',
      slug: '/',
      status: true
    },
    {
      name: 'Contact',
      slug: '/contact',
      status: true
    },
    
    {
      name: 'Sign UP',
      slug: '/signup',
      status: !authstatus
    },
    {
      name: 'Log In',
      slug: '/login',
      status: !authstatus
    }
  ];

  return (
    <header>
      <nav className="flex justify-between items-center p-4 shadow-lg">
   
        {/* Logo */}
        <div className=" text-3xl font-bold">QuickCart</div>
    
        <ul className="flex space-x-8">
          {
            headlist.map((item) => (
              item.status && (
                <li key={item.name}>
                  <button className="text-lg rounded-md p-2 hover:bg-slate-500"
                    onClick={() => { navigate(item.slug); }}> 
                    {item.name}
                  </button>
                </li>
              )
            ))
          }
        </ul>
    
      
        <div className="relative">
          <input type="text" placeholder="What are you looking for?" className="border rounded-full px-4 py-1 w-64" />
          <button className="absolute p-1 right-2 top-1/2 transform -translate-y-1/2 text-lg font-bold">Q</button>
        </div>
      </nav>
    </header>
  );
}
