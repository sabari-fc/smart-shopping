import { categories } from "../constants/constants";
import CategoryMenuButton from "../components/CategoryMenuButton";

const CategoryMenu = () => {
  return (
    <div className="flex flex-row py-4 justify-between items-center mx-[60px]">
      {categories.map((category, index) => (
        <CategoryMenuButton key={index} label={category} />
      ))}
    </div>
  );
};

export default CategoryMenu;
