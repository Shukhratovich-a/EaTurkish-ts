import React from "react";

import { Context } from "../Context/Nav";

const useNav = (): [boolean, (state: boolean) => void] => {
  const ctx = React.useContext(Context);

  return [ctx!.state, ctx!.setState];
};

export default useNav;
