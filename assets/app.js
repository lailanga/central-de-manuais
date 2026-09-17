/* Manuais — script compartilhado (tema + busca no índice) */
(function () {
  // ---- tema claro/escuro ----
  var KEY = 'manuais-tema';
  var salvo = null;
  try { salvo = localStorage.getItem(KEY); } catch (e) { salvo = null; }
  if (salvo === 'dark' || salvo === 'light') {
    document.documentElement.setAttribute('data-theme', salvo);
  }

  function atualizaRotulo(btn) {
    var atual = document.documentElement.getAttribute('data-theme');
    if (!atual) {
      var escuroSistema = window.matchMedia &&
        window.matchMedia('(prefers-color-scheme: dark)').matches;
      atual = escuroSistema ? 'dark' : 'light';
    }
    btn.textContent = atual === 'dark' ? 'Tema claro' : 'Tema escuro';
  }

  document.addEventListener('DOMContentLoaded', function () {
    var btn = document.querySelector('.theme-btn');
    if (btn) {
      atualizaRotulo(btn);
      btn.addEventListener('click', function () {
        var atual = document.documentElement.getAttribute('data-theme');
        if (!atual) {
          var escuroSistema = window.matchMedia &&
            window.matchMedia('(prefers-color-scheme: dark)').matches;
          atual = escuroSistema ? 'dark' : 'light';
        }
        var novo = atual === 'dark' ? 'light' : 'dark';
        document.documentElement.setAttribute('data-theme', novo);
        try { localStorage.setItem(KEY, novo); } catch (e) {}
        atualizaRotulo(btn);
      });
    }

    // ---- busca no índice ----
    var campo = document.querySelector('.search');
    if (!campo) return;
    campo.addEventListener('input', function () {
      var termo = campo.value.trim().toLowerCase();
      var achou = false;

      document.querySelectorAll('[data-sistema]').forEach(function (bloco) {
        var visiveis = 0;
        bloco.querySelectorAll('.manual').forEach(function (card) {
          var texto = card.textContent.toLowerCase() + ' ' +
                      (card.getAttribute('data-tags') || '').toLowerCase();
          var ok = !termo || texto.indexOf(termo) !== -1;
          card.style.display = ok ? '' : 'none';
          if (ok) visiveis++;
        });
        bloco.style.display = visiveis ? '' : 'none';
        if (visiveis) achou = true;
      });

      var vazio = document.querySelector('.vazio');
      if (vazio) vazio.style.display = achou ? 'none' : '';
    });
  });
})();
