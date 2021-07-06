// Generated by ReScript, PLEASE EDIT WITH CARE
"use strict";

var List = require("rescript/lib/js/list.js");
var Curry = require("rescript/lib/js/curry.js");
var React = require("react");
var Caml_option = require("rescript/lib/js/caml_option.js");
var Utils$ReasonPowerplug = require("./Utils.bs.js");
var Value$ReasonPowerplug = require("./Value.bs.js");

function Make(M) {
  var Value = Value$ReasonPowerplug.Make({});
  var ReList$Make = function (Props) {
    var initialOpt = Props.initial;
    var onChange = Props.onChange;
    var children = Props.children;
    var initial = initialOpt !== undefined ? initialOpt : /* [] */ 0;
    var head = function (xs) {
      return Utils$ReasonPowerplug.tryWith(function (param) {
        return List.hd(xs);
      });
    };
    var complement = function (f, x) {
      return !Curry._1(f, x);
    };
    var tmp = {
      initial: initial,
      children: function (param) {
        var set = param.set;
        var value = param.value;
        return Curry._1(children, {
          list: value,
          first: function (param) {
            return Utils$ReasonPowerplug.tryWith(function (param) {
              return List.hd(value);
            });
          },
          last: function (param) {
            return Utils$ReasonPowerplug.Infix.$less$pipe$pipe(
              head,
              List.rev,
              value,
            );
          },
          set: set,
          push: function (param) {
            return Utils$ReasonPowerplug.Infix.$less$pipe$pipe(
              set,
              function (param, param$1) {
                return Utils$ReasonPowerplug.flip(List.append, param, param$1);
              },
              param,
            );
          },
          pull: function (param) {
            return Utils$ReasonPowerplug.Infix.$less$pipe$pipe(
              function (param) {
                return Utils$ReasonPowerplug.Infix.$less$pipe$pipe(
                  set,
                  List.filter,
                  param,
                );
              },
              complement,
              param,
            );
          },
          sort: function (param) {
            return Utils$ReasonPowerplug.Infix.$less$pipe$pipe(
              set,
              List.sort,
              param,
            );
          },
          reset: param.reset,
        });
      },
    };
    if (onChange !== undefined) {
      tmp.onChange = Caml_option.valFromOption(onChange);
    }
    return React.createElement(Value.make, tmp);
  };
  return {
    Value: Value,
    make: ReList$Make,
  };
}

exports.Make = Make;
/* react Not a pure module */
