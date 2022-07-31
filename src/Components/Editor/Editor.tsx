import MonacoEditor from "@monaco-editor/react";
import { useMonaco } from "./hooks";

export function Editor() {
  const defaultValue = `import { danger, message } from "danger";

const modifiedMD = danger.git.modified_files.join("- ");
message("Changed Files in this PR: \\n - " + modifiedMD);
`;
  const { isReady } = useMonaco();

  if (!isReady) {
    return null;
  }

  return (
    <div className="flex flex-col flex-grow">
      <div className="flex flex-col flex-grow relative overflow-clip">
        <MonacoEditor
          className="absolute top-0 left-0 right-0 bottom-0 border"
          language="typescript"
          defaultValue={defaultValue}
          options={{
            minimap: { enabled: false },
            "semanticHighlighting.enabled": true,
          }}
          value={defaultValue}
          // onChange={onChange}
        />
      </div>
    </div>
  );
}
