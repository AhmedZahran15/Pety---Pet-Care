import { Toaster } from "react-hot-toast";
import { AuthProvider } from "./contexts/AuthContext";
import MainRouter from "./routes/MainRouter";

function App() {
  return (
    <AuthProvider>
      <Toaster position="top-right" reverseOrder={false} />
      <MainRouter />
    </AuthProvider>
  );
}

export default App;
