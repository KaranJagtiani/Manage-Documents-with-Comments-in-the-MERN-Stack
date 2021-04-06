import { useState } from "react";
import { useHistory } from "react-router-dom";
import axios from "axios";
import { useSnackbar } from "notistack";

function Submit() {
  const [open, setOpen] = useState(false);
  const { enqueueSnackbar } = useSnackbar();
  const history = useHistory();

  const [documentName, setDocumentName] = useState("");
  const [documentBody, setDocumentBody] = useState("");
  const [selectedText, setSelectedText] = useState("");
  const [comment, setComment] = useState("");
  const [myArray, setMyArray] = useState([]);

  const textSelected = (e) => {
    const selection = window.getSelection().toString();
    console.log("Test");
    if (selection === "") {
      console.log("click");
    } else {
      console.log(selection);
      setSelectedText(selection);
      handleClickOpen();
    }
  };

  const submitComment = () => {
    let obj = {
      text: selectedText,
      comment: comment,
    };
    setMyArray(myArray.concat(obj));
    setOpen(false);
  };

  const deleteComment = (text) => {
    let newArray = [];
    myArray.forEach((obj) => {
      if (obj.text !== text) {
        newArray.push(obj);
      }
    });
    console.log(newArray);
    setMyArray([...newArray]);
  };

  const handleCommentChange = (e) => {
    e.preventDefault();
    setComment(e.target.value);
  };

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const goBackToDocumentsList = () => {
    history.push("/documents");
  };

  const updateDocument = () => {
    let obj = {
      token: localStorage.getItem("id_token"),
      name: documentName,
      comments: myArray,
    };
    axios.patch("http://localhost:5000/documents/", obj).then((response) => {
      console.log("Test");
      console.log(response.data);
      enqueueSnackbar(response.data.msg, {
        variant: response.data.success ? "success" : "error",
      });
      if (response.data.success) {
        localStorage.setItem(
          "document",
          JSON.stringify(response.data.document)
        );
      }
    });
  };

  return {
    open,
    selectedText,
    myArray,
    documentName,
    documentBody,
    setMyArray,
    setDocumentName,
    setDocumentBody,
    handleClose,
    textSelected,
    submitComment,
    deleteComment,
    handleCommentChange,
    goBackToDocumentsList,
    updateDocument,
  };
}

export default Submit;
