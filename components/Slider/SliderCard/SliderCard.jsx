// import React from "react";
// import { motion } from "framer-motion";
// import LikeProfile from "../../LikeProfile/LikeProfile";
// import Style from "./SliderCard.module.css";
// import images from "../../../img"; // Assuming you have a directory for videos
// import ReactPlayer from 'react-player';

// const SliderCard = ({ el, i }) => {
//   return (
//     <motion.div className={Style.sliderCard}>
//       <div className={Style.sliderCard_box}>
//         <motion.div className={Style.sliderCard_box_video}>
//           <ReactPlayer
//             className={Style.sliderCard_box_img_img}
//             controls
//             autoPlay
//             muted
//             loop
//             url={el.background} 
//             width={300}
//             height={300}
//             objectfit="cover"
//           />
//         </motion.div>
//       <div className={Style.sliderCard_box_title}>
//           <p>NFT Video #{i + 1}</p>
//           <div className={Style.sliderCard_box_title_like}>
//             <small>{i + 4} 0f 100</small>
//           </div>
//       </div>

//         <div className={Style.sliderCard_box_price}>
//           <div className={Style.sliderCard_box_price_box}>
//             <small>Current Bid</small>
//             <p>{i + 2}.000 ETH</p>
//           </div>

//           <div className={Style.sliderCard_box_price_time}>
//             <small>Remaining time</small>
//             <p>
//               {i + 1}h : 15m : {i + 40}s
//             </p>
//           </div>
//         </div>
//       </div>
//     </motion.div>
//   );
// };

// export default SliderCard;

import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import LikeProfile from "../../LikeProfile/LikeProfile";
import Style from "./SliderCard.module.css";
import images from "../../../img";
import ReactPlayer from 'react-player';

const SliderCard = ({ el, i }) => {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  return (
    <motion.div className={Style.sliderCard}>
      <div className={Style.sliderCard_box}>
        <motion.div className={Style.sliderCard_box_video}>
          {isClient && (
            <ReactPlayer
              className={Style.sliderCard_box_img_img}
              controls
              autoPlay
              muted
              loop
              url={el.background} 
              width={300}
              height={300}
              objectFit="cover"
            />
          )}
        </motion.div>
        <div className={Style.sliderCard_box_title}>
          <p>NFT Video #{i + 1}</p>
          <div className={Style.sliderCard_box_title_like}>
            <small>{i + 4} 0f 100</small>
          </div>
        </div>

        <div className={Style.sliderCard_box_price}>
          <div className={Style.sliderCard_box_price_box}>
            <small>Current Bid</small>
            <p>{i + 2}.000 ETH</p>
          </div>

          <div className={Style.sliderCard_box_price_time}>
            <small>Remaining time</small>
            <p>
              {i + 1}h : 15m : {i + 40}s
            </p>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default SliderCard;









































// import React from "react";
// import { motion } from "framer-motion";
// import Image from "next/image";

// //INTERNAL IMPORT
// import Style from "./SliderCard.module.css";
// import images from "../../../img";
// import LikeProfile from "../../LikeProfile/LikeProfile";

// const SliderCard = ({ el, i }) => {
//   return (
//     <motion.div className={Style.sliderCard}>
//       <div className={Style.sliderCard_box}>
//         <motion.div className={Style.sliderCard_box_img}>
//           <Image
//             src={el.background}
//             className={Style.sliderCard_box_img_img}
//             alt="slider profile"
//             width={500}
//             height={300}
//             objectFit="cover"
//           />
//         </motion.div>
//         <div className={Style.sliderCard_box_title}>
//           <p>NFT Video #{i + 1}</p>
//           <div className={Style.sliderCard_box_title_like}>
//             {/* <LikeProfile /> */}
//             <small>{i + 4} 0f 100</small>
//           </div>
//         </div>

//         <div className={Style.sliderCard_box_price}>
//           <div className={Style.sliderCard_box_price_box}>
//             <small>Current Bid</small>
//             <p>{i + 2}.000 ETH</p>
//           </div>

//           <div className={Style.sliderCard_box_price_time}>
//             <small>Reaming time</small>
//             <p>
//               {i + 1}h : 15m : {i + 4}0s
//             </p>
//           </div>
//         </div>
//       </div>
//     </motion.div>
//   );
// };

// export default SliderCard;
