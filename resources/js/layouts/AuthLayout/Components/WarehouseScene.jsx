import { ScanBarcode } from "lucide-react";

const WarehouseScene = () => {
    return (
        <div className="relative h-full min-h-screen overflow-hidden bg-[linear-gradient(135deg,#fbfdff_0%,#eef7ff_46%,#e8f2ff_100%)]">
            {/* Ambient lighting */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_42%_24%,rgba(14,165,233,0.18),transparent_31%),radial-gradient(circle_at_76%_70%,rgba(37,99,235,0.11),transparent_35%)]" />
            <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(255,255,255,0.22)_0%,transparent_42%,rgba(255,255,255,0.1)_100%)]" />

            {/* Background soft blur */}
            <div className="absolute right-[40px] top-[54px] h-[260px] w-[360px] rounded-full bg-accent-500/10 blur-3xl" />
            <div className="absolute bottom-[120px] left-[80px] h-[280px] w-[420px] rounded-full bg-info/10 blur-3xl" />

            {/* Isometric floor platform */}
            <div className="absolute bottom-[42px] left-[-104px] h-[430px] w-[760px] rotate-[-28deg] rounded-[30px] border border-accent-500/20 bg-white/24 shadow-[0_0_52px_rgba(14,165,233,0.16)]">
                <div className="absolute inset-0 rounded-[30px] bg-[linear-gradient(90deg,rgba(14,165,233,0.20)_1px,transparent_1px),linear-gradient(0deg,rgba(14,165,233,0.20)_1px,transparent_1px)] bg-[size:86px_86px]" />

                {/* Glowing route lines */}
                <div className="absolute left-[104px] top-[114px] h-[168px] w-[350px] rounded-2xl border border-accent-500/50 shadow-[0_0_24px_rgba(14,165,233,0.24)]" />
                <div className="absolute left-[142px] top-[154px] h-[2px] w-[300px] rounded-full bg-accent-500/60 shadow-[0_0_16px_rgba(14,165,233,0.75)]" />
                <div className="absolute left-[142px] top-[216px] h-[2px] w-[300px] rounded-full bg-accent-500/50 shadow-[0_0_16px_rgba(14,165,233,0.65)]" />
                <div className="absolute left-[246px] top-[114px] h-[168px] w-[2px] rounded-full bg-accent-500/40 shadow-[0_0_14px_rgba(14,165,233,0.55)]" />
            </div>

            {/* Warehouse rack */}
            <div className="absolute right-[-6px] top-[42px] h-[302px] w-[342px]">
                {/* Rack posts */}
                <div className="absolute left-0 top-0 h-full w-[7px] rounded-full bg-[#9fc5ee] shadow-[inset_-2px_0_0_rgba(37,99,235,0.22)]" />
                <div className="absolute left-[112px] top-[10px] h-[278px] w-[6px] rounded-full bg-[#b5d2f1]" />
                <div className="absolute left-[226px] top-[10px] h-[278px] w-[6px] rounded-full bg-[#b5d2f1]" />
                <div className="absolute right-0 top-0 h-full w-[7px] rounded-full bg-[#9fc5ee] shadow-[inset_-2px_0_0_rgba(37,99,235,0.22)]" />

                {/* Rack shelves */}
                <RackBeam className="top-[66px]" />
                <RackBeam className="top-[154px]" />
                <RackBeam className="bottom-[18px]" />

                {/* Top shelf */}
                <ShelfBox className="left-[24px] top-[7px]" size="lg" />
                <ShelfBox className="left-[112px] top-[3px]" size="md" />
                <ShelfBox className="left-[194px] top-[15px]" size="lg" />
                <ShelfBox className="left-[266px] top-[21px]" size="sm" />

                {/* Middle shelf */}
                <ShelfBox className="left-[18px] top-[92px]" size="md" />
                <ShelfBox className="left-[98px] top-[95px]" size="lg" />
                <ShelfBox className="left-[190px] top-[98px]" size="md" />
                <ShelfBox className="left-[266px] top-[103px]" size="sm" />

                {/* Bottom shelf */}
                <ShelfBox className="left-[24px] top-[181px]" size="lg" />
                <ShelfBox className="left-[122px] top-[178px]" size="md" />
                <ShelfBox className="left-[206px] top-[181px]" size="lg" />

                {/* Rack glow */}
                <div className="absolute left-0 top-[72px] h-[4px] w-full bg-accent-500/45 blur-[2px]" />
                <div className="absolute left-0 top-[160px] h-[4px] w-full bg-accent-500/35 blur-[2px]" />
            </div>

            {/* Barcode scanner */}
            <div className="absolute left-[58px] top-[182px] h-[152px] w-[116px]">
                <div className="absolute left-[10px] top-0 h-[80px] w-[94px] rounded-[36px_36px_28px_28px] bg-[linear-gradient(145deg,#223756_0%,#111e34_72%)] shadow-[0_20px_36px_rgba(16,32,43,0.26)]">
                    <div className="absolute left-[15px] top-[26px] h-[24px] w-[64px] rounded-full bg-[#0f1a2f]" />
                    <div className="absolute left-[21px] top-[32px] h-[12px] w-[52px] rounded-full bg-[#00aaff] shadow-[0_0_26px_rgba(0,170,255,0.95)]" />
                    <div className="absolute left-[31px] top-[12px] h-[4px] w-[32px] rounded-full bg-white/14" />
                </div>

                <div className="absolute left-[43px] top-[72px] h-[64px] w-[30px] rounded-b-2xl bg-[linear-gradient(90deg,#314664_0%,#1c2e48_100%)] shadow-[10px_12px_20px_rgba(16,32,43,0.17)]" />
                <div className="absolute left-[31px] bottom-[3px] h-[16px] w-[56px] rounded-full bg-[#172a46] shadow-[0_10px_18px_rgba(16,32,43,0.18)]" />

                <div className="absolute left-[98px] top-[78px] h-[1px] w-[170px] rotate-[13deg] bg-accent-500/45 shadow-[0_0_14px_rgba(14,165,233,0.8)]" />
            </div>

            {/* Conveyor belt */}
            <div className="absolute left-[112px] top-[376px] h-[88px] w-[366px] rotate-[-11deg] rounded-xl border border-accent-500/20 bg-[linear-gradient(180deg,#d8e7f7_0%,#b9cde3_100%)] shadow-[0_20px_44px_rgba(16,32,43,0.15)]">
                <div className="absolute inset-x-5 top-1/2 h-[9px] -translate-y-1/2 rounded-full bg-[#8ba8c8]" />
                <div className="absolute left-7 top-[17px] h-[4px] w-[305px] rounded-full bg-white/55" />
                <div className="absolute bottom-[16px] left-7 h-[3px] w-[305px] rounded-full bg-[#6f91b4]/30" />

                <ConveyorRoller className="left-[28px]" />
                <ConveyorRoller className="left-[88px]" />
                <ConveyorRoller className="left-[148px]" />
                <ConveyorRoller className="left-[208px]" />
                <ConveyorRoller className="left-[268px]" />

                <FloorBox
                    className="left-[18px] top-[-38px]"
                    tape="horizontal"
                />
                <FloorBox className="left-[98px] top-[-42px]" tape="vertical" />
                <FloorBox
                    className="left-[179px] top-[-32px]"
                    tape="horizontal"
                />
            </div>

            {/* Loose floor boxes */}
            <FloorBox className="left-[36px] bottom-[128px]" tape="vertical" />
            <FloorBox
                className="left-[118px] bottom-[102px]"
                tape="horizontal"
            />
            <FloorBox className="left-[214px] bottom-[132px]" tape="vertical" />

            {/* Forklift */}
            <div className="absolute bottom-[58px] right-[-30px] h-[230px] w-[370px]">
                {/* Fork arms */}
                <div className="absolute bottom-[62px] right-[96px] h-[5px] w-[190px] rounded-full bg-[#1a2a42] shadow-[0_8px_14px_rgba(16,32,43,0.22)]" />
                <div className="absolute bottom-[30px] right-[96px] h-[5px] w-[190px] rounded-full bg-[#1a2a42] shadow-[0_8px_14px_rgba(16,32,43,0.18)]" />

                {/* Pallet box */}
                <div className="absolute bottom-[75px] right-[196px] h-[100px] w-[110px] bg-white shadow-[0_16px_34px_rgba(16,32,43,0.17)]">
                    <div className="absolute left-0 top-0 h-[13px] w-full bg-[#eef5fc]" />
                    <div className="absolute right-0 top-0 h-full w-[17px] bg-[#d8e8f7]" />
                    <div className="absolute left-[30px] top-0 h-[84px] w-[10px] bg-[#0077ff]" />
                    <div className="absolute bottom-3 left-3 h-2 w-9 rounded bg-[#c4d2df]" />
                    <div className="absolute bottom-6 left-3 h-1.5 w-6 rounded bg-[#d6e2ed]" />
                </div>

                {/* Forklift body */}
                <div className="absolute bottom-[64px] right-[86px] h-[90px] w-[154px] rounded-[18px_30px_18px_18px] bg-[linear-gradient(145deg,#edf6ff_0%,#c9dff6_100%)] shadow-[0_20px_42px_rgba(16,32,43,0.25)]" />
                <div className="absolute bottom-[101px] right-[88px] h-[45px] w-[72px] rounded-md bg-[linear-gradient(145deg,#ffffff_0%,#d9ecff_100%)]" />
                <div className="absolute bottom-[78px] right-[198px] h-[50px] w-[52px] rounded-md bg-[linear-gradient(145deg,#a8c7e8_0%,#7da7d2_100%)]" />
                <div className="absolute bottom-[134px] right-[106px] h-[8px] w-[46px] rounded-full bg-accent-500/75 shadow-[0_0_12px_rgba(14,165,233,0.6)]" />

                {/* Cabin cage */}
                <div className="absolute bottom-[114px] right-[0px] h-[116px] w-[142px] rounded-tr-[38px] border-[10px] border-[#1d2d45]" />
                <div className="absolute bottom-[114px] right-[74px] h-[106px] w-[10px] rounded-full bg-[#1d2d45]" />
                <div className="absolute bottom-[174px] right-[17px] h-[10px] w-[112px] rotate-[28deg] rounded-full bg-[#1d2d45]" />
                <div className="absolute bottom-[121px] right-[18px] h-[82px] w-[2px] rotate-[25deg] bg-white/15" />

                {/* Wheels */}
                <Wheel className="right-[174px]" />
                <Wheel className="right-[38px]" />

                {/* Scanner badge */}
                <div className="absolute bottom-[129px] right-[208px] flex h-8 w-8 items-center justify-center rounded-full bg-[#0077ff] text-white shadow-[0_0_22px_rgba(0,119,255,0.45)]">
                    <ScanBarcode size={17} />
                </div>
            </div>
        </div>
    );
};

