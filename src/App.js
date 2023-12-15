import "./css/App.css";
import ReactPlayer from "react-player";
import vedio from "./assests/samplevedio.mp4";
import Upload from "./components/application.js";


function App() {
 
  return (
    <div>
      <div>
        <h1>Sample vedio to create account</h1>
        <ReactPlayer
          controls={true}
          url={vedio}
          height="300px"
          width="750px"
        ></ReactPlayer>
      </div>

      <div class="user">
        <h1>Sign-in User</h1>
      </div>
      <div class="details">
        <p>please fill the below deatails</p>
      </div>
      <div class="name1">
        <div class="first">
          <label>First Name</label>
          <input
            type="First name"
            className="form-control"
            placeholder="Enter First name"
          />
        </div>
        <div name="last">
          <label>Last Name</label>
          <input
            type="Last name"
            className="form-control"
            placeholder="Enter Last name"
          />
        </div>
      </div>
      <Upload />
    </div>
  );
}
export default App;

// const config = {
//   bucketName: "simpleaj",
//   dirName: "media" /* optional */,
//   region: "Asia Pacific (Mumbai) ap-south-1",
//   accessKeyId: "AKIAYZ4ROK5J7QZUH747",
//   secretAccessKey: "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 ",
// };



// function App() {
//   // Create state to store file
//   const [file, setFile] = useState(null);

//   // Function to upload file to s3
//   const uploadFile = async () => {
//     // S3 Bucket Name
//     const S3_BUCKET = "simpleaj";

//     // S3 Region
//     const REGION = "ap-south-1";

//     // S3 Credentials
//     AWS.config.update({
//       accessKeyId: "AKIAYZ4ROK5JSPTC4DGR",
//       secretAccessKey: "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",
//     });
//     const s3 = new AWS.S3({
//       params: { Bucket: S3_BUCKET },
//       region: REGION,
//     });

//     // Files Parameters

//     const params = {
//       Bucket: S3_BUCKET,
//       Key: file.name,
//       Body: file,
//     };

//     // Uploading file to s3

//     var upload = s3
//       .putObject(params)
//       .on("httpUploadProgress", (evt) => {
//         // File uploading progress
//         console.log(
//           "Uploading " + parseInt((evt.loaded * 100) / evt.total) + "%"
//         );
//       })
//       .promise();

//     await upload.then((err, data) => {
//       console.log(err);
//       // Fille successfully uploaded
//       alert("File uploaded successfully.");
//     });
//   };
//   // Function to handle file and store it to file state
//   const handleFileChange = (e) => {
//     // Uploaded file
//     const file = e.target.files[0];
//     // Changing file state
//     setFile(file);
//   };
//   return (
//     <div className="App">
//       <div>
//         <input type="file" onChange={handleFileChange} />
//         <button onClick={uploadFile}>Upload</button>
//       </div>
//     </div>
//   );
// }

// export default App;
