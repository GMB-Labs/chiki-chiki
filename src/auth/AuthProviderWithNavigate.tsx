import { Auth0Provider } from "@auth0/auth0-react";
import { useNavigate } from "react-router-dom";
import { type ReactNode } from "react";

interface Props {
  children: ReactNode;
}

export const AuthProviderWithNavigate = ({ children }: Props) => {
  const navigate = useNavigate();

  const domain = "dev-ydl81668b887kqqx.us.auth0.com";
  const clientId = "pskF9kqKBDJWinlthdQNlgnX1UThMlfm";
  const audience = "https://foodlytics/api/v1/auth";

  const onRedirectCallback = (appState: any) => {
navigate(appState?.returnTo || window.location.pathname);
  };

  return (
    <Auth0Provider
      domain={domain}
      clientId={clientId}
      authorizationParams={{
        redirect_uri: window.location.origin,
        audience,
        scope: "openid profile email patient",
      }}
      onRedirectCallback={onRedirectCallback}
      cacheLocation="localstorage"
      useRefreshTokens={true}
    >
      {children}
    </Auth0Provider>
  );
};