const RackBeam = ({ className = "" }) => {
    return (
        <div
            className={`absolute left-0 h-[12px] w-full rounded-full bg-[linear-gradient(90deg,#41a2ff_0%,#0575dd_100%)] shadow-[0_8px_18px_rgba(37,137,232,0.24)] ${className}`}
        />
    );
};

const ShelfBox = ({ className = "", size = "md" }) => {
    const sizeClass =
        size === "lg"
            ? "h-[60px] w-[82px]"
            : size === "sm"
              ? "h-[52px] w-[64px]"
              : "h-[58px] w-[76px]";

    return (
        <div
            className={`absolute ${sizeClass} rounded-sm bg-white shadow-[0_10px_22px_rgba(16,32,43,0.14)] ${className}`}
        >
            <div className="absolute left-0 top-0 h-[9px] w-full bg-[#eef5fc]" />
            <div className="absolute right-0 top-0 h-full w-[13px] bg-[#d9e8f7]" />
            <div className="absolute left-2 top-2 h-[38px] w-[7px] bg-[#f7fbff]" />
            <div className="absolute bottom-2 left-2 h-[8px] w-[24px] rounded-sm bg-[#0077ff]" />
            <div className="absolute bottom-[18px] left-2 h-[4px] w-[34px] rounded bg-[#d4e0ec]" />
        </div>
    );
};

