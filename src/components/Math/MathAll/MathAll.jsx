import React from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import CardActionArea from '@mui/material/CardActionArea';
import './MathAll.css'; // Import the CSS file

const courses = [
  {
    id: 1,
    courseName: "Middle School Mathematics",
    description: "Intro to numbers, basic addition and subtraction",
    links: "/courses/maths/middle",
    image: "./Value.png" // Add image URL
  },
  {
    id: 2,
    courseName: "High School Mathematics",
    description: "Building on addition and subtraction with shapes",
    links: "/courses/math/high",
    image: "./Value.png" // Add image URL
  }
];

const Courses = () => {
  const { id } = useParams(); // Get the course ID from the URL
  const navigate = useNavigate();

  const handleCardClick = (links) => {
    navigate(`${links}`);
  };

  return (
    <div className="courses-wrapper flexCenter">
      <h1 className="title  paddings">Choose The Class</h1>
      <div className="courses-container innerWidth  paddings">
        {courses.map((course) => (
          <Card key={course.id} className="course-card" onClick={() => handleCardClick(course.links)}>
            <CardActionArea>
              <CardMedia
                component="img"
                height="140"
                image={course.image}
                alt={course.courseName}
                className="course-image"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div" className="course-title">
                  {course.courseName}
                </Typography>
                <Typography variant="body2" className="course-description">
                  {course.description}
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default Courses;