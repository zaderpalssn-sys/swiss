function goTo(n){
  document.querySelectorAll('.screen').forEach(s => s.classList.remove('active'));
  document.getElementById('screen' + n).classList.add('active');
}

function submitForm(){
  const r = document.getElementById('recipient').value;
  const n = document.getElementById('name').value;
  const a = document.getElementById('amount').value;
  const m = document.getElementById('message').value;

  document.getElementById('outRecipient').innerText = r;
  document.getElementById('outName').innerText = n;
  document.getElementById('outAmount').innerText = a;
  document.getElementById('outMessage').innerText = m;

  const now = new Date();
  document.getElementById('datetime').innerText =
    now.toLocaleDateString('sv-SE', { day:'2-digit', month:'short', year:'numeric'}) +
    ", kl " +
    now.toLocaleTimeString('sv-SE', { hour:'2-digit', minute:'2-digit'});

  goTo(3);
}
