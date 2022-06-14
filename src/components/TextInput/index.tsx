import React, { FC } from 'react';
import { useForm } from 'react-hook-form';
import Select from 'react-select';

export interface TextInputInterface {
  name: string;
  type: string;
  placeholder?: string;
  defaultValue?: string;
  className?: string;
  label?: string;
  register: any;
  readOnly?: boolean;
  layout?: string;
  options?: any[];
  hidden?: boolean;
  isMulti?: boolean;
  field?: any;
  formatOptionLabel?: any;
  accept?: string;
  ref?: string;
  errors?: any;
}

const TextInput: FC<TextInputInterface> = ({
  name,
  type,
  placeholder,
  defaultValue,
  className,
  label,
  readOnly,
  layout,
  options,
  hidden,
  isMulti,
  field,
  formatOptionLabel,
  accept,
  ref,
  register,
  errors,
}): JSX.Element => {
  const error = errors[name];

  return (
    <div className="form-control w-full">
      <label className="label">
        <span className="label-text">{label}</span>
      </label>
      <input
        type={type}
        placeholder={placeholder}
        id={name}
        readOnly={readOnly}
        defaultValue={defaultValue}
        {...register}
        className={`input input-bordered w-full ${className}`}
      />
      <label className="label ">
        {error && <span className="label-text-alt text-red-500">{error.message}</span>}
      </label>
    </div>
  );

  // return (
  //   <div
  //     className={`form-group` + (layout === 'horizontal' ? ` row` : ``)}
  //     hidden={hidden}>
  //     {label ? (
  //       <label
  //         htmlFor={name}
  //         className={
  //           `font-weight-bold` +
  //           (layout === 'horizontal' ? ` col-sm-4 col-form-label` : ``)
  //         }>
  //         {type !== 'switch' ? label : ''}
  //       </label>
  //     ) : (
  //       ''
  //     )}
  //     <div className={layout === 'horizontal' ? `col-sm-8` : ``}>
  //       {type === 'textarea' ? (
  //         <textarea
  //           rows={3}
  //           id={name}
  //           readOnly={readOnly}
  //           defaultValue={defaultValue}
  //           placeholder={placeholder}
  //           {...register(name, validations)}
  //           className={
  //             `form-control large ${className} ` + (error ? `border-danger` : ``)
  //           }
  //         />
  //       ) : type === 'select' ? (
  //         <Select
  //           placeholder={placeholder}
  //           isMulti={isMulti}
  //           name={name}
  //           id={name}
  //           formatOptionLabel={formatOptionLabel}
  //           {...field}
  //           options={options}
  //         />
  //       ) : type === 'radio' ? (
  //         <>
  //           <div className="mx-auto">
  //             {options?.map((item, k) => {
  //               return (
  //                 <div className="custom-control custom-radio d-inline mr-2">
  //                   <input
  //                     className="custom-control-input"
  //                     type="radio"
  //                     id={name + k}
  //                     readOnly={readOnly}
  //                     placeholder={placeholder}
  //                     name={name}
  //                     value={item.value}
  //                     checked={item.value == defaultValue}
  //                     {...register(name, validations)}
  //                   />
  //                   {/* <input type="radio" name="r"/> */}
  //                   <label htmlFor={name + k} className="custom-control-label">
  //                     {item.label}
  //                   </label>
  //                 </div>
  //               );
  //             })}
  //           </div>
  //         </>
  //       ) : type === 'switch' ? (
  //         <>
  //           <div className="custom-control custom-switch">
  //             <input
  //               {...register(name, validations)}
  //               type="checkbox"
  //               className="custom-control-input"
  //               name={name}
  //               id={name}
  //             />
  //             <label className="custom-control-label" htmlFor={name}>
  //               {label}
  //             </label>
  //           </div>
  //         </>
  //       ) : type === 'checkbox' ? (
  //         <div className="form-check">
  //           <input
  //             className="form-check-input"
  //             type="checkbox"
  //             id={name}
  //             // defaultValue={defaultValue}
  //             // defaultChecked={defaultValue}
  //             {...register(name, validations)}
  //           />
  //           <label className="form-check-label" htmlFor={name}>
  //             {placeholder}
  //           </label>
  //         </div>
  //       ) : (
  //         <>
  //           <input
  //             // ref={ref}
  //             type={type}
  //             className={
  //               `form-control large ${className} ` + (error ? `border-danger` : ``)
  //             }
  //             id={name}
  //             readOnly={readOnly}
  //             defaultValue={defaultValue}
  //             placeholder={placeholder}
  //             accept={accept}
  //             {...register(name, validations)}
  //           />
  //           {accept ? <i>file: {accept}</i> : ''}
  //           {error ? (
  //             <div className="text-danger small py-2 text-right">{error.message}</div>
  //           ) : (
  //             ''
  //           )}
  //         </>
  //       )}
  //     </div>
  //   </div>
  // );
};

export default TextInput;

// const {
//   name,
//   type,
//   placeholder,
//   defaultValue,
//   className,
//   label,
//   validations,
//   readOnly,
//   layout,
//   options,
//   hidden,
//   isMulti,
//   field,
//   formatOptionLabel,
//   accept,
//   ref,
// } = param;
