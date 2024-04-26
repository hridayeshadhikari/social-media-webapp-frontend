import React from 'react'
import Stories from 'react-insta-stories'



const stories = () => {
const story=["https://buffer.com/cdn-cgi/image/w=1000,fit=contain,q=90,f=auto/library/content/images/size/w600/2023/09/instagram-image-size.jpg",
"https://images.unsplash.com/photo-1575936123452-b67c3203c357?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aW1hZ2V8ZW58MHx8MHx8fDA%3D"]

    return (
    <div>
        <Stories loop={true} stories={story}
        width={1000}
        height={500}/>
    </div>
  )
}


export default stories
