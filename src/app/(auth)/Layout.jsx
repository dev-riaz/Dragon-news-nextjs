import Navbar from "@/components/sheard/Navbar";


const AuthLayout = ({ children }) => {
  return (
    <>
      <Navbar></Navbar>
      {children}
    </>
  );
};

export default AuthLayout;
