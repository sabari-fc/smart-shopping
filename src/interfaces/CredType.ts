type credType = {
  creds: {
    input: {
      emailPhone: string;
      password: string;
      otp: string;
      fullName: string;
    };
    name: string;
    email: string;
    phone: string;

    loggedIn: string;
  };

  setCreds: Function;
};
export default credType;
