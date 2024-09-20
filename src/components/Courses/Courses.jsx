import "./Courses.css";
import React, { useEffect, useState } from 'react';
import MultiActionAreaCard from '../CourseCard/Card'; // Import the card component
import coursesData from "../../assets/Data/courses.json"; // Import the JSON data
import TextField from '@mui/material/TextField'; // Import TextField from Material-UI
import SearchSharpIcon from '@mui/icons-material/SearchSharp';
import InputAdornment from '@mui/material/InputAdornment'; // Import InputAdornment from Material-UI

const Courses = () => {
  const [courses, setCourses] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    // Simulate fetching data from JSON file
    setCourses(coursesData);
  }, []);

  const handleSearch = (event) => {
    setSearchQuery(event.target.value);
  };

  const filteredCourses = courses.filter(course =>
    course.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="course-wrapper">
      <h1 className="pinkText">Courses Provided</h1>
      <TextField
        id="outlined-basic"
        label="Search courses"
        variant="outlined"
        value={searchQuery}
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
        <div className="card-wrapper">
          {filteredCourses.map(course => (
            <MultiActionAreaCard
              key={course.id}
              title={course.title}
              description={course.description}
              image={course.image}
              detailedDescription={course.detailedDescription}
              feeStructure={course.feeStructure}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Courses;