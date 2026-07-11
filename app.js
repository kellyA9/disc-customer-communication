const styleOrder = ["D", "I", "S", "C"];

const styles = {
  D: {
    name: "主導型",
    short: "直接、快速、重結果",
    quickTags: ["說話直接，問重點", "容易打斷，拉回重點", "在意成果與效率"],
    tone: "D",
    observe: {
      appearance: "氣場較強，姿態俐落，眼神與動作帶有主導感。有些人外表嚴肅或存在感較強，進入對話後容易自然掌握場面與節奏。",
      rhythm: "語速通常較快，音量與語氣較明確，表達直接。當對方說得太慢、鋪陳太久或沒有切中重點時，可能搶話、接話、打斷，或直接把話題拉回結論。",
      reactions: ["很快詢問重點、結果與效益", "不喜歡被帶著走，希望自己掌握方向與選擇權", "對沒有效率、沒有結論的說明容易失去耐性", "可能直接提出質疑，不太花時間修飾語氣", "面對過於強勢的推進，容易出現主導權的對抗"],
      cares: "成果、效率、主導權、實際效益與下一步。",
      oneLine: "他不是故意強勢，只是不想把時間花在沒有結果的對話上。",
      quote: "對D型而言，重點不是你說了多少，而是你多久說到重點。"
    }
  },
  I: {
    name: "影響型",
    short: "熱情、互動、重感受",
    quickTags: ["表情豐富，熱情外放", "說話快，常熱情回應", "在意感受與被認同"],
    tone: "I",
    observe: {
      appearance: "表情豐富，互動自然，肢體動作較多，容易主動拉近距離。對人與環境的反應通常較明顯。",
      rhythm: "語調有起伏，反應速度快，喜歡分享感受、故事與經驗，也容易順著氣氛延伸話題。",
      reactions: ["喜歡故事、案例與有畫面的說明", "容易被互動感、好感與信任感帶動", "希望自己的想法被聽見與回應", "當下反應可能很熱烈，但後續需要明確提醒", "對冷淡、制式或只談數字的說明較難產生感覺"],
      cares: "感受、互動、氣氛、期待感與是否被重視。",
      oneLine: "他不是只愛熱鬧，而是要先有感覺，才願意繼續往前。",
      quote: "對I型而言，先讓他有感，資訊才有機會留下來。"
    }
  },
  S: {
    name: "穩健型",
    short: "溫和、耐心、重關係",
    quickTags: ["溫和有禮，不輕易表態", "聲音小柔，語速穩定", "在意安心與關係"],
    tone: "S",
    observe: {
      appearance: "表情溫和，姿態較放鬆，互動有禮，通常不會強勢搶話。面對陌生情境時，可能先觀察再表態。",
      rhythm: "聲音通常較柔和，語速穩定，傾向先聽完再回應，不喜歡突然加快或帶有壓迫感的對話節奏。",
      reactions: ["做決定前會考慮家人及後續影響", "在意是否有人陪伴、協助及持續服務", "不一定直接拒絕，可能用沉默、延後或較委婉的方式表達顧慮", "需要時間消化，不喜歡被迫立即表態", "通常願意傾聽，但不代表已經同意"],
      cares: "安心、關係、穩定、家人與後續是否有人協助。",
      oneLine: "他不是不想決定，而是要先確認這個決定不會帶來不安。",
      quote: "S型的沉默不一定是認同，也可能是他還沒有安心。"
    }
  },
  C: {
    name: "分析型",
    short: "理性、完整、重依據",
    quickTags: ["儀態整齊，表情內斂", "字正腔圓，喜歡問細節", "在意依據與正確性"],
    tone: "C",
    observe: {
      appearance: "儀態整齊，表情較內斂，重視適當距離與專業感。通常會先觀察對方是否值得信任。",
      rhythm: "用字較精準，語氣平穩，會針對細節、條件、流程與依據持續確認。提出問題時可能較直接，但目的是釐清資訊。",
      reactions: ["容易詢問條款、費用、流程、差異與風險", "不會因為氣氛很好就立即做決定", "需要可以查證、比較及回看的資訊", "發現前後說法不一致時，會迅速提高警覺", "不喜歡模糊承諾或「相信我就對了」的說法"],
      cares: "正確性、依據、流程、風險、細節與資訊一致性。",
      oneLine: "他不是故意找問題，而是每一個問號，都在替信任找證據。",
      quote: "C型不是問題特別多，而是需要足夠的答案，才願意放心。"
    }
  }
};

