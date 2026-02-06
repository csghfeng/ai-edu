function TeachingMode() {
  const steps = [
    {
      title: '1. 讲解',
      description: '老师用生活案例解释知识点，例如“AI 如何识别猫和狗”。帮助学生先理解为什么学。',
    },
    {
      title: '2. 实验',
      description: '在 AI 实验室完成可操作实验。学生亲手调整参数、观察结果，建立直观认知。',
    },
    {
      title: '3. 任务闯关',
      description: '每单元都有挑战任务，从基础关到进阶关。完成后获得徽章，激发学习动力。',
    },
  ];

  return (
    <section className="bg-slate-900 py-12 text-white">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl font-bold sm:text-3xl">教学模式：讲解 + 实验 + 任务闯关</h2>
        <p className="mt-3 text-slate-300">每一节课都遵循“学得懂、做得出、有成就”的路径，让 AI 学习更有趣、更有效。</p>

        <div className="mt-8 grid gap-4 md:grid-cols-3">
          {steps.map((step) => (
            <article key={step.title} className="rounded-2xl border border-white/20 bg-white/5 p-5">
              <h3 className="text-lg font-semibold text-sky-300">{step.title}</h3>
              <p className="mt-2 text-slate-200">{step.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
