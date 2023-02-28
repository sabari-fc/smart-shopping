import React from "react";

type TopNavItemProps = {
  icon: string;
  label: string;
};

const TopNavItem = (props: TopNavItemProps) => {
  return (
    <div className="flex flex-row mx-4 text-sm">
      <img src={props.icon} alt="icon" className="mr-2 text-blue-color" />
      <span>{props.label}</span>
    </div>
  );
};

export default TopNavItem;
