import { useDropzone } from 'react-dropzone';
import styles from './index.module.scss';

const DropzoneIndex = () => {
  const { acceptedFiles, getRootProps, getInputProps } = useDropzone();

  return (
    <div className={styles.container}>
      <div {...getRootProps({ className: 'dropzone' })}>
        <input {...getInputProps()} accept="image/*" />
        <p>
          Drag and drop some image files here, or click to select image files
        </p>
      </div>
    </div>
  );
};

export default DropzoneIndex;
