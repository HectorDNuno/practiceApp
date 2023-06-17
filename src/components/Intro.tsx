import React from "react";
import { Swiper, SwiperSlide, useSwiper } from "swiper/react";
import "swiper/css";
import { IonButton, IonText } from "@ionic/react";
import Phone from "../assets/phone.svg";
import Pencil from "../assets/pencil.svg";
import Laptop from "../assets/laptop.svg";
import "./Intro.css";

interface ContainerProps {
  onFinish: () => void;
}

const SwiperButtonNext = ({ children }: any) => {
  const swiper = useSwiper();
  return <IonButton onClick={() => swiper.slideNext()}>{children}</IonButton>;
};

const Intro: React.FC<ContainerProps> = ({ onFinish }) => {
  return (
    <Swiper>
      <SwiperSlide>
        <img src={Phone} alt="mobile phone" />
        <IonText>
          <h3>Build awesom apps with Ionic UI components!</h3>
        </IonText>
        <SwiperButtonNext>Next</SwiperButtonNext>
      </SwiperSlide>

      <SwiperSlide>
        <img src={Laptop} alt="line of people" />
        <IonText>
          <h3>Create powerful native apps with capacitor!</h3>
        </IonText>
        <SwiperButtonNext>Next</SwiperButtonNext>
      </SwiperSlide>

      <SwiperSlide>
        <img src={Pencil} alt="line of people" />

        <IonText>
          <h3>Enjoy learning to code!</h3>
        </IonText>

        <IonButton
          onClick={() => {
            onFinish();
          }}
        >
          Finish
        </IonButton>
      </SwiperSlide>
    </Swiper>
  );
};

export default Intro;
