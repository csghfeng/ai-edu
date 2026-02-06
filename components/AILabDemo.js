function AILabDemo() {
  const [text, setText] = React.useState('我喜欢机器人和太空探索');

  const projectMap = [
    { keyword: '机器人', project: '智能避障小车', reason: '你对机器人感兴趣，适合先学传感器与控制逻辑。' },
    { keyword: '太空', project: '火星任务数据看板', reason: '你喜欢太空，适合做数据可视化项目。' },
    { keyword: '环保', project: '垃圾分类识别器', reason: '你关注环保，适合做图像分类入门。' },
    { keyword: '音乐', project: 'AI 节奏推荐器', reason: '你喜欢音乐，适合做规则推荐实验。' },
    { keyword: '运动', project: '运动打卡分析器', reason: '你关注运动，适合做统计与图表分析。' },
    { keyword: '编程', project: 'Python 闯关游戏', reason: '你喜欢编程，适合进入函数与模块挑战。' },
  ];

  const matched = projectMap.filter((item) => text.includes(item.keyword));
  const topProject = matched[0];

  return (
    <section id="ai-lab" className="bg-white py-12">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="rounded-3xl border border-sky-200 bg-sky-50 p-6 shadow-sm sm:p-8">
          <h2 className="text-2xl font-bold text-slate-800 sm:text-3xl">AI 实验室 Demo：兴趣关键词识别</h2>
          <p className="mt-3 text-slate-600">输入一句话，看看 AI 能识别出哪些兴趣关键词，并推荐一个适合你的项目方向。</p>

          <div className="mt-6 grid gap-6 md:grid-cols-2">
            <div>
              <label htmlFor="interest-input" className="mb-2 block text-sm font-semibold text-slate-700">
                输入你的兴趣句子
              </label>
              <textarea
                id="interest-input"
                className="h-32 w-full rounded-xl border border-slate-300 p-3 focus:border-indigo-500 focus:outline-none"
                value={text}
                onChange={(e) => setText(e.target.value)}
              />
            </div>

            <div className="rounded-xl bg-white p-4">
              <h3 className="text-lg font-semibold text-slate-800">识别结果与推荐</h3>
              {matched.length > 0 ? (
                <>
                  <ul className="mt-3 flex flex-wrap gap-2">
                    {matched.map((item) => (
                      <li key={item.keyword} className="rounded-full bg-indigo-100 px-3 py-1 text-sm font-medium text-indigo-700">
                        {item.keyword}
                      </li>
                    ))}
                  </ul>
                  <div className="mt-4 rounded-lg border border-indigo-200 bg-indigo-50 p-3">
                    <p className="text-sm font-semibold text-indigo-700">推荐项目：{topProject.project}</p>
                    <p className="mt-1 text-sm text-slate-700">推荐理由：{topProject.reason}</p>
                  </div>
                </>
              ) : (
                <p className="mt-3 text-sm text-slate-500">暂未识别到关键词，试试输入“机器人、音乐、编程”等词语。</p>
              )}
              <p className="mt-4 text-xs text-slate-500">提示：真实 AI 会学习大量数据。这个 Demo 是教学版，重点是理解流程。</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
