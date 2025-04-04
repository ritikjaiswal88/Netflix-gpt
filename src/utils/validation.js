export const CheckValidationData =(email, password)=>{
    const isEmailValid = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(email);
    const isPasswordValid = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/.test(password);
 
    if(!isEmailValid)  return "Please enter a valid email address or phone number.";
    if(!isPasswordValid)  return "Your password must contain between 4 and 60 characters.";
 
    return null;
 };