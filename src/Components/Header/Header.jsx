import { useSelector } from "react-redux";
import { Link } from "react-router-dom";  
export default function Header() {

  const authstatus = useSelector((state) => state.auth.status);
  
  // Navigation bar list
  const headlist = [
    {
      name: 'Home',
      slug: '/',
      status: authstatus
    },
    {
      name: 'Contact',
      slug: '/contact',
      status: true
    },
    {
      name: 'LogIn',
      slug: '/login',
      status: !authstatus
    },
    {
      name: 'Sign UP',
      slug: '/signup',
      status: !authstatus
    }
  ];

  return (
    <header>
      <div className='w-full max-w-7xl mx-auto px-4'>
       hi
      </div>
    </header>
  );
}
