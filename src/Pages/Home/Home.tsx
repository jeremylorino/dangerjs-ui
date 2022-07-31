import { useStatements } from "../../Shared/Hooks";
export function HomePage() {
  const { statements } = useStatements();

  return (
    <div className="m-2">
      <div className="mx-3 my-2">placeholder for action bar</div>
      <div className="flex">
        <div className="mx-3 flex flex-col w-2/5">
          <div className="text-3xl mb-2">Statements</div>
          <div>
            <div>
              <div>
                {statements.map((statement, index) => (
                  <div key={index}>
                    <div className="text-lg">{statement.name}</div>
                    <div className="text-base">{statement.description}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
        <div className="mx-3 flex flex-col w-3/5">
          <div className="text-3xl">Details</div>
        </div>
      </div>
    </div>
  );
}
