const API = import.meta.env.VITE_API_URL;

export const getHello = async (): Promise<{ message: string }> => {
  const res = await fetch(`${API}/hello`);
  return res.json();
};
