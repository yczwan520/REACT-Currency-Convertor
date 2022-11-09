import React from "react";
import { useNavigate } from "react-router-dom";

const Goback = (props) => {
  const navigate = useNavigate();
  return (
    <div>
      <p>
        This is the best currency convertor in the world! Convert foreign
        dollars to Canadian dollar
      </p>
      <p>Let's try it NOW!</p>
      <button size="huge" onClick={() => navigate(-1)}>
        Go Back
      </button>
    </div>
  );
};
export default Goback;
