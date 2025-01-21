import { Icon as ChakraIcon, IconProps } from "@chakra-ui/react";
import {
  IconFile,
  IconFileTypeCsv,
  IconFileTypeDoc,
  IconFileTypePdf,
  IconFileTypeXls,
  IconPhoto,
  IconPresentation,
} from "@tabler/icons-react";
import { forwardRef } from "react";

interface Props extends IconProps {
  type: string;
}

const FileIcon = forwardRef<SVGSVGElement, Props>(({ type, ...props }, ref) => {
  let iconColor = "current";
  let IconComponent;

  switch (type.toLowerCase()) {
    default:
      IconComponent = IconFile;
      break;
    case "pdf":
    case "application/pdf":
      iconColor = "red.400";
      IconComponent = IconFileTypePdf;
      break;
    case "docx":
    case "doc":
    case "vnd.ms-word":
    case "vnd.openxmlformats-officedocument.wordprocessingml.document":
    case "application/vnd.openxmlformats-officedocument.wordprocessingml.document":
      iconColor = "blue.400";
      IconComponent = IconFileTypeDoc;
      break;
    case "xls":
    case "xlsx":
    case "vnd.ms-excel":
    case "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet":
      iconColor = "green.400";
      IconComponent = IconFileTypeXls;
      break;
    case "ppt":
    case "pptx":
    case "vnd.ms-presentation":
    case "vnd.openxmlformats-officedocument.presentationml.presentation":
      iconColor = "green.400";
      IconComponent = IconPresentation;
      break;
    case "csv":
      iconColor = "green.400";
      IconComponent = IconFileTypeCsv;
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
      IconComponent = IconPhoto;
      break;
  }

  return (
    <ChakraIcon color={iconColor} ref={ref} {...props}>
      <IconComponent />
    </ChakraIcon>
  );
});

export default FileIcon;