const FloorBox = ({ className = "", tape = "vertical" }) => {
    return (
        <div
            className={`absolute h-[70px] w-[86px] rounded-sm bg-white shadow-[0_14px_30px_rgba(16,32,43,0.16)] ${className}`}
        >
            <div className="absolute left-0 top-0 h-[12px] w-full bg-[#eef5fc]" />
            <div className="absolute right-0 top-0 h-full w-[15px] bg-[#d9e8f7]" />

            {tape === "vertical" ? (
                <div className="absolute left-[31px] top-0 h-[55px] w-[9px] bg-[#0077ff]" />
            ) : (
                <div className="absolute left-0 top-[14px] h-[9px] w-[70px] bg-[#0077ff]" />
            )}

            <div className="absolute bottom-2 left-2 h-[8px] w-[28px] rounded-sm bg-[#c3d1df]" />
            <div className="absolute bottom-[20px] left-2 h-[4px] w-[40px] rounded-sm bg-[#d8e3ed]" />
        </div>
    );
};

const ConveyorRoller = ({ className = "" }) => {
    return (
        <div
            className={`absolute top-[38px] h-[13px] w-[13px] rounded-full bg-[#7898b9] shadow-[inset_0_2px_2px_rgba(255,255,255,0.45)] ${className}`}
        />
    );
};

const Wheel = ({ className = "" }) => {
    return (
        <div
            className={`absolute bottom-[34px] h-[60px] w-[60px] rounded-full bg-[#1d2d45] shadow-[0_10px_20px_rgba(16,32,43,0.28)] ${className}`}
        >
            <div className="absolute left-1/2 top-1/2 h-[33px] w-[33px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#7d94b0]" />
            <div className="absolute left-1/2 top-1/2 h-[13px] w-[13px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#dce8f5]" />
        </div>
    );
};

export default WarehouseScene;
