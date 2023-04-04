import {useCallback, useState} from "react";

export const useFormField = (initialValue = '', isPhone) => {
  const [value, setValue] = useState(initialValue);
  const onChange = useCallback(e => setValue(isPhone ? e.target.value.replaceAll(/[^\d+]/g, '') : e.target.value), []);
  return {value, onChange};
};