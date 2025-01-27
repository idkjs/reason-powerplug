module Value = Value.Make(String);

type param = {
  value: string,
  reset: unit => unit,
  set: (string => string) => unit,
  onChange: ReactEvent.Form.t => unit,
};

[@react.component]
let make = (~initial="", ~onChange=?, ~children) => {
  <Value initial ?onChange>
    ...{({value, set, reset}: Value.param) =>
      children({
        value,
        reset,
        set,
        onChange: e => {
          let newValue = e->ReactEvent.Form.target##value;
          set(_ => newValue);
        },
      })
    }
  </Value>;
};
