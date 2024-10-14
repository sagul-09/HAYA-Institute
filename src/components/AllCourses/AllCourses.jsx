import React from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import CardActionArea from '@mui/material/CardActionArea';
import './AllCourses.css'; // Updated to match the new unique class names

const courses = [
  {
    id: 1,
    courseName: "Mathematics",
    description: "Intro to numbers, basic addition and subtraction",
    links: "/courses/maths/all",
    image: "./Value.png" // Add image URL
  },
  {
    id: 2,
    courseName: "English",
    description: "Building on addition and subtraction with shapes",
    links: "/courses/english/all",
    image: "./Value.png" // Add image URL
  }
];

const AllCourses = () => {
  const { id } = useParams(); // Get the course ID from the URL
  const navigate = useNavigate();

  const handleCardClick = (links) => {
    navigate(`${links}`);
  };

  return (
   <div className="allcourses-bg">
  
    <div className="allcourses-wrapper innerWidth ">
      <h1 className="allcourses-title">Courses Provided</h1>
      <div className="allcourses-container  paddings">
        {courses.map((course) => (
          <Card key={course.id} className="allcourses-card" onClick={() => handleCardClick(course.links)}>
            <CardActionArea>
              <CardMedia
                component="img"
                height="140"
                image={course.image}
                alt={course.courseName}
                className="allcourses-image"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div" className="allcourses-card-title">
                  {course.courseName}
                </Typography>
                <Typography variant="body2" className="allcourses-description">
                  {course.description}
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
        ))}
      </div>
    </div>
    </div>
  );
};

export default AllCourses;
