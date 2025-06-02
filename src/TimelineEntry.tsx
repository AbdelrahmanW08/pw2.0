import React from 'react';

interface TimelineEntryProps {
  time: string;
  location: string;
  title: string;
  imageSrc: string;
}

const TimelineEntry: React.FC<TimelineEntryProps> = ({ time, location, title, imageSrc }) => {
  return (
    <div className="timeline-entry">
      <div className="timeline-image-container">
        <img src={imageSrc} alt="Company Logo" className="timeline-image" />
      </div>
      <div className="timeline-content">
        <p className="timeline-time">{time}</p>
        <p className="timeline-location">{location}</p>
        <p className="timeline-title">{title}</p>
      </div>
    </div>
  );
};

export default TimelineEntry;