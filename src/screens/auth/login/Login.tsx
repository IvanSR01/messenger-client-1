/* eslint-disable react-hooks/rules-of-hooks */
"use client";
import { useError } from "@/hooks/useError";
import { TypeLogin } from "@/shared/types/auth.type";
import Link from "next/link";
import { toast } from "react-toastify";
import Form from "../auth-components/form/Form";
import OAuth from "../auth-components/oauth/OAuth";
import { inputDataLogin as inputData } from "../input.data";
import useAuth from "../useAuth";
import styles from "./Login.module.scss";
import { TypeTokens } from "@/shared/types/tokens.type";
import { useRouter } from "next/navigation";
import { AuthResponse } from "@/shared/intreface/auth-response.interface";
import AuthPageLayout from "../auth-components/layout/AuthPageLayout";

const Login = () => {
  const { push } = useRouter();
  const { onSubmit, isPending } = useAuth<TypeLogin, AuthResponse>({
    api: "login",
    onError: (err) => toast.error(useError(err)),
    onSuccess: (data) => {
      if (data.isVerified) push("/dashboard/main");
      else push("/auth/email");
    },
  });

  return (
    <AuthPageLayout>
      <h2 className={styles.heading}>Login</h2>
      <Form
        name="login"
        inputData={inputData}
        onSubmit={onSubmit}
        isPending={isPending}
      />
      <p className={styles.or}>Or</p>
      <OAuth />
      <div className={styles.footer}>
        You dont have an account? <Link href="/auth/register">Register</Link>
      </div>
    </AuthPageLayout>
  );
};

export default Login;
