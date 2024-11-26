function FiltersItem({ type, name, checked, onChange }) {
    return (
      <div className="flex items-center mb-2">
        <input
          id={type}
          type="checkbox"
          checked={checked}
          onChange={onChange}
          className=""
        />
        <label
          htmlFor={type}
          className="font-medium text-gray-900 text-sm dark:text-neutral-800 ms-2"
        >
          {name}
        </label>
      </div>
    );
  }
  
  export default FiltersItem;