import { Suspense, lazy } from "react";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { AuthenticProvider } from "./context/AuthenticContext";
import ProtectedRoutes from "./services/ProtectedRoutes";
import { INDEX, SIGNIN, SIGNUP } from "./utils/routeNames";
import SpinnerFullPage from "./components/loader/SpinnerFullPage";

const Home = lazy(() => import("./pages/home/Home"));
const SignIn = lazy(() => import("./pages/signin/SignIn"));
const SignUp = lazy(() => import("./pages/signup/SignUp"));

function App() {
  const router = createBrowserRouter([
    // { path: "/app", element: <Home /> },
    { path: SIGNIN, element: <SignIn /> },
    { path: SIGNUP, element: <SignUp /> },
    {
      path: INDEX,
      element: (
        <ProtectedRoutes>
          <Home />
        </ProtectedRoutes>
      ),
    },
  ]);
  return (
    <AuthenticProvider>
      <Suspense fallback={<SpinnerFullPage />}>
        <RouterProvider router={router} />
      </Suspense>
    </AuthenticProvider>
  );
}

export default App;
