import React, { useEffect, useState, useMemo } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Capsule } from "../components/Capsule/Capsule";
import { FormControl } from "../components/FormControl/FormControl";
import * as LandingActions from "../store/Landing/Index";
import { InputData } from "../utils/initialStates";
import { Pagination } from "../components/Pagination/Pagination";
import { RiArrowUpDownFill } from "react-icons/ri";

export const Landing = (props) => {
  const [inputData, setInputData] = useState(InputData);
  const [currentPage, setCurrentPage] = useState(1);
  const dispatch = useDispatch();
  const capsules = useSelector((state) => state.Landing.capsules);
  const click = useSelector((state) => state.Landing.click);
  let PageSize = 10;

  const currentCapsuleData = useMemo(() => {
    const firstPageIndex = (currentPage - 1) * PageSize;
    const lastPageIndex = firstPageIndex + PageSize;
    return capsules.slice(firstPageIndex, lastPageIndex);
  }, [currentPage, capsules, PageSize]);

  useEffect(() => {
    dispatch(LandingActions.getCapsulesApi());
  }, [dispatch]);

  const clickHandler = (id) => {
    console.log(id);
    dispatch(LandingActions.getCapsuleApi(id));
    props.open();
  };

  const changeHandler = (type, event) => {
    setInputData((inputData) => {
      const updatedData = { ...inputData };
      const updatedDataElement = { ...updatedData[type] };
      if (type === "Search") {
        dispatch(
          LandingActions.searchData(
            event.target.value,
            inputData["Search_Type"]["value"]
          )
        );
      }
      updatedDataElement.value = event.target.value;
      updatedData[type] = updatedDataElement;
      return updatedData;
    });
  };

  let formData = [];
  for (let key in inputData) {
    formData.push({
      label: key,
      elementData: inputData[key],
    });
  }
  return (
    //Banner
    //Input Field,Filters
    //grid data
    //Pagination
    <>
      <div className="text-lg font-bold text-gray-900 p-0.5 m-8">
        ** Note: Please Choose the appropriate option from the dropdown before
        Search **
      </div>
      <div className="flex items-center flex-wrap justify-around">
        {formData &&
          formData.length > 0 &&
          formData.map((form) => {
            return (
              <FormControl
                type={form.elementData.elementType}
                fieldType={form.elementData.elementConfig.type}
                placeholder={form.elementData.elementConfig.placeholder}
                value={form.elementData.value}
                elementConfig={form.elementData.elementConfig}
                changeHandler={changeHandler.bind(this, form.label)}
              />
            );
          })}
      </div>
      <div
        className="flex items-center justify-center p-2 m-8 "
        onClick={() =>
          dispatch(LandingActions.sortCapsules("original_launch", click))
        }
      >
        <span className="cursor-pointer border text-cyan-900">
          Sort By Original_Launch&nbsp;&nbsp;
        </span>
        <RiArrowUpDownFill className="cursor-pointer border fill-cyan-900 " />
      </div>
      <div
        className="divide-y divide-gray-200 flex items-center flex-wrap justify-center"
        id="capsules_list"
      >
        {currentCapsuleData &&
          currentCapsuleData.length > 0 &&
          currentCapsuleData.map((capsule) => {
            return (
              <Capsule
                capsule={capsule}
                clickHandler={clickHandler.bind(
                  this,
                  capsule.capsule_serial.split(" ")[1]
                )}
              />
            );
          })}
        {currentCapsuleData?.length === 0 && (
          <p className="text-5xl font-bold text-cyan-900 p-0.5 m-8">
            No Records Found!!
          </p>
        )}
      </div>
      {currentCapsuleData?.length > 0 && (
        <Pagination
          className="flex justify-center items-center"
          currentPage={currentPage}
          totalCount={capsules.length}
          pageSize={PageSize}
          onPageChange={(page) => setCurrentPage(page)}
        />
      )}
    </>
  );
};
