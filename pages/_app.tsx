import "@/styles/globals.css";
import type { AppProps } from "next/app";
import theme from "../styles/theme";
import { ThemeProvider } from "@mui/material/styles";
import Login from "./login";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../config/firebase";
import LoadingBackdrop from "@/components/LoadingBackdrop";

export default function App({ Component, pageProps }: AppProps) {
  const router = useRouter();
  const [loggedInUser, setLoggedInUser] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setLoading(true);
      if (user) {
        setLoggedInUser(true);
        setLoading(false);

        console.log("check user from _app: ", user);
      } else {
        setLoggedInUser(false);
        setLoading(false);
      }
    });

    return () => unsubscribe();
  }, []);

  if (loading)
    return <LoadingBackdrop open={loading} onClose={() => setLoading(true)} />;

  if (!loggedInUser) return <Login />;

  return (
    <ThemeProvider theme={theme}>
      <Component {...pageProps} />
    </ThemeProvider>
  );
}
