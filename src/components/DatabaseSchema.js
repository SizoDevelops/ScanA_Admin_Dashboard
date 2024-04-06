"use client";

const generateRandomCode = () => {
  // Generate a random alphanumeric code (you may need a more sophisticated method)
  const characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
  const codeLength = 16;
  let code = "";
  for (let i = 0; i < codeLength; i++) {
    const randomIndex = Math.floor(Math.random() * characters.length);
    code += characters.charAt(randomIndex);
  }
  return code;
};

const generateRandomDate = () => {
  // Generate a random date (you may need a more sophisticated method)
  const startDate = new Date("2022-01-01");
  const endDate = new Date("2024-02-28");
  const randomDate = new Date(
    startDate.getTime() +
      Math.random() * (endDate.getTime() - startDate.getTime())
  );
  return randomDate.toISOString().split("T")[0];
};

const generateRandomReason = () => {
  const reasons = [
    "Moderation",
    "Excused Absence",
    "Family Emergency",
    "Appointment",
    "Other",
  ];
  const randomIndex = Math.floor(Math.random() * reasons.length);
  return reasons[randomIndex];
};
const generateRandomLastName = () => {
  const lastNames = [
    "Gumbi",
    "Smith",
    "Jones",
    "Johnson",
    "Brown",
    "Williams",
    "Lee",
    "Kim",
  ];
  const randomIndex = Math.floor(Math.random() * lastNames.length);
  return lastNames[randomIndex];
};
const generateRandomDay = () => {
  const lastNames = ["Monday", "Tuesday", "Wednesday", "Friday", "Thursday"];
  const randomIndex = Math.floor(Math.random() * lastNames.length);
  return lastNames[randomIndex];
};

const generateRandomData = () => {
  const lastName = generateRandomLastName();
  const uniqueCode = generateRandomCode();

  return {
    last_name: `${lastName}`, // Combining last name with unique code
    initial: "PO",
    code: uniqueCode,
    day: generateRandomDay(),
    date: generateRandomDate(),
    reason: generateRandomReason(),
    week: Math.floor(Math.random() * 4) + 1, // Generate a random week (1 to 4)
    
  };
};

const generateUniqueDataArray = (count) => {
  const dataArray = [];
  const uniqueCodes = new Set();

  while (dataArray.length < count) {
    const data = generateRandomData();
    dataArray.push(data);
  }

  return dataArray;
};

export const uniqueDataArray = generateUniqueDataArray(200);
