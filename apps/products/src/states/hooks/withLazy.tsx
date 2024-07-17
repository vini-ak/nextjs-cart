import { FC, useEffect, useRef, useState } from "react";

export const withLazy = (Component: FC, moduleImport: any, extractor: any) => {
    return (props: any) => {
      const lazyModuleRef = useRef<any>();
      const [isLoaded, setIsLoaded] = useState(false);
  
      useEffect(() => {
        moduleImport().then((module: any) => {
          lazyModuleRef.current = extractor(module);
          setIsLoaded(true);
          return module;
        });
      }, []);
      
      return isLoaded 
        ? <Component {...lazyModuleRef.current} {...props} />
        : null;
    };
  };