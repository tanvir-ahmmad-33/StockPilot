const Feature = ({ icon: Icon, title, description }) => {
    return (
        <div className="flex items-start gap-3 sm:gap-4">
            <span className="grid h-10 w-10 shrink-0 place-items-center rounded-xl border border-white/10 bg-white/5 text-accent-500 shadow-xs sm:h-12 sm:w-12">
                <Icon className="h-5 w-5" />
            </span>

            <div>
                <p className="text-subheading text-inverse">{title}</p>
                <p className="mt-1 text-body text-inverse-muted">
                    {description}
                </p>
            </div>
        </div>
    );
};

export default Feature;