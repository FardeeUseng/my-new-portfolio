"use client";

import { Input, InputProps } from "antd";

interface Props extends Omit<InputProps, "onChange"> {
  onFormattedChange?: (value: string) => void; // Renamed prop to avoid conflict
}

export default function CustomPhoneNumberInput({
  value = "",
  onFormattedChange,
  placeholder = "xxx-xxxx-xxx",
  ...rest
}: Props) {
  const handleChange: React.ChangeEventHandler<HTMLInputElement> = (e) => {
    const rawValue = e.target.value.replace(/\D/g, ""); // Remove non-numeric characters

    if (onFormattedChange) {
      onFormattedChange(rawValue); // Pass only the raw numbers
    }
  };

  const formatValue = (value: string) => {
    const raw = value.replace(/\D/g, ""); // Ensure only digits
    if (raw.length <= 3) return raw;
    if (raw.length <= 7) return `${raw.slice(0, 3)}-${raw.slice(3)}`;
    return `${raw.slice(0, 3)}-${raw.slice(3, 7)}-${raw.slice(7, 10)}`;
  };

  return (
    <Input
      {...rest}
      value={formatValue(String(value))} // Display formatted value
      onChange={handleChange} // Keep AntD's expected type
      placeholder={placeholder}
      className="w-full"
      maxLength={12} // Limit formatted display length
    />
  );
}
