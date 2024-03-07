import { useRouteError } from "react-router-dom";

function GlobalError() {
  const error = useRouteError();
  console.log("[GlobalError] error", error);
  return (
    <div className="global-error">
      <h1>Oops, global error page...</h1>
    </div>
  );
}

export default GlobalError;
