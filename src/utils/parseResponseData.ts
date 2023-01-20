const parseResponseData = async (response) => {
  let data = await response.text();
  let isJSON;

  try {
    data = JSON.parse(data);
    isJSON = true;
  } catch {
    isJSON = false;
  }

  return {
    data,
    isJSON,
  };
};

export default parseResponseData;
