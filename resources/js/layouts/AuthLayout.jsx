import React from "react";
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

// function StockPilotMark({ className = "h-11 w-11" }) {
//   return (
//     <svg
//       viewBox="0 0 64 64"
//       fill="none"
//       xmlns="http://www.w3.org/2000/svg"
//       className={className}
//       aria-hidden="true"
//     >
//       <path
//         d="M32 6 54 18.5 32 31 10 18.5 32 6Z"
//         stroke="currentColor"
//         strokeWidth="5"
//         strokeLinejoin="round"
//       />
//       <path
//         d="M10 23v18.5L25.5 50V31.5L10 23Z"
//         stroke="#0EA5E9"
//         strokeWidth="5"
//         strokeLinejoin="round"
//       />
//       <path
//         d="M54 23v18.5L38.5 50V31.5L54 23Z"
//         stroke="#0EA5E9"
//         strokeWidth="5"
//         strokeLinejoin="round"
//       />
//       <path
//         d="M32 31v25"
//         stroke="currentColor"
//         strokeWidth="5"
//         strokeLinecap="round"
//       />
//     </svg>
//   );
// }

// function Field({
//   label,
//   icon: Icon,
//   placeholder,
//   type = "text",
//   trailingIcon: TrailingIcon,
// }) {
//   return (
//     <label className="grid gap-2">
//       <span className="text-label text-ink">{label}</span>

//       <span className="relative flex items-center">
//         <Icon className="pointer-events-none absolute left-4 h-4 w-4 text-subtle" />

//         <input
//           type={type}
//           placeholder={placeholder}
//           className="input w-full pl-11 pr-11 placeholder:text-subtle"
//         />

//         {TrailingIcon ? (
//           <TrailingIcon className="pointer-events-none absolute right-4 h-4 w-4 text-subtle" />
//         ) : null}
//       </span>
//     </label>
//   );
// }

// function Feature({ icon: Icon, title, description }) {
//   return (
//     <div className="flex items-start gap-3 sm:gap-4">
//       <span className="grid h-10 w-10 shrink-0 place-items-center rounded-xl border border-white/10 bg-white/5 text-accent-500 shadow-xs sm:h-12 sm:w-12">
//         <Icon className="h-5 w-5" />
//       </span>

//       <div>
//         <p className="text-subheading text-inverse">{title}</p>
//         <p className="mt-1 text-body text-inverse-muted">{description}</p>
//       </div>
//     </div>
//   );
// }

// function WarehouseScene() {
//   return (
//     <div className="relative h-full overflow-hidden bg-[#f5f9fc]">
//       <div className="absolute inset-0 bg-[radial-gradient(circle_at_55%_42%,rgba(14,165,233,0.14),transparent_28%),linear-gradient(180deg,#fbfdff_0%,#eff6fb_100%)]" />

//       <div className="absolute inset-x-0 bottom-0 h-[64%] opacity-90 [background-image:linear-gradient(rgba(14,165,233,0.14)_1px,transparent_1px),linear-gradient(90deg,rgba(14,165,233,0.14)_1px,transparent_1px)] [background-size:78px_78px] [transform:perspective(900px)_rotateX(66deg)_scale(1.45)] [transform-origin:bottom_center]" />

//       <div className="absolute right-[8%] top-[11%] h-52 w-72 rounded-[28px] border border-white/80 bg-white/55 shadow-card backdrop-blur-md" />

//       <div className="absolute right-[10%] top-[15%] flex items-center gap-4 rounded-2xl border border-white/80 bg-white/75 px-5 py-4 shadow-sm backdrop-blur-md">
//         <div className="grid h-12 w-12 place-items-center rounded-2xl bg-accent-100 text-accent-600">
//           <StockPilotMark className="h-8 w-8" />
//         </div>

//         <div>
//           <p className="text-subheading text-ink">Stock Pilot</p>
//           <p className="text-small text-muted">Inventory Management System</p>
//         </div>
//       </div>

