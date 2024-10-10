import React from 'react';
import MultiActionAreaCard from './MultiActionAreaCard'; // Assuming this is the correct path
import { courses } from './Courses'; // Assuming courses is an array of course data

const HighMath = () => {
  const HighMathCourses = courses.filter(course => course.category === 'Maths' && course.subcategory === 'HighMath');

  return (
    <div className="card-wrapper">
      {HighMathCourses.map(course => (
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
  );
};

export default HighMath;