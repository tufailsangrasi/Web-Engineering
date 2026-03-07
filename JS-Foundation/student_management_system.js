function stu_data(name, dept, rollnum) {
  function stu_marks(marks) {
    return marks;
  }
  return `${name} , ${dept} , ${rollnum}`;
}

console.log(stu_data("Tufail", "Software", "22SW071"));

// Javascript execution context

// Arrow function and implicit return
const calculateamount = (price, quantity) => {
  return price * quantity;
};

const calculateamount_implicitly = (price, quantity) => price * quantity;
