// Verifica a validade do token e se o agente
// é de um tipo permitido para essa aplicação
export const isAuthenticated = () => {
  const refreshToken = localStorage.getItem("refreshToken");
  if (refreshToken) {
    const { exp, tipo_agente } = parseJwt(refreshToken);
    const agenteUnidade = 2;
    if (Date.now() >= exp * 1000 || tipo_agente !== agenteUnidade) {
      return false;
    } else {
      return true;
    }
  } else {
    return false;
  }
};

// Acesso ao token de acesso
export const getToken = () => localStorage.getItem("accessToken");

// Guarda os tokens no local storage
export const login = (tokens: { access: string; refresh: string }) => {
  localStorage.setItem("accessToken", tokens.access);
  localStorage.setItem("refreshToken", tokens.refresh);
};

// Remove os tokens do local storage
export const logout = () => {
  localStorage.removeItem("accessToken");
  localStorage.removeItem("refreshToken");
};

// Função que retorna os dados do payload do token
export const parseJwt = (token: string) => {
  var base64Url = token.split(".")[1];
  var base64 = base64Url.replace(/-/g, "+").replace(/_/g, "/");
  var jsonPayload = decodeURIComponent(
    atob(base64)
      .split("")
      .map(function (c) {
        return "%" + ("00" + c.charCodeAt(0).toString(16)).slice(-2);
      })
      .join("")
  );

  return JSON.parse(jsonPayload);
};
