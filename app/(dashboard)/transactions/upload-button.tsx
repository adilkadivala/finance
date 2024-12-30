import { Upload } from "lucide-react";
import { useCSVReader } from "react-papaparse";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

type Props = {
  onUpload: (result: any) => void;
};

export const UploadButton = ({ onUpload }: Props) => {
  const { CSVReader } = useCSVReader();
  return (
    <CSVReader onUploadAccepted={onUpload}>
      {({ getRootProps }: any) => (
        <TooltipProvider>
          <Tooltip>
            <TooltipTrigger
              className="w-full lg:w-auto flex items-center px-3 py-1 border border-slate-700 rounded-sm"
              {...getRootProps()}
            >
              <Upload className="size-4 mr-2" />
              Import
            </TooltipTrigger>
            <TooltipContent>
              <p>just .CSV acceptable</p>
            </TooltipContent>
          </Tooltip>
        </TooltipProvider>
      )}
    </CSVReader>
  );
};
