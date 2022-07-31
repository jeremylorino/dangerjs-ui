import { useReactQueryAutoSync } from "use-react-query-auto-sync";

type ExpressionType = "expression" | "condition" | "assignment";
interface Expression {
  type: ExpressionType;
}

interface Statement {
  id: string;
  name: string;
  description: string;
  expressions: Expression[];
}

const STATEMENTS: Statement[] = [
  {
    id: "statement-1",
    name: "Statement 1",
    description: "Statement 1 description",
    expressions: [
      {
        type: "expression",
      },
      {
        type: "expression",
      },
    ],
  },
  {
    id: "statement-2",
    name: "Statement 2",
    description: "Statement 2 description",
    expressions: [
      {
        type: "expression",
      },
      {
        type: "expression",
      },
    ],
  },
  {
    id: "statement-3",
    name: "Statement 3",
    description: "Statement 3 description",
    expressions: [
      {
        type: "expression",
      },
      {
        type: "expression",
      },
    ],
  },
];

function getStatements() {
  return STATEMENTS;
}

export function useStatements() {
  const { draft, setDraft, queryResult } = useReactQueryAutoSync({
    queryOptions: {
      /* omitted but same as react-query */
    },
    mutationOptions: {
      /* omitted but same as react-query */
    },
    autoSaveOptions: { wait: 1000 },
  });
}
