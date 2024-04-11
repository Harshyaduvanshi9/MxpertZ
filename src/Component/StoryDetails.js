import React, { useState, useEffect } from 'react';


// const StoryDetails=()=>{

//   useEffect(()=>{
//     fetchStory();

//   },[]);

//   const fetchStory=async()=>{
//     const data=await fetch(`https://child.onrender.com/api/sciencefiction/{_id}`);
//     const json=await data.json();   
//     console.log(json);
//   }



// return(<h1>Hello</h1>);
// }

// export default StoryDetails;

import Card from './Card';

const StoryDetails = ({ storyId }) => {
  const [story, setStory] = useState(null);

  useEffect(() => {
    
    const fetchStory = async () => {
      try {
       
        const response = await fetch(`https://child.onrender.com/api/sciencefiction/${storyId}`);
        const data = await response.json();
        setStory(data); 
      } catch (error) {
        console.error('Error fetching story:', error);
      }
    };

    fetchStory();
  }, [storyId]);

  if (!story) {
    return <div>Loading...</div>;
  }

  return (
    <div className="story-details">
    
      <div className="cards">
        {/* {story.map((story, index) => (
          <Card
            key={index}
            title={story.Storyttext}
            image={`https://ik.imagekit.io/dev24/${story.Image[0]}`}
          
        
          />
        ))} */}
      </div>
    </div>
  );
};
export default StoryDetails;
