function LearningRoadmap() {
  const milestones = [
    {
      stage: '新手起步',
      goal: '完成 3 个 Python 小练习',
      badge: '代码新星',
    },
    {
      stage: '实验进阶',
      goal: '完成 2 个 AI 实验并提交记录',
      badge: '实验探索者',
    },
    {
      stage: '项目发布',
      goal: '完成 1 个综合项目并公开展示',
      badge: 'AI 创作达人',
    },
  ];

  return (
    <section className="py-12">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="rounded-3xl border border-emerald-200 bg-emerald-50 p-6 sm:p-8">
          <h2 className="text-2xl font-bold text-slate-800 sm:text-3xl">学习成长路线图</h2>
          <p className="mt-3 text-slate-700">你可以按阶段升级。每完成一个阶段，就能获得一个徽章和一份可展示的作品。</p>

          <div className="mt-6 grid gap-4 md:grid-cols-3">
            {milestones.map((item) => (
              <article key={item.stage} className="rounded-2xl bg-white p-5 shadow-sm">
                <h3 className="text-lg font-bold text-emerald-700">{item.stage}</h3>
                <p className="mt-2 text-slate-700">目标：{item.goal}</p>
                <p className="mt-2 text-sm font-medium text-slate-500">徽章：{item.badge}</p>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
