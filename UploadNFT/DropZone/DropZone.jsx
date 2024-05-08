import React, { useState, useCallback } from "react";
import { useDropzone } from "react-dropzone";
import Image from "next/image";

//INTRNAL IMPORT
import Style from "./DropZone.module.css";
import images from "../../img";

const DropZone = ({
  fileType,
  title,
  heading,
  subHeading,
  name,
  website,
  description,
  royalties,
  fileSize,
  category,
  properties,
  uploadToIPFS,
  uploadToPinata,
  setImage,
 
}) => {
  const [fileUrl, setFileUrl] = useState(null);

  const onDrop = useCallback(async (acceptedFile) => {
    // const url = await uploadToIPFS(acceptedFile[0]);
    const url = await uploadToPinata(acceptedFile[0]);
    setFileUrl(url);
    setImage(url);
    console.log(url);
  });

  const { getRootProps, getInputProps } = useDropzone({
    onDrop,
    accept: "image/*",
    maxSize: 5000000,
  });

  return (
    <div className={Style.DropZone}>
      <div className={Style.DropZone_box} {...getRootProps()}>
        <input {...getInputProps()} />
        <div className={Style.DropZone_box_input}>
          <p>{title}</p>
          <div className={Style.DropZone_box_input_img}>
            <Image
              src={images.upload}
              alt="upload"
              width={100}
              height={100}
              objectFit="contain"
              className={Style.DropZone_box_input_img_img}
            />
          </div>
          <p>{heading}</p>
          <p>{subHeading}</p>
        </div>
      </div>

      {fileUrl && (
        <aside className={Style.DropZone_box_aside}>
          <div className={Style.DropZone_box_aside_box}>
            <img src={fileUrl} alt="nft image" width={200} height={200} />

            <div className={Style.DropZone_box_aside_box_preview}>
              <div className={Style.DropZone_box_aside_box_preview_one}>
                <p>
                  <samp>NFT Name:</samp>
                  {name || ""}
                </p>
                <p>
                  <samp>Website:</samp>
                  {website || ""}
                </p>
              </div>

              <div className={Style.DropZone_box_aside_box_preview_two}>
                <p>
                  <span>Description</span>
                  {description || ""}
                </p>
              </div>

              <div className={Style.DropZone_box_aside_box_preview_three}>
                <p>
                  <span>Royalties</span>
                  {royalties || ""}
                </p>
                <p>
                  <span>FileSize</span>
                  {fileSize || ""}
                </p>
                <p>
                  <span>Properties</span>
                  {properties || ""}
                </p>
                <p>
                  <span>Category</span>
                  {category || ""}
                </p>
              </div>
            </div>
          </div>
        </aside>
      )}
    </div>
  );
};

export default DropZone;

// import React, { useState, useCallback } from "react";
// import { useDropzone } from "react-dropzone";
// import Image from "next/image";

// //INTERNAL IMPORT
// import Style from "./DropZone.module.css";
// import images from "../../img";

// const DropZone = ({
//   fileType,
//   title,
//   heading,
//   subHeading,
//   name,
//   website,
//   description,
//   royalties,
//   fileSize,
//   category,
//   properties,
//   uploadToIPFS,
//   uploadToPinata,
//   setImage,
 
// }) => {
//   const [fileUrl, setFileUrl] = useState(null);

//   const onDrop = useCallback(async (acceptedFile) => {
//     // const url = await uploadToIPFS(acceptedFile[0]);
//     const url = await uploadToPinata(acceptedFile[0]);
//     setFileUrl(url);
//     setImage(url);
//     console.log(url);
//   });

//   const { getRootProps, getInputProps } = useDropzone({
//     onDrop,
//     accept: fileType === "image" ? "image/*" : fileType === "video" ? "video/*" : "audio/*",
//     maxSize: 5000000,
//   });

//   return (
//     <div className={Style.DropZone}>
//       <div className={Style.DropZone_box} {...getRootProps()}>
//         <input {...getInputProps()} />
//         <div className={Style.DropZone_box_input}>
//           <p>{title}</p>
//           <div className={Style.DropZone_box_input_img}>
//             {fileType === "image" && (
//               <Image
//                 src={images.upload}
//                 alt="upload"
//                 width={100}
//                 height={100}
//                 objectFit="contain"
//                 className={Style.DropZone_box_input_img_img}
//               />
//             )}
//             {(fileType === "video" || fileType === "audio") && (
//               <p>Drop your {fileType === "video" ? "video" : "audio"} file here</p>
//             )}
//           </div>
//           <p>{heading}</p>
//           <p>{subHeading}</p>
//         </div>
//       </div>

//       {fileUrl && (
//         <aside className={Style.DropZone_box_aside}>
//           <div className={Style.DropZone_box_aside_box}>
//             {fileType === "image" && (
//               <img src={fileUrl} alt="nft image" width={200} height={200} />
//             )}
//             {(fileType === "video" || fileType === "audio") && (
//               <video controls>
//                 <source src={fileUrl} type={fileType === "video" ? "video/mp4" : "audio/mp3"} />
//                 Your browser does not support the {fileType === "video" ? "video" : "audio"} tag.
//               </video>
//             )}
//             <div className={Style.DropZone_box_aside_box_preview}>
//               <div className={Style.DropZone_box_aside_box_preview_one}>
//                 <p>
//                   <samp>NFT Name:</samp>
//                   {name || ""}
//                 </p>
//                 <p>
//                   <samp>Website:</samp>
//                   {website || ""}
//                 </p>
//               </div>

//               <div className={Style.DropZone_box_aside_box_preview_two}>
//                 <p>
//                   <span>Description</span>
//                   {description || ""}
//                 </p>
//               </div>

//               <div className={Style.DropZone_box_aside_box_preview_three}>
//                 <p>
//                   <span>Royalties</span>
//                   {royalties || ""}
//                 </p>
//                 <p>
//                   <span>FileSize</span>
//                   {fileSize || ""}
//                 </p>
//                 <p>
//                   <span>Properties</span>
//                   {properties || ""}
//                 </p>
//                 <p>
//                   <span>Category</span>
//                   {category || ""}
//                 </p>
//               </div>
//             </div>
//           </div>
//         </aside>
//       )}
//     </div>
//   );
// };

// export default DropZone;
