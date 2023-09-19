import { useState } from "react";

const TabPanel = ({ title, description, index, selectedTab, image }) => {
  return (
    <div
      role="tabpanel"
      id={`tab-panel-${index}`}
      aria-labelledby={`tab-button-${index}`}
      hidden={selectedTab !== index ? true : false}
      tabIndex={selectedTab === index ? "0" : "-1"}
      className="md:pd-[4.1875rem] grid min-h-[29.8125rem] items-center justify-center gap-8 px-[0.25rem] md:grid-cols-[1.1fr_1fr] md:justify-between md:gap-[1.4375rem] lg:items-start"
    >
      <div className="width-fill-available">
        <img
          src={image}
          alt=""
          aria-hidden="true"
          width={538}
          height={347}
          className="mx-auto lg:mx-0"
        />
      </div>
      <div className="text-center md:flex md:flex-col md:gap-[1.5625rem] md:text-left lg:pt-[3.25rem] lg:pl-[4.5rem]">
        <h3 className="mt-[1.125rem] text-[1.375rem] font-bold leading-none text-very-dark-blue md:text-[2rem]">
          {title}
        </h3>
        <p className="leading-[1.57] text-very-dark-blue/50 md:text-normal">
          {description}
        </p>
        <div className="">
        <a href="#" className="inline-flex  my-2 m-auto  items-center justify-center px-5 py-3 text-base font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 dark:focus:ring-blue-900">
    Learn more
    <svg className="w-3.5 h-3.5 ml-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
  </svg>
</a>

        </div>
      </div>
    </div>
  );
};

export default TabPanel;