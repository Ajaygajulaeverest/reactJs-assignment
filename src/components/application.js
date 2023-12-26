// import { Welcome } from "./componenet";

import { useState } from "react";
import AWS from "aws-sdk";

const validFileTypes = ["image/jpg", "image/jpeg", "image/png"];

export default function Upload() {
  const [file, setFile] = useState(null);
  const [error, setError] = useState("");
  const [isButtonDisabled, setButtonDisabled] = useState(false);

  const uploadFile = async () => {
    const S3_BUCKET = "simpleaj";
    const REGION = "ap-south-1";
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

    var upload = s3
      .putObject(params)
      .on("httpUploadProgress", (evt) => {
        console.log(
          "Uploading " + parseInt((evt.loaded * 100) / evt.total) + "%"
        );
      })
      .promise();

    await upload.then((err, data) => {
      console.log(err);
      alert("File uploaded successfully.");
    });
  };
  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (!validFileTypes.find((type) => type === file.type)) {
      setError("File must be in JPEG/PNG format");
      setButtonDisabled(false);
      return;
    }
    
    setButtonDisabled(true);
    setError("")
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
            <button onClick={uploadFile} disabled={!isButtonDisabled}>
              Upload!
            </button>

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
