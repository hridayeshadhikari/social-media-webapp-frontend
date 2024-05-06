import React, { useEffect } from 'react';
import Stories from 'react-insta-stories';
import { useDispatch, useSelector } from 'react-redux';
import { getAllStory } from '../../Redux/Story/story.action';

const UserStories = ({userId}) => {
  const { story } = useSelector(store => store);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllStory(userId));
  }, [dispatch]);

  const imageUrl = story.story ? story.story.map((storyItem) => storyItem.image) : [];


  // console.log("========================>",userId)
  return (
    <div className='ml-[-32px]'>
      {imageUrl.length > 0 ? (
        <Stories loop={true} stories={imageUrl} width={462} height={608} />
      ) : (
        <p>Loading stories...</p>
      )}
    </div>
  );
}

export default UserStories;
