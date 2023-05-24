import { useState } from "react";
import { Box, Button, Container, Typography } from "@mui/material";
import logo from "../assets/images/logo-whats-app.png";
import Image from "next/image";
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { auth, provider } from "../config/firebase";
import LoadingBackdrop from "../components/LoadingBackdrop";

const Login = () => {
  const [loading, setLoading] = useState(false);

  const handleLogin = () => {
    setLoading(true);
    signInWithPopup(auth, provider)
      .then((result) => {
        const credential = GoogleAuthProvider.credentialFromResult(result);
        const token = credential?.accessToken;
        const user = result.user;
        // console.log("check user: ", user);
        setLoading(false);
      })
      .catch((error) => {
        console.log("error sign with google: ", error);
        setLoading(false);
      });
  };

  return (
    <Container maxWidth="xs">
      <LoadingBackdrop open={loading} onClose={() => setLoading(false)} />
      <Box sx={{ textAlign: "center", mt: 2 }}>
        <Image
          src={logo}
          alt="Logo..."
          style={{
            maxWidth: "100%",
            height: "auto",
          }}
          priority
        />
      </Box>

      <Button
        variant="contained"
        color="success"
        onClick={handleLogin}
        fullWidth
      >
        SIGN IN WITH GOOGLE
      </Button>
    </Container>
  );
};

export default Login;
