const url = "http://localhost:3000/api/v1";

const getAllDonations = async () => {
  const response = await fetch(`${url}/donations`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  });
  if (!response.ok) throw new Error("donations Not fetched");
  const data = await response.json();
  return data;
};

export { getAllDonations };
