import {
  InputHTMLAttributes,
  useState,
  useEffect,
  useRef,
  FC,
  FocusEvent,
  ChangeEvent,
  useId,
} from 'react';
import { PatternFormat } from 'react-number-format';
import classNames from 'classnames';

import styles from './Input.module.scss';

export interface InputProps
  extends Omit<InputHTMLAttributes<HTMLInputElement>, 'mask'> {
  mask?: string;
  maskChar?: string;
  label?: string;
  error?: boolean;
}

export const Input: FC<InputProps> = ({
  className,
  mask,
  maskChar = '_',
  label,
  value,
  defaultValue,
  onFocus,
  onBlur,
  onChange,
  id,
  type = 'text',
  error,
  ...otherProps
}) => {
  const [isFocused, setIsFocused] = useState(false);
  const [localValue, setLocalValue] = useState<string>(() => {
    const val = value !== undefined ? value : defaultValue;
    if (val === undefined || val === null) return '';
    return Array.isArray(val) ? val.join(', ') : String(val);
  });

  const inputRef = useRef<HTMLInputElement>(null);
  const defaultId = useId();

  useEffect(() => {
    if (value !== undefined) {
      // eslint-disable-next-line react-hooks/set-state-in-effect
      setLocalValue(Array.isArray(value) ? value.join(', ') : String(value));
    }
  }, [value]);

  const handleFocus = (e: FocusEvent<HTMLInputElement>) => {
    setIsFocused(true);
    if (onFocus) onFocus(e);
  };

  const handleBlur = (e: FocusEvent<HTMLInputElement>) => {
    setIsFocused(false);
    if (onBlur) onBlur(e);
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setLocalValue(e.target.value);
    if (onChange) onChange(e);
  };

  const hasValue = localValue !== '';
  const isActive = isFocused || hasValue;
  const inputId = id || defaultId;

  const commonProps = {
    ...otherProps,
    id: inputId,
    onFocus: handleFocus,
    onBlur: handleBlur,
    onChange: handleChange,
    className: styles['input'],
  };

  return (
    <div
      className={classNames(
        styles['input-container'],
        isActive && styles['is-active'],
        error && styles['has-error'],
        className,
      )}
    >
      {mask ? (
        <PatternFormat
          format={mask.replace(/9/g, '#')}
          mask={maskChar}
          value={value !== undefined ? String(value) : localValue}
          getInputRef={inputRef}
          type={type as 'text' | 'tel' | 'password' | undefined}
          {...commonProps}
        />
      ) : (
        <input
          ref={inputRef}
          value={value !== undefined ? value : localValue}
          type={type}
          {...commonProps}
        />
      )}
      {label && (
        <label htmlFor={inputId} className={styles['label']}>
          {label}
        </label>
      )}
    </div>
  );
};
