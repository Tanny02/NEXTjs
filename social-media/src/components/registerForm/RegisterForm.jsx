"use client";

import { register } from "@lib/actions";
import styles from "./registerForm.module.css";
import Link from "next/link";
import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { useFormState } from "react-dom";

const RegisterForm = () => {
  const [state, formAction] = useFormState(register, undefined);
  const router = useRouter();

  useEffect(() => {
    state?.success && router.push("/login");
  }, [state?.success, router]);

  return (
    <form action={formAction} className={styles.form}>
      <input type="text" placeholder="username" name="username" required />
      <input type="email" placeholder="email" name="email" required />
      <input type="password" placeholder="password" name="password" required />
      <input
        type="password"
        placeholder="password again"
        name="passwordRepeat"
        required
      />
      <button>Register</button>
      {state?.error}
      <Link href="/login">
        Already have an account? <b>Login</b>
      </Link>
    </form>
  );
};

export default RegisterForm;
