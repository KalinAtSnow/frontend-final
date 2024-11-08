import toast, { Toaster } from "react-hot-toast";
import "./App.css";
import { QueryCache, QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Route, Routes } from "react-router";
import { HomePage } from "./HomePage";

const queryClient = new QueryClient({
  queryCache: new QueryCache({
    onError: (error, query) => {
      if (query.state.data !== undefined) {
        toast.error(`Something went wrong: ${error.message}`)
      }
    },
  }),
})

 function App() {
  return (
    <>
    <Toaster />
    <QueryClientProvider client={queryClient}>
      <Routes>
        <Route path="/" element={<HomePage />} />
      </Routes>
    </QueryClientProvider>
    </>
  );
}

export default App;
