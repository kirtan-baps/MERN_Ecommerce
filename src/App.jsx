import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Policy from "./pages/Policy";
import PageNotFound from "./pages/PageNotFound";
import Register from "./pages/Register";
import Login from "./pages/Login";
import Dashboard from "./pages/user/Dashboard";
import PrivateRoute from "./components/routes/Private";


function App() {
  return (
    < >
      <Routes>

        <Route path="/" element={<HomePage />} />

        <Route path="/dashboard" element={<PrivateRoute />} >
          <Route path="" element={<Dashboard />} />
        </Route>

        {/* <Route path="/dashboard" element={<Dashboard />} /> */}
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/policy" element={<Policy />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />

        {/* The `<Route path="/*" element={<PageNotFound />} />` is a catch-all route that matches any path that
          hasn't been matched by the previous routes. It is typically used as a fallback route to display a
          "Page Not Found" component when the user navigates to a non-existent route.   */}

        {/* <Route path="/category" element={<Category />} /> */}
        < Route path="/*" element={<PageNotFound />} />
      </Routes>
    </>
  );
}

export default App;