const combos = {
  DD: [
    "他快你也快，重點與結果是共同語言。",
    "雙方都習慣快速下判斷，也都不喜歡被對方帶著走，對話容易變成主導權的較量。",
    "節奏一致，能很快進入核心問題，彼此也容易理解對方對效率的要求。",
    "太快替對方下結論，或搶著決定談話方向，容易讓他覺得主導權被拿走。",
    "簡明扼要地提供重點與選項，讓對方決定想先談哪個方向。",
    "我先說結論，再提供兩個方向，您決定想先談哪一個。"
  ],

  DI: [
    "你想快點談結果，他要先對你有好感。",
    "D型業務很快就進入重點，但I型客戶通常要先喜歡你的互動方式，才願意認真聽你說什麼。",
    "你能幫他把很多想法快速整理成明確方向，不讓話題一直發散。",
    "只談事情、效益與結果，沒有先回應他的話題，容易讓他覺得你太冷、太急。",
    "先讓他覺得跟你談話舒服、有共鳴，再把他的感覺整理成清楚方向。",
    "您剛才說的那個感覺很重要，我們就從那裡開始。"
  ],

  DS: [
    "你覺得他一直不決定；他卻覺得你一直在催。",
    "D型業務習慣快速往下談，但S型客戶還沒安心前，愈被追問愈容易退縮。",
    "你能幫他整理複雜資訊，讓問題不會一直停在原地。",
    "太快進入下一步，沒有留空間聽完他的顧慮，容易讓他感到壓力。",
    "一步一步陪他釐清內容，先處理不放心的地方，再談下一步。",
    "我們不用一次決定完，先看看您現在最不放心的是哪一部分。"
  ],

  DC: [
    "你覺得結論已經很清楚；他覺得證據還不夠完整。",
    "D型業務習慣先抓重點，但C型客戶若沒看到條件與依據，通常不會只憑結論接受。",
    "你能幫他抓住核心，不會讓談話一直困在枝微末節。",
    "太快下結論、跳過細節，或嫌他問題太多，容易讓他懷疑你準備不足。",
    "先說結論，再補充條件、依據與資料來源，讓他逐項確認。",
    "結論先給您，接下來我再把條件與依據逐項說明。"
  ],

  ID: [
    "你想先把氣氛暖起來，他只想快點聽到重點。",
    "I型業務喜歡用故事與互動鋪陳，但D型客戶若太久聽不到結論，很快就會失去耐性。",
    "你能讓對話有活力，也比較容易降低D型客戶一開始的距離感。",
    "聊太久、情緒太滿，到很後面才說出重點。",
    "收斂鋪陳，先簡潔說明結果與效益；他想知道的細節，再依問題補充。",
    "我先用一句話說明這對您的實際價值，再補充原因。"
  ],

  II: [
    "氣氛很好，話題很多，最後卻沒有人記得下一步。",
    "雙方都喜歡分享與延伸話題，對話容易很熱鬧，卻沒有整理出清楚重點。",
    "很容易快速拉近距離，讓客戶願意分享真正的想法。",
    "只顧著說自己的故事，或承諾很多，卻沒有把重要內容講清楚。",
    "保留輕鬆氣氛，但要適時整理重點，把談過的內容變成明確共識。",
    "我們剛才談得很有共識，我幫您把接下來要確認的事情整理一下。"
  ],

  IS: [
    "你若過度熱情，他反而可能把不同意藏起來。",
    "I型業務容易把S型客戶的禮貌與配合，當成已經認同或有意願。",
    "你的親切與熱情，能幫助他放下戒心，比較願意開口。",
    "一直說、一直鼓勵、一直往下帶，沒有留空間讓他說出真正顧慮。",
    "把熱情放柔，降低速度，多停下來確認他真正的想法。",
    "您不用配合我的想法，我比較想知道，哪一部分讓您還不放心？"
  ],

  IC: [
    "你想先讓他有感；他想先確認你說的有沒有根據。",
    "I型業務重氣氛與感染力，但C型客戶更在意說法是否準確、資料能不能查證。",
    "你能讓理性的內容不那麼生硬，也比較容易拉近彼此距離。",
    "說得很精彩，卻沒有清楚條件、數據或正式依據。",
    "面對C型客戶，要比平常更有條理；數據要準確，說過的內容也要能查證。",
    "我先讓您了解整體概念，再把相關條件與正式資料交給您核對。"
  ],

  SD: [
    "你怕太直接；他卻只想快點聽到結論。",
    "S型業務習慣先照顧氣氛，但前置寒暄過久，D型客戶容易覺得重點遲遲沒有出現。",
    "你的穩定與耐心，能讓D型客戶感受到你做事可靠。",
    "太客氣、語氣太保留，不敢清楚提出自己的建議。",
    "語氣可以溫和，但立場要清楚；縮短鋪陳，先說結論與建議。",
    "依照您的需求，我直接建議先看這個方向，原因有兩點。"
  ],

  SI: [
    "你習慣溫和回應，他卻需要更明顯的互動與熱度。",
    "S型業務雖然很會聽，但若反應太含蓄，I型客戶可能覺得你沒有跟上他的情緒與話題。",
    "你願意耐心傾聽，能讓他充分表達，也容易讓他感到被重視。",
    "只有聽與點頭，卻沒有明確回應、讚美或接住他的話題。",
    "讓他充分表達，也要把回應說出來；氣氛建立後，再自然把話題帶回重點。",
    "您剛才說的這一點很重要，我感覺這很符合您真正想要的方向。"
  ],

  SS: [
    "你想穩健推進，他也需要足夠安心才會跟上。",
    "雙方都重視和諧，不喜歡帶給對方壓力，對話容易停在理解，卻沒有形成方向。",
    "信任感穩定，客戶容易感受到被尊重與陪伴。",
    "一直維持客氣與保留，最後沒有把重點或下一步說明白。",
    "維持舒服的節奏，但仍要協助整理想法，確認一個簡單而具體的下一步。",
    "我們今天不需要決定全部，先把您最在意的部分確認清楚，好嗎？"
  ],

  SC: [
    "你願意慢慢陪他，但不能只陪他一直研究下去。",
    "S型業務有耐心回答問題，但若客戶問什麼就補什麼，內容容易愈談愈多，沒有重點。",
    "你願意慢慢說明，也能讓C型客戶放心提出細節問題。",
    "只顧著回答每一個問題，卻沒有幫他整理哪些事情最重要。",
    "資料可以完整提供，但要幫他排出優先順序與判斷標準。",
    "資料我會完整提供，我們也可以先整理出您最重要的三個判斷條件。"
  ],

  CD: [
    "你想把資料講完整，他只想先知道答案。",
    "C型業務為了把內容說清楚，容易從背景與細節開始，但D型客戶通常沒有耐性等到最後。",
    "你的內容可靠，能讓建議有清楚的依據。",
    "一開始就講太多資料與細節，讓對方覺得你沒有明確答案。",
    "先講答案與重點，細節他有興趣再補；需要多說時，先問他想不想聽。",
    "結論是這個方向比較符合您的需求，依據我再用兩點補充。"
  ],

  CI: [
    "你忙著證明自己專業，他卻還沒有對你產生感覺。",
    "C型業務習慣先講資料與邏輯，但I型客戶若還沒覺得有趣、有共鳴，注意力很容易離開。",
    "你能讓他的期待不只停在感覺，也有可信的資料支撐。",
    "一開始就講數字、條款與細節，內容太硬，讓他很難投入。",
    "I型客戶不喜歡一開始就聽硬梆梆的數字；先用故事或情境讓他有感，再補上必要資料。",
    "我先用一個實際情境讓您感受差異，再把相關資料說清楚。"
  ],

  CS: [
    "你重視制度完整，他更想感受到這份安排有溫度。",
    "C型業務一開始就談制度、流程與資料，S型客戶可能聽懂了，卻還沒有安心。",
    "你能用完整制度與流程，幫助他降低對未知的擔心。",
    "只講規定與流程，沒有說明這些安排對他和家人有什麼幫助。",
    "先用自然互動讓他放鬆，再慢慢說明流程、服務方式與相關依據。",
    "這套流程的目的，是讓您每個階段都知道有人負責、事情如何處理。"
  ],

  CC: [
    "雙方都很專業，也可能一起研究到沒有盡頭。",
    "雙方都習慣依自己的標準判斷，容易把討論變成誰的觀點更正確。",
    "彼此都重視數據、邏輯與條理，容易快速進入深入討論。",
    "和客戶比誰更懂細節，或不斷延伸例外問題，讓內容愈談愈複雜。",
    "先確認最重要的判斷條件，再依條件逐項討論，避免陷入細節攻防。",
    "我們先確認您最重視的三個條件，再依這三項逐一比較。"
  ]
};

