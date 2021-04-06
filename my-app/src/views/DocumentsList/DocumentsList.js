import React, { useEffect } from "react";
import CssBaseline from "@material-ui/core/CssBaseline";
import Container from "@material-ui/core/Container";
import TextField from "@material-ui/core/TextField";
import TextareaAutosize from "@material-ui/core/TextareaAutosize";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogTitle from "@material-ui/core/DialogTitle";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import { useTheme } from "@material-ui/core/styles";
import { makeStyles } from "@material-ui/core/styles";
import Submit from "./DocumentsListLogic";
import IconButton from "@material-ui/core/IconButton";
import DeleteIcon from "@material-ui/icons/Delete";

import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";

import "./DocumentsList.css";

const useStyles = makeStyles((theme) => ({
  submit: {
    display: "block",
    margin: theme.spacing(4, "auto", 2, "auto"),
    fontSize: "16px",
    width: "220px",
    padding: "10px 0",
  },
  deleteButton: {
    margin: theme.spacing(-1.2, 0, 0, 0),
    float: "right",
    zIndex: "999",
  },
  root: {
    width: 250,
    margin: theme.spacing(2, 0, 0, 0),
  },
  bullet: {
    display: "inline-block",
    margin: "0 2px",
    transform: "scale(0.8)",
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
}));

function DocumentsList() {
  const classes = useStyles();
  const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.down("sm"));
  const [openAddDoc, setOpenAddDoc] = React.useState(false);
  const [openRemoveDoc, setOpenRemoveDoc] = React.useState(false);
  const [selectDeleteDocument, setSelectDeleteDocument] = React.useState("");

  const {
    documents,
    handleNameChange,
    handleContentChange,
    submitNewDocument,
    getDocuments,
    deleteDocument,
    documentSelected,
  } = Submit();

  useEffect(() => {
    // Some initialization logic here
    getDocuments();
  }, []);

  const handleAddDocClick = () => {
    setOpenAddDoc(true);
  };

  const handleAddDocClose = () => {
    setOpenAddDoc(false);
  };

  const handleRemoveDocClick = (name) => {
    setSelectDeleteDocument(name);
    setOpenRemoveDoc(true);
  };

  const handleRemoveDocClose = () => {
    setOpenRemoveDoc(false);
  };

  return (
    <Container component="main" maxWidth="md">
      <CssBaseline />
      <Button
        type="submit"
        fullWidth
        variant="contained"
        color="primary"
        className={classes.submit}
        onClick={handleAddDocClick}
      >
        Add Document
      </Button>

      {documents.length !== 0 && (
        <Container class="max-width">
          <h2 class="text-center">Documents</h2>
          <hr></hr>
          <Container class="custom-row">
            {documents.map((object, i) => (
              <div key={i}>
                <Card className={classes.root}>
                  <CardContent
                    onClick={() => {
                      documentSelected(object);
                    }}
                  >
                    <Typography
                      className={classes.title}
                      color="textSecondary"
                      gutterBottom
                    >
                      Document #{i + 1}
                    </Typography>
                    <Typography class="card-name" variant="h5" component="h2">
                      {object.name}
                    </Typography>
                  </CardContent>
                  <CardActions>
                    <Button
                      size="small"
                      onClick={() => {
                        handleRemoveDocClick(object.name);
                      }}
                    >
                      Delete
                    </Button>
                  </CardActions>
                </Card>
              </div>
            ))}
          </Container>
        </Container>
      )}

      {documents.length === 0 && (
        <Container>
          <div class="complete-center">
            <h3 class="text-center">
              No documents have been created. Click on the above button to
              create one!
            </h3>
          </div>
        </Container>
      )}

      <Dialog
        fullScreen={fullScreen}
        open={openAddDoc}
        onClose={handleAddDocClose}
        aria-labelledby="responsive-dialog-title"
      >
        <DialogTitle id="responsive-dialog-title">{"Add Document"}</DialogTitle>
        <DialogContent>
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="name"
            label="Document Name"
            name="name"
            autoFocus
            onChange={handleNameChange}
          />

          <TextField
            variant="outlined"
            margin="normal"
            multiline
            rows={8}
            rowsMax={8}
            required
            fullWidth
            id="content"
            label="Document Content"
            name="content"
            onChange={handleContentChange}
          />
        </DialogContent>
        <DialogActions>
          <Button autoFocus onClick={handleAddDocClose} color="primary">
            Close
          </Button>
          <Button onClick={submitNewDocument} color="primary" autoFocus>
            Submit
          </Button>
        </DialogActions>
      </Dialog>

      <Dialog
        fullScreen={fullScreen}
        open={openRemoveDoc}
        onClose={handleRemoveDocClose}
        aria-labelledby="responsive-dialog-title"
      >
        <DialogTitle id="responsive-dialog-title">
          {"Remove Document"}
        </DialogTitle>
        <DialogContent>{selectDeleteDocument}</DialogContent>
        <DialogActions>
          <Button autoFocus onClick={handleRemoveDocClose} color="primary">
            Close
          </Button>
          <Button
            onClick={() => {
              handleRemoveDocClose();
              deleteDocument(selectDeleteDocument);
            }}
            color="primary"
            autoFocus
          >
            Confirm
          </Button>
        </DialogActions>
      </Dialog>
    </Container>
  );
}

export default DocumentsList;
