import { ReactNode } from "react";
import { ReduxProvider } from "./ReduxProvider";

type ProviderProps = {
  children: ReactNode;
};

export const Providers = ({ children }: ProviderProps) => {
  return <ReduxProvider>{children}</ReduxProvider>;
};
