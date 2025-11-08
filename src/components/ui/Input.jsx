import React, { useState } from 'react';
import { Eye, EyeOff } from 'lucide-react';

export default function Input({
  label,
  id,
  type = 'text',
  onChange,
  value,
  autoComplete,
  name,
  placeholder,
  className = '',
  error,
}) {
  const [showPassword, setShowPassword] = useState(false);

  const inputType = type === 'password' && showPassword ? 'text' : type;
  return (
    <div className={`w-full flex flex-col ${className}`}>
      {label && (
        <label htmlFor={id} className="block font-normal mb-2">
          {label}
        </label>
      )}
      <div className="relative">
        <input
          id={id}
          name={name || id}
          type={inputType}
          value={value}
          autoComplete={autoComplete}
          placeholder={placeholder}
          onChange={onChange}
          className={`px-4 py-4 w-full rounded-lg border text bg-inputBg text-white font-light focus:outline-none focus:ring-2 ${
            error
              ? 'border-red-500 focus:ring-red-500 focus:border-red-500'
              : 'border-grayBorder focus:ring-primary'
          }`}
        />
        {error && <p className="text-red-500 text-sm mt-1">{error}</p>}
        {type === 'password' && (
          <button
            type="button"
            onClick={() => setShowPassword(prev => !prev)}
            className="absolute z-50 inset-y-0 right-4 text-gray-400 hover:text-white"
          >
            {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
          </button>
        )}
      </div>
    </div>
  );
}
