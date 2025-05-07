import { createFileRoute, useNavigate } from '@tanstack/react-router'
import { useState } from 'react';
import { IoMdEyeOff, IoMdEye } from "react-icons/io";
import { AppwriteException } from 'appwrite';

import { AuthedGuard } from '../../utils/guard';

import { useUser } from '../../context/user';

export const Route = createFileRoute('/(auth)/login')({
  component: Login,
  beforeLoad:  async() => AuthedGuard(),
});

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setshowPassword] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const { login } = useUser();
  const navigate = useNavigate();

  async function HandleLogin(e: React.FormEvent) {
    e.preventDefault();
    try {
      await login(email, password);
      throw navigate({to: '/'});
    } catch (err) {
      if (err instanceof AppwriteException) {
        setError(err.message)
      }
    }
  };

  
  return (
    <div className='flex flex-col w-full items-center pt-10 '>
  
      {error && <p className="text-red-500">{error}</p>}
      <form className='flex mx-auto flex-col mt-13  items-center' onSubmit={HandleLogin}>

        <span className='input-label mt-1 mb-1 ml-1 mr-auto'>Email</span>
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

        <span className='input-label mb-1 ml-1 mr-auto'>Password</span>
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
            onChange={e => setPassword(e.target.value)}
            value={password}
          />
          <span className='text-gray-500/25 cursor-pointer ' onClick={()=>setshowPassword(!showPassword)}>
            {showPassword ? <IoMdEyeOff size={20} /> : <IoMdEye size={20} />}
          </span>
        </label>
        <p className="validator-hint hidden">
          Must be more than 8 characters, including
          <br />At least one number <br />At least one lowercase letter <br />At least one uppercase letter
        </p>

        <div className='mt-8 flex flex-col gap-4'>
          <button className=" btn min-w-[322px] btn-outline btn-accent w-full" type="submit" > Login </button>
          <p >Don't have an account yet? <a href='/signup' className=' link-primary'>Sign up</a></p>
        </div>
      </form>
      <div className="flex flex-col gap-2 mt-10">
        
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


