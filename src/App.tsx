import "./App.css";
import Navbar from "./components/Navbar";
import { QueryClient, QueryClientProvider } from "react-query";
import { Login } from "@mui/icons-material";

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <div>
        <Navbar />
        <Login />
      </div>
    </QueryClientProvider>
  );
}

export default App;
