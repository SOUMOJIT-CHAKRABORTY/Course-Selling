import { Button, Grid, Paper, TextField, Typography } from "@mui/material";

const CreateCourse = () => {
  const paperStyle = {
    padding: 20,
    height: "70vh",
    width: 380,
    margin: "20px auto",
  };
  const btnstyle = { margin: "8px 0" };
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
          />
          <TextField
            label="Description"
            placeholder="Enter a description"
            style={{ marginBottom: 30 }}
            fullWidth
            required
          />
          <Button
            type="submit"
            color="primary"
            variant="contained"
            style={btnstyle}
            fullWidth
          >
            Publish
          </Button>
        </Paper>
      </Grid>
    </div>
  );
};

export default CreateCourse;
