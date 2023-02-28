const bagIconBlue = require("../icons/icon_bag_blue.svg").default;
const bagIcon = require("../icons/icon_bag_blue.svg").default;

const expandIcon = require("../icons/icon_expand.svg").default;

type CategoryMenuButtonProps = {
  label: string;
  isSelected?: boolean;
};

const CategoryMenuButton = (props: CategoryMenuButtonProps) => {
  return (
    <div className="flex flex-row w-fit bg-light-blue flex-grow flex-shrink justify-center items-center text-sm rounded-lg py-2 px-4 gap-2 mx-3 first:ml-0 last:mr-0">
      <img src={props.isSelected ? bagIconBlue : bagIcon} alt="bag-logo" />
      <span>{props.label}</span>
      <img src={expandIcon} alt="bag-logo" />
    </div>
  );
};

export default CategoryMenuButton;
