import React, { useContext, useState } from 'react'
import "../component/upload.css"
import {v4 as uuidv4} from "uuid"
import {app} from '../Firebase'
import { getStorage, ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import { createNav } from '../App';
import { Link } from 'react-router-dom';

function Upload() {
  // const {user} = useContext(createNav); 
  const storage = getStorage(app);
  // console.log(user)
  const [videoDetail, setVideDetail] = useState([
    {
      id: uuidv4(),
      displayName: "",
      thumbnailPhoto: "",
      videoUrl: "",
      // channelName: user?.displayName,
      // channelPhoto: user?.photoUrl,
      likes:0,
      Comments: [],
      discription: ""
    },
  ])

  const handleChangeVideo = (e, type)=>{
    const file = e.target.files[0];
    const fileRef = type=== "video" ?  ref(storage, `videos/${file.name}`): ref(storage, `thumbnail/${file.name}`);

    const uploadTask = uploadBytesResumable(fileRef, file);

  uploadTask.on('state_changed', (snapshot) => {

    const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
    console.log('Upload is ' + progress + '% done');
    // switch (snapshot.state) {
    //   case 'paused':
    //     console.log('Upload is paused');
    //     break;
    //   case 'running':
    //     console.log('Upload is running');
    //     break;
    // }
  }, 
  (error) => {
    console.log(error)
  }, 
  () => {
    // Handle successful uploads on complete
    // For instance, get the download URL: https://firebasestorage.googleapis.com/...
    getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
      console.log('File available at', downloadURL);
      type === "video" ? videoDetail.displayName = downloadURL : videoDetail.thumbnailPhoto= downloadURL;
      setVideDetail(...videoDetail)
      
    });
  }
);


}
const handleSubmit = (e)=>{
  console.log(videoDetail)
  }
  return (
      
    <div className='upload'>
      <h2>Upload Video Here</h2>
      <h4>Choose video</h4>
      <input type="file" name="" id="" accept='video/*' onChange={(e)=> handleChangeVideo(e, "video")}/>
      <h4>Choose Thumbnail</h4>
      <input type="file" name="" id="" accept='image/*' onChange={(e)=> handleChangeVideo(e, "thumbnails")}/>
      <h4>Enter title</h4>
      <input type="text" name="" placeholder='Title' id=""  onBlur={(e)=> setVideDetail({...videoDetail, displayName: e.target.value})}/>
      <h4>Enter Descriptin</h4>
      <textarea name="" id="" cols="19" rows="4" placeholder='Description' onBlur={(e)=> setVideDetail({...videoDetail, discription: e.target.value})}></textarea>
      <br></br>
      <input type="submit" value="Submit" onClick={handleSubmit}/>
    </div>   
  )
}

export default Upload