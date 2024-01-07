// in js we use like getelementbyId which points to the acture element, but in react we point to virtual dom so we use hooks like userref

import { useRef, useState, useEffect } from 'react';
import './App.css';
import uploadFile from './services/api';

function App() {

  const [file, setFile] = useState(''); // to save the selected pictures/files etc
  const [result, setResult] = useState('') // to show the path wagera to show on frontend, we get path at uoloadFile

  // console.log(file);

  const fileInputRef = useRef();

  const logo = "https://images.unsplash.com/photo-1433086966358-54859d0ed716?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";

  useEffect(() => {
    const getImage = async () => {
      if (file) { // will check if they have data, if yes then run the next code
        const data = new FormData();
        data.append("name", file.name); // taking out name from entire file
        data.append("file", file); // taking out/sending entire file
 
       const response =  await uploadFile(data); // the entire data is send and used for api callng in api.js
       setResult(response.path); // the path from backend shown on the frontend/ui
      }
    }
    getImage();
  }, [file]);
  

  const onUpload = () => {
    fileInputRef.current.click(); // current is a keyword in fileinputRef and click is the function
  }

  return (
    <div className="app">

      <img src={logo} alt="banner" />
      <div className="box">
        <h1>File Sharing</h1>
        <p>Upload and Share</p>

        <button onClick={() => onUpload()}>Upload</button>
        <input type="file" 
        ref = {fileInputRef}
        style={{display: 'none'}} // to hide the choose file input bz that function comes when upload button is clicked
        onChange={ (e) => setFile(e.target.files[0])} // e.target.files gives the files selected to upload, onchange = bz we have to save the file in the backend to upload
        /> 

        <a href={result} target='blank'>{result}</a> 

      </div>
    </div>
  );
}

export default App;
