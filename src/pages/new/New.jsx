import "./new.scss"
import Sidebar from "../../components/sidebar/Sidebar"
import Navbar from "../../components/navbar/Navbar"
import DriveFolderUploadIcon from '@mui/icons-material/DriveFolderUpload';
import { useState } from "react";

const New = ({inputs, title}) => {

  const [file, setFile] = useState("")
  
  return (
    <div className = "new">
      <Sidebar />
      <div className="newContainer">
        <Navbar />
        <div className="top"><h2>{title}</h2></div>
        <div className="bottom">
          <div className="left">
            <img
              src={
                file 
                ? URL.createObjectURL(file) 
                : "https://icon-library.com/images/no-image-icon/no-image-icon-0.jpg"
              }
            alt = ""
            />
          </div>
          
          <div className="right">
              <form>
                <div className="formInput">
                  <label htmlFor="file">
                    Image: <DriveFolderUploadIcon className="icon"/>
                  </label>
                  <input 
                  type="file" 
                  id='file' 
                  style={{display:"none"}}
                  onChange = {(e) => setFile(e.target.files[0])}></input>
                </div>
                
            {inputs.map((input) => (
              <div className="formInput" key = {input.id}>
                <label>{input.label}</label>
                <input type={input.type} placeholder={input.placeholder} />
              </div>
            ))}

                <button>Send</button>
              </form>
          </div>

        </div>
      </div>
    </div>
  )
}

export default New