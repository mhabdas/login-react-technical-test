import { AuthData } from "../../utils/types";
import {logInSchema} from "../../containers/LogInForm";

export interface FormFields {
  type: string;
  name: string;
  placeholder: string;
  id: number;
}

export type FormValues = AuthData;

type AuthValidationSchema = typeof logInSchema;

export type ValidationSchema = AuthValidationSchema;
