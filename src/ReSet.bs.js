// Generated by ReScript, PLEASE EDIT WITH CARE
"use strict";

var $$Set = require("rescript/lib/js/set.js");
var Curry = require("rescript/lib/js/curry.js");
var React = require("react");
var Caml_option = require("rescript/lib/js/caml_option.js");
var Utils$ReasonPowerplug = require("./Utils.bs.js");
var Value$ReasonPowerplug = require("./Value.bs.js");

function Make(M) {
  var MSet = $$Set.Make(M);
  var Value = Value$ReasonPowerplug.Make({});
  var ReSet$Make = function (Props) {
    var initialOpt = Props.initial;
    var onChange = Props.onChange;
    var children = Props.children;
    var initial =
      initialOpt !== undefined
        ? Caml_option.valFromOption(initialOpt)
        : MSet.empty;
    var tmp = {
      initial: initial,
      children: function (param) {
        var set = param.set;
        var value = param.value;
        return Curry._1(children, {
          values: value,
          add: function (param) {
            return Utils$ReasonPowerplug.Infix.$less$pipe$pipe(
              set,
              MSet.add,
              param,
            );
          },
          clear: function (param) {
            return Curry._1(set, function (param) {
              return MSet.empty;
            });
          },
          remove: function (param) {
            return Utils$ReasonPowerplug.Infix.$less$pipe$pipe(
              set,
              MSet.remove,
              param,
            );
          },
          has: function (param) {
            return Utils$ReasonPowerplug.flip(MSet.mem, value, param);
          },
          reset: function (param) {
            return Curry._1(set, function (param) {
              return MSet.empty;
            });
          },
          set: set,
        });
      },
    };
    if (onChange !== undefined) {
      tmp.onChange = Caml_option.valFromOption(onChange);
    }
    return React.createElement(Value.make, tmp);
  };
  return {
    MSet: MSet,
    empty: MSet.empty,
    is_empty: MSet.is_empty,
    mem: MSet.mem,
    add: MSet.add,
    singleton: MSet.singleton,
    remove: MSet.remove,
    union: MSet.union,
    inter: MSet.inter,
    diff: MSet.diff,
    compare: MSet.compare,
    equal: MSet.equal,
    subset: MSet.subset,
    iter: MSet.iter,
    map: MSet.map,
    fold: MSet.fold,
    for_all: MSet.for_all,
    exists: MSet.exists,
    filter: MSet.filter,
    partition: MSet.partition,
    cardinal: MSet.cardinal,
    elements: MSet.elements,
    min_elt: MSet.min_elt,
    min_elt_opt: MSet.min_elt_opt,
    max_elt: MSet.max_elt,
    max_elt_opt: MSet.max_elt_opt,
    choose: MSet.choose,
    choose_opt: MSet.choose_opt,
    split: MSet.split,
    find: MSet.find,
    find_opt: MSet.find_opt,
    find_first: MSet.find_first,
    find_first_opt: MSet.find_first_opt,
    find_last: MSet.find_last,
    find_last_opt: MSet.find_last_opt,
    of_list: MSet.of_list,
    Value: Value,
    make: ReSet$Make,
  };
}

exports.Make = Make;
/* react Not a pure module */
