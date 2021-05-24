const getDate = () => {
  let d = new Date();
  let date = "";
  date += d.getDate() + "/" + d.getMonth() + "/" + d.getFullYear();
  return date;
};

export default getDate;
