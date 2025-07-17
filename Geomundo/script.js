function showTab(id) {
  // Oculta todas las secciones
  const sections = document.querySelectorAll('.contenido');
  sections.forEach(section => section.classList.add('hidden'));

  // Muestra la sección seleccionada si existe
  const target = document.getElementById(id);
  if (target) {
    target.classList.remove('hidden');
  } else {
    console.error("Sección no encontrada: " + id);
  }
}
