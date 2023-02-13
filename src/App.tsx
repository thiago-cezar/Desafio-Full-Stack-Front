import { Toaster } from "react-hot-toast";
import { AuthProvider } from "./providers/context";
import RoutesMain from "./routes/routes";
import Global from "./style/globalStyle";

function App() {
  return (
    <AuthProvider>
      <Global />
      <Toaster />
      <RoutesMain />
    </AuthProvider>
  );
}

export default App;
