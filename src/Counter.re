let component = ReasonReact.statelessComponent("Counter");
type param = {
  count: int,
  set: (int => int) => unit,
  inc: unit => unit,
  dec: unit => unit,
  incBy: int => unit,
  decBy: int => unit,
};
module Value =
  Value.Make({
    type t = int;
  });
let make = (~initial, ~onChange=?, children) => {
  ...component,
  render: _self =>
    <Value initial ?onChange>
      ...{
           ({value, set}) =>
             children({
               count: value,
               set,
               inc: () => set(value => value + 1),
               dec: () => set(value => value - 1),
               incBy: number => set(value => value + number),
               decBy: number => set(value => value - number),
             })
         }
    </Value>,
};