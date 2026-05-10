const RadioGroup = ({
  label,
  name,
  options = [],
  value,
  onChange,
  error,
}) => {
  return (
    <fieldset className="grid gap-3">
      {label && <legend className="text-label text-ink">{label}</legend>}

      <div className="grid gap-3">
        {options.map((option) => (
          <label
            key={option.value}
            className={`flex cursor-pointer items-center justify-between rounded-input border px-4 py-3 transition ${
              value === option.value
                ? "border-accent-500 bg-accent-100"
                : "border-border bg-surface hover:border-border-strong"
            }`}
          >
            <div className="flex items-center gap-3">
              <input
                type="radio"
                name={name}
                value={option.value}
                checked={value === option.value}
                onChange={onChange}
                className="h-4 w-4 accent-accent-600"
              />

              <div>
                <p className="text-body font-medium text-ink">{option.label}</p>
                {option.description && (
                  <p className="text-small text-muted">{option.description}</p>
                )}
              </div>
            </div>
          </label>
        ))}
      </div>

      {error && <span className="text-caption text-danger">{error}</span>}
    </fieldset>
  );
};

export default RadioGroup;