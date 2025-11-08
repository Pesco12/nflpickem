import Button from '@/components/ui/Button';
import Input from '@/components/ui/Input';
import { useState } from 'react';
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';
export default function LoginPage() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [errors, setErrors] = useState({});
  const [loginError, setLoginError] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async e => {
    e.preventDefault();

    setErrors({});
    setLoginError('');

    const newErrors = {};
    if (!username) newErrors.username = 'Username is required';
    if (!password) newErrors.password = 'Password is required';

    // If any missing field, stop here
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    try {
      const res = await fetch('http://localhost:5001/users');
      const users = await res.json();

      const validUser = users.find(
        user => user.username === username && user.password === password
      );

      if (validUser) {
        // Redirect to dashboard
        navigate('/home');
      } else {
        setLoginError('Invalid username or password.');
        toast.error('Invalid username or password.');
      }
    } catch (err) {
      console.error('Error during login:', err);
      setLoginError('An error occurred. Please try again later.');
      toast.error('An error occurred. Please try again later.');
    }
  };
  return (
    <div className=" min-h-screen bg-[url('/authback.png')] bg-cover bg-center flex flex-col justify-center items-center">
      <h2 className="text-3xl font-semibold mb-24 top-12 absolute">
        NFL Pick 'EM
      </h2>
      <div className=" relative inset-0 bg-dark px-12 py-12 rounded-xl border flex flex-col  border-[#202020fa]">
        <img src="/helmet.png" className="absolute -top-28 -right-20" />
        <h3 className=" font-semibold text-3xl mb-2"> Welcome Back</h3>
        <p className="opacity-70 font-light mb-8">
          Log in to your NFL PickEm account to start predicting and winning.
        </p>

        <form
          onSubmit={handleSubmit}
          className=" flex flex-col 
       w-full"
        >
          <Input
            label="Username"
            id="username"
            name="username"
            type="text"
            autoComplete="username"
            placeholder="Enter your username"
            value={username}
            onChange={e => setUsername(e.target.value)}
            error={errors.username}
            className={`mb-6`}
          />

          <Input
            label="Password"
            id="password"
            name="password"
            type="password"
            autoComplete="current-password"
            placeholder="Enter your password"
            value={password}
            onChange={e => setPassword(e.target.value)}
            className="mb-4"
            error={errors.password}
          />
          <div className="w-full flex justify-end mb-8">
            <a href="#" className="text-sm text-gray01 hover:text-primary">
              Forgot Password?
            </a>
          </div>
          <Button label="Log In" />
        </form>
        <div className="w-full flex justify-center mt-8">
          <span className="text-gray01">
            Don't have an account?{' '}
            <a href="#" className="text-primary">
              Sign Up
            </a>
          </span>
        </div>
      </div>
    </div>
  );
}
