const StockPilotLogo = ({
    width = "100%",
    height = "100%",
    className = "",
}) => {
    return (
        <svg
            width={width}
            height={height}
            viewBox="0 0 100 100"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className={className}
            role="img"
            aria-label="StockPilot Logo"
            preserveAspectRatio="xMidYMid meet"
        >
            {/* Left Blue Section */}
            <path
                d="M12 46 L12 70 L36 86"
                stroke="#00A0E3"
                strokeWidth="10"
                strokeLinecap="round"
                strokeLinejoin="round"
            />

            {/* Right Blue Section */}
            <path
                d="M88 46 L88 70 L64 86"
                stroke="#00A0E3"
                strokeWidth="10"
                strokeLinecap="round"
                strokeLinejoin="round"
            />

            {/* Center Dark Stem */}
            <path
                d="M50 56 L50 91"
                stroke="#082032"
                strokeWidth="10"
                strokeLinecap="round"
            />

            {/* Top Diamond */}
            <path
                d="M50 8 L89 30 L50 52 L11 30 Z"
                stroke="#082032"
                strokeWidth="10"
                strokeLinecap="round"
                strokeLinejoin="round"
            />
        </svg>
    );
};

export default StockPilotLogo;