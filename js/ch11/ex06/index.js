export const isEmailAddress = (address) => {
  if (!address || !address.includes("@")) return false;
  if (
    address.length > 254 ||
    address.split("@")[0].length > 64 ||
    address.split("@")[1].length > 255
  )
    return false;
  const emailRegex =
    /^([-A-Za-z0-9!#$%&'*+/=?^_{|}~`]+(?:\.[-A-Za-z0-9!#$%&'*+/=?^_{|}~]+)*)@[-A-Za-z0-9!#$%&'*+/=?^_{|}~`]+(\.?[-A-Za-z0-9!#$%&'*+/=?^_{|}~`]+)*$/;
  return emailRegex.test(address);
};

// const emailRegex =
//   /^[-A-Za-z0-9!#$%&'*+/=?^_{|}~`]+(\.[-A-Za-z0-9!#$%&'*+/=?^_{|}~]+)*@[A-Za-z0-9]+(\.[A-Za-z0-9!#$%&'*+-/=?^_{|}~`]+)*$/;
// console.log(emailRegex.test("foo@.example.com"));
// console.log(isEmailAddress("foo@.example.com"));
