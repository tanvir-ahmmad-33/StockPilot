import StockPilotLogo from "../../../components/common/StockPilotLogo";

const WarehouseScene = () => {
    return (
        <div className="relative h-full overflow-hidden bg-[#f5f9fc]">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_55%_42%,rgba(14,165,233,0.14),transparent_28%),linear-gradient(180deg,#fbfdff_0%,#eff6fb_100%)]" />

            <div className="absolute inset-x-0 bottom-0 h-[64%] opacity-90 [background-image:linear-gradient(rgba(14,165,233,0.14)_1px,transparent_1px),linear-gradient(90deg,rgba(14,165,233,0.14)_1px,transparent_1px)] [background-size:78px_78px] [transform:perspective(900px)_rotateX(66deg)_scale(1.45)] [transform-origin:bottom_center]" />

            <div className="absolute right-[8%] top-[11%] h-52 w-72 rounded-[28px] border border-white/80 bg-white/55 shadow-card backdrop-blur-md" />

            <div className="absolute right-[10%] top-[15%] flex items-center gap-4 rounded-2xl border border-white/80 bg-white/75 px-5 py-4 shadow-sm backdrop-blur-md">
                <div className="grid h-12 w-12 place-items-center rounded-2xl bg-accent-100 text-accent-600">
                    <StockPilotLogo className="h-8 w-8" />
                </div>

                <div>
                    <p className="text-subheading text-ink">Stock Pilot</p>
                    <p className="text-small text-muted">
                        Inventory Management System
                    </p>
                </div>
            </div>

            <div className="absolute right-[8%] bottom-[22%] h-56 w-72 [transform:perspective(850px)_rotateX(58deg)_rotateZ(-28deg)]">
                <div className="absolute left-4 top-10 h-24 w-48 rounded-md border border-[#cfe5f6] bg-white shadow-sm" />
                <div className="absolute left-7 top-4 h-12 w-36 rounded-md border border-[#cfe5f6] bg-white shadow-sm" />
                <div className="absolute left-10 top-16 h-1 w-40 bg-accent-500/55" />
                <div className="absolute left-20 top-4 h-1 w-28 bg-accent-500/55" />
            </div>

            <div className="absolute right-[27%] bottom-[16%] h-40 w-56 [transform:perspective(850px)_rotateX(58deg)_rotateZ(-28deg)]">
                <div className="absolute left-0 top-0 h-16 w-28 rounded-md border border-[#d7e7f3] bg-white shadow-sm" />
                <div className="absolute left-24 top-12 h-16 w-28 rounded-md border border-[#d7e7f3] bg-white shadow-sm" />
                <div className="absolute left-12 top-24 h-16 w-28 rounded-md border border-[#d7e7f3] bg-white shadow-sm" />
                <div className="absolute left-0 top-7 h-1 w-28 bg-accent-500/45" />
                <div className="absolute left-24 top-[76px] h-1 w-28 bg-accent-500/45" />
                <div className="absolute left-12 top-[124px] h-1 w-28 bg-accent-500/45" />
            </div>

            <div className="absolute bottom-[18%] right-[11%] h-32 w-40 [transform:perspective(850px)_rotateX(58deg)_rotateZ(-28deg)]">
                <div className="absolute left-5 top-4 h-14 w-20 rounded-md border border-[#d7e7f3] bg-white shadow-sm" />
                <div className="absolute left-7 top-0 h-14 w-20 rounded-md border border-[#d7e7f3] bg-white shadow-sm" />
                <div className="absolute left-9 top-8 h-1 w-16 bg-accent-500/45" />
            </div>

            <div className="absolute bottom-[14%] right-[4%] h-36 w-44 [transform:perspective(850px)_rotateX(58deg)_rotateZ(-28deg)]">
                <div className="absolute left-7 top-10 h-12 w-24 rounded-md border border-[#d7e7f3] bg-white shadow-sm" />
                <div className="absolute left-0 top-20 h-10 w-16 rounded-md border border-[#d7e7f3] bg-white shadow-sm" />
                <div className="absolute left-11 top-14 h-1 w-16 bg-accent-500/45" />
            </div>

            {/* <div className="absolute bottom-[24%] right-[29%] grid h-24 w-24 place-items-center rounded-[28px] border border-white/80 bg-white/70 shadow-card backdrop-blur-md">
                <ScanBarcode className="h-11 w-11 text-brand-700" />
            </div> */}

            <div className="absolute bottom-[13%] right-[18%] h-28 w-24 rounded-[22px] border border-white/80 bg-white/70 shadow-card backdrop-blur-md">
                <div className="absolute left-5 top-5 h-10 w-14 rounded-xl border-2 border-brand-800" />
                <div className="absolute left-7 top-12 h-8 w-10 rounded-b-xl bg-brand-800" />
                <div className="absolute bottom-4 left-4 right-4 h-2 rounded-full bg-accent-500/35" />
            </div>
        </div>
    );
};

export default WarehouseScene;
