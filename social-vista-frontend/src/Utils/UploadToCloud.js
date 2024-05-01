const cloud_name = "dyxqdduzl";
const upload_preset = "ldv4ylqa";

export const UploadToCloud = async (file, fileType) => {
  if (file && fileType) {
    const data = new FormData();
    data.append("file", file);
    data.append("upload_preset", upload_preset);
    data.append("cloud_name", cloud_name);

    let uploadUrl;

    // Determine the upload URL based on the fileType
    if (fileType.startsWith("image")) {
      // If fileType starts with "image", it's a photo
      uploadUrl = `https://api.cloudinary.com/v1_1/${cloud_name}/image/upload`;
    } else if (fileType.startsWith("video")) {
      // If fileType starts with "video", it's a video
      uploadUrl = `https://api.cloudinary.com/v1_1/${cloud_name}/video/upload`;
    } else {
      console.error("Unsupported file type:", fileType);
      return null;
    }

    try {
      const res = await fetch(uploadUrl, {
        method: "post",
        body: data,
      });

      if (res.ok) {
        const fileData = await res.json();
        console.log("Response:", fileData);
        return fileData.secure_url; 
      } else {
        console.error("Failed to upload file:", res.statusText);
        return null;
      }
    } catch (error) {
      console.error("Error uploading file:", error);
      return null;
    }
  } else {
    console.error("Error: Missing file or fileType parameter");
    return null;
  }
};
