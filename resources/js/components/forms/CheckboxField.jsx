const CheckboxField = ({ label, checked, onChange, name, error }) => {
  return (
    <div className="grid gap-2">
      <label className="flex cursor-pointer items-start gap-3">
        <input
          type="checkbox"
          name={name}
          checked={checked}
          onChange={onChange}
          className="mt-0.5 h-4 w-4 rounded border-border text-accent-600 accent-accent-600 focus:ring-4 focus:ring-accent-500/15"
        />

        <span className="text-small text-ink-soft">{label}</span>
      </label>

      {error && <span className="text-caption text-danger">{error}</span>}
    </div>
  );
};

export default CheckboxField;