import { useNavigate } from "react-router-dom";

const logo = require("../images/logo.svg").default;

const ShopLogo = () => {
  const navigate = useNavigate();
  return (
    <div>
      <button
        onClick={(e) => {
          e.preventDefault();
          navigate("/");
        }}
      >
        <img src={logo} alt="logo" />
      </button>
    </div>
  );
};

export default ShopLogo;
