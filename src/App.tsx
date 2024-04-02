import { Providers } from "@modules/core";
import { Test } from "./pages/test/Test";

export const App = () => {
  return (
    <Providers>
      <div>
        <Test />
      </div>
    </Providers>
  );
};
