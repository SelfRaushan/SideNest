// src/utils/api.js

const BASE_URL = "https://api.example.com"; // Replace with your actual API

export const get = async (endpoint) => {
  try {
    const res = await fetch(`${BASE_URL}${endpoint}`);
    return await res.json();
  } catch (error) {
    console.error("GET error:", error);
    throw error;
  }
};

export const post = async (endpoint, data) => {
  try {
    const res = await fetch(`${BASE_URL}${endpoint}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    });
    return await res.json();
  } catch (error) {
    console.error("POST error:", error);
    throw error;
  }
};
