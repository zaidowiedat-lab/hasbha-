
const data=[
["loan","🏦","حاسبة القروض والأقساط","القسط الشهري وإجمالي المدفوع."],
["salary","💰","حاسبة الراتب والاقتطاعات","احسب صافي الراتب."],
["percent","📊","حاسبة النسبة والخصم والزيادة","النسب والخصومات والزيادات."],
["age","🎂","حاسبة العمر","احسب العمر."],
["currency","💱","محول العملات","تحويل العملات بسعر صرف يدوي."],
["electricity","⚡","حاسبة استهلاك الكهرباء","تقدير استهلاك الأجهزة."],
["mortgage","🏠","حاسبة التمويل والرهن","القسط والتكلفة التقريبية."],
["car","🚗","حاسبة تكلفة السيارة","تكلفة الوقود الشهرية."],
["options","🧮","مقارنة الأقساط","قارن إجمالي خيارات التقسيط."],
["units","🔄","تحويل الوحدات","تحويل الطول والمسافة والوزن."]
];
const cards=document.getElementById("cards"),search=document.getElementById("search");
function draw(q=""){cards.innerHTML=data.filter(x=>(x[2]+" "+x[3]).includes(q)).map(x=>`<a class="card" href="calculators/${x[0]}.html"><div class="icon">${x[1]}</div><h3>${x[2]}</h3><p>${x[3]}</p></a>`).join("")||"<p>لا توجد نتائج.</p>"}
if(cards){draw();search.addEventListener("input",e=>draw(e.target.value.trim()))}
