import { useState } from "react";
import axios from "axios";
import ChangeNavbar from "../../components/Navbar/NavbarLogic";
import { useSnackbar } from "notistack";

function Submit() {
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [error, setError] = useState(0);

  const { change, changeNavbarState } = ChangeNavbar();

  const { enqueueSnackbar, closeSnackbar } = useSnackbar();

  const handleEmailChange = (e) => {
    e.preventDefault();
    setEmail(e.target.value);
    console.log(email);
  };

  const handlePasswordChange = (e) => {
    e.preventDefault();
    setPassword(e.target.value);
    console.log(password);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!email || !password) {
      enqueueSnackbar("Please fill in all the fields.", {
        variant: "error",
      });
      return;
    }

    const user = { email: email, password: password };
    console.log(user);
    axios
      .post("http://localhost:5000/users/authenticate", user)
      .then((response) => {
        console.log("Response");
        console.log(response.data);
        if (!response.data.success) {
          enqueueSnackbar(response.data.msg, {
            variant: "error",
          });
        } else {
          enqueueSnackbar(response.data.msg, {
            variant: "success",
          });
          localStorage.setItem("id_token", response.data.token);
          localStorage.setItem("user", JSON.stringify(response.data.user));
          window.location.href = "/";
          console.log("Change");
          console.log(change);
        }
      });
  };

  return { error, handleEmailChange, handlePasswordChange, handleSubmit };
}

export default Submit;
