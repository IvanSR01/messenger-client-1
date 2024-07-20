/* eslint-disable react-hooks/rules-of-hooks */
"use client";
import { useError } from "@/hooks/useError";
import { TypeRegister } from "@/shared/types/auth.type";
import Link from "next/link";
import { toast } from "react-toastify";
import Form from "../auth-components/form/Form";
import OAuth from "../auth-components/oauth/OAuth";
import { inputDataRegister as inputData } from "../input.data";
import useAuth from "../useAuth";
import styles from "./Register.module.scss";
import { useRouter } from "next/navigation";
import { AuthResponse } from "@/shared/intreface/auth-response.interface";
import AuthPageLayout from "../auth-components/layout/AuthPageLayout";

const Register = () => {
  const { push } = useRouter();
  const { onSubmit, isPending } = useAuth<TypeRegister, AuthResponse>({
    api: "register",
    onError: (err) => toast.error(useError(err)),
    onSuccess: (data) => {
			push("/auth/email");
    },
  });
  return (
    <AuthPageLayout>
      <h2 className={styles.heading}>Register</h2>
      <Form
        name="register"
        inputData={inputData}
        onSubmit={onSubmit}
        isPending={isPending}
      />
      <p className={styles.or}>Or</p>
      <OAuth />
      <div className={styles.footer}>
        Already have an account? <Link href="/auth/login">Login</Link>
      </div>
    </AuthPageLayout>
  );
};

export default Register;