//       <div className="absolute right-[8%] bottom-[22%] h-56 w-72 [transform:perspective(850px)_rotateX(58deg)_rotateZ(-28deg)]">
//         <div className="absolute left-4 top-10 h-24 w-48 rounded-md border border-[#cfe5f6] bg-white shadow-sm" />
//         <div className="absolute left-7 top-4 h-12 w-36 rounded-md border border-[#cfe5f6] bg-white shadow-sm" />
//         <div className="absolute left-10 top-16 h-1 w-40 bg-accent-500/55" />
//         <div className="absolute left-20 top-4 h-1 w-28 bg-accent-500/55" />
//       </div>

//       <div className="absolute right-[27%] bottom-[16%] h-40 w-56 [transform:perspective(850px)_rotateX(58deg)_rotateZ(-28deg)]">
//         <div className="absolute left-0 top-0 h-16 w-28 rounded-md border border-[#d7e7f3] bg-white shadow-sm" />
//         <div className="absolute left-24 top-12 h-16 w-28 rounded-md border border-[#d7e7f3] bg-white shadow-sm" />
//         <div className="absolute left-12 top-24 h-16 w-28 rounded-md border border-[#d7e7f3] bg-white shadow-sm" />
//         <div className="absolute left-0 top-7 h-1 w-28 bg-accent-500/45" />
//         <div className="absolute left-24 top-[76px] h-1 w-28 bg-accent-500/45" />
//         <div className="absolute left-12 top-[124px] h-1 w-28 bg-accent-500/45" />
//       </div>

//       <div className="absolute bottom-[18%] right-[11%] h-32 w-40 [transform:perspective(850px)_rotateX(58deg)_rotateZ(-28deg)]">
//         <div className="absolute left-5 top-4 h-14 w-20 rounded-md border border-[#d7e7f3] bg-white shadow-sm" />
//         <div className="absolute left-7 top-0 h-14 w-20 rounded-md border border-[#d7e7f3] bg-white shadow-sm" />
//         <div className="absolute left-9 top-8 h-1 w-16 bg-accent-500/45" />
//       </div>

//       <div className="absolute bottom-[14%] right-[4%] h-36 w-44 [transform:perspective(850px)_rotateX(58deg)_rotateZ(-28deg)]">
//         <div className="absolute left-7 top-10 h-12 w-24 rounded-md border border-[#d7e7f3] bg-white shadow-sm" />
//         <div className="absolute left-0 top-20 h-10 w-16 rounded-md border border-[#d7e7f3] bg-white shadow-sm" />
//         <div className="absolute left-11 top-14 h-1 w-16 bg-accent-500/45" />
//       </div>

//       <div className="absolute bottom-[24%] right-[29%] grid h-24 w-24 place-items-center rounded-[28px] border border-white/80 bg-white/70 shadow-card backdrop-blur-md">
//         <ScanBarcode className="h-11 w-11 text-brand-700" />
//       </div>

//       <div className="absolute bottom-[13%] right-[18%] h-28 w-24 rounded-[22px] border border-white/80 bg-white/70 shadow-card backdrop-blur-md">
//         <div className="absolute left-5 top-5 h-10 w-14 rounded-xl border-2 border-brand-800" />
//         <div className="absolute left-7 top-12 h-8 w-10 rounded-b-xl bg-brand-800" />
//         <div className="absolute bottom-4 left-4 right-4 h-2 rounded-full bg-accent-500/35" />
//       </div>
//     </div>
//   );
// }

