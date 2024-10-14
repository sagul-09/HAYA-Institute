import React from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import CardActionArea from '@mui/material/CardActionArea';
import './EnglishAll.css'; // Updated to match the new unique class names

const courses = [
  {
    id: 1,
    courseName: "English 1",
    description: "Intro to numbers, basic addition and subtraction",
    links: "/courses/english/middle",
    image: "./Value.png" // Add image URL
  },
  {
    id: 2,
    courseName: "English 2",
    description: "Building on addition and subtraction with shapes",
    links: "/courses/english/high",
    image: "./Value.png" // Add image URL
  }
];

const EnglishAll = () => {
  const { id } = useParams(); // Get the course ID from the URL
  const navigate = useNavigate();

  const handleCardClick = (links) => {
    navigate(`${links}`);
  };

  return (
   <div className="englishAll-bg">
  
    <div className="englishAll-wrapper innerWidth ">
      <h1 className="englishAll-title">english Courses</h1>
      <div className="englishAll-container  paddings">
        {courses.map((course) => (
          <Card key={course.id} className="englishAll-card" onClick={() => handleCardClick(course.links)}>
            <CardActionArea>
              <CardMedia
                component="img"
                height="140"
                image={course.image}
                alt={course.courseName}
                className="englishAll-image"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div" className="englishAll-card-title">
                  {course.courseName}
                </Typography>
                <Typography variant="body2" className="englishAll-description">
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

export default EnglishAll;
