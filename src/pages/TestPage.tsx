import CContainer from "@/components/ui-custom/CContainer";
import DatePickerInput from "@/components/ui-custom/DatePickerInput";
import {
  AccordionItem,
  AccordionItemContent,
  AccordionItemTrigger,
  AccordionRoot,
} from "@/components/ui/accordion";
import { Span } from "@chakra-ui/react";
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
    <CContainer px={4}>
      <DatePickerInput
        onConfirm={(input) => {
          formik.setFieldValue("date", input);
        }}
        inputValue={formik.values.date}
        name="date"
      />
      <AccordionRoot>
        <AccordionItem value="1">
          <AccordionItemTrigger>
            <Span>Item 1</Span>
          </AccordionItemTrigger>

          <AccordionItemContent>Item 1 content here...</AccordionItemContent>
        </AccordionItem>
      </AccordionRoot>
    </CContainer>
  );
};

export default TestPage;
