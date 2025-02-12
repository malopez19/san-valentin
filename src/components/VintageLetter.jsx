import { useEffect, useState } from "react";

export const VintageLetter = () => {

  // Estado para almacenar la fecha
  const [date, setDate] = useState('');

  // Usar useEffect para obtener la fecha cuando se monte el componente
  useEffect(() => {
    // Crear un objeto Date para obtener la fecha actual
    const dateToday = new Date();
    
    // Formatear la fecha en formato legible, por ejemplo: "14 de febrero de 2025"
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    const formatDate = dateToday.toLocaleDateString('es-ES', options);

    // Actualizar el estado con la fecha formateada
    setDate(formatDate);
  }, []);
    
  return (
    <div className={`max-w-2xl mx-auto p-8`}>
      <div className="relative bg-amber-100 rounded-lg p-8 md:p-12 overflow-hidden shadow-lg">
        <div className="absolute top-0 left-0 w-full h-full bg-parchment-light opacity-50 pointer-events-none"></div>
        
        <div className="relative z-10 space-y-6 animate-fade-up">
          <div className="text-right mb-8">
            <p className="font-baskerville text-ink-light italic">{date}</p>
          </div>
          <div className="space-y-4">
            <p className="font-baskerville text-ink leading-relaxed">
              Querida novia,
            </p>
            
            <p className="font-baskerville text-ink leading-relaxed">
            No hay mejor manera que expresarte lo que siento por ti que de una forma que me gusta a mí, a través de la programación.
            </p>
            <p className="font-baskerville text-ink leading-relaxed">
            Compartir este {date} contigo, me hace sentir más completo de lo que jamás imaginé. Cada momento contigo es un regalo que atesoro profundamente, y cada día que paso a tu lado me enseña lo afortunado que soy por tenerte.
            </p>
            <p className="font-baskerville text-ink leading-relaxed">
            Te amo más de lo que las palabras pueden decir, pero espero que este código logre al menos acercarse a lo que siento por ti. Gracias por hacer que mi vida sea más brillante y espero la vida nos de el privilegio de vernos muy pronto.
            </p>
          </div>
          <div className="mt-12 text-right">
            <p className="font-playfair text-ink-dark text-lg">
              Con todo mi amor,
            </p>
            <p className="font-playfair text-ink-dark text-xl mt-2">
              Mateo JL.
            </p>
          </div>
        </div>
        <div className="absolute bottom-0 right-0 w-32 h-32 bg-parchment-dark opacity-10 rounded-tl-full pointer-events-none"></div>
      </div>
    </div>
  );
};
export default VintageLetter;