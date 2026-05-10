import { ChevronDown } from "lucide-react";

const SelectField = ({
  label,
  options = [],
  value,
  onChange,
  name,
  placeholder = "Select an option",
  error,
}) => {
  return (
    <label className="grid gap-2">
      {label && <span className="text-label text-ink">{label}</span>}

      <span className="relative flex items-center">
        <select
          name={name}
          value={value}
          onChange={onChange}
          className={`input w-full appearance-none px-4 pr-11 ${
            value ? "text-ink" : "text-muted"
          } ${error ? "border-danger focus:border-danger" : ""}`}
        >
          <option value="">{placeholder}</option>

          {options.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>

        <ChevronDown className="pointer-events-none absolute right-4 h-4 w-4 text-subtle" />
      </span>

      {error && <span className="text-caption text-danger">{error}</span>}
    </label>
  );
};

export default SelectField;