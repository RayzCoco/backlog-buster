import Data from "@/app/components/Data";
import LoginSection from "@/app/components/LoginSection";

export default function Login() {
  return (
    <div className="flex flex-col justify-center items-center h-dvh p-6">
      <div className="w-full md:w-1/4">
        <LoginSection />
        <Data />
      </div>
    </div>
  );
}
