// Consistancy Is King
// Clear, searchable & obvious
// Var names that make sense

// Constant variables uppercase syntax common
const BASE_SALARY = 16000;
const SALARY_MULTIPLIER = 4;

const makePerson = ({ firstName, age, lastName, job }) => {
  return {
    name: firstName + " " + lastName,
    age,
    job,
    salary: BASE_SALARY * SALARY_MULTIPLIER,
  };
};

const dev = makePerson({
  firstName: "Hardik",
  lastName: "Prajapati",
  age: 19,
  job: "Web Dev",
});

// DO NOT DO
// const hireDev = ( devInfo ) => {
//   const hiredDevInfo = {
//     hired: true,
//     ...devInfo
//   };
//   return hiredDevInfo;
// };

// Correct
const hireDev = ({dev}) => {
  const hiredDev = {
    hired: true,
    ...dev,
  };
  return hiredDev;
};

console.log(hireDev({dev}));

const ytd = 100000; // Sales year to date
const salesYearToDate = 100000;
