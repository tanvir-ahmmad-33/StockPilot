const Field = ({
    label,
    icon: Icon,
    placeholder,
    type = "text",
    trailingIcon: TrailingIcon,
}) => {
    return (
        <label className="grid gap-2">
            <span className="text-label text-ink">{label}</span>

            <span className="relative flex items-center">
                <Icon className="pointer-events-none absolute left-4 h-4 w-4 text-subtle" />

                <input
                    type={type}
                    placeholder={placeholder}
                    className="input w-full pl-11 pr-11 placeholder:text-subtle"
                />

                {TrailingIcon ? (
                    <TrailingIcon className="pointer-events-none absolute right-4 h-4 w-4 text-subtle" />
                ) : null}
            </span>
        </label>
    );
};

export default Field;
