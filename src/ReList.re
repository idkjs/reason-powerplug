open Utils.Infix;

module type S = {type t;};

module Make = (M: S) => {
  module Value =
    Value.Make({
      type t = list(M.t);
    });

  type param = {
    list: list(M.t),
    first: unit => option(M.t),
    last: unit => option(M.t),
    set: (list(M.t) => list(M.t)) => unit,
    push: list(M.t) => unit,
    pull: (M.t => bool) => unit,
    sort: ((M.t, M.t) => int) => unit,
    reset: unit => unit,
  };
  [@react.component]
  let make = (~initial=[], ~onChange=?, ~children) => {
    let head = xs => (() => List.hd(xs)) |> Utils.tryWith;
    let last = head <|| List.rev;
    let complement = (f, x) => !f(x);
    <Value initial ?onChange>
      ...{({value, set, reset}: Value.param) =>
        children({
          list: value,
          first: () => head(value),
          last: () => last(value),
          set,
          push: set <|| Utils.flip(List.append),
          sort: set <|| List.sort,
          pull: set <|| List.filter <|| complement,
          reset,
        })
      }
    </Value>;
  };
};
