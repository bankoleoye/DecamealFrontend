export function saveUserToken(token) {
  if (window !== "undefined")
    window.localStorage.setItem("access-token", token);
}

export function getSavedUserToken() {
  if (window !== "undefined") {
    return window.localStorage.getItem("access-token");
  } else return "";
}

export function saveUserId(id) {
  if (window !== "undefined")
    window.localStorage.setItem("user-id", id);
}

export function getSavedUserId() {
  if (window !== "undefined") {
    return window.localStorage.getItem("user-id");
  } else return "";
}
