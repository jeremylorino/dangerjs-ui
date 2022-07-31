import { merge } from "lodash";
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

function listStatements() {
  return new Promise<Statement[]>((resolve) => {
    setTimeout(() => {
      resolve(STATEMENTS);
    }, 1000);
  });
}

function getStatement({ id }: { id: string }) {
  return new Promise<Statement>((resolve) => {
    setTimeout(() => {
      resolve(STATEMENTS.find((statement) => statement.id === id)!);
    }, 1000);
  });
}

function updateStatement(statement: Statement) {
  return new Promise<Statement>((resolve) => {
    setTimeout(() => {
      resolve(merge({}, statement));
    }, 1000);
  });
}

function updateStatements(statements: Statement[]) {
  return new Promise<Statement[]>((resolve) => {
    setTimeout(() => {
      resolve([...statements]);
    }, 1000);
  });
}

const statementKeys = {
  all: ["statement"] as const,
  lists: () => [...statementKeys.all, "list"] as const,
  list: (filters: string) => [...statementKeys.lists(), { filters }] as const,
  details: () => [...statementKeys.all, "detail"] as const,
  detail: (id: string) => [...statementKeys.details(), id] as const,
};

export function useStatements() {
  const { draft: statements } = useReactQueryAutoSync({
    queryOptions: {
      queryKey: statementKeys.lists(),
      queryFn: listStatements,
    },
    mutationOptions: {
      mutationKey: statementKeys.details(),
      mutationFn: updateStatements,
    },
    autoSaveOptions: {
      wait: 500,
    },
    alertIfUnsavedChanges: true,
  });

  return [statements] as const;
}

export function useStatement(id: Statement["id"]) {
  const { draft: statement, setDraft: setStatement } = useReactQueryAutoSync({
    queryOptions: {
      queryKey: statementKeys.detail(id),
      queryFn: () => getStatement({ id }),
    },
    mutationOptions: {
      mutationKey: statementKeys.detail(id),
      mutationFn: updateStatement,
    },
    autoSaveOptions: {
      wait: 500,
    },
    alertIfUnsavedChanges: true,
  });

  return [statement, setStatement] as const;
}