const adjustments = {
  D: { speed: "加快、精簡、不要重複。", order: "先結論，再效益，最後補充細節。", expression: "直接、明確、有選項。", rhythm: "不要拖延，適時讓他做選擇。" },
  I: { speed: "保留互動與情緒回應。", order: "先畫面與感受，再帶入內容與行動。", expression: "有回應、有畫面、有互動。", rhythm: "不要只聊氣氛，要幫忙整理共識。" },
  S: { speed: "放慢、留白、不要連續追問。", order: "先安心與關係，再說明內容及下一步。", expression: "溫和、具體、低壓。", rhythm: "不要施壓，但仍要提出小幅度下一步。" },
  C: { speed: "穩定、精確，給對方確認時間。", order: "先架構，再依據、條件與流程。", expression: "準確、完整、可查證。", rhythm: "不要只丟資料，要協助建立判斷標準。" }
};

const phrases = {
  D: [
    "我先說重點，您有問題再問我。",
    "您現在最在意的是效果、費用，還是時間？",
    "目前有兩個方向，您比較想先看哪一個？"
  ],
  I: [
    "我說個真實的例子，您聽聽有沒有共鳴。",
    "剛才幾個部分，哪一個最讓您有感覺？",
    "我們先把您最喜歡的方向定下來，其他的再說。"
  ],
  S: [
    "我們不用急，先把您在意的地方一項一項說清楚。",
    "您現在最不放心的是哪一塊？家人的想法、後續安排，還是別的？",
    "今天不用定，先把您最卡的地方說出來就好。"
  ],
  C: [
    "我先告訴您整個流程是怎麼走的，您確認沒問題再往下談。",
    "您目前最想先確認的是費用、條款、流程，還是風險？",
    "我們先依您最在意的幾個條件逐項比較，再決定適不適合。"
  ]
};

