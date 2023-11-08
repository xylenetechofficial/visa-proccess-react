import { CustomSingleCheckBox } from "../../../../componenets/Checkbox";
import { SubHeading1 } from "../../../../componenets/CoustomHeader";
import { Company } from "../type";

export function RenderPermissions(props: { company_list: Company[], onUpdate: (index: any, value: Company) => void }) {

  return (
    <div className=" min-w-[80%]">
      <div className="border p-5 my-5">
        <div className="grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-4 mt-2">

          {props.company_list.map((company) => {
            return (<div key={company.id} className="flex items-center justify-between border my-1 p-2 bg-slate-50 shadow-md">
              <div className="flex items-center">
                <CustomSingleCheckBox
                  value={company.check}
                  onChange={
                    (value) => { props.onUpdate(company.id, { ...company, check: value }) }
                  }
                />
                <SubHeading1 text={company.name} />
              </div>
            </div>)
          })}

        </div>
      </div>
    </div>
  );
}
