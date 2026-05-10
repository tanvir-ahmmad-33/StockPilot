const StockPilotLogo = ({ className = ""}) => {
    return (
        <div>
            <svg
                viewBox="0 0 64 64"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className={className}
                aria-hidden="true"
            >
                <path
                    d="M32 6 54 18.5 32 31 10 18.5 32 6Z"
                    stroke="currentColor"
                    strokeWidth="5"
                    strokeLinejoin="round"
                />
                <path
                    d="M10 23v18.5L25.5 50V31.5L10 23Z"
                    stroke="#0EA5E9"
                    strokeWidth="5"
                    strokeLinejoin="round"
                />
                <path
                    d="M54 23v18.5L38.5 50V31.5L54 23Z"
                    stroke="#0EA5E9"
                    strokeWidth="5"
                    strokeLinejoin="round"
                />
                <path
                    d="M32 31v25"
                    stroke="currentColor"
                    strokeWidth="5"
                    strokeLinecap="round"
                />
            </svg>
        </div>
    );
};

export default StockPilotLogo;
