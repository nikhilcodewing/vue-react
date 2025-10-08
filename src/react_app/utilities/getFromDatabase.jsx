export const getFromDatabase = async () => {
  // // Send to  API
  try {
    const response = await fetch("http://poc-gutenberg-be.test/api/posts", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    });
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const data = await response.json();
    console.log("Response received: ", data);

    return data;
  } catch (error) {
    console.error("Error: ", error);
    return [];
  }
};
export const loadPost = async (id) => {
  try {
    const response = await fetch(
      "http://poc-gutenberg-be.test/api/posts/" + id,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
      }
    );
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error: ", error);
    return [];
  }
};
