import { useEffect, useRef } from 'react';

const useDidUpdateEffect = (func, dep) => {
	const ref = useRef(false);

	useEffect(() => {
		if(ref.current) func();
		else ref.current = true;
	}, dep);
};
export default useDidUpdateEffect;