const phraseLabels = ["開場怎麼說", "怎麼問出顧慮", "怎麼推進一步"];

const pitfalls = {
  D: { accept: "簡潔、直接、有結論、有選擇權的說明。", wrong: ["背景鋪陳太久", "重複說明同一件事", "一直問「您覺得呢」卻不給明確方向", "當面挑戰客戶判斷", "用過度熱情取代實際效益"], swap: "我先說結論，再補充您最關心的部分。", checks: ["結論說了嗎？", "實際效益說清楚了嗎？", "選擇權給了嗎？", "有沒有說得太久？", "是否保留客戶主導感？"], quote: "D型客戶可能接話或打斷，不一定是不想聽；常見原因是重點還沒出現。" },
  I: { accept: "有互動、有畫面、有溫度，也能讓客戶參與的說明。", wrong: ["一開始便進入大量數字與條款", "對客戶的分享沒有反應", "氣氛很好，卻沒有整理下一步", "使用制式、冷淡或只有單向輸出的說明", "為了迎合氣氛而做出過度承諾"], swap: "您剛才提到的那個感受很重要，我們就從那裡開始談。", checks: ["客戶感受有被回應嗎？", "內容有畫面感嗎？", "是否讓客戶參與？", "重點是否已整理？", "下一步是否說清楚？"], quote: "I型客戶重視互動與感受；氣氛打開後，仍需要清楚整理下一步。" },
  S: { accept: "溫和、具體、有陪伴感，而且不要求客戶立即表態的說明。", wrong: ["連續催促決定", "把沉默或點頭當成同意", "用別人的決定或成功案例施壓", "突然改變方向，沒有預留心理準備", "因為怕給壓力，最後完全沒有提出下一步"], swap: "您不用急著回答，我想先知道，目前還有哪一部分讓您不安心？", checks: ["顧慮問出來了嗎？", "客戶真的同意，還是只是保持禮貌？", "安心感夠了嗎？", "是否給予思考空間？", "有沒有溫和提出下一步？"], quote: "S型客戶好說話，不等於已經被說服；安心感夠了，決定才會往前。" },
  C: { accept: "精確、有架構、有正式依據，並且能查證及比較的資訊。", wrong: ["使用模糊承諾", "前後說法不一致", "只說「相信我」卻沒有正式依據", "資料很多，但沒有整理判斷標準", "因為問題太細而表現出急躁", "不確定時仍勉強回答"], swap: "這部分我不先用概括的方式回答，我們直接依正式資料逐項確認。", checks: ["資料來源清楚嗎？", "條件與風險說明一致嗎？", "不確定的部分是否誠實說明？", "是否協助客戶整理，而不是只丟資料？", "是否留下可回看的內容？"], quote: "C型客戶的細節問題，是信任建立的關鍵線索。" }
};

