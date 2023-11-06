import { Input } from "./Input";

function Login() {
  return (
    <div className="flex h-full flex-col items-center justify-center">
      <div className="flex w-full flex-col gap-8 p-40">
        <h1 className=" text-6xl font-medium">Sign in</h1>
        <Input text="Email" type="email" placeholder="Email" />
        <div className="relative">
                    <input
                        type="text"
                        placeholder="Username"
                        className="pl-10 pr-4 py-2 w-full rounded-lg border-2 border-gray-300 focus:outline-none focus:border-blue-500"
                    />
                    <div className="absolute inset-y-0 left-0 flex items-center pl-3">
                        
                    </div>
                </div>
      </div>
    </div>
  );
}

export default Login;
//<h1 class="text-5xl p-4 text-center font-bold bg-gradient-to-r from-purple-600 via-pink-600 to-blue-600 bg-clip-text text-transparent">A Guide to Adding Gradients with Tailwind CSS</h1>