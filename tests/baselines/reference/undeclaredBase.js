//// [undeclaredBase.ts]
module M { export class C extends M.I { } }



//// [undeclaredBase.js]
var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
var M;
(function (M) {
    var C = (function (_super) {
        __extends(C, _super);
        function C() {
            _super.apply(this, arguments);
        }
        return C;
    })(M.I);
    M.C = C;
})(M || (M = {}));
