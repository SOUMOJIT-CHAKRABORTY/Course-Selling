import {
  Button,
  Grid,
  Input,
  Paper,
  TextField,
  Typography,
} from "@mui/material";
import { useState } from "react";

const CreateCourse = () => {
  const [banner, setBanner] = useState("");
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const paperStyle = {
    padding: 20,
    height: "70vh",
    width: 380,
    margin: "20px auto",
  };
  const btnstyle = { margin: "8px 0" };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(banner);
  };
  return (
    <div>
      <Grid>
        <Paper elevation={10} style={paperStyle}>
          <Grid align="center" style={{ marginBottom: 40 }}>
            <Typography>Create New Course</Typography>
          </Grid>
          <TextField
            label="Title"
            style={{ marginBottom: 20 }}
            placeholder="Enter the title"
            fullWidth
            required
            onChange={(e) => setTitle(e.target.value)}
          />
          <TextField
            label="Description"
            placeholder="Enter a description"
            style={{ marginBottom: 30 }}
            fullWidth
            required
            onChange={(e) => setDescription(e.target.value)}
          />
          <Input
            type="file"
            placeholder="bannerImage"
            onChange={(e) => setBanner(e.target.files[0])}
          ></Input>
          <Button
            type="submit"
            color="primary"
            variant="contained"
            style={btnstyle}
            fullWidth
            onClick={handleSubmit}
          >
            Publish
          </Button>
        </Paper>
      </Grid>
    </div>
  );
};

export default CreateCourse;
