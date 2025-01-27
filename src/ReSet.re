open Utils.Infix;

module type S = {
  type t;
  let compare: (t, t) => int;
};

module Make = (M: S) => {
  module MSet = Set.Make(M);
  include MSet;
  module Value = Value.Make(MSet);

  type param = {
    values: MSet.t,
    add: M.t => unit,
    clear: unit => unit,
    remove: M.t => unit,
    has: M.t => bool,
    reset: unit => unit,
    set: (MSet.t => MSet.t) => unit,
  };
  [@react.component]
  let make = (~initial=MSet.empty, ~onChange=?, ~children) => {
    <Value initial ?onChange>
      ...{({value, set}: Value.param) =>
        children({
          values: value,
          clear: () => set(_ => MSet.empty),
          add: set <|| MSet.add,
          remove: set <|| MSet.remove,
          has: Utils.flip(MSet.mem, value),
          reset: () => set(_ => MSet.empty),
          set,
        })
      }
    </Value>;
  };
};
