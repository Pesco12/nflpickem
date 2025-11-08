import Button from '@/components/ui/Button';
import Input from '@/components/ui/Input';
export default function LoginPage() {
  return (
    <div className=" min-h-screen bg-[url('/authback.png')] bg-cover bg-center flex flex-col justify-center items-center">
      <h2 className="text-3xl font-semibold mb-6">NFL Pick 'EM</h2>
      <div className=" bg-dark px-12 py-12 rounded-xl border flex flex-col  border-[#202020fa]">
        <h3 className=" font-semibold text-3xl mb-2"> Welcome Back</h3>
        <p className="opacity-70 font-light mb-8">
          Log in to your NFL PickEm account to start predicting and winning.
        </p>
        <Input
          label="Username"
          id="username"
          type="text"
          placeholder="Enter your username"
          className="mb-6"
        />
        <Input
          label="Password"
          id="password"
          type="password"
          placeholder="Enter your password"
          className="mb-4"
        />
        <div className="w-full flex justify-end mb-8">
          <a href="#" className="text-sm text-gray01 hover:text-primary">
            Forgot Password?
          </a>
        </div>

        <Button label="Log In" />

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
