import React from "react";
import CourseCard from "./CourseCard";

function CourseCatalog() {
  return (
    <div className="course-catalog">
      {courses.map((course) => (
        <CourseCard key={course.id} course={course} />
      ))}
    </div>
  );
}
export default CourseCard;
