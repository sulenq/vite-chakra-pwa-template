import { forwardRef } from "react";
import { Icon as ChakraIcon, IconProps } from "@chakra-ui/react";
import {
  File,
  FileCsv,
  FileDoc,
  FilePdf,
  FilePpt,
  FileXls,
  Image,
} from "@phosphor-icons/react";

interface Props extends IconProps {
  type: string;
}

const FileIcon = forwardRef<SVGSVGElement, Props>(({ type, ...props }, ref) => {
  let iconColor = "current";
  let IconComponent;

  switch (type.toLowerCase()) {
    default:
      IconComponent = File;
      break;
    case "pdf":
    case "application/pdf":
      iconColor = "red.400";
      IconComponent = FilePdf;
      break;
    case "docx":
    case "doc":
    case "vnd.ms-word":
    case "vnd.openxmlformats-officedocument.wordprocessingml.document":
    case "application/vnd.openxmlformats-officedocument.wordprocessingml.document":
      iconColor = "blue.400";
      IconComponent = FileDoc;
      break;
    case "xls":
    case "xlsx":
    case "vnd.ms-excel":
    case "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet":
      iconColor = "green.400";
      IconComponent = FileXls;
      break;
    case "ppt":
    case "pptx":
    case "vnd.ms-presentation":
    case "vnd.openxmlformats-officedocument.presentationml.presentation":
      iconColor = "green.400";
      IconComponent = FilePpt;
      break;
    case "csv":
      iconColor = "green.400";
      IconComponent = FileCsv;
      break;
    case "jpg":
    case "jpeg":
    case "png":
    case "svg":
    case "heic":
    case "webp":
    case "gif":
    case "tiff":
    case "tif":
    case "image/jpg":
    case "image/jpeg":
    case "image/png":
    case "image/svg":
    case "image/heic":
    case "image/webp":
    case "image/gif":
    case "image/tiff":
    case "image/tif":
      iconColor = "purple.400";
      IconComponent = Image;
      break;
  }

  return (
    <ChakraIcon color={iconColor} ref={ref} {...props}>
      <IconComponent />
    </ChakraIcon>
  );
});

export default FileIcon;
