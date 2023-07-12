import { useContext } from "react";
import { CourseDetails } from "../Context";
import Cards from "../components/Cards";

const ShowCourse = () => {
  const [courses] = useContext(CourseDetails);
  return (
    <div>
      <div>All Courses</div>
      <br />
      <br />
      <div>
        {courses &&
          courses.map((course) => {
            return (
              <div key={course.id}>
                <Cards title={course.title} description={course.description} />
              </div>
            );
          })}
      </div>
    </div>
  );
};

export default ShowCourse;
