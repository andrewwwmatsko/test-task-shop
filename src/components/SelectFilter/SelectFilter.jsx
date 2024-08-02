import { Select, SelectItem } from "@nextui-org/react";
import { useDispatch, useSelector } from "react-redux";

import {
  selectCurrentFilter,
  selectFilterTypes,
} from "../../redux/filters/selectors";
import { changeFilter } from "../../redux/filters/slice";

export default function SelectFilter() {
  const filterTypes = useSelector(selectFilterTypes);
  const filter = useSelector(selectCurrentFilter);

  const dispatch = useDispatch();

  const handleChange = (e) => {
    dispatch(changeFilter(e.target.value));
  };

  return (
    <div className="flex w-full flex-wrap md:flex-nowrap gap-4">
      <Select
        label="Filter"
        placeholder="Select filter"
        className="max-w-lg"
        onChange={handleChange}
        defaultSelectedKeys={[filter]}
      >
        {filterTypes.map((animal) => (
          <SelectItem key={animal}>{animal}</SelectItem>
        ))}
      </Select>
    </div>
  );
}
