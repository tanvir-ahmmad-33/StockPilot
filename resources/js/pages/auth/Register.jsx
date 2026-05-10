import { useState } from "react";
import {
    Box,
    Building2,
    Eye,
    LockKeyhole,
    Mail,
    ArrowRight,
} from "lucide-react";

import InputField from "../../components/forms/InputField";
import SelectField from "../../components/forms/SelectField";
import CheckboxField from "../../components/forms/CheckboxField";

const Register = () => {
    

    return (
        <div className="relative z-10 flex items-center justify-center px-4 py-6 sm:px-6 sm:py-8 md:px-8 lg:-mr-16 lg:px-0">
            <div className="card w-full max-w-[560px] rounded-2xl p-5 sm:rounded-[28px] sm:p-8 lg:p-12">
                <div className="mb-6 sm:mb-8">
                    <h2 className="text-title text-ink">Create account</h2>

                    <p className="mt-2 text-body text-muted">
                        Get started with Stock Pilot in minutes.
                    </p>
                </div>

                <form
                    // onSubmit={handleSubmit}
                    className="grid gap-4 sm:gap-[18px]"
                >
                    

                    {/* <button
                        type="submit"
                        className="bg-primary-button mt-2 flex h-12 items-center justify-center gap-3 rounded-button text-sm font-semibold text-inverse shadow-button transition hover:-translate-y-0.5 sm:h-14 sm:text-base"
                    >
                        Create account
                        <ArrowRight className="h-5 w-5" />
                    </button> */}
                </form>

                <p className="mt-6 text-center text-body text-muted sm:mt-7">
                    Already have an account?{" "}
                    <a href="#" className="font-medium text-accent-600">
                        Sign in
                    </a>
                </p>
            </div>
        </div>
    );
};

export default Register;