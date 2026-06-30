'use client';

import { FC, ReactNode, useId } from 'react';
import ReactSelect, {
  DropdownIndicatorProps,
  components,
  SingleValueProps,
  PlaceholderProps,
} from 'react-select';

import classNames from 'classnames';

import { ChevronDownIcon } from '@/shared/assets/icons';

import styles from './Select.module.scss';

export interface SelectOption {
  value: string;
  label: string;
}

interface SelectProps {
  className?: string;
  children?: ReactNode;
  placeholder?: ReactNode;
  options?: SelectOption[];
  value?: SelectOption | null;
  onChange?: (newValue: SelectOption | null) => void;
  defaultValue?: SelectOption | null;
}

const DropdownIndicator = (
  props: DropdownIndicatorProps<SelectOption, false>,
) => {
  const { selectProps } = props;
  const isOpen = selectProps.menuIsOpen;

  return (
    <ChevronDownIcon
      className={classNames(styles['icon'], isOpen && styles['icon--open'])}
    />
  );
};

const SingleValue = (props: SingleValueProps<SelectOption, false>) => {
  const text = String(props.children || '');
  return (
    <components.SingleValue {...props}>
      <span data-text={text}>{props.children}</span>
    </components.SingleValue>
  );
};

const Placeholder = (props: PlaceholderProps<SelectOption, false>) => {
  const text = String(props.children || '');
  return (
    <components.Placeholder {...props}>
      <span data-text={text}>{props.children}</span>
    </components.Placeholder>
  );
};

export const Select: FC<SelectProps> = ({
  className,
  children,
  placeholder,
  options = [],
  value,
  onChange,
  defaultValue,
  ...otherProps
}) => {
  const defaultId = useId();

  return (
    <div className={classNames(styles['select'], className)}>
      <ReactSelect<SelectOption, false>
        {...otherProps}
        instanceId={defaultId}
        options={options}
        value={value}
        onChange={onChange}
        defaultValue={defaultValue}
        placeholder={placeholder || children}
        classNamePrefix='react-select'
        isSearchable={false}
        components={{
          DropdownIndicator,
          IndicatorSeparator: null,
          SingleValue,
          Placeholder,
        }}
      />
    </div>
  );
};
