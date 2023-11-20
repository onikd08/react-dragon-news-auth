import { useEffect, useState } from "react";

const useLoadData = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const loadData = async () => {
      const response = await fetch("categories.json");
      const result = await response.json();
      setData(result);
    };
    loadData();
  }, []);
  return data;
};

export default useLoadData;
