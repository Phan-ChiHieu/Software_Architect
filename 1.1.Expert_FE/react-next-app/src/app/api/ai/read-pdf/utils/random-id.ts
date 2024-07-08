import md5 from "md5";

const generateRandomId = () => {
  // Generate a random string (e.g., using current timestamp and a random number)
  const randomString = `${Date.now()}${Math.random()}`;

  // Generate MD5 hash of the random string
  const hash = md5(randomString);

  return hash;
};

export default generateRandomId;
