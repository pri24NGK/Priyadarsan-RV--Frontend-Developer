import React, { useState } from "react";
import { Landing } from "./pages/Landing";
import { useSelector, useDispatch } from "react-redux";
import Modal from "./components/Modal/Modal";
import Backdrop from "./components/Backdrop/Backdrop";
import * as FeedBackActions from "./store/FeedBack/Index";
import { Spinner } from "./components/Spinner/Spinner";
import { CapsuleDetails } from "./components/CapsuleDetails/CapsuleDetails";
import { HeroBanner } from "./components/HeroBanner/HeroBanner";

export const App = () => {
  const FeedBack = useSelector((state) => state.FeedBack.feedBack);
  const loader = useSelector((state) => state.Landing.loader);
  const dispatch = useDispatch();
  const [show, setShow] = useState(false);

  const modalCloseHandler = () => {
    dispatch(FeedBackActions.FeedBackClear());
    setShow(false);
  };

  const chooseModalContent = (type) => {
    switch (type) {
      case "GET_SINGLE_CAPSULE": {
        return <CapsuleDetails capsule={FeedBack} />;
      }
      default:
        return "";
    }
  };

  let showModal = "";

  if (loader) {
    return (
      <div className="h-screen flex justify-center items-center">
        <Spinner />
      </div>
    );
  }

  if (FeedBack && show) {
    showModal = (
      <Backdrop>
        <Modal modalClose={modalCloseHandler}>
          {chooseModalContent(FeedBack?.feedBackType)}
        </Modal>
      </Backdrop>
    );
  }
  return (
    <>
      {showModal}
      <HeroBanner />
      <div className="container mx-auto bg-gray-200 rounded-xl shadow border p-8">
        <Landing open={() => setShow(true)} />
      </div>
    </>
  );
};
