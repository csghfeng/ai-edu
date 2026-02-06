function AILabDemo() {
  const [text, setText] = React.useState('我喜欢机器人和太空探索');
  const keywords = ['机器人', '太空', '环保', '音乐', '运动', '编程'];

  const matchedKeywords = keywords.filter((word) => text.includes(word));

  return (
    <section className="bg-white py-12">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="rounded-3xl border border-sky-200 bg-sky-50 p-6 shadow-sm sm:p-8">
          <h2 className="text-2xl font-bold text-slate-800 sm:text-3xl">AI 实验室 Demo：兴趣关键词识别</h2>
          <p className="mt-3 text-slate-600">
            输入一句话，看看 AI 能识别出哪些兴趣关键词。这个 Demo 模拟了“文本分类”在学习推荐中的应用。
          </p>

          <div className="mt-6 grid gap-6 md:grid-cols-2">
            <div>
              <label className="mb-2 block text-sm font-semibold text-slate-700">输入你的兴趣句子</label>
              <textarea
                className="h-32 w-full rounded-xl border border-slate-300 p-3 focus:border-indigo-500 focus:outline-none"
                value={text}
                onChange={(e) => setText(e.target.value)}
              />
            </div>

            <div className="rounded-xl bg-white p-4">
              <h3 className="text-lg font-semibold text-slate-800">识别结果</h3>
              {matchedKeywords.length > 0 ? (
                <ul className="mt-3 flex flex-wrap gap-2">
                  {matchedKeywords.map((item) => (
                    <li key={item} className="rounded-full bg-indigo-100 px-3 py-1 text-sm font-medium text-indigo-700">
                      {item}
                    </li>
                  ))}
                </ul>
              ) : (
                <p className="mt-3 text-sm text-slate-500">暂未识别到关键词，试试输入“机器人、音乐、编程”等词语。</p>
              )}
              <p className="mt-4 text-xs text-slate-500">
                提示：真实 AI 模型会使用更多数据和算法，这里是简化版教学示例，便于理解原理。
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
