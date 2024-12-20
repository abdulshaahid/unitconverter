import React, { useMemo } from 'react';

type Option = {
  value: string;
  label: string;
};

type SelectFieldProps = {
  label: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
  options: Option[];
};

export default function SelectField({ label, value, onChange, options }: SelectFieldProps) {
  // Memoize options to prevent unnecessary re-renders
  const memoizedOptions = useMemo(() => options, [options]);

  return (
    <div>
      <label className="block text-sm font-medium text-gray-200 mb-2">
        {label}
      </label>
      <select
        className="w-full p-3 border border-white/10 rounded-lg 
                 bg-dark-950 text-white
                 focus:ring-2 focus:ring-primary-400/50 focus:border-primary-400/50
                 transition-all duration-200 ease-in-out
                 hover:border-primary-400/30"
        value={value}
        onChange={onChange}
      >
        {memoizedOptions.map((option) => (
          <option 
            key={option.value} 
            value={option.value}
            className="bg-dark-950 text-white"
          >
            {option.label}
          </option>
        ))}
      </select>
    </div>
  );
}