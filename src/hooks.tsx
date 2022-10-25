import { useState } from 'react'

const TEN_SECONDS = 100

const useAge = (): [number, Function] => {
  let [value, setValue]  = useState(0)
  const setFunction = (): NodeJS.Timer => setInterval(() => setValue(value += 10), TEN_SECONDS)
  return [value, setFunction]
};

export { useAge };
