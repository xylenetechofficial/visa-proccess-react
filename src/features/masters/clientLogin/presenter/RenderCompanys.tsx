import { CustomSingleCheckBox } from "../../../../componenets/Checkbox";
import { SubHeading1 } from "../../../../componenets/CoustomHeader";

export function RenderPermissions() {
  const anv = ["abc", "abd"];

  return (
    <div className=" min-w-[80%]">
      <div className="border p-5 my-5">
        <div className="flex items-center">
          <SubHeading1 text={"Company Name"} />
        </div>
        <div className="grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-4 mt-2">
          <div className="flex items-center justify-between border my-1 p-2 bg-slate-50 shadow-md">
            <div className="flex items-center">
              <CustomSingleCheckBox
                // value={}
                onChange={
                  (e) => console.log("object")
                  //   onUpdate_page(index_department, index_page, {
                  //     ...e,
                  //     check: e,
                  //   })
                }
              />
              <SubHeading1 text={"Company Name"} />
            </div>

          </div>    

        </div>
      </div>
    </div>
  );
}
