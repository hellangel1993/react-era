// Course.js
import React, { useState, useEffect } from 'react';

function Course({ match }) {
  const courseId = match.params.id;
  const [currentPage, setCurrentPage] = useState(1);
  const [videoTime, setVideoTime] = useState(0);
  const [isCourseInProgress, setIsCourseInProgress] = useState(false);

  useEffect(() => {
    const savedProgress = JSON.parse(localStorage.getItem(`courseProgress_${courseId}`));
    if (savedProgress) {
      setCurrentPage(savedProgress.currentPage);
      setVideoTime(savedProgress.videoTime);
      setIsCourseInProgress(true);
    }
  }, [courseId]);

  const handleResume = () => {
    const savedProgress = JSON.parse(localStorage.getItem(`courseProgress_${courseId}`));
    if (savedProgress) {
      setCurrentPage(savedProgress.currentPage);
      setVideoTime(savedProgress.videoTime);
      setIsCourseInProgress(true);
    }
  };

  const handleStartCourse = () => {
    setIsCourseInProgress(true);
    
  };

  const handleStopCourse = () => {
    setIsCourseInProgress(false);
   
    localStorage.setItem(`courseProgress_${courseId}`, JSON.stringify({ currentPage, videoTime }));
  };



  return (
    <div className="course">
     
    </div>
  );
}

export default Course;