const state = { customer: null, seller: null, pitfall: "D" };
const $ = id => document.getElementById(id);

function setStep(step) {
  const panels = { customer: $("customerStep"), seller: $("sellerStep"), result: $("resultStep") };
  Object.entries(panels).forEach(([key, panel]) => {
    const active = key === step;
    panel.hidden = !active;
    panel.classList.toggle("is-active", active);
  });
  document.querySelectorAll(".progress li").forEach(item => item.classList.toggle("is-active", item.dataset.step === step));
}

function scrollToEl(id) {
  $(id).scrollIntoView({ behavior: prefersReducedMotion() ? "auto" : "smooth", block: "start" });
}

function prefersReducedMotion() {
  return window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches;
}

function renderCustomerCards() {
  $("customerCards").innerHTML = styleOrder.map(key => {
    const item = styles[key];
    const selected = state.customer === key;
    return `<button class="style-card" type="button" data-style="${key}" data-role="customer" data-tone="${key}" aria-selected="${selected}" aria-label="選擇客戶為${key}型${item.name}">
      <span class="selected-badge" aria-hidden="true">${selected ? "已選" : "點選"}</span>
      <span class="type-mark">${key}</span>
      <h4>${key}型｜${item.name}</h4>
      <p>${item.short}</p>
      <div class="quick-tags" aria-label="${key}型快速線索" style="display:flex;flex-wrap:wrap;gap:8px;margin-top:12px;">
        ${item.quickTags.map(tag => `<span style="display:inline-flex;align-items:center;min-height:30px;padding:4px 9px;border:1px solid var(--line);background:#f7f9fa;color:var(--ink);font-size:.92rem;font-weight:800;">${tag}</span>`).join("")}
      </div>
      <span class="card-cta">${selected ? "已選擇這一型" : `選擇${key}型客戶`}</span>
    </button>`;
  }).join("");
  $("customerCards").querySelectorAll("button").forEach(button => button.addEventListener("click", () => {
    state.customer = button.dataset.style;
    renderCustomerCards();
    renderSellerCards();
    setStep("seller");
    scrollToEl("decoder");
  }));
}

function renderSellerCards() {
  $("sellerCards").innerHTML = styleOrder.map(key => {
    const item = styles[key];
    const selected = state.seller === key;
    return `<button class="choice-card" type="button" data-style="${key}" data-role="seller" data-tone="${key}" aria-selected="${selected}" aria-label="選擇自己為${key}型${item.name}">
      <span class="selected-badge" aria-hidden="true">${selected ? "已選" : "點選"}</span>
      <span class="type-mark">${key}</span>
      <h4>${key}型｜${item.name}</h4>
      <p>${item.short}</p>
      <span class="card-cta">${selected ? "已選這一型" : `我是${key}型`}</span>
    </button>`;
  }).join("");
  $("sellerCards").querySelectorAll("button").forEach(button => button.addEventListener("click", () => {
    state.seller = button.dataset.style;
    renderSellerCards();
    renderResult();
    setStep("result");
    scrollToEl("decoder");
  }));
}

