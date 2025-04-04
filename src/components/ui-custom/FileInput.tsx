import { Icon } from "@chakra-ui/react";
import { IconUpload } from "@tabler/icons-react";
import {
  FileUploadDropzone,
  FileUploadList,
  FileUploadRoot,
  FileUploadRootProps,
  FileUploadTrigger,
} from "../ui/file-button";
import BButton from "./BButton";
import useLang from "@/context/useLang";

interface Props extends FileUploadRootProps {
  name?: string;
  onChangeSetter?: (inputValue: File[] | undefined) => void;
  inputValue?: File[] | string | undefined;
  accept?: string;
  invalid?: boolean;
  placeholder?: string;
  initialFilepath?: string;
  label?: string;
  dropZone?: boolean;
  description?: string;
  maxFiles?: number;
}
const FileInput = ({
  name,
  onChangeSetter,
  inputValue,
  accept,
  invalid,
  placeholder,
  initialFilepath,
  label,
  dropZone,
  description = "size up to 10 MB",
  maxFiles = 1,
  ...props
}: Props) => {
  // Contexts
  const { l } = useLang();

  // Utils
  const handleFileChange = (details: any) => {
    if (onChangeSetter) {
      onChangeSetter(
        details.acceptedFiles && details.acceptedFiles.length > 0
          ? details.acceptedFiles
          : undefined
      );
    }
  };

  return (
    <FileUploadRoot
      alignItems="stretch"
      onFileChange={handleFileChange}
      maxFiles={maxFiles}
      {...props}
    >
      <>
        {dropZone ? (
          <FileUploadDropzone
            borderColor={invalid ? "fg.error" : ""}
            description={description}
            label={l.file_dropzone_label}
          />
        ) : (
          <FileUploadTrigger asChild borderColor={invalid ? "fg.error" : ""}>
            <BButton variant="outline">
              <Icon scale={0.8}>
                <IconUpload />
              </Icon>{" "}
              {label || "File upload"}
            </BButton>
          </FileUploadTrigger>
        )}

        <FileUploadList showSize clearable />
      </>
    </FileUploadRoot>
  );
};

export default FileInput;
