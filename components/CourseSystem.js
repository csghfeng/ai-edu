function CourseSystem() {
  const grades = [
    {
      level: '小学阶段（10-12岁）',
      focus: 'AI 启蒙 + Python 入门',
      outline: [
        '认识 AI：语音助手、图像识别、智能交通等生活应用',
        'Python 基础：变量、分支、循环、简单函数',
        '趣味项目：猜数字游戏、智能问答小助手',
      ],
    },
    {
      level: '初中阶段（13-15岁）',
      focus: 'AI 理解 + Python 进阶',
      outline: [
        '数据思维：数据采集、清洗与可视化',
        '机器学习入门：分类、回归、模型训练概念',
        '综合项目：校园行为数据分析、图片分类器',
      ],
    },
    {
      level: '高中阶段（15-18岁）',
      focus: 'AI 应用 + 项目实战',
      outline: [
        '神经网络基础：感知机、深度学习基本流程',
        'AI 工具实战：模型调用、提示词设计、自动化流程',
        '升学项目：研究型课题与作品集打造',
      ],
    },
  ];

  return (
    <section className="py-12">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl font-bold text-slate-800 sm:text-3xl">AI + Python 分级课程体系</h2>
        <p className="mt-3 text-slate-600">覆盖小学、初中、高中三阶段，循序渐进学习，让每位同学都能找到适合自己的成长路径。</p>

        <div className="mt-8 grid gap-6 lg:grid-cols-3">
          {grades.map((item) => (
            <article key={item.level} className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
              <h3 className="text-xl font-bold text-indigo-700">{item.level}</h3>
              <p className="mt-2 font-medium text-slate-700">核心方向：{item.focus}</p>
              <ul className="mt-4 list-disc space-y-2 pl-5 text-slate-600">
                {item.outline.map((point) => (
                  <li key={point}>{point}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
