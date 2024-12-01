import { BackgroundLines } from "@/components/ui/background-lines";

const AuthLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className=" h-screen">
      <BackgroundLines className="bg-black flex items-center justify-center">
        <main>{children}</main>
      </BackgroundLines>
    </div>
  );
};
export default AuthLayout;