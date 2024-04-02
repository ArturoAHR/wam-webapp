import { useTestApiConnectivityQuery } from "@modules/test";

export const Test = () => {
  const { data, isError, isLoading } = useTestApiConnectivityQuery();

  return (
    <div className="testing">
      <div> Data: {JSON.stringify(data)}</div>
      <div> Is Error: {JSON.stringify(isError)}</div>
      <div> Is Loading: {JSON.stringify(isLoading)}</div>
    </div>
  );
};