function renderResult() {
  const combo = combos[`${state.seller}${state.customer}`];
  const customer = styles[state.customer];
  const seller = styles[state.seller];
  $("selectionStrip").innerHTML = `<span class="selection-pill">客戶：${state.customer}型 ${customer.name}</span><span class="selection-pill">我：${state.seller}型 ${seller.name}</span>`;
  $("resultTitle").textContent = combo[0];
  const labels = ["建議如何調整", "你最容易說錯什麼", "你的自然優勢", "為什麼容易卡住"];
  const labelIndexes = [4, 3, 2, 1];
  $("resultCore").innerHTML = labels.map((label, index) => `<article class="core-card"><h4>${label}</h4><p>${combo[labelIndexes[index]]}</p></article>`).join("");
  const adj = adjustments[state.customer];
  const adjLabels = [["說話速度", adj.speed], ["資訊順序", adj.order], ["表達方式", adj.expression], ["互動節奏", adj.rhythm]];
  $("adjustGrid").innerHTML = adjLabels.map(([label, text]) => `<article class="adjust-card"><h4>${label}</h4><p>${text}</p></article>`).join("");
  renderPhrases(state.customer, combo[5]);
}

function renderPhrases(customerKey, comboPhrase) {
  const list = [...phrases[customerKey], comboPhrase];
  const labels = [...phraseLabels, "本組合參考說法"];
  $("phraseList").innerHTML = list.map((text, index) => `<article class="phrase-card"><h4>${labels[index]}</h4><p>${text}</p></article>`).join("");
}

function renderPitfallTabs() {
  $("pitfallTabs").innerHTML = styleOrder.map(key => `<button type="button" data-style="${key}" data-tone="${key}" role="tab" aria-selected="${state.pitfall === key}" aria-controls="pitfallContent">${key}型客戶｜${styles[key].name}</button>`).join("");
  $("pitfallTabs").querySelectorAll("button").forEach(button => button.addEventListener("click", () => {
    state.pitfall = button.dataset.style;
    renderPitfalls();
  }));
}

function renderPitfalls() {
  renderPitfallTabs();
  const key = state.pitfall;
  const item = pitfalls[key];
  $("pitfallContent").setAttribute("data-tone", key);
  $("pitfallContent").innerHTML = `<div class="pitfall-heading"><p class="eyebrow">目前查看：${key}型客戶｜${styles[key].name}</p><h3>${key}型客戶的接收雷區</h3><div class="pitfall-alert"><span>重點提醒</span><p>${item.quote}</p></div></div>
    <div class="pitfall-grid">
      <article class="pitfall-card"><h4>客戶容易接受</h4><p>${item.accept}</p></article>
      <article class="pitfall-card"><h4>建議表達方式</h4><p>${item.swap}</p></article>
      <article class="pitfall-card"><h4>常見踩雷說法</h4><ul>${item.wrong.map(x => `<li>${x}</li>`).join("")}</ul></article>
      <article class="pitfall-card"><h4>開口前確認</h4><ul>${item.checks.map(x => `<li>${x}</li>`).join("")}</ul></article>
    </div>
    <p class="reminder-quote">同一句話，換成客戶接得住的頻道，理解才會靠近。</p>`;
}


$("backToCustomer").addEventListener("click", () => { setStep("customer"); scrollToEl("decoder"); });
$("backToSeller").addEventListener("click", () => { setStep("seller"); scrollToEl("decoder"); });
$("resetFlow").addEventListener("click", () => {
  state.customer = null;
  state.seller = null;
  renderCustomerCards();
  renderSellerCards();
  setStep("customer");
  scrollToEl("decoder");
});

renderCustomerCards();
renderSellerCards();
renderPitfalls();
setStep("customer");

























