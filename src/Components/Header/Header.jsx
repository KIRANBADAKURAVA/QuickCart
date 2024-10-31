import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";  
import {FaCartShopping,CiSearch ,IoHeart,CgProfile, IoLogOut} from '../Icons/Icons'
import { useDispatch } from "react-redux";
import { logout } from "../../Store/AuthSlice";



export default function Header() {

  const authstatus = useSelector((state) => state.auth.status);
  const navigate = useNavigate();
  const dispatch = useDispatch();

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

  function handleclick(e){
   
    e.preventDefault(); 
    dispatch(logout())


  }

  return (
    <header className="w-screen">
      <nav className="flex  justify-between  items-center p-4 shadow-lg">
   
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
    
          <div className="flex items-center space-x-2"  >
        <div className="relative ">
          <input type="text" placeholder="What are you looking for?" className="border rounded-full px-4 py-1 w-64" />
          <button className="absolute p-1 right-2 top-1/2 transform -translate-y-1/2 ">
          <CiSearch />
          </button>
         
        </div>
        {
          authstatus && (
           <> <FaCartShopping className="text-xl" /> 
              <IoHeart className="text-xl" />
              <CgProfile className="text-xl" />
              <IoLogOut className="text-xl" 
              onClick={handleclick}/>

        </>
        )
          }
        
        </div>
       
        
      </nav>
    </header>
  );
}
