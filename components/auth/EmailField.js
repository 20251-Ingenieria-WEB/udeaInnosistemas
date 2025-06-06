// EmailField.js
export function EmailField({ name, value, onChange, required }) {
  return (
    <div className={`flex flex-col gap-2 w-full max-md:w-[calc(100%-1rem)] max-md:mx-auto`}>
      <label className="self-start font-bold text-black text-3xl mb-2 max-md:ml-0.5">
        Correo electrónico
      </label>
      <div className="flex flex-wrap gap-5 justify-between px-2.5 w-full whitespace-nowrap bg-white rounded-md border border-solid border-stone-300 max-md:mr-0.5 max-md:max-w-full">
      <input
        type="email"
        name={name}
        value={value}
        onChange={onChange}
        required={required}
        className="w-full px-3 py-2 border rounded"
      />
    <div className="flex gap-2 text-black text-3xl">
          <div className="shrink-0 w-px border border-solid border-stone-300 h-[58px]" />
          <span className="my-auto basis-auto">@udea.edu.co</span>
        </div>
      </div>
    </div>
  );
}