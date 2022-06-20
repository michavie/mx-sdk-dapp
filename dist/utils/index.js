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

// src/constants/index.ts
init_shim();

// src/constants/errorsMessages.ts
init_shim();

// src/constants/network.ts
init_shim();

// src/constants/ledgerErrorCodes.ts
init_shim();

// src/constants/mnemonicWords.ts
init_shim();

// src/constants/index.ts
var gasLimit = "50000";
var gasPrice = 1e9;
var denomination = 18;
var decimals = 4;
var version = 1;

// src/types/enums.ts
init_shim();

// src/providers/utils.ts
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
import sessionStorage3 from "redux-persist/es/storage/session";

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

// src/utils/internal/getBridgeAddressFromNetwork.ts
init_shim();
function getBridgeAddressFromNetwork(walletConnectBridgeAddresses) {
  return walletConnectBridgeAddresses[Math.floor(Math.random() * walletConnectBridgeAddresses.length)];
}

// src/utils/internal/getLedgerErrorCodes.ts
init_shim();

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
function encodeToBase64(string) {
  return btoa(string);
}
function decodeBase64(string) {
  return atob(string);
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
import sessionStorage2 from "redux-persist/es/storage/session";
var reducers = {
  account: accountInfoSlice_default,
  networkConfig: networkConfigSlice_default,
  loginInfo: loginInfoSlice_default,
  modals: modalsSlice_default,
  transactions: transactionsSlice_default,
  transactionsInfo: transactionsInfoSlice_default
};
if (typeof window !== "undefined" && window.localStorage != null) {
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
  const persistConfig = {
    key: "dapp-core-store",
    version: 2,
    storage: sessionStorage3,
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
function getChainID() {
  return chainIDSelector(store.getState());
}

// src/utils/network/getNetworkConfig.ts
init_shim();
function getNetworkConfig() {
  return networkSelector(store.getState());
}

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
var getAddress_default = getAddress;

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
var getAccount_default = getAccount;

// src/utils/account/setNonce.tsx
init_shim();
function setNonce(nonce) {
  store.dispatch(setAccountNonce(nonce));
}

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
var getLatestNonce_default = getLatestNonce;

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
var setNewAccount = () => __async(void 0, null, function* () {
  try {
    const address = yield getAddress_default();
    try {
      const account = yield getAccount_default(address);
      if (account != null) {
        const accountData = {
          balance: account.balance.toFixed(),
          address,
          nonce: getLatestNonce_default(account),
          username: account.userName
        };
        store.dispatch(setAccount(accountData));
        return accountData;
      }
    } catch (e) {
      console.error("Failed getting account ", e);
    }
  } catch (e) {
    console.error("Failed getting address ", e);
  }
  return null;
});
function refreshAccount() {
  return __async(this, null, function* () {
    const provider = getAccountProvider();
    if (provider == null) {
      throw "Provider not initialized";
    }
    if (!provider.isInitialized || provider.isInitialized()) {
      return setNewAccount();
    } else {
      try {
        if (!provider.init) {
          throw "Current provider does not have init() function";
        }
        const initialized = yield provider.init();
        if (!initialized) {
          return;
        }
        return setNewAccount();
      } catch (e) {
        console.error("Failed initializing provider ", e);
      }
    }
    return void 0;
  });
}

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
function signMessage(_0) {
  return __async(this, arguments, function* ({ message, callbackRoute }) {
    const address = yield getAddress();
    const provider = getAccountProvider();
    const callbackUrl = `${window.location.origin}${callbackRoute}`;
    const signableMessage = new SignableMessage({
      address: new Address6(address),
      message: import_buffer.Buffer.from(message, "ascii")
    });
    const signedMessage = yield provider.signMessage(signableMessage, {
      callbackUrl: encodeURIComponent(callbackUrl)
    });
    return signedMessage;
  });
}

// src/utils/account/loginWithExternalProvider.ts
init_shim();
function loginWithExternalProvider(address) {
  store.dispatch(loginAction({ address, loginMethod: "extra" /* extra */ }));
}

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
function buildUrlParams2(search, urlParams) {
  const urlSearchParams = new URLSearchParams(search);
  const params = Object.fromEntries(urlSearchParams);
  const nextUrlParams = new URLSearchParams(__spreadValues(__spreadValues({}, params), urlParams)).toString();
  return { nextUrlParams, params };
}

// src/utils/switchTrue.ts
init_shim();
function switchTrue(object) {
  const _a = object, { default: defaultValue } = _a, rest = __objRest(_a, ["default"]);
  const obj = __spreadValues({ default: defaultValue }, rest);
  const result = Object.keys(obj).reduce((acc, cur) => {
    return __spreadProps(__spreadValues({}, acc), {
      [cur === "default" ? "true" : cur]: obj[cur]
    });
  }, {});
  return result["true"];
}

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
var stringIsFloat = (amount) => {
  let [wholes, decimals2] = amount.split(".");
  if (decimals2) {
    while (decimals2.charAt(decimals2.length - 1) === "0") {
      decimals2 = decimals2.slice(0, -1);
    }
  }
  const number = decimals2 ? [wholes, decimals2].join(".") : wholes;
  const bNparsed = new BigNumber4(number);
  return bNparsed.toString(10) === number && bNparsed.comparedTo(0) >= 0;
};

// src/utils/validation/maxDecimals.ts
init_shim();
var maxDecimals = (amount, customDenomination) => {
  const denomination2 = customDenomination === void 0 ? denomination : customDenomination;
  if (amount !== void 0 && amount.toString().indexOf(".") >= 0 && amount.toString().split(".").pop().length > denomination2) {
    return false;
  }
  return true;
};

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
function nominate(input, customDenomination = denomination) {
  return TokenPayment2.fungibleFromAmount("", input, customDenomination).toString();
}

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
var placeholderData = {
  from: "erd12dnfhej64s6c56ka369gkyj3hwv5ms0y5rxgsk2k7hkd2vuk7rvqxkalsa",
  to: "erd12dnfhej64s6c56ka369gkyj3hwv5ms0y5rxgsk2k7hkd2vuk7rvqxkalsa"
};
function calculateFeeLimit({
  minGasLimit = "50000",
  gasLimit: gasLimit2,
  gasPrice: gasPrice2,
  data: inputData,
  gasPerDataByte,
  gasPriceModifier,
  defaultGasPrice = "1000000000",
  chainId
}) {
  const data = inputData || "";
  const validGasLimit = stringIsInteger(gasLimit2) ? gasLimit2 : minGasLimit;
  const validGasPrice = stringIsFloat(gasPrice2) ? gasPrice2 : defaultGasPrice;
  const transaction = new Transaction2({
    nonce: 0,
    value: TokenPayment3.egldFromAmount("0"),
    receiver: new Address7(placeholderData.to),
    gasPrice: parseInt(validGasPrice),
    gasLimit: parseInt(validGasLimit),
    data: new TransactionPayload2(data.trim()),
    chainID: chainId,
    version: new TransactionVersion2(1)
  });
  const networkConfig = new NetworkConfig();
  networkConfig.MinGasLimit = parseInt(minGasLimit);
  networkConfig.GasPerDataByte = parseInt(gasPerDataByte);
  networkConfig.GasPriceModifier = parseFloat(gasPriceModifier);
  try {
    const bNfee = transaction.computeFee(networkConfig);
    const fee = bNfee.toString(10);
    return fee;
  } catch (err) {
    return "0";
  }
}

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
function getRemainingTime(ms) {
  const days = Math.floor(ms / (24 * 60 * 60 * 1e3));
  const daysms = ms % (24 * 60 * 60 * 1e3);
  const hrs = Math.floor(daysms / (60 * 60 * 1e3));
  const hrsms = daysms % (60 * 60 * 1e3);
  const mins = Math.floor(hrsms / (60 * 1e3));
  const minsms = hrsms % (60 * 1e3);
  const secs = Math.floor(minsms / 1e3);
  let secsString = secs + " sec";
  let minsString = mins + " min";
  let hrsString = hrs + " hr";
  let daysString = days + " day";
  if (secs > 1) {
    secsString = secs + " secs";
  }
  if (mins > 1) {
    minsString = mins + " mins";
  }
  if (hrs > 1) {
    hrsString = hrs + " hrs";
  }
  if (days > 1) {
    daysString = days + " days";
  }
  if (days >= 1) {
    return daysString + " " + hrsString;
  }
  if (hrs >= 1) {
    const minutesString = mins === 0 ? "" : " " + minsString;
    return hrsString + minutesString;
  }
  if (mins >= 1) {
    const secString = secs === 0 ? "" : " " + secsString;
    return minsString + secString;
  }
  return secsString;
}
function timeRemaining(duration) {
  const startDate = moment3.utc();
  const endDate = moment3.utc().add(duration, "seconds");
  const diffInMs = Math.max(endDate.diff(startDate), 0);
  let remaning = getRemainingTime(diffInMs);
  const parts = remaning.split(" ");
  if (parts.length > 1) {
    remaning = `${parts[0]} ${parts[1]}`;
  }
  return remaning;
}

// src/utils/smartContracts.ts
init_shim();
import { Address as Address8, TransactionPayload as TransactionPayload3 } from "@elrondnetwork/erdjs";
var ESDTTransferTypes = [
  "ESDTNFTTransfer",
  "ESDTNFTBurn",
  "ESDTNFTAddQuantity",
  "ESDTNFTCreate",
  "MultiESDTNFTTransfer",
  "ESDTTransfer",
  "ESDTBurn",
  "ESDTLocalMint",
  "ESDTLocalBurn",
  "ESDTWipe",
  "ESDTFreeze"
];
function isContract(receiver, sender, data = "") {
  const isValid = addressIsValid(receiver);
  if (!isValid) {
    return false;
  }
  const isContract2 = new Address8(receiver).isContractAddress();
  if (isContract2) {
    return true;
  }
  const extractedAddress = getAddressFromDataField({ receiver, data });
  if (!extractedAddress) {
    return false;
  }
  const isExtractedAddressContractCall = new Address8(extractedAddress).isContractAddress();
  return isExtractedAddressContractCall || isSelfESDTContract(receiver, sender, data);
}
var isHexValidCharacters = (str) => {
  return str.toLowerCase().match(/[0-9a-f]/g);
};
var isHexValidLength = (str) => {
  return str.length % 2 === 0;
};
function isSelfESDTContract(receiver, sender, data) {
  const parts = data == null ? void 0 : data.split("@");
  if (parts == null) {
    return false;
  }
  const [type, ...restParts] = parts;
  const isSelfTransaction = sender != null && receiver != null && receiver === sender;
  const isCorrectESDTType = ESDTTransferTypes.includes(type);
  const areDataPartsValid = restParts.every((part) => isHexValidCharacters(part) && isHexValidLength(part));
  return isSelfTransaction && isCorrectESDTType && areDataPartsValid;
}
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
export {
  ESDTTransferTypes,
  addressIsValid,
  buildUrlParams2 as buildUrlParams,
  builtCallbackUrl,
  calculateFeeLimit,
  decodeBase64,
  decodePart,
  denominate,
  encodeToBase64,
  failBatchTransactionsStates,
  failServerTransactionsStates,
  getAccount,
  getAccountBalance,
  getAccountProviderType,
  getAddress,
  getAddressFromDataField,
  getChainID,
  getEgldLabel,
  getGeneratedClasses,
  getIdentifierType,
  getIsLoggedIn,
  getIsProviderEqualTo,
  getIsTransactionFailed,
  getIsTransactionPending,
  getIsTransactionSuccessful,
  getIsTransactionTimedOut,
  getLatestNonce,
  getNetworkConfig,
  getRemainingTime,
  getShardOfAddress,
  getTokenFromData,
  getUsdValue,
  isBatchTransactionFailed,
  isBatchTransactionPending,
  isBatchTransactionSuccessful,
  isBatchTransactionTimedOut,
  isContract,
  isSelfESDTContract,
  isServerTransactionFailed,
  isServerTransactionPending,
  isServerTransactionSuccessful,
  isStringBase64,
  isTokenTransfer,
  logarithmicRest,
  loginWithExternalProvider,
  logout,
  maxDecimals,
  nominate,
  parseMultiEsdtTransferData,
  parseTransactionAfterSigning,
  pendingBatchTransactionsStates,
  pendingServerTransactionsStatuses,
  pipe,
  preventRedirects,
  refreshAccount,
  safeRedirect,
  setNonce,
  signMessage,
  storage2 as storage,
  stringIsFloat,
  stringIsInteger,
  successBatchTransactionsStates,
  successServerTransactionsStates,
  switchTrue,
  timeRemaining,
  timedOutBatchTransactionsStates
};
/*!
 * The buffer module from node.js, for the browser.
 *
 * @author   Feross Aboukhadijeh <https://feross.org>
 * @license  MIT
 */
/*! ieee754. BSD-3-Clause License. Feross Aboukhadijeh <https://feross.org/opensource> */
//# sourceMappingURL=index.js.map
