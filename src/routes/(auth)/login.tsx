import { createFileRoute } from '@tanstack/react-router'
import { useState } from 'react';
import { account, ID } from "../../lib/appwrite";
import { IoMdEyeOff, IoMdEye } from "react-icons/io";

export const Route = createFileRoute('/(auth)/login')({
  component: Login,
})

function Login() {
  const [loggedInUser, setLoggedInUser] = useState(null);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  const [showPassword, setshowPassword] = useState(false);

  async function login(email: string, password: string) {
    try {
      await account.createEmailPasswordSession(email, password);
      setLoggedInUser(await account.get());
      
    } catch (error) {
      console.error('Login error:', error);
      return;
      
    }
  }

  return (
    <div className='flex flex-col w-full items-center pt-6'>

      <div className="navbar bg-base-300 shadow-sm">
        <div className="flex-1">
          <a className="btn btn-ghost text-xl">
          <img className='h-10 ml-4 mr-auto' src='/assets/hitimu-logo.png'/>
          </a>
        </div>
        <div className="flex gap-2">
          <input type="text" placeholder="Search" className="input input-bordered w-24 md:w-auto" />
          <div className="dropdown dropdown-end">
            <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
              <div className="w-10 rounded-full">
                <img
                  alt="Tailwind CSS Navbar component"
                  src="/assets/default-pp.webp" />
              </div>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
              <li>
                <a className="justify-between">
                  Profile
                  <span className="badge">New</span>
                </a>
              </li>
              <li><a>Settings</a></li>
              <li><a>Logout</a></li>
            </ul>
          </div>
        </div>
      </div>
      <p>
        {loggedInUser ? `Logged in as ${loggedInUser.name}` : 'Not logged in'}
      </p>

      <form className='flex flex-col mt-16'>

        {/* email validator */}
        <label className="input validator">
          <svg className="h-[1em] opacity-50" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
            <g
              strokeLinejoin="round"
              strokeLinecap="round"
              strokeWidth="2.5"
              fill="none"
              stroke="currentColor"
            >
              <rect width="20" height="16" x="2" y="4" rx="2"></rect>
              <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path>
            </g>
          </svg>
          <input 
            type="email" 
            placeholder="mail@site.com" 
            required 
            value={email} 
            onChange={e => setEmail(e.target.value)} 
            />
        </label>
        <div className="validator-hint ">Enter valid email address</div>

        <input 
          type="password" 
          placeholder="Password" 
          value={password} 
          onChange={e => setPassword(e.target.value)} 
        />
        <label className="input validator">
          <svg className="h-[1em] opacity-50" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
            <g
              strokeLinejoin="round"
              strokeLinecap="round"
              strokeWidth="2.5"
              fill="none"
              stroke="currentColor"
            >
              <path
                d="M2.586 17.414A2 2 0 0 0 2 18.828V21a1 1 0 0 0 1 1h3a1 1 0 0 0 1-1v-1a1 1 0 0 1 1-1h1a1 1 0 0 0 1-1v-1a1 1 0 0 1 1-1h.172a2 2 0 0 0 1.414-.586l.814-.814a6.5 6.5 0 1 0-4-4z"
              ></path>
              <circle cx="16.5" cy="7.5" r=".5" fill="currentColor"></circle>
            </g>
          </svg>
          <input
            type={showPassword ? 'text' : 'password'}
            required
            placeholder="Password"
            pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}"
            title="Must be more than 8 characters, including number, lowercase letter, uppercase letter"
          />
          <span className='text-gray-500/25 cursor-pointer ' onClick={()=>setshowPassword(!showPassword)}>
            {showPassword ? <IoMdEyeOff size={20} /> : <IoMdEye size={20} />}
          </span>
        </label>
        <p className="validator-hint hidden">
          Must be more than 8 characters, including
          <br />At least one number <br />At least one lowercase letter <br />At least one uppercase letter
        </p>

        <div className='flex justify-around flex-row gap-4 px-4 mt-8'>
          <button className="btn btn-outline btn-accent" type="button" onClick={() => login(email, password)}>
            Login
          </button>

          <button
            className="btn btn-outline btn-accent"
            type="button"
            onClick={async () => {
              await account.create(ID.unique(), email, password, name);
              login(email, password);
            }}
            >
            Register
          </button>

          {/* <button
            className="btn btn-outline btn-accent"
            type="button"
            onClick={async () => {
              await account.deleteSession('current');
              setLoggedInUser(null);
            }}
            >
            Logout
          </button> */}
        </div>
      </form>
      <div className="flex flex-col gap-4 mt-10">
        
        <button className="btn bg-black text-white border-black">
          <svg aria-label="GitHub logo" width="16" height="16" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path fill="white" d="M12,2A10,10 0 0,0 2,12C2,16.42 4.87,20.17 8.84,21.5C9.34,21.58 9.5,21.27 9.5,21C9.5,20.77 9.5,20.14 9.5,19.31C6.73,19.91 6.14,17.97 6.14,17.97C5.68,16.81 5.03,16.5 5.03,16.5C4.12,15.88 5.1,15.9 5.1,15.9C6.1,15.97 6.63,16.93 6.63,16.93C7.5,18.45 8.97,18 9.54,17.76C9.63,17.11 9.89,16.67 10.17,16.42C7.95,16.17 5.62,15.31 5.62,11.5C5.62,10.39 6,9.5 6.65,8.79C6.55,8.54 6.2,7.5 6.75,6.15C6.75,6.15 7.59,5.88 9.5,7.17C10.29,6.95 11.15,6.84 12,6.84C12.85,6.84 13.71,6.95 14.5,7.17C16.41,5.88 17.25,6.15 17.25,6.15C17.8,7.5 17.45,8.54 17.35,8.79C18,9.5 18.38,10.39 18.38,11.5C18.38,15.32 16.04,16.16 13.81,16.41C14.17,16.72 14.5,17.33 14.5,18.26C14.5,19.6 14.5,20.68 14.5,21C14.5,21.27 14.66,21.59 15.17,21.5C19.14,20.16 22,16.42 22,12A10,10 0 0,0 12,2Z"></path></svg>
          Login with GitHub
        </button>
        <div className="divider my-0">OR</div>
        <button className="btn w-full bg-white text-black border-[#e5e5e5]">
          <svg aria-label="Google logo" width="16" height="16" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><g><path d="m0 0H512V512H0" fill="#fff"></path><path fill="#34a853" d="M153 292c30 82 118 95 171 60h62v48A192 192 0 0190 341"></path><path fill="#4285f4" d="m386 400a140 175 0 0053-179H260v74h102q-7 37-38 57"></path><path fill="#fbbc02" d="m90 341a208 200 0 010-171l63 49q-12 37 0 73"></path><path fill="#ea4335" d="m153 219c22-69 116-109 179-50l55-54c-78-75-230-72-297 55"></path></g></svg>
          Login with Google
        </button>
      </div>
    </div>
  );
};


