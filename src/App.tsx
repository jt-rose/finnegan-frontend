import "./App.css";
import Navbar from "./components/Navbar";
import { QueryClient, QueryClientProvider } from "react-query";
import Index from "./pages/Index";

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <div>
        <Navbar />
        <Index />
      </div>
    </QueryClientProvider>
  );
}

export default App;
