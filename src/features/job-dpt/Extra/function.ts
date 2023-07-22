import { ConsolidateChargeInterface } from "../../masters/consolidateCharge/type";
import { InterviewSectorInterface } from "../../masters/interviewSector/type";
import { ActualProfessionInterface } from "./type";

export function cal_consolidate_charge(
  consolidateChargeList: ConsolidateChargeInterface[],
  value: any
) {
  const nameList = [];
  let sum = 0;

  for (let i = 0; i < consolidateChargeList.length; i++) {
    if (value.includes(consolidateChargeList[i].id?.toString())) {
      nameList.push(consolidateChargeList[i].name);
      sum += consolidateChargeList[i].charge;
    }
  }

  return { total: sum, name_list: nameList };
}

export async function generate_final_actual_profession(
  actualProfesionList: ActualProfessionInterface[],
  selectedDifferedSector: InterviewSectorInterface[],
  selectedMasterSector: InterviewSectorInterface[]
) {
  const newarray: ActualProfessionInterface[] = [];

  for (let i = 0; i < actualProfesionList.length; i++) {
    const actualProfesion = actualProfesionList[i];

    // Differed Sector
    for (let j = 0; j < selectedDifferedSector.length; j++) {
      const differedSector = selectedDifferedSector[j];
      newarray.push({
        jobOrder_id: actualProfesion.id ?? 0,
        actual_profession: actualProfesion.actual_profession,
        quantity: actualProfesion.quantity,
        seletion_target_quantity: actualProfesion.seletion_target_quantity,
        min_salary: actualProfesion.min_salary,
        max_salary: actualProfesion.max_salary,
        job_description: actualProfesion.job_description,
        master_service_charges: actualProfesion.master_service_charges,
        differed_service_charges: actualProfesion.differed_service_charges,
        sector: differedSector.id,
        sector_charge: actualProfesion.differed_service_charges,
        agent_commission: 0,
        air_ticket: "",
        consodilate_charges: "0",
        grade: 0,
        invoice_service_charges: 0,
        invoice_service_charges_currency: 0,
        invoice_ticket_charges: 0,
        is_invoice: 0,
        partial_charges: 0,
        service_charges: 0,
        is_master_sector: 0,
      });
    }

    // Master Sector
    for (let j = 0; j < selectedMasterSector.length; j++) {
      const masterSector = selectedMasterSector[j];
      newarray.push({
        jobOrder_id: actualProfesion.id ?? 0,
        actual_profession: actualProfesion.actual_profession,
        quantity: actualProfesion.quantity,
        seletion_target_quantity: actualProfesion.seletion_target_quantity,
        min_salary: actualProfesion.min_salary,
        max_salary: actualProfesion.max_salary,
        job_description: actualProfesion.job_description,
        master_service_charges: actualProfesion.master_service_charges,
        differed_service_charges: actualProfesion.differed_service_charges,
        sector: masterSector.id,
        sector_charge: actualProfesion.master_service_charges,
        is_master_sector: 1,
      });
    }
  }

  return newarray;
}

