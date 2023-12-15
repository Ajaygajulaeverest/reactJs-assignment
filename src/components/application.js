// import { Welcome } from "./componenet";

import { useState } from "react";
import AWS from "aws-sdk";


const validFileTypes = ["image/jpg", "image/jpeg", "image/png"];
// const URL = "/images";
export default function Upload() {
  const [file, setFile] = useState(null);
  const [error, setError] = useState('');

  // Function to upload file to s3
  const uploadFile = async () => {
    // S3 Bucket Name
    const S3_BUCKET = "simpleaj";

    // S3 Region
    const REGION = "ap-south-1";

    // S3 Credentials
    AWS.config.update({
      accessKeyId: "AKIAYZ4ROK5JSPTC4DGR",
      secretAccessKey: "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",
    });
    const s3 = new AWS.S3({
      params: { Bucket: S3_BUCKET },
      region: REGION,
    });

    // Files Parameters

    const params = {
      Bucket: S3_BUCKET,
      Key: file.name,
      Body: file,
    };

    // Uploading file to s3

    var upload = s3
      .putObject(params)
      .on("httpUploadProgress", (evt) => {
        // File uploading progress
        console.log(
          "Uploading " + parseInt((evt.loaded * 100) / evt.total) + "%"
        );
      })
      .promise();

    await upload.then((err, data) => {
      console.log(err);
      // Fille successfully uploaded
      alert("File uploaded successfully.");
    });
  };
  // Function to handle file and store it to file state
  const handleFileChange = (e) => {
    // Uploaded file
    const file = e.target.files[0];
    if (!validFileTypes.find((type) => type === file.type)) {
      setError("File must be in JPEG/PNG format");
      return;
    }
    // Changing file state
    setFile(file);
  };

  // 

  return (
    <div>
      <div class="name2">
        <div>
          <h3>Please upload your profile picture</h3>
          <div>
            <input type="file" onChange={handleFileChange} />
            <button onClick={uploadFile}>Upload!</button>

            {/* <Text fontsize="lg" color="red.300">
              {error}{" "}
            </Text> */}
          </div>
          {error && (
            <label fontsize="lg" color="red.300">
              {error}
            </label>
          )}
        </div>
      </div>
      <div>
        <button type="reset" class="cancel">
          Cancel
        </button>
        <button type="submit" class="submit">
          Create User
        </button>
      </div>
    </div>
  );
}
