/* Cabecalho padrao de secao: tag </Secao/> + titulo + texto de apoio.
   Repetia igual em servicos, antes x depois, projetos e stack. */

function Titulo({ tag, id, children, apoio }) {
  return (
    <div className="max-w-2xl" data-reveal>
      <p className="tag">&lt;/{tag}/&gt;</p>
      <h2 id={id} className="mt-4 text-4xl font-bold leading-[1.05] tracking-tight md:text-5xl">
        {children}
      </h2>
      {apoio && <p className="mt-5 text-lg leading-relaxed text-muted">{apoio}</p>}
    </div>
  )
}

export default Titulo
