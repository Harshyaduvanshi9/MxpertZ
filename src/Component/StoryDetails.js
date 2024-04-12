import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

import Card from './Card';
import MysteryOfTheRobotPlanet from './MysteryOfTheRobotPlanet';


const StoryDetails = ({ }) => {
  const [story, setStory] = useState(null);
  const { _id } = useParams();
  console.log(_id);

  useEffect(() => {

    const fetchStory = async () => {
      try {

        const response = await fetch(`https://child.onrender.com/api/sciencefiction/${_id}`);
        const data = await response.json();
        console.log("data is",data);
        setStory(data);
       
      } catch (error) {
        console.error('Error fetching story:', error);
      }
    };

    fetchStory();
  }, []);

  if (!story) {
    return <div>Loading...</div>;
  }

  return (
    <div className="story-details">

      <div className="cards">
      
      {console.log("story is",story)}

          {/* <Card 
            title={story.Title}
            image={`https://ik.imagekit.io/dev24/${story.Image[0]}`}
            status={story.Status}
            storyId={story._id}
          /> */}


          {/* <Card
            
            title={story.Title}
            image={`https://ik.imagekit.io/dev24/${story.Image[0]}`}
            status={story.Status}
            storyId={story._id}
          /> */}

          <MysteryOfTheRobotPlanet data={story} />
          
          
             
      </div>
    </div>
  );
};
export default StoryDetails;
