import { useEffect, useState } from "react";
import { http } from "../utils";
import { useAuth0 } from "@auth0/auth0-react";

function IndexPage() {
  const [text, setText] = useState("");
  const { getAccessTokenSilently } = useAuth0();

  /** 获取需要权限的API */
  const handlePrivate = async () => {
    try {
      /** 获取 access token  */
      const token = await getAccessTokenSilently({
        audience: "private-api-endpoint-guardians",
      });
      console.log("[IndexPage] token ===> ", token);
      /** 用 access token 请求API */
      const response = await http({
        url: "/private",
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      
      /** */
      if (response.status === 200) {
        setText(JSON.stringify(response.data, null, 2));
        return;
      }
    } catch (response) {
      setText("请求/private出错: " + response);
    }
  };

  /** 获取不需要权限的API */
  const handlePublic = async () => {
    const response = await http({
      url: "/public",
    });
    if (response.status === 200) {
      setText(JSON.stringify(response.data, null, 2));
      return;
    }
    console.log("请求/public出错");
  };

  useEffect(() => {
    console.log("IndexPage mounted");
  });

  return (
    <div className="index-page">
      <div className="btn-group bg-gray-100 flex ">
        <button
          className="m-3 p-2 px-4 bg-green-400 text-green-800 rounded "
          onClick={handlePublic}
        >
          获取公共API
        </button>
        <button
          className="m-3 p-2 px-4 bg-green-400 text-green-800 rounded "
          onClick={handlePrivate}
        >
          获取私有API
        </button>
      </div>

      {text.trim() != "" && (
        <div className="response-area border">
          <pre className="bg-white p-3">
            <code>{text}</code>
          </pre>
        </div>
      )}
    </div>
  );
}

export default IndexPage;
