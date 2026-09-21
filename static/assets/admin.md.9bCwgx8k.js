import{B as e,Dt as t,Et as n,G as r,H as i,J as a,K as o,Ot as s,St as c,U as l,V as u,W as d,X as f,Y as p,at as m,bt as h,et as g,kt as _,n as v,nt as y,q as b,st as x,ut as S,vt as C,z as w}from"./chunks/framework.BBlMhIbG.js";import{i as T,n as E,r as D,t as O}from"./chunks/api.U4rf-Ggi.js";var k={class:`model-test-panel`},A={class:`panel-header`},j={class:`panel-desc`},M=v(f({__name:`ModelTestPanel`,props:{activeKey:{}},setup(e){let t=e,n=i(()=>{for(let e of rn)if(e.children){let n=e.children.find(e=>e.key===t.activeKey);if(n)return n}}),r=i(()=>n.value?.label||`模型测试`),a=i(()=>({"geetest-slider":`上传 Geetest 缺口滑块验证码图片进行识别测试`,"geetest-icon-grid":`上传 Geetest 图标九宫格验证码图片进行识别测试`,ocr:`上传图片进行 OCR 文字识别测试`,calc:`上传图片进行计算公式识别测试`,"icon-detect":`上传图片进行图标检测测试`,"text-detect":`上传图片进行文字检测测试`,"icon-order":`上传图片进行图标顺序点选测试`,"text-order":`上传图片进行文字顺序点选测试`,"image-similarity":`上传两张图片进行相似度对比测试`,"single-rotate":`上传图片进行单图旋转角度检测测试`,"double-rotate":`上传两张图片进行双图旋转角度检测测试`})[n.value?.key||``]||`选择左侧菜单进行模型测试`);return(e,t)=>(m(),o(`div`,k,[l(`div`,A,[l(`h3`,null,_(r.value),1),l(`p`,j,_(a.value),1)]),t[0]||=l(`div`,{class:`panel-body`},[l(`div`,{class:`upload-area`},[l(`div`,{class:`upload-icon`},`📤`),l(`p`,null,`拖拽文件到此处，或点击上传`),l(`p`,{class:`upload-hint`},`支持 JPG、PNG、WEBP 格式`)])],-1)]))}}),[[`__scopeId`,`data-v-488343a7`]]),N={class:`ocr-panel`},P={class:`panel-grid`},F={class:`card`},I={class:`card-header`},L=[`disabled`],R={class:`card-body`},z=[`src`,`width`,`height`],B={class:`image-size`},V={key:0,class:`response-section`},H={class:`response-header`},U={class:`response-body`},W={class:`card`},G={class:`card-header`},K={class:`card-body`},ee={class:`tabs`},q=[`onClick`],J={class:`code-block`},Y=v(f({__name:`OCRPanel`,setup(n){let a=c(null),s=c(``),d=c(``),f=c(0),p=c(0),h=c(``),g=c(!1),v=c(null),y=c(!1),S=c(!1),C=c(`curl`),w=[{key:`curl`,label:`cURL`},{key:`python`,label:`Python`},{key:`javascript`,label:`JavaScript`},{key:`php`,label:`PHP`}],T={curl:`curl -X POST "http://localhost:6688/api/ocr" \\
  -H "Content-Type: application/json" \\
  -H "Authorization: Bearer <YOUR_TOKEN>" \\
  -d '{
    "img_base64": "data:image/png;base64,iVBORw0KG..."
  }'`,python:`import requests

token = "<YOUR_TOKEN>"
with open("captcha.png", "rb") as f:
    img_base64 = base64.b64encode(f.read()).decode()

resp = requests.post(
    "http://localhost:6688/api/ocr",
    json={"img_base64": img_base64},
    headers={"Authorization": f"Bearer {token}"}
)
print(resp.json())`,javascript:`const token = "<YOUR_TOKEN>";
const imgBase64 = "data:image/png;base64,iVBORw0KG...";

fetch("http://localhost:6688/api/ocr", {
  method: "POST",
  headers: {
    "Content-Type": "application/json",
    "Authorization": "Bearer " + token
  },
  body: JSON.stringify({ img_base64: imgBase64 })
})
  .then(res => res.json())
  .then(data => console.log(data));`,php:`$token = "<YOUR_TOKEN>";
$img = file_get_contents("captcha.png");
$imgBase64 = base64_encode($img);

$ch = curl_init("http://localhost:6688/api/ocr");
curl_setopt($ch, CURLOPT_POST, true);
curl_setopt($ch, CURLOPT_HTTPHEADER, [
    "Content-Type: application/json",
    "Authorization: Bearer $token"
]);
curl_setopt($ch, CURLOPT_POSTFIELDS, json_encode([
    "img_base64" => $imgBase64
]));
curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
$resp = curl_exec($ch);
curl_close($ch);
echo $resp;`},E=i(()=>T[C.value]),O=i(()=>v.value?JSON.stringify(v.value,null,2):``);function k(){a.value?.click()}function A(e){let t=e.target.files?.[0];t&&M(t)}function j(e){let t=e.dataTransfer?.files?.[0];t&&M(t)}function M(e){h.value=Y(e.size);let t=new FileReader;t.onload=()=>{let e=t.result;s.value=e,d.value=e.split(`,`)[1];let n=new Image;n.onload=()=>{f.value=n.naturalWidth,p.value=n.naturalHeight},n.src=e},t.readAsDataURL(e)}function Y(e){return e<1024?e+` B`:e<1048576?(e/1024).toFixed(1)+` KB`:(e/1048576).toFixed(1)+` MB`}async function X(){if(!d.value){alert(`请先上传验证码图片`);return}S.value=!0,y.value=!1;try{let e=await fetch(`/api/ocr`,{method:`POST`,headers:{"Content-Type":`application/json`,Authorization:`Bearer ${D()}`},body:JSON.stringify({img_base64:d.value})});if(!e.ok){y.value=!0;let t=await e.json().catch(()=>({detail:`请求失败`}));v.value=t;return}v.value=await e.json()}catch(e){y.value=!0,v.value={error:e.message||`网络错误`}}finally{S.value=!1}}async function Z(){try{await navigator.clipboard.writeText(E.value),g.value=!0,setTimeout(()=>g.value=!1,2e3)}catch{let e=document.createElement(`textarea`);e.value=E.value,document.body.appendChild(e),e.select(),document.execCommand(`copy`),document.body.removeChild(e),g.value=!0,setTimeout(()=>g.value=!1,2e3)}}return(n,i)=>(m(),o(`div`,N,[l(`div`,P,[l(`div`,F,[l(`div`,I,[i[1]||=l(`h3`,{class:`card-title`},`OCR 识别`,-1),l(`button`,{class:`btn-test`,disabled:S.value,onClick:X},_(S.value?`测试中...`:`开始测试`),9,L)]),l(`div`,R,[l(`div`,{class:`upload-zone`,onClick:k,onDragover:i[0]||=e(()=>{},[`prevent`]),onDrop:e(j,[`prevent`])},[l(`input`,{ref_key:`fileInput`,ref:a,type:`file`,accept:`image/png,image/jpeg,image/webp`,style:{display:`none`},onChange:A},null,544),s.value?(m(),o(u,{key:1},[l(`img`,{src:s.value,width:f.value,height:p.value,class:`preview-img`},null,8,z),l(`p`,B,_(f.value)+` × `+_(p.value)+` px | `+_(h.value),1)],64)):(m(),o(u,{key:0},[i[2]||=l(`div`,{class:`upload-icon`},`📤`,-1),i[3]||=l(`p`,{class:`upload-text`},`验证码图片`,-1),i[4]||=l(`p`,{class:`upload-hint`},`PNG、JPG、WebP`,-1)],64))],32),i[6]||=b(`<div class="api-info" data-v-1f8f9e85><div class="api-row" data-v-1f8f9e85><span class="api-label" data-v-1f8f9e85>接口名称</span><span class="api-value" data-v-1f8f9e85>OCR 识别</span></div><div class="api-row" data-v-1f8f9e85><span class="api-label" data-v-1f8f9e85>接口地址</span><code class="api-value code" data-v-1f8f9e85>/api/ocr</code></div><div class="api-row" data-v-1f8f9e85><span class="api-label" data-v-1f8f9e85>请求字段</span><code class="api-value code" data-v-1f8f9e85>img_base64</code></div></div>`,1),v.value?(m(),o(`div`,V,[l(`div`,H,[i[5]||=l(`span`,{class:`response-title`},`返回结果`,-1),l(`span`,{class:t([`response-status`,{error:y.value}])},_(y.value?`请求失败`:`200 OK`),3)]),l(`pre`,U,[l(`code`,null,_(O.value),1)])])):r(``,!0)])]),l(`div`,W,[l(`div`,G,[i[7]||=l(`h3`,{class:`card-title`},`调用代码`,-1),l(`button`,{class:`btn-copy`,onClick:Z},_(g.value?`已复制`:`复制代码`),1)]),l(`div`,K,[l(`div`,ee,[(m(),o(u,null,x(w,e=>l(`button`,{key:e.key,class:t([`tab`,{active:C.value===e.key}]),onClick:t=>C.value=e.key},_(e.label),11,q)),64))]),l(`div`,J,[l(`pre`,null,[l(`code`,null,_(E.value),1)])])])])])]))}}),[[`__scopeId`,`data-v-1f8f9e85`]]),X={class:`geetest-slider-panel`},Z={class:`panel-grid`},te={class:`card`},ne={class:`card-header`},re=[`disabled`],ie={class:`card-body`},ae=[`src`,`width`,`height`],oe=[`width`,`height`],Q={class:`image-size`},$={key:0,class:`response-section`},se={class:`response-header`},ce={class:`response-body`},le={class:`card`},ue={class:`card-header`},de={class:`card-body`},fe={class:`tabs`},pe=[`onClick`],me={class:`code-block`},he=v(f({__name:`GeetestSliderPanel`,setup(n){let a=c(null),d=c(null),f=c(``),p=c(``),h=c(0),v=c(0),y=c(``),S=c(!1),C=c(null),w=c(!1),T=c(!1),E=c(`curl`),O=[{key:`curl`,label:`cURL`},{key:`python`,label:`Python`},{key:`javascript`,label:`JavaScript`},{key:`php`,label:`PHP`}],k={curl:`curl -X POST "http://localhost:6688/api/geetest-slider" \\
  -H "Content-Type: application/json" \\
  -H "Authorization: Bearer <YOUR_TOKEN>" \\
  -d '{
    "img_base64": "data:image/png;base64,iVBORw0KG..."
  }'`,python:`import requests
import base64

token = "<YOUR_TOKEN>"
with open("captcha.png", "rb") as f:
    img_base64 = base64.b64encode(f.read()).decode()

resp = requests.post(
    "http://localhost:6688/api/geetest-slider",
    json={"img_base64": img_base64},
    headers={"Authorization": f"Bearer {token}"}
)
print(resp.json())`,javascript:`const token = "<YOUR_TOKEN>";
const imgBase64 = "data:image/png;base64,iVBORw0KG...";

fetch("http://localhost:6688/api/geetest-slider", {
  method: "POST",
  headers: {
    "Content-Type": "application/json",
    "Authorization": "Bearer " + token
  },
  body: JSON.stringify({ img_base64: imgBase64 })
})
  .then(res => res.json())
  .then(data => console.log(data));`,php:`$token = "<YOUR_TOKEN>";
$img = file_get_contents("captcha.png");
$imgBase64 = base64_encode($img);

$ch = curl_init("http://localhost:6688/api/geetest-slider");
curl_setopt($ch, CURLOPT_POST, true);
curl_setopt($ch, CURLOPT_HTTPHEADER, [
    "Content-Type: application/json",
    "Authorization: Bearer $token"
]);
curl_setopt($ch, CURLOPT_POSTFIELDS, json_encode([
    "img_base64" => $imgBase64
]));
curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
$resp = curl_exec($ch);
curl_close($ch);
echo $resp;`},A=i(()=>k[E.value]),j=i(()=>C.value?JSON.stringify(C.value,null,2):``);function M(){a.value?.click()}function N(e){let t=e.target.files?.[0];t&&F(t)}function P(e){let t=e.dataTransfer?.files?.[0];t&&F(t)}function F(e){L(),C.value=null,w.value=!1,y.value=I(e.size);let t=new FileReader;t.onload=()=>{let e=t.result;f.value=e,p.value=e.split(`,`)[1];let n=new Image;n.onload=()=>{h.value=n.naturalWidth,v.value=n.naturalHeight},n.src=e},t.readAsDataURL(e)}function I(e){return e<1024?e+` B`:e<1048576?(e/1024).toFixed(1)+` KB`:(e/1048576).toFixed(1)+` MB`}function L(){let e=d.value;if(!e)return;let t=e.getContext(`2d`);t&&t.clearRect(0,0,e.width,e.height)}function R(e){let t=d.value;if(!t)return;let n=t.getContext(`2d`);if(!n)return;n.clearRect(0,0,t.width,t.height);let[r,i,a,o]=e,s=r,c=i,l=a-r,u=o-i;n.strokeStyle=`#ef4444`,n.lineWidth=2,n.strokeRect(s,c,l,u),n.fillStyle=`rgba(239, 68, 68, 0.15)`,n.fillRect(s,c,l,u)}async function z(){if(!p.value){alert(`请先上传 Geetest 缺口滑块验证码图片`);return}T.value=!0,w.value=!1;try{let e=await fetch(`/api/geetest/slide`,{method:`POST`,headers:{"Content-Type":`application/json`,Authorization:`Bearer ${D()}`},body:JSON.stringify({img_base64:p.value})});if(!e.ok){w.value=!0;let t=await e.json().catch(()=>({detail:`请求失败`}));C.value=t;return}C.value=await e.json(),C.value?.result&&Array.isArray(C.value.result)&&C.value.result.length===4&&(await g(),R(C.value.result))}catch(e){w.value=!0,C.value={error:e.message||`网络错误`}}finally{T.value=!1}}async function B(){try{await navigator.clipboard.writeText(A.value),S.value=!0,setTimeout(()=>S.value=!1,2e3)}catch{let e=document.createElement(`textarea`);e.value=A.value,document.body.appendChild(e),e.select(),document.execCommand(`copy`),document.body.removeChild(e),S.value=!0,setTimeout(()=>S.value=!1,2e3)}}return(n,i)=>(m(),o(`div`,X,[l(`div`,Z,[l(`div`,te,[l(`div`,ne,[i[1]||=l(`h3`,{class:`card-title`},`Geetest 缺口滑块识别`,-1),l(`button`,{class:`btn-test`,disabled:T.value,onClick:z},_(T.value?`测试中...`:`开始测试`),9,re)]),l(`div`,ie,[l(`div`,{class:`upload-zone`,onClick:M,onDragover:i[0]||=e(()=>{},[`prevent`]),onDrop:e(P,[`prevent`])},[l(`input`,{ref_key:`fileInput`,ref:a,type:`file`,accept:`image/png,image/jpeg,image/webp`,style:{display:`none`},onChange:N},null,544),f.value?(m(),o(u,{key:1},[l(`div`,{class:`img-wrapper`,style:s({width:h.value+`px`,height:v.value+`px`})},[l(`img`,{src:f.value,width:h.value,height:v.value,class:`preview-img`},null,8,ae),l(`canvas`,{ref_key:`resultCanvas`,ref:d,width:h.value,height:v.value,class:`result-canvas`},null,8,oe)],4),l(`p`,Q,_(h.value)+` × `+_(v.value)+` px | `+_(y.value),1)],64)):(m(),o(u,{key:0},[i[2]||=l(`div`,{class:`upload-icon`},`📤`,-1),i[3]||=l(`p`,{class:`upload-text`},`Geetest 缺口滑块验证码图片`,-1),i[4]||=l(`p`,{class:`upload-hint`},`PNG、JPG、WebP`,-1)],64))],32),i[6]||=b(`<div class="api-info" data-v-492da86e><div class="api-row" data-v-492da86e><span class="api-label" data-v-492da86e>接口名称</span><span class="api-value" data-v-492da86e>Geetest 缺口滑块识别</span></div><div class="api-row" data-v-492da86e><span class="api-label" data-v-492da86e>接口地址</span><code class="api-value code" data-v-492da86e>/api/geetest-slider</code></div><div class="api-row" data-v-492da86e><span class="api-label" data-v-492da86e>请求字段</span><code class="api-value code" data-v-492da86e>img_base64</code></div></div>`,1),C.value?(m(),o(`div`,$,[l(`div`,se,[i[5]||=l(`span`,{class:`response-title`},`返回结果`,-1),l(`span`,{class:t([`response-status`,{error:w.value}])},_(w.value?`请求失败`:`200 OK`),3)]),l(`pre`,ce,[l(`code`,null,_(j.value),1)])])):r(``,!0)])]),l(`div`,le,[l(`div`,ue,[i[7]||=l(`h3`,{class:`card-title`},`调用代码`,-1),l(`button`,{class:`btn-copy`,onClick:B},_(S.value?`已复制`:`复制代码`),1)]),l(`div`,de,[l(`div`,fe,[(m(),o(u,null,x(O,e=>l(`button`,{key:e.key,class:t([`tab`,{active:E.value===e.key}]),onClick:t=>E.value=e.key},_(e.label),11,pe)),64))]),l(`div`,me,[l(`pre`,null,[l(`code`,null,_(A.value),1)])])])])])]))}}),[[`__scopeId`,`data-v-492da86e`]]),ge={class:`math-panel`},_e={class:`panel-grid`},ve={class:`card`},ye={class:`card-header`},be=[`disabled`],xe={class:`card-body`},Se=[`src`,`width`,`height`],Ce={class:`image-size`},we={key:0,class:`response-section`},Te={class:`response-header`},Ee={class:`response-body`},De={class:`card`},Oe={class:`card-header`},ke={class:`card-body`},Ae={class:`tabs`},je=[`onClick`],Me={class:`code-block`},Ne=v(f({__name:`MathPanel`,setup(n){let a=c(null),s=c(``),d=c(``),f=c(0),p=c(0),h=c(``),g=c(!1),v=c(null),y=c(!1),S=c(!1),C=c(`curl`),w=[{key:`curl`,label:`cURL`},{key:`python`,label:`Python`},{key:`javascript`,label:`JavaScript`},{key:`php`,label:`PHP`}],T={curl:`curl -X POST "http://localhost:6688/api/math" \\
  -H "Content-Type: application/json" \\
  -H "Authorization: Bearer <YOUR_TOKEN>" \\
  -d '{
    "img_base64": "data:image/png;base64,iVBORw0KG..."
  }'`,python:`import requests
import base64

token = "<YOUR_TOKEN>"
with open("captcha.png", "rb") as f:
    img_base64 = base64.b64encode(f.read()).decode()

resp = requests.post(
    "http://localhost:6688/api/math",
    json={"img_base64": img_base64},
    headers={"Authorization": f"Bearer {token}"}
)
print(resp.json())`,javascript:`const token = "<YOUR_TOKEN>";
const imgBase64 = "data:image/png;base64,iVBORw0KG...";

fetch("http://localhost:6688/api/math", {
  method: "POST",
  headers: {
    "Content-Type": "application/json",
    "Authorization": "Bearer " + token
  },
  body: JSON.stringify({ img_base64: imgBase64 })
})
  .then(res => res.json())
  .then(data => console.log(data));`,php:`$token = "<YOUR_TOKEN>";
$img = file_get_contents("captcha.png");
$imgBase64 = base64_encode($img);

$ch = curl_init("http://localhost:6688/api/math");
curl_setopt($ch, CURLOPT_POST, true);
curl_setopt($ch, CURLOPT_HTTPHEADER, [
    "Content-Type: application/json",
    "Authorization: Bearer $token"
]);
curl_setopt($ch, CURLOPT_POSTFIELDS, json_encode([
    "img_base64" => $imgBase64
]));
curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
$resp = curl_exec($ch);
curl_close($ch);
echo $resp;`},E=i(()=>T[C.value]),O=i(()=>v.value?JSON.stringify(v.value,null,2):``);function k(){a.value?.click()}function A(e){let t=e.target.files?.[0];t&&M(t)}function j(e){let t=e.dataTransfer?.files?.[0];t&&M(t)}function M(e){v.value=null,y.value=!1,h.value=N(e.size);let t=new FileReader;t.onload=()=>{let e=t.result;s.value=e,d.value=e.split(`,`)[1];let n=new Image;n.onload=()=>{f.value=n.naturalWidth,p.value=n.naturalHeight},n.src=e},t.readAsDataURL(e)}function N(e){return e<1024?e+` B`:e<1048576?(e/1024).toFixed(1)+` KB`:(e/1048576).toFixed(1)+` MB`}async function P(){if(!d.value){alert(`请先上传算式验证码图片`);return}S.value=!0,y.value=!1;try{let e=await fetch(`/api/math`,{method:`POST`,headers:{"Content-Type":`application/json`,Authorization:`Bearer ${D()}`},body:JSON.stringify({img_base64:d.value})});if(!e.ok){y.value=!0;let t=await e.json().catch(()=>({detail:`请求失败`}));v.value=t;return}v.value=await e.json()}catch(e){y.value=!0,v.value={error:e.message||`网络错误`}}finally{S.value=!1}}async function F(){try{await navigator.clipboard.writeText(E.value),g.value=!0,setTimeout(()=>g.value=!1,2e3)}catch{let e=document.createElement(`textarea`);e.value=E.value,document.body.appendChild(e),e.select(),document.execCommand(`copy`),document.body.removeChild(e),g.value=!0,setTimeout(()=>g.value=!1,2e3)}}return(n,i)=>(m(),o(`div`,ge,[l(`div`,_e,[l(`div`,ve,[l(`div`,ye,[i[1]||=l(`h3`,{class:`card-title`},`计算识别`,-1),l(`button`,{class:`btn-test`,disabled:S.value,onClick:P},_(S.value?`测试中...`:`开始测试`),9,be)]),l(`div`,xe,[l(`div`,{class:`upload-zone`,onClick:k,onDragover:i[0]||=e(()=>{},[`prevent`]),onDrop:e(j,[`prevent`])},[l(`input`,{ref_key:`fileInput`,ref:a,type:`file`,accept:`image/png,image/jpeg,image/webp`,style:{display:`none`},onChange:A},null,544),s.value?(m(),o(u,{key:1},[l(`img`,{src:s.value,width:f.value,height:p.value,class:`preview-img`},null,8,Se),l(`p`,Ce,_(f.value)+` × `+_(p.value)+` px | `+_(h.value),1)],64)):(m(),o(u,{key:0},[i[2]||=l(`div`,{class:`upload-icon`},`📤`,-1),i[3]||=l(`p`,{class:`upload-text`},`算式验证码图片`,-1),i[4]||=l(`p`,{class:`upload-hint`},`PNG、JPG、WebP`,-1)],64))],32),i[6]||=b(`<div class="api-info" data-v-1530343c><div class="api-row" data-v-1530343c><span class="api-label" data-v-1530343c>接口名称</span><span class="api-value" data-v-1530343c>计算识别</span></div><div class="api-row" data-v-1530343c><span class="api-label" data-v-1530343c>接口地址</span><code class="api-value code" data-v-1530343c>/api/math</code></div><div class="api-row" data-v-1530343c><span class="api-label" data-v-1530343c>请求字段</span><code class="api-value code" data-v-1530343c>img_base64</code></div></div>`,1),v.value?(m(),o(`div`,we,[l(`div`,Te,[i[5]||=l(`span`,{class:`response-title`},`返回结果`,-1),l(`span`,{class:t([`response-status`,{error:y.value}])},_(y.value?`请求失败`:`200 OK`),3)]),l(`pre`,Ee,[l(`code`,null,_(O.value),1)])])):r(``,!0)])]),l(`div`,De,[l(`div`,Oe,[i[7]||=l(`h3`,{class:`card-title`},`调用代码`,-1),l(`button`,{class:`btn-copy`,onClick:F},_(g.value?`已复制`:`复制代码`),1)]),l(`div`,ke,[l(`div`,Ae,[(m(),o(u,null,x(w,e=>l(`button`,{key:e.key,class:t([`tab`,{active:C.value===e.key}]),onClick:t=>C.value=e.key},_(e.label),11,je)),64))]),l(`div`,Me,[l(`pre`,null,[l(`code`,null,_(E.value),1)])])])])])]))}}),[[`__scopeId`,`data-v-1530343c`]]),Pe={class:`image-similarity-panel`},Fe={class:`panel-grid`},Ie={class:`card`},Le={class:`card-header`},Re=[`disabled`],ze={class:`card-body`},Be={class:`upload-row`},Ve=[`src`,`width`,`height`],He={class:`image-size`},Ue=[`src`,`width`,`height`],We={class:`image-size`},Ge={key:0,class:`response-section`},Ke={class:`response-header`},qe={class:`response-body`},Je={class:`card`},Ye={class:`card-header`},Xe={class:`card-body`},Ze={class:`tabs`},Qe=[`onClick`],$e={class:`code-block`},et=v(f({__name:`ImageSimilarityPanel`,setup(n){let a=c(null),s=c(null),d=c(``),f=c(``),p=c(``),h=c(``),g=c(0),v=c(0),y=c(0),S=c(0),C=c(``),w=c(``),T=c(!1),E=c(null),O=c(!1),k=c(!1),A=c(`curl`),j=[{key:`curl`,label:`cURL`},{key:`python`,label:`Python`},{key:`javascript`,label:`JavaScript`},{key:`php`,label:`PHP`}],M={curl:`curl -X POST "http://localhost:6688/api/compare/similarity" \\
  -H "Content-Type: application/json" \\
  -H "Authorization: Bearer <YOUR_TOKEN>" \\
  -d '{
    "img1_base64": "data:image/png;base64,iVBORw0KG...",
    "img2_base64": "data:image/png;base64,iVBORw0KG..."
  }'`,python:`import requests
import base64

token = "<YOUR_TOKEN>"
with open("img1.png", "rb") as f:
    img1 = base64.b64encode(f.read()).decode()
with open("img2.png", "rb") as f:
    img2 = base64.b64encode(f.read()).decode()

resp = requests.post(
    "http://localhost:6688/api/compare/similarity",
    json={"img1_base64": img1, "img2_base64": img2},
    headers={"Authorization": f"Bearer {token}"}
)
print(resp.json())`,javascript:`const token = "<YOUR_TOKEN>";
const img1Base64 = "data:image/png;base64,iVBORw0KG...";
const img2Base64 = "data:image/png;base64,iVBORw0KG...";

fetch("http://localhost:6688/api/compare/similarity", {
  method: "POST",
  headers: {
    "Content-Type": "application/json",
    "Authorization": "Bearer " + token
  },
  body: JSON.stringify({ img1_base64: img1Base64, img2_base64: img2Base64 })
})
  .then(res => res.json())
  .then(data => console.log(data));`,php:`$token = "<YOUR_TOKEN>";
$img1 = base64_encode(file_get_contents("img1.png"));
$img2 = base64_encode(file_get_contents("img2.png"));

$ch = curl_init("http://localhost:6688/api/compare/similarity");
curl_setopt($ch, CURLOPT_POST, true);
curl_setopt($ch, CURLOPT_HTTPHEADER, [
    "Content-Type: application/json",
    "Authorization: Bearer $token"
]);
curl_setopt($ch, CURLOPT_POSTFIELDS, json_encode([
    "img1_base64" => $img1,
    "img2_base64" => $img2
]));
curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
$resp = curl_exec($ch);
curl_close($ch);
echo $resp;`},N=i(()=>M[A.value]),P=i(()=>E.value?JSON.stringify(E.value,null,2):``);function F(){a.value?.click()}function I(){s.value?.click()}function L(e){let t=e.target.files?.[0];t&&V(t,1)}function R(e){let t=e.target.files?.[0];t&&V(t,2)}function z(e){let t=e.dataTransfer?.files?.[0];t&&V(t,1)}function B(e){let t=e.dataTransfer?.files?.[0];t&&V(t,2)}function V(e,t){E.value=null,O.value=!1;let n=new FileReader;n.onload=()=>{let r=n.result,i=r.split(`,`)[1],a=new Image;a.onload=()=>{t===1?(d.value=r,p.value=i,g.value=a.naturalWidth,v.value=a.naturalHeight,C.value=H(e.size)):(f.value=r,h.value=i,y.value=a.naturalWidth,S.value=a.naturalHeight,w.value=H(e.size))},a.src=r},n.readAsDataURL(e)}function H(e){return e<1024?e+` B`:e<1048576?(e/1024).toFixed(1)+` KB`:(e/1048576).toFixed(1)+` MB`}async function U(){if(!p.value||!h.value){alert(`请上传两张图片`);return}k.value=!0,O.value=!1;try{let e=await fetch(`/api/compare/similarity`,{method:`POST`,headers:{"Content-Type":`application/json`,Authorization:`Bearer ${D()}`},body:JSON.stringify({img1_base64:p.value,img2_base64:h.value})});if(!e.ok){O.value=!0;let t=await e.json().catch(()=>({detail:`请求失败`}));E.value=t;return}E.value=await e.json()}catch(e){O.value=!0,E.value={error:e.message||`网络错误`}}finally{k.value=!1}}async function W(){try{await navigator.clipboard.writeText(N.value),T.value=!0,setTimeout(()=>T.value=!1,2e3)}catch{let e=document.createElement(`textarea`);e.value=N.value,document.body.appendChild(e),e.select(),document.execCommand(`copy`),document.body.removeChild(e),T.value=!0,setTimeout(()=>T.value=!1,2e3)}}return(n,i)=>(m(),o(`div`,Pe,[l(`div`,Fe,[l(`div`,Ie,[l(`div`,Le,[i[2]||=l(`h3`,{class:`card-title`},`图片相似度`,-1),l(`button`,{class:`btn-test`,disabled:k.value||!p.value||!h.value,onClick:U},_(k.value?`测试中...`:`开始测试`),9,Re)]),l(`div`,ze,[l(`div`,Be,[l(`div`,{class:`upload-zone`,onClick:F,onDragover:i[0]||=e(()=>{},[`prevent`]),onDrop:e(z,[`prevent`])},[l(`input`,{ref_key:`fileInput1`,ref:a,type:`file`,accept:`image/png,image/jpeg,image/webp`,style:{display:`none`},onChange:L},null,544),d.value?(m(),o(u,{key:1},[l(`img`,{src:d.value,width:g.value,height:v.value,class:`preview-img`},null,8,Ve),l(`p`,He,_(g.value)+` × `+_(v.value)+` px | `+_(C.value),1)],64)):(m(),o(u,{key:0},[i[3]||=l(`div`,{class:`upload-icon`},`📤`,-1),i[4]||=l(`p`,{class:`upload-text`},`图片 1`,-1),i[5]||=l(`p`,{class:`upload-hint`},`点击或拖拽上传`,-1)],64))],32),l(`div`,{class:`upload-zone`,onClick:I,onDragover:i[1]||=e(()=>{},[`prevent`]),onDrop:e(B,[`prevent`])},[l(`input`,{ref_key:`fileInput2`,ref:s,type:`file`,accept:`image/png,image/jpeg,image/webp`,style:{display:`none`},onChange:R},null,544),f.value?(m(),o(u,{key:1},[l(`img`,{src:f.value,width:y.value,height:S.value,class:`preview-img`},null,8,Ue),l(`p`,We,_(y.value)+` × `+_(S.value)+` px | `+_(w.value),1)],64)):(m(),o(u,{key:0},[i[6]||=l(`div`,{class:`upload-icon`},`📤`,-1),i[7]||=l(`p`,{class:`upload-text`},`图片 2`,-1),i[8]||=l(`p`,{class:`upload-hint`},`点击或拖拽上传`,-1)],64))],32)]),i[10]||=b(`<div class="api-info" data-v-5b770d71><div class="api-row" data-v-5b770d71><span class="api-label" data-v-5b770d71>接口名称</span><span class="api-value" data-v-5b770d71>图片相似度</span></div><div class="api-row" data-v-5b770d71><span class="api-label" data-v-5b770d71>接口地址</span><code class="api-value code" data-v-5b770d71>/api/compare/similarity</code></div><div class="api-row" data-v-5b770d71><span class="api-label" data-v-5b770d71>请求字段</span><code class="api-value code" data-v-5b770d71>img1_base64, img2_base64</code></div></div>`,1),E.value?(m(),o(`div`,Ge,[l(`div`,Ke,[i[9]||=l(`span`,{class:`response-title`},`返回结果`,-1),l(`span`,{class:t([`response-status`,{error:O.value}])},_(O.value?`请求失败`:`200 OK`),3)]),l(`pre`,qe,[l(`code`,null,_(P.value),1)])])):r(``,!0)])]),l(`div`,Je,[l(`div`,Ye,[i[11]||=l(`h3`,{class:`card-title`},`调用代码`,-1),l(`button`,{class:`btn-copy`,onClick:W},_(T.value?`已复制`:`复制代码`),1)]),l(`div`,Xe,[l(`div`,Ze,[(m(),o(u,null,x(j,e=>l(`button`,{key:e.key,class:t([`tab`,{active:A.value===e.key}]),onClick:t=>A.value=e.key},_(e.label),11,Qe)),64))]),l(`div`,$e,[l(`pre`,null,[l(`code`,null,_(N.value),1)])])])])])]))}}),[[`__scopeId`,`data-v-5b770d71`]]),tt={class:`geetest-image-click-panel`},nt={class:`feature-tabs`},rt={class:`panel-grid`},it={class:`card`},at={class:`card-header`},ot=[`disabled`],st={class:`card-body`},ct={class:`similarity-upload-layout`},lt={class:`ref-section`},ut=[`src`,`width`,`height`],dt={class:`image-size`},ft={class:`compare-section`},pt={class:`upload-grid upload-grid-4`},mt=[`onClick`,`onDrop`],ht={key:0,class:`cmp-best-badge`},gt=[`onChange`],_t={class:`upload-text`},vt=[`src`,`width`,`height`],yt={class:`image-size`},bt={key:0,class:`similarity-results`},xt={class:`results-header`},St={key:0,class:`result-cards`},Ct={class:`result-card-header`},wt={class:`result-card-label`},Tt={key:0,class:`best-badge`},Et={class:`result-card-body`},Dt={class:`result-row`},Ot={class:`similarity-bar`},kt={class:`result-row`},At={class:`result-row`},jt={class:`raw-json-details`},Mt={class:`response-body`},Nt={class:`card`},Pt={class:`card-header`},Ft={class:`card-body`},It={class:`tabs`},Lt=[`onClick`],Rt={class:`code-block`},zt={class:`panel-grid`},Bt={class:`card`},Vt={class:`card-header`},Ht=[`disabled`],Ut={class:`card-body`},Wt=[`src`,`width`,`height`],Gt=[`width`,`height`],Kt={class:`image-size`},qt={key:0,class:`response-section`},Jt={class:`response-header`},Yt={class:`response-body`},Xt={class:`card`},Zt={class:`card-header`},Qt={class:`card-body`},$t={class:`tabs`},en=[`onClick`],tn={class:`code-block`},nn=4,rn=[{key:`model-test`,label:`模型测试`,icon:`🧪`,component:M,children:[{key:`geetest-slider`,label:`Geetest缺口滑块`,icon:`🔲`,component:he},{key:`geetest-icon-grid`,label:`Geetest图标九宫格`,icon:`🔳`,component:M},{key:`geetest-image-click`,label:`极验图片点选`,icon:`🖱️`,component:v(f({__name:`GeetestImageClickPanel`,setup(n){let a=c(`similarity`),d=[{key:`curl`,label:`cURL`},{key:`python`,label:`Python`},{key:`javascript`,label:`JavaScript`},{key:`php`,label:`PHP`}];function f(e){return e<1024?e+` B`:e<1048576?(e/1024).toFixed(1)+` KB`:(e/1048576).toFixed(1)+` MB`}function p(){return{previewUrl:``,base64:``,width:0,height:0,fileSize:``}}let v=c(null),y=h(p()),S=c([]),T=h(Array.from({length:nn},()=>p()));i(()=>{let e=0;return y.base64&&e++,T.forEach(t=>{t.base64&&e++}),e});let E=i(()=>!!y.base64&&T.some(e=>!!e.base64)),O=c(!1),k=c(null),A=c(!1),j=c(!1),M=c(`curl`),N={curl:`curl -X POST "http://localhost:6688/api/geetest/icon/click/similarity" \\
  -H "Content-Type: application/json" \\
  -H "Authorization: Bearer <YOUR_TOKEN>" \\
  -d '{
    "reference_img": "data:image/png;base64,iVBORw0KG...",
    "compare_imgs": [
      "data:image/png;base64,iVBORw0KG..."
    ]
  }'`,python:`import requests
import base64

token = "<YOUR_TOKEN>"
with open("reference.png", "rb") as f:
    reference_img = base64.b64encode(f.read()).decode()

compare_imgs = []
for fn in ["compare1.png", "compare2.png"]:
    with open(fn, "rb") as f:
        compare_imgs.append(base64.b64encode(f.read()).decode())

resp = requests.post(
    "http://localhost:6688/api/geetest/icon/click/similarity",
    json={"reference_img": reference_img, "compare_imgs": compare_imgs},
    headers={"Authorization": f"Bearer {token}"}
)
print(resp.json())`,javascript:`const token = "<YOUR_TOKEN>";
const referenceImg = "data:image/png;base64,iVBORw0KG...";
const compareImgs = [
  "data:image/png;base64,iVBORw0KG...",
  "data:image/png;base64,iVBORw0KG...",
];

fetch("http://localhost:6688/api/geetest/icon/click/similarity", {
  method: "POST",
  headers: {
    "Content-Type": "application/json",
    "Authorization": "Bearer " + token
  },
  body: JSON.stringify({ reference_img: referenceImg, compare_imgs: compareImgs })
})
  .then(res => res.json())
  .then(data => console.log(data));`,php:`$token = "<YOUR_TOKEN>";
$referenceImg = base64_encode(file_get_contents("reference.png"));
$compareImgs = [];
foreach (["compare1.png", "compare2.png"] as $fn) {
    $compareImgs[] = base64_encode(file_get_contents($fn));
}

$ch = curl_init("http://localhost:6688/api/geetest/icon/click/similarity");
curl_setopt($ch, CURLOPT_POST, true);
curl_setopt($ch, CURLOPT_HTTPHEADER, [
    "Content-Type: application/json",
    "Authorization: Bearer $token"
]);
curl_setopt($ch, CURLOPT_POSTFIELDS, json_encode([
    "reference_img" => $referenceImg,
    "compare_imgs" => $compareImgs
]));
curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
$resp = curl_exec($ch);
curl_close($ch);
echo $resp;`},P=i(()=>N[M.value]),F=i(()=>k.value?JSON.stringify(k.value,null,2):``),I=i(()=>{if(A.value)return[];let e=k.value?.result;return Array.isArray(e)?e:[]}),L=i(()=>{let e=I.value;if(e.length===0)return-1;let t=0;for(let n=1;n<e.length;n++)e[n].similarity>e[t].similarity&&(t=n);return t});function R(e){return e>=.95?`sim-high`:e>=.8?`sim-mid`:`sim-low`}function z(e){return{high:`高`,medium:`中`,low:`低`}[e]||e}async function B(){if(!E.value){alert(`请先上传基准图和至少一张对比图`);return}j.value=!0,A.value=!1;try{let e=T.filter(e=>!!e.base64).map(e=>e.base64),t=await fetch(`/api/geetest/icon/click/similarity`,{method:`POST`,headers:{"Content-Type":`application/json`,Authorization:`Bearer ${D()}`},body:JSON.stringify({reference_img:y.base64,compare_imgs:e})});if(!t.ok){A.value=!0;let e=await t.json().catch(()=>({detail:`请求失败`}));k.value=e;return}k.value=await t.json()}catch(e){A.value=!0,k.value={error:e.message||`网络错误`}}finally{j.value=!1}}let V=c(null),H=c(null),U=c(``),W=c(``),G=c(0),K=c(0),ee=c(``),q=c(!1),J=c(null),Y=c(!1),X=c(!1),Z=c(`curl`),te={curl:`curl -X POST "http://localhost:6688/api/geetest/icon/click/check" \\
  -H "Content-Type: application/json" \\
  -H "Authorization: Bearer <YOUR_TOKEN>" \\
  -d '{
    "img_base64": "data:image/png;base64,iVBORw0KG..."
  }'`,python:`import requests
import base64

token = "<YOUR_TOKEN>"
with open("captcha.png", "rb") as f:
    img_base64 = base64.b64encode(f.read()).decode()

resp = requests.post(
    "http://localhost:6688/api/geetest/icon/click/check",
    json={"img_base64": img_base64},
    headers={"Authorization": f"Bearer {token}"}
)
print(resp.json())`,javascript:`const token = "<YOUR_TOKEN>";
const imgBase64 = "data:image/png;base64,iVBORw0KG...";

fetch("http://localhost:6688/api/geetest/icon/click/check", {
  method: "POST",
  headers: {
    "Content-Type": "application/json",
    "Authorization": "Bearer " + token
  },
  body: JSON.stringify({ img_base64: imgBase64 })
})
  .then(res => res.json())
  .then(data => console.log(data));`,php:`$token = "<YOUR_TOKEN>";
$img = base64_encode(file_get_contents("captcha.png"));

$ch = curl_init("http://localhost:6688/api/geetest/icon/click/check");
curl_setopt($ch, CURLOPT_POST, true);
curl_setopt($ch, CURLOPT_HTTPHEADER, [
    "Content-Type: application/json",
    "Authorization: Bearer $token"
]);
curl_setopt($ch, CURLOPT_POSTFIELDS, json_encode([
    "img_base64" => $img
]));
curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
$resp = curl_exec($ch);
curl_close($ch);
echo $resp;`},ne=i(()=>te[Z.value]),re=i(()=>J.value?JSON.stringify(J.value,null,2):``);function ie(){let e=H.value;if(!e)return;let t=e.getContext(`2d`);t&&t.clearRect(0,0,e.width,e.height)}function ae(e,t){let n=H.value;if(!n)return;let r=n.getContext(`2d`);if(r&&(r.clearRect(0,0,n.width,n.height),e.forEach(e=>{let[t,n,i,a]=e.box,o=i-t,s=a-n;r.strokeStyle=`#22c55e`,r.lineWidth=1.5,r.setLineDash([4,4]),r.strokeRect(t,n,o,s),r.setLineDash([]),r.fillStyle=`rgba(34, 197, 94, 0.08)`,r.fillRect(t,n,o,s)}),t.forEach((e,t)=>{let[n,i,a,o]=e,s=a-n,c=o-i,l=n+s/2,u=i+c/2;r.strokeStyle=`#ef4444`,r.lineWidth=2.5,r.setLineDash([6,3]),r.strokeRect(n,i,s,c),r.setLineDash([]),r.fillStyle=`rgba(239, 68, 68, 0.12)`,r.fillRect(n,i,s,c),r.strokeStyle=`#ef4444`,r.lineWidth=2.5,r.beginPath(),r.arc(l,u,14,0,2*Math.PI),r.stroke(),r.fillStyle=`rgba(255, 255, 255, 0.85)`,r.fill(),r.fillStyle=`#ef4444`,r.font=`bold 14px sans-serif`,r.textAlign=`center`,r.textBaseline=`middle`,r.fillText(String(t+1),l,u)}),e.length>0||t.length>0)){let e=n.height-50;r.fillStyle=`rgba(0, 0, 0, 0.55)`,r.fillRect(10,e,170,42),r.fillStyle=`#22c55e`,r.fillRect(18,e+9,12,12),r.fillStyle=`#ef4444`,r.fillRect(18,e+25,12,12),r.fillStyle=`#fff`,r.font=`11px sans-serif`,r.textAlign=`left`,r.textBaseline=`middle`,r.fillText(`检测到的图标`,36,e+15),r.fillText(`匹配目标 `+t.length,36,e+31)}}async function oe(){if(!W.value){alert(`请先上传极验点选验证码图片`);return}X.value=!0,Y.value=!1;try{let e=await fetch(`/api/geetest/icon/click/check`,{method:`POST`,headers:{"Content-Type":`application/json`,Authorization:`Bearer ${D()}`},body:JSON.stringify({img_base64:W.value})});if(!e.ok){Y.value=!0;let t=await e.json().catch(()=>({detail:`请求失败`}));J.value=t;return}J.value=await e.json();let t=J.value?.detected_icons,n=J.value?.result;t&&Array.isArray(t)&&n&&Array.isArray(n)&&(await g(),ae(t,n))}catch(e){Y.value=!0,J.value={error:e.message||`网络错误`}}finally{X.value=!1}}function Q(e){if(e===`sim_ref`)v.value?.click();else if(e.startsWith(`sim_cmp_`)){let t=parseInt(e.split(`_`)[2]);S.value[t]?.click()}else e===`clickImg`&&V.value?.click()}function $(e,t){let n=t.target.files?.[0];n&&ce(n,e)}function se(e,t){let n=t.dataTransfer?.files?.[0];n&&ce(n,e)}function ce(e,t){let n=new FileReader;n.onload=()=>{let r=n.result,i=r.split(`,`)[1],a=new Image;a.onload=()=>{if(t===`sim_ref`)y.previewUrl=r,y.base64=i,y.width=a.naturalWidth,y.height=a.naturalHeight,y.fileSize=f(e.size);else if(t.startsWith(`sim_cmp_`)){let n=parseInt(t.split(`_`)[2]);T[n].previewUrl=r,T[n].base64=i,T[n].width=a.naturalWidth,T[n].height=a.naturalHeight,T[n].fileSize=f(e.size)}else t===`clickImg`&&(ie(),U.value=r,W.value=i,G.value=a.naturalWidth,K.value=a.naturalHeight,ee.value=f(e.size))},a.src=r},n.readAsDataURL(e)}async function le(e){let t=e===`similarity`?P.value:ne.value;try{await navigator.clipboard.writeText(t),e===`similarity`?(O.value=!0,setTimeout(()=>O.value=!1,2e3)):(q.value=!0,setTimeout(()=>q.value=!1,2e3))}catch{let n=document.createElement(`textarea`);n.value=t,document.body.appendChild(n),n.select(),document.execCommand(`copy`),document.body.removeChild(n),e===`similarity`?(O.value=!0,setTimeout(()=>O.value=!1,2e3)):(q.value=!0,setTimeout(()=>q.value=!1,2e3))}}return(n,i)=>(m(),o(`div`,tt,[l(`div`,nt,[l(`button`,{class:t([`feature-tab`,{active:a.value===`similarity`}]),onClick:i[0]||=e=>a.value=`similarity`},` 🖼️ 相似度检测 `,2),l(`button`,{class:t([`feature-tab`,{active:a.value===`click`}]),onClick:i[1]||=e=>a.value=`click`},` 🖱️ 点选检测 `,2)]),C(l(`div`,rt,[l(`div`,it,[l(`div`,at,[i[13]||=l(`h3`,{class:`card-title`},`极验图片相似度检测`,-1),l(`button`,{class:`btn-test`,disabled:j.value||!E.value,onClick:B},_(j.value?`测试中...`:`开始测试`),9,ot)]),l(`div`,st,[l(`div`,ct,[l(`div`,lt,[i[16]||=l(`div`,{class:`ref-label`},`🏷️ 基准图`,-1),l(`div`,{class:`upload-zone`,onClick:i[3]||=e=>Q(`sim_ref`),onDragover:i[4]||=e(()=>{},[`prevent`]),onDrop:i[5]||=e(e=>se(`sim_ref`,e),[`prevent`])},[l(`input`,{ref_key:`refInput`,ref:v,type:`file`,accept:`image/png,image/jpeg,image/webp`,style:{display:`none`},onChange:i[2]||=e=>$(`sim_ref`,e)},null,544),y.previewUrl?(m(),o(u,{key:1},[l(`img`,{src:y.previewUrl,width:y.width,height:y.height,class:`preview-img`},null,8,ut),l(`p`,dt,_(y.width)+` × `+_(y.height)+` px | `+_(y.fileSize),1)],64)):(m(),o(u,{key:0},[i[14]||=l(`div`,{class:`upload-icon`},`📤`,-1),i[15]||=l(`p`,{class:`upload-text`},`点击或拖拽上传`,-1)],64))],32)]),l(`div`,ft,[i[19]||=l(`div`,{class:`compare-label`},`📑 对比图（最多 4 张）`,-1),l(`div`,pt,[(m(!0),o(u,null,x(T,(n,a)=>(m(),o(`div`,{key:a,class:t([`upload-zone`,{"best-match-zone":L.value>=0&&a===L.value&&I.value.length>0}]),onClick:e=>Q(`sim_cmp_`+a),onDragover:i[6]||=e(()=>{},[`prevent`]),onDrop:e(e=>se(`sim_cmp_`+a,e),[`prevent`])},[L.value>=0&&a===L.value&&I.value.length>0?(m(),o(`span`,ht,`⭐ 最佳匹配`)):r(``,!0),l(`input`,{ref_for:!0,ref:e=>{e&&(S.value[a]=e)},type:`file`,accept:`image/png,image/jpeg,image/webp`,style:{display:`none`},onChange:e=>$(`sim_cmp_`+a,e)},null,40,gt),n.previewUrl?(m(),o(u,{key:2},[l(`img`,{src:n.previewUrl,width:n.width,height:n.height,class:`preview-img`},null,8,vt),l(`p`,yt,_(n.width)+` × `+_(n.height)+` px | `+_(n.fileSize),1)],64)):(m(),o(u,{key:1},[i[17]||=l(`div`,{class:`upload-icon`},`📤`,-1),l(`p`,_t,`图片 `+_(a+1),1),i[18]||=l(`p`,{class:`upload-hint`},`点击或拖拽上传`,-1)],64))],42,mt))),128))])])]),i[25]||=b(`<div class="api-info" data-v-e3f1121a><div class="api-row" data-v-e3f1121a><span class="api-label" data-v-e3f1121a>接口名称</span><span class="api-value" data-v-e3f1121a>极验图片相似度检测</span></div><div class="api-row" data-v-e3f1121a><span class="api-label" data-v-e3f1121a>接口地址</span><code class="api-value code" data-v-e3f1121a>/api/geetest/icon/click/similarity</code></div><div class="api-row" data-v-e3f1121a><span class="api-label" data-v-e3f1121a>请求字段</span><code class="api-value code" data-v-e3f1121a>reference_img, compare_imgs</code></div></div>`,1),k.value?(m(),o(`div`,bt,[l(`div`,xt,[i[20]||=l(`span`,{class:`results-title`},`匹配结果`,-1),l(`span`,{class:t([`response-status`,{error:A.value}])},_(A.value?`请求失败`:`200 OK`),3)]),I.value.length>0?(m(),o(`div`,St,[(m(!0),o(u,null,x(I.value,(e,n)=>(m(),o(`div`,{key:n,class:t([`result-card`,{"best-match":n===L.value}])},[l(`div`,Ct,[l(`span`,wt,`对比图 `+_(n+1),1),n===L.value?(m(),o(`span`,Tt,`⭐ 最佳匹配`)):r(``,!0)]),l(`div`,Et,[l(`div`,Dt,[i[21]||=l(`span`,{class:`result-key`},`相似度`,-1),l(`span`,{class:t([`result-value similarity-value`,R(e.similarity)])},_((e.similarity*100).toFixed(2))+`% `,3),l(`div`,Ot,[l(`div`,{class:t([`similarity-bar-fill`,R(e.similarity)]),style:s({width:e.similarity*100+`%`})},null,6)])]),l(`div`,kt,[i[22]||=l(`span`,{class:`result-key`},`匹配结果`,-1),l(`span`,{class:t([`result-value`,e.is_match?`match-yes`:`match-no`])},_(e.is_match?`✓ 匹配`:`✗ 不匹配`),3)]),l(`div`,At,[i[23]||=l(`span`,{class:`result-key`},`置信度`,-1),l(`span`,{class:t([`result-value confidence-badge`,`confidence-`+e.confidence])},_(z(e.confidence)),3)])])],2))),128))])):r(``,!0),l(`details`,jt,[i[24]||=l(`summary`,{class:`raw-json-summary`},`查看原始 JSON`,-1),l(`pre`,Mt,[l(`code`,null,_(F.value),1)])])])):r(``,!0)])]),l(`div`,Nt,[l(`div`,Pt,[i[26]||=l(`h3`,{class:`card-title`},`调用代码`,-1),l(`button`,{class:`btn-copy`,onClick:i[7]||=e=>le(`similarity`)},_(O.value?`已复制`:`复制代码`),1)]),l(`div`,Ft,[l(`div`,It,[(m(),o(u,null,x(d,e=>l(`button`,{key:e.key,class:t([`tab`,{active:M.value===e.key}]),onClick:t=>M.value=e.key},_(e.label),11,Lt)),64))]),l(`div`,Rt,[l(`pre`,null,[l(`code`,null,_(P.value),1)])])])])],512),[[w,a.value===`similarity`]]),C(l(`div`,zt,[l(`div`,Bt,[l(`div`,Vt,[i[27]||=l(`h3`,{class:`card-title`},`极验图片点选检测`,-1),l(`button`,{class:`btn-test`,disabled:X.value||!W.value,onClick:oe},_(X.value?`测试中...`:`开始测试`),9,Ht)]),l(`div`,Ut,[l(`div`,{class:`upload-zone`,onClick:i[9]||=e=>Q(`clickImg`),onDragover:i[10]||=e(()=>{},[`prevent`]),onDrop:i[11]||=e(e=>se(`clickImg`,e),[`prevent`])},[l(`input`,{ref_key:`fileInputClick`,ref:V,type:`file`,accept:`image/png,image/jpeg,image/webp`,style:{display:`none`},onChange:i[8]||=e=>$(`clickImg`,e)},null,544),U.value?(m(),o(u,{key:1},[l(`div`,{class:`click-img-wrapper`,style:s({width:G.value+`px`,height:K.value+`px`})},[l(`img`,{src:U.value,width:G.value,height:K.value,class:`preview-img`},null,8,Wt),l(`canvas`,{ref_key:`clickResultCanvas`,ref:H,width:G.value,height:K.value,class:`result-canvas`},null,8,Gt)],4),l(`p`,Kt,_(G.value)+` × `+_(K.value)+` px | `+_(ee.value),1)],64)):(m(),o(u,{key:0},[i[28]||=l(`div`,{class:`upload-icon`},`📤`,-1),i[29]||=l(`p`,{class:`upload-text`},`极验点选验证码图片`,-1),i[30]||=l(`p`,{class:`upload-hint`},`PNG、JPG、WebP`,-1)],64))],32),i[32]||=b(`<div class="api-info" data-v-e3f1121a><div class="api-row" data-v-e3f1121a><span class="api-label" data-v-e3f1121a>接口名称</span><span class="api-value" data-v-e3f1121a>极验图片点选检测</span></div><div class="api-row" data-v-e3f1121a><span class="api-label" data-v-e3f1121a>接口地址</span><code class="api-value code" data-v-e3f1121a>/api/geetest/icon/click/check</code></div><div class="api-row" data-v-e3f1121a><span class="api-label" data-v-e3f1121a>请求字段</span><code class="api-value code" data-v-e3f1121a>img_base64</code></div></div>`,1),J.value?(m(),o(`div`,qt,[l(`div`,Jt,[i[31]||=l(`span`,{class:`response-title`},`返回结果`,-1),l(`span`,{class:t([`response-status`,{error:Y.value}])},_(Y.value?`请求失败`:`200 OK`),3)]),l(`pre`,Yt,[l(`code`,null,_(re.value),1)])])):r(``,!0)])]),l(`div`,Xt,[l(`div`,Zt,[i[33]||=l(`h3`,{class:`card-title`},`调用代码`,-1),l(`button`,{class:`btn-copy`,onClick:i[12]||=e=>le(`click`)},_(q.value?`已复制`:`复制代码`),1)]),l(`div`,Qt,[l(`div`,$t,[(m(),o(u,null,x(d,e=>l(`button`,{key:e.key,class:t([`tab`,{active:Z.value===e.key}]),onClick:t=>Z.value=e.key},_(e.label),11,en)),64))]),l(`div`,tn,[l(`pre`,null,[l(`code`,null,_(ne.value),1)])])])])],512),[[w,a.value===`click`]])]))}}),[[`__scopeId`,`data-v-e3f1121a`]])},{key:`ocr`,label:`OCR 识别`,icon:`🔤`,component:Y},{key:`calc`,label:`计算识别`,icon:`🔢`,component:Ne},{key:`image-similarity`,label:`图片相似度`,icon:`🖼️`,component:et}]}],an={class:`admin-layout`},on={class:`admin-sidebar`},sn={class:`sidebar-nav`},cn={key:0,class:`nav-group`},ln=[`onClick`],un={class:`nav-icon`},dn={class:`nav-text`},fn={class:`nav-children`},pn=[`onClick`],mn={class:`nav-icon`},hn={class:`nav-text`},gn=[`onClick`],_n={class:`nav-icon`},vn={class:`nav-text`},yn={class:`admin-main`},bn={class:`admin-header`},xn={class:`header-title`},Sn={class:`header-actions`},Cn={class:`user-info`},wn={class:`user-role`},Tn={class:`user-balance`},En={class:`admin-content`},Dn=v(f({__name:`AdminLayout`,setup(e){let r=c(`geetest-slider`),s=c(``),f=c(null);y(()=>{f.value=T(),p()});function p(){let e=r.value;for(let t of rn)if(t.children?.some(t=>t.key===e)){s.value=t.key;return}}function h(e){s.value=s.value===e?``:e}function g(e){for(let t of rn){if(t.key===e)return t;if(t.children){let n=t.children.find(t=>t.key===e);if(n)return n}}}let v=i(()=>g(r.value)?.component),b=i(()=>g(r.value)?.label);function D(){O(),E(),window.location.href=`/login`}return(e,i)=>(m(),o(`div`,an,[l(`aside`,on,[i[1]||=l(`div`,{class:`sidebar-header`},[l(`a`,{href:`/`,class:`sidebar-logo`},`⚡ AntiCAP`)],-1),l(`nav`,sn,[(m(!0),o(u,null,x(n(rn),e=>(m(),o(u,{key:e.key},[e.children?(m(),o(`div`,cn,[l(`div`,{class:t([`nav-item nav-parent`,{expanded:s.value===e.key}]),onClick:t=>h(e.key)},[l(`span`,un,_(e.icon),1),l(`span`,dn,_(e.label),1),i[0]||=l(`span`,{class:`nav-arrow`},`▶`,-1)],10,ln),C(l(`div`,fn,[(m(!0),o(u,null,x(e.children,e=>(m(),o(`a`,{key:e.key,class:t([`nav-item nav-child`,{active:r.value===e.key}]),onClick:t=>r.value=e.key},[l(`span`,mn,_(e.icon),1),l(`span`,hn,_(e.label),1)],10,pn))),128))],512),[[w,s.value===e.key]])])):(m(),o(`a`,{key:1,class:t([`nav-item`,{active:r.value===e.key}]),onClick:t=>r.value=e.key},[l(`span`,_n,_(e.icon),1),l(`span`,vn,_(e.label),1)],10,gn))],64))),128))])]),l(`main`,yn,[l(`header`,bn,[l(`h2`,xn,_(b.value),1),l(`div`,Sn,[l(`span`,Cn,[a(` 👤 `+_(f.value?.username)+` `,1),l(`span`,wn,`(`+_(f.value?.role)+`)`,1)]),l(`span`,Tn,`💰 `+_(f.value?.balance?.toLocaleString()),1),l(`button`,{class:`logout-btn`,onClick:D},`退出`)])]),l(`div`,En,[(m(),d(S(v.value),{activeKey:r.value},null,8,[`activeKey`]))])])]))}}),[[`__scopeId`,`data-v-b92e4785`]]),On=JSON.parse(`{"title":"","description":"","frontmatter":{"layout":"page","sidebar":false,"navbar":false},"headers":[],"relativePath":"admin.md","filePath":"admin.md"}`),kn=Object.assign({name:`admin.md`},{setup(e){return(e,t)=>(m(),o(`div`,null,[p(Dn)]))}});export{On as __pageData,kn as default};