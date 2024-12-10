import { GSelectInputController } from "./gSelectInputController";

const GSelectInput: React.FC<{
  label?: string;
  control: GSelectInputController;
}> = ({ label, control }) => {
  if (control.value) {
    control.setHasBeenTouched(true);
  }

  return (
    <>
      <label className={`form-label d-flex flex-column flex-grow-1 `}>
        {label}
        <select
          className={` p-2 border border-gray-300 rounded-lg mx-4 bg-white text-gray-700 focus:outline-none form-control ${
            control.hasBeenTouched
              ? control.error
                ? "is-invalid"
                : "is-valid"
              : ""
          }`}
          value={control.value}
          onChange={(e) => {
            control.setValue(e.target.value);
            control.setHasBeenTouched(true);
          }}
          onBlur={() => control.setHasBeenTouched(true)}
        >
          <option value="" disabled />
          {control.possibleValues.map((v) => (
            <option key={v} value={v}>
              {v}
            </option>
          ))}
        </select>
      </label>
    </>
  );
};

export default GSelectInput;
