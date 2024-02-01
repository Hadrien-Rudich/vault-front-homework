import {
  ChangeEventHandler,
  DetailedHTMLProps,
  InputHTMLAttributes,
} from 'react';

type Props = Omit<
  DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>,
  'onChange'
> & {
  onChange: (value: string) => void;
};

function TextInput(props: Props) {
  const { onChange, onKeyDown, value } = props;
  const handleChange: ChangeEventHandler<HTMLInputElement> = (e) =>
    onChange(e.target.value);
  return (
    <input
      className="border-4 p-2"
      type="text"
      placeholder="Type to filter events..."
      onChange={handleChange}
      onKeyDown={onKeyDown}
      value={value}
    />
  );
}

export default TextInput;
