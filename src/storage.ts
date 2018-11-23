export const loadLinks = () => {
  const data = localStorage.getItem("state");
  try {
    return data ? JSON.parse(data) : undefined;
  } catch (err) {
    return undefined;
  }
};

export const saveLinks = (data: any) => {
  try {
    localStorage.setItem("state", JSON.stringify(data));
  } catch (err) {
    // Ignore write errors
  }
};
