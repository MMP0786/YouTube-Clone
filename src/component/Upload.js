import React, { useContext, useState } from 'react'
import "../component/upload.css"
import {v4 as uuidv4} from "uuid"
import {app} from '../Firebase'
import { getStorage, ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
// import { Firestore } from 'firebase/firestore';
import { database, firestore } from '../Firebase';
import { createNav } from '../App';
import { Link } from 'react-router-dom';
import { addDoc } from 'firebase/firestore';
import { async } from '@firebase/util';

function Upload() {

  const data = useContext(createNav)
  const storage = getStorage(app);
  // console.log(data.user.displayName)
  const [videoDetail, setVideDetail] = useState([
    {
      id: uuidv4(),
      // displayName: data.user.displayName,
      thumbnailPhoto: "",
      videoUrl: "",
      title:"",
      channelName: data?.user?.displayName,
      channelPhoto: data?.user?.photoUrl,
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
      console.log(type)
      console.log('File available at', downloadURL);
      type === "video" ? videoDetail.videoUrl=downloadURL : videoDetail.thumbnailPhoto= downloadURL;
      console.log(videoDetail)
      setVideDetail(...videoDetail, videoDetail.videoUrl = downloadURL)
      setVideDetail(...videoDetail)
      
    });
  }
);


}
const handleSubmit = async (e)=>{
  const tempPayload ={...videoDetail}
 const res = await addDoc(database.videos, tempPayload)
 console.log(res)


  }
  return (
      
    <div className='upload'>
      <h2>Upload Video Here</h2>
      <h4>Choose video</h4>
      <input type="file" name="" id="" accept='video/*' onChange={(e)=> handleChangeVideo(e, "video")}/>
      <h4>Choose Thumbnail</h4>
      <input type="file" name="" id="" accept='image/*' onChange={(e)=> handleChangeVideo(e, "thumbnails")}/>
      <h4>Enter title</h4>
      <input type="text" name="" placeholder='Title' id=""  onBlur={(e)=> setVideDetail({...videoDetail, title: e.target.value})}/>
      <h4>Enter Descriptin</h4>
      <textarea name="" id="" cols="19" rows="4" placeholder='Description' onBlur={(e)=> setVideDetail({...videoDetail, discription: e.target.value})}></textarea>
      <br></br>
      <input type="submit" value="Submit" onClick={handleSubmit}/>
    </div>   
  )
}

export default Upload