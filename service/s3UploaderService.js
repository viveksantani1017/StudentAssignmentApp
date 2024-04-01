const aws = require("aws-sdk");

class S3UploaderService {
  async uploadFileToS3(fileBuffer, filename) {
    const s3 = new aws.S3({
      accessKeyId: process.env.AWS_ACCESS_KEY,
      secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
      region: "ap-south-1",
    });

    const params = {
      Bucket: "student-assignment-app",
      Body: fileBuffer,
      Key: filename,
      ACL: "public-read",
    };

    return new Promise((resolve, reject) => {
      s3.putObject(params, (err, data) => {
        if (err) {
          console.error("Error from uploader", err);
          reject(new Error("Error while uploading file"));
        } else {
          console.log("Uploaded");
          const publicLink = `https://student-assignment-app.s3.ap-south-1.amazonaws.com/${filename}`;
          console.log("Public Link:", publicLink);
          resolve({ success: true, url: publicLink });
        }
      });
    });
  }
}

module.exports = new S3UploaderService();
