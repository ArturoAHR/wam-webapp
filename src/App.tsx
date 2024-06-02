import { Providers } from "@modules/core";
import { SoonPage } from "./pages/soon/Soon";
import { Test } from "./pages/test/Test";

export const App = () => {
  if (import.meta.env.VITE_ENVIRONMENT === "production") {
    return <SoonPage />;
  }

  return (
    <Providers>
      <Test />
    </Providers>
  );
};
