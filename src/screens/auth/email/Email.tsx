/* eslint-disable react-hooks/rules-of-hooks */
"use client";
import { FC, useEffect, useState } from "react";
import styles from "./Email.module.scss";
import AuthPageLayout from "../auth-components/layout/AuthPageLayout";
import authService from "@/services/auth-service/auth.service";
import Form from "../auth-components/form/Form";
import { inputDataEmail as inputData } from "../input.data";
import useAuth from "../useAuth";
import { useError } from "@/hooks/useError";
import { toast } from "react-toastify";
import { useRouter } from "next/navigation";
import { AuthResponse } from "@/shared/intreface/auth-response.interface";
import { useQuery } from "@tanstack/react-query";

const Email: FC = () => {
  const [code, setCode] = useState(0);
  const { push } = useRouter();
  const { isPending, onSubmit } = useAuth<undefined, AuthResponse>({
    api: "verifyCode",
    onError: (err) => toast.error(useError(err)),
    onSuccess: () => push("/"),
  });
  const { data } = useQuery({
    queryKey: ["code"],
    queryFn: () => authService.getCode(),
  });
  useEffect(() => {
    if (data) setCode(data);
  });
  const mainSubmit = (data: { code: number }) => {
    if (data.code === code) onSubmit(undefined);
    else toast.error("Wrong code");
  };
  return (
    <AuthPageLayout>
      <div className={styles.heading}>Check your email</div>
      <Form
        name="login"
        inputData={inputData}
        onSubmit={mainSubmit}
        isPending={isPending}
      />
    </AuthPageLayout>
  );
};
export default Email;
