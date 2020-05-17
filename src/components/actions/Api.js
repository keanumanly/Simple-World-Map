// import useSwr from "swr";
import axios from "axios"

// const fetcher = (...args) => axios.get(...args).then(res => res.data);

// export const GetData = async () => {
//   const date = new Date();
//   const today =
//     date.getMonth() + 1 + "-" + (date.getDate() - 1) + "-" + date.getFullYear();
//   const url = `https://covid19.mathdro.id/api/daily/${today}`;

//   const { data, error } = useSwr(url, { fetcher });
//   const cases = data && !error? data : []
//   console.log(cases)
// //   return cases
// };

export const GetData = async () => {
  
  return new Promise((resolve)=>{

  let date = new Date();
  let today =
    date.getMonth() + 1 + "-" + (date.getDate() - 1) + "-" + date.getFullYear();
  let url = `https://covid19.mathdro.id/api/daily/${today}`;
  setTimeout(()=>{
    resolve(axios.get(url))
  },500)
  })
};
