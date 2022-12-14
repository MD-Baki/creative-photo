import React from "react";

export const Spinner = () => {
    return (
        <div className="flex justify-center pt-28 pb-16">
            <div className="w-16 h-16 border-4 border-dashed rounded-full animate-spin dark:border-violet-400"></div>
        </div>
    );
};
