(function(){var supportsDirectProtoAccess=function(){var z=function(){}
z.prototype={p:{}}
var y=new z()
if(!(y.__proto__&&y.__proto__.p===z.prototype.p))return false
try{if(typeof navigator!="undefined"&&typeof navigator.userAgent=="string"&&navigator.userAgent.indexOf("Chrome/")>=0)return true
if(typeof version=="function"&&version.length==0){var x=version()
if(/^\d+\.\d+\.\d+\.\d+$/.test(x))return true}}catch(w){}return false}()
function map(a){a=Object.create(null)
a.x=0
delete a.x
return a}var A=map()
var B=map()
var C=map()
var D=map()
var E=map()
var F=map()
var G=map()
var H=map()
var J=map()
var K=map()
var L=map()
var M=map()
var N=map()
var O=map()
var P=map()
var Q=map()
var R=map()
var S=map()
var T=map()
var U=map()
var V=map()
var W=map()
var X=map()
var Y=map()
var Z=map()
function I(){}init()
function setupProgram(a,b,c){"use strict"
function generateAccessor(b0,b1,b2){var g=b0.split("-")
var f=g[0]
var e=f.length
var d=f.charCodeAt(e-1)
var a0
if(g.length>1)a0=true
else a0=false
d=d>=60&&d<=64?d-59:d>=123&&d<=126?d-117:d>=37&&d<=43?d-27:0
if(d){var a1=d&3
var a2=d>>2
var a3=f=f.substring(0,e-1)
var a4=f.indexOf(":")
if(a4>0){a3=f.substring(0,a4)
f=f.substring(a4+1)}if(a1){var a5=a1&2?"r":""
var a6=a1&1?"this":"r"
var a7="return "+a6+"."+f
var a8=b2+".prototype.g"+a3+"="
var a9="function("+a5+"){"+a7+"}"
if(a0)b1.push(a8+"$reflectable("+a9+");\n")
else b1.push(a8+a9+";\n")}if(a2){var a5=a2&2?"r,v":"v"
var a6=a2&1?"this":"r"
var a7=a6+"."+f+"=v"
var a8=b2+".prototype.s"+a3+"="
var a9="function("+a5+"){"+a7+"}"
if(a0)b1.push(a8+"$reflectable("+a9+");\n")
else b1.push(a8+a9+";\n")}}return f}function defineClass(a4,a5){var g=[]
var f="function "+a4+"("
var e="",d=""
for(var a0=0;a0<a5.length;a0++){var a1=a5[a0]
if(a1.charCodeAt(0)==48){a1=a1.substring(1)
var a2=generateAccessor(a1,g,a4)
d+="this."+a2+" = null;\n"}else{var a2=generateAccessor(a1,g,a4)
var a3="p_"+a2
f+=e
e=", "
f+=a3
d+="this."+a2+" = "+a3+";\n"}}if(supportsDirectProtoAccess)d+="this."+"$deferredAction"+"();"
f+=") {\n"+d+"}\n"
f+=a4+".builtin$cls=\""+a4+"\";\n"
f+="$desc=$collectedClasses."+a4+"[1];\n"
f+=a4+".prototype = $desc;\n"
if(typeof defineClass.name!="string")f+=a4+".name=\""+a4+"\";\n"
f+=g.join("")
return f}var z=supportsDirectProtoAccess?function(d,e){var g=d.prototype
g.__proto__=e.prototype
g.constructor=d
g["$is"+d.name]=d
return convertToFastObject(g)}:function(){function tmp(){}return function(a1,a2){tmp.prototype=a2.prototype
var g=new tmp()
convertToSlowObject(g)
var f=a1.prototype
var e=Object.keys(f)
for(var d=0;d<e.length;d++){var a0=e[d]
g[a0]=f[a0]}g["$is"+a1.name]=a1
g.constructor=a1
a1.prototype=g
return g}}()
function finishClasses(a5){var g=init.allClasses
a5.combinedConstructorFunction+="return [\n"+a5.constructorsList.join(",\n  ")+"\n]"
var f=new Function("$collectedClasses",a5.combinedConstructorFunction)(a5.collected)
a5.combinedConstructorFunction=null
for(var e=0;e<f.length;e++){var d=f[e]
var a0=d.name
var a1=a5.collected[a0]
var a2=a1[0]
a1=a1[1]
g[a0]=d
a2[a0]=d}f=null
var a3=init.finishedClasses
function finishClass(b5){if(a3[b5])return
a3[b5]=true
var a6=a5.pending[b5]
if(!a6||typeof a6!="string"){var a7=g[b5]
var a8=a7.prototype
a8.constructor=a7
a8.$isc=a7
a8.$deferredAction=function(){}
return}finishClass(a6)
var a9=g[a6]
if(!a9)a9=existingIsolateProperties[a6]
var a7=g[b5]
var a8=z(a7,a9)
if(Object.prototype.hasOwnProperty.call(a8,"%")){var b0=a8["%"].split(";")
if(b0[0]){var b1=b0[0].split("|")
for(var b2=0;b2<b1.length;b2++){init.interceptorsByTag[b1[b2]]=a7
init.leafTags[b1[b2]]=true}}if(b0[1]){b1=b0[1].split("|")
if(b0[2]){var b3=b0[2].split("|")
for(var b2=0;b2<b3.length;b2++){var b4=g[b3[b2]]
b4.$nativeSuperclassTag=b1[0]}}for(b2=0;b2<b1.length;b2++){init.interceptorsByTag[b1[b2]]=a7
init.leafTags[b1[b2]]=false}}a8.$deferredAction()}if(a8.$isf)a8.$deferredAction()}var a4=Object.keys(a5.pending)
for(var e=0;e<a4.length;e++)finishClass(a4[e])}function finishAddStubsHelper(){var g=this
while(!g.hasOwnProperty("$deferredAction"))g=g.__proto__
delete g.$deferredAction
var f=Object.keys(g)
for(var e=0;e<f.length;e++){var d=f[e]
var a0=d.charCodeAt(0)
var a1
if(d!=="^"&&d!=="$reflectable"&&a0!==43&&a0!==42&&(a1=g[d])!=null&&a1.constructor===Array&&d!=="<>")addStubs(g,a1,d,false,[])}convertToFastObject(g)
g=g.__proto__
g.$deferredAction()}function processClassData(b2,b3,b4){b3=convertToSlowObject(b3)
var g
var f=Object.keys(b3)
var e=false
var d=supportsDirectProtoAccess&&b2!="c"
for(var a0=0;a0<f.length;a0++){var a1=f[a0]
var a2=a1.charCodeAt(0)
if(a1==="i"){processStatics(init.statics[b2]=b3.i,b4)
delete b3.i}else if(a2===43){w[g]=a1.substring(1)
var a3=b3[a1]
if(a3>0)b3[g].$reflectable=a3}else if(a2===42){b3[g].$D=b3[a1]
var a4=b3.$methodsWithOptionalArguments
if(!a4)b3.$methodsWithOptionalArguments=a4={}
a4[a1]=g}else{var a5=b3[a1]
if(a1!=="^"&&a5!=null&&a5.constructor===Array&&a1!=="<>")if(d)e=true
else addStubs(b3,a5,a1,false,[])
else g=a1}}if(e)b3.$deferredAction=finishAddStubsHelper
var a6=b3["^"],a7,a8,a9=a6
var b0=a9.split(";")
a9=b0[1]?b0[1].split(","):[]
a8=b0[0]
a7=a8.split(":")
if(a7.length==2){a8=a7[0]
var b1=a7[1]
if(b1)b3.$S=function(b5){return function(){return init.types[b5]}}(b1)}if(a8)b4.pending[b2]=a8
b4.combinedConstructorFunction+=defineClass(b2,a9)
b4.constructorsList.push(b2)
b4.collected[b2]=[m,b3]
i.push(b2)}function processStatics(a4,a5){var g=Object.keys(a4)
for(var f=0;f<g.length;f++){var e=g[f]
if(e==="^")continue
var d=a4[e]
var a0=e.charCodeAt(0)
var a1
if(a0===43){v[a1]=e.substring(1)
var a2=a4[e]
if(a2>0)a4[a1].$reflectable=a2
if(d&&d.length)init.typeInformation[a1]=d}else if(a0===42){m[a1].$D=d
var a3=a4.$methodsWithOptionalArguments
if(!a3)a4.$methodsWithOptionalArguments=a3={}
a3[e]=a1}else if(typeof d==="function"){m[a1=e]=d
h.push(e)}else if(d.constructor===Array)addStubs(m,d,e,true,h)
else{a1=e
processClassData(e,d,a5)}}}function addStubs(b6,b7,b8,b9,c0){var g=0,f=g,e=b7[g],d
if(typeof e=="string")d=b7[++g]
else{d=e
e=b8}if(typeof d=="number"){f=d
d=b7[++g]}b6[b8]=b6[e]=d
var a0=[d]
d.$stubName=b8
c0.push(b8)
for(g++;g<b7.length;g++){d=b7[g]
if(typeof d!="function")break
if(!b9)d.$stubName=b7[++g]
a0.push(d)
if(d.$stubName){b6[d.$stubName]=d
c0.push(d.$stubName)}}for(var a1=0;a1<a0.length;g++,a1++)a0[a1].$callName=b7[g]
var a2=b7[g]
b7=b7.slice(++g)
var a3=b7[0]
var a4=(a3&1)===1
a3=a3>>1
var a5=a3>>1
var a6=(a3&1)===1
var a7=a3===3
var a8=a3===1
var a9=b7[1]
var b0=a9>>1
var b1=(a9&1)===1
var b2=a5+b0
var b3=b7[2]
if(typeof b3=="number")b7[2]=b3+c
if(b>0){var b4=3
for(var a1=0;a1<b0;a1++){if(typeof b7[b4]=="number")b7[b4]=b7[b4]+b
b4++}for(var a1=0;a1<b2;a1++){b7[b4]=b7[b4]+b
b4++}}var b5=2*b0+a5+3
if(a2){d=tearOff(a0,f,b7,b9,b8,a4)
b6[b8].$getter=d
d.$getterStub=true
if(b9)c0.push(a2)
b6[a2]=d
a0.push(d)
d.$stubName=a2
d.$callName=null}}function tearOffGetter(d,e,f,g,a0){return a0?new Function("funcs","applyTrampolineIndex","reflectionInfo","name","H","c","return function tearOff_"+g+y+++"(x) {"+"if (c === null) c = "+"H.ap"+"("+"this, funcs, applyTrampolineIndex, reflectionInfo, false, [x], name);"+"return new c(this, funcs[0], x, name);"+"}")(d,e,f,g,H,null):new Function("funcs","applyTrampolineIndex","reflectionInfo","name","H","c","return function tearOff_"+g+y+++"() {"+"if (c === null) c = "+"H.ap"+"("+"this, funcs, applyTrampolineIndex, reflectionInfo, false, [], name);"+"return new c(this, funcs[0], null, name);"+"}")(d,e,f,g,H,null)}function tearOff(d,e,f,a0,a1,a2){var g
return a0?function(){if(g===void 0)g=H.ap(this,d,e,f,true,[],a1).prototype
return g}:tearOffGetter(d,e,f,a1,a2)}var y=0
if(!init.libraries)init.libraries=[]
if(!init.mangledNames)init.mangledNames=map()
if(!init.mangledGlobalNames)init.mangledGlobalNames=map()
if(!init.statics)init.statics=map()
if(!init.typeInformation)init.typeInformation=map()
var x=init.libraries
var w=init.mangledNames
var v=init.mangledGlobalNames
var u=Object.prototype.hasOwnProperty
var t=a.length
var s=map()
s.collected=map()
s.pending=map()
s.constructorsList=[]
s.combinedConstructorFunction="function $reflectable(fn){fn.$reflectable=1;return fn};\n"+"var $desc;\n"
for(var r=0;r<t;r++){var q=a[r]
var p=q[0]
var o=q[1]
var n=q[2]
var m=q[3]
var l=q[4]
var k=!!q[5]
var j=l&&l["^"]
if(j instanceof Array)j=j[0]
var i=[]
var h=[]
processStatics(l,s)
x.push([p,o,i,h,n,j,k,m])}finishClasses(s)}I.bf=function(){}
var dart=[["","",,H,{"^":"",ee:{"^":"c;a"}}],["","",,J,{"^":"",
h:function(a){return void 0},
au:function(a,b,c,d){return{i:a,p:b,e:c,x:d}},
bj:function(a){var z,y,x,w,v
z=a[init.dispatchPropertyName]
if(z==null)if($.ar==null){H.cP()
z=a[init.dispatchPropertyName]}if(z!=null){y=z.p
if(!1===y)return z.i
if(!0===y)return a
x=Object.getPrototypeOf(a)
if(y===x)return z.i
if(z.e===x)throw H.e(P.b2("Return interceptor for "+H.b(y(a,z))))}w=a.constructor
v=w==null?null:w[$.$get$ag()]
if(v!=null)return v
v=H.cV(a)
if(v!=null)return v
if(typeof a=="function")return C.w
y=Object.getPrototypeOf(a)
if(y==null)return C.i
if(y===Object.prototype)return C.i
if(typeof w=="function"){Object.defineProperty(w,$.$get$ag(),{value:C.d,enumerable:false,writable:true,configurable:true})
return C.d}return C.d},
f:{"^":"c;",
h:["J",function(a){return"Instance of '"+H.F(a)+"'"}]},
bP:{"^":"f;",
h:function(a){return String(a)},
$iscE:1},
bR:{"^":"f;",
h:function(a){return"null"},
$ist:1},
ai:{"^":"f;",
h:["K",function(a){return String(a)}]},
bX:{"^":"ai;"},
a_:{"^":"ai;"},
ah:{"^":"ai;",
h:function(a){var z=a[$.$get$aB()]
if(z==null)return this.K(a)
return"JavaScript function for "+H.b(J.S(z))},
$S:function(){return{func:1,opt:[,,,,,,,,,,,,,,,,]}},
$isae:1},
K:{"^":"f;$ti",
m:function(a,b){H.N(b,H.P(a,0))
if(!!a.fixed$length)H.av(P.a0("add"))
a.push(b)},
V:function(a,b){var z,y
H.m(b,{func:1,ret:-1,args:[H.P(a,0)]})
z=a.length
for(y=0;y<z;++y){b.$1(a[y])
if(a.length!==z)throw H.e(P.ad(a))}},
q:function(a,b){if(b<0||b>=a.length)return H.k(a,b)
return a[b]},
h:function(a){return P.bM(a,"[","]")},
gj:function(a){return a.length},
G:function(a,b,c){H.N(c,H.P(a,0))
if(!!a.immutable$list)H.av(P.a0("indexed set"))
if(b>=a.length||!1)throw H.e(H.aq(a,b))
a[b]=c},
$isJ:1,
$isp:1,
i:{
bO:function(a,b){return J.L(H.Q(a,[b]))},
L:function(a){H.a8(a)
a.fixed$length=Array
return a}}},
ed:{"^":"K;$ti"},
by:{"^":"c;a,b,c,0d,$ti",
gp:function(){return this.d},
l:function(){var z,y,x
z=this.a
y=z.length
if(this.b!==y)throw H.e(H.cZ(z))
x=this.c
if(x>=y){this.d=null
return!1}this.d=z[x]
this.c=x+1
return!0}},
X:{"^":"f;",
X:function(a){if(a>0){if(a!==1/0)return Math.round(a)}else if(a>-1/0)return 0-Math.round(0-a)
throw H.e(P.a0(""+a+".round()"))},
h:function(a){if(a===0&&1/a<0)return"-0.0"
else return""+a},
S:function(a,b){var z
if(a>0)z=this.R(a,b)
else{z=b>31?31:b
z=a>>z>>>0}return z},
R:function(a,b){return b>31?0:a>>>b},
H:function(a,b){if(typeof b!=="number")throw H.e(H.a4(b))
return a<b},
$isbd:1,
$isq:1},
aF:{"^":"X;",$iscR:1},
bQ:{"^":"X;"},
af:{"^":"f;",
N:function(a,b){if(b>=a.length)throw H.e(H.aq(a,b))
return a.charCodeAt(b)},
n:function(a,b){H.l(b)
if(typeof b!=="string")throw H.e(P.bx(b,null,null))
return a+b},
A:function(a,b,c){if(c==null)c=a.length
if(b>c)throw H.e(P.ak(b,null,null))
if(c>a.length)throw H.e(P.ak(c,null,null))
return a.substring(b,c)},
I:function(a,b){return this.A(a,b,null)},
h:function(a){return a},
gj:function(a){return a.length},
$isA:1}}],["","",,H,{"^":"",bI:{"^":"J;"},Y:{"^":"bI;$ti",
gw:function(a){return new H.bT(this,this.gj(this),0,[H.bk(this,"Y",0)])},
Z:function(a,b){var z,y,x
z=new Array(this.gj(this))
z.fixed$length=Array
y=H.Q(z,[H.bk(this,"Y",0)])
for(x=0;x<this.gj(this);++x)C.a.G(y,x,this.q(0,x))
return y}},bT:{"^":"c;a,b,c,0d,$ti",
gp:function(){return this.d},
l:function(){var z,y,x
z=this.a
y=z.gj(z)
if(this.b!==y)throw H.e(P.ad(z))
x=this.c
if(x>=y){this.d=null
return!1}this.d=z.q(0,x);++this.c
return!0}},bU:{"^":"Y;a,b,$ti",
gj:function(a){return J.R(this.a)},
q:function(a,b){return this.b.$1(J.bw(this.a,b))},
$asY:function(a,b){return[b]},
$asJ:function(a,b){return[b]}}}],["","",,H,{"^":"",
cK:function(a){return init.types[H.w(a)]},
b:function(a){var z
if(typeof a==="string")return a
if(typeof a==="number"){if(a!==0)return""+a}else if(!0===a)return"true"
else if(!1===a)return"false"
else if(a==null)return"null"
z=J.S(a)
if(typeof z!=="string")throw H.e(H.a4(a))
return z},
F:function(a){var z,y,x,w,v,u,t,s,r
z=J.h(a)
y=z.constructor
if(typeof y=="function"){x=y.name
w=typeof x==="string"?x:null}else w=null
if(w==null||z===C.m||!!J.h(a).$isa_){v=C.f(a)
if(v==="Object"){u=a.constructor
if(typeof u=="function"){t=String(u).match(/^\s*function\s*([\w$]*)\s*\(/)
s=t==null?null:t[1]
if(typeof s==="string"&&/^\w+$/.test(s))w=s}if(w==null)w=v}else w=v}w=w
if(w.length>1&&C.c.N(w,0)===36)w=C.c.I(w,1)
r=H.as(H.a8(H.C(a)),0,null)
return function(b,c){return b.replace(/[^<,> ]+/g,function(d){return c[d]||d})}(w+r,init.mangledGlobalNames)},
bm:function(a){throw H.e(H.a4(a))},
k:function(a,b){if(a==null)J.R(a)
throw H.e(H.aq(a,b))},
aq:function(a,b){var z,y
if(typeof b!=="number"||Math.floor(b)!==b)return new P.D(!0,b,"index",null)
z=J.R(a)
if(!(b<0)){if(typeof z!=="number")return H.bm(z)
y=b>=z}else y=!0
if(y)return P.aE(b,a,"index",null,z)
return P.ak(b,"index",null)},
a4:function(a){return new P.D(!0,a,null,null)},
bb:function(a){if(typeof a!=="number")throw H.e(H.a4(a))
return a},
e:function(a){var z
if(a==null)a=new P.aJ()
z=new Error()
z.dartException=a
if("defineProperty" in Object){Object.defineProperty(z,"message",{get:H.bu})
z.name=""}else z.toString=H.bu
return z},
bu:function(){return J.S(this.dartException)},
av:function(a){throw H.e(a)},
cZ:function(a){throw H.e(P.ad(a))},
d0:function(a){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l
z=new H.d1(a)
if(a==null)return
if(typeof a!=="object")return a
if("dartException" in a)return z.$1(a.dartException)
else if(!("message" in a))return a
y=a.message
if("number" in a&&typeof a.number=="number"){x=a.number
w=x&65535
if((C.n.S(x,16)&8191)===10)switch(w){case 438:return z.$1(H.aj(H.b(y)+" (Error "+w+")",null))
case 445:case 5007:return z.$1(H.aI(H.b(y)+" (Error "+w+")",null))}}if(a instanceof TypeError){v=$.$get$aS()
u=$.$get$aT()
t=$.$get$aU()
s=$.$get$aV()
r=$.$get$aZ()
q=$.$get$b_()
p=$.$get$aX()
$.$get$aW()
o=$.$get$b1()
n=$.$get$b0()
m=v.k(y)
if(m!=null)return z.$1(H.aj(H.l(y),m))
else{m=u.k(y)
if(m!=null){m.method="call"
return z.$1(H.aj(H.l(y),m))}else{m=t.k(y)
if(m==null){m=s.k(y)
if(m==null){m=r.k(y)
if(m==null){m=q.k(y)
if(m==null){m=p.k(y)
if(m==null){m=s.k(y)
if(m==null){m=o.k(y)
if(m==null){m=n.k(y)
l=m!=null}else l=!0}else l=!0}else l=!0}else l=!0}else l=!0}else l=!0}else l=!0
if(l)return z.$1(H.aI(H.l(y),m))}}return z.$1(new H.cd(typeof y==="string"?y:""))}if(a instanceof RangeError){if(typeof y==="string"&&y.indexOf("call stack")!==-1)return new P.aM()
y=function(b){try{return String(b)}catch(k){}return null}(a)
return z.$1(new P.D(!1,null,null,typeof y==="string"?y.replace(/^RangeError:\s*/,""):y))}if(typeof InternalError=="function"&&a instanceof InternalError)if(typeof y==="string"&&y==="too much recursion")return new P.aM()
return a},
cJ:function(a){var z
if(a==null)return new H.b5(a)
z=a.$cachedTrace
if(z!=null)return z
return a.$cachedTrace=new H.b5(a)},
cT:function(a,b,c,d,e,f){H.a6(a,"$isae")
switch(H.w(b)){case 0:return a.$0()
case 1:return a.$1(c)
case 2:return a.$2(c,d)
case 3:return a.$3(c,d,e)
case 4:return a.$4(c,d,e,f)}throw H.e(new P.cl("Unsupported number of arguments for wrapped closure"))},
O:function(a,b){var z
H.w(b)
if(a==null)return
z=a.$identity
if(!!z)return z
z=function(c,d,e){return function(f,g,h,i){return e(c,d,f,g,h,i)}}(a,b,H.cT)
a.$identity=z
return z},
bE:function(a,b,c,d,e,f,g){var z,y,x,w,v,u,t,s,r,q,p,o,n,m
z=b[0]
y=z.$callName
if(!!J.h(d).$isp){z.$reflectionInfo=d
x=H.c0(z).r}else x=d
w=e?Object.create(new H.c9().constructor.prototype):Object.create(new H.aw(null,null,null,null).constructor.prototype)
w.$initialize=w.constructor
if(e)v=function(){this.$initialize()}
else{u=$.r
if(typeof u!=="number")return u.n()
$.r=u+1
u=new Function("a,b,c,d"+u,"this.$initialize(a,b,c,d"+u+")")
v=u}w.constructor=v
v.prototype=w
if(!e){t=f.length==1&&!0
s=H.aA(a,z,t)
s.$reflectionInfo=d}else{w.$static_name=g
s=z
t=!1}if(typeof x=="number")r=function(h,i){return function(){return h(i)}}(H.cK,x)
else if(typeof x=="function")if(e)r=x
else{q=t?H.ay:H.ab
r=function(h,i){return function(){return h.apply({$receiver:i(this)},arguments)}}(x,q)}else throw H.e("Error in reflectionInfo.")
w.$S=r
w[y]=s
for(u=b.length,p=s,o=1;o<u;++o){n=b[o]
m=n.$callName
if(m!=null){n=e?n:H.aA(a,n,t)
w[m]=n}if(o===c){n.$reflectionInfo=d
p=n}}w["call*"]=p
w.$R=z.$R
w.$D=z.$D
return v},
bB:function(a,b,c,d){var z=H.ab
switch(b?-1:a){case 0:return function(e,f){return function(){return f(this)[e]()}}(c,z)
case 1:return function(e,f){return function(g){return f(this)[e](g)}}(c,z)
case 2:return function(e,f){return function(g,h){return f(this)[e](g,h)}}(c,z)
case 3:return function(e,f){return function(g,h,i){return f(this)[e](g,h,i)}}(c,z)
case 4:return function(e,f){return function(g,h,i,j){return f(this)[e](g,h,i,j)}}(c,z)
case 5:return function(e,f){return function(g,h,i,j,k){return f(this)[e](g,h,i,j,k)}}(c,z)
default:return function(e,f){return function(){return e.apply(f(this),arguments)}}(d,z)}},
aA:function(a,b,c){var z,y,x,w,v,u,t
if(c)return H.bD(a,b)
z=b.$stubName
y=b.length
x=a[z]
w=b==null?x==null:b===x
v=!w||y>=27
if(v)return H.bB(y,!w,z,b)
if(y===0){w=$.r
if(typeof w!=="number")return w.n()
$.r=w+1
u="self"+w
w="return function(){var "+u+" = this."
v=$.E
if(v==null){v=H.U("self")
$.E=v}return new Function(w+H.b(v)+";return "+u+"."+H.b(z)+"();}")()}t="abcdefghijklmnopqrstuvwxyz".split("").splice(0,y).join(",")
w=$.r
if(typeof w!=="number")return w.n()
$.r=w+1
t+=w
w="return function("+t+"){return this."
v=$.E
if(v==null){v=H.U("self")
$.E=v}return new Function(w+H.b(v)+"."+H.b(z)+"("+t+");}")()},
bC:function(a,b,c,d){var z,y
z=H.ab
y=H.ay
switch(b?-1:a){case 0:throw H.e(H.c2("Intercepted function with no arguments."))
case 1:return function(e,f,g){return function(){return f(this)[e](g(this))}}(c,z,y)
case 2:return function(e,f,g){return function(h){return f(this)[e](g(this),h)}}(c,z,y)
case 3:return function(e,f,g){return function(h,i){return f(this)[e](g(this),h,i)}}(c,z,y)
case 4:return function(e,f,g){return function(h,i,j){return f(this)[e](g(this),h,i,j)}}(c,z,y)
case 5:return function(e,f,g){return function(h,i,j,k){return f(this)[e](g(this),h,i,j,k)}}(c,z,y)
case 6:return function(e,f,g){return function(h,i,j,k,l){return f(this)[e](g(this),h,i,j,k,l)}}(c,z,y)
default:return function(e,f,g,h){return function(){h=[g(this)]
Array.prototype.push.apply(h,arguments)
return e.apply(f(this),h)}}(d,z,y)}},
bD:function(a,b){var z,y,x,w,v,u,t,s
z=$.E
if(z==null){z=H.U("self")
$.E=z}y=$.ax
if(y==null){y=H.U("receiver")
$.ax=y}x=b.$stubName
w=b.length
v=a[x]
u=b==null?v==null:b===v
t=!u||w>=28
if(t)return H.bC(w,!u,x,b)
if(w===1){z="return function(){return this."+H.b(z)+"."+H.b(x)+"(this."+H.b(y)+");"
y=$.r
if(typeof y!=="number")return y.n()
$.r=y+1
return new Function(z+y+"}")()}s="abcdefghijklmnopqrstuvwxyz".split("").splice(0,w-1).join(",")
z="return function("+s+"){return this."+H.b(z)+"."+H.b(x)+"(this."+H.b(y)+", "+s+");"
y=$.r
if(typeof y!=="number")return y.n()
$.r=y+1
return new Function(z+y+"}")()},
ap:function(a,b,c,d,e,f,g){var z,y
z=J.L(H.a8(b))
H.w(c)
y=!!J.h(d).$isp?J.L(d):d
return H.bE(a,z,c,y,!!e,f,g)},
l:function(a){if(a==null)return a
if(typeof a==="string")return a
throw H.e(H.v(a,"String"))},
bq:function(a){if(a==null)return a
if(typeof a==="number")return a
throw H.e(H.v(a,"num"))},
w:function(a){if(a==null)return a
if(typeof a==="number"&&Math.floor(a)===a)return a
throw H.e(H.v(a,"int"))},
bs:function(a,b){throw H.e(H.v(a,H.l(b).substring(3)))},
cY:function(a,b){var z=J.bh(b)
throw H.e(H.bA(a,z.A(b,3,z.gj(b))))},
a6:function(a,b){if(a==null)return a
if((typeof a==="object"||typeof a==="function")&&J.h(a)[b])return a
H.bs(a,b)},
cS:function(a,b){var z
if(a!=null)z=(typeof a==="object"||typeof a==="function")&&J.h(a)[b]
else z=!0
if(z)return a
H.cY(a,b)},
a8:function(a){if(a==null)return a
if(!!J.h(a).$isp)return a
throw H.e(H.v(a,"List"))},
cU:function(a,b){if(a==null)return a
if(!!J.h(a).$isp)return a
if(J.h(a)[b])return a
H.bs(a,b)},
be:function(a){var z
if("$S" in a){z=a.$S
if(typeof z=="number")return init.types[H.w(z)]
else return a.$S()}return},
bg:function(a,b){var z,y
if(a==null)return!1
if(typeof a=="function")return!0
z=H.be(J.h(a))
if(z==null)return!1
y=H.bn(z,null,b,null)
return y},
m:function(a,b){var z,y
if(a==null)return a
if($.am)return a
$.am=!0
try{if(H.bg(a,b))return a
z=H.aa(b)
y=H.v(a,z)
throw H.e(y)}finally{$.am=!1}},
b7:function(a){var z
if(a instanceof H.i){z=H.be(J.h(a))
if(z!=null)return H.aa(z)
return"Closure"}return H.F(a)},
d_:function(a){throw H.e(new P.bG(H.l(a)))},
bi:function(a){return init.getIsolateTag(a)},
Q:function(a,b){a.$ti=b
return a},
C:function(a){if(a==null)return
return a.$ti},
fG:function(a,b,c){return H.I(a["$as"+H.b(c)],H.C(b))},
bk:function(a,b,c){var z
H.l(b)
H.w(c)
z=H.I(a["$as"+H.b(b)],H.C(a))
return z==null?null:z[c]},
P:function(a,b){var z
H.w(b)
z=H.C(a)
return z==null?null:z[b]},
aa:function(a){var z=H.x(a,null)
return z},
x:function(a,b){var z,y
H.ao(b,"$isp",[P.A],"$asp")
if(a==null)return"dynamic"
if(a===-1)return"void"
if(typeof a==="object"&&a!==null&&a.constructor===Array)return a[0].builtin$cls+H.as(a,1,b)
if(typeof a=="function")return a.builtin$cls
if(a===-2)return"dynamic"
if(typeof a==="number"){H.w(a)
if(b==null||a<0||a>=b.length)return"unexpected-generic-index:"+a
z=b.length
y=z-a-1
if(y<0||y>=z)return H.k(b,y)
return H.b(b[y])}if('func' in a)return H.ct(a,b)
if('futureOr' in a)return"FutureOr<"+H.x("type" in a?a.type:null,b)+">"
return"unknown-reified-type"},
ct:function(a,b){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h
z=[P.A]
H.ao(b,"$isp",z,"$asp")
if("bounds" in a){y=a.bounds
if(b==null){b=H.Q([],z)
x=null}else x=b.length
w=b.length
for(v=y.length,u=v;u>0;--u)C.a.m(b,"T"+(w+u))
for(t="<",s="",u=0;u<v;++u,s=", "){t+=s
z=b.length
r=z-u-1
if(r<0)return H.k(b,r)
t=C.c.n(t,b[r])
q=y[u]
if(q!=null&&q!==P.c)t+=" extends "+H.x(q,b)}t+=">"}else{t=""
x=null}p=!!a.v?"void":H.x(a.ret,b)
if("args" in a){o=a.args
for(z=o.length,n="",m="",l=0;l<z;++l,m=", "){k=o[l]
n=n+m+H.x(k,b)}}else{n=""
m=""}if("opt" in a){j=a.opt
n+=m+"["
for(z=j.length,m="",l=0;l<z;++l,m=", "){k=j[l]
n=n+m+H.x(k,b)}n+="]"}if("named" in a){i=a.named
n+=m+"{"
for(z=H.cG(i),r=z.length,m="",l=0;l<r;++l,m=", "){h=H.l(z[l])
n=n+m+H.x(i[h],b)+(" "+H.b(h))}n+="}"}if(x!=null)b.length=x
return t+"("+n+") => "+p},
as:function(a,b,c){var z,y,x,w,v,u
H.ao(c,"$isp",[P.A],"$asp")
if(a==null)return""
z=new P.aN("")
for(y=b,x="",w=!0,v="";y<a.length;++y,x=", "){z.a=v+x
u=a[y]
if(u!=null)w=!1
v=z.a+=H.x(u,c)}v="<"+z.h(0)+">"
return v},
I:function(a,b){if(a==null)return b
a=a.apply(null,b)
if(a==null)return
if(typeof a==="object"&&a!==null&&a.constructor===Array)return a
if(typeof a=="function")return a.apply(null,b)
return b},
cF:function(a,b,c,d){var z,y
if(a==null)return!1
z=H.C(a)
y=J.h(a)
if(y[b]==null)return!1
return H.b9(H.I(y[d],z),null,c,null)},
ao:function(a,b,c,d){var z,y
H.l(b)
H.a8(c)
H.l(d)
if(a==null)return a
z=H.cF(a,b,c,d)
if(z)return a
z=b.substring(3)
y=H.as(c,0,null)
throw H.e(H.v(a,function(e,f){return e.replace(/[^<,> ]+/g,function(g){return f[g]||g})}(z+y,init.mangledGlobalNames)))},
b9:function(a,b,c,d){var z,y
if(c==null)return!0
if(a==null){z=c.length
for(y=0;y<z;++y)if(!H.n(null,null,c[y],d))return!1
return!0}z=a.length
for(y=0;y<z;++y)if(!H.n(a[y],b,c[y],d))return!1
return!0},
fE:function(a,b,c){return a.apply(b,H.I(J.h(b)["$as"+H.b(c)],H.C(b)))},
bo:function(a){var z
if(typeof a==="number")return!1
if('futureOr' in a){z="type" in a?a.type:null
return a==null||a.builtin$cls==="c"||a.builtin$cls==="t"||a===-1||a===-2||H.bo(z)}return!1},
bc:function(a,b){var z,y,x
if(a==null){z=b==null||b.builtin$cls==="c"||b.builtin$cls==="t"||b===-1||b===-2||H.bo(b)
return z}z=b==null||b===-1||b.builtin$cls==="c"||b===-2
if(z)return!0
if(typeof b=="object"){z='futureOr' in b
if(z)if(H.bc(a,"type" in b?b.type:null))return!0
if('func' in b)return H.bg(a,b)}y=J.h(a).constructor
x=H.C(a)
if(x!=null){x=x.slice()
x.splice(0,0,y)
y=x}z=H.n(y,null,b,null)
return z},
N:function(a,b){if(a!=null&&!H.bc(a,b))throw H.e(H.v(a,H.aa(b)))
return a},
n:function(a,b,c,d){var z,y,x,w,v,u,t,s,r
if(a===c)return!0
if(c==null||c===-1||c.builtin$cls==="c"||c===-2)return!0
if(a===-2)return!0
if(a==null||a===-1||a.builtin$cls==="c"||a===-2){if(typeof c==="number")return!1
if('futureOr' in c)return H.n(a,b,"type" in c?c.type:null,d)
return!1}if(typeof a==="number")return!1
if(typeof c==="number")return!1
if(a.builtin$cls==="t")return!0
if('func' in c)return H.bn(a,b,c,d)
if('func' in a)return c.builtin$cls==="ae"
z=typeof a==="object"&&a!==null&&a.constructor===Array
y=z?a[0]:a
if('futureOr' in c){x="type" in c?c.type:null
if('futureOr' in a)return H.n("type" in a?a.type:null,b,x,d)
else if(H.n(a,b,x,d))return!0
else{if(!('$is'+"bK" in y.prototype))return!1
w=y.prototype["$as"+"bK"]
v=H.I(w,z?a.slice(1):null)
return H.n(typeof v==="object"&&v!==null&&v.constructor===Array?v[0]:null,b,x,d)}}u=typeof c==="object"&&c!==null&&c.constructor===Array
t=u?c[0]:c
if(t!==y){s=H.aa(t)
if(!('$is'+s in y.prototype))return!1
r=y.prototype["$as"+s]}else r=null
if(!u)return!0
z=z?a.slice(1):null
u=c.slice(1)
return H.b9(H.I(r,z),b,u,d)},
bn:function(a,b,c,d){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l
if(!('func' in a))return!1
if("bounds" in a){if(!("bounds" in c))return!1
z=a.bounds
y=c.bounds
if(z.length!==y.length)return!1}else if("bounds" in c)return!1
if(!H.n(a.ret,b,c.ret,d))return!1
x=a.args
w=c.args
v=a.opt
u=c.opt
t=x!=null?x.length:0
s=w!=null?w.length:0
r=v!=null?v.length:0
q=u!=null?u.length:0
if(t>s)return!1
if(t+r<s+q)return!1
for(p=0;p<t;++p)if(!H.n(w[p],d,x[p],b))return!1
for(o=p,n=0;o<s;++n,++o)if(!H.n(w[o],d,v[n],b))return!1
for(o=0;o<q;++n,++o)if(!H.n(u[o],d,v[n],b))return!1
m=a.named
l=c.named
if(l==null)return!0
if(m==null)return!1
return H.cX(m,b,l,d)},
cX:function(a,b,c,d){var z,y,x,w
z=Object.getOwnPropertyNames(c)
for(y=z.length,x=0;x<y;++x){w=z[x]
if(!Object.hasOwnProperty.call(a,w))return!1
if(!H.n(c[w],d,a[w],b))return!1}return!0},
fF:function(a,b,c){Object.defineProperty(a,H.l(b),{value:c,enumerable:false,writable:true,configurable:true})},
cV:function(a){var z,y,x,w,v,u
z=H.l($.bl.$1(a))
y=$.a5[z]
if(y!=null){Object.defineProperty(a,init.dispatchPropertyName,{value:y,enumerable:false,writable:true,configurable:true})
return y.i}x=$.a7[z]
if(x!=null)return x
w=init.interceptorsByTag[z]
if(w==null){z=H.l($.b8.$2(a,z))
if(z!=null){y=$.a5[z]
if(y!=null){Object.defineProperty(a,init.dispatchPropertyName,{value:y,enumerable:false,writable:true,configurable:true})
return y.i}x=$.a7[z]
if(x!=null)return x
w=init.interceptorsByTag[z]}}if(w==null)return
x=w.prototype
v=z[0]
if(v==="!"){y=H.a9(x)
$.a5[z]=y
Object.defineProperty(a,init.dispatchPropertyName,{value:y,enumerable:false,writable:true,configurable:true})
return y.i}if(v==="~"){$.a7[z]=x
return x}if(v==="-"){u=H.a9(x)
Object.defineProperty(Object.getPrototypeOf(a),init.dispatchPropertyName,{value:u,enumerable:false,writable:true,configurable:true})
return u.i}if(v==="+")return H.br(a,x)
if(v==="*")throw H.e(P.b2(z))
if(init.leafTags[z]===true){u=H.a9(x)
Object.defineProperty(Object.getPrototypeOf(a),init.dispatchPropertyName,{value:u,enumerable:false,writable:true,configurable:true})
return u.i}else return H.br(a,x)},
br:function(a,b){var z=Object.getPrototypeOf(a)
Object.defineProperty(z,init.dispatchPropertyName,{value:J.au(b,z,null,null),enumerable:false,writable:true,configurable:true})
return b},
a9:function(a){return J.au(a,!1,null,!!a.$isef)},
cW:function(a,b,c){var z=b.prototype
if(init.leafTags[a]===true)return H.a9(z)
else return J.au(z,c,null,null)},
cP:function(){if(!0===$.ar)return
$.ar=!0
H.cQ()},
cQ:function(){var z,y,x,w,v,u,t,s
$.a5=Object.create(null)
$.a7=Object.create(null)
H.cL()
z=init.interceptorsByTag
y=Object.getOwnPropertyNames(z)
if(typeof window!="undefined"){window
x=function(){}
for(w=0;w<y.length;++w){v=y[w]
u=$.bt.$1(v)
if(u!=null){t=H.cW(v,z[v],u)
if(t!=null){Object.defineProperty(u,init.dispatchPropertyName,{value:t,enumerable:false,writable:true,configurable:true})
x.prototype=u}}}}for(w=0;w<y.length;++w){v=y[w]
if(/^[A-Za-z_]/.test(v)){s=z[v]
z["!"+v]=s
z["~"+v]=s
z["-"+v]=s
z["+"+v]=s
z["*"+v]=s}}},
cL:function(){var z,y,x,w,v,u,t
z=C.t()
z=H.B(C.p,H.B(C.v,H.B(C.e,H.B(C.e,H.B(C.u,H.B(C.q,H.B(C.r(C.f),z)))))))
if(typeof dartNativeDispatchHooksTransformer!="undefined"){y=dartNativeDispatchHooksTransformer
if(typeof y=="function")y=[y]
if(y.constructor==Array)for(x=0;x<y.length;++x){w=y[x]
if(typeof w=="function")z=w(z)||z}}v=z.getTag
u=z.getUnknownTag
t=z.prototypeForTag
$.bl=new H.cM(v)
$.b8=new H.cN(u)
$.bt=new H.cO(t)},
B:function(a,b){return a(b)||b},
c_:{"^":"c;a,b,c,d,e,f,r,0x",i:{
c0:function(a){var z,y,x
z=a.$reflectionInfo
if(z==null)return
z=J.L(z)
y=z[0]
x=z[1]
return new H.c_(a,z,(y&2)===2,y>>2,x>>1,(x&1)===1,z[2])}}},
ca:{"^":"c;a,b,c,d,e,f",
k:function(a){var z,y,x
z=new RegExp(this.a).exec(a)
if(z==null)return
y=Object.create(null)
x=this.b
if(x!==-1)y.arguments=z[x+1]
x=this.c
if(x!==-1)y.argumentsExpr=z[x+1]
x=this.d
if(x!==-1)y.expr=z[x+1]
x=this.e
if(x!==-1)y.method=z[x+1]
x=this.f
if(x!==-1)y.receiver=z[x+1]
return y},
i:{
u:function(a){var z,y,x,w,v,u
a=a.replace(String({}),'$receiver$').replace(/[[\]{}()*+?.\\^$|]/g,"\\$&")
z=a.match(/\\\$[a-zA-Z]+\\\$/g)
if(z==null)z=H.Q([],[P.A])
y=z.indexOf("\\$arguments\\$")
x=z.indexOf("\\$argumentsExpr\\$")
w=z.indexOf("\\$expr\\$")
v=z.indexOf("\\$method\\$")
u=z.indexOf("\\$receiver\\$")
return new H.ca(a.replace(new RegExp('\\\\\\$arguments\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$argumentsExpr\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$expr\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$method\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$receiver\\\\\\$','g'),'((?:x|[^x])*)'),y,x,w,v,u)},
Z:function(a){return function($expr$){var $argumentsExpr$='$arguments$'
try{$expr$.$method$($argumentsExpr$)}catch(z){return z.message}}(a)},
aY:function(a){return function($expr$){try{$expr$.$method$}catch(z){return z.message}}(a)}}},
bW:{"^":"j;a,b",
h:function(a){var z=this.b
if(z==null)return"NullError: "+H.b(this.a)
return"NullError: method not found: '"+z+"' on null"},
i:{
aI:function(a,b){return new H.bW(a,b==null?null:b.method)}}},
bS:{"^":"j;a,b,c",
h:function(a){var z,y
z=this.b
if(z==null)return"NoSuchMethodError: "+H.b(this.a)
y=this.c
if(y==null)return"NoSuchMethodError: method not found: '"+z+"' ("+H.b(this.a)+")"
return"NoSuchMethodError: method not found: '"+z+"' on '"+y+"' ("+H.b(this.a)+")"},
i:{
aj:function(a,b){var z,y
z=b==null
y=z?null:b.method
return new H.bS(a,y,z?null:b.receiver)}}},
cd:{"^":"j;a",
h:function(a){var z=this.a
return z.length===0?"Error":"Error: "+z}},
d1:{"^":"i:2;a",
$1:function(a){if(!!J.h(a).$isj)if(a.$thrownJsError==null)a.$thrownJsError=this.a
return a}},
b5:{"^":"c;a,0b",
h:function(a){var z,y
z=this.b
if(z!=null)return z
z=this.a
y=z!==null&&typeof z==="object"?z.stack:null
z=y==null?"":y
this.b=z
return z},
$isc8:1},
i:{"^":"c;",
h:function(a){return"Closure '"+H.F(this).trim()+"'"},
gD:function(){return this},
$isae:1,
gD:function(){return this}},
aP:{"^":"i;"},
c9:{"^":"aP;",
h:function(a){var z=this.$static_name
if(z==null)return"Closure of unknown static method"
return"Closure '"+z+"'"}},
aw:{"^":"aP;a,b,c,d",
h:function(a){var z=this.c
if(z==null)z=this.a
return"Closure '"+H.b(this.d)+"' of "+("Instance of '"+H.F(z)+"'")},
i:{
ab:function(a){return a.a},
ay:function(a){return a.c},
U:function(a){var z,y,x,w,v
z=new H.aw("self","target","receiver","name")
y=J.L(Object.getOwnPropertyNames(z))
for(x=y.length,w=0;w<x;++w){v=y[w]
if(z[v]===a)return v}}}},
cb:{"^":"j;a",
h:function(a){return this.a},
i:{
v:function(a,b){return new H.cb("TypeError: "+H.b(P.V(a))+": type '"+H.b7(a)+"' is not a subtype of type '"+b+"'")}}},
bz:{"^":"j;a",
h:function(a){return this.a},
i:{
bA:function(a,b){return new H.bz("CastError: "+H.b(P.V(a))+": type '"+H.b7(a)+"' is not a subtype of type '"+b+"'")}}},
c1:{"^":"j;a",
h:function(a){return"RuntimeError: "+H.b(this.a)},
i:{
c2:function(a){return new H.c1(a)}}},
cM:{"^":"i:2;a",
$1:function(a){return this.a(a)}},
cN:{"^":"i;a",
$2:function(a,b){return this.a(a,b)}},
cO:{"^":"i:4;a",
$1:function(a){return this.a(H.l(a))}}}],["","",,H,{"^":"",
cG:function(a){return J.bO(a?Object.keys(a):[],null)}}],["","",,P,{"^":"",
cg:function(){var z,y,x
z={}
if(self.scheduleImmediate!=null)return P.cB()
if(self.MutationObserver!=null&&self.document!=null){y=self.document.createElement("div")
x=self.document.createElement("span")
z.a=null
new self.MutationObserver(H.O(new P.ci(z),1)).observe(y,{childList:true})
return new P.ch(z,y,x)}else if(self.setImmediate!=null)return P.cC()
return P.cD()},
ft:[function(a){self.scheduleImmediate(H.O(new P.cj(H.m(a,{func:1,ret:-1})),0))},"$1","cB",4,0,1],
fu:[function(a){self.setImmediate(H.O(new P.ck(H.m(a,{func:1,ret:-1})),0))},"$1","cC",4,0,1],
fv:[function(a){H.m(a,{func:1,ret:-1})
P.cq(0,a)},"$1","cD",4,0,1],
cv:function(){var z,y
for(;z=$.H,z!=null;){$.G=null
y=z.b
$.H=y
if(y==null)$.a2=null
z.a.$0()}},
fD:[function(){$.an=!0
try{P.cv()}finally{$.G=null
$.an=!1
if($.H!=null)$.$get$al().$1(P.ba())}},"$0","ba",0,0,3],
cz:function(a){var z,y,x,w
H.m(a,{func:1,ret:-1})
z=$.H
if(z==null){y=new P.b3(a)
$.a2=y
$.H=y
if(!$.an)$.$get$al().$1(P.ba())
$.G=$.a2
return}x=new P.b3(a)
w=$.G
if(w==null){x.b=z
$.G=x
$.H=x}else{x.b=w.b
w.b=x
$.G=x
if(x.b==null)$.a2=x}},
cw:function(a,b,c,d,e){var z={}
z.a=d
P.cz(new P.cx(z,e))},
cy:function(a,b,c,d,e,f,g){var z,y
H.m(d,{func:1,ret:f,args:[g]})
H.N(e,g)
y=$.M
if(y===c)return d.$1(e)
$.M=c
z=y
try{y=d.$1(e)
return y}finally{$.M=z}},
ci:{"^":"i:5;a",
$1:function(a){var z,y
z=this.a
y=z.a
z.a=null
y.$0()}},
ch:{"^":"i:6;a,b,c",
$1:function(a){var z,y
this.a.a=H.m(a,{func:1,ret:-1})
z=this.b
y=this.c
z.firstChild?z.removeChild(y):z.appendChild(y)}},
cj:{"^":"i:0;a",
$0:function(){this.a.$0()}},
ck:{"^":"i:0;a",
$0:function(){this.a.$0()}},
cp:{"^":"c;a,0b,c",
M:function(a,b){if(self.setTimeout!=null)this.b=self.setTimeout(H.O(new P.cr(this,b),0),a)
else throw H.e(P.a0("`setTimeout()` not found."))},
i:{
cq:function(a,b){var z=new P.cp(!0,0)
z.M(a,b)
return z}}},
cr:{"^":"i:3;a,b",
$0:function(){var z=this.a
z.b=null
z.c=1
this.b.$0()}},
b3:{"^":"c;a,0b"},
cs:{"^":"c;",$isfs:1},
cx:{"^":"i:0;a,b",
$0:function(){var z,y,x
z=this.a
y=z.a
if(y==null){x=new P.aJ()
z.a=x
z=x}else z=y
y=this.b
if(y==null)throw H.e(z)
x=H.e(z)
x.stack=y.h(0)
throw x}},
cn:{"^":"cs;",
Y:function(a,b,c){var z,y,x
H.m(a,{func:1,ret:-1,args:[c]})
H.N(b,c)
try{if(C.b===$.M){a.$1(b)
return}P.cy(null,null,this,a,b,-1,c)}catch(x){z=H.d0(x)
y=H.cJ(x)
P.cw(null,null,this,z,H.a6(y,"$isc8"))}},
T:function(a,b){return new P.co(this,H.m(a,{func:1,ret:-1,args:[b]}),b)}},
co:{"^":"i;a,b,c",
$1:function(a){var z=this.c
return this.a.Y(this.b,H.N(a,z),z)},
$S:function(){return{func:1,ret:-1,args:[this.c]}}}}],["","",,P,{"^":"",
bN:function(a,b,c){var z,y
if(P.b6(a)){if(b==="("&&c===")")return"(...)"
return b+"..."+c}z=[]
y=$.$get$a3()
C.a.m(y,a)
try{P.cu(a,z)}finally{if(0>=y.length)return H.k(y,-1)
y.pop()}y=P.aO(b,H.cU(z,"$isJ"),", ")+c
return y.charCodeAt(0)==0?y:y},
bM:function(a,b,c){var z,y,x
if(P.b6(a))return b+"..."+c
z=new P.aN(b)
y=$.$get$a3()
C.a.m(y,a)
try{x=z
x.a=P.aO(x.gt(),a,", ")}finally{if(0>=y.length)return H.k(y,-1)
y.pop()}y=z
y.a=y.gt()+c
y=z.gt()
return y.charCodeAt(0)==0?y:y},
b6:function(a){var z,y
for(z=0;y=$.$get$a3(),z<y.length;++z)if(a===y[z])return!0
return!1},
cu:function(a,b){var z,y,x,w,v,u,t,s,r,q
z=a.gw(a)
y=0
x=0
while(!0){if(!(y<80||x<3))break
if(!z.l())return
w=H.b(z.gp())
C.a.m(b,w)
y+=w.length+2;++x}if(!z.l()){if(x<=5)return
if(0>=b.length)return H.k(b,-1)
v=b.pop()
if(0>=b.length)return H.k(b,-1)
u=b.pop()}else{t=z.gp();++x
if(!z.l()){if(x<=4){C.a.m(b,H.b(t))
return}v=H.b(t)
if(0>=b.length)return H.k(b,-1)
u=b.pop()
y+=v.length+2}else{s=z.gp();++x
for(;z.l();t=s,s=r){r=z.gp();++x
if(x>100){while(!0){if(!(y>75&&x>3))break
if(0>=b.length)return H.k(b,-1)
y-=b.pop().length+2;--x}C.a.m(b,"...")
return}}u=H.b(t)
v=H.b(s)
y+=v.length+u.length+4}}if(x>b.length+2){y+=5
q="..."}else q=null
while(!0){if(!(y>80&&b.length>3))break
if(0>=b.length)return H.k(b,-1)
y-=b.pop().length+2
if(q==null){y+=5
q="..."}}if(q!=null)C.a.m(b,q)
C.a.m(b,u)
C.a.m(b,v)}}],["","",,P,{"^":"",
bJ:function(a){var z=J.h(a)
if(!!z.$isi)return z.h(a)
return"Instance of '"+H.F(a)+"'"},
V:function(a){if(typeof a==="number"||typeof a==="boolean"||null==a)return J.S(a)
if(typeof a==="string")return JSON.stringify(a)
return P.bJ(a)},
cE:{"^":"c;"},
"+bool":0,
bd:{"^":"q;"},
"+double":0,
j:{"^":"c;"},
aJ:{"^":"j;",
h:function(a){return"Throw of null."}},
D:{"^":"j;a,b,c,d",
gv:function(){return"Invalid argument"+(!this.a?"(s)":"")},
gu:function(){return""},
h:function(a){var z,y,x,w,v,u
z=this.c
y=z!=null?" ("+z+")":""
z=this.d
x=z==null?"":": "+z
w=this.gv()+y+x
if(!this.a)return w
v=this.gu()
u=P.V(this.b)
return w+v+": "+H.b(u)},
i:{
bx:function(a,b,c){return new P.D(!0,a,b,c)}}},
aK:{"^":"D;e,f,a,b,c,d",
gv:function(){return"RangeError"},
gu:function(){var z,y,x
z=this.e
if(z==null){z=this.f
y=z!=null?": Not less than or equal to "+H.b(z):""}else{x=this.f
if(x==null)y=": Not greater than or equal to "+H.b(z)
else if(x>z)y=": Not in range "+H.b(z)+".."+H.b(x)+", inclusive"
else y=x<z?": Valid value range is empty":": Only valid value is "+H.b(z)}return y},
i:{
ak:function(a,b,c){return new P.aK(null,null,!0,a,b,"Value not in range")},
bZ:function(a,b,c,d,e){return new P.aK(b,c,!0,a,d,"Invalid value")}}},
bL:{"^":"D;e,j:f>,a,b,c,d",
gv:function(){return"RangeError"},
gu:function(){if(J.bv(this.b,0))return": index must not be negative"
var z=this.f
if(z===0)return": no indices are valid"
return": index should be less than "+H.b(z)},
i:{
aE:function(a,b,c,d,e){var z=e!=null?e:J.R(b)
return new P.bL(b,z,!0,a,c,"Index out of range")}}},
ce:{"^":"j;a",
h:function(a){return"Unsupported operation: "+this.a},
i:{
a0:function(a){return new P.ce(a)}}},
cc:{"^":"j;a",
h:function(a){var z=this.a
return z!=null?"UnimplementedError: "+z:"UnimplementedError"},
i:{
b2:function(a){return new P.cc(a)}}},
bF:{"^":"j;a",
h:function(a){var z=this.a
if(z==null)return"Concurrent modification during iteration."
return"Concurrent modification during iteration: "+H.b(P.V(z))+"."},
i:{
ad:function(a){return new P.bF(a)}}},
aM:{"^":"c;",
h:function(a){return"Stack Overflow"},
$isj:1},
bG:{"^":"j;a",
h:function(a){var z=this.a
return z==null?"Reading static variable during its initialization":"Reading static variable '"+z+"' during its initialization"}},
dB:{"^":"c;"},
cl:{"^":"c;a",
h:function(a){return"Exception: "+this.a}},
cR:{"^":"q;"},
"+int":0,
J:{"^":"c;$ti",
gj:function(a){var z,y
z=this.gw(this)
for(y=0;z.l();)++y
return y},
q:function(a,b){var z,y,x
if(b<0)H.av(P.bZ(b,0,null,"index",null))
for(z=this.gw(this),y=0;z.l();){x=z.gp()
if(b===y)return x;++y}throw H.e(P.aE(b,this,"index",null,y))},
h:function(a){return P.bN(this,"(",")")}},
p:{"^":"c;$ti",$isJ:1},
"+List":0,
t:{"^":"c;",
h:function(a){return"null"}},
"+Null":0,
q:{"^":"c;"},
"+num":0,
c:{"^":";",
h:function(a){return"Instance of '"+H.F(this)+"'"},
toString:function(){return this.h(this)}},
A:{"^":"c;"},
"+String":0,
aN:{"^":"c;t:a<",
gj:function(a){return this.a.length},
h:function(a){var z=this.a
return z.charCodeAt(0)==0?z:z},
i:{
aO:function(a,b,c){var z=new J.by(b,b.length,0,[H.P(b,0)])
if(!z.l())return a
if(c.length===0){do a+=H.b(z.d)
while(z.l())}else{a+=H.b(z.d)
for(;z.l();)a=a+c+H.b(z.d)}return a}}}}],["","",,W,{"^":"",
cA:function(a,b){var z
H.m(a,{func:1,ret:-1,args:[b]})
z=$.M
if(z===C.b)return a
return z.T(a,b)},
a:{"^":"aC;","%":";HTMLElement"},
d3:{"^":"a;",
h:function(a){return String(a)},
"%":"HTMLAnchorElement"},
da:{"^":"W;","%":"ApplicationCacheErrorEvent"},
db:{"^":"a;",
h:function(a){return String(a)},
"%":"HTMLAreaElement"},
dc:{"^":"aG;","%":"HTMLAudioElement"},
dd:{"^":"a;","%":"HTMLBRElement"},
de:{"^":"a;","%":"HTMLBaseElement"},
df:{"^":"a;","%":"HTMLBodyElement"},
dg:{"^":"a;","%":"HTMLButtonElement"},
ac:{"^":"a;",
F:function(a,b,c){return a.getContext(b)},
E:function(a,b){return this.F(a,b,null)},
$isac:1,
"%":"HTMLCanvasElement"},
dh:{"^":"f;","%":"CanvasGradient"},
di:{"^":"f;","%":"CanvasPattern"},
az:{"^":"f;",$isaz:1,"%":"CanvasRenderingContext2D"},
dl:{"^":"a;","%":"HTMLContentElement"},
dm:{"^":"a;","%":"HTMLDListElement"},
dn:{"^":"a;","%":"HTMLDataElement"},
dp:{"^":"a;","%":"HTMLDataListElement"},
ds:{"^":"a;","%":"HTMLDetailsElement"},
dt:{"^":"a;","%":"HTMLDialogElement"},
dv:{"^":"a;","%":"HTMLDivElement"},
bH:{"^":"aH;","%":";Document"},
dw:{"^":"f;","%":"DOMError"},
dx:{"^":"f;",
h:function(a){return String(a)},
"%":"DOMException"},
aC:{"^":"aH;",
h:function(a){return a.localName},
"%":";Element"},
dz:{"^":"a;","%":"HTMLEmbedElement"},
dA:{"^":"W;","%":"ErrorEvent"},
W:{"^":"f;","%":";Event|InputEvent"},
aD:{"^":"f;","%":";EventTarget"},
e_:{"^":"a;","%":"HTMLFieldSetElement"},
e2:{"^":"a;0j:length=","%":"HTMLFormElement"},
e4:{"^":"a;","%":"HTMLHRElement"},
e5:{"^":"a;","%":"HTMLHeadElement"},
e6:{"^":"a;","%":"HTMLHeadingElement"},
e7:{"^":"bH;","%":"HTMLDocument"},
e8:{"^":"a;","%":"HTMLHtmlElement"},
e9:{"^":"a;","%":"HTMLIFrameElement"},
ea:{"^":"a;","%":"HTMLImageElement"},
ec:{"^":"a;","%":"HTMLInputElement"},
eg:{"^":"a;","%":"HTMLLIElement"},
eh:{"^":"a;","%":"HTMLLabelElement"},
ei:{"^":"a;","%":"HTMLLegendElement"},
el:{"^":"a;","%":"HTMLLinkElement"},
em:{"^":"a;","%":"HTMLMapElement"},
aG:{"^":"a;","%":";HTMLMediaElement"},
ep:{"^":"f;","%":"MediaError"},
eq:{"^":"a;","%":"HTMLMenuElement"},
er:{"^":"a;","%":"HTMLMetaElement"},
et:{"^":"a;","%":"HTMLMeterElement"},
eu:{"^":"a;","%":"HTMLModElement"},
ev:{"^":"bV;","%":"Navigator"},
bV:{"^":"f;","%":";NavigatorConcurrentHardware"},
ew:{"^":"f;","%":"NavigatorUserMediaError"},
aH:{"^":"aD;",
h:function(a){var z=a.nodeValue
return z==null?this.J(a):z},
"%":";Node"},
ex:{"^":"a;","%":"HTMLOListElement"},
ey:{"^":"a;","%":"HTMLObjectElement"},
ez:{"^":"a;","%":"HTMLOptGroupElement"},
eA:{"^":"a;","%":"HTMLOptionElement"},
eB:{"^":"a;","%":"HTMLOutputElement"},
eC:{"^":"f;","%":"OverconstrainedError"},
eD:{"^":"a;","%":"HTMLParagraphElement"},
eE:{"^":"a;","%":"HTMLParamElement"},
eH:{"^":"a;","%":"HTMLPictureElement"},
eK:{"^":"f;","%":"PositionError"},
eL:{"^":"a;","%":"HTMLPreElement"},
eM:{"^":"a;","%":"HTMLProgressElement"},
eN:{"^":"a;","%":"HTMLQuoteElement"},
eS:{"^":"a;","%":"HTMLScriptElement"},
eU:{"^":"a;0j:length=","%":"HTMLSelectElement"},
eV:{"^":"W;","%":"SensorErrorEvent"},
eX:{"^":"a;","%":"HTMLShadowElement"},
eY:{"^":"a;","%":"HTMLSlotElement"},
eZ:{"^":"a;","%":"HTMLSourceElement"},
f_:{"^":"a;","%":"HTMLSpanElement"},
f0:{"^":"W;","%":"SpeechRecognitionError"},
f3:{"^":"a;","%":"HTMLStyleElement"},
f9:{"^":"a;","%":"HTMLTableCaptionElement"},
fa:{"^":"a;","%":"HTMLTableCellElement|HTMLTableDataCellElement|HTMLTableHeaderCellElement"},
fb:{"^":"a;","%":"HTMLTableColElement"},
fc:{"^":"a;","%":"HTMLTableElement"},
fd:{"^":"a;","%":"HTMLTableRowElement"},
fe:{"^":"a;","%":"HTMLTableSectionElement"},
ff:{"^":"a;","%":"HTMLTemplateElement"},
fg:{"^":"a;","%":"HTMLTextAreaElement"},
fj:{"^":"a;","%":"HTMLTimeElement"},
fk:{"^":"a;","%":"HTMLTitleElement"},
fm:{"^":"a;","%":"HTMLTrackElement"},
fn:{"^":"a;","%":"HTMLUListElement"},
fo:{"^":"a;","%":"HTMLUnknownElement"},
fq:{"^":"aG;","%":"HTMLVideoElement"},
cf:{"^":"aD;",
C:function(a,b){H.m(b,{func:1,ret:-1,args:[P.q]})
this.O(a)
return this.P(a,W.cA(b,P.q))},
P:function(a,b){return a.requestAnimationFrame(H.O(H.m(b,{func:1,ret:-1,args:[P.q]}),1))},
O:function(a){if(!!(a.requestAnimationFrame&&a.cancelAnimationFrame))return;(function(b){var z=['ms','moz','webkit','o']
for(var y=0;y<z.length&&!b.requestAnimationFrame;++y){b.requestAnimationFrame=b[z[y]+'RequestAnimationFrame']
b.cancelAnimationFrame=b[z[y]+'CancelAnimationFrame']||b[z[y]+'CancelRequestAnimationFrame']}if(b.requestAnimationFrame&&b.cancelAnimationFrame)return
b.requestAnimationFrame=function(c){return window.setTimeout(function(){c(Date.now())},16)}
b.cancelAnimationFrame=function(c){clearTimeout(c)}})(a)},
"%":"DOMWindow|Window"},
fw:{"^":"a;","%":"HTMLDirectoryElement"},
fx:{"^":"a;","%":"HTMLFontElement"},
fy:{"^":"a;","%":"HTMLFrameElement"},
fz:{"^":"a;","%":"HTMLFrameSetElement"},
fA:{"^":"a;","%":"HTMLMarqueeElement"}}],["","",,P,{"^":"",cm:{"^":"c;",
W:function(){return Math.random()}},bY:{"^":"c;a,b,$ti",
h:function(a){return"Point("+H.b(this.a)+", "+H.b(this.b)+")"}}}],["","",,P,{"^":"",d2:{"^":"o;","%":"SVGAElement"},d4:{"^":"T;","%":"SVGAnimateElement"},d5:{"^":"T;","%":"SVGAnimateMotionElement"},d6:{"^":"T;","%":"SVGAnimateTransformElement"},d7:{"^":"f;","%":"SVGAnimatedLength"},d8:{"^":"f;","%":"SVGAnimatedLengthList"},d9:{"^":"f;","%":"SVGAnimatedNumber"},T:{"^":"d;","%":";SVGAnimationElement"},dj:{"^":"y;","%":"SVGCircleElement"},dk:{"^":"o;","%":"SVGClipPathElement"},dq:{"^":"o;","%":"SVGDefsElement"},dr:{"^":"d;","%":"SVGDescElement"},du:{"^":"d;","%":"SVGDiscardElement"},dy:{"^":"y;","%":"SVGEllipseElement"},dC:{"^":"d;","%":"SVGFEBlendElement"},dD:{"^":"d;","%":"SVGFEColorMatrixElement"},dE:{"^":"d;","%":"SVGFEComponentTransferElement"},dF:{"^":"d;","%":"SVGFECompositeElement"},dG:{"^":"d;","%":"SVGFEConvolveMatrixElement"},dH:{"^":"d;","%":"SVGFEDiffuseLightingElement"},dI:{"^":"d;","%":"SVGFEDisplacementMapElement"},dJ:{"^":"d;","%":"SVGFEDistantLightElement"},dK:{"^":"d;","%":"SVGFEFloodElement"},dL:{"^":"a1;","%":"SVGFEFuncAElement"},dM:{"^":"a1;","%":"SVGFEFuncBElement"},dN:{"^":"a1;","%":"SVGFEFuncGElement"},dO:{"^":"a1;","%":"SVGFEFuncRElement"},dP:{"^":"d;","%":"SVGFEGaussianBlurElement"},dQ:{"^":"d;","%":"SVGFEImageElement"},dR:{"^":"d;","%":"SVGFEMergeElement"},dS:{"^":"d;","%":"SVGFEMergeNodeElement"},dT:{"^":"d;","%":"SVGFEMorphologyElement"},dU:{"^":"d;","%":"SVGFEOffsetElement"},dV:{"^":"d;","%":"SVGFEPointLightElement"},dW:{"^":"d;","%":"SVGFESpecularLightingElement"},dX:{"^":"d;","%":"SVGFESpotLightElement"},dY:{"^":"d;","%":"SVGFETileElement"},dZ:{"^":"d;","%":"SVGFETurbulenceElement"},e0:{"^":"d;","%":"SVGFilterElement"},e1:{"^":"o;","%":"SVGForeignObjectElement"},e3:{"^":"o;","%":"SVGGElement"},y:{"^":"o;","%":";SVGGeometryElement"},o:{"^":"d;","%":";SVGGraphicsElement"},eb:{"^":"o;","%":"SVGImageElement"},ej:{"^":"y;","%":"SVGLineElement"},ek:{"^":"b4;","%":"SVGLinearGradientElement"},en:{"^":"d;","%":"SVGMarkerElement"},eo:{"^":"d;","%":"SVGMaskElement"},es:{"^":"d;","%":"SVGMetadataElement"},eF:{"^":"y;","%":"SVGPathElement"},eG:{"^":"d;","%":"SVGPatternElement"},eI:{"^":"y;","%":"SVGPolygonElement"},eJ:{"^":"y;","%":"SVGPolylineElement"},eO:{"^":"b4;","%":"SVGRadialGradientElement"},eP:{"^":"y;","%":"SVGRectElement"},eT:{"^":"d;","%":"SVGScriptElement"},eW:{"^":"T;","%":"SVGSetElement"},f2:{"^":"d;","%":"SVGStopElement"},f4:{"^":"d;","%":"SVGStyleElement"},d:{"^":"aC;","%":";SVGElement"},f5:{"^":"o;","%":"SVGSVGElement"},f6:{"^":"o;","%":"SVGSwitchElement"},f7:{"^":"d;","%":"SVGSymbolElement"},f8:{"^":"aR;","%":"SVGTSpanElement"},aQ:{"^":"o;","%":";SVGTextContentElement"},fh:{"^":"aR;","%":"SVGTextElement"},fi:{"^":"aQ;","%":"SVGTextPathElement"},aR:{"^":"aQ;","%":";SVGTextPositioningElement"},fl:{"^":"d;","%":"SVGTitleElement"},fp:{"^":"o;","%":"SVGUseElement"},fr:{"^":"d;","%":"SVGViewElement"},b4:{"^":"d;","%":";SVGGradientElement"},a1:{"^":"d;","%":";SVGComponentTransferFunctionElement"},fB:{"^":"d;","%":"SVGFEDropShadowElement"},fC:{"^":"d;","%":"SVGMPathElement"}}],["","",,P,{"^":"",eQ:{"^":"f;","%":"WebGLRenderingContext"},eR:{"^":"f;","%":"WebGL2RenderingContext"}}],["","",,P,{"^":"",f1:{"^":"f;","%":"SQLError"}}],["","",,F,{"^":"",
bp:function(){var z,y,x,w
z=H.a6(document.querySelector("#canvas"),"$isac")
y=window.innerWidth
x=window.innerHeight
w=C.o.X(Math.min(H.bb(y),H.bb(x))*0.8)
z.width=w
z.height=w
x=new T.c3(z,H.cS((z&&C.l).E(z,"2d"),"$isaz"))
y=z.width
y.toString
x.c=y
x.d=O.c5(y)
C.j.C(window,x.gB())}},1],["","",,T,{"^":"",c3:{"^":"c;a,b,0c,0d",
a_:[function(a){var z,y
H.bq(a)
z=this.b
y=this.c
z.clearRect(0,0,y,y)
this.d.U(z,a)
C.j.C(window,this.gB())},"$1","gB",4,0,7]}}],["","",,O,{"^":"",c4:{"^":"c;a,0b,0c,0d,0e,0f,0r",
L:function(a){var z,y
this.b=this.a*0.022
z=K.z
y=H.P(C.h,0)
z=new H.bU(C.h,H.m(new O.c6(this,$.$get$aL().W()*1e5),{func:1,ret:z,args:[y]}),[y,z]).Z(0,!1)
this.c=z
y=z.length
if(0>=y)return H.k(z,0)
this.d=z[0]
if(1>=y)return H.k(z,1)
this.e=z[1]
if(2>=y)return H.k(z,2)
this.f=z[2]
if(3>=y)return H.k(z,3)
this.r=z[3]},
U:function(a,b){var z,y,x,w,v
z=this.c;(z&&C.a).V(z,new O.c7(b))
a.strokeStyle="rgba(0, 255, 120, 1)"
a.lineWidth=this.b
a.lineCap="round"
a.beginPath()
z=this.d
a.moveTo(z.e,z.f)
z=this.e
y=z.e
z=z.f
x=this.f
w=x.e
x=x.f
v=this.r
a.bezierCurveTo(y,z,w,x,v.e,v.f)
a.stroke()},
i:{
c5:function(a){var z=new O.c4(a)
z.L(a)
return z}}},c6:{"^":"i:8;a,b",
$1:function(a){H.bq(a)
if(typeof a!=="number")return H.bm(a)
return new K.z(C.x,this.b-a,this.a.a,0.35)}},c7:{"^":"i:9;a",
$1:function(a){var z,y,x,w,v
H.a6(a,"$isz")
z=this.a
y=a.b
if(typeof z!=="number")return z.n()
x=z+y
y=a.c
z=a.a
w=Math.cos(z.a*x)
v=a.d
a.e=y*(0.5+w*v)
a.f=y*(0.5+Math.sin(z.b*x)*v)
return}}}],["","",,K,{"^":"",z:{"^":"c;a,b,c,d,0e,0f"}}]]
setupProgram(dart,0,0)
J.h=function(a){if(typeof a=="number"){if(Math.floor(a)==a)return J.aF.prototype
return J.bQ.prototype}if(typeof a=="string")return J.af.prototype
if(a==null)return J.bR.prototype
if(typeof a=="boolean")return J.bP.prototype
if(a.constructor==Array)return J.K.prototype
if(typeof a!="object"){if(typeof a=="function")return J.ah.prototype
return a}if(a instanceof P.c)return a
return J.bj(a)}
J.cH=function(a){if(a==null)return a
if(a.constructor==Array)return J.K.prototype
if(!(a instanceof P.c))return J.a_.prototype
return a}
J.bh=function(a){if(typeof a=="string")return J.af.prototype
if(a==null)return a
if(a.constructor==Array)return J.K.prototype
if(typeof a!="object"){if(typeof a=="function")return J.ah.prototype
return a}if(a instanceof P.c)return a
return J.bj(a)}
J.cI=function(a){if(typeof a=="number")return J.X.prototype
if(a==null)return a
if(!(a instanceof P.c))return J.a_.prototype
return a}
J.bv=function(a,b){if(typeof a=="number"&&typeof b=="number")return a<b
return J.cI(a).H(a,b)}
J.bw=function(a,b){return J.cH(a).q(a,b)}
J.R=function(a){return J.bh(a).gj(a)}
J.S=function(a){return J.h(a).h(a)}
I.at=function(a){a.immutable$list=Array
a.fixed$length=Array
return a}
var $=I.p
C.l=W.ac.prototype
C.m=J.f.prototype
C.a=J.K.prototype
C.n=J.aF.prototype
C.o=J.X.prototype
C.c=J.af.prototype
C.w=J.ah.prototype
C.i=J.bX.prototype
C.d=J.a_.prototype
C.j=W.cf.prototype
C.k=new P.cm()
C.b=new P.cn()
C.p=function(hooks) {
  if (typeof dartExperimentalFixupGetTag != "function") return hooks;
  hooks.getTag = dartExperimentalFixupGetTag(hooks.getTag);
}
C.q=function(hooks) {
  var userAgent = typeof navigator == "object" ? navigator.userAgent : "";
  if (userAgent.indexOf("Firefox") == -1) return hooks;
  var getTag = hooks.getTag;
  var quickMap = {
    "BeforeUnloadEvent": "Event",
    "DataTransfer": "Clipboard",
    "GeoGeolocation": "Geolocation",
    "Location": "!Location",
    "WorkerMessageEvent": "MessageEvent",
    "XMLDocument": "!Document"};
  function getTagFirefox(o) {
    var tag = getTag(o);
    return quickMap[tag] || tag;
  }
  hooks.getTag = getTagFirefox;
}
C.e=function(hooks) { return hooks; }

C.r=function(getTagFallback) {
  return function(hooks) {
    if (typeof navigator != "object") return hooks;
    var ua = navigator.userAgent;
    if (ua.indexOf("DumpRenderTree") >= 0) return hooks;
    if (ua.indexOf("Chrome") >= 0) {
      function confirm(p) {
        return typeof window == "object" && window[p] && window[p].name == p;
      }
      if (confirm("Window") && confirm("HTMLElement")) return hooks;
    }
    hooks.getTag = getTagFallback;
  };
}
C.t=function() {
  var toStringFunction = Object.prototype.toString;
  function getTag(o) {
    var s = toStringFunction.call(o);
    return s.substring(8, s.length - 1);
  }
  function getUnknownTag(object, tag) {
    if (/^HTML[A-Z].*Element$/.test(tag)) {
      var name = toStringFunction.call(object);
      if (name == "[object Object]") return null;
      return "HTMLElement";
    }
  }
  function getUnknownTagGenericBrowser(object, tag) {
    if (self.HTMLElement && object instanceof HTMLElement) return "HTMLElement";
    return getUnknownTag(object, tag);
  }
  function prototypeForTag(tag) {
    if (typeof window == "undefined") return null;
    if (typeof window[tag] == "undefined") return null;
    var constructor = window[tag];
    if (typeof constructor != "function") return null;
    return constructor.prototype;
  }
  function discriminator(tag) { return null; }
  var isBrowser = typeof navigator == "object";
  return {
    getTag: getTag,
    getUnknownTag: isBrowser ? getUnknownTagGenericBrowser : getUnknownTag,
    prototypeForTag: prototypeForTag,
    discriminator: discriminator };
}
C.u=function(hooks) {
  var userAgent = typeof navigator == "object" ? navigator.userAgent : "";
  if (userAgent.indexOf("Trident/") == -1) return hooks;
  var getTag = hooks.getTag;
  var quickMap = {
    "BeforeUnloadEvent": "Event",
    "DataTransfer": "Clipboard",
    "HTMLDDElement": "HTMLElement",
    "HTMLDTElement": "HTMLElement",
    "HTMLPhraseElement": "HTMLElement",
    "Position": "Geoposition"
  };
  function getTagIE(o) {
    var tag = getTag(o);
    var newTag = quickMap[tag];
    if (newTag) return newTag;
    if (tag == "Object") {
      if (window.DataView && (o instanceof window.DataView)) return "DataView";
    }
    return tag;
  }
  function prototypeForTagIE(tag) {
    var constructor = window[tag];
    if (constructor == null) return null;
    return constructor.prototype;
  }
  hooks.getTag = getTagIE;
  hooks.prototypeForTag = prototypeForTagIE;
}
C.v=function(hooks) {
  var getTag = hooks.getTag;
  var prototypeForTag = hooks.prototypeForTag;
  function getTagFixed(o) {
    var tag = getTag(o);
    if (tag == "Document") {
      if (!!o.xmlVersion) return "!Document";
      return "!HTMLDocument";
    }
    return tag;
  }
  function prototypeForTagFixed(tag) {
    if (tag == "Document") return null;
    return prototypeForTag(tag);
  }
  hooks.getTag = getTagFixed;
  hooks.prototypeForTag = prototypeForTagFixed;
}
C.f=function getTagFallback(o) {
  var s = Object.prototype.toString.call(o);
  return s.substring(8, s.length - 1);
}
C.h=H.Q(I.at([0,120,230,300]),[P.q])
C.x=new P.bY(0.0023,0.0015,[P.bd])
$.r=0
$.E=null
$.ax=null
$.am=!1
$.bl=null
$.b8=null
$.bt=null
$.a5=null
$.a7=null
$.ar=null
$.H=null
$.a2=null
$.G=null
$.an=!1
$.M=C.b
$=null
init.isHunkLoaded=function(a){return!!$dart_deferred_initializers$[a]}
init.deferredInitialized=new Object(null)
init.isHunkInitialized=function(a){return init.deferredInitialized[a]}
init.initializeLoadedHunk=function(a){var z=$dart_deferred_initializers$[a]
if(z==null)throw"DeferredLoading state error: code with hash '"+a+"' was not loaded"
z($globals$,$)
init.deferredInitialized[a]=true}
init.deferredLibraryParts={}
init.deferredPartUris=[]
init.deferredPartHashes=[];(function(a){for(var z=0;z<a.length;){var y=a[z++]
var x=a[z++]
var w=a[z++]
I.$lazy(y,x,w)}})(["aB","$get$aB",function(){return H.bi("_$dart_dartClosure")},"ag","$get$ag",function(){return H.bi("_$dart_js")},"aS","$get$aS",function(){return H.u(H.Z({
toString:function(){return"$receiver$"}}))},"aT","$get$aT",function(){return H.u(H.Z({$method$:null,
toString:function(){return"$receiver$"}}))},"aU","$get$aU",function(){return H.u(H.Z(null))},"aV","$get$aV",function(){return H.u(function(){var $argumentsExpr$='$arguments$'
try{null.$method$($argumentsExpr$)}catch(z){return z.message}}())},"aZ","$get$aZ",function(){return H.u(H.Z(void 0))},"b_","$get$b_",function(){return H.u(function(){var $argumentsExpr$='$arguments$'
try{(void 0).$method$($argumentsExpr$)}catch(z){return z.message}}())},"aX","$get$aX",function(){return H.u(H.aY(null))},"aW","$get$aW",function(){return H.u(function(){try{null.$method$}catch(z){return z.message}}())},"b1","$get$b1",function(){return H.u(H.aY(void 0))},"b0","$get$b0",function(){return H.u(function(){try{(void 0).$method$}catch(z){return z.message}}())},"al","$get$al",function(){return P.cg()},"a3","$get$a3",function(){return[]},"aL","$get$aL",function(){return C.k}])
I=I.$finishIsolateConstructor(I)
$=new I()
init.metadata=[]
init.types=[{func:1,ret:P.t},{func:1,ret:-1,args:[{func:1,ret:-1}]},{func:1,args:[,]},{func:1,ret:-1},{func:1,args:[P.A]},{func:1,ret:P.t,args:[,]},{func:1,ret:P.t,args:[{func:1,ret:-1}]},{func:1,ret:-1,args:[P.q]},{func:1,ret:K.z,args:[P.q]},{func:1,ret:-1,args:[K.z]}]
function convertToFastObject(a){function MyClass(){}MyClass.prototype=a
new MyClass()
return a}function convertToSlowObject(a){a.__MAGIC_SLOW_PROPERTY=1
delete a.__MAGIC_SLOW_PROPERTY
return a}A=convertToFastObject(A)
B=convertToFastObject(B)
C=convertToFastObject(C)
D=convertToFastObject(D)
E=convertToFastObject(E)
F=convertToFastObject(F)
G=convertToFastObject(G)
H=convertToFastObject(H)
J=convertToFastObject(J)
K=convertToFastObject(K)
L=convertToFastObject(L)
M=convertToFastObject(M)
N=convertToFastObject(N)
O=convertToFastObject(O)
P=convertToFastObject(P)
Q=convertToFastObject(Q)
R=convertToFastObject(R)
S=convertToFastObject(S)
T=convertToFastObject(T)
U=convertToFastObject(U)
V=convertToFastObject(V)
W=convertToFastObject(W)
X=convertToFastObject(X)
Y=convertToFastObject(Y)
Z=convertToFastObject(Z)
function init(){I.p=Object.create(null)
init.allClasses=map()
init.getTypeFromName=function(a){return init.allClasses[a]}
init.interceptorsByTag=map()
init.leafTags=map()
init.finishedClasses=map()
I.$lazy=function(a,b,c,d,e){if(!init.lazies)init.lazies=Object.create(null)
init.lazies[a]=b
e=e||I.p
var z={}
var y={}
e[a]=z
e[b]=function(){var x=this[a]
if(x==y)H.d_(d||a)
try{if(x===z){this[a]=y
try{x=this[a]=c()}finally{if(x===z)this[a]=null}}return x}finally{this[b]=function(){return this[a]}}}}
I.$finishIsolateConstructor=function(a){var z=a.p
function Isolate(){var y=Object.keys(z)
for(var x=0;x<y.length;x++){var w=y[x]
this[w]=z[w]}var v=init.lazies
var u=v?Object.keys(v):[]
for(var x=0;x<u.length;x++)this[v[u[x]]]=null
function ForceEfficientMap(){}ForceEfficientMap.prototype=this
new ForceEfficientMap()
for(var x=0;x<u.length;x++){var t=v[u[x]]
this[t]=z[t]}}Isolate.prototype=a.prototype
Isolate.prototype.constructor=Isolate
Isolate.p=z
Isolate.at=a.at
Isolate.bf=a.bf
return Isolate}}!function(){var z=function(a){var t={}
t[a]=1
return Object.keys(convertToFastObject(t))[0]}
init.getIsolateTag=function(a){return z("___dart_"+a+init.isolateTag)}
var y="___dart_isolate_tags_"
var x=Object[y]||(Object[y]=Object.create(null))
var w="_ZxYxX"
for(var v=0;;v++){var u=z(w+"_"+v+"_")
if(!(u in x)){x[u]=1
init.isolateTag=u
break}}init.dispatchPropertyName=init.getIsolateTag("dispatch_record")}();(function(a){if(typeof document==="undefined"){a(null)
return}if(typeof document.currentScript!='undefined'){a(document.currentScript)
return}var z=document.scripts
function onLoad(b){for(var x=0;x<z.length;++x)z[x].removeEventListener("load",onLoad,false)
a(b.target)}for(var y=0;y<z.length;++y)z[y].addEventListener("load",onLoad,false)})(function(a){init.currentScript=a
if(typeof dartMainRunner==="function")dartMainRunner(F.bp,[])
else F.bp([])})})()
//# sourceMappingURL=main.dart.js.map