export default function RegisterPage() {
  return (
    <main className="min-h-screen bg-app font-sans text-ink">
      <section className="mx-auto grid min-h-screen w-full grid-cols-1 overflow-hidden lg:grid-cols-[0.9fr_0.82fr_1fr]">
        <aside className="bg-auth relative flex items-center px-5 py-8 text-inverse sm:px-8 sm:py-10 md:px-10 lg:min-h-screen lg:px-16">
          <div className="pointer-events-none absolute inset-0 opacity-40 [background-image:radial-gradient(circle_at_20%_10%,rgba(14,165,233,0.22),transparent_32%),radial-gradient(circle_at_92%_78%,rgba(14,165,233,0.16),transparent_26%)]" />

          <div className="pointer-events-none absolute -bottom-20 -right-20 h-80 w-80 rounded-full border border-white/10" />
          <div className="pointer-events-none absolute -bottom-32 -right-12 h-96 w-96 rounded-full border border-white/10" />

          <div className="relative mx-auto w-full max-w-sm lg:max-w-md">
            <div className="flex items-center gap-3 sm:gap-4">
              <StockPilotMark className="h-11 w-11 text-white sm:h-14 sm:w-14" />

              <span className="text-2xl font-semibold tracking-[-0.03em] sm:text-[30px]">
                Stock Pilot
              </span>
            </div>

            <div className="mt-8 sm:mt-10 lg:mt-14">
              <h1 className="text-3xl font-semibold leading-tight tracking-[-0.045em] sm:text-4xl lg:text-[44px] lg:leading-[1.05]">
                Inventory,
                <span className="block text-accent-500">simplified.</span>
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

        <div className="relative z-10 flex items-center justify-center px-4 py-6 sm:px-6 sm:py-8 md:px-8 lg:-mr-16 lg:px-0">
          <div className="card w-full max-w-[560px] rounded-2xl p-5 sm:rounded-[28px] sm:p-8 lg:p-12">
            <div className="mb-6 sm:mb-8">
              <h2 className="text-title text-ink">Create account</h2>

              <p className="mt-2 text-body text-muted">
                Get started with Stock Pilot in minutes.
              </p>
            </div>

            <form className="grid gap-4 sm:gap-[18px]">
              <Field
                label="Full name"
                icon={Box}
                placeholder="Enter your full name"
              />

              <Field
                label="Work email"
                icon={Mail}
                placeholder="name@company.com"
                type="email"
              />

              <Field
                label="Company name"
                icon={Building2}
                placeholder="Your company name"
              />

              <label className="grid gap-2">
                <span className="text-label text-ink">Business type</span>

                <span className="relative flex items-center">
                  <select className="input w-full appearance-none px-4 pr-11 text-muted">
                    <option>Select business type</option>
                    <option>Retail</option>
                    <option>Wholesale</option>
                    <option>Manufacturing</option>
                    <option>Distribution</option>
                  </select>

                  <ChevronDown className="pointer-events-none absolute right-4 h-4 w-4 text-subtle" />
                </span>
              </label>

              <Field
                label="Password"
                icon={LockKeyhole}
                placeholder="Create a password"
                type="password"
                trailingIcon={Eye}
              />

              <Field
                label="Confirm password"
                icon={LockKeyhole}
                placeholder="Confirm your password"
                type="password"
                trailingIcon={Eye}
              />

              <label className="mt-1 flex items-start gap-3 text-small text-ink-soft">
                <input
                  type="checkbox"
                  className="mt-0.5 h-4 w-4 rounded border-border text-accent-600 focus:ring-accent-500"
                />

                <span>
                  I agree to the{" "}
                  <a href="#" className="font-medium text-accent-600">
                    Terms of Service
                  </a>{" "}
                  and{" "}
                  <a href="#" className="font-medium text-accent-600">
                    Privacy Policy
                  </a>
                  .
                </span>
              </label>

              <button
                type="submit"
                className="bg-primary-button mt-2 flex h-12 items-center justify-center gap-3 rounded-button text-sm font-semibold text-inverse shadow-button transition hover:-translate-y-0.5 sm:h-14 sm:text-base"
              >
                Create account
                <ArrowRight className="h-5 w-5" />
              </button>
            </form>

            <p className="mt-6 text-center text-body text-muted sm:mt-7">
              Already have an account?{" "}
              <a href="#" className="font-medium text-accent-600">
                Sign in
              </a>
            </p>
          </div>
        </div>

        <div className="hidden lg:block">
          <WarehouseScene />
        </div>
      </section>
    </main>
  );
}