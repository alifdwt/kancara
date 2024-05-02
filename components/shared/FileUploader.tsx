type FileUploaderProps = {
  imageUrl: string;
  onFieldChange: (value: string) => void;
  setFiles: (files: File[]) => void;
};

const FileUploader = ({
  imageUrl,
  onFieldChange,
  setFiles,
}: FileUploaderProps) => {
  return (
    <div>
      <h1>FileUploader</h1>
    </div>
  );
};

export default FileUploader;