export async function generate_final_actual_profession_v2(
  actualProfesionList_old: ActualProfessionInterface[],
  actualProfesionList: ActualProfessionInterface[],
  selectedDifferedSector: InterviewSectorInterface[],
  selectedMasterSector: InterviewSectorInterface[]
) {
  console.log(actualProfesionList_old); // Only Dev
  console.log(selectedMasterSector); // Only Dev
  const newarray: ActualProfessionInterface[] = actualProfesionList_old;

  for (let i = 0; i < actualProfesionList.length; i++) {
    const actualProfesion = actualProfesionList[i];
    console.log("element: " + actualProfesion.id); // Only Dev
    // if its a old actual profession
    if (actualProfesion.id) {
      console.log("ID set"); // Only Dev
      // find the orginal element
      for (let index = 0; index < newarray.length; index++) {
        const element = newarray[index];

        // if found
        if (element.id == actualProfesion.id) {
          console.log("element found"); // Only Dev
          for (let index_2 = 0; index_2 < newarray.length; index_2++) {
            // find profession by old name
            if (
              newarray[index_2].actual_profession != element.actual_profession
            )
              continue;

            // check is actual profession change
            if (
              element.actual_profession != actualProfesion.actual_profession
            ) {
              // update old name
              newarray[index_2].actual_profession =
                actualProfesion.actual_profession;
            }

            // Differed Sector
            for (let j = 0; j < selectedDifferedSector.length; j++) {
              if (selectedDifferedSector[j].id == newarray[index_2].sector) {
                newarray[index_2].sector_charge =
                  actualProfesion.differed_service_charges;
                break;
              }
            }

            // Master Sector
            for (let k = 0; k < selectedMasterSector.length; k++) {
              if (selectedMasterSector[k].id == newarray[index_2].sector) {
                newarray[index_2].sector_charge =
                  actualProfesion.master_service_charges;
                break;
              }
            }

            // update all other values
            newarray[index].quantity = actualProfesion.quantity;
            newarray[index].seletion_target_quantity =
              actualProfesion.seletion_target_quantity;
            newarray[index].min_salary = actualProfesion.min_salary;
            newarray[index].max_salary = actualProfesion.max_salary;
            newarray[index].job_description = actualProfesion.job_description;
            newarray[index].master_service_charges =
              actualProfesion.master_service_charges;
            newarray[index].differed_service_charges =
              actualProfesion.differed_service_charges;
          }

          continue;
        }
      }

      continue;
    }

    // Differed Sector
    for (let j = 0; j < selectedDifferedSector.length; j++) {
      const differedSector = selectedDifferedSector[j];

      newarray.push({
        jobOrder_id: actualProfesion.id ?? 0,
        actual_profession: actualProfesion.actual_profession,
        quantity: actualProfesion.quantity,
        seletion_target_quantity: actualProfesion.seletion_target_quantity,
        min_salary: actualProfesion.min_salary,
        max_salary: actualProfesion.max_salary,
        job_description: actualProfesion.job_description,
        master_service_charges: actualProfesion.master_service_charges,
        differed_service_charges: actualProfesion.differed_service_charges,
        sector: differedSector.id,
        sector_charge: actualProfesion.differed_service_charges,
        agent_commission: 0,
        air_ticket: "",
        consodilate_charges: "0",
        grade: 0,
        invoice_service_charges: 0,
        invoice_service_charges_currency: 0,
        invoice_ticket_charges: 0,
        is_invoice: 0,
        partial_charges: 0,
        service_charges: 0,
        is_master_sector: 0,
      });
    }

    // Master Sector
    for (let j = 0; j < selectedMasterSector.length; j++) {
      const masterSector = selectedMasterSector[j];
      newarray.push({
        jobOrder_id: actualProfesion.id ?? 0,
        actual_profession: actualProfesion.actual_profession,
        quantity: actualProfesion.quantity,
        seletion_target_quantity: actualProfesion.seletion_target_quantity,
        min_salary: actualProfesion.min_salary,
        max_salary: actualProfesion.max_salary,
        job_description: actualProfesion.job_description,
        master_service_charges: actualProfesion.master_service_charges,
        differed_service_charges: actualProfesion.differed_service_charges,
        sector: masterSector.id,
        sector_charge: actualProfesion.master_service_charges,
        is_master_sector: 1,
      });
    }
  }

  console.log("***********************"); // Only Dev
  console.log(newarray); // Only Dev
  return newarray;
}

export async function filter_unique_sector(
  sector_list: InterviewSectorInterface[],
  filter_list: string[]
) {
  const new_array = [];
  for (let i = 0; i < sector_list.length; i++) {
    if (!filter_list.includes((sector_list[i].id ?? 0).toString())) {
      new_array.push((sector_list[i].id ?? 0).toString());
    }
  }
  return new_array;
}

export async function get_unique_actual_profession(
  actualProfesionList: ActualProfessionInterface[]
) {
  console.log("============   actualProfesionList   ============"); // Only Dev
  console.log(actualProfesionList); // Only Dev
  const newarray: ActualProfessionInterface[] = [];

  for (let i = 0; i < actualProfesionList.length; i++) {
    const actualProfesion = actualProfesionList[i];

    // search actual proffesion
    let is_matched = false;
    for (let j = 0; j < newarray.length; j++) {
      const temp = newarray[j];
      if (temp.actual_profession == actualProfesion.actual_profession) {
        is_matched = true;
        break;
      }
    }

    if (!is_matched) newarray.push(actualProfesion);
  }

  return newarray;
}
