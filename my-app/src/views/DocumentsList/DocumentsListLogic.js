import { useState } from "react";
import { useHistory } from "react-router-dom";
import axios from "axios";
import { useSnackbar } from "notistack";

function Submit() {
  const [name, setName] = useState("");
  const [content, setContent] = useState("");
  const [documents, setDocuments] = useState([]);
  const { enqueueSnackbar } = useSnackbar();
  const history = useHistory();

  const handleNameChange = (e) => {
    e.preventDefault();
    setName(e.target.value);
  };

  const handleContentChange = (e) => {
    e.preventDefault();
    setContent(e.target.value);
  };

  const documentSelected = (obj) => {
    console.log(obj);
    localStorage.setItem("document", JSON.stringify(obj));
    history.push("/document");
  };

  const getDocuments = () => {
    let obj = {
      token: localStorage.getItem("id_token"),
    };
    axios
      .get("http://localhost:5000/documents/", { params: obj })
      .then((response) => {
        if (response.data.success) {
          let newArr = [...response.data.documents];
          setDocuments(newArr.map((item) => item));
        }
      });
  };

  const submitNewDocument = () => {
    console.log(name);
    console.log(content);

    let obj = {
      token: localStorage.getItem("id_token"),
      name: name,
      content: content,
    };
    axios.post("http://localhost:5000/documents/", obj).then((response) => {
      enqueueSnackbar(response.data.msg, {
        variant: response.data.success ? "success" : "error",
      });
      if (response.data.success) {
        getDocuments();
      }
    });
  };

  const deleteDocument = (name) => {
    let obj = {
      token: localStorage.getItem("id_token"),
      name: name,
    };
    console.log("DELETE");
    console.log(obj);
    axios
      .delete("http://localhost:5000/documents/", { data: obj })
      .then((response) => {
        enqueueSnackbar(response.data.msg, {
          variant: response.data.success ? "success" : "error",
        });
        if (response.data.success) {
          getDocuments();
        }
      });
  };

  return {
    documents,
    handleNameChange,
    handleContentChange,
    getDocuments,
    submitNewDocument,
    deleteDocument,
    documentSelected,
  };
}

export default Submit;
