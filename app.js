// Kürek Takımı – uygulama mantığı

document.addEventListener('DOMContentLoaded', () => {
  highlightUpcomingRace();
});

/**
 * En yakın yarışma kartını vurgular.
 */
function highlightUpcomingRace() {
  const kartlar = document.querySelectorAll('.yarisma-kart');
  if (kartlar.length > 0) {
    kartlar[0].style.borderLeft = '4px solid #1565c0';
  }
}
