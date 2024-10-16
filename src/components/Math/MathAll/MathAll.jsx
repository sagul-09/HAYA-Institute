import React from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import CardActionArea from '@mui/material/CardActionArea';
import './MathAll.css'; // Updated to match the new unique class names

const courses = [
  {
    id: 1,
    courseName: "Mathematics 1",
    description: "Intro to numbers, basic addition and subtraction",
    links: "/courses/maths/middle",
    image: "./Value.png" // Add image URL
  },
  {
    id: 2,
    courseName: "Mathematics 2",
    description: "Building on addition and subtraction with shapes",
    links: "/courses/maths/high",
    image: "./Value.png" // Add image URL
  }
];

const MathAll = () => {
  const { id } = useParams(); // Get the course ID from the URL
  const navigate = useNavigate();

  const handleCardClick = (links) => {
    navigate(`${links}`);
  };

  return (
   <div className="mathAll-bg">
  
    <div className="mathAll-wrapper innerWidth ">
      <h1 className="mathAll-title">Maths Courses</h1>
      <div className="mathAll-container  paddings">
        {courses.map((course) => (
          <Card key={course.id} className="mathAll-card" onClick={() => handleCardClick(course.links)}>
            <CardActionArea>
              <CardMedia
                component="img"
                height="140"
                image={course.image}
                alt={course.courseName}
                className="mathAll-image"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div" className="mathAll-card-title">
                  {course.courseName}
                </Typography>
                <Typography variant="body2" className="mathAll-description">
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

export default MathAll;
