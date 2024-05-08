import React, { useState, useMemo, useCallback, useContext } from "react";
import Image from "next/image";
import { useDropzone } from "react-dropzone";

//INTERNAL IMPORT
import Style from "../styles/account.module.css";
import images from "../img";
import From from "../AccountPage/Form/Form";

const account = () => {
  const [fileUrl, setFileUrl] = useState(null);

  const onDrop = useCallback(async (acceptedFile) => {
    setFileUrl(acceptedFile[0]);
  }, []);

  const { getRootProps, getInputProps } = useDropzone({
    onDrop,
    accept: "image/*",
    maxSize: 5000000,
  });

  return (
    <div className={Style.account}>
      <div className={Style.account_info}>
        <h1>Profile settings</h1>
        <p>
          You can set preferred display name, create your profile URL and manage
          other personal settings.
        </p>
      </div>

      <div className={Style.account_box}>
        <div className={Style.account_box_img} {...getRootProps()}>
          <input {...getInputProps()} />
          <Image
            src={images.user2}
            alt="account upload"
            width={150}
            height={150}
            className={Style.account_box_img_img}
          />
          <p className={Style.account_box_img_para}>Change Image</p>
        </div>
        <div className={Style.account_box_from}>
          <From />
        </div>
      </div>
    </div>
  );
};

export default account;
// import React, { useState, useCallback } from "react";
// import Image from "next/image";
// import { useDropzone } from "react-dropzone";

// // INTERNAL IMPORT
// import Style from "../styles/account.module.css";
// import images from "../img";
// import From from "../AccountPage/Form/Form";

// const Account = () => {
//   const [fileUrl, setFileUrl] = useState(null);

//   const onDrop = useCallback((acceptedFiles) => {
//     const file = acceptedFiles[0];
//     const reader = new FileReader();

//     reader.onload = () => {
//       setFileUrl(reader.result);
//     };

//     if (file) {
//       reader.readAsDataURL(file);
//     }
//   }, []);

//   const { getRootProps, getInputProps } = useDropzone({
//     onDrop,
//     accept: ["image/jpeg", "image/png", "image/gif"],
//   maxSize: 5000000, 
//   });

//   return (
//     <div className={Style.account}>
//       <div className={Style.account_info}>
//         <h1>Profile settings</h1>
//         <p>
//           You can set preferred display name, create your profile URL and manage
//           other personal settings.
//         </p>
//       </div>

//       <div className={Style.account_box}>
//         <div className={Style.account_box_img} {...getRootProps()}>
//           <input {...getInputProps()} />
//           {fileUrl ? (
//             <Image
//               src={fileUrl}
//               alt="account upload"
//               width={150}
//               height={150}
//               className={Style.account_box_img_img}
//             />
//           ) : (
//             <Image
//               src={images.user2}
//               alt="account upload"
//               width={150}
//               height={150}
//               className={Style.account_box_img_img}
//             />
//           )}
//           <p className={Style.account_box_img_para}>Change Image</p>
//         </div>
//         <div className={Style.account_box_from}>
//           <From />
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Account;

