import { useMonaco as useMonacoEditor } from "@monaco-editor/react";
import { useEffect, useState } from "react";

const global = {
  initialized: false,
};

export function useMonaco() {
  const monaco = useMonacoEditor();
  const [isReady, setReady] = useState(global.initialized);

  useEffect(() => {
    if (monaco && !isReady) {
      global.initialized = true;
      setReady(true);
    }
  }, [monaco, isReady]);

  return { isReady, monaco };
}
