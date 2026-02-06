function CourseCard({ title, badge, description, cta, highlight = false }) {
  return (
    <article
      className={`rounded-2xl border bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-lg ${
        highlight ? 'border-purple-300 ring-2 ring-purple-100' : 'border-slate-200'
      }`}
    >
      <span className="inline-block rounded-full bg-slate-100 px-3 py-1 text-xs font-semibold text-slate-700">
        {badge}
      </span>
      <h2 className="mt-4 text-2xl font-bold text-slate-800">{title}</h2>
      <p className="mt-3 text-slate-600">{description}</p>
      <button className="mt-6 rounded-xl bg-indigo-600 px-4 py-2 text-sm font-semibold text-white hover:bg-indigo-700">
        {cta}
      </button>
    </article>
  );
}
