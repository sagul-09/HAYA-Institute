import "./PrimaryMath.css";
import React, { useEffect, useState } from 'react';
import MultiActionAreaCardWithDialog from '../../CourseCard/Card.jsx';
import coursesData from "../../../assets/Data/coursesData/Maths/PrimaryMath.json"; // Import the JSON data
import TextField from '@mui/material/TextField'; // Import TextField from Material-UI
import SearchSharpIcon from '@mui/icons-material/SearchSharp';
import InputAdornment from '@mui/material/InputAdornment'; // Import InputAdornment from Material-UI

const Courses = () => {
  const [courses, setCourses] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    // Set the courses directly from the JSON data
    setCourses(coursesData);
  }, []);

  const handleSearch = (event) => {
    setSearchQuery(event.target.value);
  };

  const filteredCourses = courses.filter(course =>
    course.courseName.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="course-wrapper">
      <h1 className="pinkText course-title">Primary School Math</h1>
      <TextField
        id="outlined-basic"
        variant="outlined"
        value={searchQuery}
        placeholder="Search for courses"
        onChange={handleSearch}
        className="search-bar"
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <SearchSharpIcon />
            </InputAdornment>
          ),
        }}
      />
      <div className="course-container">
        {filteredCourses.map((course) => (
          <MultiActionAreaCardWithDialog
            key={course.id}
            title={course.courseName}
            description={course.description}
            image={course.image} // Assuming image is part of the course data
            detailedDescription={course.detailedDescription} // Assuming detailedDescription is part of the course data
            feeStructure={course.feeStructure}
          />
        ))}
      </div>
    </div>
  );
};

export default Courses;