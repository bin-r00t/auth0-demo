import { useRouteError } from "react-router-dom";

function GlobalError() {
  const error = useRouteError();
  console.error("[GlobalError] error", error);
  return (
    <div className="global-error">
      <h1 className="p-3 mb-3 bg-black text-white">
        Oops, global error page...
      </h1>
      <p className="p-3 text-red-500 font-bold">{error.message}</p>
    </div>
  );
}

export default GlobalError;
