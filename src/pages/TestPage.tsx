import DatePickerInput from "@/components/ui-custom/DatePickerInput";
import { useFormik } from "formik";

const TestPage = () => {
  const formik = useFormik({
    validateOnChange: false,
    initialValues: { date: undefined as any },
    onSubmit: (values) => {
      console.log(values);
    },
  });
  return (
    <>
      <DatePickerInput
        onConfirm={(input) => {
          formik.setFieldValue("date", input);
        }}
        inputValue={formik.values.date}
        name="date"
      />
    </>
  );
};

export default TestPage;
