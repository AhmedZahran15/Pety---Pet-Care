import { Toaster } from "react-hot-toast";
import { AuthProvider } from "./contexts/AuthContext";
import MainRouter from "./routes/MainRouter";
import { BecomeAPetyProvider } from "./contexts/BecomeAPetyContext";
import { ReservationProvider } from "./contexts/ReservationContext";

function App() {
  return (
    <AuthProvider>
      <BecomeAPetyProvider>
        <ReservationProvider>
          <Toaster position="top-right" reverseOrder={false} />
          <MainRouter />
        </ReservationProvider>
      </BecomeAPetyProvider>
    </AuthProvider>
  );
}

export default App;
