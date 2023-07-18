import { useContext } from "react";
import { CourseDetails } from "../context/Context";
import Cards from "../components/Cards";
import { Authenticated } from "../context/Autherticate";
import PermanentDrawerLeft from "../components/Drawer";
import { Backdrop, CircularProgress } from "@mui/material";

const ShowCourse = () => {
  const [courses] = useContext(CourseDetails);
  const { authenticated } = useContext(Authenticated);
  if (courses.length === 0) {
    return (
      <div>
        <Backdrop
          sx={{ color: "#fff", zIndex: (theme) => theme.zIndex.drawer + 1 }}
          open={open}
          // onClick={handleClose}
        >
          <CircularProgress color="inherit" />
        </Backdrop>
      </div>
    );
  }
  console.log(courses);
  return (
    <div>
      <div className="flex space-x-10">
        <div>{authenticated && <PermanentDrawerLeft />}</div>
        <div className="w-full">
          {courses &&
            courses.map((course) => {
              return (
                <div key={course.title}>
                  <Cards
                    title={course.title}
                    description={course.description}
                  />
                </div>
              );
            })}
        </div>
      </div>
    </div>
  );
};

export default ShowCourse;
