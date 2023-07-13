import { useContext } from "react";
import { CourseDetails } from "../Context";
import Cards from "../components/Cards";
import { Authenticated } from "../Autherticate";
import PermanentDrawerLeft from "../components/Drawer";

const ShowCourse = () => {
  const [courses] = useContext(CourseDetails);
  const { authenticated } = useContext(Authenticated);
  if (courses.length === 0) {
    return <div>No Courses found...</div>;
  }
  return (
    <div>
      <div>All Courses</div>
      {authenticated && <PermanentDrawerLeft />}
      <br />
      <br />
      <div>
        {courses &&
          courses.map((course) => {
            return (
              <div key={course.title}>
                <Cards title={course.title} description={course.description} />
              </div>
            );
          })}
      </div>
    </div>
  );
};

export default ShowCourse;
