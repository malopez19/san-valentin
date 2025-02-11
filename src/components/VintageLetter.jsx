export const VintageLetter = () => {
    
  return (
    <div className={`max-w-2xl mx-auto p-8`}>
      <div className="relative bg-amber-100 rounded-lg p-8 md:p-12 overflow-hidden shadow-lg">
        <div className="absolute top-0 left-0 w-full h-full bg-parchment-light opacity-50 pointer-events-none"></div>
        
        <div className="relative z-10 space-y-6 animate-fade-up">
          <div className="text-right mb-8">
            <p className="font-baskerville text-ink-light italic">14 de febrero, 2025</p>
          </div>
          <div className="space-y-4">
            <p className="font-baskerville text-ink leading-relaxed">
              Querido amigo,
            </p>
            
            <p className="font-baskerville text-ink leading-relaxed">
              Espero que esta carta te encuentre bien. Las palabras fluyen como tinta sobre este pergamino, llevando consigo los más profundos sentimientos y pensamientos que deseo compartir contigo.
            </p>
            <p className="font-baskerville text-ink leading-relaxed">
              El tiempo pasa como las hojas que caen en otoño, y cada día que transcurre me recuerda la importancia de mantener viva nuestra correspondencia. Las historias que compartimos son como tesoros que guardo celosamente en mi memoria.
            </p>
          </div>
          <div className="mt-12 text-right">
            <p className="font-playfair text-ink-dark text-lg">
              Te ama,
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