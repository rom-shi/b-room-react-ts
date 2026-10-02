import { useCallback, useEffect, useState, useRef } from 'react';
import './styles.css';
import { useAppDispatch, useAppSelector } from '../../../store/hooks';
import { reqPagination, reqPrice } from '../../../store/reducers/request';

interface IPrice {
  minVal: number
  maxVal: number
}

const PriceSlider: React.FC = () => {
  const dispatch = useAppDispatch();

  const { minPrice, maxPrice } = useAppSelector((state) => state.bookSlice);
  const { selectedMinPrice, selectedMaxPrice } = useAppSelector((state) => state.requestSlice);

  const [minVal, setMinVal] = useState<number>(selectedMinPrice || minPrice);
  const [maxVal, setMaxVal] = useState<number>(selectedMaxPrice || maxPrice);

  const minValRef = useRef<HTMLInputElement>(null);
  const maxValRef = useRef<HTMLInputElement>(null);
  const range = useRef<HTMLInputElement>(null);

  let i = 0;

  const handleChangePrice = (price: IPrice) => {
    if (i === 0) { i++; return null; }

    dispatch(reqPrice(price));
    dispatch(reqPagination(0));
  };

  const debounce = (func: (price: IPrice) => void) => {
    let timer: ReturnType<typeof setTimeout> | null;

    // eslint-disable-next-line
    return function name(...args: any) {
      const context = timer;

      if (timer) clearTimeout(timer);

      timer = setTimeout(() => {
        timer = null;

        func.apply(context, args);
      }, 500);
    };
  };

  const debouncePrice = useCallback(debounce(handleChangePrice), []);

  const getPercent = useCallback(
    (value: number) => Math.round(((value - minPrice) / (maxPrice - minPrice)) * 100),
    [minPrice, maxPrice],
  );

  useEffect(() => {
    if (maxValRef.current) {
      const minPercent = getPercent(minVal);
      const maxPercent = getPercent(+maxValRef.current.value);

      if (range.current) {
        range.current.style.left = `${minPercent}%`;
        range.current.style.width = `${maxPercent - minPercent}%`;
      }
    }
  }, [minVal]);

  useEffect(() => {
    if (minValRef.current) {
      const minPercent = getPercent(+minValRef.current.value);
      const maxPercent = getPercent(maxVal);

      if (range.current) {
        range.current.style.width = `${maxPercent - minPercent}%`;
      }
    }
  }, [maxVal]);

  useEffect(() => {
    debouncePrice({ minVal, maxVal });
  }, [minVal, maxVal]);

  const onMinChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = Math.floor(Math.min(+event.target.value, maxVal - 1));

    setMinVal(value);
    event.target.value = value.toString();
  };

  const onMaxChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = Math.ceil(Math.max(+event.target.value, minVal + 1));

    setMaxVal(value);
    event.target.value = value.toString();
  };

  return (
    <div className={'container'}>
      <input
        max={maxPrice}
        min={minPrice}
        onChange={onMinChange}
        ref={minValRef}
        type={'range'}
        value={minVal}
        className={'thumb thumb--zindex-3'}
      />

      <input
        className={'thumb thumb--zindex-4'}
        max={maxPrice}
        min={minPrice}
        onChange={onMaxChange}
        ref={maxValRef}
        type={'range'}
        value={maxVal}
      />

      <div className={'slider'}>
        <div className={'slider__track'} />
        <div className={'slider__range'} ref={range} />
        <div className={'slider__left-value'}>$ {minVal}</div>
        <div className={'slider__right-value'}>$ {maxVal}</div>
      </div>
    </div>
  );
};

export default PriceSlider;
