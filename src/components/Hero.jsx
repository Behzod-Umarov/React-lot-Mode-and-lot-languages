import React from "react";
import { useTranslation } from "react-i18next";
import germany from "../assets/image/germany.png";
import usa from "../assets/image/usa.jpg";
import brazil from "../assets/image/brazil.png";
import iceland from "../assets/image/iceland.png";
import afghanistan from "../assets/image/afghanistan.png";
import alandislands from "../assets/image/alandIslands.png";
import algeria from "../assets/image/algeria.png";
import albania from "../assets/image/albania.png";

function Hero() {
  const { t, i18n } = useTranslation();

  const countries = [
    { name: "Germany", population: "81,770,900", region: "Europe", capital: "Berlin", flag: germany },
    { name: "United States", population: "331,000,000", region: "North America", capital: "Washington D.C.", flag: usa },
    { name: "Brazil", population: "212,600,000", region: "South America", capital: "Brasília", flag: brazil },
    { name: "Iceland", population: "366,425", region: "Europe", capital: "Reykjavík", flag: iceland },
    { name: "Afghanistan", population: "38,041,754", region: "Asia", capital: "Kabul", flag: afghanistan },
    { name: "Åland Islands", population: "29,489", region: "Europe", capital: "Mariehamn", flag: alandislands },
    { name: "Albania", population: "2,845,955", region: "Europe", capital: "Tirana", flag: albania },
    { name: "Algeria", population: "43,000,000", region: "Africa", capital: "Algiers", flag: algeria },
  ];

  const changeLanguage = (e) => {
    i18n.changeLanguage(e.target.value);
  };

  return (
    <div className="hero p-6">
      <h1 className="text-2xl font-bold mb-6">{t("Hello")}</h1>
      <div className="search-filter flex justify-between items-center mb-6">
        <select
          className="w-[10%] p-3 border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-800 dark:text-gray-200 rounded-lg"
          onChange={changeLanguage}
        >
          <option value="en">English</option>
          <option value="ru">Russian</option>
          <option value="uz">Uzbek</option>
        </select>
      </div>

      <div className="flex flex-wrap gap-10">
        {countries.map((country, index) => (
          <div key={index} className="w-full sm:w-1/2 lg:w-1/4">
            <div className="card bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg">
              <img
                className="w-full h-48 object-cover rounded-t-lg"
                src={country.flag}
                alt={`${country.name} flag`}
              />
              <h2 className="text-xl font-semibold mt-4">{country.name}</h2>
              <p className="text-sm dark:text-gray-300">{t("Population")}: {country.population}</p>
              <p className="text-sm dark:text-gray-300">{t("Region")}: {country.region}</p>
              <p className="text-sm dark:text-gray-300">{t("Capital")}: {country.capital}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Hero;