"use strict";
var __create = Object.create;
var __defProp = Object.defineProperty;
var __defProps = Object.defineProperties;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropDescs = Object.getOwnPropertyDescriptors;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getOwnPropSymbols = Object.getOwnPropertySymbols;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __propIsEnum = Object.prototype.propertyIsEnumerable;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp.call(b, prop))
      __defNormalProp(a, prop, b[prop]);
  if (__getOwnPropSymbols)
    for (var prop of __getOwnPropSymbols(b)) {
      if (__propIsEnum.call(b, prop))
        __defNormalProp(a, prop, b[prop]);
    }
  return a;
};
var __spreadProps = (a, b) => __defProps(a, __getOwnPropDescs(b));
var __require = /* @__PURE__ */ ((x) => typeof require !== "undefined" ? require : typeof Proxy !== "undefined" ? new Proxy(x, {
  get: (a, b) => (typeof require !== "undefined" ? require : a)[b]
}) : x)(function(x) {
  if (typeof require !== "undefined")
    return require.apply(this, arguments);
  throw new Error('Dynamic require of "' + x + '" is not supported');
});
var __objRest = (source, exclude) => {
  var target = {};
  for (var prop in source)
    if (__hasOwnProp.call(source, prop) && exclude.indexOf(prop) < 0)
      target[prop] = source[prop];
  if (source != null && __getOwnPropSymbols)
    for (var prop of __getOwnPropSymbols(source)) {
      if (exclude.indexOf(prop) < 0 && __propIsEnum.call(source, prop))
        target[prop] = source[prop];
    }
  return target;
};
var __esm = (fn, res) => function __init() {
  return fn && (res = (0, fn[__getOwnPropNames(fn)[0]])(fn = 0)), res;
};
var __commonJS = (cb, mod) => function __require2() {
  return mod || (0, cb[__getOwnPropNames(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
};
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target, mod));
var __async = (__this, __arguments, generator) => {
  return new Promise((resolve, reject) => {
    var fulfilled = (value) => {
      try {
        step(generator.next(value));
      } catch (e) {
        reject(e);
      }
    };
    var rejected = (value) => {
      try {
        step(generator.throw(value));
      } catch (e) {
        reject(e);
      }
    };
    var step = (x) => x.done ? resolve(x.value) : Promise.resolve(x.value).then(fulfilled, rejected);
    step((generator = generator.apply(__this, __arguments)).next());
  });
};

// node_modules/base64-js/index.js
var require_base64_js = __commonJS({
  "node_modules/base64-js/index.js"(exports) {
    "use strict";
    init_shim();
    exports.byteLength = byteLength;
    exports.toByteArray = toByteArray;
    exports.fromByteArray = fromByteArray;
    var lookup = [];
    var revLookup = [];
    var Arr = typeof Uint8Array !== "undefined" ? Uint8Array : Array;
    var code = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";
    for (i = 0, len = code.length; i < len; ++i) {
      lookup[i] = code[i];
      revLookup[code.charCodeAt(i)] = i;
    }
    var i;
    var len;
    revLookup["-".charCodeAt(0)] = 62;
    revLookup["_".charCodeAt(0)] = 63;
    function getLens(b64) {
      var len2 = b64.length;
      if (len2 % 4 > 0) {
        throw new Error("Invalid string. Length must be a multiple of 4");
      }
      var validLen = b64.indexOf("=");
      if (validLen === -1)
        validLen = len2;
      var placeHoldersLen = validLen === len2 ? 0 : 4 - validLen % 4;
      return [validLen, placeHoldersLen];
    }
    function byteLength(b64) {
      var lens = getLens(b64);
      var validLen = lens[0];
      var placeHoldersLen = lens[1];
      return (validLen + placeHoldersLen) * 3 / 4 - placeHoldersLen;
    }
    function _byteLength(b64, validLen, placeHoldersLen) {
      return (validLen + placeHoldersLen) * 3 / 4 - placeHoldersLen;
    }
    function toByteArray(b64) {
      var tmp;
      var lens = getLens(b64);
      var validLen = lens[0];
      var placeHoldersLen = lens[1];
      var arr = new Arr(_byteLength(b64, validLen, placeHoldersLen));
      var curByte = 0;
      var len2 = placeHoldersLen > 0 ? validLen - 4 : validLen;
      var i2;
      for (i2 = 0; i2 < len2; i2 += 4) {
        tmp = revLookup[b64.charCodeAt(i2)] << 18 | revLookup[b64.charCodeAt(i2 + 1)] << 12 | revLookup[b64.charCodeAt(i2 + 2)] << 6 | revLookup[b64.charCodeAt(i2 + 3)];
        arr[curByte++] = tmp >> 16 & 255;
        arr[curByte++] = tmp >> 8 & 255;
        arr[curByte++] = tmp & 255;
      }
      if (placeHoldersLen === 2) {
        tmp = revLookup[b64.charCodeAt(i2)] << 2 | revLookup[b64.charCodeAt(i2 + 1)] >> 4;
        arr[curByte++] = tmp & 255;
      }
      if (placeHoldersLen === 1) {
        tmp = revLookup[b64.charCodeAt(i2)] << 10 | revLookup[b64.charCodeAt(i2 + 1)] << 4 | revLookup[b64.charCodeAt(i2 + 2)] >> 2;
        arr[curByte++] = tmp >> 8 & 255;
        arr[curByte++] = tmp & 255;
      }
      return arr;
    }
    function tripletToBase64(num) {
      return lookup[num >> 18 & 63] + lookup[num >> 12 & 63] + lookup[num >> 6 & 63] + lookup[num & 63];
    }
    function encodeChunk(uint8, start, end) {
      var tmp;
      var output = [];
      for (var i2 = start; i2 < end; i2 += 3) {
        tmp = (uint8[i2] << 16 & 16711680) + (uint8[i2 + 1] << 8 & 65280) + (uint8[i2 + 2] & 255);
        output.push(tripletToBase64(tmp));
      }
      return output.join("");
    }
    function fromByteArray(uint8) {
      var tmp;
      var len2 = uint8.length;
      var extraBytes = len2 % 3;
      var parts = [];
      var maxChunkLength = 16383;
      for (var i2 = 0, len22 = len2 - extraBytes; i2 < len22; i2 += maxChunkLength) {
        parts.push(encodeChunk(uint8, i2, i2 + maxChunkLength > len22 ? len22 : i2 + maxChunkLength));
      }
      if (extraBytes === 1) {
        tmp = uint8[len2 - 1];
        parts.push(lookup[tmp >> 2] + lookup[tmp << 4 & 63] + "==");
      } else if (extraBytes === 2) {
        tmp = (uint8[len2 - 2] << 8) + uint8[len2 - 1];
        parts.push(lookup[tmp >> 10] + lookup[tmp >> 4 & 63] + lookup[tmp << 2 & 63] + "=");
      }
      return parts.join("");
    }
  }
});

// node_modules/ieee754/index.js
var require_ieee754 = __commonJS({
  "node_modules/ieee754/index.js"(exports) {
    init_shim();
    exports.read = function(buffer, offset, isLE, mLen, nBytes) {
      var e, m;
      var eLen = nBytes * 8 - mLen - 1;
      var eMax = (1 << eLen) - 1;
      var eBias = eMax >> 1;
      var nBits = -7;
      var i = isLE ? nBytes - 1 : 0;
      var d = isLE ? -1 : 1;
      var s = buffer[offset + i];
      i += d;
      e = s & (1 << -nBits) - 1;
      s >>= -nBits;
      nBits += eLen;
      for (; nBits > 0; e = e * 256 + buffer[offset + i], i += d, nBits -= 8) {
      }
      m = e & (1 << -nBits) - 1;
      e >>= -nBits;
      nBits += mLen;
      for (; nBits > 0; m = m * 256 + buffer[offset + i], i += d, nBits -= 8) {
      }
      if (e === 0) {
        e = 1 - eBias;
      } else if (e === eMax) {
        return m ? NaN : (s ? -1 : 1) * Infinity;
      } else {
        m = m + Math.pow(2, mLen);
        e = e - eBias;
      }
      return (s ? -1 : 1) * m * Math.pow(2, e - mLen);
    };
    exports.write = function(buffer, value, offset, isLE, mLen, nBytes) {
      var e, m, c;
      var eLen = nBytes * 8 - mLen - 1;
      var eMax = (1 << eLen) - 1;
      var eBias = eMax >> 1;
      var rt = mLen === 23 ? Math.pow(2, -24) - Math.pow(2, -77) : 0;
      var i = isLE ? 0 : nBytes - 1;
      var d = isLE ? 1 : -1;
      var s = value < 0 || value === 0 && 1 / value < 0 ? 1 : 0;
      value = Math.abs(value);
      if (isNaN(value) || value === Infinity) {
        m = isNaN(value) ? 1 : 0;
        e = eMax;
      } else {
        e = Math.floor(Math.log(value) / Math.LN2);
        if (value * (c = Math.pow(2, -e)) < 1) {
          e--;
          c *= 2;
        }
        if (e + eBias >= 1) {
          value += rt / c;
        } else {
          value += rt * Math.pow(2, 1 - eBias);
        }
        if (value * c >= 2) {
          e++;
          c /= 2;
        }
        if (e + eBias >= eMax) {
          m = 0;
          e = eMax;
        } else if (e + eBias >= 1) {
          m = (value * c - 1) * Math.pow(2, mLen);
          e = e + eBias;
        } else {
          m = value * Math.pow(2, eBias - 1) * Math.pow(2, mLen);
          e = 0;
        }
      }
      for (; mLen >= 8; buffer[offset + i] = m & 255, i += d, m /= 256, mLen -= 8) {
      }
      e = e << mLen | m;
      eLen += mLen;
      for (; eLen > 0; buffer[offset + i] = e & 255, i += d, e /= 256, eLen -= 8) {
      }
      buffer[offset + i - d] |= s * 128;
    };
  }
});

// node_modules/node-stdlib-browser/node_modules/buffer/index.js
var require_buffer = __commonJS({
  "node_modules/node-stdlib-browser/node_modules/buffer/index.js"(exports) {
    "use strict";
    init_shim();
    var base64 = require_base64_js();
    var ieee754 = require_ieee754();
    var customInspectSymbol = typeof Symbol === "function" && typeof Symbol["for"] === "function" ? Symbol["for"]("nodejs.util.inspect.custom") : null;
    exports.Buffer = Buffer3;
    exports.SlowBuffer = SlowBuffer;
    exports.INSPECT_MAX_BYTES = 50;
    var K_MAX_LENGTH = 2147483647;
    exports.kMaxLength = K_MAX_LENGTH;
    Buffer3.TYPED_ARRAY_SUPPORT = typedArraySupport();
    if (!Buffer3.TYPED_ARRAY_SUPPORT && typeof console !== "undefined" && typeof console.error === "function") {
      console.error("This browser lacks typed array (Uint8Array) support which is required by `buffer` v5.x. Use `buffer` v4.x if you require old browser support.");
    }
    function typedArraySupport() {
      try {
        var arr = new Uint8Array(1);
        var proto = { foo: function() {
          return 42;
        } };
        Object.setPrototypeOf(proto, Uint8Array.prototype);
        Object.setPrototypeOf(arr, proto);
        return arr.foo() === 42;
      } catch (e) {
        return false;
      }
    }
    Object.defineProperty(Buffer3.prototype, "parent", {
      enumerable: true,
      get: function() {
        if (!Buffer3.isBuffer(this))
          return void 0;
        return this.buffer;
      }
    });
    Object.defineProperty(Buffer3.prototype, "offset", {
      enumerable: true,
      get: function() {
        if (!Buffer3.isBuffer(this))
          return void 0;
        return this.byteOffset;
      }
    });
    function createBuffer(length) {
      if (length > K_MAX_LENGTH) {
        throw new RangeError('The value "' + length + '" is invalid for option "size"');
      }
      var buf = new Uint8Array(length);
      Object.setPrototypeOf(buf, Buffer3.prototype);
      return buf;
    }
    function Buffer3(arg, encodingOrOffset, length) {
      if (typeof arg === "number") {
        if (typeof encodingOrOffset === "string") {
          throw new TypeError('The "string" argument must be of type string. Received type number');
        }
        return allocUnsafe(arg);
      }
      return from(arg, encodingOrOffset, length);
    }
    Buffer3.poolSize = 8192;
    function from(value, encodingOrOffset, length) {
      if (typeof value === "string") {
        return fromString(value, encodingOrOffset);
      }
      if (ArrayBuffer.isView(value)) {
        return fromArrayView(value);
      }
      if (value == null) {
        throw new TypeError("The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type " + typeof value);
      }
      if (isInstance(value, ArrayBuffer) || value && isInstance(value.buffer, ArrayBuffer)) {
        return fromArrayBuffer(value, encodingOrOffset, length);
      }
      if (typeof SharedArrayBuffer !== "undefined" && (isInstance(value, SharedArrayBuffer) || value && isInstance(value.buffer, SharedArrayBuffer))) {
        return fromArrayBuffer(value, encodingOrOffset, length);
      }
      if (typeof value === "number") {
        throw new TypeError('The "value" argument must not be of type number. Received type number');
      }
      var valueOf = value.valueOf && value.valueOf();
      if (valueOf != null && valueOf !== value) {
        return Buffer3.from(valueOf, encodingOrOffset, length);
      }
      var b = fromObject(value);
      if (b)
        return b;
      if (typeof Symbol !== "undefined" && Symbol.toPrimitive != null && typeof value[Symbol.toPrimitive] === "function") {
        return Buffer3.from(value[Symbol.toPrimitive]("string"), encodingOrOffset, length);
      }
      throw new TypeError("The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type " + typeof value);
    }
    Buffer3.from = function(value, encodingOrOffset, length) {
      return from(value, encodingOrOffset, length);
    };
    Object.setPrototypeOf(Buffer3.prototype, Uint8Array.prototype);
    Object.setPrototypeOf(Buffer3, Uint8Array);
    function assertSize(size) {
      if (typeof size !== "number") {
        throw new TypeError('"size" argument must be of type number');
      } else if (size < 0) {
        throw new RangeError('The value "' + size + '" is invalid for option "size"');
      }
    }
    function alloc(size, fill, encoding) {
      assertSize(size);
      if (size <= 0) {
        return createBuffer(size);
      }
      if (fill !== void 0) {
        return typeof encoding === "string" ? createBuffer(size).fill(fill, encoding) : createBuffer(size).fill(fill);
      }
      return createBuffer(size);
    }
    Buffer3.alloc = function(size, fill, encoding) {
      return alloc(size, fill, encoding);
    };
    function allocUnsafe(size) {
      assertSize(size);
      return createBuffer(size < 0 ? 0 : checked(size) | 0);
    }
    Buffer3.allocUnsafe = function(size) {
      return allocUnsafe(size);
    };
    Buffer3.allocUnsafeSlow = function(size) {
      return allocUnsafe(size);
    };
    function fromString(string, encoding) {
      if (typeof encoding !== "string" || encoding === "") {
        encoding = "utf8";
      }
      if (!Buffer3.isEncoding(encoding)) {
        throw new TypeError("Unknown encoding: " + encoding);
      }
      var length = byteLength(string, encoding) | 0;
      var buf = createBuffer(length);
      var actual = buf.write(string, encoding);
      if (actual !== length) {
        buf = buf.slice(0, actual);
      }
      return buf;
    }
    function fromArrayLike(array) {
      var length = array.length < 0 ? 0 : checked(array.length) | 0;
      var buf = createBuffer(length);
      for (var i = 0; i < length; i += 1) {
        buf[i] = array[i] & 255;
      }
      return buf;
    }
    function fromArrayView(arrayView) {
      if (isInstance(arrayView, Uint8Array)) {
        var copy = new Uint8Array(arrayView);
        return fromArrayBuffer(copy.buffer, copy.byteOffset, copy.byteLength);
      }
      return fromArrayLike(arrayView);
    }
    function fromArrayBuffer(array, byteOffset, length) {
      if (byteOffset < 0 || array.byteLength < byteOffset) {
        throw new RangeError('"offset" is outside of buffer bounds');
      }
      if (array.byteLength < byteOffset + (length || 0)) {
        throw new RangeError('"length" is outside of buffer bounds');
      }
      var buf;
      if (byteOffset === void 0 && length === void 0) {
        buf = new Uint8Array(array);
      } else if (length === void 0) {
        buf = new Uint8Array(array, byteOffset);
      } else {
        buf = new Uint8Array(array, byteOffset, length);
      }
      Object.setPrototypeOf(buf, Buffer3.prototype);
      return buf;
    }
    function fromObject(obj) {
      if (Buffer3.isBuffer(obj)) {
        var len = checked(obj.length) | 0;
        var buf = createBuffer(len);
        if (buf.length === 0) {
          return buf;
        }
        obj.copy(buf, 0, 0, len);
        return buf;
      }
      if (obj.length !== void 0) {
        if (typeof obj.length !== "number" || numberIsNaN(obj.length)) {
          return createBuffer(0);
        }
        return fromArrayLike(obj);
      }
      if (obj.type === "Buffer" && Array.isArray(obj.data)) {
        return fromArrayLike(obj.data);
      }
    }
    function checked(length) {
      if (length >= K_MAX_LENGTH) {
        throw new RangeError("Attempt to allocate Buffer larger than maximum size: 0x" + K_MAX_LENGTH.toString(16) + " bytes");
      }
      return length | 0;
    }
    function SlowBuffer(length) {
      if (+length != length) {
        length = 0;
      }
      return Buffer3.alloc(+length);
    }
    Buffer3.isBuffer = function isBuffer(b) {
      return b != null && b._isBuffer === true && b !== Buffer3.prototype;
    };
    Buffer3.compare = function compare(a, b) {
      if (isInstance(a, Uint8Array))
        a = Buffer3.from(a, a.offset, a.byteLength);
      if (isInstance(b, Uint8Array))
        b = Buffer3.from(b, b.offset, b.byteLength);
      if (!Buffer3.isBuffer(a) || !Buffer3.isBuffer(b)) {
        throw new TypeError('The "buf1", "buf2" arguments must be one of type Buffer or Uint8Array');
      }
      if (a === b)
        return 0;
      var x = a.length;
      var y = b.length;
      for (var i = 0, len = Math.min(x, y); i < len; ++i) {
        if (a[i] !== b[i]) {
          x = a[i];
          y = b[i];
          break;
        }
      }
      if (x < y)
        return -1;
      if (y < x)
        return 1;
      return 0;
    };
    Buffer3.isEncoding = function isEncoding(encoding) {
      switch (String(encoding).toLowerCase()) {
        case "hex":
        case "utf8":
        case "utf-8":
        case "ascii":
        case "latin1":
        case "binary":
        case "base64":
        case "ucs2":
        case "ucs-2":
        case "utf16le":
        case "utf-16le":
          return true;
        default:
          return false;
      }
    };
    Buffer3.concat = function concat(list, length) {
      if (!Array.isArray(list)) {
        throw new TypeError('"list" argument must be an Array of Buffers');
      }
      if (list.length === 0) {
        return Buffer3.alloc(0);
      }
      var i;
      if (length === void 0) {
        length = 0;
        for (i = 0; i < list.length; ++i) {
          length += list[i].length;
        }
      }
      var buffer = Buffer3.allocUnsafe(length);
      var pos = 0;
      for (i = 0; i < list.length; ++i) {
        var buf = list[i];
        if (isInstance(buf, Uint8Array)) {
          if (pos + buf.length > buffer.length) {
            Buffer3.from(buf).copy(buffer, pos);
          } else {
            Uint8Array.prototype.set.call(buffer, buf, pos);
          }
        } else if (!Buffer3.isBuffer(buf)) {
          throw new TypeError('"list" argument must be an Array of Buffers');
        } else {
          buf.copy(buffer, pos);
        }
        pos += buf.length;
      }
      return buffer;
    };
    function byteLength(string, encoding) {
      if (Buffer3.isBuffer(string)) {
        return string.length;
      }
      if (ArrayBuffer.isView(string) || isInstance(string, ArrayBuffer)) {
        return string.byteLength;
      }
      if (typeof string !== "string") {
        throw new TypeError('The "string" argument must be one of type string, Buffer, or ArrayBuffer. Received type ' + typeof string);
      }
      var len = string.length;
      var mustMatch = arguments.length > 2 && arguments[2] === true;
      if (!mustMatch && len === 0)
        return 0;
      var loweredCase = false;
      for (; ; ) {
        switch (encoding) {
          case "ascii":
          case "latin1":
          case "binary":
            return len;
          case "utf8":
          case "utf-8":
            return utf8ToBytes(string).length;
          case "ucs2":
          case "ucs-2":
          case "utf16le":
          case "utf-16le":
            return len * 2;
          case "hex":
            return len >>> 1;
          case "base64":
            return base64ToBytes(string).length;
          default:
            if (loweredCase) {
              return mustMatch ? -1 : utf8ToBytes(string).length;
            }
            encoding = ("" + encoding).toLowerCase();
            loweredCase = true;
        }
      }
    }
    Buffer3.byteLength = byteLength;
    function slowToString(encoding, start, end) {
      var loweredCase = false;
      if (start === void 0 || start < 0) {
        start = 0;
      }
      if (start > this.length) {
        return "";
      }
      if (end === void 0 || end > this.length) {
        end = this.length;
      }
      if (end <= 0) {
        return "";
      }
      end >>>= 0;
      start >>>= 0;
      if (end <= start) {
        return "";
      }
      if (!encoding)
        encoding = "utf8";
      while (true) {
        switch (encoding) {
          case "hex":
            return hexSlice(this, start, end);
          case "utf8":
          case "utf-8":
            return utf8Slice(this, start, end);
          case "ascii":
            return asciiSlice(this, start, end);
          case "latin1":
          case "binary":
            return latin1Slice(this, start, end);
          case "base64":
            return base64Slice(this, start, end);
          case "ucs2":
          case "ucs-2":
          case "utf16le":
          case "utf-16le":
            return utf16leSlice(this, start, end);
          default:
            if (loweredCase)
              throw new TypeError("Unknown encoding: " + encoding);
            encoding = (encoding + "").toLowerCase();
            loweredCase = true;
        }
      }
    }
    Buffer3.prototype._isBuffer = true;
    function swap(b, n, m) {
      var i = b[n];
      b[n] = b[m];
      b[m] = i;
    }
    Buffer3.prototype.swap16 = function swap16() {
      var len = this.length;
      if (len % 2 !== 0) {
        throw new RangeError("Buffer size must be a multiple of 16-bits");
      }
      for (var i = 0; i < len; i += 2) {
        swap(this, i, i + 1);
      }
      return this;
    };
    Buffer3.prototype.swap32 = function swap32() {
      var len = this.length;
      if (len % 4 !== 0) {
        throw new RangeError("Buffer size must be a multiple of 32-bits");
      }
      for (var i = 0; i < len; i += 4) {
        swap(this, i, i + 3);
        swap(this, i + 1, i + 2);
      }
      return this;
    };
    Buffer3.prototype.swap64 = function swap64() {
      var len = this.length;
      if (len % 8 !== 0) {
        throw new RangeError("Buffer size must be a multiple of 64-bits");
      }
      for (var i = 0; i < len; i += 8) {
        swap(this, i, i + 7);
        swap(this, i + 1, i + 6);
        swap(this, i + 2, i + 5);
        swap(this, i + 3, i + 4);
      }
      return this;
    };
    Buffer3.prototype.toString = function toString() {
      var length = this.length;
      if (length === 0)
        return "";
      if (arguments.length === 0)
        return utf8Slice(this, 0, length);
      return slowToString.apply(this, arguments);
    };
    Buffer3.prototype.toLocaleString = Buffer3.prototype.toString;
    Buffer3.prototype.equals = function equals(b) {
      if (!Buffer3.isBuffer(b))
        throw new TypeError("Argument must be a Buffer");
      if (this === b)
        return true;
      return Buffer3.compare(this, b) === 0;
    };
    Buffer3.prototype.inspect = function inspect() {
      var str = "";
      var max = exports.INSPECT_MAX_BYTES;
      str = this.toString("hex", 0, max).replace(/(.{2})/g, "$1 ").trim();
      if (this.length > max)
        str += " ... ";
      return "<Buffer " + str + ">";
    };
    if (customInspectSymbol) {
      Buffer3.prototype[customInspectSymbol] = Buffer3.prototype.inspect;
    }
    Buffer3.prototype.compare = function compare(target, start, end, thisStart, thisEnd) {
      if (isInstance(target, Uint8Array)) {
        target = Buffer3.from(target, target.offset, target.byteLength);
      }
      if (!Buffer3.isBuffer(target)) {
        throw new TypeError('The "target" argument must be one of type Buffer or Uint8Array. Received type ' + typeof target);
      }
      if (start === void 0) {
        start = 0;
      }
      if (end === void 0) {
        end = target ? target.length : 0;
      }
      if (thisStart === void 0) {
        thisStart = 0;
      }
      if (thisEnd === void 0) {
        thisEnd = this.length;
      }
      if (start < 0 || end > target.length || thisStart < 0 || thisEnd > this.length) {
        throw new RangeError("out of range index");
      }
      if (thisStart >= thisEnd && start >= end) {
        return 0;
      }
      if (thisStart >= thisEnd) {
        return -1;
      }
      if (start >= end) {
        return 1;
      }
      start >>>= 0;
      end >>>= 0;
      thisStart >>>= 0;
      thisEnd >>>= 0;
      if (this === target)
        return 0;
      var x = thisEnd - thisStart;
      var y = end - start;
      var len = Math.min(x, y);
      var thisCopy = this.slice(thisStart, thisEnd);
      var targetCopy = target.slice(start, end);
      for (var i = 0; i < len; ++i) {
        if (thisCopy[i] !== targetCopy[i]) {
          x = thisCopy[i];
          y = targetCopy[i];
          break;
        }
      }
      if (x < y)
        return -1;
      if (y < x)
        return 1;
      return 0;
    };
    function bidirectionalIndexOf(buffer, val, byteOffset, encoding, dir) {
      if (buffer.length === 0)
        return -1;
      if (typeof byteOffset === "string") {
        encoding = byteOffset;
        byteOffset = 0;
      } else if (byteOffset > 2147483647) {
        byteOffset = 2147483647;
      } else if (byteOffset < -2147483648) {
        byteOffset = -2147483648;
      }
      byteOffset = +byteOffset;
      if (numberIsNaN(byteOffset)) {
        byteOffset = dir ? 0 : buffer.length - 1;
      }
      if (byteOffset < 0)
        byteOffset = buffer.length + byteOffset;
      if (byteOffset >= buffer.length) {
        if (dir)
          return -1;
        else
          byteOffset = buffer.length - 1;
      } else if (byteOffset < 0) {
        if (dir)
          byteOffset = 0;
        else
          return -1;
      }
      if (typeof val === "string") {
        val = Buffer3.from(val, encoding);
      }
      if (Buffer3.isBuffer(val)) {
        if (val.length === 0) {
          return -1;
        }
        return arrayIndexOf(buffer, val, byteOffset, encoding, dir);
      } else if (typeof val === "number") {
        val = val & 255;
        if (typeof Uint8Array.prototype.indexOf === "function") {
          if (dir) {
            return Uint8Array.prototype.indexOf.call(buffer, val, byteOffset);
          } else {
            return Uint8Array.prototype.lastIndexOf.call(buffer, val, byteOffset);
          }
        }
        return arrayIndexOf(buffer, [val], byteOffset, encoding, dir);
      }
      throw new TypeError("val must be string, number or Buffer");
    }
    function arrayIndexOf(arr, val, byteOffset, encoding, dir) {
      var indexSize = 1;
      var arrLength = arr.length;
      var valLength = val.length;
      if (encoding !== void 0) {
        encoding = String(encoding).toLowerCase();
        if (encoding === "ucs2" || encoding === "ucs-2" || encoding === "utf16le" || encoding === "utf-16le") {
          if (arr.length < 2 || val.length < 2) {
            return -1;
          }
          indexSize = 2;
          arrLength /= 2;
          valLength /= 2;
          byteOffset /= 2;
        }
      }
      function read(buf, i2) {
        if (indexSize === 1) {
          return buf[i2];
        } else {
          return buf.readUInt16BE(i2 * indexSize);
        }
      }
      var i;
      if (dir) {
        var foundIndex = -1;
        for (i = byteOffset; i < arrLength; i++) {
          if (read(arr, i) === read(val, foundIndex === -1 ? 0 : i - foundIndex)) {
            if (foundIndex === -1)
              foundIndex = i;
            if (i - foundIndex + 1 === valLength)
              return foundIndex * indexSize;
          } else {
            if (foundIndex !== -1)
              i -= i - foundIndex;
            foundIndex = -1;
          }
        }
      } else {
        if (byteOffset + valLength > arrLength)
          byteOffset = arrLength - valLength;
        for (i = byteOffset; i >= 0; i--) {
          var found = true;
          for (var j = 0; j < valLength; j++) {
            if (read(arr, i + j) !== read(val, j)) {
              found = false;
              break;
            }
          }
          if (found)
            return i;
        }
      }
      return -1;
    }
    Buffer3.prototype.includes = function includes(val, byteOffset, encoding) {
      return this.indexOf(val, byteOffset, encoding) !== -1;
    };
    Buffer3.prototype.indexOf = function indexOf(val, byteOffset, encoding) {
      return bidirectionalIndexOf(this, val, byteOffset, encoding, true);
    };
    Buffer3.prototype.lastIndexOf = function lastIndexOf(val, byteOffset, encoding) {
      return bidirectionalIndexOf(this, val, byteOffset, encoding, false);
    };
    function hexWrite(buf, string, offset, length) {
      offset = Number(offset) || 0;
      var remaining = buf.length - offset;
      if (!length) {
        length = remaining;
      } else {
        length = Number(length);
        if (length > remaining) {
          length = remaining;
        }
      }
      var strLen = string.length;
      if (length > strLen / 2) {
        length = strLen / 2;
      }
      for (var i = 0; i < length; ++i) {
        var parsed = parseInt(string.substr(i * 2, 2), 16);
        if (numberIsNaN(parsed))
          return i;
        buf[offset + i] = parsed;
      }
      return i;
    }
    function utf8Write(buf, string, offset, length) {
      return blitBuffer(utf8ToBytes(string, buf.length - offset), buf, offset, length);
    }
    function asciiWrite(buf, string, offset, length) {
      return blitBuffer(asciiToBytes(string), buf, offset, length);
    }
    function base64Write(buf, string, offset, length) {
      return blitBuffer(base64ToBytes(string), buf, offset, length);
    }
    function ucs2Write(buf, string, offset, length) {
      return blitBuffer(utf16leToBytes(string, buf.length - offset), buf, offset, length);
    }
    Buffer3.prototype.write = function write(string, offset, length, encoding) {
      if (offset === void 0) {
        encoding = "utf8";
        length = this.length;
        offset = 0;
      } else if (length === void 0 && typeof offset === "string") {
        encoding = offset;
        length = this.length;
        offset = 0;
      } else if (isFinite(offset)) {
        offset = offset >>> 0;
        if (isFinite(length)) {
          length = length >>> 0;
          if (encoding === void 0)
            encoding = "utf8";
        } else {
          encoding = length;
          length = void 0;
        }
      } else {
        throw new Error("Buffer.write(string, encoding, offset[, length]) is no longer supported");
      }
      var remaining = this.length - offset;
      if (length === void 0 || length > remaining)
        length = remaining;
      if (string.length > 0 && (length < 0 || offset < 0) || offset > this.length) {
        throw new RangeError("Attempt to write outside buffer bounds");
      }
      if (!encoding)
        encoding = "utf8";
      var loweredCase = false;
      for (; ; ) {
        switch (encoding) {
          case "hex":
            return hexWrite(this, string, offset, length);
          case "utf8":
          case "utf-8":
            return utf8Write(this, string, offset, length);
          case "ascii":
          case "latin1":
          case "binary":
            return asciiWrite(this, string, offset, length);
          case "base64":
            return base64Write(this, string, offset, length);
          case "ucs2":
          case "ucs-2":
          case "utf16le":
          case "utf-16le":
            return ucs2Write(this, string, offset, length);
          default:
            if (loweredCase)
              throw new TypeError("Unknown encoding: " + encoding);
            encoding = ("" + encoding).toLowerCase();
            loweredCase = true;
        }
      }
    };
    Buffer3.prototype.toJSON = function toJSON() {
      return {
        type: "Buffer",
        data: Array.prototype.slice.call(this._arr || this, 0)
      };
    };
    function base64Slice(buf, start, end) {
      if (start === 0 && end === buf.length) {
        return base64.fromByteArray(buf);
      } else {
        return base64.fromByteArray(buf.slice(start, end));
      }
    }
    function utf8Slice(buf, start, end) {
      end = Math.min(buf.length, end);
      var res = [];
      var i = start;
      while (i < end) {
        var firstByte = buf[i];
        var codePoint = null;
        var bytesPerSequence = firstByte > 239 ? 4 : firstByte > 223 ? 3 : firstByte > 191 ? 2 : 1;
        if (i + bytesPerSequence <= end) {
          var secondByte, thirdByte, fourthByte, tempCodePoint;
          switch (bytesPerSequence) {
            case 1:
              if (firstByte < 128) {
                codePoint = firstByte;
              }
              break;
            case 2:
              secondByte = buf[i + 1];
              if ((secondByte & 192) === 128) {
                tempCodePoint = (firstByte & 31) << 6 | secondByte & 63;
                if (tempCodePoint > 127) {
                  codePoint = tempCodePoint;
                }
              }
              break;
            case 3:
              secondByte = buf[i + 1];
              thirdByte = buf[i + 2];
              if ((secondByte & 192) === 128 && (thirdByte & 192) === 128) {
                tempCodePoint = (firstByte & 15) << 12 | (secondByte & 63) << 6 | thirdByte & 63;
                if (tempCodePoint > 2047 && (tempCodePoint < 55296 || tempCodePoint > 57343)) {
                  codePoint = tempCodePoint;
                }
              }
              break;
            case 4:
              secondByte = buf[i + 1];
              thirdByte = buf[i + 2];
              fourthByte = buf[i + 3];
              if ((secondByte & 192) === 128 && (thirdByte & 192) === 128 && (fourthByte & 192) === 128) {
                tempCodePoint = (firstByte & 15) << 18 | (secondByte & 63) << 12 | (thirdByte & 63) << 6 | fourthByte & 63;
                if (tempCodePoint > 65535 && tempCodePoint < 1114112) {
                  codePoint = tempCodePoint;
                }
              }
          }
        }
        if (codePoint === null) {
          codePoint = 65533;
          bytesPerSequence = 1;
        } else if (codePoint > 65535) {
          codePoint -= 65536;
          res.push(codePoint >>> 10 & 1023 | 55296);
          codePoint = 56320 | codePoint & 1023;
        }
        res.push(codePoint);
        i += bytesPerSequence;
      }
      return decodeCodePointsArray(res);
    }
    var MAX_ARGUMENTS_LENGTH = 4096;
    function decodeCodePointsArray(codePoints) {
      var len = codePoints.length;
      if (len <= MAX_ARGUMENTS_LENGTH) {
        return String.fromCharCode.apply(String, codePoints);
      }
      var res = "";
      var i = 0;
      while (i < len) {
        res += String.fromCharCode.apply(String, codePoints.slice(i, i += MAX_ARGUMENTS_LENGTH));
      }
      return res;
    }
    function asciiSlice(buf, start, end) {
      var ret = "";
      end = Math.min(buf.length, end);
      for (var i = start; i < end; ++i) {
        ret += String.fromCharCode(buf[i] & 127);
      }
      return ret;
    }
    function latin1Slice(buf, start, end) {
      var ret = "";
      end = Math.min(buf.length, end);
      for (var i = start; i < end; ++i) {
        ret += String.fromCharCode(buf[i]);
      }
      return ret;
    }
    function hexSlice(buf, start, end) {
      var len = buf.length;
      if (!start || start < 0)
        start = 0;
      if (!end || end < 0 || end > len)
        end = len;
      var out = "";
      for (var i = start; i < end; ++i) {
        out += hexSliceLookupTable[buf[i]];
      }
      return out;
    }
    function utf16leSlice(buf, start, end) {
      var bytes = buf.slice(start, end);
      var res = "";
      for (var i = 0; i < bytes.length - 1; i += 2) {
        res += String.fromCharCode(bytes[i] + bytes[i + 1] * 256);
      }
      return res;
    }
    Buffer3.prototype.slice = function slice(start, end) {
      var len = this.length;
      start = ~~start;
      end = end === void 0 ? len : ~~end;
      if (start < 0) {
        start += len;
        if (start < 0)
          start = 0;
      } else if (start > len) {
        start = len;
      }
      if (end < 0) {
        end += len;
        if (end < 0)
          end = 0;
      } else if (end > len) {
        end = len;
      }
      if (end < start)
        end = start;
      var newBuf = this.subarray(start, end);
      Object.setPrototypeOf(newBuf, Buffer3.prototype);
      return newBuf;
    };
    function checkOffset(offset, ext, length) {
      if (offset % 1 !== 0 || offset < 0)
        throw new RangeError("offset is not uint");
      if (offset + ext > length)
        throw new RangeError("Trying to access beyond buffer length");
    }
    Buffer3.prototype.readUintLE = Buffer3.prototype.readUIntLE = function readUIntLE(offset, byteLength2, noAssert) {
      offset = offset >>> 0;
      byteLength2 = byteLength2 >>> 0;
      if (!noAssert)
        checkOffset(offset, byteLength2, this.length);
      var val = this[offset];
      var mul = 1;
      var i = 0;
      while (++i < byteLength2 && (mul *= 256)) {
        val += this[offset + i] * mul;
      }
      return val;
    };
    Buffer3.prototype.readUintBE = Buffer3.prototype.readUIntBE = function readUIntBE(offset, byteLength2, noAssert) {
      offset = offset >>> 0;
      byteLength2 = byteLength2 >>> 0;
      if (!noAssert) {
        checkOffset(offset, byteLength2, this.length);
      }
      var val = this[offset + --byteLength2];
      var mul = 1;
      while (byteLength2 > 0 && (mul *= 256)) {
        val += this[offset + --byteLength2] * mul;
      }
      return val;
    };
    Buffer3.prototype.readUint8 = Buffer3.prototype.readUInt8 = function readUInt8(offset, noAssert) {
      offset = offset >>> 0;
      if (!noAssert)
        checkOffset(offset, 1, this.length);
      return this[offset];
    };
    Buffer3.prototype.readUint16LE = Buffer3.prototype.readUInt16LE = function readUInt16LE(offset, noAssert) {
      offset = offset >>> 0;
      if (!noAssert)
        checkOffset(offset, 2, this.length);
      return this[offset] | this[offset + 1] << 8;
    };
    Buffer3.prototype.readUint16BE = Buffer3.prototype.readUInt16BE = function readUInt16BE(offset, noAssert) {
      offset = offset >>> 0;
      if (!noAssert)
        checkOffset(offset, 2, this.length);
      return this[offset] << 8 | this[offset + 1];
    };
    Buffer3.prototype.readUint32LE = Buffer3.prototype.readUInt32LE = function readUInt32LE(offset, noAssert) {
      offset = offset >>> 0;
      if (!noAssert)
        checkOffset(offset, 4, this.length);
      return (this[offset] | this[offset + 1] << 8 | this[offset + 2] << 16) + this[offset + 3] * 16777216;
    };
    Buffer3.prototype.readUint32BE = Buffer3.prototype.readUInt32BE = function readUInt32BE(offset, noAssert) {
      offset = offset >>> 0;
      if (!noAssert)
        checkOffset(offset, 4, this.length);
      return this[offset] * 16777216 + (this[offset + 1] << 16 | this[offset + 2] << 8 | this[offset + 3]);
    };
    Buffer3.prototype.readIntLE = function readIntLE(offset, byteLength2, noAssert) {
      offset = offset >>> 0;
      byteLength2 = byteLength2 >>> 0;
      if (!noAssert)
        checkOffset(offset, byteLength2, this.length);
      var val = this[offset];
      var mul = 1;
      var i = 0;
      while (++i < byteLength2 && (mul *= 256)) {
        val += this[offset + i] * mul;
      }
      mul *= 128;
      if (val >= mul)
        val -= Math.pow(2, 8 * byteLength2);
      return val;
    };
    Buffer3.prototype.readIntBE = function readIntBE(offset, byteLength2, noAssert) {
      offset = offset >>> 0;
      byteLength2 = byteLength2 >>> 0;
      if (!noAssert)
        checkOffset(offset, byteLength2, this.length);
      var i = byteLength2;
      var mul = 1;
      var val = this[offset + --i];
      while (i > 0 && (mul *= 256)) {
        val += this[offset + --i] * mul;
      }
      mul *= 128;
      if (val >= mul)
        val -= Math.pow(2, 8 * byteLength2);
      return val;
    };
    Buffer3.prototype.readInt8 = function readInt8(offset, noAssert) {
      offset = offset >>> 0;
      if (!noAssert)
        checkOffset(offset, 1, this.length);
      if (!(this[offset] & 128))
        return this[offset];
      return (255 - this[offset] + 1) * -1;
    };
    Buffer3.prototype.readInt16LE = function readInt16LE(offset, noAssert) {
      offset = offset >>> 0;
      if (!noAssert)
        checkOffset(offset, 2, this.length);
      var val = this[offset] | this[offset + 1] << 8;
      return val & 32768 ? val | 4294901760 : val;
    };
    Buffer3.prototype.readInt16BE = function readInt16BE(offset, noAssert) {
      offset = offset >>> 0;
      if (!noAssert)
        checkOffset(offset, 2, this.length);
      var val = this[offset + 1] | this[offset] << 8;
      return val & 32768 ? val | 4294901760 : val;
    };
    Buffer3.prototype.readInt32LE = function readInt32LE(offset, noAssert) {
      offset = offset >>> 0;
      if (!noAssert)
        checkOffset(offset, 4, this.length);
      return this[offset] | this[offset + 1] << 8 | this[offset + 2] << 16 | this[offset + 3] << 24;
    };
    Buffer3.prototype.readInt32BE = function readInt32BE(offset, noAssert) {
      offset = offset >>> 0;
      if (!noAssert)
        checkOffset(offset, 4, this.length);
      return this[offset] << 24 | this[offset + 1] << 16 | this[offset + 2] << 8 | this[offset + 3];
    };
    Buffer3.prototype.readFloatLE = function readFloatLE(offset, noAssert) {
      offset = offset >>> 0;
      if (!noAssert)
        checkOffset(offset, 4, this.length);
      return ieee754.read(this, offset, true, 23, 4);
    };
    Buffer3.prototype.readFloatBE = function readFloatBE(offset, noAssert) {
      offset = offset >>> 0;
      if (!noAssert)
        checkOffset(offset, 4, this.length);
      return ieee754.read(this, offset, false, 23, 4);
    };
    Buffer3.prototype.readDoubleLE = function readDoubleLE(offset, noAssert) {
      offset = offset >>> 0;
      if (!noAssert)
        checkOffset(offset, 8, this.length);
      return ieee754.read(this, offset, true, 52, 8);
    };
    Buffer3.prototype.readDoubleBE = function readDoubleBE(offset, noAssert) {
      offset = offset >>> 0;
      if (!noAssert)
        checkOffset(offset, 8, this.length);
      return ieee754.read(this, offset, false, 52, 8);
    };
    function checkInt(buf, value, offset, ext, max, min) {
      if (!Buffer3.isBuffer(buf))
        throw new TypeError('"buffer" argument must be a Buffer instance');
      if (value > max || value < min)
        throw new RangeError('"value" argument is out of bounds');
      if (offset + ext > buf.length)
        throw new RangeError("Index out of range");
    }
    Buffer3.prototype.writeUintLE = Buffer3.prototype.writeUIntLE = function writeUIntLE(value, offset, byteLength2, noAssert) {
      value = +value;
      offset = offset >>> 0;
      byteLength2 = byteLength2 >>> 0;
      if (!noAssert) {
        var maxBytes = Math.pow(2, 8 * byteLength2) - 1;
        checkInt(this, value, offset, byteLength2, maxBytes, 0);
      }
      var mul = 1;
      var i = 0;
      this[offset] = value & 255;
      while (++i < byteLength2 && (mul *= 256)) {
        this[offset + i] = value / mul & 255;
      }
      return offset + byteLength2;
    };
    Buffer3.prototype.writeUintBE = Buffer3.prototype.writeUIntBE = function writeUIntBE(value, offset, byteLength2, noAssert) {
      value = +value;
      offset = offset >>> 0;
      byteLength2 = byteLength2 >>> 0;
      if (!noAssert) {
        var maxBytes = Math.pow(2, 8 * byteLength2) - 1;
        checkInt(this, value, offset, byteLength2, maxBytes, 0);
      }
      var i = byteLength2 - 1;
      var mul = 1;
      this[offset + i] = value & 255;
      while (--i >= 0 && (mul *= 256)) {
        this[offset + i] = value / mul & 255;
      }
      return offset + byteLength2;
    };
    Buffer3.prototype.writeUint8 = Buffer3.prototype.writeUInt8 = function writeUInt8(value, offset, noAssert) {
      value = +value;
      offset = offset >>> 0;
      if (!noAssert)
        checkInt(this, value, offset, 1, 255, 0);
      this[offset] = value & 255;
      return offset + 1;
    };
    Buffer3.prototype.writeUint16LE = Buffer3.prototype.writeUInt16LE = function writeUInt16LE(value, offset, noAssert) {
      value = +value;
      offset = offset >>> 0;
      if (!noAssert)
        checkInt(this, value, offset, 2, 65535, 0);
      this[offset] = value & 255;
      this[offset + 1] = value >>> 8;
      return offset + 2;
    };
    Buffer3.prototype.writeUint16BE = Buffer3.prototype.writeUInt16BE = function writeUInt16BE(value, offset, noAssert) {
      value = +value;
      offset = offset >>> 0;
      if (!noAssert)
        checkInt(this, value, offset, 2, 65535, 0);
      this[offset] = value >>> 8;
      this[offset + 1] = value & 255;
      return offset + 2;
    };
    Buffer3.prototype.writeUint32LE = Buffer3.prototype.writeUInt32LE = function writeUInt32LE(value, offset, noAssert) {
      value = +value;
      offset = offset >>> 0;
      if (!noAssert)
        checkInt(this, value, offset, 4, 4294967295, 0);
      this[offset + 3] = value >>> 24;
      this[offset + 2] = value >>> 16;
      this[offset + 1] = value >>> 8;
      this[offset] = value & 255;
      return offset + 4;
    };
    Buffer3.prototype.writeUint32BE = Buffer3.prototype.writeUInt32BE = function writeUInt32BE(value, offset, noAssert) {
      value = +value;
      offset = offset >>> 0;
      if (!noAssert)
        checkInt(this, value, offset, 4, 4294967295, 0);
      this[offset] = value >>> 24;
      this[offset + 1] = value >>> 16;
      this[offset + 2] = value >>> 8;
      this[offset + 3] = value & 255;
      return offset + 4;
    };
    Buffer3.prototype.writeIntLE = function writeIntLE(value, offset, byteLength2, noAssert) {
      value = +value;
      offset = offset >>> 0;
      if (!noAssert) {
        var limit = Math.pow(2, 8 * byteLength2 - 1);
        checkInt(this, value, offset, byteLength2, limit - 1, -limit);
      }
      var i = 0;
      var mul = 1;
      var sub = 0;
      this[offset] = value & 255;
      while (++i < byteLength2 && (mul *= 256)) {
        if (value < 0 && sub === 0 && this[offset + i - 1] !== 0) {
          sub = 1;
        }
        this[offset + i] = (value / mul >> 0) - sub & 255;
      }
      return offset + byteLength2;
    };
    Buffer3.prototype.writeIntBE = function writeIntBE(value, offset, byteLength2, noAssert) {
      value = +value;
      offset = offset >>> 0;
      if (!noAssert) {
        var limit = Math.pow(2, 8 * byteLength2 - 1);
        checkInt(this, value, offset, byteLength2, limit - 1, -limit);
      }
      var i = byteLength2 - 1;
      var mul = 1;
      var sub = 0;
      this[offset + i] = value & 255;
      while (--i >= 0 && (mul *= 256)) {
        if (value < 0 && sub === 0 && this[offset + i + 1] !== 0) {
          sub = 1;
        }
        this[offset + i] = (value / mul >> 0) - sub & 255;
      }
      return offset + byteLength2;
    };
    Buffer3.prototype.writeInt8 = function writeInt8(value, offset, noAssert) {
      value = +value;
      offset = offset >>> 0;
      if (!noAssert)
        checkInt(this, value, offset, 1, 127, -128);
      if (value < 0)
        value = 255 + value + 1;
      this[offset] = value & 255;
      return offset + 1;
    };
    Buffer3.prototype.writeInt16LE = function writeInt16LE(value, offset, noAssert) {
      value = +value;
      offset = offset >>> 0;
      if (!noAssert)
        checkInt(this, value, offset, 2, 32767, -32768);
      this[offset] = value & 255;
      this[offset + 1] = value >>> 8;
      return offset + 2;
    };
    Buffer3.prototype.writeInt16BE = function writeInt16BE(value, offset, noAssert) {
      value = +value;
      offset = offset >>> 0;
      if (!noAssert)
        checkInt(this, value, offset, 2, 32767, -32768);
      this[offset] = value >>> 8;
      this[offset + 1] = value & 255;
      return offset + 2;
    };
    Buffer3.prototype.writeInt32LE = function writeInt32LE(value, offset, noAssert) {
      value = +value;
      offset = offset >>> 0;
      if (!noAssert)
        checkInt(this, value, offset, 4, 2147483647, -2147483648);
      this[offset] = value & 255;
      this[offset + 1] = value >>> 8;
      this[offset + 2] = value >>> 16;
      this[offset + 3] = value >>> 24;
      return offset + 4;
    };
    Buffer3.prototype.writeInt32BE = function writeInt32BE(value, offset, noAssert) {
      value = +value;
      offset = offset >>> 0;
      if (!noAssert)
        checkInt(this, value, offset, 4, 2147483647, -2147483648);
      if (value < 0)
        value = 4294967295 + value + 1;
      this[offset] = value >>> 24;
      this[offset + 1] = value >>> 16;
      this[offset + 2] = value >>> 8;
      this[offset + 3] = value & 255;
      return offset + 4;
    };
    function checkIEEE754(buf, value, offset, ext, max, min) {
      if (offset + ext > buf.length)
        throw new RangeError("Index out of range");
      if (offset < 0)
        throw new RangeError("Index out of range");
    }
    function writeFloat(buf, value, offset, littleEndian, noAssert) {
      value = +value;
      offset = offset >>> 0;
      if (!noAssert) {
        checkIEEE754(buf, value, offset, 4, 34028234663852886e22, -34028234663852886e22);
      }
      ieee754.write(buf, value, offset, littleEndian, 23, 4);
      return offset + 4;
    }
    Buffer3.prototype.writeFloatLE = function writeFloatLE(value, offset, noAssert) {
      return writeFloat(this, value, offset, true, noAssert);
    };
    Buffer3.prototype.writeFloatBE = function writeFloatBE(value, offset, noAssert) {
      return writeFloat(this, value, offset, false, noAssert);
    };
    function writeDouble(buf, value, offset, littleEndian, noAssert) {
      value = +value;
      offset = offset >>> 0;
      if (!noAssert) {
        checkIEEE754(buf, value, offset, 8, 17976931348623157e292, -17976931348623157e292);
      }
      ieee754.write(buf, value, offset, littleEndian, 52, 8);
      return offset + 8;
    }
    Buffer3.prototype.writeDoubleLE = function writeDoubleLE(value, offset, noAssert) {
      return writeDouble(this, value, offset, true, noAssert);
    };
    Buffer3.prototype.writeDoubleBE = function writeDoubleBE(value, offset, noAssert) {
      return writeDouble(this, value, offset, false, noAssert);
    };
    Buffer3.prototype.copy = function copy(target, targetStart, start, end) {
      if (!Buffer3.isBuffer(target))
        throw new TypeError("argument should be a Buffer");
      if (!start)
        start = 0;
      if (!end && end !== 0)
        end = this.length;
      if (targetStart >= target.length)
        targetStart = target.length;
      if (!targetStart)
        targetStart = 0;
      if (end > 0 && end < start)
        end = start;
      if (end === start)
        return 0;
      if (target.length === 0 || this.length === 0)
        return 0;
      if (targetStart < 0) {
        throw new RangeError("targetStart out of bounds");
      }
      if (start < 0 || start >= this.length)
        throw new RangeError("Index out of range");
      if (end < 0)
        throw new RangeError("sourceEnd out of bounds");
      if (end > this.length)
        end = this.length;
      if (target.length - targetStart < end - start) {
        end = target.length - targetStart + start;
      }
      var len = end - start;
      if (this === target && typeof Uint8Array.prototype.copyWithin === "function") {
        this.copyWithin(targetStart, start, end);
      } else {
        Uint8Array.prototype.set.call(target, this.subarray(start, end), targetStart);
      }
      return len;
    };
    Buffer3.prototype.fill = function fill(val, start, end, encoding) {
      if (typeof val === "string") {
        if (typeof start === "string") {
          encoding = start;
          start = 0;
          end = this.length;
        } else if (typeof end === "string") {
          encoding = end;
          end = this.length;
        }
        if (encoding !== void 0 && typeof encoding !== "string") {
          throw new TypeError("encoding must be a string");
        }
        if (typeof encoding === "string" && !Buffer3.isEncoding(encoding)) {
          throw new TypeError("Unknown encoding: " + encoding);
        }
        if (val.length === 1) {
          var code = val.charCodeAt(0);
          if (encoding === "utf8" && code < 128 || encoding === "latin1") {
            val = code;
          }
        }
      } else if (typeof val === "number") {
        val = val & 255;
      } else if (typeof val === "boolean") {
        val = Number(val);
      }
      if (start < 0 || this.length < start || this.length < end) {
        throw new RangeError("Out of range index");
      }
      if (end <= start) {
        return this;
      }
      start = start >>> 0;
      end = end === void 0 ? this.length : end >>> 0;
      if (!val)
        val = 0;
      var i;
      if (typeof val === "number") {
        for (i = start; i < end; ++i) {
          this[i] = val;
        }
      } else {
        var bytes = Buffer3.isBuffer(val) ? val : Buffer3.from(val, encoding);
        var len = bytes.length;
        if (len === 0) {
          throw new TypeError('The value "' + val + '" is invalid for argument "value"');
        }
        for (i = 0; i < end - start; ++i) {
          this[i + start] = bytes[i % len];
        }
      }
      return this;
    };
    var INVALID_BASE64_RE = /[^+/0-9A-Za-z-_]/g;
    function base64clean(str) {
      str = str.split("=")[0];
      str = str.trim().replace(INVALID_BASE64_RE, "");
      if (str.length < 2)
        return "";
      while (str.length % 4 !== 0) {
        str = str + "=";
      }
      return str;
    }
    function utf8ToBytes(string, units) {
      units = units || Infinity;
      var codePoint;
      var length = string.length;
      var leadSurrogate = null;
      var bytes = [];
      for (var i = 0; i < length; ++i) {
        codePoint = string.charCodeAt(i);
        if (codePoint > 55295 && codePoint < 57344) {
          if (!leadSurrogate) {
            if (codePoint > 56319) {
              if ((units -= 3) > -1)
                bytes.push(239, 191, 189);
              continue;
            } else if (i + 1 === length) {
              if ((units -= 3) > -1)
                bytes.push(239, 191, 189);
              continue;
            }
            leadSurrogate = codePoint;
            continue;
          }
          if (codePoint < 56320) {
            if ((units -= 3) > -1)
              bytes.push(239, 191, 189);
            leadSurrogate = codePoint;
            continue;
          }
          codePoint = (leadSurrogate - 55296 << 10 | codePoint - 56320) + 65536;
        } else if (leadSurrogate) {
          if ((units -= 3) > -1)
            bytes.push(239, 191, 189);
        }
        leadSurrogate = null;
        if (codePoint < 128) {
          if ((units -= 1) < 0)
            break;
          bytes.push(codePoint);
        } else if (codePoint < 2048) {
          if ((units -= 2) < 0)
            break;
          bytes.push(codePoint >> 6 | 192, codePoint & 63 | 128);
        } else if (codePoint < 65536) {
          if ((units -= 3) < 0)
            break;
          bytes.push(codePoint >> 12 | 224, codePoint >> 6 & 63 | 128, codePoint & 63 | 128);
        } else if (codePoint < 1114112) {
          if ((units -= 4) < 0)
            break;
          bytes.push(codePoint >> 18 | 240, codePoint >> 12 & 63 | 128, codePoint >> 6 & 63 | 128, codePoint & 63 | 128);
        } else {
          throw new Error("Invalid code point");
        }
      }
      return bytes;
    }
    function asciiToBytes(str) {
      var byteArray = [];
      for (var i = 0; i < str.length; ++i) {
        byteArray.push(str.charCodeAt(i) & 255);
      }
      return byteArray;
    }
    function utf16leToBytes(str, units) {
      var c, hi, lo;
      var byteArray = [];
      for (var i = 0; i < str.length; ++i) {
        if ((units -= 2) < 0)
          break;
        c = str.charCodeAt(i);
        hi = c >> 8;
        lo = c % 256;
        byteArray.push(lo);
        byteArray.push(hi);
      }
      return byteArray;
    }
    function base64ToBytes(str) {
      return base64.toByteArray(base64clean(str));
    }
    function blitBuffer(src, dst, offset, length) {
      for (var i = 0; i < length; ++i) {
        if (i + offset >= dst.length || i >= src.length)
          break;
        dst[i + offset] = src[i];
      }
      return i;
    }
    function isInstance(obj, type) {
      return obj instanceof type || obj != null && obj.constructor != null && obj.constructor.name != null && obj.constructor.name === type.name;
    }
    function numberIsNaN(obj) {
      return obj !== obj;
    }
    var hexSliceLookupTable = function() {
      var alphabet = "0123456789abcdef";
      var table = new Array(256);
      for (var i = 0; i < 16; ++i) {
        var i16 = i * 16;
        for (var j = 0; j < 16; ++j) {
          table[i16 + j] = alphabet[i] + alphabet[j];
        }
      }
      return table;
    }();
  }
});

// node_modules/node-stdlib-browser/helpers/esbuild/shim.js
import process from "process";
var import_buffer, _globalThis;
var init_shim = __esm({
  "node_modules/node-stdlib-browser/helpers/esbuild/shim.js"() {
    import_buffer = __toESM(require_buffer());
    _globalThis = function(Object2) {
      function get() {
        var _global3 = this || self;
        delete Object2.prototype.__magic__;
        return _global3;
      }
      if (typeof globalThis === "object") {
        return globalThis;
      }
      if (this) {
        return get();
      } else {
        Object2.defineProperty(Object2.prototype, "__magic__", {
          configurable: true,
          get
        });
        var _global2 = __magic__;
        return _global2;
      }
    }(Object);
  }
});

// src/UI/index.tsx
init_shim();

// src/UI/Denominate/index.tsx
init_shim();
import React from "react";

// src/constants/index.ts
init_shim();

// src/constants/errorsMessages.ts
init_shim();
var ERROR_SIGNING = "error when signing";
var TRANSACTION_CANCELLED = "Transaction cancelled";
var ERROR_SIGNING_TX = "error signing transaction";
var PROVIDER_NOT_INTIALIZED = "provider not intialized";
var MISSING_PROVIDER_MESSAGE = "You need a signer/valid signer to send a transaction,use either WalletProvider, LedgerProvider or WalletConnect";

// src/constants/network.ts
init_shim();

// src/constants/ledgerErrorCodes.ts
init_shim();
var ledgerErrorCodes = {
  36864: {
    code: "codeSuccess",
    message: "Success"
  },
  27013: {
    code: "ERR_USER_DENIED",
    message: "Rejected by user"
  },
  27904: {
    code: "ERR_UNKNOWN_INSTRUCTION",
    message: "Unknown instruction"
  },
  28160: {
    code: "ERR_WRONG_CLA",
    message: "Wrong CLA"
  },
  28161: {
    code: "ERR_INVALID_ARGUMENTS",
    message: "Invalid arguments"
  },
  28162: {
    code: "ERR_INVALID_MESSAGE",
    message: "Invalid message"
  },
  28163: {
    code: "ERR_INVALID_P1",
    message: "Invalid P1"
  },
  28164: {
    code: "ERR_MESSAGE_TOO_LONG",
    message: "Message too long"
  },
  28165: {
    code: "ERR_RECEIVER_TOO_LONG",
    message: "Receiver too long"
  },
  28166: {
    code: "ERR_AMOUNT_TOO_LONG",
    message: "Amount too long"
  },
  28167: {
    code: "ERR_CONTRACT_DATA_DISABLED",
    message: "Contract data disabled in app options"
  },
  28168: {
    code: "ERR_MESSAGE_INCOMPLETE",
    message: "Message incomplete"
  },
  28176: {
    code: "ERR_SIGNATURE_FAILED",
    message: "Signature failed"
  },
  28169: {
    code: "ERR_WRONG_TX_VERSION",
    message: "Wrong TX version"
  },
  28170: {
    code: "ERR_NONCE_TOO_LONG",
    message: "Nonce too long"
  },
  28171: {
    code: "ERR_INVALID_AMOUNT",
    message: "Invalid amount"
  },
  28172: {
    code: "ERR_INVALID_FEE",
    message: "Invalid fee"
  },
  28173: {
    code: "ERR_PRETTY_FAILED",
    message: "Pretty failed"
  },
  28174: {
    code: "ERR_DATA_TOO_LONG",
    message: "Data too long"
  },
  28175: {
    code: "ERR_WRONG_TX_OPTIONS",
    message: "Invalid transaction options"
  },
  28177: {
    code: "ERR_SIGN_TX_DEPRECATED",
    message: "Regular transaction signing is deprecated in this version. Use hash signing."
  }
};
var ledgerErrorCodes_default = ledgerErrorCodes;

// src/constants/mnemonicWords.ts
init_shim();

// src/constants/index.ts
var gasLimit = "50000";
var gasPrice = 1e9;
var denomination = 18;
var decimals = 4;
var version = 1;
var ledgerContractDataEnabledValue = 1;
var dappInitRoute = "/dapp/init";
var walletSignSession = "signSession";

// src/utils/index.ts
init_shim();

// src/utils/logout.ts
init_shim();

// src/providers/accountProvider.ts
init_shim();

// src/providers/utils.ts
init_shim();
import { ExtensionProvider } from "@elrondnetwork/erdjs-extension-provider";
import { HWProvider } from "@elrondnetwork/erdjs-hw-provider";
import { WalletConnectProvider } from "@elrondnetwork/erdjs-wallet-connect-provider";
import { WalletProvider } from "@elrondnetwork/erdjs-web-wallet-provider";

// src/types/enums.ts
init_shim();

// src/providers/utils.ts
var DAPP_INIT_ROUTE = "/dapp/init";
var getProviderType = (provider) => {
  switch (provider == null ? void 0 : provider.constructor) {
    case WalletProvider:
      return "wallet" /* wallet */;
    case WalletConnectProvider:
      return "walletconnect" /* walletconnect */;
    case HWProvider:
      return "ledger" /* ledger */;
    case ExtensionProvider:
      return "extension" /* extension */;
    case EmptyProvider:
      return "" /* none */;
    default:
      return "extra" /* extra */;
  }
};
var newWalletProvider = (walletAddress) => new WalletProvider(`${walletAddress}${DAPP_INIT_ROUTE}`);
var getLedgerConfiguration = (initializedHwWalletP) => __async(void 0, null, function* () {
  if (!initializedHwWalletP.isInitialized()) {
    throw new Error("Unable to get version. Provider not initialized");
  }
  const hwApp = initializedHwWalletP.hwApp;
  const { contractData, version: version2 } = yield hwApp.getAppConfiguration();
  const dataEnabled = contractData === ledgerContractDataEnabledValue;
  return { version: version2, dataEnabled };
});
var notInitializedError = (caller) => {
  return `Unable to perform ${caller}, Provider not initialized`;
};
var EmptyProvider = class {
  init() {
    return Promise.resolve(false);
  }
  login(options) {
    throw new Error(notInitializedError(`login with options: ${options}`));
  }
  logout(options) {
    throw new Error(notInitializedError(`logout with options: ${options}`));
  }
  getAddress() {
    throw new Error(notInitializedError("getAddress"));
  }
  isInitialized() {
    return false;
  }
  isConnected() {
    return Promise.resolve(false);
  }
  sendTransaction(transaction, options) {
    throw new Error(notInitializedError(`sendTransaction with transactions: ${transaction} options: ${options}`));
  }
  signTransaction(transaction, options) {
    throw new Error(notInitializedError(`signTransaction with transactions: ${transaction} options: ${options}`));
  }
  signTransactions(transactions, options) {
    throw new Error(notInitializedError(`signTransactions with transactions: ${transactions} options: ${options}`));
  }
  signMessage(message, options) {
    throw new Error(notInitializedError(`signTransactions with ${message} and options ${options}`));
  }
};
var emptyProvider = new EmptyProvider();

// src/providers/accountProvider.ts
var accountProvider = emptyProvider;
function setAccountProvider(provider) {
  accountProvider = provider;
}
function getAccountProvider() {
  return accountProvider || emptyProvider;
}

// src/reduxStore/commonActions.ts
init_shim();
import { createAction } from "@reduxjs/toolkit";
var logoutAction = createAction("logout");
var loginAction = createAction("login", (payload) => ({ payload }));

// src/reduxStore/store.ts
init_shim();
import { configureStore } from "@reduxjs/toolkit";
import {
  persistStore,
  persistReducer as persistReducer2,
  FLUSH,
  REHYDRATE as REHYDRATE3,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
  createMigrate
} from "redux-persist";

// src/reduxStore/slices/index.ts
init_shim();

// src/reduxStore/slices/loginInfoSlice.ts
init_shim();
import { createSlice } from "@reduxjs/toolkit";

// src/storage/local.ts
init_shim();

// src/utils/storage/index.ts
init_shim();

// src/utils/storage/local.ts
var local_exports = {};
__export(local_exports, {
  getItem: () => getItem,
  localStorageKeys: () => localStorageKeys,
  removeItem: () => removeItem,
  setItem: () => setItem
});
init_shim();
import moment from "moment";
var localStorageKeys = {
  loginExpiresAt: "dapp-core-login-expires-at",
  logoutEvent: "dapp-core-logout-event"
};
var hasLocalStorage = typeof localStorage !== "undefined";
var setItem = ({
  key,
  data,
  expires
}) => {
  if (!hasLocalStorage) {
    return;
  }
  localStorage.setItem(String(key), JSON.stringify({
    expires,
    data
  }));
};
var getItem = (key) => {
  if (!hasLocalStorage) {
    return;
  }
  const item = localStorage.getItem(String(key));
  if (!item) {
    return null;
  }
  const deserializedItem = JSON.parse(item);
  if (!deserializedItem) {
    return null;
  }
  if (!deserializedItem.hasOwnProperty("expires") || !deserializedItem.hasOwnProperty("data")) {
    return null;
  }
  const expired = moment().unix() >= deserializedItem.expires;
  if (expired) {
    localStorage.removeItem(String(key));
    return null;
  }
  return deserializedItem.data;
};
var removeItem = (key) => {
  if (!hasLocalStorage) {
    return;
  }
  localStorage.removeItem(String(key));
};

// src/utils/storage/session.ts
var session_exports = {};
__export(session_exports, {
  clear: () => clear,
  default: () => session_default,
  getItem: () => getItem2,
  removeItem: () => removeItem2,
  setItem: () => setItem2,
  storage: () => storage
});
init_shim();

// src/optionalPackages/moment.ts
init_shim();
var moment2 = {};
try {
  moment2 = __require("moment");
} catch (err) {
}
var moment_default = moment2;

// src/utils/storage/session.ts
var setItem2 = ({
  key,
  data,
  expires
}) => {
  sessionStorage.setItem(String(key), JSON.stringify({
    expires,
    data
  }));
};
var getItem2 = (key) => {
  const item = sessionStorage.getItem(String(key));
  if (!item) {
    return null;
  }
  const deserializedItem = JSON.parse(item);
  if (!deserializedItem) {
    return null;
  }
  if (!deserializedItem.hasOwnProperty("expires") || !deserializedItem.hasOwnProperty("data")) {
    return null;
  }
  const expired = moment_default().unix() >= deserializedItem.expires;
  if (expired) {
    sessionStorage.removeItem(String(key));
    return null;
  }
  return deserializedItem.data;
};
var removeItem2 = (key) => sessionStorage.removeItem(String(key));
var clear = () => sessionStorage.clear();
var storage = {
  setItem: setItem2,
  getItem: getItem2,
  removeItem: removeItem2,
  clear
};
var session_default = storage;

// src/utils/storage/index.ts
var storage2 = { session: session_exports, local: local_exports };
var storage_default = storage2;

// src/storage/local.ts
function getNewLoginExpiresTimestamp() {
  return new Date().setHours(new Date().getHours() + 24);
}
function setLoginExpiresAt(expiresAt) {
  storage_default.local.setItem({
    key: localStorageKeys.loginExpiresAt,
    data: expiresAt,
    expires: expiresAt
  });
}

// src/reduxStore/slices/loginInfoSlice.ts
var initialState = {
  loginMethod: "" /* none */,
  walletConnectLogin: null,
  ledgerLogin: null,
  tokenLogin: null,
  walletLogin: null,
  extensionLogin: null
};
var loginInfoSlice = createSlice({
  name: "loginInfoSlice",
  initialState,
  reducers: {
    setLoginMethod: (state, action) => {
      state.loginMethod = action.payload;
    },
    setTokenLogin: (state, action) => {
      state.tokenLogin = action.payload;
    },
    setTokenLoginSignature: (state, action) => {
      if ((state == null ? void 0 : state.tokenLogin) != null) {
        state.tokenLogin.signature = action.payload;
      }
    },
    setWalletLogin: (state, action) => {
      state.walletLogin = action.payload;
    },
    setWalletConnectLogin: (state, action) => {
      state.walletConnectLogin = action.payload;
    },
    setLedgerLogin: (state, action) => {
      state.ledgerLogin = action.payload;
    }
  },
  extraReducers: (builder) => {
    builder.addCase(logoutAction, () => {
      return initialState;
    });
    builder.addCase(loginAction, (state, action) => {
      state.loginMethod = action.payload.loginMethod;
      setLoginExpiresAt(getNewLoginExpiresTimestamp());
    });
  }
});
var {
  setLoginMethod,
  setWalletConnectLogin,
  setLedgerLogin,
  setTokenLogin,
  setTokenLoginSignature,
  setWalletLogin
} = loginInfoSlice.actions;
var loginInfoSlice_default = loginInfoSlice.reducer;

// src/reduxStore/slices/networkConfigSlice.ts
init_shim();
import { createSlice as createSlice2 } from "@reduxjs/toolkit";
import omit from "lodash.omit";

// src/utils/internal/index.ts
init_shim();

// src/utils/internal/optionalRedirect.ts
init_shim();

// src/utils/redirect.ts
init_shim();
var preventRedirect = false;
var preventRedirects = () => {
  preventRedirect = true;
};
var safeRedirect = (url) => {
  if (!preventRedirect) {
    window.location.href = url;
  }
};

// src/utils/internal/optionalRedirect.ts
function optionalRedirect(callbackUrl, shouldRedirect) {
  if (shouldRedirect && callbackUrl != null) {
    setTimeout(() => {
      if (!window.location.pathname.includes(callbackUrl)) {
        safeRedirect(callbackUrl);
      }
    }, 200);
  }
}

// src/utils/internal/getBridgeAddressFromNetwork.ts
init_shim();
function getBridgeAddressFromNetwork(walletConnectBridgeAddresses) {
  return walletConnectBridgeAddresses[Math.floor(Math.random() * walletConnectBridgeAddresses.length)];
}

// src/utils/internal/getLedgerErrorCodes.ts
init_shim();
var ledgerAppErrorText = "Check if Elrond app is open on Ledger";
var notConnectedCode = 28161;
var wrongClaCode = 28160;
var inactiveAppCodes = [notConnectedCode, wrongClaCode];
function getLedgerErrorCodes(err) {
  let errorMessage = null;
  if ((err == null ? void 0 : err.statusCode) in ledgerErrorCodes_default) {
    const statusCode = err == null ? void 0 : err.statusCode;
    const { message } = ledgerErrorCodes_default[statusCode];
    errorMessage = inactiveAppCodes.includes(statusCode) ? ledgerAppErrorText : message;
  }
  return {
    errorMessage,
    defaultErrorMessage: ledgerAppErrorText
  };
}

// src/reduxStore/slices/networkConfigSlice.ts
var defaultNetwork = {
  id: "not-configured",
  chainId: "",
  name: "NOT CONFIGURED",
  egldLabel: "",
  egldDenomination: "18",
  decimals: "4",
  gasPerDataByte: "1500",
  walletConnectDeepLink: "",
  walletConnectBridgeAddress: "",
  walletAddress: "",
  apiAddress: "",
  explorerAddress: "",
  apiTimeout: "4000"
};
var initialState2 = {
  network: defaultNetwork,
  chainID: "-1"
};
var networkConfigSlice = createSlice2({
  name: "appConfig",
  initialState: initialState2,
  reducers: {
    initializeNetworkConfig: (state, action) => {
      const walletConnectBridgeAddress = getBridgeAddressFromNetwork(action.payload.walletConnectBridgeAddresses);
      const network = omit(action.payload, "walletConnectBridgeAddresses");
      state.network = __spreadProps(__spreadValues(__spreadValues({}, state.network), network), {
        walletConnectBridgeAddress
      });
    },
    setChainID: (state, action) => {
      state.chainID = action.payload;
    }
  }
});
var {
  initializeNetworkConfig,
  setChainID
} = networkConfigSlice.actions;
var networkConfigSlice_default = networkConfigSlice.reducer;

// src/reduxStore/slices/accountInfoSlice.ts
init_shim();
import { Address } from "@elrondnetwork/erdjs";
import { createSlice as createSlice3 } from "@reduxjs/toolkit";
import { REHYDRATE } from "redux-persist";
var emptyAccount = {
  balance: "...",
  address: "",
  nonce: 0
};
var initialState3 = {
  address: "",
  account: emptyAccount,
  ledgerAccount: null,
  publicKey: "",
  walletConnectAccount: null,
  isAccountLoading: true,
  accountLoadingError: null
};
var accountInfoSlice = createSlice3({
  name: "accountInfoSlice",
  initialState: initialState3,
  reducers: {
    setAddress: (state, action) => {
      const address = action.payload;
      state.address = address;
      state.publicKey = new Address(address).hex();
    },
    setAccount: (state, action) => {
      state.account = action.payload;
      state.isAccountLoading = false;
      state.accountLoadingError = null;
    },
    setAccountNonce: (state, action) => {
      state.account.nonce = action.payload;
    },
    setAccountShard: (state, action) => {
      state.shard = action.payload;
    },
    setLedgerAccount: (state, action) => {
      state.ledgerAccount = action.payload;
    },
    updateLedgerAccount: (state, action) => {
      if (state.ledgerAccount != null) {
        state.ledgerAccount.index = action.payload.index;
        state.ledgerAccount.address = action.payload.address;
      }
    },
    setWalletConnectAccount: (state, action) => {
      state.walletConnectAccount = action.payload;
    },
    setIsAccountLoading: (state, action) => {
      state.isAccountLoading = action.payload;
      state.accountLoadingError = null;
    },
    setAccountLoadingError: (state, action) => {
      state.accountLoadingError = action.payload;
      state.isAccountLoading = false;
    }
  },
  extraReducers: (builder) => {
    builder.addCase(logoutAction, () => {
      storage_default.local.removeItem(localStorageKeys.loginExpiresAt);
      return initialState3;
    });
    builder.addCase(loginAction, (state, action) => {
      const { address } = action.payload;
      state.address = address;
      state.publicKey = new Address(address).hex();
    });
    builder.addCase(REHYDRATE, (state, action) => {
      var _a;
      if (!((_a = action.payload) == null ? void 0 : _a.account)) {
        return;
      }
      const { account: accountInfo } = action.payload;
      const { address, shard, account, publicKey } = accountInfo;
      state.address = address;
      state.shard = shard;
      state.account = account;
      state.publicKey = publicKey;
    });
  }
});
var {
  setAccount,
  setAddress,
  setAccountNonce,
  setAccountShard,
  setLedgerAccount,
  updateLedgerAccount,
  setWalletConnectAccount,
  setIsAccountLoading,
  setAccountLoadingError
} = accountInfoSlice.actions;
var accountInfoSlice_default = accountInfoSlice.reducer;

// src/reduxStore/slices/transactionsSlice.ts
init_shim();
import { createSlice as createSlice4 } from "@reduxjs/toolkit";
import { REHYDRATE as REHYDRATE2 } from "redux-persist";

// src/utils/transactions/index.ts
init_shim();

// src/utils/transactions/transactionStateByStatus.ts
init_shim();
var pendingBatchTransactionsStates = [
  "sent" /* sent */
];
var successBatchTransactionsStates = [
  "success" /* success */
];
var failBatchTransactionsStates = [
  "fail" /* fail */,
  "cancelled" /* cancelled */,
  "timedOut" /* timedOut */
];
var timedOutBatchTransactionsStates = [
  "timedOut" /* timedOut */
];
var pendingServerTransactionsStatuses = [
  "pending" /* pending */
];
var successServerTransactionsStates = [
  "success" /* success */
];
var failServerTransactionsStates = [
  "fail" /* fail */,
  "invalid" /* invalid */
];
function getIsTransactionPending(status) {
  return status != null && (isBatchTransactionPending(status) || isServerTransactionPending(status));
}
function getIsTransactionSuccessful(status) {
  return status != null && (isBatchTransactionSuccessful(status) || isServerTransactionSuccessful(status));
}
function getIsTransactionFailed(status) {
  return status != null && (isBatchTransactionFailed(status) || isServerTransactionFailed(status));
}
function getIsTransactionTimedOut(status) {
  return status != null && isBatchTransactionTimedOut(status);
}
function isBatchTransactionPending(status) {
  return status != null && pendingBatchTransactionsStates.includes(status);
}
function isBatchTransactionSuccessful(status) {
  return status != null && successBatchTransactionsStates.includes(status);
}
function isBatchTransactionFailed(status) {
  return status != null && failBatchTransactionsStates.includes(status);
}
function isBatchTransactionTimedOut(status) {
  return status != null && timedOutBatchTransactionsStates.includes(status);
}
function isServerTransactionPending(status) {
  return status != null && pendingServerTransactionsStatuses.includes(status);
}
function isServerTransactionSuccessful(status) {
  return status != null && successServerTransactionsStates.includes(status);
}
function isServerTransactionFailed(status) {
  return status != null && failServerTransactionsStates.includes(status);
}

// src/utils/transactions/parseMultiEsdtTransferData.ts
init_shim();
import BigNumber from "bignumber.js";

// src/types/transactions.ts
init_shim();

// src/utils/decoders/index.ts
init_shim();

// src/utils/decoders/decodePart.ts
init_shim();
var isUtf8 = (str) => {
  for (let i = 0; i < str.length; i++) {
    if (str.charCodeAt(i) > 127)
      return false;
  }
  return true;
};
function decodePart(part) {
  let decodedPart = part;
  try {
    const hexPart = import_buffer.Buffer.from(part, "hex").toString().trim();
    if (isUtf8(hexPart) && hexPart.length > 1) {
      decodedPart = hexPart;
    }
  } catch (error) {
  }
  return decodedPart;
}
var decodePart_default = decodePart;

// src/utils/decoders/base64Utils.ts
init_shim();
function isStringBase64(string) {
  try {
    return import_buffer.Buffer.from(string, "base64").toString() === atob(string);
  } catch (err) {
    return false;
  }
}

// src/utils/getAllStringOccurrences.ts
init_shim();
var getAllStringOccurrences = (sourceStr, searchStr) => {
  const startingIndices = [];
  let indexOccurence = sourceStr.indexOf(searchStr, 0);
  while (indexOccurence >= 0) {
    startingIndices.push(indexOccurence);
    indexOccurence = sourceStr.indexOf(searchStr, indexOccurence + 1);
  }
  return startingIndices;
};

// src/utils/transactions/parseMultiEsdtTransferData.ts
function parseMultiEsdtTransferData(data) {
  const transactions = [];
  let contractCallDataIndex = 0;
  try {
    if ((data == null ? void 0 : data.startsWith("MultiESDTNFTTransfer" /* MultiESDTNFTTransfer */)) && (data == null ? void 0 : data.includes("@"))) {
      const [, receiver, encodedTxCount, ...rest] = data == null ? void 0 : data.split("@");
      if (receiver) {
        const txCount = new BigNumber(encodedTxCount, 16).toNumber();
        let itemIndex = 0;
        for (let txIndex = 0; txIndex < txCount; txIndex++) {
          const transaction = {
            type: "nftTransaction" /* nftTransaction */,
            data: "",
            receiver
          };
          for (let index = 0; index < 3; index++) {
            switch (index) {
              case 0:
                transaction.token = decodePart(rest[itemIndex]);
                transaction.data = rest[itemIndex];
                break;
              case 1: {
                const encodedNonce = rest[itemIndex] && rest[itemIndex].length ? rest[itemIndex] : "";
                if (encodedNonce) {
                  transaction.nonce = encodedNonce;
                } else {
                  transaction.type = "esdtTransaction" /* esdtTransaction */;
                }
                transaction.data = `${transaction.data}@${rest[itemIndex]}`;
                break;
              }
              case 2:
                transaction.amount = new BigNumber(rest[itemIndex], 16).toString(10);
                transaction.data = `${transaction.data}@${rest[itemIndex]}`;
                break;
              default:
                break;
            }
            contractCallDataIndex = itemIndex + 1;
            itemIndex++;
          }
          transactions[txIndex] = transaction;
        }
        const isDifferentFromTxCount = transactions.length !== txCount;
        const hasInvalidNoOfAdSigns = transactions.some((tx) => {
          const adSignOccurences = getAllStringOccurrences(tx.data, "@").length;
          return adSignOccurences !== 2;
        });
        const hasAdStart = transactions.some((tx) => tx.data.startsWith("@"));
        if (isDifferentFromTxCount || hasInvalidNoOfAdSigns || hasAdStart) {
          return [];
        }
        if (rest[contractCallDataIndex]) {
          let scCallData = rest[contractCallDataIndex];
          for (let i = contractCallDataIndex + 1; i < rest.length; i++) {
            scCallData += "@" + rest[i];
          }
          transactions[txCount] = {
            type: "scCall" /* scCall */,
            data: scCallData,
            receiver
          };
        }
      }
    }
  } catch (err) {
    console.error("failed parsing tx", err);
    return transactions;
  }
  return transactions;
}
var parseMultiEsdtTransferData_default = parseMultiEsdtTransferData;

// src/utils/transactions/getTokenFromData.ts
init_shim();
import { Address as Address3 } from "@elrondnetwork/erdjs";
import BigNumber2 from "bignumber.js";

// src/utils/account/addressIsValid.ts
init_shim();
import { Address as Address2 } from "@elrondnetwork/erdjs";
function canTransformToPublicKey(address) {
  try {
    const checkAddress = new Address2(address);
    return Boolean(checkAddress.bech32());
  } catch (e) {
    return false;
  }
}
function addressIsValid(destinationAddress) {
  const isValidBach = (destinationAddress == null ? void 0 : destinationAddress.startsWith("erd")) && destinationAddress.length === 62 && /^\w+$/.test(destinationAddress);
  return isValidBach && canTransformToPublicKey(destinationAddress);
}
var addressIsValid_default = addressIsValid;

// src/utils/transactions/getTokenFromData.ts
var noData = {
  tokenId: "",
  amount: ""
};
var decodeData = (data) => {
  const nonceIndex = 2;
  const amountIndex = 3;
  const parts = data.split("@");
  const decodedParts = parts.map((part, i) => [nonceIndex, amountIndex].includes(i) ? part : decodePart_default(part));
  return decodedParts;
};
function getTokenFromData(data) {
  if (!data) {
    return noData;
  }
  const isTokenTransfer2 = data.startsWith("ESDTTransfer" /* ESDTTransfer */);
  const nftTransfer = data.startsWith("ESDTNFTTransfer" /* ESDTNFTTransfer */) && data.includes("@");
  if (isTokenTransfer2) {
    const [, encodedToken, encodedAmount] = data.split("@");
    try {
      const tokenId = import_buffer.Buffer.from(encodedToken, "hex").toString("ascii");
      if (!tokenId) {
        return noData;
      }
      const amount = new BigNumber2("0x" + encodedAmount.replace("0x", "")).toString(10);
      return {
        tokenId,
        amount
      };
    } catch (e) {
    }
  }
  if (nftTransfer) {
    try {
      const [, collection, nonce, quantity, receiver] = decodeData(data);
      if ([collection, nonce, quantity, receiver].every((el) => Boolean(el)) && addressIsValid_default(new Address3(receiver).bech32())) {
        return {
          tokenId: `${collection}-${nonce}`,
          amount: new BigNumber2(quantity, 16).toString(10),
          collection,
          nonce,
          receiver: new Address3(receiver).bech32()
        };
      }
    } catch (err) {
    }
  }
  return noData;
}

// src/utils/transactions/isTokenTransfer.ts
init_shim();
function isTokenTransfer({
  tokenId,
  erdLabel
}) {
  return Boolean(tokenId && tokenId !== erdLabel);
}

// src/utils/transactions/builtCallbackUrl.ts
init_shim();
function buildUrlParams(search, urlParams) {
  const urlSearchParams = new URLSearchParams(search);
  const params = Object.fromEntries(urlSearchParams);
  const nextUrlParams = new URLSearchParams(__spreadValues(__spreadValues({}, params), urlParams)).toString();
  return { nextUrlParams, params };
}
function builtCallbackUrl({
  callbackUrl,
  urlParams = {}
}) {
  let url = callbackUrl;
  if (Object.entries(urlParams).length > 0) {
    const { search, origin, pathname } = new URL(callbackUrl);
    const { nextUrlParams } = buildUrlParams(search, urlParams);
    url = `${origin}${pathname}?${nextUrlParams}`;
  }
  return url;
}

// src/utils/transactions/parseTransactionAfterSigning.ts
init_shim();

// src/models/index.tsx
init_shim();

// src/models/TransactionParameter.ts
init_shim();

// src/models/newTransaction.ts
init_shim();
import {
  Transaction,
  Address as Address4,
  TransactionPayload,
  TransactionOptions,
  TransactionVersion
} from "@elrondnetwork/erdjs";
function newTransaction(rawTransaction) {
  var _a, _b, _c;
  const { data } = rawTransaction;
  const dataPayload = isStringBase64(data != null ? data : "") ? TransactionPayload.fromEncoded(data) : new TransactionPayload(data);
  const transaction = new Transaction(__spreadValues({
    value: rawTransaction.value.valueOf(),
    data: dataPayload,
    nonce: rawTransaction.nonce.valueOf(),
    receiver: new Address4(rawTransaction.receiver),
    sender: new Address4(rawTransaction.sender),
    gasLimit: (_a = rawTransaction.gasLimit.valueOf()) != null ? _a : gasLimit,
    gasPrice: (_b = rawTransaction.gasPrice.valueOf()) != null ? _b : gasPrice,
    chainID: rawTransaction.chainID.valueOf(),
    version: new TransactionVersion((_c = rawTransaction.version) != null ? _c : version)
  }, rawTransaction.options ? { options: new TransactionOptions(rawTransaction.options) } : {}));
  transaction.applySignature({
    hex: () => rawTransaction.signature || ""
  }, new Address4(rawTransaction.sender));
  return transaction;
}
var newTransaction_default = newTransaction;

// src/utils/transactions/parseTransactionAfterSigning.ts
function parseTransactionAfterSigning(signedTransaction) {
  const isComplexTransaction = Object.getPrototypeOf(signedTransaction).toPlainObject != null;
  const transaction = isComplexTransaction ? signedTransaction : newTransaction(signedTransaction);
  const parsedTransaction = __spreadProps(__spreadValues({}, transaction.toPlainObject()), {
    hash: transaction.getHash().hex(),
    status: "pending" /* pending */
  });
  return parsedTransaction;
}

// src/reduxStore/slices/transactionsSlice.ts
var initialState4 = {
  signedTransactions: {},
  transactionsToSign: null,
  signTransactionsError: null,
  customTransactionInformationForSessionId: {}
};
var defaultCustomInformation = {
  signWithoutSending: false,
  sessionInformation: null,
  redirectAfterSign: false
};
var transactionsSlice = createSlice4({
  name: "transactionsSlice",
  initialState: initialState4,
  reducers: {
    moveTransactionsToSignedState: (state, action) => {
      var _a, _b;
      const { sessionId, transactions, errorMessage, status } = action.payload;
      const customTransactionInformation = ((_a = state.customTransactionInformationForSessionId) == null ? void 0 : _a[sessionId]) || defaultCustomInformation;
      state.signedTransactions[sessionId] = {
        transactions,
        status,
        errorMessage,
        customTransactionInformation
      };
      if (((_b = state == null ? void 0 : state.transactionsToSign) == null ? void 0 : _b.sessionId) === sessionId) {
        state.transactionsToSign = initialState4.transactionsToSign;
      }
    },
    clearSignedTransaction: (state, action) => {
      if (state.signedTransactions[action.payload]) {
        delete state.signedTransactions[action.payload];
      }
    },
    clearTransactionToSign: (state) => {
      if (state == null ? void 0 : state.transactionsToSign) {
        state.transactionsToSign = null;
      }
    },
    updateSignedTransaction: (state, action) => {
      state.signedTransactions = __spreadValues(__spreadValues({}, state.signedTransactions), action.payload);
    },
    updateSignedTransactions: (state, action) => {
      const { sessionId, status, errorMessage, transactions } = action.payload;
      const transaction = state.signedTransactions[sessionId];
      if (transaction != null) {
        state.signedTransactions[sessionId].status = status;
        if (errorMessage != null) {
          state.signedTransactions[sessionId].errorMessage = errorMessage;
        }
        if (transactions != null) {
          state.signedTransactions[sessionId].transactions = transactions;
        }
      }
    },
    updateSignedTransactionStatus: (state, action) => {
      var _a, _b, _c, _d, _e, _f;
      const {
        sessionId,
        status,
        errorMessage,
        transactionHash
      } = action.payload;
      const transactions = (_b = (_a = state.signedTransactions) == null ? void 0 : _a[sessionId]) == null ? void 0 : _b.transactions;
      if (transactions != null) {
        state.signedTransactions[sessionId].transactions = transactions.map((transaction) => {
          if (transaction.hash === transactionHash) {
            return __spreadProps(__spreadValues({}, transaction), {
              status,
              errorMessage
            });
          }
          return transaction;
        });
        const areTransactionsSuccessful = (_d = (_c = state.signedTransactions[sessionId]) == null ? void 0 : _c.transactions) == null ? void 0 : _d.every((transaction) => {
          return getIsTransactionSuccessful(transaction.status);
        });
        const areTransactionsFailed = (_f = (_e = state.signedTransactions[sessionId]) == null ? void 0 : _e.transactions) == null ? void 0 : _f.every((transaction) => getIsTransactionFailed(transaction.status));
        if (areTransactionsSuccessful) {
          state.signedTransactions[sessionId].status = "success" /* success */;
        }
        if (areTransactionsFailed) {
          state.signedTransactions[sessionId].status = "fail" /* fail */;
        }
      }
    },
    setTransactionsToSign: (state, action) => {
      state.transactionsToSign = action.payload;
      const { sessionId, customTransactionInformation } = action.payload;
      state.customTransactionInformationForSessionId[sessionId] = customTransactionInformation;
      state.signTransactionsError = null;
    },
    clearAllTransactionsToSign: (state) => {
      state.transactionsToSign = initialState4.transactionsToSign;
      state.signTransactionsError = null;
    },
    clearAllSignedTransactions: (state) => {
      state.signedTransactions = initialState4.signedTransactions;
    },
    setSignTransactionsError: (state, action) => {
      state.signTransactionsError = action.payload;
    }
  },
  extraReducers: (builder) => {
    builder.addCase(logoutAction, () => {
      return initialState4;
    });
    builder.addCase(REHYDRATE2, (state, action) => {
      var _a;
      if (!((_a = action.payload) == null ? void 0 : _a.transactions)) {
        return;
      }
      const {
        signedTransactions,
        customTransactionInformationForSessionId
      } = action.payload.transactions;
      const parsedSignedTransactions = Object.entries(signedTransactions).reduce((acc, [sessionId, transaction]) => {
        const txTimestamp = new Date(sessionId);
        const expiration = new Date();
        expiration.setHours(expiration.getHours() + 5);
        const isExpired = expiration - txTimestamp > 0;
        if (!isExpired) {
          acc[sessionId] = transaction;
        }
        return acc;
      }, {});
      if (customTransactionInformationForSessionId != null) {
        state.customTransactionInformationForSessionId = customTransactionInformationForSessionId;
      }
      if (signedTransactions != null) {
        state.signedTransactions = parsedSignedTransactions;
      }
    });
  }
});
var {
  updateSignedTransactionStatus,
  updateSignedTransactions,
  setTransactionsToSign,
  clearAllTransactionsToSign,
  clearAllSignedTransactions,
  clearSignedTransaction,
  clearTransactionToSign,
  setSignTransactionsError,
  moveTransactionsToSignedState
} = transactionsSlice.actions;
var transactionsSlice_default = transactionsSlice.reducer;

// src/reduxStore/slices/transactionsInfoSlice.ts
init_shim();
import { createSlice as createSlice5 } from "@reduxjs/toolkit";
var defaultTransactionErrorMessage = "Transaction failed";
var defaultTransactionSuccessMessage = "Transaction successful";
var defaultTransactionProcessingMessage = "Processing transaction";
var defaultTransactionSubmittedMessage = "Transaction submitted";
var initialState5 = {};
var signTransactionsSlice = createSlice5({
  name: "transactionsInfo",
  initialState: initialState5,
  reducers: {
    setTransactionsDisplayInfo(state, action) {
      const { sessionId, transactionsDisplayInfo } = action.payload;
      if (sessionId != null) {
        state[sessionId] = {
          errorMessage: (transactionsDisplayInfo == null ? void 0 : transactionsDisplayInfo.errorMessage) || defaultTransactionErrorMessage,
          successMessage: (transactionsDisplayInfo == null ? void 0 : transactionsDisplayInfo.successMessage) || defaultTransactionSuccessMessage,
          processingMessage: (transactionsDisplayInfo == null ? void 0 : transactionsDisplayInfo.processingMessage) || defaultTransactionProcessingMessage,
          submittedMessage: (transactionsDisplayInfo == null ? void 0 : transactionsDisplayInfo.submittedMessage) || defaultTransactionSubmittedMessage,
          transactionDuration: transactionsDisplayInfo == null ? void 0 : transactionsDisplayInfo.transactionDuration
        };
      }
    },
    clearTransactionsInfoForSessionId(state, action) {
      if (action.payload != null) {
        delete state[action.payload];
      }
    },
    clearTransactionsInfo: () => initialState5
  },
  extraReducers: (builder) => {
    builder.addCase(logoutAction, () => {
      return initialState5;
    });
  }
});
var {
  clearTransactionsInfo,
  setTransactionsDisplayInfo,
  clearTransactionsInfoForSessionId
} = signTransactionsSlice.actions;
var transactionsInfoSlice_default = signTransactionsSlice.reducer;

// src/reduxStore/slices/modalsSlice.ts
init_shim();
import { createSlice as createSlice6 } from "@reduxjs/toolkit";
var initialState6 = {};
var modalsSlice = createSlice6({
  name: "modalsSlice",
  initialState: initialState6,
  reducers: {
    setTxSubmittedModal: (state, action) => {
      state.txSubmittedModal = action.payload;
    },
    setNotificationModal: (state, action) => {
      state.notificationModal = action.payload;
    },
    clearTxSubmittedModal: (state) => {
      state.txSubmittedModal = void 0;
    },
    clearNotificationModal: (state) => {
      state.notificationModal = void 0;
    }
  },
  extraReducers: (builder) => {
    builder.addCase(logoutAction, () => {
      return initialState6;
    });
  }
});
var {
  setTxSubmittedModal,
  setNotificationModal,
  clearTxSubmittedModal,
  clearNotificationModal
} = modalsSlice.actions;
var modalsSlice_default = modalsSlice.reducer;

// src/reduxStore/middlewares/loginSessionMiddleware.ts
init_shim();
import throttle from "lodash.throttle";

// src/reduxStore/selectors/loginInfoSelectors.ts
init_shim();

// src/reduxStore/selectors/accountInfoSelectors.ts
init_shim();

// src/reduxStore/selectors/helpers.ts
init_shim();
import isEqual from "lodash.isequal";
import { createSelectorCreator, defaultMemoize } from "reselect";
var createDeepEqualSelector = createSelectorCreator(defaultMemoize, isEqual);

// src/reduxStore/selectors/accountInfoSelectors.ts
var accountInfoSelector = (state) => state.account;
var addressSelector = createDeepEqualSelector(accountInfoSelector, (state) => state.address);
var accountSelector = createDeepEqualSelector(accountInfoSelector, (state) => state.account);
var accountBalanceSelector = createDeepEqualSelector(accountSelector, (account) => account.balance);
var accountNonceSelector = createDeepEqualSelector(accountSelector, (state) => {
  var _a;
  return ((_a = state == null ? void 0 : state.nonce) == null ? void 0 : _a.valueOf()) || 0;
});
var shardSelector = createDeepEqualSelector(accountInfoSelector, (state) => state.shard);
var ledgerAccountSelector = createDeepEqualSelector(accountInfoSelector, (state) => state.ledgerAccount);
var walletConnectAccountSelector = createDeepEqualSelector(accountInfoSelector, (state) => state.walletConnectAccount);
var isAccountLoadingSelector = createDeepEqualSelector(accountInfoSelector, (state) => state.isAccountLoading);
var isAccountLoadingErrorSelector = createDeepEqualSelector(accountInfoSelector, (state) => state.accountLoadingError);

// src/reduxStore/selectors/loginInfoSelectors.ts
var loginInfoSelector = (state) => state.loginInfo;
var loginMethodSelector = createDeepEqualSelector(loginInfoSelector, (state) => state.loginMethod);
var isLoggedInSelector = createDeepEqualSelector(loginInfoSelector, addressSelector, (state, address) => state.loginMethod != "" /* none */ && Boolean(address));
var walletConnectLoginSelector = createDeepEqualSelector(loginInfoSelector, (state) => state.walletConnectLogin);
var ledgerLoginSelector = createDeepEqualSelector(loginInfoSelector, (state) => state.ledgerLogin);
var walletLoginSelector = createDeepEqualSelector(loginInfoSelector, (state) => state.walletLogin);

// src/reduxStore/middlewares/loginSessionMiddleware.ts
var whitelistedActions = ["logout"];
var throttledSetNewExpires = throttle(() => {
  setLoginExpiresAt(getNewLoginExpiresTimestamp());
}, 5e3);
var loginSessionMiddleware = (store2) => (next) => (action) => {
  if (whitelistedActions.includes(action.type)) {
    return next(action);
  }
  const appState = store2.getState();
  const loginTimestamp = storage_default.local.getItem(localStorageKeys.loginExpiresAt);
  const isLoggedIn = isLoggedInSelector(appState);
  if (!isLoggedIn) {
    return next(action);
  }
  if (loginTimestamp == null) {
    return setLoginExpiresAt(getNewLoginExpiresTimestamp());
  }
  const now = Date.now();
  const isExpired = loginTimestamp - now < 0;
  if (isExpired) {
    return setTimeout(() => __async(void 0, null, function* () {
      const provider = getAccountProvider();
      console.log("session expired");
      store2.dispatch(logoutAction());
      try {
        yield provider == null ? void 0 : provider.logout({ callbackUrl: "/" });
      } catch (err) {
        console.error("error logging out", err);
      }
    }), 1e3);
  } else {
    throttledSetNewExpires();
  }
  return next(action);
};
var loginSessionMiddleware_default = loginSessionMiddleware;

// src/reduxStore/reducers.ts
init_shim();
import { combineReducers } from "@reduxjs/toolkit";
import { persistReducer } from "redux-persist";
var reducers = {
  account: accountInfoSlice_default,
  networkConfig: networkConfigSlice_default,
  loginInfo: loginInfoSlice_default,
  modals: modalsSlice_default,
  transactions: transactionsSlice_default,
  transactionsInfo: transactionsInfoSlice_default
};
if (typeof window !== "undefined" && window.localStorage != null) {
  const sessionStorage2 = __require("redux-persist/lib/storage/session").default;
  const transactionsInfoPersistConfig = {
    key: "dapp-core-transactionsInfo",
    version: 1,
    storage: sessionStorage2
  };
  const transactionsReducer = {
    key: "dapp-core-transactions",
    version: 1,
    storage: sessionStorage2,
    blacklist: ["transactionsToSign"]
  };
  reducers.transactions = persistReducer(transactionsReducer, transactionsSlice_default);
  reducers.transactionsInfo = persistReducer(transactionsInfoPersistConfig, transactionsInfoSlice_default);
}
var rootReducer = combineReducers(reducers);
var reducers_default = rootReducer;

// src/reduxStore/store.ts
var localStorageReducers = reducers_default;
var migrations = {
  2: (state) => {
    return __spreadProps(__spreadValues({}, state), {
      networkConfig: defaultNetwork
    });
  }
};
if (typeof window !== "undefined" && (window == null ? void 0 : window.localStorage) != null) {
  const storage3 = __require("redux-persist/lib/storage").default;
  const persistConfig = {
    key: "dapp-core-store",
    version: 2,
    storage: storage3,
    whitelist: ["account", "loginInfo", "toasts", "modals", "networkConfig"],
    migrate: createMigrate(migrations, { debug: false })
  };
  localStorageReducers = persistReducer2(persistConfig, reducers_default);
}
var store = configureStore({
  reducer: localStorageReducers,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware({
    serializableCheck: {
      ignoredActions: [
        FLUSH,
        REHYDRATE3,
        PAUSE,
        PERSIST,
        PURGE,
        REGISTER,
        "accountInfoSlice/setAccount",
        "accountInfoSlice/setAccountNonce"
      ],
      ignoredPaths: ["payload.nonce", "account.account.nonce"]
    }
  }).concat(loginSessionMiddleware_default)
});
var persistor = persistStore(store);
var storeType = configureStore({ reducer: reducers_default });

// src/types/index.ts
init_shim();

// src/types/dapp-provider.ts
init_shim();

// src/types/UI.ts
init_shim();

// src/utils/getIsLoggedIn.ts
init_shim();

// src/reduxStore/selectors/index.ts
init_shim();

// src/reduxStore/selectors/networkConfigSelectors.ts
init_shim();
var networkConfigSelector = (state) => state.networkConfig;
var chainIDSelector = createDeepEqualSelector(networkConfigSelector, (state) => state.chainID);
var walletConnectBridgeAddressSelector = createDeepEqualSelector(networkConfigSelector, (state) => state.network.walletConnectBridgeAddress);
var walletConnectDeepLinkSelector = createDeepEqualSelector(networkConfigSelector, (state) => state.network.walletConnectDeepLink);
var networkSelector = createDeepEqualSelector(networkConfigSelector, (state) => state.network);
var apiNetworkSelector = createDeepEqualSelector(networkSelector, (state) => state.apiAddress);
var explorerAddressSelector = createDeepEqualSelector(networkSelector, (state) => state.explorerAddress);
var egldLabelSelector = createDeepEqualSelector(networkSelector, (state) => state.egldLabel);

// src/reduxStore/selectors/transactionsSelectors.ts
init_shim();
var transactionsSelectors = (state) => state.transactions;
var signedTransactionsSelector = createDeepEqualSelector(transactionsSelectors, (state) => state.signedTransactions);
var signTransactionsErrorSelector = createDeepEqualSelector(transactionsSelectors, (state) => state.signTransactionsError);
var selectTxByStatus = (txStatusVerifier) => (signedTransactions) => Object.entries(signedTransactions).reduce((acc, [sessionId, txBody]) => {
  if (txStatusVerifier(txBody.status)) {
    acc[sessionId] = txBody;
  }
  return acc;
}, {});
var pendingSignedTransactionsSelector = createDeepEqualSelector(signedTransactionsSelector, selectTxByStatus(getIsTransactionPending));
var successfulTransactionsSelector = createDeepEqualSelector(signedTransactionsSelector, selectTxByStatus(getIsTransactionSuccessful));
var failedTransactionsSelector = createDeepEqualSelector(signedTransactionsSelector, selectTxByStatus(getIsTransactionFailed));
var timedOutTransactionsSelector = createDeepEqualSelector(signedTransactionsSelector, selectTxByStatus(getIsTransactionTimedOut));
var transactionsToSignSelector = createDeepEqualSelector(transactionsSelectors, (state) => {
  var _a;
  if ((state == null ? void 0 : state.transactionsToSign) == null) {
    return null;
  }
  return __spreadProps(__spreadValues({}, state.transactionsToSign), {
    transactions: ((_a = state == null ? void 0 : state.transactionsToSign) == null ? void 0 : _a.transactions.map((tx) => newTransaction_default(tx))) || []
  });
});
var transactionStatusSelector = createDeepEqualSelector(signedTransactionsSelector, (_, transactionSessionId) => transactionSessionId, (signedTransactions, transactionSessionId) => transactionSessionId != null ? (signedTransactions == null ? void 0 : signedTransactions[transactionSessionId]) || {} : {});

// src/reduxStore/selectors/transactionsInfoSelectors.ts
init_shim();
var defaultTransactionInfo = {
  errorMessage: defaultTransactionErrorMessage,
  successMessage: defaultTransactionSuccessMessage,
  processingMessage: defaultTransactionProcessingMessage
};
var transactionsInfoSelectors = (state) => state.transactionsInfo;
var transactionDisplayInfoSelector = createDeepEqualSelector(transactionsInfoSelectors, (_, transactionSessionId) => transactionSessionId, (transactionsDisplayInfo, transactionSessionId) => transactionSessionId != null ? (transactionsDisplayInfo == null ? void 0 : transactionsDisplayInfo[Number(transactionSessionId)]) || defaultTransactionInfo : defaultTransactionInfo);

// src/reduxStore/selectors/modalsSelectors.ts
init_shim();
var modalsSliceSelector = (state) => state.modals;
var txSubmittedModalSelector = createDeepEqualSelector(modalsSliceSelector, (state) => state.txSubmittedModal);
var notificationModalSelector = createDeepEqualSelector(modalsSliceSelector, (state) => state.notificationModal);

// src/utils/getIsLoggedIn.ts
function getIsLoggedIn() {
  return isLoggedInSelector(store.getState());
}

// src/utils/account/index.ts
init_shim();

// src/utils/account/getAddress.tsx
init_shim();

// src/utils/network/index.ts
init_shim();

// src/utils/network/getAccountProviderType.ts
init_shim();
function getAccountProviderType() {
  const provider = getAccountProvider();
  return getProviderType(provider);
}

// src/utils/network/getChainID.ts
init_shim();

// src/utils/network/getNetworkConfig.ts
init_shim();

// src/utils/network/getEgldLabel.ts
init_shim();
function getEgldLabel() {
  return egldLabelSelector(store.getState());
}

// src/utils/network/getIsProviderEqualTo.ts
init_shim();
function getIsProviderEqualTo(comparedProviderType) {
  const providerType = getAccountProviderType();
  return providerType === comparedProviderType;
}

// src/utils/account/getAddress.tsx
function getAddress() {
  const { search } = window.location;
  const appState = store.getState();
  const provider = getAccountProvider();
  const address = addressSelector(appState);
  const loggedIn = isLoggedInSelector(appState);
  const walletLogin = walletLoginSelector(appState);
  if (!provider) {
    throw "provider not initialized";
  }
  if (getIsProviderEqualTo("ledger" /* ledger */) && loggedIn) {
    return new Promise((resolve) => {
      resolve(address);
    });
  }
  return !getIsProviderEqualTo("" /* none */) && !getIsProviderEqualTo("wallet" /* wallet */) && !getIsProviderEqualTo("extra" /* extra */) ? provider.getAddress() : new Promise((resolve) => {
    if (walletLogin != null) {
      const urlSearchParams = new URLSearchParams(search);
      const params = Object.fromEntries(urlSearchParams);
      if (addressIsValid(params.address)) {
        resolve(params.address);
      }
    }
    if (loggedIn) {
      resolve(address);
    }
    resolve("");
  });
}

// src/utils/account/getAccount.tsx
init_shim();

// src/providers/proxyProvider.ts
init_shim();
import { ProxyNetworkProvider } from "@elrondnetwork/erdjs-network-providers";
import { Address as Address5 } from "@elrondnetwork/erdjs/out";
var proxyProvider = null;
function initializeProxyProvider(networkConfig) {
  const initializationNetworkConfig = networkConfig || networkSelector(store.getState());
  proxyProvider = new ProxyNetworkProvider(initializationNetworkConfig.apiAddress, {
    timeout: Number(initializationNetworkConfig.apiTimeout)
  });
  return proxyProvider;
}
function getProxyProvider() {
  if (proxyProvider == null) {
    return initializeProxyProvider();
  } else {
    return proxyProvider;
  }
}
function getAccountFromProxyProvider(address) {
  return __async(this, null, function* () {
    try {
      const proxy = getProxyProvider();
      return yield proxy.getAccount(new Address5(address));
    } catch (err) {
      return null;
    }
  });
}

// src/utils/account/getAccount.tsx
function getAccount(address) {
  return getAccountFromProxyProvider(address);
}

// src/utils/account/setNonce.tsx
init_shim();

// src/utils/account/getLatestNonce.tsx
init_shim();
function getLatestNonce(account) {
  const appState = store.getState();
  const currentAccountNonce = accountNonceSelector(appState);
  if (!account) {
    return currentAccountNonce;
  }
  return currentAccountNonce && !isNaN(currentAccountNonce) ? Math.max(currentAccountNonce, account.nonce.valueOf()) : account.nonce.valueOf();
}

// src/utils/account/getAccountBalance.tsx
init_shim();
function getAccountBalance(address) {
  return __async(this, null, function* () {
    var _a;
    let accountAddress = address;
    if (accountAddress == null) {
      const account2 = accountSelector(store.getState());
      accountAddress = account2.address;
    }
    const account = yield getAccount(accountAddress);
    if (account == null) {
      throw "Could not read account, user not logged in";
    }
    return (_a = account == null ? void 0 : account.balance) == null ? void 0 : _a.toFixed();
  });
}

// src/utils/account/refreshAccount.tsx
init_shim();

// src/utils/account/getShardOfAddress.ts
init_shim();
var isAddressOfMetachain = (pubKey) => {
  const metachainPrefix = import_buffer.Buffer.from([
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    1,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0
  ]);
  const pubKeyPrefix = pubKey.slice(0, metachainPrefix.length);
  if (pubKeyPrefix.equals(metachainPrefix)) {
    return true;
  }
  const zeroAddress = import_buffer.Buffer.alloc(32).fill(0);
  return pubKey.equals(zeroAddress);
};
var getShardOfAddress = (hexPubKey) => {
  try {
    const numShards = 3;
    const maskHigh = parseInt("11", 2);
    const maskLow = parseInt("01", 2);
    const pubKey = import_buffer.Buffer.from(hexPubKey, "hex");
    const lastByteOfPubKey = pubKey[31];
    if (isAddressOfMetachain(pubKey)) {
      return 4294967295;
    }
    let shard = lastByteOfPubKey & maskHigh;
    if (shard > numShards - 1) {
      shard = lastByteOfPubKey & maskLow;
    }
    return shard;
  } catch (err) {
    return -1;
  }
};

// src/utils/account/signMessage.ts
init_shim();
import { SignableMessage, Address as Address6 } from "@elrondnetwork/erdjs";

// src/utils/account/loginWithExternalProvider.ts
init_shim();

// src/utils/logout.ts
var broadcastLogoutAcrossTabs = (address) => {
  storage_default.local.setItem({
    key: localStorageKeys.logoutEvent,
    data: address,
    expires: 0
  });
  storage_default.local.removeItem(localStorageKeys.logoutEvent);
};
function logout(callbackUrl, onRedirect) {
  return __async(this, null, function* () {
    const provider = getAccountProvider();
    const providerType = getProviderType(provider);
    const isLoggedIn = getIsLoggedIn();
    const isWalletProvider = providerType === "wallet" /* wallet */;
    if (!isLoggedIn || !provider) {
      return;
    }
    try {
      const address = yield getAddress();
      broadcastLogoutAcrossTabs(address);
    } catch (err) {
      console.error("error fetching logout address", err);
    }
    if (isWalletProvider) {
      preventRedirects();
    }
    store.dispatch(logoutAction());
    try {
      const needsCallbackUrl = isWalletProvider && !callbackUrl;
      const url = needsCallbackUrl ? window.location.origin : callbackUrl;
      yield provider.logout({ callbackUrl: url });
      if (callbackUrl && providerType !== "wallet" /* wallet */) {
        if (typeof onRedirect === "function") {
          onRedirect(callbackUrl);
        } else {
          safeRedirect(callbackUrl);
        }
      }
    } catch (err) {
      console.error("error logging out", err);
    }
  });
}

// src/utils/buildUrlParams.ts
init_shim();

// src/utils/switchTrue.ts
init_shim();

// src/utils/math.ts
init_shim();
var logarithmicRest = (position) => {
  const minp = 0;
  const maxp = 10;
  const minv = Math.log(5e-3);
  const maxv = Math.log(2);
  const scale = (maxv - minv) / (maxp - minp);
  return Math.exp(minv + scale * (position - minp));
};

// src/utils/operations/index.tsx
init_shim();

// src/utils/operations/denominate.ts
init_shim();
import { TokenPayment } from "@elrondnetwork/erdjs";
import BigNumber5 from "bignumber.js";

// src/utils/validation/index.ts
init_shim();

// src/utils/validation/stringIsInteger.ts
init_shim();
import BigNumber3 from "bignumber.js";
var stringIsInteger = (integer, positiveNumbersOnly = true) => {
  const stringInteger = String(integer);
  if (!stringInteger.match(/^[-]?\d+$/)) {
    return false;
  }
  const bNparsed = new BigNumber3(stringInteger);
  const limit = positiveNumbersOnly ? 0 : -1;
  return bNparsed.toString(10) === stringInteger && bNparsed.comparedTo(0) >= limit;
};

// src/utils/validation/stringIsFloat.ts
init_shim();
import BigNumber4 from "bignumber.js";

// src/utils/validation/maxDecimals.ts
init_shim();

// src/utils/validation/getIdentifierType.ts
init_shim();
var esdtParts = 2;
var nftParts = 3;
var defaultResult = {
  isEsdt: false,
  isNft: false,
  isEgld: false
};
function getIdentifierType(identifier) {
  const parts = identifier == null ? void 0 : identifier.split("-").length;
  if (parts === esdtParts) {
    return __spreadProps(__spreadValues({}, defaultResult), {
      isEsdt: true
    });
  }
  if (parts === nftParts) {
    return __spreadProps(__spreadValues({}, defaultResult), {
      isNft: true
    });
  }
  return __spreadProps(__spreadValues({}, defaultResult), {
    isEgld: true
  });
}

// src/utils/operations/pipe.ts
init_shim();
function pipe(previous) {
  return {
    if: function(condition) {
      if (condition) {
        return {
          then: (newValue) => newValue instanceof Function ? pipe(newValue(previous)) : pipe(newValue)
        };
      } else {
        return {
          then: () => pipe(previous)
        };
      }
    },
    then: (newValue) => newValue instanceof Function ? pipe(newValue(previous)) : pipe(newValue),
    valueOf: function() {
      return previous;
    }
  };
}
var pipe_default = pipe;

// src/utils/operations/denominate.ts
BigNumber5.config({ ROUNDING_MODE: BigNumber5.ROUND_FLOOR });
function denominate({
  input,
  denomination: denomination2 = denomination,
  decimals: decimals2 = decimals,
  showLastNonZeroDecimal = true,
  showIsLessThanDecimalsLabel = false,
  addCommas = false
}) {
  if (!stringIsInteger(input, false)) {
    throw new Error("Invalid input");
  }
  const isNegative = new BigNumber5(input).isNegative();
  let modInput = input;
  if (isNegative) {
    modInput = input.substring(1);
  }
  return pipe_default(modInput).then(() => TokenPayment.fungibleFromBigInteger("", modInput, denomination2).toRationalNumber()).then((current) => {
    const bnBalance = new BigNumber5(current);
    if (bnBalance.isZero()) {
      return "0";
    }
    const balance = bnBalance.toString(10);
    const [integerPart, decimalPart] = balance.split(".");
    const bNdecimalPart = new BigNumber5(decimalPart || 0);
    const decimalPlaces = pipe_default(0).if(Boolean(decimalPart && showLastNonZeroDecimal)).then(() => Math.max(decimalPart.length, decimals2)).if(bNdecimalPart.isZero() && !showLastNonZeroDecimal).then(0).if(Boolean(decimalPart && !showLastNonZeroDecimal)).then(() => Math.min(decimalPart.length, decimals2)).valueOf();
    const shownDecimalsAreZero = decimalPart && decimals2 >= 1 && decimals2 <= decimalPart.length && bNdecimalPart.isGreaterThan(0) && new BigNumber5(decimalPart.substring(0, decimals2)).isZero();
    const formatted = bnBalance.toFormat(decimalPlaces);
    const formattedBalance = pipe_default(balance).if(addCommas).then(formatted).if(Boolean(shownDecimalsAreZero)).then((current2) => {
      const integerPartZero = new BigNumber5(integerPart).isZero();
      const [numericPart, decimalSide] = current2.split(".");
      const zeroPlaceholders = new Array(decimals2 - 1).fill(0);
      const zeros = [...zeroPlaceholders, 0].join("");
      const minAmount = [...zeroPlaceholders, 1].join("");
      if (!integerPartZero) {
        return `${numericPart}.${zeros}`;
      }
      if (showIsLessThanDecimalsLabel) {
        return `<${numericPart}.${minAmount}`;
      }
      if (!showLastNonZeroDecimal) {
        return numericPart;
      }
      return `${numericPart}.${decimalSide}`;
    }).if(Boolean(!shownDecimalsAreZero && decimalPart)).then((current2) => {
      if (showLastNonZeroDecimal) {
        return current2;
      }
      const [numericPart] = current2.split(".");
      const decimalSide = decimalPart.substring(0, decimalPlaces);
      if (!decimalSide) {
        return numericPart;
      }
      return `${numericPart}.${decimalSide}`;
    }).valueOf();
    return formattedBalance;
  }).if(isNegative).then((current) => `-${current}`).valueOf();
}

// src/utils/operations/nominate.ts
init_shim();
import { TokenPayment as TokenPayment2 } from "@elrondnetwork/erdjs";

// src/utils/operations/calculateFeeLimit.ts
init_shim();
import {
  Transaction as Transaction2,
  TransactionPayload as TransactionPayload2,
  TransactionVersion as TransactionVersion2,
  Address as Address7
} from "@elrondnetwork/erdjs";
import { TokenPayment as TokenPayment3 } from "@elrondnetwork/erdjs";
import { NetworkConfig } from "@elrondnetwork/erdjs-network-providers";

// src/utils/operations/getTokenFromData.ts
init_shim();
import BigNumber6 from "bignumber.js";

// src/utils/operations/getUsdValue.tsx
init_shim();
var getUsdValue = ({
  amount,
  usd,
  decimals: decimals2 = 2
}) => {
  const sum = (parseFloat(amount) * usd).toFixed(decimals2);
  return parseFloat(sum).toLocaleString("en", {
    maximumFractionDigits: decimals2,
    minimumFractionDigits: decimals2
  });
};

// src/utils/operations/timeRemaining.ts
init_shim();
import moment3 from "moment";

// src/utils/smartContracts.ts
init_shim();
import { Address as Address8, TransactionPayload as TransactionPayload3 } from "@elrondnetwork/erdjs";
function getAddressFromDataField({
  receiver,
  data
}) {
  try {
    if (!data) {
      return receiver;
    }
    const parsedData = isStringBase64(data) ? TransactionPayload3.fromEncoded(data).toString() : data;
    const addressIndex = getAddressIndex(parsedData);
    const parts = parsedData.split("@");
    return addressIndex > -1 ? parts[addressIndex] : receiver;
  } catch (err) {
    console.log(err);
    return;
  }
}
function getAddressIndex(data) {
  if (data.includes("MultiESDTNFTTransfer" /* MultiESDTNFTTransfer */)) {
    return 1;
  }
  if (data.includes("ESDTNFTTransfer" /* ESDTNFTTransfer */)) {
    return 4;
  }
  return -1;
}

// src/utils/getGeneratedClasses.ts
init_shim();

// src/optionalPackages/classnames.ts
init_shim();
var classnames = {};
try {
  classnames = __require("classnames");
} catch (err) {
}
var classnames_default = classnames;

// src/utils/getGeneratedClasses.ts
function getGeneratedClasses(className, shouldRenderDefaultCss, defaultStyles) {
  return Object.entries(defaultStyles).reduce((acc, [key, defaultClassNames]) => {
    var _a;
    acc[key] = (_a = classnames_default) == null ? void 0 : _a(`${className}_${key}`, shouldRenderDefaultCss && defaultClassNames);
    return acc;
  }, {});
}

// src/UI/Denominate/index.tsx
var denominateInvalid = (props) => {
  return /* @__PURE__ */ React.createElement("span", {
    "data-testid": props["data-testid"] ? props["data-testid"] : "denominateComponent"
  }, /* @__PURE__ */ React.createElement("span", {
    className: "int-amount"
  }, "..."));
};
var denominateValid = (props, erdLabel) => {
  const { value, showLastNonZeroDecimal = false, showLabel = true } = props;
  const decimals2 = props.decimals !== void 0 ? props.decimals : decimals;
  const denomination2 = props.denomination !== void 0 ? props.denomination : denomination;
  const denominatedValue = denominate({
    input: value,
    denomination: denomination2,
    decimals: decimals2,
    showLastNonZeroDecimal,
    addCommas: true
  });
  const valueParts = denominatedValue.split(".");
  const hasNoDecimals = valueParts.length === 1;
  const isNotZero = denominatedValue !== "0";
  if (decimals2 > 0 && hasNoDecimals && isNotZero) {
    let zeros = "";
    for (let i = 1; i <= decimals2; i++) {
      zeros = zeros + "0";
    }
    valueParts.push(zeros);
  }
  return /* @__PURE__ */ React.createElement("span", {
    "data-testid": props["data-testid"] ? props["data-testid"] : "denominateComponent"
  }, /* @__PURE__ */ React.createElement("span", {
    className: "int-amount"
  }, valueParts[0]), valueParts.length > 1 && /* @__PURE__ */ React.createElement("span", {
    className: "decimals"
  }, ".", valueParts[1]), showLabel && /* @__PURE__ */ React.createElement("span", {
    className: `symbol ${props.token ? "text-muted" : ""}`
  }, "\xA0", props.token ? props.token : erdLabel));
};
var Denominate = (props) => {
  const { value } = props;
  return !stringIsInteger(value) ? denominateInvalid(props) : denominateValid(props, props.egldLabel || "");
};
var DenominateWrapper = (props) => {
  const egldLabel = props.egldLabel || getEgldLabel();
  const denominateProps = __spreadProps(__spreadValues({}, props), { egldLabel });
  return /* @__PURE__ */ React.createElement(Denominate, __spreadValues({}, denominateProps));
};
var Denominate_default = DenominateWrapper;

// src/UI/ExplorerLink/index.tsx
init_shim();
import React4 from "react";

// src/hooks/index.tsx
init_shim();

// src/hooks/useGetNetworkConfig.ts
init_shim();

// src/reduxStore/DappProviderContext.ts
init_shim();
import React2 from "react";
import {
  createDispatchHook,
  createSelectorHook,
  createStoreHook
} from "react-redux";
var defaultContextValue = null;
var DappCoreContext = React2.createContext(defaultContextValue);
var useStore = createStoreHook(DappCoreContext);
var useDispatch = createDispatchHook(DappCoreContext);
var useSelector = createSelectorHook(DappCoreContext);

// src/hooks/useGetNetworkConfig.ts
var useGetNetworkConfig = () => {
  return useSelector(networkConfigSelector);
};
var useGetNetworkConfig_default = useGetNetworkConfig;

// src/hooks/useUpdateEffect.ts
init_shim();
import { useRef, useEffect } from "react";
function useUpdateEffect(effect, dependencies = []) {
  const isInitialMount = useRef(true);
  useEffect(() => {
    if (isInitialMount.current) {
      isInitialMount.current = false;
    } else {
      effect();
    }
  }, dependencies);
}

// src/hooks/useGetNotification.ts
init_shim();
function useGetNotification() {
  const notification = useSelector(notificationModalSelector);
  const dispatch = useDispatch();
  const clearNotification = () => dispatch(clearNotificationModal());
  return { notification, clearNotification };
}

// src/hooks/transactions/index.ts
init_shim();

// src/hooks/transactions/useGetTransactionDisplayInfo.ts
init_shim();
function useGetTransactionDisplayInfo(toastId) {
  return useSelector((state) => transactionDisplayInfoSelector(state, toastId));
}

// src/hooks/transactions/useParseSignedTransactions.tsx
init_shim();
import React3 from "react";
import { WalletProvider as WalletProvider2 } from "@elrondnetwork/erdjs-web-wallet-provider";
import qs from "qs";
function useParseSignedTransactions(onAbort) {
  const { search } = window.location;
  const network = useSelector(networkSelector);
  const dispatch = useDispatch();
  React3.useEffect(() => {
    if (search != null) {
      const searchData = qs.parse(search.replace("?", ""));
      if (searchData && walletSignSession in searchData) {
        const sessionId = String(searchData[walletSignSession]);
        const signedTransactions = new WalletProvider2(`${network.walletAddress}${dappInitRoute}`).getTransactionsFromWalletUrl();
        if (searchData.status === "cancelled" /* cancelled */) {
          dispatch(moveTransactionsToSignedState({
            sessionId,
            status: "cancelled" /* cancelled */
          }));
          onAbort();
          history.pushState({}, document.title, "?");
          return;
        }
        if (signedTransactions.length > 0) {
          dispatch(moveTransactionsToSignedState({
            sessionId,
            status: "signed" /* signed */,
            transactions: signedTransactions.map((tx) => parseTransactionAfterSigning(tx))
          }));
          history.pushState({}, document.title, "?");
        }
      }
    }
  }, [search]);
}

// src/hooks/transactions/useSignTransactions.tsx
init_shim();
import { useEffect as useEffect2, useRef as useRef2, useState } from "react";
import { ExtensionProvider as ExtensionProvider2 } from "@elrondnetwork/erdjs-extension-provider";
var useSignTransactions = () => {
  const dispatch = useDispatch();
  const savedCallback = useRef2("/");
  const address = useSelector(addressSelector);
  const provider = getAccountProvider();
  const providerType = getProviderType(provider);
  const [error, setError] = useState(null);
  const transactionsToSign = useSelector(transactionsToSignSelector);
  const hasTransactions = Boolean(transactionsToSign == null ? void 0 : transactionsToSign.transactions);
  const onAbort = (sessionId) => {
    setError(null);
    clearSignInfo(sessionId);
  };
  useParseSignedTransactions(onAbort);
  function clearSignInfo(sessionId) {
    var _a, _b;
    const isExtensionProvider = provider instanceof ExtensionProvider2;
    dispatch(clearAllTransactionsToSign());
    dispatch(clearTransactionsInfoForSessionId(sessionId));
    if (!isExtensionProvider) {
      return;
    }
    (_b = (_a = ExtensionProvider2.getInstance()) == null ? void 0 : _a.cancelAction) == null ? void 0 : _b.call(_a);
  }
  const onCancel = (errorMessage, sessionId) => {
    const isTxCancelled = errorMessage !== TRANSACTION_CANCELLED;
    clearSignInfo(sessionId);
    if (!isTxCancelled) {
      return;
    }
    setError(errorMessage);
  };
  const signWithWallet = (transactions, sessionId, callbackRoute = "") => {
    const urlParams = { [walletSignSession]: sessionId };
    const callbackUrl = `${window.location.origin}${callbackRoute}`;
    const buildedCallbackUrl = builtCallbackUrl({ callbackUrl, urlParams });
    provider.signTransactions(transactions, {
      callbackUrl: encodeURIComponent(buildedCallbackUrl)
    });
  };
  const signTransactionsWithProvider = () => __async(void 0, null, function* () {
    var _a;
    const {
      sessionId,
      transactions,
      callbackRoute,
      customTransactionInformation
    } = transactionsToSign;
    const { redirectAfterSign } = customTransactionInformation;
    const redirectRoute = callbackRoute || window.location.pathname;
    const isCurrentRoute = window.location.pathname.includes(redirectRoute);
    const shouldRedirectAfterSign = redirectAfterSign && !isCurrentRoute;
    try {
      const isProviderInitialized = yield (_a = provider == null ? void 0 : provider.init) == null ? void 0 : _a.call(provider);
      if (!isProviderInitialized) {
        return;
      }
    } catch (error2) {
      const errorMessage = (error2 == null ? void 0 : error2.message) || error2 || PROVIDER_NOT_INTIALIZED;
      onCancel(errorMessage);
      return;
    }
    try {
      const signedTransactions = yield provider.signTransactions(transactions);
      const hasSameTransactions = Object.keys(signedTransactions).length === transactions.length;
      const hasAllTransactionsSigned = signedTransactions && hasSameTransactions;
      const shouldMoveTransactionsToSignedState = signedTransactions && hasAllTransactionsSigned;
      if (!shouldMoveTransactionsToSignedState) {
        return;
      }
      const signedTransactionsArray = Object.values(signedTransactions).map((tx) => parseTransactionAfterSigning(tx));
      dispatch(moveTransactionsToSignedState({
        sessionId,
        transactions: signedTransactionsArray,
        status: "signed" /* signed */
      }));
      if (shouldRedirectAfterSign) {
        safeRedirect(redirectRoute);
      }
    } catch (error2) {
      const errorMessage = (error2 == null ? void 0 : error2.message) || error2 || ERROR_SIGNING_TX;
      dispatch(moveTransactionsToSignedState({
        sessionId,
        status: "cancelled" /* cancelled */
      }));
      onCancel(errorMessage, sessionId);
    }
  });
  const signTransactions2 = () => __async(void 0, null, function* () {
    if (!transactionsToSign) {
      return;
    }
    const { sessionId, transactions, callbackRoute } = transactionsToSign;
    if (!provider) {
      console.error(MISSING_PROVIDER_MESSAGE);
      return;
    }
    savedCallback.current = callbackRoute || window.location.pathname;
    const setTransactionNonces = (latestNonce, transactions2) => {
      return transactions2.map((tx, index) => {
        tx.setNonce(latestNonce + index);
        return tx;
      });
    };
    try {
      const proxyAccount = yield getAccountFromProxyProvider(address);
      if (proxyAccount == null) {
        return;
      }
      const isSigningWithWebWallet = providerType === "wallet" /* wallet */;
      const isSigningWithProvider = ![
        "wallet" /* wallet */,
        "ledger" /* ledger */
      ].includes(providerType);
      const latestNonce = getLatestNonce(proxyAccount);
      const mappedTransactions = setTransactionNonces(latestNonce, transactions);
      if (isSigningWithWebWallet) {
        signWithWallet(mappedTransactions, sessionId, callbackRoute);
      }
      if (isSigningWithProvider) {
        signTransactionsWithProvider();
      }
    } catch (err) {
      const defaultErrorMessage = error == null ? void 0 : error.message;
      const errorMessage = defaultErrorMessage || ERROR_SIGNING;
      onCancel(errorMessage, sessionId);
      dispatch(moveTransactionsToSignedState({
        sessionId,
        status: "cancelled" /* cancelled */
      }));
      console.error(errorMessage, err);
    }
  });
  useEffect2(() => {
    signTransactions2();
  }, [transactionsToSign]);
  return {
    error,
    onAbort,
    hasTransactions,
    callbackRoute: savedCallback.current,
    sessionId: transactionsToSign == null ? void 0 : transactionsToSign.sessionId,
    transactions: transactionsToSign == null ? void 0 : transactionsToSign.transactions
  };
};

// src/hooks/transactions/useGetSignedTransactions.ts
init_shim();
function useGetSignedTransactions() {
  const signedTransactions = useSelector(signedTransactionsSelector);
  const signedTransactionsArray = Object.entries(signedTransactions);
  const hasSignedTransactions = (signedTransactionsArray == null ? void 0 : signedTransactionsArray.length) > 0;
  return {
    signedTransactions,
    signedTransactionsArray,
    hasSignedTransactions
  };
}

// src/hooks/transactions/useGetTokenDetails.tsx
init_shim();
import axios from "axios";

// src/optionalPackages/swr.ts
init_shim();
var swr = {};
try {
  swr = __require("swr").default;
} catch (err) {
}
var swr_default = swr;

// src/hooks/transactions/useGetTokenDetails.tsx
var fetcher = (url) => axios.get(url).then((response) => response.data);
function useGetTokenDetails({
  tokenId
}) {
  var _a;
  const { network } = useGetNetworkConfig_default();
  const { isEsdt } = getIdentifierType(tokenId);
  const tokenEndpoint = isEsdt ? "tokens" : "nfts";
  const {
    data: selectedToken,
    error
  } = swr_default(Boolean(tokenId) ? `${network.apiAddress}/${tokenEndpoint}/${tokenId}` : null, fetcher);
  if (!tokenId) {
    return {
      tokenDenomination: Number(network.egldDenomination),
      tokenLabel: "",
      tokenAvatar: ""
    };
  }
  const tokenDenomination = selectedToken ? selectedToken == null ? void 0 : selectedToken.decimals : Number(network.egldDenomination);
  const tokenLabel = selectedToken ? selectedToken == null ? void 0 : selectedToken.name : "";
  const tokenAvatar = selectedToken ? `${(_a = selectedToken == null ? void 0 : selectedToken.assets) == null ? void 0 : _a.svgUrl}` : "";
  return { tokenDenomination, tokenLabel, tokenAvatar, error };
}
var useGetTokenDetails_default = useGetTokenDetails;

// src/hooks/transactions/useSignTransactionsWithDevice.tsx
init_shim();
import { useDispatch as useDispatch2 } from "react-redux";

// src/hooks/account/useGetAccountInfo.ts
init_shim();
var useGetAccountInfo = () => {
  return useSelector(accountInfoSelector);
};

// src/hooks/transactions/useSignMultipleTransactions.tsx
init_shim();
import { useEffect as useEffect4, useState as useState3 } from "react";

// src/apiCalls/index.ts
init_shim();

// src/apiCalls/transactions/index.ts
init_shim();

// src/apiCalls/transactions/sendSignedTransactions.ts
init_shim();
import axios2 from "axios";

// src/apiCalls/transactions/getTransactionsByHashes.ts
init_shim();
import axios3 from "axios";

// src/apiCalls/configuration/index.ts
init_shim();

// src/apiCalls/configuration/getServerConfigurationForEnvironment.ts
init_shim();

// src/apiCalls/configuration/getServerConfiguration.ts
init_shim();
import axios4 from "axios";

// src/apiCalls/getScamAddressData.ts
init_shim();
import axios5 from "axios";
function getScamAddressData(addressToVerify) {
  return __async(this, null, function* () {
    const {
      network: { apiAddress, apiTimeout }
    } = networkConfigSelector(store.getState());
    const { data } = yield axios5.get(`/accounts/${addressToVerify}`, {
      baseURL: apiAddress,
      timeout: Number(apiTimeout)
    });
    return data;
  });
}

// src/hooks/transactions/useParseMultiEsdtTransferData.ts
init_shim();
import { useEffect as useEffect3, useState as useState2 } from "react";
var defaultTransactionInfo2 = {
  tokenId: "",
  amount: "",
  type: "",
  multiTxData: "",
  receiver: ""
};
function useParseMultiEsdtTransferData({
  transactions
}) {
  const [parsedTransactionsByDataField, setParsedTransactions] = useState2({});
  const [allTransactions, setAllTransactions] = useState2([]);
  function addTransactionDataToParsedInfo(data, txInfo) {
    setParsedTransactions((existing) => __spreadProps(__spreadValues({}, existing), {
      [data]: txInfo
    }));
  }
  function getTxInfoByDataField(data, multiTransactionData) {
    if (parsedTransactionsByDataField == null) {
      return defaultTransactionInfo2;
    }
    if (data in parsedTransactionsByDataField) {
      return parsedTransactionsByDataField[data];
    }
    if (multiTransactionData != null && String(multiTransactionData) in parsedTransactionsByDataField) {
      return parsedTransactionsByDataField[multiTransactionData];
    }
    return defaultTransactionInfo2;
  }
  function extractTransactionESDTData() {
    if (transactions && transactions.length > 0) {
      const allTxs = [];
      transactions.forEach((transaction, transactionIndex) => {
        const txData = transaction.getData().toString();
        const multiTxs = parseMultiEsdtTransferData_default(txData);
        if (multiTxs.length > 0) {
          multiTxs.forEach((trx, idx) => {
            const newTx = {
              transaction,
              multiTxData: trx.data,
              transactionIndex: idx
            };
            addTransactionDataToParsedInfo(trx.data, {
              tokenId: trx.token ? trx.token : "",
              amount: trx.amount ? trx.amount : "",
              type: trx.type,
              nonce: trx.nonce ? trx.nonce : "",
              multiTxData: trx.data,
              receiver: trx.receiver
            });
            allTxs.push(newTx);
          });
        } else {
          const { tokenId, amount } = getTokenFromData(transaction.getData().toString());
          if (tokenId) {
            addTransactionDataToParsedInfo(transaction.getData().toString(), {
              tokenId,
              amount,
              receiver: transaction.getReceiver().bech32()
            });
          }
          allTxs.push({ transaction, transactionIndex });
        }
      });
      setAllTransactions(allTxs);
    }
  }
  useEffect3(() => {
    extractTransactionESDTData();
  }, [transactions]);
  return {
    parsedTransactionsByDataField,
    getTxInfoByDataField,
    allTransactions
  };
}

// src/hooks/transactions/useSignMultipleTransactions.tsx
var verifiedAddresses = {};
function useSignMultipleTransactions({
  transactionsToSign,
  egldLabel,
  address,
  verifyReceiverScam = true,
  onCancel,
  onSignTransaction,
  onTransactionsSignError,
  onTransactionsSignSuccess
}) {
  var _a, _b, _c;
  const [currentStep, setCurrentStep] = useState3(0);
  const [signedTransactions, setSignedTransactions] = useState3();
  const [currentTransaction, setCurrentTransaction] = useState3(null);
  const [waitingForDevice, setWaitingForDevice] = useState3(false);
  const isLedger = getIsProviderEqualTo("ledger" /* ledger */);
  const { getTxInfoByDataField, allTransactions } = useParseMultiEsdtTransferData({ transactions: transactionsToSign });
  const isLastTransaction = currentStep === allTransactions.length - 1;
  useEffect4(() => {
    extractTransactionsInfo();
  }, [currentStep, allTransactions]);
  function extractTransactionsInfo() {
    return __async(this, null, function* () {
      var _a2;
      const tx = allTransactions[currentStep];
      if (tx == null) {
        return;
      }
      const { transaction, multiTxData } = tx;
      const dataField = transaction.getData().toString();
      const transactionTokenInfo = getTxInfoByDataField(transaction.getData().toString(), multiTxData);
      const { tokenId } = transactionTokenInfo;
      const receiver = transaction.getReceiver().toString();
      const notSender = address !== receiver;
      const verified = receiver in verifiedAddresses;
      if (notSender && !verified && verifyReceiverScam) {
        const data = yield getScamAddressData(receiver);
        verifiedAddresses = __spreadValues(__spreadValues({}, verifiedAddresses), data.scamInfo ? { [receiver]: data.scamInfo } : {});
      }
      const isTokenTransaction = Boolean(tokenId && isTokenTransfer({ tokenId, erdLabel: egldLabel }));
      setCurrentTransaction({
        transaction,
        receiverScamInfo: ((_a2 = verifiedAddresses[receiver]) == null ? void 0 : _a2.info) || null,
        transactionTokenInfo,
        isTokenTransaction,
        dataField
      });
    });
  }
  function reset() {
    setCurrentStep(0);
    setSignedTransactions(void 0);
    setWaitingForDevice(false);
  }
  function sign() {
    return __async(this, null, function* () {
      try {
        if (currentTransaction == null) {
          return;
        }
        setWaitingForDevice(isLedger);
        const signedTx = yield onSignTransaction(currentTransaction.transaction);
        const newSignedTx = { [currentStep]: signedTx };
        const newSignedTransactions = signedTransactions ? __spreadValues(__spreadValues({}, signedTransactions), newSignedTx) : newSignedTx;
        setSignedTransactions(newSignedTransactions);
        if (!isLastTransaction) {
          setCurrentStep((exising) => exising + 1);
          setWaitingForDevice(false);
        } else if (newSignedTransactions) {
          onTransactionsSignSuccess(Object.values(newSignedTransactions));
          reset();
        }
      } catch (err) {
        console.error(err, "sign error");
        const { message } = err;
        const errorMessage = isLedger ? getLedgerErrorCodes(err).errorMessage : null;
        reset();
        onTransactionsSignError(errorMessage != null ? errorMessage : message);
      }
    });
  }
  function signTx() {
    try {
      if (currentTransaction == null) {
        return;
      }
      const signature = currentTransaction.transaction.getSignature();
      if (signature.hex()) {
        if (!isLastTransaction) {
          setCurrentStep((exising) => exising + 1);
        }
      } else {
        sign();
      }
    } catch (e) {
      sign();
    }
  }
  const isFirst = currentStep === 0;
  function handleAbort() {
    if (isFirst) {
      onCancel();
    } else {
      setCurrentStep((existing) => existing - 1);
    }
  }
  const continueWithoutSigning = ((_a = currentTransaction == null ? void 0 : currentTransaction.transactionTokenInfo) == null ? void 0 : _a.type) && ((_b = currentTransaction == null ? void 0 : currentTransaction.transactionTokenInfo) == null ? void 0 : _b.multiTxData) && !(currentTransaction == null ? void 0 : currentTransaction.dataField.endsWith((_c = currentTransaction == null ? void 0 : currentTransaction.transactionTokenInfo) == null ? void 0 : _c.multiTxData));
  function handleSignTransaction() {
    if (continueWithoutSigning) {
      setCurrentStep((exising) => exising + 1);
    } else {
      signTx();
    }
  }
  function onNext() {
    setCurrentStep((current) => {
      const nextStep = current + 1;
      if (nextStep > (allTransactions == null ? void 0 : allTransactions.length)) {
        return current;
      }
      return nextStep;
    });
  }
  function onPrev() {
    setCurrentStep((current) => {
      const nextStep = current - 1;
      if (nextStep < 0) {
        return current;
      }
      return nextStep;
    });
  }
  return {
    allTransactions,
    onSignTransaction: handleSignTransaction,
    onNext,
    onPrev,
    waitingForDevice,
    onAbort: handleAbort,
    isLastTransaction,
    currentStep,
    signedTransactions,
    currentTransaction
  };
}
var useSignMultipleTransactions_default = useSignMultipleTransactions;

// src/hooks/transactions/useSignTransactionsWithDevice.tsx
function useSignTransactionsWithDevice({
  onCancel,
  verifyReceiverScam = true
}) {
  const transactionsToSign = useSelector(transactionsToSignSelector);
  const egldLabel = useSelector(egldLabelSelector);
  const {
    account: { address }
  } = useGetAccountInfo();
  const provider = getAccountProvider();
  const dispatch = useDispatch2();
  const {
    transactions,
    sessionId,
    callbackRoute,
    customTransactionInformation
  } = transactionsToSign || {};
  function handleTransactionSignError(errorMessage) {
    dispatch(setSignTransactionsError(errorMessage));
  }
  function handleTransactionsSignSuccess(newSignedTransactions) {
    if (sessionId) {
      dispatch(moveTransactionsToSignedState({
        sessionId,
        status: "signed" /* signed */,
        transactions: newSignedTransactions.map((tx) => parseTransactionAfterSigning(tx))
      }));
      if (callbackRoute != null && (customTransactionInformation == null ? void 0 : customTransactionInformation.redirectAfterSign) && !window.location.pathname.includes(callbackRoute)) {
        safeRedirect(callbackRoute);
      }
    }
  }
  function handleCancel() {
    onCancel();
    dispatch(clearAllTransactionsToSign());
    if (callbackRoute != null && (customTransactionInformation == null ? void 0 : customTransactionInformation.redirectAfterSign)) {
      safeRedirect(callbackRoute);
    }
  }
  function handleSignTransaction(transaction) {
    return __async(this, null, function* () {
      return yield provider.signTransaction(transaction);
    });
  }
  const signMultipleTxReturnValues = useSignMultipleTransactions_default({
    verifyReceiverScam,
    address,
    egldLabel,
    transactionsToSign: transactions,
    onCancel: handleCancel,
    onSignTransaction: handleSignTransaction,
    onTransactionsSignError: handleTransactionSignError,
    onTransactionsSignSuccess: handleTransactionsSignSuccess
  });
  return __spreadProps(__spreadValues({}, signMultipleTxReturnValues), { callbackRoute });
}

// src/hooks/transactions/useSignTransactionsWithLedger.tsx
init_shim();

// src/hooks/transactions/useGetSignTransactionsError.ts
init_shim();
var useGetSignTransactionsError = () => {
  return useSelector(signTransactionsErrorSelector);
};

// src/hooks/transactions/useCheckTransactionStatus/index.ts
init_shim();

// src/hooks/transactions/useCheckTransactionStatus/useCheckTransactionStatus.ts
init_shim();

// src/hooks/transactions/useGetPendingTransactions.ts
init_shim();
function useGetPendingTransactions() {
  const pendingTransactions = useSelector(pendingSignedTransactionsSelector);
  const pendingTransactionsArray = Object.entries(pendingTransactions);
  const hasPendingTransactions = (pendingTransactionsArray == null ? void 0 : pendingTransactionsArray.length) > 0;
  return {
    pendingTransactions,
    pendingTransactionsArray,
    hasPendingTransactions
  };
}

// src/hooks/transactions/useCheckTransactionStatus/checkBatch.ts
init_shim();

// src/hooks/transactions/useCheckTransactionStatus/getPendingTransactions.ts
init_shim();

// src/hooks/transactions/useCheckTransactionStatus/manageFailedTransactions.ts
init_shim();

// src/hooks/transactions/useCheckTransactionStatus/manageTimedOutTransactions.ts
init_shim();

// src/hooks/transactions/useTrackTransactionStatus.ts
init_shim();
import { useEffect as useEffect7 } from "react";

// src/services/index.tsx
init_shim();

// src/services/login/index.ts
init_shim();

// src/services/login/useExtensionLogin.ts
init_shim();
import { useState as useState4 } from "react";
import { ExtensionProvider as ExtensionProvider3 } from "@elrondnetwork/erdjs-extension-provider";
var useExtensionLogin = ({
  callbackRoute,
  token,
  redirectAfterLogin = false
}) => {
  const [error, setError] = useState4("");
  const [isLoading, setIsLoading] = useState4(false);
  const isLoggedIn = useSelector(isLoggedInSelector);
  const dispatch = useDispatch();
  function initiateLogin() {
    return __async(this, null, function* () {
      setIsLoading(true);
      const provider = ExtensionProvider3.getInstance();
      try {
        const isSuccessfullyInitialized = yield provider.init();
        if (!isSuccessfullyInitialized) {
          console.warn("Something went wrong trying to redirect to wallet login..");
          return;
        }
        const callbackUrl = encodeURIComponent(`${window.location.origin}${callbackRoute}`);
        const providerLoginData = __spreadValues({
          callbackUrl
        }, token && { token });
        yield provider.login(providerLoginData);
        setAccountProvider(provider);
        const { signature, address } = provider.account;
        if (signature) {
          dispatch(setTokenLogin({
            loginToken: String(token),
            signature
          }));
        }
        dispatch(loginAction({ address, loginMethod: "extension" /* extension */ }));
        optionalRedirect(callbackRoute, redirectAfterLogin);
      } catch (error2) {
        console.error("error loging in", error2);
        setError("error logging in" + error2.message);
      } finally {
        setIsLoading(false);
      }
    });
  }
  const loginFailed = Boolean(error);
  return [
    initiateLogin,
    {
      loginFailed,
      error,
      isLoading: isLoading && !loginFailed,
      isLoggedIn: isLoggedIn && !loginFailed
    }
  ];
};

// src/services/login/useWebWalletLogin.ts
init_shim();
import { useState as useState5 } from "react";
var useWebWalletLogin = ({
  callbackRoute,
  token
}) => {
  const [error, setError] = useState5("");
  const [isLoading, setIsLoading] = useState5(false);
  const isLoggedIn = useSelector(isLoggedInSelector);
  function initiateLogin() {
    return __async(this, null, function* () {
      try {
        setIsLoading(true);
        const appState = store.getState();
        const network = networkSelector(appState);
        const provider = newWalletProvider(network.walletAddress);
        const now = new Date();
        const expires = now.setMinutes(now.getMinutes() + 3) / 1e3;
        const walletLoginData = {
          data: {},
          expires
        };
        store.dispatch(setWalletLogin(walletLoginData));
        const callbackUrl = encodeURIComponent(`${window.location.origin}${callbackRoute}`);
        const loginData = __spreadValues({
          callbackUrl
        }, token && { token });
        yield provider.login(loginData);
      } catch (error2) {
        console.error(error2);
        setError("error logging in" + error2.message);
      } finally {
        setIsLoading(false);
      }
    });
  }
  const loginFailed = Boolean(error);
  return [
    initiateLogin,
    {
      error,
      loginFailed,
      isLoading: isLoading && !loginFailed,
      isLoggedIn: isLoggedIn && !loginFailed
    }
  ];
};

// src/services/login/useLedgerLogin.ts
init_shim();
import { useEffect as useEffect5, useState as useState6 } from "react";
import { HWProvider as HWProvider2 } from "@elrondnetwork/erdjs-hw-provider";
var failInitializeErrorText = "Could not initialise ledger app, make sure Elrond app is open";
var defaultAddressesPerPage = 10;
function useLedgerLogin({
  callbackRoute,
  token,
  addressesPerPage: addressesPerPage2 = defaultAddressesPerPage,
  redirectAfterLogin = false
}) {
  const ledgerAccount = useSelector(ledgerAccountSelector);
  const isLoggedIn = useSelector(isLoggedInSelector);
  const dispatch = useDispatch();
  const [error, setError] = useState6("");
  const [isLoading, setIsLoading] = useState6(false);
  const hwWalletP = new HWProvider2();
  const [startIndex, setStartIndex] = useState6(0);
  const [accounts, setAccounts] = useState6([]);
  const [version2, setVersion] = useState6("");
  const [contractDataEnabled, setContractDataEnabled] = useState6(false);
  const [selectedAddress, setSelectedAddress] = useState6(null);
  const [showAddressList, setShowAddressList] = useState6(false);
  function dispatchLoginActions({
    provider,
    address,
    index,
    signature
  }) {
    setAccountProvider(provider);
    dispatch(setLedgerLogin({ index, loginType: "ledger" /* ledger */ }));
    if (signature) {
      dispatch(setTokenLogin({
        loginToken: String(token),
        signature
      }));
    }
    dispatch(loginAction({ address, loginMethod: "ledger" /* ledger */ }));
    optionalRedirect(callbackRoute, redirectAfterLogin);
  }
  const onLoginFailed = (err, customMessage) => {
    const { errorMessage } = getLedgerErrorCodes(err);
    if (errorMessage) {
      setError(errorMessage + customMessage);
    }
    setIsLoading(false);
    console.warn(err);
    dispatch(setLedgerAccount(null));
  };
  function loginUser(hwWalletProvider) {
    return __async(this, null, function* () {
      if (selectedAddress == null) {
        return false;
      }
      const { index } = selectedAddress;
      if (token) {
        try {
          const loginInfo = yield hwWalletProvider.tokenLogin({
            token: import_buffer.Buffer.from(`${token}{}`),
            addressIndex: index
          });
          dispatchLoginActions({
            address: loginInfo.address,
            provider: hwWalletProvider,
            index,
            signature: loginInfo.signature.hex()
          });
        } catch (err) {
          onLoginFailed(err, ". Update Elrond App to continue.");
        }
      } else {
        try {
          const address = yield hwWalletProvider.login({ addressIndex: index });
          dispatchLoginActions({
            address,
            provider: hwWalletProvider,
            index
          });
        } catch (err) {
          onLoginFailed(err);
          return false;
        }
      }
      return true;
    });
  }
  function onConfirmSelectedAddress() {
    return __async(this, null, function* () {
      try {
        setIsLoading(true);
        if (selectedAddress == null) {
          return false;
        }
        if (ledgerAccount) {
          dispatch(updateLedgerAccount(selectedAddress));
        } else {
          dispatch(setLedgerAccount(__spreadProps(__spreadValues({}, selectedAddress), {
            version: version2,
            hasContractDataEnabled: contractDataEnabled
          })));
        }
        const hwWalletProvider = new HWProvider2();
        const initialized = yield hwWalletProvider.init();
        if (!initialized) {
          setError(failInitializeErrorText);
          console.warn(failInitializeErrorText);
          return false;
        }
        setIsLoading(false);
        yield loginUser(hwWalletProvider);
      } catch (err) {
        const { errorMessage } = getLedgerErrorCodes(err);
        if (errorMessage) {
          setError(errorMessage);
        }
        console.warn(failInitializeErrorText, err);
      } finally {
        setIsLoading(false);
      }
      setShowAddressList(false);
      return true;
    });
  }
  function fetchAccounts() {
    return __async(this, null, function* () {
      try {
        setIsLoading(true);
        const initialized = yield hwWalletP.init();
        if (!initialized) {
          setError(failInitializeErrorText);
          console.warn(failInitializeErrorText);
          setIsLoading(false);
          return;
        }
        const accounts2 = yield hwWalletP.getAccounts(startIndex, addressesPerPage2);
        const ledgerData = yield getLedgerConfiguration(hwWalletP);
        setVersion(ledgerData.version);
        setContractDataEnabled(ledgerData.dataEnabled);
        setAccounts(accounts2);
        setIsLoading(false);
      } catch (err) {
        const { errorMessage, defaultErrorMessage } = getLedgerErrorCodes(err);
        setError(errorMessage != null ? errorMessage : defaultErrorMessage);
        console.error("error", err);
        setIsLoading(false);
      }
    });
  }
  function onStartLogin() {
    return __async(this, null, function* () {
      setError("");
      try {
        setIsLoading(true);
        if (ledgerAccount != null) {
          const hwWalletP2 = new HWProvider2();
          const initialized = yield hwWalletP2.init();
          if (!initialized || !selectedAddress) {
            console.warn(failInitializeErrorText);
            return;
          }
          const address = yield hwWalletP2.login({
            addressIndex: selectedAddress.index.valueOf()
          });
          setAccountProvider(hwWalletP2);
          dispatch(loginAction({ address, loginMethod: "ledger" /* ledger */ }));
          optionalRedirect(callbackRoute, redirectAfterLogin);
        } else {
          if ((accounts == null ? void 0 : accounts.length) > 0) {
            setShowAddressList(true);
          } else {
            yield fetchAccounts();
            setShowAddressList(true);
          }
        }
      } catch (error2) {
        console.error("error ", error2);
        const { defaultErrorMessage } = getLedgerErrorCodes();
        setError(defaultErrorMessage);
      } finally {
        setIsLoading(false);
      }
    });
  }
  function onSelectAddress(newSelectedAddress) {
    setSelectedAddress(newSelectedAddress);
  }
  function onGoToNextPage() {
    setSelectedAddress(null);
    setStartIndex((current) => current + 1);
  }
  function onGoToPrevPage() {
    setSelectedAddress(null);
    setStartIndex((current) => current === 0 ? 0 : current - 1);
  }
  useEffect5(() => {
    fetchAccounts();
  }, [startIndex]);
  const loginFailed = Boolean(error);
  return [
    onStartLogin,
    {
      loginFailed,
      isLoggedIn: isLoggedIn && !loginFailed,
      error,
      isLoading: isLoading && !loginFailed
    },
    {
      accounts,
      showAddressList,
      startIndex,
      selectedAddress,
      version: version2,
      contractDataEnabled,
      onGoToPrevPage,
      onGoToNextPage,
      onSelectAddress,
      onConfirmSelectedAddress
    }
  ];
}

// src/services/login/useWalletConnectLogin.ts
init_shim();
import { useEffect as useEffect6, useRef as useRef3, useState as useState7 } from "react";
import { WalletConnectProvider as WalletConnectProvider2 } from "@elrondnetwork/erdjs-wallet-connect-provider";
var useWalletConnectLogin = ({
  callbackRoute,
  logoutRoute,
  token,
  redirectAfterLogin = false
}) => {
  const dispatch = useDispatch();
  const heartbeatInterval = 15e3;
  const [error, setError] = useState7("");
  const [wcUri, setWcUri] = useState7("");
  const provider = getAccountProvider();
  const walletConnectBridgeAddress = useSelector(walletConnectBridgeAddressSelector);
  const walletConnectDeepLink = useSelector(walletConnectDeepLinkSelector);
  const isLoggedIn = useSelector(isLoggedInSelector);
  const providerRef = useRef3(provider);
  let heartbeatDisconnectInterval;
  const hasWcUri = Boolean(wcUri);
  const isLoading = !hasWcUri;
  const uriDeepLink = hasWcUri ? `${walletConnectDeepLink}?wallet-connect=${encodeURIComponent(wcUri)}` : null;
  useEffect6(() => {
    handleHeartbeat();
    const interval = setInterval(() => {
      handleHeartbeat();
    }, heartbeatInterval);
    return () => clearInterval(interval);
  }, [provider]);
  useUpdateEffect(() => {
    generateWcUri();
  }, [token]);
  useUpdateEffect(() => {
    providerRef.current = provider;
  }, [provider]);
  const handleOnLogout = () => {
    logout(logoutRoute);
  };
  function handleHeartbeat() {
    return __async(this, null, function* () {
      var _a, _b;
      const isProviderConnected = Boolean((_b = (_a = providerRef.current) == null ? void 0 : _a.walletConnector) == null ? void 0 : _b.connected);
      if (!isProviderConnected) {
        return;
      }
      const customMessage = {
        method: "heartbeat",
        params: {}
      };
      try {
        yield providerRef.current.sendCustomMessage(customMessage);
      } catch (error2) {
        console.error("Connection lost", error2);
        handleOnLogout();
      }
    });
  }
  function handleOnLogin() {
    return __async(this, null, function* () {
      try {
        const provider2 = providerRef.current;
        if (isLoggedIn) {
          return;
        }
        if (provider2 == null) {
          return;
        }
        const address = yield provider2.getAddress();
        const signature = yield provider2.getSignature();
        const hasSignature = Boolean(signature);
        const loginActionData = {
          address,
          loginMethod: "walletconnect" /* walletconnect */
        };
        const loginData = {
          logoutRoute,
          loginType: "walletConnect",
          callbackRoute
        };
        if (hasSignature) {
          dispatch(setWalletConnectLogin(loginData));
          dispatch(setTokenLoginSignature(signature));
        } else {
          dispatch(setWalletConnectLogin(loginData));
        }
        dispatch(loginAction(loginActionData));
        provider2.walletConnector.on("heartbeat", () => {
          clearInterval(heartbeatDisconnectInterval);
          heartbeatDisconnectInterval = setInterval(() => {
            console.log("Maiar Wallet Connection Lost");
            handleOnLogout();
            clearInterval(heartbeatDisconnectInterval);
          }, 15e4);
        });
        optionalRedirect(callbackRoute, redirectAfterLogin);
      } catch (err) {
        setError("Invalid address");
        console.error(err);
      }
    });
  }
  function initiateLogin(loginProvider = true) {
    return __async(this, null, function* () {
      var _a, _b;
      const shouldGenerateWcUri = loginProvider && !wcUri;
      if (!walletConnectBridgeAddress || ((_b = (_a = providerRef == null ? void 0 : providerRef.current) == null ? void 0 : _a.isInitialized) == null ? void 0 : _b.call(_a)) && !shouldGenerateWcUri) {
        return;
      }
      const providerHandlers = {
        onClientLogin: handleOnLogin,
        onClientLogout: handleOnLogout
      };
      const newProvider = new WalletConnectProvider2(walletConnectBridgeAddress, providerHandlers);
      yield newProvider.init();
      setAccountProvider(newProvider);
      providerRef.current = newProvider;
      if (loginProvider) {
        generateWcUri();
      }
    });
  }
  function generateWcUri() {
    return __async(this, null, function* () {
      var _a;
      if (!walletConnectBridgeAddress) {
        return;
      }
      const walletConnectUri = yield (_a = providerRef.current) == null ? void 0 : _a.login();
      const hasUri = Boolean(walletConnectUri);
      if (!hasUri) {
        return;
      }
      if (!token) {
        setWcUri(walletConnectUri);
        return;
      }
      const wcUriWithToken = `${walletConnectUri}&token=${token}`;
      setWcUri(wcUriWithToken);
      dispatch(setTokenLogin({ loginToken: token }));
    });
  }
  const loginFailed = Boolean(error);
  return [
    initiateLogin,
    {
      error,
      loginFailed,
      isLoading: isLoading && !loginFailed,
      isLoggedIn: isLoggedIn && !loginFailed
    },
    { uriDeepLink, walletConnectUri: wcUri }
  ];
};

// src/services/transactions/index.tsx
init_shim();

// src/services/transactions/clearTransactions.ts
init_shim();

// src/services/transactions/sendTransactions.ts
init_shim();

// src/services/transactions/signTransactions.tsx
init_shim();
import BigNumber8 from "bignumber.js";

// src/services/transactions/utils.ts
init_shim();
import BigNumber7 from "bignumber.js";

// src/services/transactions/transformAndSignTransactions.ts
init_shim();
import { Address as Address9 } from "@elrondnetwork/erdjs";
import BigNumber9 from "bignumber.js";

// src/hooks/transactions/useGetFailedTransactions.ts
init_shim();

// src/hooks/transactions/useGetSuccessfulTransactions.ts
init_shim();

// src/hooks/transactions/useGetActiveTransactionsStatus.ts
init_shim();

// src/hooks/account/index.ts
init_shim();

// src/hooks/account/useGetLoginInfo.ts
init_shim();
var useGetLoginInfo = () => {
  const loginInfo = useSelector(loginInfoSelector);
  const isLoggedIn = useSelector(isLoggedInSelector);
  return __spreadProps(__spreadValues({}, loginInfo), { isLoggedIn });
};

// src/hooks/account/useGetAccountProvider.ts
init_shim();
var useGetAccountProvider = () => {
  const provider = getAccountProvider();
  const providerType = getProviderType(provider);
  return { provider, providerType };
};

// src/hooks/useDebounce.ts
init_shim();
import { useState as useState8, useEffect as useEffect8 } from "react";

// src/optionalPackages/fortawesome-free-solid-svg-icons.ts
init_shim();
var fontawesomeFreeSolidIcons = {};
try {
  fontawesomeFreeSolidIcons = __require("@fortawesome/free-solid-svg-icons");
} catch (err) {
}
var fortawesome_free_solid_svg_icons_default = fontawesomeFreeSolidIcons;

// src/optionalPackages/react-fontawesome.ts
init_shim();
var ReactFontawesome = {};
try {
  ReactFontawesome = __require("@fortawesome/react-fontawesome");
} catch (err) {
}
var react_fontawesome_default = ReactFontawesome;

// src/UI/ExplorerLink/index.tsx
var ExplorerLink = ({
  page,
  text,
  className
}) => {
  const {
    network: { explorerAddress }
  } = useGetNetworkConfig();
  return /* @__PURE__ */ React4.createElement("a", __spreadProps(__spreadValues({
    href: `${explorerAddress}${page}`
  }, {
    target: "_blank"
  }), {
    className: `link-style ${className}`
  }), text ? /* @__PURE__ */ React4.createElement(React4.Fragment, null, text) : /* @__PURE__ */ React4.createElement(react_fontawesome_default.FontAwesomeIcon, {
    icon: fortawesome_free_solid_svg_icons_default.faSearch,
    className: "text-secondary"
  }));
};
var ExplorerLink_default = ExplorerLink;

// src/UI/extension/LoginButton/index.tsx
init_shim();
import React5 from "react";
var ExtensionLoginButton = ({
  token,
  className = "extension-login",
  children,
  callbackRoute,
  buttonClassName,
  loginButtonText = "Maiar DeFi Wallet",
  redirectAfterLogin = false,
  shouldRenderDefaultCss = true
}) => {
  const [onInitiateLogin] = useExtensionLogin({
    callbackRoute,
    token,
    redirectAfterLogin
  });
  const isFirefox = navigator.userAgent.indexOf("Firefox") != -1;
  const classes = getGeneratedClasses(className, shouldRenderDefaultCss, {
    wrapper: `btn btn-primary px-sm-4 m-1 mx-sm-3 ${buttonClassName != null ? buttonClassName : ""}`,
    loginText: "text-left",
    noExtensionButtonWrapper: "btn btn-unlock d-inline-block",
    noExtensionButtonContent: "d-flex justify-content-between align-items-center",
    noExtensionButtonTitle: "title",
    noExtensionButtonIcon: ""
  });
  const handleLogin = () => {
    onInitiateLogin();
  };
  return !window.elrondWallet ? /* @__PURE__ */ React5.createElement("a", {
    rel: "noreferrer",
    href: isFirefox ? "https://addons.mozilla.org/en-US/firefox/addon/maiar-defi-wallet/" : "https://chrome.google.com/webstore/detail/dngmlblcodfobpdpecaadgfbcggfjfnm?authuser=0&hl=en",
    target: "_blank",
    className: classes.noExtensionButtonWrapper
  }, children || /* @__PURE__ */ React5.createElement("div", {
    className: classes.noExtensionButtonContent
  }, /* @__PURE__ */ React5.createElement("div", {
    className: classes.noExtensionButtonTitle
  }, "Maiar DeFi Wallet"), /* @__PURE__ */ React5.createElement(react_fontawesome_default.FontAwesomeIcon, {
    className: classes.noExtensionButtonIcon,
    icon: fortawesome_free_solid_svg_icons_default.faArrowRight
  }))) : /* @__PURE__ */ React5.createElement("button", {
    onClick: handleLogin,
    className: classes.wrapper
  }, children || /* @__PURE__ */ React5.createElement("span", {
    className: classes.loginText
  }, loginButtonText));
};
var LoginButton_default = ExtensionLoginButton;

// src/UI/ledger/LoginButton/index.tsx
init_shim();
import React14 from "react";

// src/UI/ledger/LoginModal/index.tsx
init_shim();
import React13 from "react";

// src/UI/ModalContainer/index.tsx
init_shim();
import React6 from "react";

// src/optionalPackages/react-bootstrap.tsx
init_shim();
import * as RB from "react-bootstrap";
var react_bootstrap_default = RB;

// src/UI/ModalContainer/index.tsx
var ModalContainer = ({
  children,
  noSpacer,
  className,
  title,
  onClose
}) => {
  return /* @__PURE__ */ React6.createElement(react_bootstrap_default.Modal, {
    show: true,
    backdrop: "static",
    onHide: onClose,
    className: `modal-container ${className ? className : ""}`,
    animation: false,
    centered: true
  }, /* @__PURE__ */ React6.createElement("div", {
    className: "modal-card card w-100"
  }, /* @__PURE__ */ React6.createElement("div", {
    className: "card-title h5 mb-0"
  }, /* @__PURE__ */ React6.createElement("div", {
    className: "d-flex justify-content-between align-items-center pt-spacer px-spacer mb-0"
  }, /* @__PURE__ */ React6.createElement("div", {
    className: "px-3"
  }, title), /* @__PURE__ */ React6.createElement("button", {
    type: "button",
    className: "btn btn-light px-3 py-2",
    onClick: onClose
  }, /* @__PURE__ */ React6.createElement(react_fontawesome_default.FontAwesomeIcon, {
    size: "lg",
    icon: fortawesome_free_solid_svg_icons_default.faTimes
  })))), /* @__PURE__ */ React6.createElement("div", {
    className: `modal-card-body text-center ${noSpacer ? "p-0" : "p-spacer"}`
  }, children)));
};
var ModalContainer_default = ModalContainer;

// src/UI/PageState/index.tsx
init_shim();
import React7 from "react";
import classNames from "classnames";
var PageState = ({
  icon,
  title,
  action,
  iconClass,
  dataTestId,
  description,
  iconBgClass,
  iconSize = "5x",
  className = "page-state",
  shouldRenderDefaultCss = true
}) => {
  const generatedClasses = getGeneratedClasses(className, shouldRenderDefaultCss, {
    wrapper: "state m-auto p-4 text-center",
    iconContainer: classNames("icon-state mx-auto", {
      [`${iconBgClass}`]: Boolean(iconBgClass)
    }),
    iconClass: classNames(iconClass != null && iconClass),
    title: "h4 my-4",
    description: "mb-3"
  });
  return /* @__PURE__ */ React7.createElement("div", {
    className: generatedClasses.wrapper,
    "data-testid": dataTestId
  }, icon && /* @__PURE__ */ React7.createElement("span", {
    className: generatedClasses.iconContainer
  }, /* @__PURE__ */ React7.createElement(react_fontawesome_default.FontAwesomeIcon, {
    icon,
    className: generatedClasses.iconClass,
    size: iconSize
  })), title && /* @__PURE__ */ React7.createElement("p", {
    className: generatedClasses.title
  }, title), description && /* @__PURE__ */ React7.createElement("div", {
    className: generatedClasses.description
  }, description), action && /* @__PURE__ */ React7.createElement(React7.Fragment, null, action));
};
var PageState_default = PageState;

// src/UI/ledger/LoginModal/AddressTable.tsx
init_shim();
import React9 from "react";

// src/UI/ledger/LoginModal/AddressRow.tsx
init_shim();
import React8 from "react";
var trimHash = (hash, keep = 10) => {
  const start = hash.substring(0, keep);
  const end = hash.substring(hash.length - keep);
  return `${start}...${end}`;
};
var noBalance = "...";
var AddressRow = ({
  address,
  index,
  selectedAddress,
  onSelectAddress
}) => {
  const [balance, setBalance] = React8.useState(noBalance);
  const handleChange = (e) => {
    const { checked } = e.target;
    if (checked) {
      onSelectAddress({ address, index });
    }
  };
  const fetchBalance = () => __async(void 0, null, function* () {
    try {
      const balance2 = yield getAccountBalance(address);
      setBalance(balance2);
    } catch (err) {
      console.error("error fetching balance", err, balance);
    }
  });
  React8.useEffect(() => {
    fetchBalance();
  }, []);
  return /* @__PURE__ */ React8.createElement("tr", null, /* @__PURE__ */ React8.createElement("td", {
    className: "text-left"
  }, /* @__PURE__ */ React8.createElement("div", {
    className: "d-flex align-items-start text-left form-check"
  }, /* @__PURE__ */ React8.createElement("input", {
    type: "radio",
    id: `check_${index}`,
    "data-testid": `check_${index}`,
    onChange: handleChange,
    role: "button",
    checked: selectedAddress === address,
    className: "form-check-input mr-1"
  }), /* @__PURE__ */ React8.createElement("label", {
    htmlFor: `check_${index}`,
    role: "button",
    "data-testid": `label_${index}`,
    className: "form-check-label text-nowrap trim-size-xl m-0"
  }, /* @__PURE__ */ React8.createElement("div", {
    className: "d-flex align-items-center text-nowrap trim"
  }, /* @__PURE__ */ React8.createElement("span", null, trimHash(address)))))), /* @__PURE__ */ React8.createElement("td", {
    className: "text-left"
  }, /* @__PURE__ */ React8.createElement(Denominate_default, {
    value: balance
  })), /* @__PURE__ */ React8.createElement("td", {
    className: "text-left"
  }, index));
};
var AddressRow_default = AddressRow;

// src/UI/ledger/LoginModal/AddressTable.tsx
var ledgerWaitingText = "Waiting for device";
var addressesPerPage = 10;
var AddressTable = ({
  loading,
  accounts,
  startIndex,
  selectedAddress,
  onGoToPrevPage,
  onGoToNextPage,
  onConfirmSelectedAddress,
  onSelectAddress,
  shouldRenderDefaultCss = true,
  className = "ledger-address-table"
}) => {
  const classes = getGeneratedClasses(className, shouldRenderDefaultCss, {
    wrapper: "card my-4 text-center border-0",
    cardBody: "card-body p-4 mx-lg-4",
    tableWrapper: "table-responsive",
    tableContent: "table m-0 border-bottom",
    tableHeader: "py-2 text-semibold border-bottom",
    tableHeaderText: "text-left border-0",
    buttonsWrapper: "d-flex justify-content-center pager mt-2",
    arrowButton: "btn btn-link mx-2",
    confirmButton: "btn btn-primary px-4 mt-4"
  });
  switch (true) {
    case loading:
      return /* @__PURE__ */ React9.createElement(PageState_default, {
        className,
        icon: fortawesome_free_solid_svg_icons_default.faCircleNotch,
        iconClass: "fa-spin text-primary",
        title: ledgerWaitingText
      });
    default:
      return /* @__PURE__ */ React9.createElement(React9.Fragment, null, /* @__PURE__ */ React9.createElement("div", {
        className: "m-auto"
      }, /* @__PURE__ */ React9.createElement("div", {
        className: classes.wrapper
      }, /* @__PURE__ */ React9.createElement("div", {
        className: classes.cardBody
      }, /* @__PURE__ */ React9.createElement("div", {
        className: classes.tableWrapper,
        "data-testid": "ledgerAddresses"
      }, /* @__PURE__ */ React9.createElement("table", {
        className: classes.tableContent
      }, /* @__PURE__ */ React9.createElement("thead", {
        className: classes.tableHeader
      }, /* @__PURE__ */ React9.createElement("tr", null, /* @__PURE__ */ React9.createElement("th", {
        className: classes.tableHeaderText
      }, "Address"), /* @__PURE__ */ React9.createElement("th", {
        className: classes.tableHeaderText
      }, "Balance"), /* @__PURE__ */ React9.createElement("th", {
        className: classes.tableHeaderText
      }, "#"))), /* @__PURE__ */ React9.createElement("tbody", {
        "data-testid": "addressesTable"
      }, accounts.map((address, index) => {
        const key = index + startIndex * addressesPerPage;
        return /* @__PURE__ */ React9.createElement(AddressRow_default, {
          key,
          address,
          index: key,
          selectedAddress,
          onSelectAddress
        });
      })))), /* @__PURE__ */ React9.createElement("div", {
        className: classes.buttonsWrapper
      }, /* @__PURE__ */ React9.createElement("button", {
        type: "button",
        className: classes.arrowButton,
        onClick: onGoToPrevPage,
        "data-testid": "prevBtn",
        disabled: startIndex === 0
      }, /* @__PURE__ */ React9.createElement(react_fontawesome_default.FontAwesomeIcon, {
        size: "sm",
        icon: fortawesome_free_solid_svg_icons_default.faChevronLeft
      }), " ", "Prev"), /* @__PURE__ */ React9.createElement("button", {
        type: "button",
        className: classes.arrowButton,
        onClick: onGoToNextPage,
        "data-testid": "nextBtn"
      }, "Next", " ", /* @__PURE__ */ React9.createElement(react_fontawesome_default.FontAwesomeIcon, {
        size: "sm",
        icon: fortawesome_free_solid_svg_icons_default.faChevronRight
      }))), /* @__PURE__ */ React9.createElement("button", {
        className: classes.confirmButton,
        disabled: selectedAddress === "",
        onClick: onConfirmSelectedAddress,
        "data-testid": "confirmBtn"
      }, "Confirm")))));
  }
};
var AddressTable_default = AddressTable;

// src/UI/ledger/LoginModal/ConfirmAddress.tsx
init_shim();
import React10 from "react";
var ConfirmAddress = ({
  token,
  noBorder
}) => {
  const { ledgerAccount } = useGetAccountInfo();
  return /* @__PURE__ */ React10.createElement("div", {
    className: "m-auto"
  }, /* @__PURE__ */ React10.createElement("div", {
    className: `card my-4 text-center ${noBorder ? "border-0" : ""}`
  }, /* @__PURE__ */ React10.createElement("div", {
    className: "card-body p-4 mx-lg-4"
  }, /* @__PURE__ */ React10.createElement("h4", {
    className: "mb-4"
  }, "Confirm Ledger Address"), /* @__PURE__ */ React10.createElement("p", null, "For security, please confirm that your address: "), /* @__PURE__ */ React10.createElement("p", {
    className: "lead border rounded p-2"
  }, ledgerAccount ? ledgerAccount.address : ""), token && /* @__PURE__ */ React10.createElement(React10.Fragment, null, /* @__PURE__ */ React10.createElement("p", null, "and Auth Token"), /* @__PURE__ */ React10.createElement("p", {
    className: "lead border rounded p-2"
  }, `${token}{}`)), /* @__PURE__ */ React10.createElement("p", {
    className: "m-0"
  }, token ? "are the one shown on your Ledger device screen now." : "is the one shown on your Ledger device screen now."), /* @__PURE__ */ React10.createElement("p", null, "Select Approve on your device to confirm."), /* @__PURE__ */ React10.createElement("p", null, "Or, if it does not match, close this page and", " ", /* @__PURE__ */ React10.createElement("a", __spreadValues({
    href: "https://help.elrond.com/en/"
  }, {
    target: "_blank"
  }), "contact support"), "."))));
};
var ConfirmAddress_default = ConfirmAddress;

// src/UI/ledger/LoginModal/LedgerConnect.tsx
init_shim();
import React12 from "react";

// src/UI/ledger/assets/ledger-nano.svg
init_shim();
import * as React11 from "react";
var SvgLedgerNano = (props) => /* @__PURE__ */ React11.createElement("svg", __spreadValues({
  id: "ledger-svg",
  xmlns: "http://www.w3.org/2000/svg",
  xmlnsXlink: "http://www.w3.org/1999/xlink",
  width: 110,
  height: 55,
  viewBox: "0 0 260 129"
}, props), /* @__PURE__ */ React11.createElement("defs", null, /* @__PURE__ */ React11.createElement("linearGradient", {
  id: "a",
  x1: "50%",
  x2: "50%",
  y1: "0%",
  y2: "100%"
}, /* @__PURE__ */ React11.createElement("stop", {
  id: "gradient-start-color",
  offset: "0%"
}), /* @__PURE__ */ React11.createElement("stop", {
  id: "gradient-stop-color",
  offset: "100%",
  stopColor: "#FFF"
})), /* @__PURE__ */ React11.createElement("path", {
  id: "b",
  d: "M91 0h34a4 4 0 0 1 4 4v108.144c0 11.519-9.337 20.856-20.856 20.856h-.288C96.337 133 87 123.663 87 112.144V4a4 4 0 0 1 4-4z"
})), /* @__PURE__ */ React11.createElement("g", {
  fill: "none",
  fillRule: "evenodd"
}, /* @__PURE__ */ React11.createElement("path", {
  className: "ledger-stroke",
  stroke: "#1D2027",
  strokeWidth: 2,
  d: "M127.856 31.44a1 1 0 0 1-1 1H100.63a5 5 0 0 1-5-5v-8.486a5 5 0 0 1 5-5h26.225a1 1 0 0 1 1 1v16.485z"
}), /* @__PURE__ */ React11.createElement("path", {
  className: "ledger-stroke",
  stroke: "#142533",
  strokeWidth: 2,
  d: "M95.247 26.231H84.318v-6.435h10.93v6.435z"
}), /* @__PURE__ */ React11.createElement("path", {
  className: "ledger-stroke",
  stroke: "#1D2027",
  strokeWidth: 2,
  d: "M127.923 28.726V17.471l6.977.083a1 1 0 0 1 .988 1V27.82a1 1 0 0 1-1.012.988l-6.953-.083z"
}), /* @__PURE__ */ React11.createElement("path", {
  fill: "url(#a)",
  d: "M6.836 53.925h1.616v82.65H6.836v-82.65zm5.657 0h1.616v82.65h-1.616v-82.65z",
  transform: "matrix(0 -1 -1 0 137.5 33.44)"
}), /* @__PURE__ */ React11.createElement("g", {
  transform: "rotate(-90 128.59 1.975)"
}, /* @__PURE__ */ React11.createElement("rect", {
  className: "ledger-fill",
  width: 4.492,
  height: 17.12,
  x: 125.336,
  y: 15.505,
  fill: "#142533",
  rx: 2
}), /* @__PURE__ */ React11.createElement("rect", {
  className: "ledger-fill",
  width: 4.492,
  height: 17.12,
  x: 125.336,
  y: 70.094,
  fill: "#142533",
  rx: 2
}), /* @__PURE__ */ React11.createElement("use", {
  className: "ledger-fill-inner-bg",
  fill: "#FFF",
  xlinkHref: "#b"
}), /* @__PURE__ */ React11.createElement("path", {
  className: "ledger-stroke",
  fill: "#6490F1",
  fillOpacity: 0.15,
  stroke: "#142533",
  strokeLinejoin: "square",
  strokeWidth: 2,
  d: "M91 1a3 3 0 0 0-3 3v108.144C88 123.11 96.89 132 107.856 132h.288C119.11 132 128 123.11 128 112.144V4a3 3 0 0 0-3-3H91z"
}), /* @__PURE__ */ React11.createElement("rect", {
  className: "ledger-fill-outer-bg",
  width: 21,
  height: 62,
  x: 97.5,
  y: 21.5,
  fill: "#FFF",
  stroke: "#6490F1",
  rx: 1.6
}), /* @__PURE__ */ React11.createElement("path", {
  fill: "#6490F1",
  d: "M105.5 35h5a.5.5 0 0 1 .5.5v34a.5.5 0 0 1-.5.5h-5a.5.5 0 0 1-.5-.5v-34a.5.5 0 0 1 .5-.5zm1.238 3.042l.774.512v.013l-.774.505.341.466.722-.577h.013l.243.899.551-.177-.328-.88.932.053v-.597l-.932.046.328-.873-.551-.17-.243.892h-.013l-.722-.584-.34.472zm0 3.908l.774.512v.013l-.774.505.341.466.722-.578h.013l.243.9.551-.178-.328-.88.932.053v-.597l-.932.046.328-.872-.551-.17-.243.891h-.013l-.722-.584-.34.473zm0 3.907l.774.512v.013l-.774.505.341.466.722-.577h.013l.243.899.551-.178-.328-.879.932.053v-.597l-.932.046.328-.873-.551-.17-.243.892h-.013l-.722-.584-.34.472zm0 3.908l.774.511v.014l-.774.505.341.466.722-.578h.013l.243.899.551-.177-.328-.88.932.053v-.597l-.932.046.328-.872-.551-.171-.243.892h-.013l-.722-.584-.34.473zm0 3.907l.774.512v.013l-.774.505.341.466.722-.577h.013l.243.898.551-.177-.328-.879.932.053v-.597l-.932.046.328-.873-.551-.17-.243.892h-.013l-.722-.584-.34.472zm0 3.908l.774.511v.013l-.774.506.341.465.722-.577h.013l.243.899.551-.177-.328-.88.932.053v-.597l-.932.046.328-.873-.551-.17-.243.892h-.013l-.722-.584-.34.473zm0 3.907l.774.512v.013l-.774.505.341.466.722-.578h.013l.243.9.551-.178-.328-.879.932.052v-.597l-.932.046.328-.872-.551-.17-.243.891h-.013l-.722-.583-.34.472zm0 3.907l.774.512v.013l-.774.505.341.466.722-.577h.013l.243.899.551-.177-.328-.88.932.053v-.597l-.932.046.328-.873-.551-.17-.243.892h-.013l-.722-.584-.34.472z"
}), /* @__PURE__ */ React11.createElement("path", {
  className: "ledger-stroke ledger-fill-outer-bg",
  fill: "#FFF",
  stroke: "#142533",
  strokeWidth: 2,
  d: "M123.166 125.105c7.049-8.4 5.953-20.925-2.447-27.974l-90.824-76.21a3 3 0 0 0-4.227.37L4 47.115a3 3 0 0 0 .37 4.227l90.824 76.21c8.4 7.049 20.924 5.953 27.973-2.447z"
}), /* @__PURE__ */ React11.createElement("ellipse", {
  cx: 108.016,
  cy: 111.123,
  stroke: "#6490F1",
  rx: 10.57,
  ry: 10.644
}))));
var ledger_nano_default = SvgLedgerNano;

// src/UI/ledger/LoginModal/LedgerConnect.tsx
var LedgerConnect = ({
  onClick,
  error,
  connectPageContent
}) => {
  return /* @__PURE__ */ React12.createElement("div", {
    className: "m-auto login-container"
  }, /* @__PURE__ */ React12.createElement("div", {
    className: "card my-4 text-center border-0"
  }, /* @__PURE__ */ React12.createElement("div", {
    className: "card-body p-4 mx-lg-4"
  }, connectPageContent ? /* @__PURE__ */ React12.createElement(React12.Fragment, null, connectPageContent) : /* @__PURE__ */ React12.createElement(React12.Fragment, null, /* @__PURE__ */ React12.createElement(ledger_nano_default, {
    className: "mb-4"
  }), /* @__PURE__ */ React12.createElement("h4", {
    className: "mb-4"
  }, "Connect Ledger"), /* @__PURE__ */ React12.createElement("p", {
    className: "lead mb-4"
  }, "Unlock your device & open the Elrond App.")), /* @__PURE__ */ React12.createElement("div", null, error && /* @__PURE__ */ React12.createElement("p", {
    className: "text-danger d-flex justify-content-center align-items-center"
  }, error), /* @__PURE__ */ React12.createElement("button", {
    className: "btn btn-primary px-4",
    onClick,
    "data-testid": "connectBtn"
  }, "Connect Ledger")))));
};
var LedgerConnect_default = LedgerConnect;

// src/UI/ledger/LoginModal/index.tsx
var ledgerWaitingText2 = "Waiting for device";
function LedgerLoginContainer({
  callbackRoute,
  className = "login-modal-content",
  shouldRenderDefaultCss = true,
  wrapContentInsideModal = true,
  redirectAfterLogin,
  onClose,
  token
}) {
  const generatedClasses = getGeneratedClasses(className, shouldRenderDefaultCss, { spinner: "fa-spin text-primary" });
  const { ledgerAccount } = useGetAccountInfo();
  const [
    onStartLogin,
    { error, isLoading },
    {
      showAddressList,
      accounts,
      onGoToPrevPage,
      onGoToNextPage,
      onSelectAddress,
      onConfirmSelectedAddress,
      startIndex,
      selectedAddress
    }
  ] = useLedgerLogin({ callbackRoute, token, redirectAfterLogin });
  function getContent() {
    if (isLoading) {
      return /* @__PURE__ */ React13.createElement(PageState_default, {
        icon: fortawesome_free_solid_svg_icons_default.faCircleNotch,
        iconClass: generatedClasses.spinner,
        title: ledgerWaitingText2
      });
    }
    if (ledgerAccount != null && !error) {
      return /* @__PURE__ */ React13.createElement(ConfirmAddress_default, {
        token
      });
    }
    if (showAddressList && !error) {
      return /* @__PURE__ */ React13.createElement(AddressTable_default, {
        accounts,
        loading: isLoading,
        className,
        shouldRenderDefaultCss,
        onGoToNextPage,
        onGoToPrevPage,
        onSelectAddress,
        startIndex,
        selectedAddress: selectedAddress == null ? void 0 : selectedAddress.address,
        onConfirmSelectedAddress
      });
    }
    return /* @__PURE__ */ React13.createElement(LedgerConnect_default, {
      onClick: onStartLogin,
      error
    });
  }
  return wrapContentInsideModal ? /* @__PURE__ */ React13.createElement(ModalContainer_default, {
    title: "Login with ledger",
    className,
    onClose
  }, getContent()) : getContent();
}
var LoginModal_default = LedgerLoginContainer;

// src/UI/ledger/LoginButton/index.tsx
var LedgerLoginButton = ({
  token,
  callbackRoute,
  children,
  onModalOpens,
  onModalCloses,
  loginButtonText = "Ledger",
  buttonClassName,
  className = "ledger-login",
  redirectAfterLogin = false,
  wrapContentInsideModal = true,
  shouldRenderDefaultCss = true,
  shouldRenderDefaultModalCss = true,
  hideButtonWhenModalOpens = false
}) => {
  const [showLoginModal, setShowLoginModal] = React14.useState(false);
  const generatedClasses = getGeneratedClasses(className, shouldRenderDefaultCss, {
    wrapper: `btn btn-primary px-sm-4 m-1 mx-sm-3 ${buttonClassName != null ? buttonClassName : ""}`,
    loginText: "text-left"
  });
  function handleOpenModal() {
    setShowLoginModal(true);
    onModalOpens == null ? void 0 : onModalOpens();
  }
  function handleCloseModal() {
    setShowLoginModal(false);
    onModalCloses == null ? void 0 : onModalCloses();
  }
  const shouldRenderButton = !hideButtonWhenModalOpens || !showLoginModal;
  return /* @__PURE__ */ React14.createElement(React14.Fragment, null, shouldRenderButton && /* @__PURE__ */ React14.createElement("button", {
    onClick: handleOpenModal,
    className: generatedClasses.wrapper
  }, children || /* @__PURE__ */ React14.createElement("span", {
    className: generatedClasses.loginText
  }, loginButtonText)), showLoginModal && /* @__PURE__ */ React14.createElement(LoginModal_default, {
    className,
    shouldRenderDefaultCss: shouldRenderDefaultModalCss,
    callbackRoute,
    token,
    wrapContentInsideModal,
    redirectAfterLogin,
    onClose: handleCloseModal
  }));
};
var LoginButton_default2 = LedgerLoginButton;

// src/UI/NotificationModal/index.tsx
init_shim();
import React15 from "react";
var typedIcons = fortawesome_free_solid_svg_icons_default;
var notificationTypesToIcons = {
  ["warning" /* warning */]: typedIcons.faExclamationTriangle
};
var defaultIcon = typedIcons.faExclamationTriangle;
function NotificationModal() {
  const { notification, clearNotification } = useGetNotification();
  const showModal = Boolean(notification);
  const onDone = () => {
    clearNotification();
  };
  const type = notification == null ? void 0 : notification.type;
  const icon = notification ? notificationTypesToIcons[type] || defaultIcon : null;
  return notification ? /* @__PURE__ */ React15.createElement(react_bootstrap_default.Modal, {
    show: showModal,
    backdrop: true,
    onHide: notification,
    className: `modal-container`,
    animation: false,
    centered: true
  }, /* @__PURE__ */ React15.createElement("div", {
    className: "card w-100 notification-modal"
  }, /* @__PURE__ */ React15.createElement(PageState_default, {
    icon,
    iconClass: notification.iconClassName,
    iconBgClass: "p-4 rounded-bg-circle",
    iconSize: "3x",
    title: notification.title,
    description: notification.description,
    action: /* @__PURE__ */ React15.createElement("button", {
      className: "btn btn-primary",
      onClick: onDone
    }, "Done")
  }))) : null;
}
var NotificationModal_default = NotificationModal;

// src/UI/pages/index.tsx
init_shim();

// src/UI/pages/UnlockPage/index.tsx
init_shim();
import React20 from "react";

// src/UI/walletConnect/WalletConnectLoginButton/index.tsx
init_shim();
import React18, { Fragment, useState as useState10 } from "react";

// src/UI/walletConnect/WalletConnectLoginContainer/index.tsx
init_shim();
import React17, { useEffect as useEffect9, useState as useState9 } from "react";

// src/optionalPackages/platform.ts
init_shim();
var platform = {};
try {
  platform = __require("platform");
} catch (err) {
}
var platform_default = platform;

// src/optionalPackages/qrcode.ts
init_shim();
var qrcode = {};
try {
  qrcode = __require("qrcode");
} catch (err) {
}
var qrcode_default = qrcode;

// src/UI/walletConnect/WalletConnectLoginButton/lightning.svg
init_shim();
import * as React16 from "react";
var SvgLightning = (props) => /* @__PURE__ */ React16.createElement("svg", __spreadValues({
  xmlns: "http://www.w3.org/2000/svg",
  xmlnsXlink: "http://www.w3.org/1999/xlink",
  viewBox: "0 0 31.114 44.981",
  width: 16,
  height: 16
}, props), /* @__PURE__ */ React16.createElement("g", {
  transform: "translate(-47.168 -21.519)"
}, /* @__PURE__ */ React16.createElement("g", {
  transform: "translate(-247.872 -130.693)"
}, /* @__PURE__ */ React16.createElement("path", {
  d: "M355.676,152.213l-3.832,17.8h-9.661Z",
  transform: "translate(-40.089 1)",
  fillRule: "evenodd",
  fill: "#fff"
}), /* @__PURE__ */ React16.createElement("path", {
  d: "M326.45,271.184l-7.053,9.379H295.04l7.054-9.379Z",
  transform: "translate(0 -101.17)",
  fillRule: "evenodd",
  fill: "#fff"
}), /* @__PURE__ */ React16.createElement("path", {
  d: "M381.139,333.864l-13.493,17.8,3.832-17.8Z",
  transform: "translate(-61.742 -155.472)",
  fillRule: "evenodd",
  fill: "#fff"
}))));
var lightning_default = SvgLightning;

// src/UI/walletConnect/WalletConnectLoginContainer/index.tsx
function WalletConnectLoginContainer({
  callbackRoute,
  loginButtonText,
  title = "Maiar Login",
  logoutRoute = "/unlock",
  className = "wallect-connect-login-modal",
  lead = "Scan the QR code using Maiar",
  shouldRenderDefaultCss = true,
  wrapContentInsideModal = true,
  redirectAfterLogin,
  token,
  onClose
}) {
  var _a, _b, _c, _d;
  const [
    initLoginWithWalletConnect,
    { error },
    { uriDeepLink, walletConnectUri }
  ] = useWalletConnectLogin({
    logoutRoute,
    callbackRoute,
    token,
    redirectAfterLogin,
    shouldLoginUser: true
  });
  const [qrCodeSvg, setQrCodeSvg] = useState9("");
  const isMobileDevice = ((_b = (_a = platform_default) == null ? void 0 : _a.os) == null ? void 0 : _b.family) === "iOS" || ((_d = (_c = platform_default) == null ? void 0 : _c.os) == null ? void 0 : _d.family) === "Android";
  const generatedClasses = getGeneratedClasses(className, shouldRenderDefaultCss, {
    wrapper: "btn btn-primary px-sm-4 m-1 mx-sm-3",
    loginText: "text-left",
    container: "m-auto login-container",
    card: "card my-3 text-center",
    cardBody: "card-body p-4 mx-lg-4",
    qrCodeSvgContainer: "mx-auto mb-3",
    title: "mb-3",
    leadText: "lead mb-0",
    mobileLoginButton: "btn btn-primary d-inline-flex align-items-center px-4 mt-4",
    mobileLoginButtonIcon: "mr-2",
    errorMessage: "text-danger d-flex justify-content-center align-items-center"
  });
  const generateQRCode = () => __async(this, null, function* () {
    if (!walletConnectUri) {
      return;
    }
    const svg = yield qrcode_default.toString(walletConnectUri, {
      type: "svg"
    });
    setQrCodeSvg(svg);
  });
  useEffect9(() => {
    generateQRCode();
  }, [walletConnectUri]);
  useEffect9(() => {
    initLoginWithWalletConnect();
  }, []);
  const content = /* @__PURE__ */ React17.createElement("div", {
    className: generatedClasses.container
  }, /* @__PURE__ */ React17.createElement("div", {
    className: generatedClasses.root
  }, /* @__PURE__ */ React17.createElement("div", {
    className: generatedClasses.card
  }, /* @__PURE__ */ React17.createElement("div", {
    className: generatedClasses.cardBody
  }, /* @__PURE__ */ React17.createElement("div", {
    className: generatedClasses.qrCodeSvgContainer,
    dangerouslySetInnerHTML: {
      __html: qrCodeSvg
    },
    style: {
      width: "15rem",
      height: "15rem"
    }
  }), /* @__PURE__ */ React17.createElement("h4", {
    className: generatedClasses.title
  }, title), isMobileDevice ? /* @__PURE__ */ React17.createElement(React17.Fragment, null, /* @__PURE__ */ React17.createElement("p", {
    className: generatedClasses.leadText
  }, loginButtonText), /* @__PURE__ */ React17.createElement("a", {
    id: "accessWalletBtn",
    "data-testid": "accessWalletBtn",
    className: generatedClasses.mobileLoginButton,
    href: uriDeepLink || void 0,
    rel: "noopener noreferrer nofollow",
    target: "_blank"
  }, /* @__PURE__ */ React17.createElement(lightning_default, {
    className: generatedClasses.mobileLoginButtonIcon,
    style: {
      width: "0.9rem",
      height: "0.9rem"
    }
  }), title)) : /* @__PURE__ */ React17.createElement("p", {
    className: generatedClasses.leadText
  }, lead), /* @__PURE__ */ React17.createElement("div", null, error && /* @__PURE__ */ React17.createElement("p", {
    className: generatedClasses.errorMessage
  }, error))))));
  return wrapContentInsideModal ? /* @__PURE__ */ React17.createElement(ModalContainer_default, {
    title: "Login with Maiar",
    className,
    onClose
  }, content) : content;
}
var WalletConnectLoginContainer_default = WalletConnectLoginContainer;

// src/UI/walletConnect/WalletConnectLoginButton/index.tsx
var WalletConnectLoginButton = ({
  children,
  callbackRoute,
  onModalOpens,
  onModalCloses,
  loginButtonText = "Maiar App",
  title = "Maiar Login",
  logoutRoute = "/unlock",
  shouldRenderDefaultCss = true,
  wrapContentInsideModal = true,
  redirectAfterLogin = false,
  buttonClassName,
  className = "wallect-connect-login",
  lead = "Scan the QR code using Maiar",
  token,
  hideButtonWhenModalOpens = false
}) => {
  const [showLoginModal, setShowLoginModal] = useState10(false);
  const generatedClasses = getGeneratedClasses(className, shouldRenderDefaultCss, {
    wrapper: `btn btn-primary px-sm-4 m-1 mx-sm-3 ${buttonClassName != null ? buttonClassName : ""}`,
    loginText: "text-left"
  });
  const handleOpenModal = () => {
    setShowLoginModal(true);
    onModalOpens == null ? void 0 : onModalOpens();
  };
  const handleCloseModal = () => {
    setShowLoginModal(false);
    onModalCloses == null ? void 0 : onModalCloses();
  };
  const shouldRenderButton = !hideButtonWhenModalOpens || !showLoginModal;
  return /* @__PURE__ */ React18.createElement(Fragment, null, shouldRenderButton && /* @__PURE__ */ React18.createElement("button", {
    onClick: handleOpenModal,
    className: generatedClasses.wrapper
  }, children || /* @__PURE__ */ React18.createElement("span", {
    className: generatedClasses.loginText
  }, loginButtonText)), showLoginModal && /* @__PURE__ */ React18.createElement(WalletConnectLoginContainer_default, {
    callbackRoute,
    loginButtonText,
    title,
    token,
    className,
    logoutRoute,
    lead,
    wrapContentInsideModal,
    redirectAfterLogin,
    onClose: handleCloseModal
  }));
};
var WalletConnectLoginButton_default = WalletConnectLoginButton;

// src/UI/webWallet/LoginButton/index.tsx
init_shim();
import React19 from "react";
var WebWalletLoginButton = ({
  children,
  token,
  className = "web-wallet-login",
  callbackRoute,
  buttonClassName,
  loginButtonText = "Elrond Web Wallet",
  shouldRenderDefaultCss = true
}) => {
  const [onInitiateLogin] = useWebWalletLogin({
    callbackRoute,
    token
  });
  const classes = getGeneratedClasses(className, shouldRenderDefaultCss, {
    wrapper: `btn btn-primary px-sm-4 m-1 mx-sm-3 ${buttonClassName != null ? buttonClassName : ""}`,
    loginText: "text-left"
  });
  const handleLogin = () => {
    onInitiateLogin();
  };
  return /* @__PURE__ */ React19.createElement("button", {
    onClick: handleLogin,
    className: classes.wrapper
  }, children || /* @__PURE__ */ React19.createElement("span", {
    className: classes.loginText
  }, loginButtonText));
};
var LoginButton_default3 = WebWalletLoginButton;

// src/UI/pages/UnlockPage/index.tsx
var UnlockPage = ({
  loginRoute,
  title = "Login",
  className = "unlock-page",
  shouldRenderDefaultCss = true,
  LedgerLoginButtonText = "Ledger",
  description = "Pick a login method",
  WalletConnectLoginButtonText = "Maiar",
  ExtensionLoginButtonText = "Extension",
  WebWalletLoginButtonText = "Web wallet"
}) => {
  const generatedClasses = getGeneratedClasses(className, shouldRenderDefaultCss, {
    wrapper: "home d-flex flex-fill align-items-center",
    title: "mb-4",
    description: "mb-4",
    cardContainer: "m-auto",
    card: "card my-4 text-center",
    cardBody: "card-body py-4 px-2 px-sm-2 mx-lg-4"
  });
  const { isLoggedIn } = useGetLoginInfo();
  React20.useEffect(() => {
    if (isLoggedIn) {
      window.location.href = loginRoute;
    }
  }, [isLoggedIn]);
  return /* @__PURE__ */ React20.createElement("div", {
    className: generatedClasses.wrapper
  }, /* @__PURE__ */ React20.createElement("div", {
    className: generatedClasses.cardContainer
  }, /* @__PURE__ */ React20.createElement("div", {
    className: generatedClasses.card
  }, /* @__PURE__ */ React20.createElement("div", {
    className: generatedClasses.cardBody
  }, /* @__PURE__ */ React20.createElement("h4", {
    className: generatedClasses.title
  }, title), /* @__PURE__ */ React20.createElement("p", {
    className: generatedClasses.description
  }, description), /* @__PURE__ */ React20.createElement(LoginButton_default, {
    callbackRoute: loginRoute,
    loginButtonText: ExtensionLoginButtonText
  }), /* @__PURE__ */ React20.createElement(LoginButton_default3, {
    callbackRoute: loginRoute,
    loginButtonText: WebWalletLoginButtonText
  }), /* @__PURE__ */ React20.createElement(LoginButton_default2, {
    loginButtonText: LedgerLoginButtonText,
    callbackRoute: loginRoute
  }), /* @__PURE__ */ React20.createElement(WalletConnectLoginButton_default, {
    callbackRoute: loginRoute,
    loginButtonText: WalletConnectLoginButtonText
  })))));
};
var UnlockPage_default = UnlockPage;

// src/UI/ProgressSteps/index.tsx
init_shim();
import React22 from "react";

// src/UI/ProgressSteps/Dot.tsx
init_shim();
import React21 from "react";
var Dot = ({
  color,
  "data-testid": dataTestId
}) => {
  return /* @__PURE__ */ React21.createElement("span", {
    className: `dot ${color}`,
    "data-testid": dataTestId
  });
};
var Dot_default = Dot;

// src/UI/ProgressSteps/index.tsx
var ProgressSteps = ({
  totalSteps,
  currentStep,
  className
}) => {
  const dots = [];
  for (let i = 1; i <= totalSteps; i += 1) {
    const isCurrentStep = currentStep === i;
    const color = isCurrentStep || i < currentStep ? "bg-primary" : "bg-secondary";
    dots.push(/* @__PURE__ */ React22.createElement(Dot_default, {
      "data-testid": `step${i}${isCurrentStep ? "active" : ""}`,
      key: i,
      color
    }));
  }
  return /* @__PURE__ */ React22.createElement("div", {
    className: `progress-steps d-flex justify-content-center ${className}`
  }, /* @__PURE__ */ React22.createElement("div", {
    className: "steps d-flex justify-content-center align-items-center position-relative"
  }, /* @__PURE__ */ React22.createElement("hr", {
    className: "position-absolute w-100 m-0"
  }), dots));
};
var ProgressSteps_default = ProgressSteps;

// src/UI/SignTransactionsModals/index.tsx
init_shim();
import React32 from "react";

// src/UI/SignTransactionsModals/SignWithExtensionModal/index.tsx
init_shim();
import React23 from "react";
var SignWithExtensionModal = ({
  handleClose,
  error,
  callbackRoute,
  transactions,
  className = "extension-modal"
}) => {
  const classes = getGeneratedClasses(className, true, {
    wrapper: "modal-container extension",
    icon: "text-white",
    closeBtn: "btn btn-close-link mt-2"
  });
  const description = error ? error : transactions && transactions.length > 1 ? "Check your Elrond Wallet Extension to sign the transactions" : "Check your Elrond Wallet Extension to sign the transaction";
  const close = (e) => {
    e.preventDefault();
    handleClose();
    if (callbackRoute != null && !window.location.pathname.includes(callbackRoute)) {
      safeRedirect(callbackRoute);
    }
  };
  return /* @__PURE__ */ React23.createElement(react_bootstrap_default.Modal, {
    show: true,
    backdrop: "static",
    onHide: handleClose,
    className: classes.wrapper,
    animation: false,
    centered: true
  }, /* @__PURE__ */ React23.createElement(PageState_default, {
    icon: error ? fortawesome_free_solid_svg_icons_default.faTimes : fortawesome_free_solid_svg_icons_default.faHourglass,
    iconClass: classes.icon,
    className,
    iconBgClass: error ? "bg-danger" : "bg-warning",
    iconSize: "3x",
    title: "Confirm on Maiar DeFi Wallet",
    description,
    action: /* @__PURE__ */ React23.createElement("button", {
      id: "closeButton",
      "data-testid": "closeButton",
      onClick: close,
      className: classes.closeBtn
    }, "Close")
  }));
};
var SignWithExtensionModal_default = SignWithExtensionModal;

// src/UI/SignTransactionsModals/SignWithLedgerModal/index.tsx
init_shim();
import React30 from "react";

// src/UI/SignTransactionsModals/SignWithDeviceModal/index.tsx
init_shim();
import React29 from "react";

// src/UI/SignTransactionsModals/SignWithDeviceModal/SignStep.tsx
init_shim();
import React28 from "react";
import { Address as Address10 } from "@elrondnetwork/erdjs/out";

// src/UI/TokenDetails/index.tsx
init_shim();
import React26 from "react";

// src/assets/icons/EGLD.svg
init_shim();
import * as React24 from "react";
var SvgEgld = (props) => /* @__PURE__ */ React24.createElement("svg", __spreadValues({
  viewBox: "0 0 100 100",
  xmlns: "http://www.w3.org/2000/svg"
}, props), /* @__PURE__ */ React24.createElement("g", {
  fillRule: "evenodd"
}, /* @__PURE__ */ React24.createElement("g", {
  transform: "translate(0 -1)",
  fillRule: "nonzero"
}, /* @__PURE__ */ React24.createElement("g", {
  transform: "translate(0 1)",
  id: "egld-token"
}, /* @__PURE__ */ React24.createElement("path", {
  d: "m79.6 19.424c-0.4-0.4383-0.6-0.8766-0.6-1.4245 0-0.54787 0.2-0.98617 0.6-1.4245 0.8-0.76702 2-0.76702 2.8 0 0.4 0.4383 0.6 0.8766 0.6 1.4245 0 0.54787-0.2 0.98617-0.6 1.4245-0.4 0.32872-0.9 0.54787-1.4 0.54787-0.5 0.10957-1-0.10957-1.4-0.54787"
}), /* @__PURE__ */ React24.createElement("path", {
  id: "Path",
  d: "m74.556 24.448c-0.33333-0.44138-0.55556-0.88276-0.55556-1.4345s0.22222-0.9931 0.55556-1.4345c0.77778-0.77241 2.1111-0.77241 2.8889 0 0.33333 0.44138 0.55556 0.88276 0.55556 1.4345s-0.22222 0.9931-0.55556 1.4345c-0.44444 0.33103-0.88889 0.55172-1.4444 0.55172s-1-0.22069-1.4444-0.55172"
}), /* @__PURE__ */ React24.createElement("path", {
  id: "Path",
  d: "m69.556 30.448c-0.33333-0.33103-0.55556-0.88276-0.55556-1.4345s0.22222-0.9931 0.55556-1.4345c0.77778-0.77241 2.1111-0.77241 2.8889 0 0.33333 0.33103 0.55556 0.88276 0.55556 1.4345s-0.22222 0.9931-0.55556 1.4345c-0.44444 0.44138-0.88889 0.55172-1.4444 0.55172s-1.1111-0.22069-1.4444-0.55172"
}), /* @__PURE__ */ React24.createElement("path", {
  id: "Path",
  d: "m64.6 35.448c-0.4-0.33103-0.6-0.88276-0.6-1.4345s0.2-0.9931 0.6-1.4345c0.8-0.77241 2-0.77241 2.8 0 0.4 0.33103 0.6 0.88276 0.6 1.4345s-0.2 1.1034-0.6 1.4345c-0.4 0.44138-0.9 0.55172-1.4 0.55172s-1-0.11034-1.4-0.55172"
}), /* @__PURE__ */ React24.createElement("path", {
  id: "Path",
  d: "m59.556 40.424c-0.44444-0.32872-0.55556-0.8766-0.55556-1.4245 0-0.54787 0.22222-0.98617 0.55556-1.4245 0.77778-0.76702 2.1111-0.76702 2.8889 0 0.44444 0.32872 0.55556 0.8766 0.55556 1.4245 0 0.54787-0.22222 1.0957-0.55556 1.4245-0.33333 0.4383-0.88889 0.54787-1.4444 0.54787-0.55556 0.10957-1.1111-0.10957-1.4444-0.54787"
}), /* @__PURE__ */ React24.createElement("path", {
  id: "Path",
  d: "m53 44.014c0-0.55172 0.22222-0.9931 0.55556-1.4345 0.77778-0.77241 2.1111-0.77241 2.8889 0 0.44444 0.44138 0.55556 0.88276 0.55556 1.4345s-0.22222 0.9931-0.55556 1.4345c-0.33333 0.33103-0.88889 0.55172-1.4444 0.55172s-1-0.22069-1.4444-0.55172c-0.33333-0.33103-0.55556-0.88276-0.55556-1.4345z"
}), /* @__PURE__ */ React24.createElement("path", {
  id: "Path",
  d: "m43.556 56.424c-0.33333-0.32872-0.55556-0.8766-0.55556-1.4245 0-0.54787 0.22222-0.98617 0.55556-1.4245 0.77778-0.76702 2.1111-0.76702 2.8889 0 0.44444 0.4383 0.55556 0.8766 0.55556 1.4245 0 0.54787-0.22222 0.98617-0.55556 1.4245-0.33333 0.4383-0.88889 0.54787-1.4444 0.54787-0.55556 0.10957-1-0.10957-1.4444-0.54787"
}), /* @__PURE__ */ React24.createElement("path", {
  id: "Path",
  d: "m38.6 61.424c-0.4-0.32872-0.6-0.8766-0.6-1.4245 0-0.54787 0.2-0.98617 0.6-1.4245 0.8-0.76702 2-0.76702 2.8 0 0.4 0.4383 0.6 0.8766 0.6 1.4245 0 0.54787-0.2 0.98617-0.6 1.4245-0.4 0.4383-0.9 0.54787-1.4 0.54787-0.5 0.10957-1-0.10957-1.4-0.54787"
}), /* @__PURE__ */ React24.createElement("path", {
  id: "Path",
  d: "m33.556 66.448c-0.33333-0.33103-0.55556-0.88276-0.55556-1.4345s0.22222-1.1034 0.55556-1.4345c0.77778-0.77241 2.1111-0.77241 2.8889 0 0.33333 0.33103 0.55556 0.88276 0.55556 1.4345s-0.22222 0.9931-0.55556 1.4345c-0.44444 0.44138-0.88889 0.55172-1.4444 0.55172s-1-0.22069-1.4444-0.55172"
}), /* @__PURE__ */ React24.createElement("path", {
  id: "Path",
  d: "m27.556 71.448c-0.44444-0.33103-0.55556-0.88276-0.55556-1.4345s0.22222-0.9931 0.55556-1.4345c0.77778-0.77241 2.1111-0.77241 2.8889 0 0.33333 0.44138 0.55556 0.88276 0.55556 1.4345s-0.22222 1.1034-0.55556 1.4345c-0.44444 0.44138-0.88889 0.55172-1.4444 0.55172s-1.1111-0.11034-1.4444-0.55172"
}), /* @__PURE__ */ React24.createElement("path", {
  id: "Path",
  d: "m22.615 76.448c-0.41026-0.33103-0.61538-0.88276-0.61538-1.4345s0.20513-0.9931 0.61538-1.4345c0.82051-0.77241 2.0513-0.77241 2.7692 0 0.41026 0.44138 0.61538 0.88276 0.61538 1.4345s-0.20513 1.1034-0.61538 1.4345c-0.41026 0.33103-0.92308 0.55172-1.4359 0.55172-0.51282 0-1.0256-0.11034-1.3333-0.55172"
}), /* @__PURE__ */ React24.createElement("path", {
  id: "Path",
  d: "m17.556 82.424c-0.44444-0.4383-0.55556-0.8766-0.55556-1.4245 0-0.54787 0.22222-0.98617 0.55556-1.4245 0.77778-0.76702 2.1111-0.76702 2.8889 0 0.44444 0.4383 0.55556 0.8766 0.55556 1.4245 0 0.54787-0.22222 0.98617-0.55556 1.4245-0.33333 0.32872-0.88889 0.54787-1.4444 0.54787-0.44444 0.10957-1-0.10957-1.4444-0.54787"
}), /* @__PURE__ */ React24.createElement("path", {
  id: "Path",
  d: "m20.444 19.424c0.33333-0.4383 0.55556-0.8766 0.55556-1.4245 0-0.54787-0.22222-0.98617-0.55556-1.4245-0.77778-0.76702-2.1111-0.76702-2.8889 0-0.44444 0.4383-0.55556 0.8766-0.55556 1.4245 0 0.54787 0.22222 0.98617 0.55556 1.4245 0.33333 0.32872 0.88889 0.54787 1.4444 0.54787 0.55556 0.10957 1.1111-0.10957 1.4444-0.54787"
}), /* @__PURE__ */ React24.createElement("path", {
  id: "Path",
  d: "m25.4 24.448c0.4-0.44138 0.6-0.88276 0.6-1.4345s-0.2-0.9931-0.6-1.4345c-0.8-0.77241-2-0.77241-2.8 0-0.4 0.44138-0.6 0.88276-0.6 1.4345s0.2 0.9931 0.6 1.4345c0.4 0.33103 0.9 0.55172 1.4 0.55172s1-0.22069 1.4-0.55172"
}), /* @__PURE__ */ React24.createElement("path", {
  id: "Path",
  d: "m30.444 30.448c0.33333-0.33103 0.55556-0.88276 0.55556-1.4345s-0.22222-0.9931-0.55556-1.4345c-0.77778-0.77241-2.1111-0.77241-2.8889 0-0.33333 0.33103-0.55556 0.88276-0.55556 1.4345s0.22222 0.9931 0.55556 1.4345c0.44444 0.44138 0.88889 0.55172 1.4444 0.55172 0.44444 0 1-0.22069 1.4444-0.55172"
}), /* @__PURE__ */ React24.createElement("path", {
  id: "Path",
  d: "m36.444 35.448c0.33333-0.33103 0.55556-0.88276 0.55556-1.4345s-0.22222-0.9931-0.55556-1.4345c-0.77778-0.77241-2.1111-0.77241-2.8889 0-0.33333 0.33103-0.55556 0.88276-0.55556 1.4345s0.22222 1.1034 0.55556 1.4345c0.44444 0.44138 0.88889 0.55172 1.4444 0.55172 0.44444 0 1-0.11034 1.4444-0.55172"
}), /* @__PURE__ */ React24.createElement("path", {
  id: "Path",
  d: "m41.385 40.424c0.41026-0.32872 0.61538-0.8766 0.61538-1.4245 0-0.54787-0.20513-0.98617-0.61538-1.4245-0.71795-0.76702-2.0513-0.76702-2.7692 0-0.41026 0.32872-0.61538 0.8766-0.61538 1.4245 0 0.54787 0.20513 1.0957 0.61538 1.4245 0.41026 0.4383 0.92308 0.54787 1.4359 0.54787 0.51282 0.10957 1.0256-0.10957 1.3333-0.54787"
}), /* @__PURE__ */ React24.createElement("path", {
  id: "Path",
  d: "m47 44.014c0-0.55172-0.22222-0.9931-0.55556-1.4345-0.77778-0.77241-2.1111-0.77241-2.8889 0-0.44444 0.44138-0.55556 0.88276-0.55556 1.4345s0.22222 0.9931 0.55556 1.4345c0.33333 0.33103 0.88889 0.55172 1.4444 0.55172s1-0.22069 1.4444-0.55172c0.44444-0.33103 0.55556-0.88276 0.55556-1.4345z"
}), /* @__PURE__ */ React24.createElement("path", {
  id: "Path",
  d: "m51.444 51.448c0.44444-0.44138 0.55556-0.88276 0.55556-1.4345s-0.22222-0.9931-0.55556-1.4345c-0.77778-0.77241-2.1111-0.77241-2.8889 0-0.44444 0.44138-0.55556 0.88276-0.55556 1.4345s0.22222 0.9931 0.55556 1.4345c0.33333 0.33103 0.88889 0.55172 1.4444 0.55172s1.1111-0.22069 1.4444-0.55172"
}), /* @__PURE__ */ React24.createElement("path", {
  id: "Path",
  d: "m56.385 56.424c0.41026-0.32872 0.61538-0.8766 0.61538-1.4245 0-0.54787-0.20513-0.98617-0.61538-1.4245-0.82051-0.76702-2.0513-0.76702-2.7692 0-0.41026 0.4383-0.61538 0.8766-0.61538 1.4245 0 0.54787 0.20513 0.98617 0.61538 1.4245 0.41026 0.4383 0.92308 0.54787 1.4359 0.54787 0.41026 0.10957 0.92308-0.10957 1.3333-0.54787"
}), /* @__PURE__ */ React24.createElement("path", {
  id: "Path",
  d: "m62.444 61.424c0.33333-0.32872 0.55556-0.8766 0.55556-1.4245 0-0.54787-0.22222-0.98617-0.55556-1.4245-0.77778-0.76702-2.1111-0.76702-2.8889 0-0.33333 0.4383-0.55556 0.8766-0.55556 1.4245 0 0.54787 0.22222 0.98617 0.55556 1.4245 0.44444 0.4383 0.88889 0.54787 1.4444 0.54787 0.44444 0.10957 1-0.10957 1.4444-0.54787"
}), /* @__PURE__ */ React24.createElement("path", {
  id: "Path",
  d: "m67.444 66.448c0.33333-0.33103 0.55556-0.88276 0.55556-1.4345s-0.22222-1.1034-0.55556-1.4345c-0.77778-0.77241-2.1111-0.77241-2.8889 0-0.33333 0.33103-0.55556 0.88276-0.55556 1.4345s0.22222 0.9931 0.55556 1.4345c0.44444 0.44138 0.88889 0.55172 1.4444 0.55172s1-0.22069 1.4444-0.55172"
}), /* @__PURE__ */ React24.createElement("path", {
  id: "Path",
  d: "m72.444 71.448c0.44444-0.33103 0.55556-0.88276 0.55556-1.4345s-0.22222-0.9931-0.55556-1.4345c-0.77778-0.77241-2.1111-0.77241-2.8889 0-0.33333 0.44138-0.55556 0.88276-0.55556 1.4345s0.22222 1.1034 0.55556 1.4345c0.44444 0.44138 0.88889 0.55172 1.4444 0.55172s1.1111-0.11034 1.4444-0.55172"
}), /* @__PURE__ */ React24.createElement("path", {
  id: "a",
  d: "m77.444 76.448c0.44444-0.33103 0.55556-0.88276 0.55556-1.4345s-0.22222-0.9931-0.55556-1.4345c-0.77778-0.77241-2.1111-0.77241-2.8889 0-0.44444 0.44138-0.55556 0.88276-0.55556 1.4345s0.22222 1.1034 0.55556 1.4345c0.33333 0.33103 0.88889 0.55172 1.4444 0.55172s1.1111-0.11034 1.4444-0.55172"
}), /* @__PURE__ */ React24.createElement("path", {
  d: "m82.385 82.424c0.41026-0.4383 0.61538-0.8766 0.61538-1.4245 0-0.54787-0.20513-0.98617-0.61538-1.4245-0.82051-0.76702-2.0513-0.76702-2.7692 0-0.41026 0.4383-0.61538 0.8766-0.61538 1.4245 0 0.54787 0.20513 0.98617 0.61538 1.4245 0.41026 0.32872 0.92308 0.54787 1.4359 0.54787 0.41026 0.10957 0.92308-0.10957 1.3333-0.54787"
}), /* @__PURE__ */ React24.createElement("path", {
  d: "m33.036 21c5.2647-3.4327 11.036-5.0481 17.414-5.149 6.2771 0 12.048 1.7163 17.414 5.149l11.137-11.106c-8.7069-6.5625-18.123-9.8942-28.551-9.8942-10.428 0-19.945 3.3317-28.449 9.8942l11.036 11.106z"
}), /* @__PURE__ */ React24.createElement("path", {
  d: "m21 66.742c-3.5854-5.3754-5.3268-11.157-5.3268-17.343 0-6.2883 1.7415-12.069 5.3268-17.343l-11.166-11.055c-6.5561 8.5196-9.8341 17.952-9.8341 28.5 0 10.345 3.278 19.879 9.9366 28.5l11.063-11.258z"
}), /* @__PURE__ */ React24.createElement("path", {
  d: "m67.964 78c-5.2647 3.5333-11.036 5.3504-17.313 5.4513-6.3783 0-12.25-1.7162-17.515-5.3504l-11.137 11.004c8.6057 6.6628 18.123 9.9941 28.652 9.8932 10.428-0.10095 19.844-3.4323 28.348-9.8932l-11.036-11.105z"
}), /* @__PURE__ */ React24.createElement("path", {
  d: "m79 32.258c3.5333 5.3754 5.3504 11.258 5.2494 17.648-0.10095 6.1868-1.8171 11.867-5.2494 17.039l11.105 11.055c6.5618-8.5196 9.8932-17.952 9.8932-28.297 0.10095-10.548-3.2304-20.082-9.8932-28.703l-11.105 11.258z"
}), /* @__PURE__ */ React24.createElement("path", {
  d: "m90 81c4.3636 0 8 3.5325 8 8 0 4.3636-3.5325 8-8 8-4.3636 0-8-3.5325-8-8s3.5325-8 8-8"
}), /* @__PURE__ */ React24.createElement("path", {
  d: "m10 81c4.4211 0 8 3.5325 8 8 0 4.3636-3.5789 8-8 8-4.4211 0-8-3.5325-8-8s3.5789-8 8-8"
}), /* @__PURE__ */ React24.createElement("path", {
  d: "m90 1c4.4211 0 8 3.5325 8 8 0 4.4675-3.5789 8-8 8s-8-3.5325-8-8c0-4.4675 3.5789-8 8-8"
}), /* @__PURE__ */ React24.createElement("path", {
  d: "m10 1c4.3636 0 8 3.5789 8 8 0 4.4211-3.5325 8-8 8-4.3636 0-8-3.5789-8-8 0-4.4211 3.5325-8 8-8"
})))));
var EGLD_default = SvgEgld;

// src/UI/TokenDetails/TokenSymbol/index.tsx
init_shim();
import * as React25 from "react";
var Simple = ({ children }) => /* @__PURE__ */ React25.createElement("div", {
  className: "token-symbol"
}, children);
var Combined = ({
  small,
  children
}) => /* @__PURE__ */ React25.createElement("div", {
  className: `token-symbol-combined ${small ? "small" : ""}`
}, children);

// src/UI/TokenDetails/index.tsx
var getIdentifierWithoutNonce = (identifier) => {
  const tokenParts = identifier.split("-");
  return identifier.includes("-") ? `${tokenParts[0]}-${tokenParts[1]}` : identifier;
};
function getIcon(isEgldTransfer, tokenAvatar) {
  if (tokenAvatar) {
    return /* @__PURE__ */ React26.createElement("img", {
      className: "token-symbol-custom-token",
      src: tokenAvatar
    });
  }
  return isEgldTransfer ? /* @__PURE__ */ React26.createElement(EGLD_default, null) : /* @__PURE__ */ React26.createElement(react_fontawesome_default.FontAwesomeIcon, {
    icon: fortawesome_free_solid_svg_icons_default.faDiamond
  });
}
var getDetails = (token, tokenAvatar) => {
  const egldLabel = getEgldLabel();
  const isEgldTransfer = token === egldLabel;
  return {
    token,
    symbol: token ? token.split("-")[0] : "",
    label: token,
    icon: () => getIcon(isEgldTransfer, tokenAvatar)
  };
};
var TokenDetails = class extends React26.Component {
  render() {
    return null;
  }
};
TokenDetails.Token = (props) => /* @__PURE__ */ React26.createElement(React26.Fragment, null, props.token);
TokenDetails.Symbol = (props) => /* @__PURE__ */ React26.createElement(React26.Fragment, null, getDetails(getIdentifierWithoutNonce(props.token), props.tokenAvatar).symbol);
TokenDetails.Label = (props) => /* @__PURE__ */ React26.createElement(React26.Fragment, null, getDetails(getIdentifierWithoutNonce(props.token), props.tokenAvatar).label);
TokenDetails.Icon = (props) => {
  const Component = true ? getDetails(getIdentifierWithoutNonce(props.token), props.tokenAvatar).icon : () => null;
  return /* @__PURE__ */ React26.createElement("div", null, props.combined ? /* @__PURE__ */ React26.createElement(Combined, {
    small: props.small
  }, /* @__PURE__ */ React26.createElement(Component, null)) : /* @__PURE__ */ React26.createElement(Simple, null, /* @__PURE__ */ React26.createElement(Component, null)));
};

// src/UI/TransactionData/index.tsx
init_shim();
import * as React27 from "react";
var allOccurences = (sourceStr, searchStr) => [...sourceStr.matchAll(new RegExp(searchStr, "gi"))].map((a) => a.index);
var TransactionData = ({
  data,
  highlight,
  isScCall
}) => {
  let output = /* @__PURE__ */ React27.createElement(React27.Fragment, null, data);
  const [encodedScCall, ...remainingDataFields] = highlight && isScCall ? highlight.split("@") : [];
  if (data && highlight && allOccurences(data, highlight).length === 1) {
    switch (true) {
      case data.startsWith(highlight): {
        const [, rest] = data.split(highlight);
        output = /* @__PURE__ */ React27.createElement(React27.Fragment, null, highlight, /* @__PURE__ */ React27.createElement("span", {
          className: "text-muted"
        }, rest));
        break;
      }
      case data.endsWith(highlight): {
        const [rest] = data.split(highlight);
        output = /* @__PURE__ */ React27.createElement(React27.Fragment, null, /* @__PURE__ */ React27.createElement("span", {
          className: "text-muted"
        }, rest), highlight);
        break;
      }
      default: {
        const [start, end] = data.split(highlight);
        output = /* @__PURE__ */ React27.createElement(React27.Fragment, null, /* @__PURE__ */ React27.createElement("span", {
          className: "text-muted"
        }, start), /* @__PURE__ */ React27.createElement("span", {
          className: "highlighted"
        }, highlight), /* @__PURE__ */ React27.createElement("span", {
          className: "text-muted"
        }, end));
        break;
      }
    }
  }
  return /* @__PURE__ */ React27.createElement(React27.Fragment, null, encodedScCall && /* @__PURE__ */ React27.createElement("div", {
    className: "form-group mb-0 data-field mw-100"
  }, /* @__PURE__ */ React27.createElement("span", {
    className: "form-label text-secondary d-block"
  }, "SC Call"), /* @__PURE__ */ React27.createElement("div", {
    "data-testid": "confirmScCall",
    className: "textarea sc-call form-control cursor-text mt-1 text-break-all"
  }, [decodePart(encodedScCall), ...remainingDataFields].join("@"))), /* @__PURE__ */ React27.createElement("div", {
    className: "form-group mb-0 data-field mw-100"
  }, /* @__PURE__ */ React27.createElement("span", {
    className: "form-label text-secondary d-block"
  }, "Data"), /* @__PURE__ */ React27.createElement("div", {
    "data-testid": "confirmData",
    className: "textarea form-control cursor-text mt-1 text-break-all"
  }, data ? output : "N/A")));
};
var TransactionData_default = TransactionData;

// src/UI/SignTransactionsModals/SignWithDeviceModal/SignStep.tsx
var SignStep = ({
  onSignTransaction,
  handleClose,
  onPrev,
  title,
  waitingForDevice,
  currentTransaction,
  error,
  allTransactions,
  isLastTransaction,
  currentStep,
  className
}) => {
  const egldLabel = getEgldLabel();
  if (!currentTransaction) {
    return null;
  }
  const transactionData = currentTransaction.transaction.getData().toString();
  const { network } = useGetNetworkConfig();
  const {
    tokenId,
    amount,
    type,
    multiTxData,
    receiver
  } = currentTransaction.transactionTokenInfo;
  const isTokenTransaction = Boolean(tokenId && isTokenTransfer({ tokenId, erdLabel: egldLabel }));
  const isFirst = currentStep === 0;
  const onCloseClick = (e) => {
    e.preventDefault();
    if (isFirst) {
      handleClose();
    } else {
      onPrev();
    }
  };
  const continueWithoutSigning = type && multiTxData && !transactionData.endsWith(multiTxData);
  let signBtnLabel = "Sign & Continue";
  signBtnLabel = waitingForDevice ? "Check your Ledger" : signBtnLabel;
  signBtnLabel = isLastTransaction && !waitingForDevice ? "Sign & Submit" : signBtnLabel;
  signBtnLabel = continueWithoutSigning ? "Continue" : signBtnLabel;
  const { tokenDenomination, tokenAvatar } = useGetTokenDetails_default({
    tokenId: currentTransaction.transactionTokenInfo.tokenId
  });
  const denominatedAmount = denominate({
    input: isTokenTransaction ? amount : currentTransaction.transaction.getValue().toString(),
    denomination: isTokenTransaction ? tokenDenomination : Number(network.egldDenomination),
    decimals: Number(network.decimals),
    showLastNonZeroDecimal: false,
    addCommas: true
  });
  const scamReport = currentTransaction.receiverScamInfo;
  const showProgressSteps = allTransactions.length > 1;
  const classes = getGeneratedClasses(className, true, {
    formGroup: "form-group text-left",
    formLabel: "form-label text-secondary",
    icon: "text-white",
    contentWrapper: "d-flex flex-column justify-content-start flex-md-row justify-content-md-between mb-3",
    tokenWrapper: "mb-3 mb-md-0 d-flex flex-column align-items-start",
    tokenLabel: "text-secondary text-left",
    tokenValue: "d-flex align-items-center mt-1",
    scamReport: "text-warning",
    scamReportIcon: "text-warning mr-1",
    tokenAmountLabel: "text-secondary text-left",
    tokenAmountValue: "d-flex align-items-center",
    dataFormGroup: "form-group text-left",
    errorMessage: "text-danger d-flex justify-content-center align-items-center",
    buttonsWrapper: "d-flex align-items-center justify-content-end mt-spacer",
    cancelButton: "btn btn-dark text-white flex-even mr-2",
    signButton: `btn ${scamReport ? "btn-warning" : "btn-primary"} flex-even ml-2`
  });
  return /* @__PURE__ */ React28.createElement(PageState_default, {
    icon: error ? fortawesome_free_solid_svg_icons_default.faTimes : fortawesome_free_solid_svg_icons_default.faHourglass,
    iconClass: classes.icon,
    iconBgClass: error ? "bg-danger" : "bg-warning",
    iconSize: "3x",
    className,
    title: title || "Confirm on Ledger",
    description: /* @__PURE__ */ React28.createElement(React28.Fragment, null, currentTransaction.transaction && /* @__PURE__ */ React28.createElement(React28.Fragment, null, showProgressSteps && /* @__PURE__ */ React28.createElement(ProgressSteps_default, {
      totalSteps: allTransactions.length,
      currentStep: currentStep + 1,
      className: "mb-4"
    }), /* @__PURE__ */ React28.createElement("div", {
      className: classes.formGroup,
      "data-testid": "transactionTitle"
    }, /* @__PURE__ */ React28.createElement("div", {
      className: classes.formLabel
    }, "To: "), multiTxData ? new Address10(receiver).bech32() : currentTransaction.transaction.getReceiver().toString(), scamReport && /* @__PURE__ */ React28.createElement("div", {
      className: classes.scamReport
    }, /* @__PURE__ */ React28.createElement("span", null, /* @__PURE__ */ React28.createElement(react_fontawesome_default.FontAwesomeIcon, {
      icon: fortawesome_free_solid_svg_icons_default.faExclamationTriangle,
      className: classes.scamReportIcon
    }), /* @__PURE__ */ React28.createElement("small", null, scamReport)))), /* @__PURE__ */ React28.createElement("div", {
      className: classes.contentWrapper
    }, /* @__PURE__ */ React28.createElement("div", {
      className: classes.tokenWrapper
    }, /* @__PURE__ */ React28.createElement("div", {
      className: classes.tokenlabel
    }, "Token"), /* @__PURE__ */ React28.createElement("div", {
      className: classes.tokenValue
    }, /* @__PURE__ */ React28.createElement(TokenDetails.Icon, {
      tokenAvatar,
      token: tokenId || egldLabel
    }), /* @__PURE__ */ React28.createElement("div", {
      className: "mr-1"
    }), /* @__PURE__ */ React28.createElement(TokenDetails.Label, {
      token: tokenId || egldLabel
    }))), /* @__PURE__ */ React28.createElement("div", null, /* @__PURE__ */ React28.createElement("div", {
      className: classes.tokenAmountLabel
    }, "Amount"), /* @__PURE__ */ React28.createElement("div", {
      className: classes.tokenAmountValue
    }, /* @__PURE__ */ React28.createElement("div", {
      className: "mr-1"
    }, denominatedAmount), /* @__PURE__ */ React28.createElement(TokenDetails.Symbol, {
      token: tokenId || egldLabel
    })))), /* @__PURE__ */ React28.createElement("div", {
      className: classes.dataFormGroup
    }, currentTransaction.transaction.getData() && /* @__PURE__ */ React28.createElement(TransactionData_default, __spreadValues({}, {
      data: currentTransaction.transaction.getData().toString(),
      highlight: multiTxData,
      isScCall: !tokenId
    }))), error && /* @__PURE__ */ React28.createElement("p", {
      className: classes.errorMessage
    }, error))),
    action: /* @__PURE__ */ React28.createElement("div", {
      className: classes.buttonsWrapper
    }, /* @__PURE__ */ React28.createElement("button", {
      id: "closeButton",
      "data-testid": "closeButton",
      onClick: onCloseClick,
      className: classes.cancelButton
    }, isFirst ? "Cancel" : "Back"), /* @__PURE__ */ React28.createElement("button", {
      type: "button",
      className: classes.signButton,
      id: "signBtn",
      "data-testid": "signBtn",
      onClick: onSignTransaction,
      disabled: waitingForDevice
    }, signBtnLabel))
  });
};
var SignStep_default = SignStep;

// src/UI/SignTransactionsModals/SignWithDeviceModal/index.tsx
var SignWithDeviceModal = ({
  handleClose,
  error,
  className = "device-modal",
  verifyReceiverScam = true,
  title = "Confirm transaction"
}) => {
  const {
    onSignTransaction,
    onNext,
    onPrev,
    allTransactions,
    waitingForDevice,
    onAbort,
    isLastTransaction,
    currentStep,
    callbackRoute,
    currentTransaction
  } = useSignTransactionsWithDevice({
    onCancel: handleClose,
    verifyReceiverScam
  });
  const classes = getGeneratedClasses(className, true, {
    wrapper: "modal-container wallet-connect",
    container: "card container",
    cardBody: "card-body"
  });
  return /* @__PURE__ */ React29.createElement(react_bootstrap_default.Modal, {
    show: currentTransaction != null,
    backdrop: "static",
    onHide: handleClose,
    className: classes.wrapper,
    animation: false,
    centered: true
  }, /* @__PURE__ */ React29.createElement("div", {
    className: classes.container
  }, /* @__PURE__ */ React29.createElement("div", {
    className: classes.cardBody
  }, /* @__PURE__ */ React29.createElement(SignStep_default, __spreadValues({}, {
    onSignTransaction,
    onNext,
    onPrev,
    allTransactions,
    waitingForDevice,
    isLastTransaction,
    currentStep,
    callbackRoute,
    currentTransaction,
    handleClose: onAbort,
    className,
    error,
    title
  })))));
};
var SignWithDeviceModal_default = SignWithDeviceModal;

// src/UI/SignTransactionsModals/SignWithLedgerModal/index.tsx
var SignWithLedgerModal = (props) => {
  return /* @__PURE__ */ React30.createElement(SignWithDeviceModal_default, __spreadProps(__spreadValues({}, props), {
    title: props.title || "Confirm on Ledger",
    className: props.className || "ledger-modal"
  }));
};
var SignWithLedgerModal_default = SignWithLedgerModal;

// src/UI/SignTransactionsModals/SignWithWalletConnectModal/index.tsx
init_shim();
import React31 from "react";
var SignWithWalletConnectModal = ({
  error,
  handleClose,
  callbackRoute,
  transactions,
  className = "wallet-connect-modal"
}) => {
  const classes = getGeneratedClasses(className, true, {
    wrapper: "modal-container wallet-connect",
    icon: "text-white",
    closeBtn: "btn btn-close-link mt-2"
  });
  const hasMultipleTransactions = transactions && (transactions == null ? void 0 : transactions.length) > 1;
  const description = error ? error : `Check your phone to sign the transaction${hasMultipleTransactions ? "s" : ""}`;
  const close = (e) => {
    e.preventDefault();
    handleClose();
    if (callbackRoute != null && !window.location.pathname.includes(callbackRoute)) {
      safeRedirect(callbackRoute);
    }
  };
  return /* @__PURE__ */ React31.createElement(react_bootstrap_default.Modal, {
    show: true,
    backdrop: "static",
    onHide: close,
    className: classes.wrapper,
    animation: false,
    centered: true
  }, /* @__PURE__ */ React31.createElement(PageState_default, {
    icon: error ? fortawesome_free_solid_svg_icons_default.faTimes : fortawesome_free_solid_svg_icons_default.faHourglass,
    iconClass: classes.icon,
    className,
    iconBgClass: error ? "bg-danger" : "bg-warning",
    iconSize: "3x",
    title: "Confirm on Maiar",
    description,
    action: /* @__PURE__ */ React31.createElement("button", {
      id: "closeButton",
      "data-testid": "closeButton",
      onClick: close,
      className: classes.closeBtn
    }, "Close")
  }));
};
var SignWithWalletConnectModal_default = SignWithWalletConnectModal;

// src/UI/SignTransactionsModals/index.tsx
function SignTransactionsModals({
  className,
  CustomConfirmScreens,
  verifyReceiverScam = true
}) {
  const {
    callbackRoute,
    transactions,
    error,
    sessionId,
    onAbort,
    hasTransactions
  } = useSignTransactions();
  const { providerType } = useGetAccountProvider();
  const signTransactionsError = useGetSignTransactionsError();
  const { loginMethod } = useGetLoginInfo();
  const handleClose = () => {
    onAbort(sessionId);
  };
  const signError = error || signTransactionsError;
  const signProps = {
    handleClose,
    error: signError,
    sessionId,
    transactions,
    providerType,
    callbackRoute,
    className,
    verifyReceiverScam
  };
  if (signError || hasTransactions) {
    switch (loginMethod) {
      case "ledger" /* ledger */:
        return (CustomConfirmScreens == null ? void 0 : CustomConfirmScreens.Ledger) ? /* @__PURE__ */ React32.createElement(CustomConfirmScreens.Ledger, __spreadValues({}, signProps)) : /* @__PURE__ */ React32.createElement(SignWithLedgerModal_default, __spreadValues({}, signProps));
      case "walletconnect" /* walletconnect */:
        return (CustomConfirmScreens == null ? void 0 : CustomConfirmScreens.WalletConnect) ? /* @__PURE__ */ React32.createElement(CustomConfirmScreens.WalletConnect, __spreadValues({}, signProps)) : /* @__PURE__ */ React32.createElement(SignWithWalletConnectModal_default, __spreadValues({}, signProps));
      case "extension" /* extension */:
        return (CustomConfirmScreens == null ? void 0 : CustomConfirmScreens.Extension) ? /* @__PURE__ */ React32.createElement(CustomConfirmScreens.Extension, __spreadValues({}, signProps)) : /* @__PURE__ */ React32.createElement(SignWithExtensionModal_default, __spreadValues({}, signProps));
      case "extra" /* extra */:
        return (CustomConfirmScreens == null ? void 0 : CustomConfirmScreens.Extra) ? /* @__PURE__ */ React32.createElement(CustomConfirmScreens.Extra, __spreadValues({}, signProps)) : null;
      default:
        return null;
    }
  }
  return null;
}
var SignTransactionsModals_default = SignTransactionsModals;

// src/UI/TransactionsToastList/index.tsx
init_shim();
import React39, { useEffect as useEffect10, useState as useState12 } from "react";

// src/storage/session.ts
init_shim();
function setToastsIdsToStorage(ids) {
  return sessionStorage.setItem("toasts" /* toasts */, JSON.stringify(ids));
}
function getToastsIdsFromStorage() {
  const toastsIds = sessionStorage.getItem("toasts" /* toasts */);
  return toastsIds != null ? JSON.parse(toastsIds) : [];
}

// src/UI/TransactionToast/index.tsx
init_shim();
import React38, { useMemo, useRef as useRef4, useState as useState11 } from "react";

// src/services/transactions/isCrossShardTransaction.ts
init_shim();
import { Address as Address11 } from "@elrondnetwork/erdjs/out";
function isCrossShardTransaction({
  receiverAddress,
  senderShard,
  senderAddress
}) {
  try {
    const receiver = new Address11(receiverAddress);
    const receiverShard = getShardOfAddress(receiver.pubkey());
    if (senderShard == null && senderAddress != null) {
      const sender = new Address11(senderAddress);
      return getShardOfAddress(sender) === receiverShard;
    }
    return receiverShard === senderShard;
  } catch (err) {
    return false;
  }
}

// src/UI/IconState/index.tsx
init_shim();
import React33 from "react";
var IconState = ({
  icon,
  iconSize = "3x",
  className = "icon-state",
  shouldRenderDefaultCss = true
}) => {
  const generatedClasses = getGeneratedClasses(className, shouldRenderDefaultCss, {
    wrapper: classnames_default("icon-state mx-auto", className, {
      half: iconSize === "2x"
    }),
    icon: classnames_default("text-white", className)
  });
  return /* @__PURE__ */ React33.createElement("span", {
    className: generatedClasses.wrapper
  }, /* @__PURE__ */ React33.createElement(react_fontawesome_default.FontAwesomeIcon, {
    icon,
    size: iconSize,
    className: generatedClasses.icon
  }));
};
var IconState_default = IconState;

// src/UI/Progress/index.tsx
init_shim();
import React34 from "react";
var Progress = ({
  id,
  children,
  progress,
  done,
  expiresIn = 10 * 60
}) => {
  const ref = React34.useRef(null);
  const intervalRef = React34.useRef();
  const removeTxFromSession = () => {
    const toastProgress = storage_default.session.getItem("toastProgress");
    const hasSessionStoredTx = Boolean(toastProgress == null ? void 0 : toastProgress[id]);
    if (!hasSessionStoredTx) {
      return;
    }
    const expires = moment_default().add(expiresIn, "seconds").unix();
    delete toastProgress[id];
    storage_default.session.setItem({
      key: "toastProgress",
      data: toastProgress,
      expires
    });
  };
  const saveToSession = ({ value }) => {
    const toastProgress = storage_default.session.getItem("toastProgress") || {};
    toastProgress[id] = value;
    storage_default.session.setItem({
      key: "toastProgress",
      data: toastProgress,
      expires: moment_default().add(expiresIn, "seconds").unix()
    });
  };
  const getInitialData = () => {
    const totalSeconds2 = progress ? progress.endTime - progress.startTime : 0;
    const toastProgress = storage_default.session.getItem("toastProgress");
    const remaining = progress ? (progress.endTime - moment_default().unix()) * 100 / totalSeconds2 : 0;
    const currentRemaining2 = toastProgress && id in toastProgress ? toastProgress[id] : remaining;
    return { currentRemaining: currentRemaining2, totalSeconds: totalSeconds2 };
  };
  const { totalSeconds, currentRemaining } = getInitialData();
  const [percentRemaining, setPercentRemaining] = React34.useState(currentRemaining);
  React34.useEffect(() => {
    if (progress) {
      const maxPercent = 90;
      const perc = totalSeconds / maxPercent;
      const int = moment_default.duration(perc.toFixed(2), "s").asMilliseconds();
      if (done) {
        intervalRef.current = setInterval(() => {
          if (ref.current !== null) {
            setPercentRemaining((existing) => {
              const value = existing - 1;
              if (value <= 0) {
                clearInterval(intervalRef.current);
                removeTxFromSession();
                return 0;
              } else {
                saveToSession({ value });
                return value;
              }
            });
          }
        }, 5);
      } else {
        intervalRef.current = setInterval(() => {
          if (ref.current !== null) {
            setPercentRemaining((existing) => {
              const decrement = existing > 100 - maxPercent ? 1 : logarithmicRest(existing);
              const value = existing - decrement;
              saveToSession({ value });
              return value;
            });
          }
        }, int);
      }
      return () => {
        clearInterval(intervalRef.current);
      };
    }
    return;
  }, [progress, done]);
  return progress ? /* @__PURE__ */ React34.createElement("div", {
    className: "progress position-relative",
    ref
  }, /* @__PURE__ */ React34.createElement("div", {
    className: "progress-bar",
    role: "progressbar",
    style: { width: `${percentRemaining}%` },
    "aria-valuenow": percentRemaining,
    "aria-valuemin": 0,
    "aria-valuemax": 100
  }, /* @__PURE__ */ React34.createElement("div", {
    className: "content-height"
  }, children)), /* @__PURE__ */ React34.createElement("div", {
    className: "d-flex position-absolute w-100"
  }, children)) : /* @__PURE__ */ React34.createElement(React34.Fragment, null, children);
};
var Progress_default = Progress;

// src/UI/TxDetails/index.tsx
init_shim();
import React37 from "react";

// src/UI/CopyButton/index.tsx
init_shim();
import React35 from "react";

// src/UI/CopyButton/helpers/copyToClipboard.tsx
init_shim();
function fallbackCopyTextToClipboard(text) {
  let success = false;
  const textArea = document.createElement("textarea");
  textArea.value = text;
  textArea.style.position = "fixed";
  document.body.appendChild(textArea);
  textArea.focus();
  textArea.select();
  try {
    document.execCommand("copy");
    success = true;
  } catch (err) {
    console.error("Fallback: Oops, unable to copy", err);
  }
  document.body.removeChild(textArea);
  return success;
}
function copyTextToClipboard(text) {
  return __async(this, null, function* () {
    let success = false;
    if (!navigator.clipboard) {
      success = fallbackCopyTextToClipboard(text);
    } else {
      success = yield navigator.clipboard.writeText(text).then(function done() {
        return true;
      }, function error(err) {
        console.error("Async: Could not copy text: ", err);
        return false;
      });
    }
    return success;
  });
}

// src/UI/CopyButton/index.tsx
var CopyButton = ({ text, className = "" }) => {
  const [copyResult, setCopyResut] = React35.useState({
    default: true,
    success: false
  });
  const handleCopyToClipboard = (e) => __async(void 0, null, function* () {
    e.preventDefault();
    e.stopPropagation();
    const noSpaces = text ? text.trim() : text;
    setCopyResut({
      default: false,
      success: yield copyTextToClipboard(noSpaces)
    });
    setTimeout(() => {
      setCopyResut({
        default: true,
        success: false
      });
    }, 1e3);
  });
  return /* @__PURE__ */ React35.createElement("a", {
    href: "/#",
    onClick: handleCopyToClipboard,
    className: `side-action text-secondary ${className}`
  }, copyResult.default || !copyResult.success ? /* @__PURE__ */ React35.createElement(react_fontawesome_default.FontAwesomeIcon, {
    icon: fortawesome_free_solid_svg_icons_default.faCopy
  }) : /* @__PURE__ */ React35.createElement(react_fontawesome_default.FontAwesomeIcon, {
    icon: fortawesome_free_solid_svg_icons_default.faCheck,
    className: "text-primary-highlight"
  }));
};
var CopyButton_default = CopyButton;

// src/UI/Trim/index.tsx
init_shim();
import React36 from "react";
import { useCallback } from "react";
import debounce from "lodash.debounce";
var Trim = ({ text, dataTestId = "" }) => {
  const [overflow, setOverflow] = React36.useState(false);
  const trimRef = React36.useRef(document.createElement("span"));
  const hiddenTextRef = React36.useRef(document.createElement("span"));
  const listener = useCallback(debounce(() => {
    if (trimRef.current && hiddenTextRef.current) {
      const diff = hiddenTextRef.current.offsetWidth - trimRef.current.offsetWidth;
      setOverflow(diff > 1);
    }
  }, 300), []);
  const addWindowResizeListener = () => {
    window.addEventListener("resize", listener);
    return () => {
      window.removeEventListener("resize", listener);
    };
  };
  React36.useEffect(addWindowResizeListener);
  React36.useEffect(() => {
    listener();
  }, []);
  return /* @__PURE__ */ React36.createElement("span", {
    ref: trimRef,
    className: `trim ${overflow ? "overflow" : ""}`,
    "data-testid": dataTestId
  }, /* @__PURE__ */ React36.createElement("span", {
    ref: hiddenTextRef,
    className: "hidden-text-ref"
  }, text), overflow ? /* @__PURE__ */ React36.createElement(React36.Fragment, null, /* @__PURE__ */ React36.createElement("span", {
    className: "left"
  }, /* @__PURE__ */ React36.createElement("span", null, String(text).substring(0, Math.floor(text.length / 2)))), /* @__PURE__ */ React36.createElement("span", {
    className: "ellipsis"
  }, "..."), /* @__PURE__ */ React36.createElement("span", {
    className: "right"
  }, /* @__PURE__ */ React36.createElement("span", null, String(text).substring(Math.ceil(text.length / 2))))) : /* @__PURE__ */ React36.createElement("span", null, text));
};
var Trim_default = Trim;

// src/UI/TxDetails/index.tsx
var TxDetails = ({
  title,
  transactions,
  className = "tx-details",
  isTimedOut = false,
  shouldRenderDefaultCss = true
}) => {
  const generatedClasses = getGeneratedClasses(className, shouldRenderDefaultCss, {
    title: "mb-0",
    statusTransactions: "mb-2 mt-1",
    iconSuccess: "mr-1 text-secondary",
    iconFailed: "mr-1 text-secondary",
    trimContainer: "text-nowrap trim-fs-sm mr-3",
    iconPending: "mr-1 text-secondary fa-spin slow-spin",
    item: "tx-description d-flex justify-content-start align-items-center"
  });
  const iconSuccessData = {
    icon: fortawesome_free_solid_svg_icons_default.faCheck,
    classNames: generatedClasses.iconSuccess
  };
  const iconFailedData = {
    icon: fortawesome_free_solid_svg_icons_default.faTimes,
    classNames: generatedClasses.iconSuccess
  };
  const iconPendingData = {
    icon: fortawesome_free_solid_svg_icons_default.faCircleNotch,
    classNames: generatedClasses.iconPending
  };
  const iconData = {
    pending: iconPendingData,
    success: iconSuccessData,
    fail: iconFailedData,
    invalid: iconFailedData,
    timedOut: iconFailedData
  };
  return /* @__PURE__ */ React37.createElement(React37.Fragment, null, title && /* @__PURE__ */ React37.createElement("div", {
    className: generatedClasses.title
  }, title), /* @__PURE__ */ React37.createElement("div", {
    className: generatedClasses.statusTransactions
  }, transactions.filter((tx) => !isServerTransactionPending(tx.status)).length, " ", "/ ", transactions.length, " transactions processed"), transactions.map(({ hash, status }) => {
    const iconSrc = iconData[status];
    return /* @__PURE__ */ React37.createElement("div", {
      className: generatedClasses.item,
      key: hash
    }, !isTimedOut && iconSrc != null && /* @__PURE__ */ React37.createElement(react_fontawesome_default.FontAwesomeIcon, {
      icon: iconSrc.icon,
      className: iconSrc.classNames
    }), /* @__PURE__ */ React37.createElement("span", {
      className: generatedClasses.trimContainer,
      style: { width: "10rem" }
    }, /* @__PURE__ */ React37.createElement(Trim_default, {
      text: hash
    })), /* @__PURE__ */ React37.createElement(CopyButton_default, {
      text: hash
    }), !isServerTransactionPending(status) && /* @__PURE__ */ React37.createElement(ExplorerLink_default, {
      page: `/transactions/${hash}`,
      className: "ml-2"
    }));
  }));
};
var TxDetails_default = TxDetails;

// src/UI/TransactionToast/index.tsx
var averageTxDurationMs = 6e3;
var crossShardRounds = 5;
var TransactionToast = ({
  toastId,
  title = "",
  shouldRenderDefaultCss = true,
  className = "transaction-toast",
  withTxNonce = false,
  transactions,
  status,
  onClose,
  startTimeProgress,
  endTimeProgress,
  lifetimeAfterSuccess
}) => {
  const ref = useRef4(null);
  const [shouldRender, setShouldRender] = useState11(true);
  const transactionDisplayInfo = useGetTransactionDisplayInfo(toastId);
  const accountShard = useSelector(shardSelector);
  const {
    errorMessage = "Transaction failed",
    timedOutMessage = "Transaction timed out",
    successMessage = "Transaction successful",
    processingMessage = "Processing transaction"
  } = transactionDisplayInfo;
  const isSameShard = useMemo(() => transactions.reduce((prevTxIsSameShard, { receiver, data }) => {
    const receiverAddress = getAddressFromDataField({
      receiver,
      data: data != null ? data : ""
    });
    if (receiverAddress == null) {
      return prevTxIsSameShard;
    }
    return prevTxIsSameShard && isCrossShardTransaction({
      receiverAddress,
      senderShard: accountShard
    });
  }, true), [transactions, accountShard]);
  const shardAdjustedDuration = isSameShard ? averageTxDurationMs : crossShardRounds * averageTxDurationMs;
  const transactionDuration = (transactionDisplayInfo == null ? void 0 : transactionDisplayInfo.transactionDuration) || shardAdjustedDuration;
  const generatedClasses = getGeneratedClasses(className, shouldRenderDefaultCss, {
    toastFooter: "mb-0 text-break",
    details: "media-body flex-grow-1",
    toastContainer: "w-100 media p-2",
    wrapper: "toast-visible clickable",
    toastHeader: "d-flex justify-content-between mb-1",
    iconContainer: "align-self-center ml-2 mr-2 pr-1",
    title: "m-0 font-weight-normal text-nowrap text-truncate",
    closeButton: "close d-flex side-action align-items-center mx-2 outline-0"
  });
  const [startTime, endTime] = useMemo(() => {
    const startTime2 = startTimeProgress || moment_default().unix();
    const endTime2 = endTimeProgress || moment_default().add(Number(transactionDuration), "milliseconds").unix();
    return [startTime2, endTime2];
  }, []);
  const progress = { startTime, endTime };
  const successToastData = {
    id: toastId,
    icon: fortawesome_free_solid_svg_icons_default.faCheck,
    expires: 3e4,
    hasCloseButton: true,
    title: successMessage,
    iconClassName: "bg-success"
  };
  const pendingToastData = {
    id: toastId,
    expires: false,
    icon: fortawesome_free_solid_svg_icons_default.faHourglass,
    hasCloseButton: false,
    title: processingMessage,
    iconClassName: "bg-warning"
  };
  const failToastData = {
    id: toastId,
    icon: fortawesome_free_solid_svg_icons_default.faTimes,
    title: errorMessage,
    hasCloseButton: true,
    iconClassName: "bg-danger"
  };
  const timedOutToastData = {
    id: toastId,
    icon: fortawesome_free_solid_svg_icons_default.faTimes,
    title: timedOutMessage,
    hasCloseButton: true,
    iconClassName: "bg-warning"
  };
  const isPending = getIsTransactionPending(status);
  const isTimedOut = getIsTransactionTimedOut(status);
  const toatsOptionsData = {
    signed: pendingToastData,
    sent: pendingToastData,
    pending: pendingToastData,
    success: successToastData,
    cancelled: failToastData,
    fail: failToastData,
    timedOut: timedOutToastData
  };
  const toastDataState = toatsOptionsData[status];
  const handleDeleteToast = () => {
    setShouldRender(false);
    onClose == null ? void 0 : onClose(toastId);
  };
  if (!shouldRender || transactions == null) {
    return null;
  }
  return /* @__PURE__ */ React38.createElement(react_bootstrap_default.Toast, {
    ref,
    className: generatedClasses.wrapper,
    key: toastId
  }, /* @__PURE__ */ React38.createElement(Progress_default, {
    key: toastId,
    id: toastId,
    progress,
    expiresIn: lifetimeAfterSuccess,
    done: !isPending || isTimedOut
  }, /* @__PURE__ */ React38.createElement("div", {
    className: generatedClasses.toastContainer
  }, /* @__PURE__ */ React38.createElement("div", {
    className: generatedClasses.iconContainer
  }, /* @__PURE__ */ React38.createElement(IconState_default, {
    iconSize: "2x",
    icon: toastDataState.icon,
    className: toastDataState.iconClassName
  }), withTxNonce && transactions.map((tx) => /* @__PURE__ */ React38.createElement("p", {
    key: tx.nonce.valueOf()
  }, tx.nonce.valueOf()))), /* @__PURE__ */ React38.createElement("div", {
    className: generatedClasses.details,
    style: { minWidth: 0 }
  }, /* @__PURE__ */ React38.createElement("div", {
    className: generatedClasses.toastHeader
  }, /* @__PURE__ */ React38.createElement("h5", {
    className: generatedClasses.title
  }, toastDataState.title), !isPending && /* @__PURE__ */ React38.createElement("button", {
    type: "button",
    className: generatedClasses.closeButton,
    onClick: handleDeleteToast
  }, /* @__PURE__ */ React38.createElement(react_fontawesome_default.FontAwesomeIcon, {
    icon: fortawesome_free_solid_svg_icons_default.faTimes,
    size: "xs"
  }))), /* @__PURE__ */ React38.createElement("div", {
    className: generatedClasses.toastFooter
  }, /* @__PURE__ */ React38.createElement(TxDetails_default, {
    transactions,
    title,
    isTimedOut
  }))))));
};
var TransactionToast_default = TransactionToast;

// src/UI/TransactionsToastList/index.tsx
function TransactionsToastList({
  shouldRenderDefaultCss = true,
  withTxNonce = false,
  className = "transactions-toast-list",
  pendingTransactions,
  signedTransactions,
  successfulToastLifetime
}) {
  const [toastsIds, setToastsIds] = useState12([]);
  const pendingTransactionsFromStore = useGetPendingTransactions().pendingTransactions;
  const signedTransactionsFromStore = useGetSignedTransactions().signedTransactions;
  const pendingTransactionsToRender = pendingTransactions || pendingTransactionsFromStore;
  const signedTransactionsToRender = signedTransactions || signedTransactionsFromStore;
  const generatedClasses = getGeneratedClasses(className, shouldRenderDefaultCss, {
    wrapper: "toast-messages d-flex flex-column align-items-center justify-content-sm-end",
    toast: ""
  });
  const mappedToastsList = toastsIds == null ? void 0 : toastsIds.map((toastId) => {
    const currentTx = signedTransactionsToRender[toastId];
    if (currentTx == null || (currentTx == null ? void 0 : currentTx.transactions) == null || (currentTx == null ? void 0 : currentTx.status) == null) {
      return null;
    }
    const { transactions, status } = currentTx;
    return /* @__PURE__ */ React39.createElement(TransactionToast_default, {
      className,
      key: toastId,
      transactions,
      status,
      toastId,
      withTxNonce,
      lifetimeAfterSuccess: successfulToastLifetime
    });
  });
  const mapPendingSignedTransactions = () => {
    const newToasts = [...toastsIds];
    for (const sessionId in pendingTransactionsToRender) {
      const hasToast = toastsIds.includes(sessionId);
      if (!hasToast) {
        newToasts.push(sessionId);
      }
    }
    setToastsIds(newToasts);
  };
  const fetchSessionStorageToasts = () => {
    const sessionStorageToastsIds = getToastsIdsFromStorage();
    if (sessionStorageToastsIds) {
      const newToasts = [...toastsIds, ...sessionStorageToastsIds];
      setToastsIds(newToasts);
    }
  };
  const saveSessionStorageToasts = () => {
    const shouldSaveLocalToasts = Boolean(toastsIds.length);
    if (!shouldSaveLocalToasts) {
      return;
    }
    setToastsIdsToStorage(toastsIds);
  };
  useEffect10(() => {
    fetchSessionStorageToasts();
    return () => {
      saveSessionStorageToasts();
    };
  }, []);
  useEffect10(() => {
    mapPendingSignedTransactions();
  }, [pendingTransactionsToRender]);
  return /* @__PURE__ */ React39.createElement("div", {
    className: generatedClasses.wrapper
  }, mappedToastsList);
}
var TransactionsToastList_default = TransactionsToastList;

// src/UI/UsdValue/index.tsx
init_shim();
import * as React40 from "react";
var UsdValue = (props) => {
  const _a = props, { amount, usd } = _a, dataTestId = __objRest(_a, ["amount", "usd"]);
  const value = `\u2248 $${getUsdValue({ amount, usd })}`;
  return /* @__PURE__ */ React40.createElement("small", __spreadValues({
    className: "form-text text-secondary mt-0"
  }, dataTestId), `${amount}` === "0" ? "= $0" : value);
};
var UsdValue_default = UsdValue;

// src/UI/index.tsx
var UI_default = {
  ExplorerLink: ExplorerLink_default,
  Denominate: Denominate_default,
  PageState: PageState_default,
  ExtensionLoginButton: LoginButton_default,
  LedgerLoginButton: LoginButton_default2,
  LedgerLoginContainer: LoginModal_default,
  NotificationModal: NotificationModal_default,
  SignTransactionsModals: SignTransactionsModals_default,
  SignWithLedgerModal: SignWithLedgerModal_default,
  SignWithDeviceModal: SignWithDeviceModal_default,
  SignWithExtensionModal: SignWithExtensionModal_default,
  TransactionsToastList: TransactionsToastList_default,
  TransactionToast: TransactionToast_default,
  WalletConnectLoginButton: WalletConnectLoginButton_default,
  WalletConnectLoginContainer: WalletConnectLoginContainer_default,
  WebWalletLoginButton: LoginButton_default3,
  Trim: Trim_default,
  UsdValue: UsdValue_default,
  ProgressSteps: ProgressSteps_default,
  UnlockPage: UnlockPage_default
};
export {
  UI_default as default
};
/*!
 * The buffer module from node.js, for the browser.
 *
 * @author   Feross Aboukhadijeh <https://feross.org>
 * @license  MIT
 */
/*! ieee754. BSD-3-Clause License. Feross Aboukhadijeh <https://feross.org/opensource> */
//# sourceMappingURL=index.js.map
