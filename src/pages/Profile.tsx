import { useAuth0 } from "@auth0/auth0-react";
import axios from "axios";
import { useEffect, useState } from "react";

export default function Profile() {
  const { user, getAccessTokenSilently, isAuthenticated } = useAuth0();
  const [data, setData] = useState<any>(null);

  useEffect(() => {
    const fetchData = async () => {
      if (!isAuthenticated) return;
      const token = await getAccessTokenSilently();
      const res = await axios.get("http://localhost:8000/api/v1/hello/me", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      setData(res.data);
    };
    fetchData();
  }, [getAccessTokenSilently, isAuthenticated]);

  return (
    <div style={{ padding: "20px" }}>
      <h2>Perfil (Hello Me)</h2>
      {user && (
        <>
          <p>{user.name}</p>
          <p>{user.email}</p>
          <img src={user.picture} width={80} />
        </>
      )}
      <h3>Respuesta del backend:</h3>
      <pre>{JSON.stringify(data, null, 2)}</pre>
    </div>
  );
}
