/* eslint-disable prettier/prettier */

export const categories = [
    {
      code: "",
      pic: "https://img.icons8.com/fluent/96/000000/news.png",
      name: "general",
    },
    {
      code: "",
      pic: "https://img.icons8.com/fluent/96/000000/hard-working.png",
      name: "business",
    },
    {
      code: "",
      pic: "https://img.icons8.com/fluent/96/000000/movie-projector.png",
      name: "entertainment",
    },
    {
      pic: "https://img.icons8.com/fluent/96/000000/stethoscope.png",
      name: "health",
    },
    {
      pic: "https://img.icons8.com/fluent/96/000000/microscope.png",
      name: "science",
    },
    {
      pic: "https://img.icons8.com/fluent/96/000000/trophy.png",
      name: "sports",
    },
    {
      pic: "https://img.icons8.com/fluent/96/000000/artificial-intelligence.png",
      name: "technology",
    },
  ];

  
  export const BASE_URL = "https://saurav.tech/NewsAPI/";
  
  export const getNewsAPI = (category, country = "in") => {
    return `${BASE_URL}/top-headlines/category/${category}/${country}.json`;
  };
  
 