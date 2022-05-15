interface Props {
  text: string;
}

const NormalText = ({ text }: Props) => {
  return <p>{text}</p>;
};

export default NormalText;
