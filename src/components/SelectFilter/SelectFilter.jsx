import { Select, SelectItem } from "@nextui-org/react";
import { useDispatch, useSelector } from "react-redux";

import { selectFilterTypes } from "../../redux/filters/selectors";
import { changeFilter } from "../../redux/filters/slice";

export default function SelectFilter() {
  const filterTypes = useSelector(selectFilterTypes);

  const dispatch = useDispatch();

  const handleChange = () => {
    dispatch(changeFilter());
  };

  return (
    <div className="flex w-full flex-wrap md:flex-nowrap gap-4">
      <Select
        label="Filter"
        placeholder="Select filter"
        className="max-w-lg"
        onChange={handleChange}
      >
        {filterTypes.map((animal) => (
          <SelectItem key={animal}>{animal}</SelectItem>
        ))}
      </Select>
    </div>
  );
}
