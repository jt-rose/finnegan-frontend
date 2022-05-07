import "./App.css";
import Navbar from "./components/Navbar";
import { QueryClient, QueryClientProvider } from "react-query";
import Login from "./pages/Login";
import { Routes, Route } from "react-router-dom";

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Navbar />
      <Routes>
        <Route path="/" element={<Login />} />
      </Routes>
    </QueryClientProvider>
  );
}

export default App;
