import { REQUIRED_FORM } from "@/constant/validationMessages";
import useAuthMiddleware from "@/context/useAuthMiddleware";
import useRequest from "@/hooks/useRequest";
import { FieldsetRoot, HStack, Text } from "@chakra-ui/react";
import { useFormik } from "formik";
import { Link, useNavigate } from "react-router-dom";
import * as yup from "yup";
import BButton from "../ui-custom/BButton";
import CContainer from "../ui-custom/CContainer";
import Heading6 from "../ui-custom/Heading6";
import PasswordInput from "../ui-custom/PasswordInput";
import StringInput from "../ui-custom/StringInput";
import { Field } from "../ui/field";

const LoginForm = () => {
  // Contexts
  const { setPermissions } = useAuthMiddleware();

  // Utils
  // TODO make showErrorToast true/remove it if used in dev, this is for demo purpose only
  const { req, loading } = useRequest({ showErrorToast: false });
  const navigate = useNavigate();

  // Formik
  const formik = useFormik({
    validateOnChange: false,
    initialValues: {
      identifier: "",
      password: "",
    },
    validationSchema: yup.object().shape({
      identifier: yup.string().required(REQUIRED_FORM),
      password: yup.string().required(REQUIRED_FORM),
    }),
    onSubmit: (values) => {
      const payload = {
        email: values.identifier,
        password: values.password,
      };
      const config = {
        method: "post",
        url: ``,
        data: payload,
      };
      req({
        config,
        onResolve: {
          onSuccess: (r: any) => {
            localStorage.setItem("__auth_token", r.data?.token);
            localStorage.setItem("__user_data", r.data?.data?.user);
            setPermissions(r.data.user.permission);

            navigate("/home");
          },
        },
      });
    },
  });

  return (
    <CContainer
      bg={"body"}
      m={"auto"}
      w={"full"}
      maxW={"380px"}
      p={4}
      borderRadius={8}
    >
      <FieldsetRoot disabled={loading}>
        <CContainer mb={4} gap={1}>
          <Heading6 fontWeight={"bold"}>Masuk ke akun anda</Heading6>
          <Text fontSize={"sm"}>Selamat datang, masukkan credentials</Text>
        </CContainer>

        <form id="login-form" onSubmit={formik.handleSubmit}>
          <Field
            label="Email/Username"
            invalid={!!formik.errors.identifier}
            errorText={formik.errors.identifier}
            mb={4}
          >
            <StringInput
              name="identifier"
              onChangeSetter={(input) => {
                formik.setFieldValue("identifier", input);
              }}
              inputValue={formik.values.identifier}
              placeholder="example@email.com"
            />
          </Field>

          <Field
            label="Password"
            invalid={!!formik.errors.password}
            errorText={formik.errors.password}
          >
            <PasswordInput
              name="password"
              onChangeSetter={(input) => {
                formik.setFieldValue("password", input);
              }}
              inputValue={formik.values.password}
              placeholder="example@email.comm"
            />
          </Field>

          <HStack mt={4}>
            <Text as={Link} color={"p.500"}>
              Lupa password?
            </Text>
          </HStack>

          <BButton
            type="submit"
            form="login-form"
            w={"full"}
            mt={6}
            size={"lg"}
            loading={loading}
          >
            Sign in
          </BButton>
        </form>
      </FieldsetRoot>
    </CContainer>
  );
};

export default LoginForm;
