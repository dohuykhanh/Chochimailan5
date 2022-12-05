import React from "react";
import Header from "../../components/Navbar/header";
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import * as IoIcons from 'react-icons/io';


import styles from "./homeindex.module.css"
function Home({ children }) {

  let icon = <IoIcons.IoMdPeople />;
  
  return (
    <div>
      <Header></Header>
      <div className= {styles.Fix}>
        <div className={styles.fixcontent}>{children}
        
        </div>
        
        
        <div className={styles.wrapp} >
          {/* <Chatclock/> */}
          <div style={{display: 'flex'}}>
            
          <div style={{marginLeft: '244px', textAlign:"center",height:"45px", width:"45px", background:"#38c3a4",borderRadius:"10px",color:"white"}}>
          <b style={{fontSize:"30px"}}>5</b>
          </div>
          
          </div>
          <span style={{marginLeft: '24px',marginTop:"14px",fontSize:"20px"}}><b>Meetings Schedule</b></span>
          <div style={{textAlign:"center",marginLeft: '24px', height:"128px", width:"265px", background:"#fff1d6",marginTop:"14px",borderRadius:"10px"}}>
          <b style={{fontSize:"30px"}}>Room 1</b>
          </div>
          <div style={{textAlign:"center",marginLeft: '24px', height:"128px", width:"265px", background:"#d1e7ff",marginTop:"14px",borderRadius:"15px"}}>
          <b style={{fontSize:"30px"}}>Room 2</b>
          </div>
          <div style={{textAlign:"center",marginLeft: '24px', height:"128px", width:"265px", background:"#ffd8d9",marginTop:"14px",borderRadius:"15px"}}>
          <b style={{fontSize:"30px"}}>Room 3</b>
          </div>
          <div style={{textAlign:"center",marginLeft: '24px', height:"128px", width:"265px", background:"#d9ffe5",marginTop:"14px",borderRadius:"15px"}}>
          <b style={{fontSize:"30px"}}>Room 4</b>
          </div>
          
          {/* <Chat/>
          <Clock/> */}
        </div>
      </div>
    </div>
  );
}

export default Home;
