import { Icon } from "@chakra-ui/react";
import { UploadSimple } from "@phosphor-icons/react";
import { Button } from "../ui/button";
import {
  FileUploadDropzone,
  FileUploadList,
  FileUploadRoot,
  FileUploadRootProps,
  FileUploadTrigger,
} from "../ui/file-button";

interface Props extends FileUploadRootProps {
  name?: string;
  onChangeSetter?: (inputValue: File[] | undefined) => void;
  inputValue?: File[] | string | undefined;
  accept?: string;
  isError?: boolean;
  placeholder?: string;
  initialFilepath?: string;
  label?: string;
  dropZone?: boolean;
}

const FileInput = ({
  name,
  onChangeSetter,
  inputValue,
  accept,
  isError,
  placeholder,
  initialFilepath,
  label,
  dropZone,
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
      maxW="xl"
      alignItems="stretch"
      onFileChange={handleFileChange}
      {...props}
    >
      <>
        {dropZone ? (
          <FileUploadDropzone
            borderColor={isError ? "fg.error" : ""}
            description={".png, .jpg up to 5MB"}
          />
        ) : (
          <FileUploadTrigger asChild borderColor={isError ? "fg.error" : ""}>
            <Button variant="outline" size="sm">
              <Icon>
                <UploadSimple weight="bold" />
              </Icon>{" "}
              {label || "Unggah berkas"}
            </Button>
          </FileUploadTrigger>
        )}

        <FileUploadList showSize clearable />
      </>
    </FileUploadRoot>
  );
};

export default FileInput;
