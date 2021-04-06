import { useState } from "react";
import { useHistory } from "react-router-dom";
import axios from "axios";
import { useSnackbar } from "notistack";

function Submit() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const history = useHistory();

  const { enqueueSnackbar } = useSnackbar();

  const handleFirstNameChange = (e) => {
    e.preventDefault();
    setFirstName(e.target.value);
    console.log(email);
  };

  const handleLastNameChange = (e) => {
    e.preventDefault();
    setLastName(e.target.value);
    console.log(email);
  };

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
    if (!firstName || !lastName || !email || !password) {
      enqueueSnackbar("Please fill in all the fields.", {
        variant: "error",
      });
      return;
    }

    let EMAIL_REGEXP = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    console.log(EMAIL_REGEXP.test(email));
    if (!EMAIL_REGEXP.test(email)) {
      enqueueSnackbar("Invalid Email.", {
        variant: "error",
      });
      return;
    }

    const user = {
      name: firstName + " " + lastName,
      email: email,
      password: password,
    };
    console.log(user);
    axios
      .post("http://localhost:5000/users/register", user)
      .then((response) => {
        console.log("Response");
        console.log(response.data);
        if (response.data.success) {
          enqueueSnackbar("Registered Successfully.", {
            variant: "success",
          });
          history.push("/login");
        } else {
          enqueueSnackbar(response.data.msg, {
            variant: "error",
          });
        }
      });
  };

  return {
    handleFirstNameChange,
    handleLastNameChange,
    handleEmailChange,
    handlePasswordChange,
    handleSubmit,
  };
}

export default Submit;
