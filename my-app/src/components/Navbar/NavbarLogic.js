import { useState } from "react";

function ChangeNavbar() {
  const [change, setChangeVal] = useState(false);

  const changeNavbarState = () => {
    setChangeVal(true);
  };

  return { change, changeNavbarState };
}

export default ChangeNavbar;
