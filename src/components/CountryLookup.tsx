"use client";

import { useEffect, useState } from "react";

export default function CountryLookup() {
  const [country, setCountry] = useState("Serbia");

  useEffect(() => {
    const getCountry = async () => {
      // const response = await fetch(
      //   `https://exteme-ip-lookup.com/json/?key=${process.env.NEXT_PUBLIC_IP_KEY}`
      // )
      //   .then((res) => res.json())
      //   .then((res) => res.country);
      // if (!response) return;
      // setCountry(response);
    };
    getCountry();
  }, []);

  return <div>{country}</div>;
}
