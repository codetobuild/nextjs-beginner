import Link from "next/link";
import { useEffect } from "react";
import { useRouter } from "next/router";

const NotFound = () => {
  const router = useRouter();
  useEffect(() => {
    setTimeout(() => {
      router.push("/");
    }, 3000);
  }, []);
  return (
    <div>
      <h1>OOPSSSS....</h1>
      <Link href="/">BACK TO HOME</Link>
    </div>
  );
};
export default NotFound;
