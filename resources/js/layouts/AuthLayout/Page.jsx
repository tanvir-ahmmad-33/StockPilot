import { Outlet } from "react-router-dom";
import {
    Box,
    Building2,
    Eye,
    LockKeyhole,
    Mail,
    TrendingUp,
    ShieldCheck,
    ChevronDown,
    ArrowRight,
    ScanBarcode,
} from "lucide-react";

import StockPilotLogo from "../../components/common/StockPilotLogo";
import Feature from "./Components/Feature";
import WarehouseScene from "./Components/WarehouseScene";

const AuthLayout = () => {
    return (
        <main className="min-h-screen bg-app font-sans text-ink">
            <section className="mx-auto grid min-h-screen w-full grid-cols-1 overflow-hidden lg:grid-cols-[0.9fr_0.82fr_1fr]">
                <aside className="bg-auth relative flex items-center px-5 py-8 text-inverse sm:px-8 sm:py-10 md:px-10 lg:min-h-screen lg:px-16">
                    <div className="relative mx-auto w-full max-w-sm lg:max-w-md">
                        <div className="flex items-center gap-3 sm:gap-4">
                            <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-white/95 shadow-[0_12px_28px_rgba(14,165,233,0.18)] ring-1 ring-white/20 sm:h-14 sm:w-14">
                                <StockPilotLogo className="h-9 w-9 sm:h-10 sm:w-10" />
                            </div>

                            <span className="text-2xl font-semibold tracking-[-0.03em] sm:text-[30px]">
                                Stock Pilot
                            </span>
                        </div>

                        <div className="mt-8 sm:mt-10 lg:mt-14">
                            <h1 className="text-3xl font-semibold leading-tight tracking-[-0.045em] sm:text-4xl lg:text-[44px] lg:leading-[1.05]">
                                Inventory,
                                <span className="block text-accent-500">
                                    simplified.
                                </span>
                            </h1>

                            <p className="mt-4 max-w-xs text-sm leading-6 text-inverse-muted sm:mt-5 sm:text-[17px] sm:leading-7">
                                Smart inventory control for modern businesses.
                            </p>
                        </div>

                        <div className="mt-8 grid gap-5 sm:mt-10 sm:gap-6">
                            <Feature
                                icon={Box}
                                title="Real-time visibility"
                                description="Know your stock, always."
                            />

                            <Feature
                                icon={TrendingUp}
                                title="Smarter decisions"
                                description="Data that drives growth."
                            />

                            <Feature
                                icon={ShieldCheck}
                                title="Built-in reliability"
                                description="Secure. Scalable. Dependable."
                            />
                        </div>
                    </div>
                </aside>

                <Outlet />

                <div className="hidden lg:block">
                    <WarehouseScene />
                </div>
            </section>
        </main>
    );
};

export default AuthLayout;
