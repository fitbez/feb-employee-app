export function HeaderOne({ name }) {
  return <h2>{name}</h2>;
}

//destructuring

const obj = {
  firstName: "fitsum",
  age: "67",
};

const props = {
  name: "employee details",
};

const { firstName, age } = obj;

console.log(obj.age); // 67
console.log(firstName, age); // fitsum, 67
