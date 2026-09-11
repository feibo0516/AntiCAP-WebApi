import{B as e,Dt as t,Et as n,G as r,H as i,J as a,K as o,Ot as s,St as c,U as l,V as u,W as d,X as f,Y as p,at as m,et as h,kt as g,n as _,nt as v,q as y,st as b,ut as x,vt as S,z as C}from"./chunks/framework.BBlMhIbG.js";import{i as w,n as T,r as E,t as D}from"./chunks/api.U4rf-Ggi.js";var O={class:`model-test-panel`},k={class:`panel-header`},A={class:`panel-desc`},j=_(f({__name:`ModelTestPanel`,props:{activeKey:{}},setup(e){let t=e,n=i(()=>{for(let e of Q)if(e.children){let n=e.children.find(e=>e.key===t.activeKey);if(n)return n}}),r=i(()=>n.value?.label||`模型测试`),a=i(()=>({"geetest-slider":`上传 Geetest 缺口滑块验证码图片进行识别测试`,"geetest-icon-grid":`上传 Geetest 图标九宫格验证码图片进行识别测试`,ocr:`上传图片进行 OCR 文字识别测试`,calc:`上传图片进行计算公式识别测试`,"icon-detect":`上传图片进行图标检测测试`,"text-detect":`上传图片进行文字检测测试`,"icon-order":`上传图片进行图标顺序点选测试`,"text-order":`上传图片进行文字顺序点选测试`,"image-similarity":`上传两张图片进行相似度对比测试`,"single-rotate":`上传图片进行单图旋转角度检测测试`,"double-rotate":`上传两张图片进行双图旋转角度检测测试`})[n.value?.key||``]||`选择左侧菜单进行模型测试`);return(e,t)=>(m(),o(`div`,O,[l(`div`,k,[l(`h3`,null,g(r.value),1),l(`p`,A,g(a.value),1)]),t[0]||=l(`div`,{class:`panel-body`},[l(`div`,{class:`upload-area`},[l(`div`,{class:`upload-icon`},`📤`),l(`p`,null,`拖拽文件到此处，或点击上传`),l(`p`,{class:`upload-hint`},`支持 JPG、PNG、WEBP 格式`)])],-1)]))}}),[[`__scopeId`,`data-v-488343a7`]]),M={class:`ocr-panel`},N={class:`panel-grid`},P={class:`card`},F={class:`card-header`},I=[`disabled`],L={class:`card-body`},R=[`src`,`width`,`height`],z={class:`image-size`},B={key:0,class:`response-section`},V={class:`response-header`},H={class:`response-body`},U={class:`card`},W={class:`card-header`},ee={class:`card-body`},te={class:`tabs`},ne=[`onClick`],G={class:`code-block`},K=_(f({__name:`OCRPanel`,setup(n){let a=c(null),s=c(``),d=c(``),f=c(0),p=c(0),h=c(``),_=c(!1),v=c(null),x=c(!1),S=c(!1),C=c(`curl`),w=[{key:`curl`,label:`cURL`},{key:`python`,label:`Python`},{key:`javascript`,label:`JavaScript`},{key:`php`,label:`PHP`}],T={curl:`curl -X POST "http://localhost:6688/api/ocr" \\
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
echo $resp;`},D=i(()=>T[C.value]),O=i(()=>v.value?JSON.stringify(v.value,null,2):``);function k(){a.value?.click()}function A(e){let t=e.target.files?.[0];t&&K(t)}function j(e){let t=e.dataTransfer?.files?.[0];t&&K(t)}function K(e){h.value=q(e.size);let t=new FileReader;t.onload=()=>{let e=t.result;s.value=e,d.value=e.split(`,`)[1];let n=new Image;n.onload=()=>{f.value=n.naturalWidth,p.value=n.naturalHeight},n.src=e},t.readAsDataURL(e)}function q(e){return e<1024?e+` B`:e<1048576?(e/1024).toFixed(1)+` KB`:(e/1048576).toFixed(1)+` MB`}async function J(){if(!d.value){alert(`请先上传验证码图片`);return}S.value=!0,x.value=!1;try{let e=await fetch(`/api/ocr`,{method:`POST`,headers:{"Content-Type":`application/json`,Authorization:`Bearer ${E()}`},body:JSON.stringify({img_base64:d.value})});if(!e.ok){x.value=!0;let t=await e.json().catch(()=>({detail:`请求失败`}));v.value=t;return}v.value=await e.json()}catch(e){x.value=!0,v.value={error:e.message||`网络错误`}}finally{S.value=!1}}async function Y(){try{await navigator.clipboard.writeText(D.value),_.value=!0,setTimeout(()=>_.value=!1,2e3)}catch{let e=document.createElement(`textarea`);e.value=D.value,document.body.appendChild(e),e.select(),document.execCommand(`copy`),document.body.removeChild(e),_.value=!0,setTimeout(()=>_.value=!1,2e3)}}return(n,i)=>(m(),o(`div`,M,[l(`div`,N,[l(`div`,P,[l(`div`,F,[i[1]||=l(`h3`,{class:`card-title`},`OCR 识别`,-1),l(`button`,{class:`btn-test`,disabled:S.value,onClick:J},g(S.value?`测试中...`:`开始测试`),9,I)]),l(`div`,L,[l(`div`,{class:`upload-zone`,onClick:k,onDragover:i[0]||=e(()=>{},[`prevent`]),onDrop:e(j,[`prevent`])},[l(`input`,{ref_key:`fileInput`,ref:a,type:`file`,accept:`image/png,image/jpeg,image/webp`,style:{display:`none`},onChange:A},null,544),s.value?(m(),o(u,{key:1},[l(`img`,{src:s.value,width:f.value,height:p.value,class:`preview-img`},null,8,R),l(`p`,z,g(f.value)+` × `+g(p.value)+` px | `+g(h.value),1)],64)):(m(),o(u,{key:0},[i[2]||=l(`div`,{class:`upload-icon`},`📤`,-1),i[3]||=l(`p`,{class:`upload-text`},`验证码图片`,-1),i[4]||=l(`p`,{class:`upload-hint`},`PNG、JPG、WebP`,-1)],64))],32),i[6]||=y("",1),v.value?(m(),o(`div`,B,[l(`div`,V,[i[5]||=l(`span`,{class:`response-title`},`返回结果`,-1),l(`span`,{class:t([`response-status`,{error:x.value}])},g(x.value?`请求失败`:`200 OK`),3)]),l(`pre`,H,[l(`code`,null,g(O.value),1)])])):r(``,!0)])]),l(`div`,U,[l(`div`,W,[i[7]||=l(`h3`,{class:`card-title`},`调用代码`,-1),l(`button`,{class:`btn-copy`,onClick:Y},g(_.value?`已复制`:`复制代码`),1)]),l(`div`,ee,[l(`div`,te,[(m(),o(u,null,b(w,e=>l(`button`,{key:e.key,class:t([`tab`,{active:C.value===e.key}]),onClick:t=>C.value=e.key},g(e.label),11,ne)),64))]),l(`div`,G,[l(`pre`,null,[l(`code`,null,g(D.value),1)])])])])])]))}}),[[`__scopeId`,`data-v-1f8f9e85`]]),q={class:`geetest-slider-panel`},J={class:`panel-grid`},Y={class:`card`},X={class:`card-header`},Z=[`disabled`],re={class:`card-body`},ie=[`src`,`width`,`height`],ae=[`width`,`height`],oe={class:`image-size`},se={key:0,class:`response-section`},ce={class:`response-header`},le={class:`response-body`},ue={class:`card`},de={class:`card-header`},fe={class:`card-body`},pe={class:`tabs`},me=[`onClick`],he={class:`code-block`},ge=_(f({__name:`GeetestSliderPanel`,setup(n){let a=c(null),d=c(null),f=c(``),p=c(``),_=c(0),v=c(0),x=c(``),S=c(!1),C=c(null),w=c(!1),T=c(!1),D=c(`curl`),O=[{key:`curl`,label:`cURL`},{key:`python`,label:`Python`},{key:`javascript`,label:`JavaScript`},{key:`php`,label:`PHP`}],k={curl:`curl -X POST "http://localhost:6688/api/geetest-slider" \\
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
echo $resp;`},A=i(()=>k[D.value]),j=i(()=>C.value?JSON.stringify(C.value,null,2):``);function M(){a.value?.click()}function N(e){let t=e.target.files?.[0];t&&F(t)}function P(e){let t=e.dataTransfer?.files?.[0];t&&F(t)}function F(e){L(),C.value=null,w.value=!1,x.value=I(e.size);let t=new FileReader;t.onload=()=>{let e=t.result;f.value=e,p.value=e.split(`,`)[1];let n=new Image;n.onload=()=>{_.value=n.naturalWidth,v.value=n.naturalHeight},n.src=e},t.readAsDataURL(e)}function I(e){return e<1024?e+` B`:e<1048576?(e/1024).toFixed(1)+` KB`:(e/1048576).toFixed(1)+` MB`}function L(){let e=d.value;if(!e)return;let t=e.getContext(`2d`);t&&t.clearRect(0,0,e.width,e.height)}function R(e){let t=d.value;if(!t)return;let n=t.getContext(`2d`);if(!n)return;n.clearRect(0,0,t.width,t.height);let[r,i,a,o]=e,s=r,c=i,l=a-r,u=o-i;n.strokeStyle=`#ef4444`,n.lineWidth=2,n.strokeRect(s,c,l,u),n.fillStyle=`rgba(239, 68, 68, 0.15)`,n.fillRect(s,c,l,u)}async function z(){if(!p.value){alert(`请先上传 Geetest 缺口滑块验证码图片`);return}T.value=!0,w.value=!1;try{let e=await fetch(`/api/geetest/slide`,{method:`POST`,headers:{"Content-Type":`application/json`,Authorization:`Bearer ${E()}`},body:JSON.stringify({img_base64:p.value})});if(!e.ok){w.value=!0;let t=await e.json().catch(()=>({detail:`请求失败`}));C.value=t;return}C.value=await e.json(),C.value?.result&&Array.isArray(C.value.result)&&C.value.result.length===4&&(await h(),R(C.value.result))}catch(e){w.value=!0,C.value={error:e.message||`网络错误`}}finally{T.value=!1}}async function B(){try{await navigator.clipboard.writeText(A.value),S.value=!0,setTimeout(()=>S.value=!1,2e3)}catch{let e=document.createElement(`textarea`);e.value=A.value,document.body.appendChild(e),e.select(),document.execCommand(`copy`),document.body.removeChild(e),S.value=!0,setTimeout(()=>S.value=!1,2e3)}}return(n,i)=>(m(),o(`div`,q,[l(`div`,J,[l(`div`,Y,[l(`div`,X,[i[1]||=l(`h3`,{class:`card-title`},`Geetest 缺口滑块识别`,-1),l(`button`,{class:`btn-test`,disabled:T.value,onClick:z},g(T.value?`测试中...`:`开始测试`),9,Z)]),l(`div`,re,[l(`div`,{class:`upload-zone`,onClick:M,onDragover:i[0]||=e(()=>{},[`prevent`]),onDrop:e(P,[`prevent`])},[l(`input`,{ref_key:`fileInput`,ref:a,type:`file`,accept:`image/png,image/jpeg,image/webp`,style:{display:`none`},onChange:N},null,544),f.value?(m(),o(u,{key:1},[l(`div`,{class:`img-wrapper`,style:s({width:_.value+`px`,height:v.value+`px`})},[l(`img`,{src:f.value,width:_.value,height:v.value,class:`preview-img`},null,8,ie),l(`canvas`,{ref_key:`resultCanvas`,ref:d,width:_.value,height:v.value,class:`result-canvas`},null,8,ae)],4),l(`p`,oe,g(_.value)+` × `+g(v.value)+` px | `+g(x.value),1)],64)):(m(),o(u,{key:0},[i[2]||=l(`div`,{class:`upload-icon`},`📤`,-1),i[3]||=l(`p`,{class:`upload-text`},`Geetest 缺口滑块验证码图片`,-1),i[4]||=l(`p`,{class:`upload-hint`},`PNG、JPG、WebP`,-1)],64))],32),i[6]||=y("",1),C.value?(m(),o(`div`,se,[l(`div`,ce,[i[5]||=l(`span`,{class:`response-title`},`返回结果`,-1),l(`span`,{class:t([`response-status`,{error:w.value}])},g(w.value?`请求失败`:`200 OK`),3)]),l(`pre`,le,[l(`code`,null,g(j.value),1)])])):r(``,!0)])]),l(`div`,ue,[l(`div`,de,[i[7]||=l(`h3`,{class:`card-title`},`调用代码`,-1),l(`button`,{class:`btn-copy`,onClick:B},g(S.value?`已复制`:`复制代码`),1)]),l(`div`,fe,[l(`div`,pe,[(m(),o(u,null,b(O,e=>l(`button`,{key:e.key,class:t([`tab`,{active:D.value===e.key}]),onClick:t=>D.value=e.key},g(e.label),11,me)),64))]),l(`div`,he,[l(`pre`,null,[l(`code`,null,g(A.value),1)])])])])])]))}}),[[`__scopeId`,`data-v-492da86e`]]),_e={class:`math-panel`},ve={class:`panel-grid`},ye={class:`card`},be={class:`card-header`},xe=[`disabled`],Se={class:`card-body`},Ce=[`src`,`width`,`height`],we={class:`image-size`},Te={key:0,class:`response-section`},Ee={class:`response-header`},De={class:`response-body`},Oe={class:`card`},ke={class:`card-header`},Ae={class:`card-body`},je={class:`tabs`},Me=[`onClick`],Ne={class:`code-block`},Pe=_(f({__name:`MathPanel`,setup(n){let a=c(null),s=c(``),d=c(``),f=c(0),p=c(0),h=c(``),_=c(!1),v=c(null),x=c(!1),S=c(!1),C=c(`curl`),w=[{key:`curl`,label:`cURL`},{key:`python`,label:`Python`},{key:`javascript`,label:`JavaScript`},{key:`php`,label:`PHP`}],T={curl:`curl -X POST "http://localhost:6688/api/math" \\
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
echo $resp;`},D=i(()=>T[C.value]),O=i(()=>v.value?JSON.stringify(v.value,null,2):``);function k(){a.value?.click()}function A(e){let t=e.target.files?.[0];t&&M(t)}function j(e){let t=e.dataTransfer?.files?.[0];t&&M(t)}function M(e){v.value=null,x.value=!1,h.value=N(e.size);let t=new FileReader;t.onload=()=>{let e=t.result;s.value=e,d.value=e.split(`,`)[1];let n=new Image;n.onload=()=>{f.value=n.naturalWidth,p.value=n.naturalHeight},n.src=e},t.readAsDataURL(e)}function N(e){return e<1024?e+` B`:e<1048576?(e/1024).toFixed(1)+` KB`:(e/1048576).toFixed(1)+` MB`}async function P(){if(!d.value){alert(`请先上传算式验证码图片`);return}S.value=!0,x.value=!1;try{let e=await fetch(`/api/math`,{method:`POST`,headers:{"Content-Type":`application/json`,Authorization:`Bearer ${E()}`},body:JSON.stringify({img_base64:d.value})});if(!e.ok){x.value=!0;let t=await e.json().catch(()=>({detail:`请求失败`}));v.value=t;return}v.value=await e.json()}catch(e){x.value=!0,v.value={error:e.message||`网络错误`}}finally{S.value=!1}}async function F(){try{await navigator.clipboard.writeText(D.value),_.value=!0,setTimeout(()=>_.value=!1,2e3)}catch{let e=document.createElement(`textarea`);e.value=D.value,document.body.appendChild(e),e.select(),document.execCommand(`copy`),document.body.removeChild(e),_.value=!0,setTimeout(()=>_.value=!1,2e3)}}return(n,i)=>(m(),o(`div`,_e,[l(`div`,ve,[l(`div`,ye,[l(`div`,be,[i[1]||=l(`h3`,{class:`card-title`},`计算识别`,-1),l(`button`,{class:`btn-test`,disabled:S.value,onClick:P},g(S.value?`测试中...`:`开始测试`),9,xe)]),l(`div`,Se,[l(`div`,{class:`upload-zone`,onClick:k,onDragover:i[0]||=e(()=>{},[`prevent`]),onDrop:e(j,[`prevent`])},[l(`input`,{ref_key:`fileInput`,ref:a,type:`file`,accept:`image/png,image/jpeg,image/webp`,style:{display:`none`},onChange:A},null,544),s.value?(m(),o(u,{key:1},[l(`img`,{src:s.value,width:f.value,height:p.value,class:`preview-img`},null,8,Ce),l(`p`,we,g(f.value)+` × `+g(p.value)+` px | `+g(h.value),1)],64)):(m(),o(u,{key:0},[i[2]||=l(`div`,{class:`upload-icon`},`📤`,-1),i[3]||=l(`p`,{class:`upload-text`},`算式验证码图片`,-1),i[4]||=l(`p`,{class:`upload-hint`},`PNG、JPG、WebP`,-1)],64))],32),i[6]||=y("",1),v.value?(m(),o(`div`,Te,[l(`div`,Ee,[i[5]||=l(`span`,{class:`response-title`},`返回结果`,-1),l(`span`,{class:t([`response-status`,{error:x.value}])},g(x.value?`请求失败`:`200 OK`),3)]),l(`pre`,De,[l(`code`,null,g(O.value),1)])])):r(``,!0)])]),l(`div`,Oe,[l(`div`,ke,[i[7]||=l(`h3`,{class:`card-title`},`调用代码`,-1),l(`button`,{class:`btn-copy`,onClick:F},g(_.value?`已复制`:`复制代码`),1)]),l(`div`,Ae,[l(`div`,je,[(m(),o(u,null,b(w,e=>l(`button`,{key:e.key,class:t([`tab`,{active:C.value===e.key}]),onClick:t=>C.value=e.key},g(e.label),11,Me)),64))]),l(`div`,Ne,[l(`pre`,null,[l(`code`,null,g(D.value),1)])])])])])]))}}),[[`__scopeId`,`data-v-1530343c`]]),Fe={class:`image-similarity-panel`},Ie={class:`panel-grid`},Le={class:`card`},Re={class:`card-header`},ze=[`disabled`],Be={class:`card-body`},Ve={class:`upload-row`},He=[`src`,`width`,`height`],Ue={class:`image-size`},We=[`src`,`width`,`height`],Ge={class:`image-size`},Ke={key:0,class:`response-section`},qe={class:`response-header`},Je={class:`response-body`},Ye={class:`card`},Xe={class:`card-header`},Ze={class:`card-body`},Qe={class:`tabs`},$e=[`onClick`],et={class:`code-block`},Q=[{key:`model-test`,label:`模型测试`,icon:`🧪`,component:j,children:[{key:`geetest-slider`,label:`Geetest缺口滑块`,icon:`🔲`,component:ge},{key:`geetest-icon-grid`,label:`Geetest图标九宫格`,icon:`🔳`,component:j},{key:`ocr`,label:`OCR 识别`,icon:`🔤`,component:K},{key:`calc`,label:`计算识别`,icon:`🔢`,component:Pe},{key:`image-similarity`,label:`图片相似度`,icon:`🖼️`,component:_(f({__name:`ImageSimilarityPanel`,setup(n){let a=c(null),s=c(null),d=c(``),f=c(``),p=c(``),h=c(``),_=c(0),v=c(0),x=c(0),S=c(0),C=c(``),w=c(``),T=c(!1),D=c(null),O=c(!1),k=c(!1),A=c(`curl`),j=[{key:`curl`,label:`cURL`},{key:`python`,label:`Python`},{key:`javascript`,label:`JavaScript`},{key:`php`,label:`PHP`}],M={curl:`curl -X POST "http://localhost:6688/api/compare/similarity" \\
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
echo $resp;`},N=i(()=>M[A.value]),P=i(()=>D.value?JSON.stringify(D.value,null,2):``);function F(){a.value?.click()}function I(){s.value?.click()}function L(e){let t=e.target.files?.[0];t&&V(t,1)}function R(e){let t=e.target.files?.[0];t&&V(t,2)}function z(e){let t=e.dataTransfer?.files?.[0];t&&V(t,1)}function B(e){let t=e.dataTransfer?.files?.[0];t&&V(t,2)}function V(e,t){D.value=null,O.value=!1;let n=new FileReader;n.onload=()=>{let r=n.result,i=r.split(`,`)[1],a=new Image;a.onload=()=>{t===1?(d.value=r,p.value=i,_.value=a.naturalWidth,v.value=a.naturalHeight,C.value=H(e.size)):(f.value=r,h.value=i,x.value=a.naturalWidth,S.value=a.naturalHeight,w.value=H(e.size))},a.src=r},n.readAsDataURL(e)}function H(e){return e<1024?e+` B`:e<1048576?(e/1024).toFixed(1)+` KB`:(e/1048576).toFixed(1)+` MB`}async function U(){if(!p.value||!h.value){alert(`请上传两张图片`);return}k.value=!0,O.value=!1;try{let e=await fetch(`/api/compare/similarity`,{method:`POST`,headers:{"Content-Type":`application/json`,Authorization:`Bearer ${E()}`},body:JSON.stringify({img1_base64:p.value,img2_base64:h.value})});if(!e.ok){O.value=!0;let t=await e.json().catch(()=>({detail:`请求失败`}));D.value=t;return}D.value=await e.json()}catch(e){O.value=!0,D.value={error:e.message||`网络错误`}}finally{k.value=!1}}async function W(){try{await navigator.clipboard.writeText(N.value),T.value=!0,setTimeout(()=>T.value=!1,2e3)}catch{let e=document.createElement(`textarea`);e.value=N.value,document.body.appendChild(e),e.select(),document.execCommand(`copy`),document.body.removeChild(e),T.value=!0,setTimeout(()=>T.value=!1,2e3)}}return(n,i)=>(m(),o(`div`,Fe,[l(`div`,Ie,[l(`div`,Le,[l(`div`,Re,[i[2]||=l(`h3`,{class:`card-title`},`图片相似度`,-1),l(`button`,{class:`btn-test`,disabled:k.value||!p.value||!h.value,onClick:U},g(k.value?`测试中...`:`开始测试`),9,ze)]),l(`div`,Be,[l(`div`,Ve,[l(`div`,{class:`upload-zone`,onClick:F,onDragover:i[0]||=e(()=>{},[`prevent`]),onDrop:e(z,[`prevent`])},[l(`input`,{ref_key:`fileInput1`,ref:a,type:`file`,accept:`image/png,image/jpeg,image/webp`,style:{display:`none`},onChange:L},null,544),d.value?(m(),o(u,{key:1},[l(`img`,{src:d.value,width:_.value,height:v.value,class:`preview-img`},null,8,He),l(`p`,Ue,g(_.value)+` × `+g(v.value)+` px | `+g(C.value),1)],64)):(m(),o(u,{key:0},[i[3]||=l(`div`,{class:`upload-icon`},`📤`,-1),i[4]||=l(`p`,{class:`upload-text`},`图片 1`,-1),i[5]||=l(`p`,{class:`upload-hint`},`点击或拖拽上传`,-1)],64))],32),l(`div`,{class:`upload-zone`,onClick:I,onDragover:i[1]||=e(()=>{},[`prevent`]),onDrop:e(B,[`prevent`])},[l(`input`,{ref_key:`fileInput2`,ref:s,type:`file`,accept:`image/png,image/jpeg,image/webp`,style:{display:`none`},onChange:R},null,544),f.value?(m(),o(u,{key:1},[l(`img`,{src:f.value,width:x.value,height:S.value,class:`preview-img`},null,8,We),l(`p`,Ge,g(x.value)+` × `+g(S.value)+` px | `+g(w.value),1)],64)):(m(),o(u,{key:0},[i[6]||=l(`div`,{class:`upload-icon`},`📤`,-1),i[7]||=l(`p`,{class:`upload-text`},`图片 2`,-1),i[8]||=l(`p`,{class:`upload-hint`},`点击或拖拽上传`,-1)],64))],32)]),i[10]||=y("",1),D.value?(m(),o(`div`,Ke,[l(`div`,qe,[i[9]||=l(`span`,{class:`response-title`},`返回结果`,-1),l(`span`,{class:t([`response-status`,{error:O.value}])},g(O.value?`请求失败`:`200 OK`),3)]),l(`pre`,Je,[l(`code`,null,g(P.value),1)])])):r(``,!0)])]),l(`div`,Ye,[l(`div`,Xe,[i[11]||=l(`h3`,{class:`card-title`},`调用代码`,-1),l(`button`,{class:`btn-copy`,onClick:W},g(T.value?`已复制`:`复制代码`),1)]),l(`div`,Ze,[l(`div`,Qe,[(m(),o(u,null,b(j,e=>l(`button`,{key:e.key,class:t([`tab`,{active:A.value===e.key}]),onClick:t=>A.value=e.key},g(e.label),11,$e)),64))]),l(`div`,et,[l(`pre`,null,[l(`code`,null,g(N.value),1)])])])])])]))}}),[[`__scopeId`,`data-v-5b770d71`]])}]}],tt={class:`admin-layout`},nt={class:`admin-sidebar`},rt={class:`sidebar-nav`},it={key:0,class:`nav-group`},at=[`onClick`],ot={class:`nav-icon`},st={class:`nav-text`},ct={class:`nav-children`},lt=[`onClick`],ut={class:`nav-icon`},dt={class:`nav-text`},ft=[`onClick`],$={class:`nav-icon`},pt={class:`nav-text`},mt={class:`admin-main`},ht={class:`admin-header`},gt={class:`header-title`},_t={class:`header-actions`},vt={class:`user-info`},yt={class:`user-role`},bt={class:`user-balance`},xt={class:`admin-content`},St=_(f({__name:`AdminLayout`,setup(e){let r=c(`geetest-slider`),s=c(``),f=c(null);v(()=>{f.value=w(),p()});function p(){let e=r.value;for(let t of Q)if(t.children?.some(t=>t.key===e)){s.value=t.key;return}}function h(e){s.value=s.value===e?``:e}function _(e){for(let t of Q){if(t.key===e)return t;if(t.children){let n=t.children.find(t=>t.key===e);if(n)return n}}}let y=i(()=>_(r.value)?.component),E=i(()=>_(r.value)?.label);function O(){D(),T(),window.location.href=`/login`}return(e,i)=>(m(),o(`div`,tt,[l(`aside`,nt,[i[1]||=l(`div`,{class:`sidebar-header`},[l(`a`,{href:`/`,class:`sidebar-logo`},`⚡ AntiCAP`)],-1),l(`nav`,rt,[(m(!0),o(u,null,b(n(Q),e=>(m(),o(u,{key:e.key},[e.children?(m(),o(`div`,it,[l(`div`,{class:t([`nav-item nav-parent`,{expanded:s.value===e.key}]),onClick:t=>h(e.key)},[l(`span`,ot,g(e.icon),1),l(`span`,st,g(e.label),1),i[0]||=l(`span`,{class:`nav-arrow`},`▶`,-1)],10,at),S(l(`div`,ct,[(m(!0),o(u,null,b(e.children,e=>(m(),o(`a`,{key:e.key,class:t([`nav-item nav-child`,{active:r.value===e.key}]),onClick:t=>r.value=e.key},[l(`span`,ut,g(e.icon),1),l(`span`,dt,g(e.label),1)],10,lt))),128))],512),[[C,s.value===e.key]])])):(m(),o(`a`,{key:1,class:t([`nav-item`,{active:r.value===e.key}]),onClick:t=>r.value=e.key},[l(`span`,$,g(e.icon),1),l(`span`,pt,g(e.label),1)],10,ft))],64))),128))])]),l(`main`,mt,[l(`header`,ht,[l(`h2`,gt,g(E.value),1),l(`div`,_t,[l(`span`,vt,[a(` 👤 `+g(f.value?.username)+` `,1),l(`span`,yt,`(`+g(f.value?.role)+`)`,1)]),l(`span`,bt,`💰 `+g(f.value?.balance?.toLocaleString()),1),l(`button`,{class:`logout-btn`,onClick:O},`退出`)])]),l(`div`,xt,[(m(),d(x(y.value),{activeKey:r.value},null,8,[`activeKey`]))])])]))}}),[[`__scopeId`,`data-v-b92e4785`]]),Ct=JSON.parse(`{"title":"","description":"","frontmatter":{"layout":"page","sidebar":false,"navbar":false},"headers":[],"relativePath":"admin.md","filePath":"admin.md"}`),wt=Object.assign({name:`admin.md`},{setup(e){return(e,t)=>(m(),o(`div`,null,[p(St)]))}});export{Ct as __pageData,wt as default};