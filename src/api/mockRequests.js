export const tryLogin = async (login, password) => {
  await new Promise(response => setTimeout(response, 2000));
  if (login === 'admin' && password === 'admin') {
    return {
      data: true,
      error: null,
    };
  } else {
    throw {
      data: null,
      error: "auth error",
    };
  }
};
