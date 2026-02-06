function HeroSection({ quickLinks }) {
  return (
    <header className="bg-gradient-to-r from-indigo-600 via-purple-600 to-sky-500 text-white">
      <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:px-8">
        <p className="inline-flex items-center rounded-full bg-white/20 px-4 py-1 text-sm font-medium">
          AI EDU · 中小学人工智能成长平台
        </p>
        <h1 className="mt-6 text-3xl font-extrabold leading-tight sm:text-5xl">用 AI 与 Python，开启你的未来创造力</h1>
        <p className="mt-5 max-w-3xl text-base text-indigo-100 sm:text-lg">
          面向小学、初中、高中打造分级课程。每节课都采用“讲解 + 实验 + 任务闯关”模式，帮助你从好奇到会做，再到能独立完成项目。
        </p>

        <nav className="mt-8 flex flex-wrap gap-3" aria-label="首页快捷入口">
          {quickLinks.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="rounded-full border border-white/50 bg-white/10 px-4 py-2 text-sm font-semibold transition hover:bg-white/20"
            >
              {item.label}
            </a>
          ))}
        </nav>
      </div>
    </header>
  );
}
