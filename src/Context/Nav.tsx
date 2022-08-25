import React from "react";

interface Props {
  children?: React.ReactNode | React.ReactNode[];
}

interface Nav {
  state: boolean;
  setState: (state: boolean) => void;
}

const Context = React.createContext<Nav | null>(null);

const Provider: React.FC<Props> = ({ children }) => {
  const [state, setState] = React.useState<boolean>(false);

  React.useEffect((): void => {
    if (state) document.body.style.overflow = "hidden";
    else document.body.style.overflow = "auto";
  }, [state]);

  return <Context.Provider value={{ state, setState }}>{children}</Context.Provider>;
};

export { Context, Provider };
