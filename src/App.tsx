import toast, { Toaster } from "react-hot-toast";
import "./App.css";
import {
  QueryCache,
  QueryClient,
  QueryClientProvider,
} from "@tanstack/react-query";
import { Route, Routes } from "react-router";
import { HomePage } from "./Pages/HomePage";
import ViewAllCards from "./Pages/ViewAllCards";
import NavBar from "./Navbar";
import { Details } from "./Pages/Details";
import { Inventory } from "./Pages/Inventory";
import { MyDecks } from "./Pages/MyDecks";
import { InventoryDetails } from "./Pages/InventoryDetails";
import { DeckDetails } from "./Pages/DeckDetails";
import { AccountSettings } from "./Pages/AccountSettings";
import SetDetails from "./Pages/SetDetails";
import MissingPage from "./Pages/MissingPage";

const queryClient = new QueryClient({
  queryCache: new QueryCache({
    onError: (error, query) => {
      if (query.state.data !== undefined) {
        toast.error(`Something went wrong: ${error.message}`);
      }
    },
  }),
});

function App() {
  return (
    <>
      <Toaster />
      <QueryClientProvider client={queryClient}>
        <NavBar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/cards" element={<ViewAllCards />} />
          <Route path="/Details/:id" element={<Details />} />
          <Route path="/inventory/" element={<Inventory />} />
          <Route path="/MyDecks" element={<MyDecks />} />
          <Route path="/inventory/Details/:id" element={<InventoryDetails />} />
          <Route path="/MyDecks/Details/:id" element={<DeckDetails />} />
          <Route path="/AccountSettings" element={<AccountSettings />} />
          <Route path="/set/:id" element={<SetDetails />} />
          <Route path="/404" element={<MissingPage />} />
        </Routes>
      </QueryClientProvider>
    </>
  );
}

export default App;
