import { BrowserRouter, Routes, Route } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "react-hot-toast";

import Homepage from "./pages/Homepage";
import SquashPage from "./pages/SquashPage";
import TravelsPage from "./pages/TravelsPage";
import ContactPage from "./pages/ContactPage";
import PageNotFound from "./pages/PageNotFound";
import CountryPage from "./pages/CountryPage";
import AddEditCountryPage from "./pages/AddEditCountryPage";
import LoginPage from "./pages/LoginPage";
import ProtectedRoute from "./components/ui/ProtectedRoute";
import ScrollToTop from "./components/ui/ScrollToTop";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 0,
    },
  },
});

function App() {
  if (window.innerWidth <= 1200) {
    alert(
      "Our website can be best experienced on the wide screen of your computer. But if you want to keep using it on your mobile device, we recommed turning the LIGHT mode on"
    );
  }
  return (
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="squash" element={<SquashPage />} />
          <Route path="travels" element={<TravelsPage />} />
          <Route path="travels/:countryId" element={<CountryPage />} />
          <Route
            path="add"
            element={
              <ProtectedRoute>
                <AddEditCountryPage action="add" />
              </ProtectedRoute>
            }
          />
          <Route
            path="edit/:countryId"
            element={
              <ProtectedRoute>
                <AddEditCountryPage action="edit" />
              </ProtectedRoute>
            }
          />
          <Route path="contact" element={<ContactPage />} />
          <Route path="login" element={<LoginPage />} />
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </BrowserRouter>
      <Toaster
        position="top-center"
        gutter={12}
        containerStyle={{ margin: "24px" }}
        toastOptions={{
          success: {
            duration: 3000,
          },
          error: {
            duration: 5000,
          },
          style: {
            fontSize: "16px",
            maxWidth: "500px",
            padding: "8px 12px",
            backgroundColor: "white",
            color: "var(--color-brand-5)",
          },
        }}
      />
    </QueryClientProvider>
  );
}

export default App;
