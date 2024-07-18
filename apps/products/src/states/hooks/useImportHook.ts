"use client"
import React, { useEffect, useState } from "react";

const useImportHook = <T>(moduleImport: any) => {
    const [hook, setHook] = useState<() => T>();
    useEffect(() => {
        moduleImport().then((module: any) => {
            debugger;
            setHook(module.default);
        });
    }, []);

    return hook && hook();
}

export default useImportHook;