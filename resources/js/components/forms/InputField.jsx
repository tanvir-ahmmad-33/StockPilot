import { Eye } from "lucide-react";

const InputField = ({
  label,
  icon: Icon,
  type = "text",
  placeholder,
  value,
  onChange,
  name,
  error,
  trailingIcon: TrailingIcon,
  ...props
}) => {
  return (
    <label className="grid gap-2">
      {label && <span className="text-label text-ink">{label}</span>}

      <span className="relative flex items-center">
        {Icon && (
          <Icon className="pointer-events-none absolute left-4 h-4 w-4 text-subtle" />
        )}

        <input
          type={type}
          name={name}
          value={value}
          onChange={onChange}
          placeholder={placeholder}
          className={`input w-full ${Icon ? "pl-11" : "pl-4"} ${
            TrailingIcon ? "pr-11" : "pr-4"
          } placeholder:text-subtle ${
            error ? "border-danger focus:border-danger focus:ring-danger/10" : ""
          }`}
          {...props}
        />

        {TrailingIcon && (
          <TrailingIcon className="pointer-events-none absolute right-4 h-4 w-4 text-subtle" />
        )}
      </span>

      {error && <span className="text-caption text-danger">{error}</span>}
    </label>
  );
};

export default InputField;