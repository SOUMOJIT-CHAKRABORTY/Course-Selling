import PropTypes from "prop-types";
import { createContext } from "react";

export const CourseDetails = createContext();

export const CourseData = (props) => {
  return (
    <CourseDetails.Provider value={[courses, setCourses]}>
      {props.children}
    </CourseDetails.Provider>
  );
};

CourseData.propTypes = {
  children: PropTypes.node.isRequired,
};
