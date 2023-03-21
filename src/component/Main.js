import React from 'react'
import "../component/main.css"

function Main() {
  const popularTab = [
    {
      id:1,
      name:"All"
    },
    {
      id:2,
      name:"Music"
    },
    {
      id:3,
      name:"Movie"
    },
    {
      id:4,
      name:"Watched"
    },
    {
      id:5,
      name:"Listenable"
    },
    {
      id:6,
      name:"Motivation"
    },
    {
      id:7,
      name:"Time Management"
    },
    {
      id:8,
      name:"Other"
    },
  ]

  const videos =[
    {
      id:1,
      img: "https://i.ytimg.com/vi/lFPpEp84oX4/hqdefault.jpg?sqp=-oaymwEcCOADEI4CSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLAH0ybo6GOX_DCbQe5ssSETM1Oxzw",
      cPhoto:"https://yt3.ggpht.com/ytc/AL5GRJWSglSfXrvRPbUrKSUs35zMcUrfrsTBtQuwUssr=s88-c-k-c0x00ffffff-no-rj",
      channelName: "First channel",
      vDisc: "Inspirational & Motivational Nasheed | Do Char Qadam Aagey Badha | Huzaifa Hanfi",
      views: 1.4,
      days:2
    },
    {
      id:2,
      img: "https://i.ytimg.com/vi/lFPpEp84oX4/hqdefault.jpg?sqp=-oaymwEcCOADEI4CSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLAH0ybo6GOX_DCbQe5ssSETM1Oxzw",
      cPhoto:"https://yt3.ggpht.com/ytc/AL5GRJWSglSfXrvRPbUrKSUs35zMcUrfrsTBtQuwUssr=s88-c-k-c0x00ffffff-no-rj",
      channelName: "First channel",
      vDisc: "Inspirational & Motivational Nasheed | Do Char Qadam Aagey Badha | Huzaifa Hanfi",
      views: 1.4,
      days:2
    },
    {
      id:3,
      img: "https://i.ytimg.com/vi/lFPpEp84oX4/hqdefault.jpg?sqp=-oaymwEcCOADEI4CSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLAH0ybo6GOX_DCbQe5ssSETM1Oxzw",
      cPhoto:"https://yt3.ggpht.com/ytc/AL5GRJWSglSfXrvRPbUrKSUs35zMcUrfrsTBtQuwUssr=s88-c-k-c0x00ffffff-no-rj",
      channelName: "First channel",
      vDisc: "Inspirational & Motivational Nasheed | Do Char Qadam Aagey Badha | Huzaifa Hanfi",
      views: 1.4,
      days:2
    },
    {
      id:4,
      img: "https://i.ytimg.com/vi/lFPpEp84oX4/hqdefault.jpg?sqp=-oaymwEcCOADEI4CSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLAH0ybo6GOX_DCbQe5ssSETM1Oxzw",
      cPhoto:"https://yt3.ggpht.com/ytc/AL5GRJWSglSfXrvRPbUrKSUs35zMcUrfrsTBtQuwUssr=s88-c-k-c0x00ffffff-no-rj",
      channelName: "First channel",
      vDisc: "Inspirational & Motivational Nasheed | Do Char Qadam Aagey Badha | Huzaifa Hanfi",
      views: 1.4,
      days:2
    },
    {
      id:5,
      img: "https://i.ytimg.com/vi/lFPpEp84oX4/hqdefault.jpg?sqp=-oaymwEcCOADEI4CSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLAH0ybo6GOX_DCbQe5ssSETM1Oxzw",
      cPhoto:"https://yt3.ggpht.com/ytc/AL5GRJWSglSfXrvRPbUrKSUs35zMcUrfrsTBtQuwUssr=s88-c-k-c0x00ffffff-no-rj",
      channelName: "First channel",
      vDisc: "Inspirational & Motivational Nasheed | Do Char Qadam Aagey Badha | Huzaifa Hanfi",
      views: 1.4,
      days:2
    },
  ]
  return (
    <>
    <div className='all-tab'>
      {popularTab.map(ele=><div className='tab' key={ele.id}>{ele.name}</div>)}     
    </div>
    
    <div className='videos'>

      {
        videos.map(ele=> {
          return(
            <>  
            <div className="video">
          <img style={{width:"85%"}} src={ele.img}/>
          <div className='flex'>
          <img style={{width:"40px", marginRight:"10px"}} src={ele.cPhoto}/>
          <div>{ele.vDisc}</div>

          </div> 
          <div style={{paddingLeft:"50px"}}>{ele.channelName}</div>
          <div className="time">
          <div style={{marginRight:"10px"}}>{ele.views}M Views </div>
          <div> {ele.days}days ago</div>
          </div>
          </div>
          </>
        )
      })}
      </div>
    </>
    )}

export default Main;