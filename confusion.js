let confusionGroup='milestones',confusionIndex=0,confusionRevealed=0;
const confusionSources=new Map([
  ...digestBank,
  ...CURRENT_AFFAIRS_CARDS,
  ...MAJOR_TOPIC_CARDS,
  ...SPRINT_DIGEST.cards
].map(item=>[item.id,item]));
function confusionDeck(){return CONFUSION_CARDS.filter(card=>card.group===confusionGroup)}
function confusionSourceLabel(card){
  const labels=card.sourceIds.map(id=>{
    const item=confusionSources.get(id);
    if(!item)return '';
    if(item.page)return `政治理论清单第${item.page}页`;
    if(item.digestPage)return `${item.volume}清单第${item.digestPage}页`;
    if(item.sprintSupplement)return `冲刺清单第${item.digestPage}页`;
    return item.volume||'';
  }).filter(Boolean);
  return [...new Set(labels)].slice(0,2).join(' · ');
}
function renderConfusion(){
  const deck=confusionDeck(),card=deck[confusionIndex],group=CONFUSION_GROUPS.find(item=>item.id===confusionGroup);
  if(!card)return;
  $('#confusionGroups').innerHTML=CONFUSION_GROUPS.map(item=>`<button type="button" data-confusion-group="${item.id}" class="${item.id===confusionGroup?'selected':''}">${item.name} <b>${CONFUSION_CARDS.filter(card=>card.group===item.id).length}</b></button>`).join('');
  $$('[data-confusion-group]').forEach(button=>button.onclick=()=>{confusionGroup=button.dataset.confusionGroup;confusionIndex=0;confusionRevealed=0;renderConfusion()});
  $('#confusionProgress').textContent=`${confusionIndex+1} / ${deck.length}`;
  $('#confusionKind').textContent=group.name;
  $('#confusionTitle').textContent=card.title;
  $('#confusionCue').textContent=card.cue;
  $('#confusionRows').innerHTML=card.rows.map(([label,answer],index)=>`<div class="confusion-row ${index<confusionRevealed?'revealed':''}"><b>${escapeHTML(label)}</b><span class="confusion-answer" aria-hidden="${index>=confusionRevealed}">${escapeHTML(answer)}</span></div>`).join('');
  $('#confusionTrap').textContent=card.trap;
  $('#confusionTrap').classList.toggle('revealed',confusionRevealed>=card.rows.length);
  $('#confusionSource').textContent=confusionSourceLabel(card);
  $('#confusionSourceLink').href=card.sourceUrl;
  $('#confusionSourceLink').textContent=card.sourceUrl2?'原文① ↗':'核对原文 ↗';
  $('#confusionSourceLink2').classList.toggle('hidden',!card.sourceUrl2);
  if(card.sourceUrl2)$('#confusionSourceLink2').href=card.sourceUrl2;
  $('#confusionHint').textContent=confusionRevealed<card.rows.length?`点卡片，显示第 ${confusionRevealed+1} 项答案`:'再点卡片，进入下一组';
  $('#confusionPrev').disabled=confusionIndex===0;
  $('#confusionNext').disabled=confusionIndex===deck.length-1;
}
function openConfusion(){confusionGroup='milestones';confusionIndex=0;confusionRevealed=0;renderConfusion();show('confusion')}
function stepConfusion(){
  const deck=confusionDeck(),card=deck[confusionIndex];
  if(confusionRevealed<card.rows.length){confusionRevealed++;renderConfusion()}
  else if(confusionIndex<deck.length-1){confusionIndex++;confusionRevealed=0;renderConfusion()}
}
$('#confusionStep').onclick=openConfusion;
$('#confusionBack').onclick=()=>{updatePlan();show('home')};
$('#confusionPrev').onclick=()=>{if(confusionIndex>0){confusionIndex--;confusionRevealed=0;renderConfusion()}};
$('#confusionNext').onclick=()=>{if(confusionIndex<confusionDeck().length-1){confusionIndex++;confusionRevealed=0;renderConfusion()}};
$('#confusionCard').onclick=event=>{if(event.target.closest('a'))return;stepConfusion()};
$('#confusionCard').onkeydown=event=>{if(event.key==='Enter'||event.key===' '){event.preventDefault();stepConfusion()}};
