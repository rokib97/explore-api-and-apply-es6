const myobj = {
  id: 1,
  name: "rokib",
  job: "web instructor",
  age: 22,
  isSingle: true,
};

const jsonData = JSON.stringify(myobj);

const objFormate = JSON.parse(jsonData);

console.log(objFormate.age);
