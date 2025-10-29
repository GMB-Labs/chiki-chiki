import { useAuth0 } from "@auth0/auth0-react";

export default function Navbar() {
  const { loginWithRedirect, logout, isAuthenticated } = useAuth0();

  return (
    <nav style={{ display: "flex", gap: "10px", padding: "10px" }}>
      {!isAuthenticated && (
        <button onClick={() => loginWithRedirect()}>Iniciar sesión</button>
      )}
      {isAuthenticated && (
        <button
          onClick={() =>
            logout({ logoutParams: { returnTo: window.location.origin } })
          }
        >
          Cerrar sesión
        </button>
      )}
    </nav>
  );
}
