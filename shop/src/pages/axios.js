import axios from "axios";

export const getAxios = (setShoes, shoes, moreCount, setLoad) => {
  axios
    .get(`https://codingapple1.github.io/shop/data${moreCount + 2}.json`)
    .then((result) => {
      setTimeout(() => {
        let newShoes = shoes.concat(result.data);
        setShoes(newShoes);
        setLoad(false);
      }, 1000);
    })
    .catch(() => {
      console.log("실패");
      setLoad(false);
    });
};
