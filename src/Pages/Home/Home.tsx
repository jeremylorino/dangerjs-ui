import classNames from "classnames";
import { useState } from "react";
import { F } from "ts-toolbelt";
import { useStatement, useStatements } from "../../Shared/Hooks";
import { ArrayType } from "../../Shared/utility.types";

type Statement = ArrayType<F.Return<typeof useStatements>[0]>;

export function HomePage() {
  const [selectedStatement, setSelectedStatement] = useState<Statement | null>(
    null
  );

  return (
    <div className="h-[80vh] w-full m-2">
      <div className="mx-3 my-2">placeholder for action bar</div>
      <div className="flex divide-x h-full">
        <div className="mx-3 flex flex-col w-2/5 px-8">
          <div className="text-3xl mb-2">Statements</div>
          <div>
            <StatementsList
              selected={selectedStatement}
              onSelect={(item) => setSelectedStatement(item)}
            />
          </div>
        </div>
        <div className="mx-3 flex flex-col w-3/5 px-8">
          <div className="text-3xl">Details</div>
          <div>
            {selectedStatement && (
              <StatementDetails id={selectedStatement.id} />
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

function StatementsList(props: {
  selected: Statement | null;
  onSelect: (item: Statement) => void;
}) {
  const [statements] = useStatements();

  return (
    <div>
      <div className="divide-y flex flex-col">
        {statements?.map((statement, index) => (
          <div
            key={index}
            className={classNames(
              "pb-4 hover:cursor-pointer hover:bg-cyan-200 hover:text-dark",
              {
                "cursor-pointer bg-cyan-200 text-dark":
                  props.selected?.id === statement.id,
              }
            )}
            onClick={() => props.onSelect(statement)}
          >
            <div className="text-lg">{statement.name}</div>
            <div className="text-base">{statement.description}</div>
          </div>
        ))}
      </div>
    </div>
  );
}

function StatementDetails(props: { id: Statement["id"] }) {
  const [statement] = useStatement(props.id);

  if (!statement) {
    return null;
  }

  return (
    <div>
      <div className="divide-y flex flex-col">
        <div className="text-lg">{statement.name}</div>
        <div className="text-base">{statement.description}</div>
      </div>
    </div>
  );
}
