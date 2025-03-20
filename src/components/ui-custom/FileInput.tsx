import { Icon } from "@chakra-ui/react";
import { Button } from "../ui/button";
import {
  FileUploadDropzone,
  FileUploadList,
  FileUploadRoot,
  FileUploadRootProps,
  FileUploadTrigger,
} from "../ui/file-button";
import { IconUpload } from "@tabler/icons-react";

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
  description = "size up to 10MB",
  maxFiles = 1,
  ...props
}: Props) => {
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
          />
        ) : (
          <FileUploadTrigger asChild borderColor={invalid ? "fg.error" : ""}>
            <Button variant="outline" size="sm">
              <Icon>
                <IconUpload />
              </Icon>{" "}
              {label || "File upload"}
            </Button>
          </FileUploadTrigger>
        )}

        <FileUploadList showSize clearable />
      </>
    </FileUploadRoot>
  );
};

export default FileInput;
