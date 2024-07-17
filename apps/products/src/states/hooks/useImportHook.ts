"use client"
import React, { useEffect, useState } from "react";

const useImportHook = <T>(moduleImport: any) => {
    const [hook, setHook] = useState<() => T>();
    useEffect(() => {
        moduleImport().then((module: any) => {
            setHook(module.default);
        });
    }, []);

    return hook;
}

export default useImportHook;