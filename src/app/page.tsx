import Image from "next/image";
import styles from "./styles/page.module.css";
import GoogleLoginButton from "../components/GoogleLoginButton";

export default function Home() {
  return (
    <div>
      <GoogleLoginButton/>
    </div>
  );
}
