// FormField.js
export function FormField({ label, type = "text", name, value, onChange, required, minLength }) {
  return (
    <div className="mb-4">
      <label className="block mb-2 font-medium">{label}</label>
      <input
        type={type}
        name={name}
        value={value}
        onChange={onChange}
        required={required}
        minLength={minLength}
        className="px-2.5 py-5 text-black text-3xl bg-white rounded-md border border-solid border-stone-300 max-md:pr-5 max-md:max-w-full"
      />
    </div>
  );
}

