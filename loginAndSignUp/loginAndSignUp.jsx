import React, { useEffect, useState } from "react";
import Image from "next/image";
import { auth, provider } from "../firebase/firebase.js";
import { signInWithPopup } from "firebase/auth";
import { useRouter } from "next/router"; 
// INTERNALIMPORT
import Style from "./loginAndSignUp.module.css";
import images from "../img";
import { Button } from "../components/componentsindex.js";

function LoginAndSignUp() {
  const router = useRouter(); // Initializing useRouter

  const [activeBtn, setActiveBtn] = useState(1);
  const [value, setValue] = useState('');

  const handleClick = () => {
    signInWithPopup(auth, provider).then((data) => {
      setValue(data.user.email);
      localStorage.setItem("email", data.user.email);
     router.push("/"); // Redirecting to the index page
    });
  };

  useEffect(() => {
    setValue(localStorage.getItem("email"));
  }, []);

  const socialImage = [
    {
      social: images.google,
      name: "Continue with Google",
    },
    {
      social: images.twitter,
      name: "Continue with twitter",
    },
    {
      social: images.facebook,
      name: "Continue with Facebook",
    },
  ];



  return (
    <div className={Style.user}>
      <div className={Style.user_box}>
        <div className={Style.user_box_social}>
          {socialImage.map((el, i) => (
            <div
              key={i + 1}
              onClick={handleClick}
              className={`${Style.user_box_social_item} ${
                activeBtn === i + 1 ? Style.active : ""
              }`}
            >
              <Image
                src={el.social}
                alt={el.name}
                width={30}
                height={30}
                className={Style.user_box_social_item_img}
              />
              <p>
                <span>{el.name}</span>
              </p>
            </div>
          ))}
        </div>
        <p className={Style.user_box_or}>OR</p>

        <div className={Style.user_box_input}>
          <div className={Style.user_box_input_box}>
            <label htmlFor="email">Email address</label>
            <input type="email" placeholder="example@example.com" />
          </div>

          <div className={Style.user_box_input_box}>
            <label
              htmlFor="password"
              className={Style.user_box_input_box_label}
            >
              <p>Password</p>
              <p>
                <a href="#">Forget password</a>
              </p>
            </label>
            <input type="password" />
          </div>
        </div>

        <Button btnName="Continue" classStyle={Style.button} />
      </div>
    </div>
  );
}

export default LoginAndSignUp;
