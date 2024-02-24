import { Toaster } from "react-hot-toast";
import { AuthProvider } from "./contexts/AuthContext";
import MainRouter from "./routes/MainRouter";
import { BecomeAPetyProvider } from "./contexts/BecomeAPetyContext";

function App() {
  return (
    <AuthProvider>
      <BecomeAPetyProvider>
        <Toaster position="top-right" reverseOrder={false} />
        <MainRouter />
      </BecomeAPetyProvider>
    </AuthProvider>
  );
}

export default App;
